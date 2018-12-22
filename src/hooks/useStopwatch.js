import {useEffect, useState} from 'react';

export default function useStopwatch(duration, callback) {
  const [stop, setStop] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStop(true);
      callback && callback();
    }, duration);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return stop;
}
