/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const SliderProps = ({
  max = 1000,
  min = -1000,
  step = 10,
  title,
  setValue,
  value,
}) => (
  <section>
    <Typography color="textSecondary" variant="h6">
      {`${title} : ${value}`}
    </Typography>
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
  </section>

);
export default memo(SliderProps);
