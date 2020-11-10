import { useCallback } from 'react';

export default ({ ref, id }) => {
  const add = useCallback(() => {
    ref.current?.setAttribute('data-animation', id);
    return ref;
  }, []);

  const remove = useCallback(() => {
    ref.current?.removeAttribute('data-animation');
    return ref;
  }, []);

  return ({ add, remove });
};
