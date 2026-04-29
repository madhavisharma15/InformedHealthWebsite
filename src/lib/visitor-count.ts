const VISITOR_COUNT_KEY = 'visitorCount';
const LAST_VISIT_KEY = 'lastVisit';

export const getVisitorCount = (): number => {
  const count = localStorage.getItem(VISITOR_COUNT_KEY);
  return count ? parseInt(count, 10) : 0;
};

export const incrementVisitorCount = (): number => {
  const currentCount = getVisitorCount();
  const newCount = currentCount + 1;
  localStorage.setItem(VISITOR_COUNT_KEY, newCount.toString());
  return newCount;
};

export const getLastVisit = (): Date | null => {
  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  return lastVisit ? new Date(lastVisit) : null;
};

export const setLastVisit = (): void => {
  localStorage.setItem(LAST_VISIT_KEY, new Date().toISOString());
};
