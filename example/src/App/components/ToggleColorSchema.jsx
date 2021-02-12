/* eslint react/prop-types: 0 */
import React, { useCallback, memo } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const ToggleColorSchema = ({ setPrefersDarkMode }) => {
  const toggleDarkMode = useCallback(() => {
    setPrefersDarkMode((isDarkMode) => !isDarkMode);
  }, []);

  return (
    <IconButton aria-label="toggle color schema" onClick={toggleDarkMode}>
      <Brightness4Icon />
    </IconButton>
  );
};

export default memo(ToggleColorSchema);
