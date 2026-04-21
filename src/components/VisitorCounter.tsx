import { useEffect, useState } from 'react';
import {
  getVisitorCount,
  incrementVisitorCount,
  getLastVisit,
  setLastVisit,
} from '../lib/visitor-count';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lastVisit = getLastVisit();
    const now = new Date();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    if (!lastVisit || now.getTime() - lastVisit.getTime() > thirtyDays) {
      const newCount = incrementVisitorCount();
      setCount(newCount);
      setLastVisit();
    } else {
      setCount(getVisitorCount());
    }
  }, []);

  return (
    <div className="text-center text-sm text-gray-500">
      <p>Total Unique Visitors: {count}</p>
    </div>
  );
};

export default VisitorCounter;
