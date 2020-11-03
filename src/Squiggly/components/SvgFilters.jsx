import React, {useCallback, memo} from 'react';

const FILTERS = [0, 1, 2, 3, 4];

const SvgFilters = () => {
    const renderFilter = useCallback(i => (
        <filter id={`squiggly-${i}`} key={String(i)}>
            <feTurbulence
                baseFrequency='0.02'
                id='turbulence'
                numOctaves='3'
                result='noise'
                seed={i}
            />
            <feDisplacementMap
                id='displacement'
                in2='noise'
                in='SourceGraphic'
                scale='6'
            />
        </filter>
    ), []);

    return (
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
            <defs>
                {FILTERS.map(renderFilter)}
            </defs>
        </svg>
    )
};

export default memo(SvgFilters);
