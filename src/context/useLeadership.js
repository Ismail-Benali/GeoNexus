import { useContext } from 'react';
import { LeadershipContext } from './leadershipContextInstance';

export function useLeadership() {
  const ctx = useContext(LeadershipContext);
  if (!ctx) {
    throw new Error('useLeadership must be used within a LeadershipProvider');
  }
  return ctx;
}
