import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

const COUNT_OF_FILTERS = [0, 1, 2, 3, 4];

const SvgFilters = ({ baseFrequency, scaleNoise, rootRef }) => {
  const renderFilter = useCallback((i) => {
    const filterId = `squiggly__filter-${i}--${baseFrequency}-${scaleNoise}`;

    rootRef.current?.style.setProperty(`--squiggly__filter--id-${i}`, `url('#${filterId}')`);

    return (
      <filter id={filterId} key={String(i)}>
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
    );
  }, [baseFrequency, scaleNoise]);

  return (
    <svg className="glitch-squiggly__svg-filters" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        {COUNT_OF_FILTERS.map(renderFilter)}
      </defs>
    </svg>
  );
};

export default memo(SvgFilters);

SvgFilters.propTypes = {
  baseFrequency: PropTypes.number,
  scaleNoise: PropTypes.number,
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};
