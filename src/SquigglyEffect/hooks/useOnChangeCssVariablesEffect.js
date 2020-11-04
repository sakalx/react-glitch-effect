import React, {useLayoutEffect} from 'react';

import pipe from '../../utils/generic/pipe';
import setStyleProperty from '../../utils/HTML_API/setStyleProperty';

const setIterationCount = setStyleProperty('--iteration-count');
const setSpeed = setStyleProperty('--speed');

export default (squigglyAnimationRef, {iterationCount, speed}) => {
    useLayoutEffect(() => {
        pipe(
            setIterationCount(iterationCount),
            setSpeed(`${speed}ms`),
        )(squigglyAnimationRef);
    }, [iterationCount, speed])
}
