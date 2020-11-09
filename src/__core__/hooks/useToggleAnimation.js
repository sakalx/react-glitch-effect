import { useCallback } from 'react';

export default ({ ref, id }) => {
  const add = useCallback(() => {
    ref.current?.setAttribute('id', id);
    return ref;
  }, []);

  const remove = useCallback(() => {
    ref.current?.removeAttribute('id');
    return ref;
  }, []);

  return ({ add, remove });
};
