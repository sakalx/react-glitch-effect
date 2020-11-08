import { useCallback } from 'react';

import checkType from '../utils/generic/checkType';

const isValidFunction = checkType(['function']);

export default ({ callbackEvents, onHover, toggleAnimation }) => {
  const handleOnMouseEnter = useCallback(
    (e) => {
      const isOnMouseEnter = isValidFunction(callbackEvents.onMouseEnter);

      if (isOnMouseEnter) callbackEvents.onMouseEnter(e);
      if (onHover) toggleAnimation.add();

      return e;
    },
    [onHover, callbackEvents.onMouseEnter],
  );

  const handleOnMouseLeave = useCallback(
    (e) => {
      const isOnMouseLeave = isValidFunction(callbackEvents.onMouseLeave);

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
