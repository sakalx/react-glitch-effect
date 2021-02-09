/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Slider from '@material-ui/core/Slider';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../hooks/useStyles';

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
          <fieldset className={classes.fieldset}>
            <Typography component="legend" color="textSecondary" variant="body2">
              {`duration: ${duration}ms`}
            </Typography>
            <Typography variant="caption">
              note: the higher duration the smallest animation speed
            </Typography>
            <Slider
              color="secondary"
              marks
              max={1000}
              min={0}
              onChange={setDuration}
              step={10}
              value={duration}
              valueLabelDisplay="auto"
            />
          </fieldset>

          <fieldset className={classes.fieldset}>
            <Typography component="legend" color="textSecondary" variant="body2">
              {`baseFrequency: ${baseFrequency}`}
            </Typography>
            <Slider
              color="secondary"
              marks
              max={1}
              min={0}
              onChange={setBaseFrequency}
              step={0.01}
              value={baseFrequency}
              valueLabelDisplay="auto"
            />
          </fieldset>

          <fieldset className={classes.fieldset}>
            <Typography component="legend" color="textSecondary" variant="body2">
              {`scaleNoise: ${scaleNoise}`}
            </Typography>
            <Slider
              color="secondary"
              marks
              max={30}
              min={-30}
              onChange={setScaleNoise}
              step={1}
              value={scaleNoise}
              valueLabelDisplay="auto"
            />
          </fieldset>

          <div className={classes.row}>
            <fieldset className={classes.fieldset}>
              <Typography component="legend" color="textSecondary" variant="body2">
                disabled
              </Typography>
              <div className={classes.row}>
                <Switch
                  checked={disabled}
                  color="secondary"
                  onChange={setDisabled}
                  size="small"
                />
                <Typography color={disabled ? 'secondary' : 'textSecondary'}>
                  {String(disabled)}
                </Typography>
              </div>

            </fieldset>
            <fieldset className={classes.fieldset}>
              <Typography component="legend" color="textSecondary" variant="body2">
                onHover
              </Typography>
              <div className={classes.row}>
                <Switch
                  checked={onHover}
                  color="secondary"
                  onChange={setOnHove}
                  size="small"
                />
                <Typography color={onHover ? 'secondary' : 'textSecondary'}>
                  {String(onHover)}
                </Typography>
              </div>
            </fieldset>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(PropsContainer);
