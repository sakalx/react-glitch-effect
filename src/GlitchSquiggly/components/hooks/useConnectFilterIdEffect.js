import { useEffect } from 'react';

const setFilterIdProperty = (rootRef, filterIds) => (i) => {
  rootRef.current.style.setProperty(`--squiggly__filter--id-${i}`, `url('#${filterIds[i]}')`);
};

export default (COUNT_OF_FILTERS, {
  rootRef,
  filterIds,
}) => {
  useEffect(() => {
    if (rootRef.current) COUNT_OF_FILTERS.forEach(setFilterIdProperty(rootRef, filterIds));
  }, [filterIds]);
};
