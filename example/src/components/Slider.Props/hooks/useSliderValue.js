import { useState, useCallback } from 'react';

export default (initSate = null) => {
  const [value, setValue] = useState(initSate);

  const onChange = useCallback((e, newValue) => {
    setValue(newValue);
  }, []);

  return [value, onChange];
};
