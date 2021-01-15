import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();
  const timerRef = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    timerRef.current = setInterval(tick, delay);
    return () => clearInterval(timerRef.current);
  }, [delay]);

  function clear() {
    clearInterval(timerRef.current);
  }

  return { clear };
}
