import React, { memo } from 'react';

import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import useSwitcherValue from './hooks/useSwitcherValue';

const SwitcherProps = ({
  initValue,
  title,
}) => {
  const [checked, setChecked] = useSwitcherValue(initValue);

  return (
    <section>
      <Typography color="textSecondary" variant="h6">
        {`${title} : ${checked}`}
      </Typography>
      <Switch
        checked={checked}
        color="secondary"
        onChange={setChecked}
      />
    </section>
  );
};

export default memo(SwitcherProps);
