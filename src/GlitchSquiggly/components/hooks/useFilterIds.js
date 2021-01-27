import { useMemo } from 'react';

const createId = (baseFrequency, scaleNoise) => (i) => `squiggly__filter-${i}--${baseFrequency}-${scaleNoise}`;

export default (COUNT_OF_FILTERS, {
  baseFrequency,
  scaleNoise,
}) => useMemo(() => {
  const createIdBaseOnProps = createId(baseFrequency, scaleNoise);
  return COUNT_OF_FILTERS.map(createIdBaseOnProps);
},
[baseFrequency, scaleNoise]);
