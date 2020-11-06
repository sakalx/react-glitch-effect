import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

const FILTERS = [0, 1, 2, 3, 4];

const SvgFilters = ({ baseFrequency, scaleNoise }) => {
  const renderFilter = useCallback((i) => (
    <filter id={`squiggly__filter-${i}`} key={String(i)}>
      <feTurbulence
        baseFrequency={baseFrequency}
        type="turbulence"
        numOctaves="3"
        result="noise"
        seed={i}
      />
      <feDisplacementMap
        in2="noise"
        in="SourceGraphic"
        scale={scaleNoise}
      />
    </filter>
  ), [baseFrequency, scaleNoise]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="squiggly__svg-filters">
      <defs>
        {FILTERS.map(renderFilter)}
      </defs>
    </svg>
  );
};

export default memo(SvgFilters);

SvgFilters.propTypes = {
  baseFrequency: PropTypes.number,
  scaleNoise: PropTypes.number,
};
