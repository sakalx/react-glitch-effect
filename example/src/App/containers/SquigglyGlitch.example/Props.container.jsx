/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../hooks/useStyles';

import SliderProp from '../../components/Slider.prop';
import SwitchProp from '../../components/Switch.prop';

const PropsContainer = ({
  title,
  duration,
  setDuration,
  baseFrequency,
  setBaseFrequency,
  scaleNoise,
  setScaleNoise,
  disabled,
  setDisabled,
  onHover,
  setOnHove,
}) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary" variant="body2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.fullWidth}>
          <SliderProp
            max={1000}
            setValue={setDuration}
            title="duration (ms)"
            value={duration}
          >
            <Typography variant="caption">
              note: the higher duration the smallest animation speed
            </Typography>
          </SliderProp>

          <SliderProp
            max={1}
            min={0}
            setValue={setBaseFrequency}
            step={0.01}
            title="baseFrequency"
            value={baseFrequency}
          />
          <SliderProp
            max={30}
            min={-30}
            setValue={setScaleNoise}
            step={1}
            title="scaleNoise"
            value={scaleNoise}
          />

          <div className={classes.row}>
            <SwitchProp
              setValue={setDisabled}
              title="disabled"
              value={disabled}
            />
            <SwitchProp
              setValue={setOnHove}
              title="onHover"
              value={onHover}
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(PropsContainer);
