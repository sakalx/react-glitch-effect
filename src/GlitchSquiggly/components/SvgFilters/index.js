import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

import useFilterIds from '../hooks/useFilterIds';
import useConnectFilterIdEffect from '../hooks/useConnectFilterIdEffect';

const COUNT_OF_FILTERS = [0, 1, 2, 3, 4];

const SvgFilters = ({ baseFrequency, scaleNoise, rootRef }) => {
  const filterIds = useFilterIds(COUNT_OF_FILTERS, { baseFrequency, scaleNoise });

  useConnectFilterIdEffect(COUNT_OF_FILTERS, { rootRef, filterIds });

  const renderFilter = useCallback((i) => (
    <filter id={filterIds[i]} key={String(i)}>
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
  ),
  [baseFrequency, scaleNoise]);

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
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
