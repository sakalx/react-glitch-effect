import { useCallback } from 'react';

export default (ref, glitchId) => {
  const add = useCallback(() => {
    ref.current?.setAttribute('data-animation', glitchId);
    return ref;
  }, []);

  const remove = useCallback(() => {
    ref.current?.removeAttribute('data-animation');
    return ref;
  }, []);

  return ({ add, remove });
};
