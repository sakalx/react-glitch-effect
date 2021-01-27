import { useLayoutEffect } from 'react';

export default (toggleAnimation, { disabled, onHover }) => {
  useLayoutEffect(() => {
    const isAnimationEnabled = !disabled && !onHover;

    if (isAnimationEnabled) {
      setTimeout(toggleAnimation.add, 0);
    } else toggleAnimation.remove();
  }, [disabled, onHover]);
};
