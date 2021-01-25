import { useState, useCallback } from 'react';

export default (initSate = true) => {
  const [checked, setChecked] = useState(initSate);

  const onChange = useCallback(({ target }) => {
    setChecked(target.checked);
  }, []);

  return [checked, onChange];
};
