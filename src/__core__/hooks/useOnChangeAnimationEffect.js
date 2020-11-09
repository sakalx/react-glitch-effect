import { useLayoutEffect } from 'react';

export default (ref, { iterationCount, duration = 0 }) => {
  useLayoutEffect(() => {
    ref.current?.style.setProperty('--iteration-count', iterationCount);
  }, [iterationCount]);

  useLayoutEffect(() => {
    const durationMs = `${duration}ms`;
    ref.current?.style.setProperty('--duration', durationMs);
  }, [duration]);
};
