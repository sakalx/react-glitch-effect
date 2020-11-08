import { useLayoutEffect } from 'react';

export default (toggleAnimation, { disabled, onHover }) => {
  useLayoutEffect(() => {
    const isAnimationEnabled = !disabled && !onHover;

    if (isAnimationEnabled) toggleAnimation.add();
    else toggleAnimation.remove();
  }, [disabled, onHover]);
};
