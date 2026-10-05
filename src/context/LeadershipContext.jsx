import { useEffect, useState, useMemo, useCallback } from 'react';
import { LeadershipContext } from './leadershipContextInstance';
import { LEADERS_REGISTRY, getDefaultLeader } from '../data/leadersRegistry';
import {
  fetchWikipediaLeaderData,
  getImmediateWikipediaLeader,
  WIKIPEDIA_LEADER_PAGES,
} from '../services/wikipediaService';

export function LeadershipProvider({ children }) {
  // حالة البيانات الحية المجلوبة تلقائياً من ويكيبيديا
  const [wikiLeaders, setWikiLeaders] = useState({});

  // تنظيف أي تعديلات يدوية قديمة كان المستخدم قد حفظها سابقاً
  useEffect(() => {
    try {
      localStorage.removeItem('geonexus_custom_leaders_v1');
    } catch {
      // ignore
    }
  }, []);

  // دالة جلب وتحديث بيانات ويكيبيديا التلقائية في الخلفية
  const syncWithWikipedia = useCallback((countryId, leaderNameFallback) => {
    if (!countryId) return;
    const cid = countryId.toLowerCase();

    // إذا كانت الدولة مجهولة أو لم تُفحص بعد، نجري الفحص في الخلفية
    fetchWikipediaLeaderData(cid, leaderNameFallback).then((res) => {
      if (res && res.photo) {
        setWikiLeaders((prev) => {
          if (prev[cid]?.photo === res.photo && prev[cid]?.wikiUrl === res.wikiUrl) {
            return prev;
          }
          return {
            ...prev,
            [cid]: res,
          };
        });
      }
    });
  }, []);

  // استرجاع الحاكم أو الملك الرسمي المعتمد من ويكيبيديا والسجلات الدولية
  const getLeader = useCallback(
    (country) => {
      if (!country?.id) return null;
      const cid = country.id.toLowerCase();

      // 1. فحص السجل التوثيقي المعتمد
      const reg = LEADERS_REGISTRY[cid];
      const baseLeader = reg?.current || getDefaultLeader(cid);

      // 2. فحص بيانات ويكيبيديا الحية أو الفورية المعتمدة
      const liveWiki = wikiLeaders[cid] || getImmediateWikipediaLeader(cid);

      // تشغيل التزامن في الخلفية تلقائياً لضمان حداثة البيانات
      syncWithWikipedia(cid, typeof country.leader === 'string' ? country.leader : baseLeader.nameEn);

      // 3. دمج البيانات الرسمية بالكامل
      const finalPhoto = liveWiki?.photo || baseLeader.photo || WIKIPEDIA_LEADER_PAGES[cid]?.fallbackThumb || null;
      const finalWikiUrl = liveWiki?.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(WIKIPEDIA_LEADER_PAGES[cid]?.title || baseLeader.nameEn)}`;

      const leaderName = typeof country.leader === 'string' ? country.leader : baseLeader.nameAr;
      const leaderTitle = typeof country.leaderTitle === 'string' ? country.leaderTitle : baseLeader.titleAr;

      return {
        id: cid,
        nameAr: baseLeader.nameAr || leaderName,
        nameEn: baseLeader.nameEn || leaderName,
        titleAr: baseLeader.titleAr || leaderTitle,
        titleEn: baseLeader.titleEn || leaderTitle,
        officeAr: baseLeader.officeAr || leaderTitle,
        officeEn: baseLeader.officeEn || 'Head of State',
        since: baseLeader.since || 2020,
        type: baseLeader.type || (country.regime?.includes('ملك') ? 'monarch' : 'president'),
        photo: finalPhoto,
        wikiUrl: finalWikiUrl,
        wikiExtract: liveWiki?.extract || '',
        source: 'Wikipedia / Wikimedia Commons',
        isAutoSynced: true,
        partyAr: baseLeader.partyAr || country.rulingParty || 'المؤسسات الدستورية',
        partyEn: baseLeader.partyEn || 'Ruling Entity',
        succession: reg?.succession ?? [],
      };
    },
    [wikiLeaders, syncWithWikipedia],
  );

  const value = useMemo(
    () => ({
      getLeader,
      syncWithWikipedia,
      wikiLeaders,
    }),
    [getLeader, syncWithWikipedia, wikiLeaders],
  );

  return <LeadershipContext.Provider value={value}>{children}</LeadershipContext.Provider>;
}
