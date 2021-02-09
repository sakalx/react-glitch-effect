/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import useStyles from '../hooks/useStyles';

const SliderProp = ({
  children,
  max = 100,
  min = 0,
  setValue,
  step = 10,
  title,
  value,
}) => {
  const classes = useStyles();

  return (
    <fieldset className={classes.fieldset}>
      <Typography component="legend" color="textSecondary" variant="body2">
        {`${title}: ${value}`}
      </Typography>
      {children}
      <Slider
        color="secondary"
        marks
        max={max}
        min={min}
        onChange={setValue}
        step={step}
        value={value}
        valueLabelDisplay="auto"
      />
    </fieldset>
  );
};

export default memo(SliderProp);
