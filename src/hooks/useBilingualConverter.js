import { useMemo, useCallback } from 'react';
import { translateText, translateList, translateNewsArticle, pickLang, isArabicText } from '../utils/translator';

/**
 * سكريبت وهوك التحويل اللغوي الثنائي الفوري لمنع التداخلات اللغوية
 * Instant Bi-directional Localization Script & Hook
 */
export function useBilingualConverter(lang = 'ar') {
  const isAr = lang === 'ar';

  const t = useCallback(
    (text) => {
      return translateText(text, lang);
    },
    [lang],
  );

  const tList = useCallback(
    (list) => {
      return translateList(list, lang);
    },
    [lang],
  );

  const tArticle = useCallback(
    (article) => {
      return translateNewsArticle(article, lang);
    },
    [lang],
  );

  const pick = useCallback(
    (obj, fallback = '') => {
      return pickLang(obj, lang, fallback);
    },
    [lang],
  );

  const direction = isAr ? 'rtl' : 'ltr';

  return useMemo(
    () => ({
      lang,
      isAr,
      direction,
      t,
      tList,
      tArticle,
      pick,
      isArabicText,
    }),
    [lang, isAr, direction, t, tList, tArticle, pick],
  );
}
