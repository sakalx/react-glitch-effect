import React, {useLayoutEffect} from 'react';

export default (toggleAnimation, {disabled, onHover}) => {
    useLayoutEffect(() => {
        const isAnimationEnabled = !disabled && !onHover;
        isAnimationEnabled ? toggleAnimation.addAnimation() : toggleAnimation.removeAnimation();
    }, [disabled, onHover]);
}
