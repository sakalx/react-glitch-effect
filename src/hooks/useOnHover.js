import React, {useCallback} from 'react';

import checkType from '../utils/generic/checkType';

const isValidFunction = checkType(['function']);

export default ({callbackEvents, onHover, toggleAnimation}) => {
    const handleOnMouseEnter = useCallback(e => {
        if (isValidFunction(callbackEvents.onMouseEnter)) callbackEvents.onMouseEnter(e);
        if (onHover) toggleAnimation.addAnimation();
    }, [onHover, callbackEvents.onMouseEnter]);

    const handleOnMouseLeave = useCallback(e => {
        if (isValidFunction(callbackEvents.onMouseLeave)) callbackEvents.onMouseLeave(e);
        if (onHover) toggleAnimation.removeAnimation();
    }, [onHover, callbackEvents.onMouseLeave]);

    return ({
        handleOnMouseEnter,
        handleOnMouseLeave,
    });
};
