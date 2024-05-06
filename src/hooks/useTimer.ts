import { useEffect, useState } from 'react';

export default function useTimer(cb: (...args: any) => void, threshold = 5) {
  const [remainingTime, setRemainingTime] = useState(threshold);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          cb();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [cb, threshold]);

  return remainingTime;
}
