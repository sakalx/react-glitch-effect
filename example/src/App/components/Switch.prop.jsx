/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import useStyles from '../hooks/useStyles';

const SwitchProp = ({
  setValue,
  title,
  value,
}) => {
  const classes = useStyles();
  const color = value ? 'secondary' : 'textSecondary';

  return (
    <fieldset className={classes.fieldset}>
      <Typography component="legend" color="textSecondary" variant="body2">
        {title}
      </Typography>
      <div className={classes.row}>
        <Switch
          checked={value}
          color="secondary"
          onChange={setValue}
          size="small"
        />
        <Typography color={color}>
          {String(value)}
        </Typography>
      </div>
    </fieldset>
  );
};

export default memo(SwitchProp);
