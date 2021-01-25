import React, { memo } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import useStyles from './hooks/useStyles';

import GlitchSquiggly from '../../../src/GlitchSquiggly/Index';

import SliderProps from '../components/Slider.Props/Index';
import SwitcherProps from '../components/Switcher.Props/Index';

import secondaryImg from '../static/img/secondary.jpg';
import loliImg from '../static/img/loli.jpg';
import boliImg from '../static/img/boli.jpg';
import grootImg from '../static/img/groot.jpg';
import useSliderValue from '../components/Slider.Props/hooks/useSliderValue';
import useSwitcherValue from '../components/Switcher.Props/hooks/useSwitcherValue';

const App = () => {
  const classes = useStyles();

  const [durationText, setDurationText] = useSliderValue(340);
  const [disabledText, setDisabledText] = useSwitcherValue(false);
  const [onHoverText, setOnHoverText] = useSwitcherValue(false);

  const [durationImg, setDurationImg] = useSliderValue(340);
  return (
    <main className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Glitch Squiggly</Typography>
        </AccordionSummary>

        <AccordionDetails>

          <Paper className={classes.paper} elevation={3}>
            <Typography color="primary" gutterBottom variant="h6">
              props Glitch (text):
            </Typography>

            <fieldset className={classes.fieldset}>
              <Typography component="legend" color="textSecondary" variant="body1">
                {`duration: ${durationText}ms`}
              </Typography>
              <Typography variant="caption">
                note: the higher duration the smallest animation speed
              </Typography>
              <Slider
                color="secondary"
                marks
                max={1000}
                min={0}
                onChange={setDurationText}
                step={10}
                value={durationText}
                valueLabelDisplay="auto"
              />
            </fieldset>

            <div className={classes.row}>
              <fieldset className={classes.fieldset}>
                <Typography component="legend" color="textSecondary" variant="body1">
                  disabled
                </Typography>
                <div className={classes.row}>
                  <Switch
                    checked={disabledText}
                    color="secondary"
                    onChange={setDisabledText}
                  />
                  <Typography color={disabledText ? 'secondary' : 'textSecondary'}>
                    {String(disabledText)}
                  </Typography>
                </div>

              </fieldset>
              <fieldset className={classes.fieldset}>
                <Typography component="legend" color="textSecondary" variant="body1">
                  onHover
                </Typography>
                <div className={classes.row}>
                  <Switch
                    checked={onHoverText}
                    color="secondary"
                    onChange={setOnHoverText}
                  />
                  <Typography color={onHoverText ? 'secondary' : 'textSecondary'}>
                    {String(onHoverText)}
                  </Typography>
                </div>
              </fieldset>

            </div>
            <br />
            <Divider />
            <br />
            <Typography color="primary" gutterBottom variant="h6">
              props Glitch (image):
            </Typography>

          </Paper>
          <Paper
            className={classes.paper}
            elevation={2}
          >

            <aside className={classes.exampleContainer}>
              <header className={classes.exampleText}>
                <GlitchSquiggly
                  duration={durationText}
                  disabled={disabledText}
                  onHover={onHoverText}
                >
                  <Typography
                    color="error"
                    contentEditable="true"
                    variant="h3"
                    suppressContentEditableWarning
                  >
                    Glitch Squiggly
                  </Typography>
                </GlitchSquiggly>
              </header>
              <GlitchSquiggly disabled>
                <img alt="img-glitch" className={classes.exampleImg} src={grootImg} />
              </GlitchSquiggly>
            </aside>

          </Paper>
        </AccordionDetails>
      </Accordion>
    </main>
  );
};

export default memo(App);
