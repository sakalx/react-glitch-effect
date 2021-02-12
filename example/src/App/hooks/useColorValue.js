import { useState, useCallback } from 'react';

export default (initSate) => {
  const [colors, setColors] = useState(initSate);

  const onChange = useCallback(({ target }) => {
    setColors((pre) => ({
      ...pre,
      [target.name]: target.value,
    }));
  }, []);

  return [colors, onChange];
};
