import React, {useLayoutEffect} from 'react';

export default (squigglyContainerRef, {iterationCount, speed}) => {
    useLayoutEffect(() => {
        const {style} = squigglyContainerRef.current;

        iterationCount && style.setProperty('--iteration-count', iterationCount);
        speed && style.setProperty('--speed', `${speed}s`);

    }, [iterationCount, speed])
}
