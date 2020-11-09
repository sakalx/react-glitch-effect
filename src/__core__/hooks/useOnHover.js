import { useCallback } from 'react';

export default ({ callbackEvents, onHover, toggleAnimation }) => {
  const handleOnMouseEnter = useCallback(
    (e) => {
      const isOnMouseEnter = typeof callbackEvents.onMouseEnter === 'function';

      if (isOnMouseEnter) callbackEvents.onMouseEnter(e);
      if (onHover) toggleAnimation.add();

      return e;
    },
    [onHover, callbackEvents.onMouseEnter],
  );

  const handleOnMouseLeave = useCallback(
    (e) => {
      const isOnMouseLeave = typeof callbackEvents.onMouseEnter === 'function';

      if (isOnMouseLeave) callbackEvents.onMouseLeave(e);
      if (onHover) toggleAnimation.remove();

      return e;
    },
    [onHover, callbackEvents.onMouseLeave],
  );

  return {
    handleOnMouseEnter,
    handleOnMouseLeave,
  };
};
