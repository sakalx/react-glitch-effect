import React, { memo } from 'react';

import GlitchClip from 'src/GlitchClip';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import boliImg from '../../../static/img/boli.jpg';
import useSliderValue from '../../hooks/useSliderValue';
import useSwitcherValue from '../../hooks/useSwitcherValue';
import useStyles from '../../hooks/useStyles';

import CodeExample from '../../components/Code.example';
import GlitchExample from '../../components/Glitch.example';
import PropContainer from './Props.container';

import codeExample from './code.example';

const ClipGlitchExample = () => {
  const classes = useStyles();

  const [durationText, setDurationText] = useSliderValue(3000);
  const [disabledText, setDisabledText] = useSwitcherValue(false);
  const [onHoverText, setOnHoverText] = useSwitcherValue(false);

  const [durationImg, setDurationImg] = useSliderValue(4000);
  const [disabledImg, setDisabledImg] = useSwitcherValue(false);
  const [onHoverImg, setOnHoverImg] = useSwitcherValue(false);

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <PropContainer
          title="props Glitch (text):"
          duration={durationText}
          setDuration={setDurationText}
          disabled={disabledText}
          setDisabled={setDisabledText}
          onHover={onHoverText}
          setOnHove={setOnHoverText}
        />
        <br />
        <PropContainer
          title="props Glitch (img):"
          duration={durationImg}
          setDuration={setDurationImg}
          disabled={disabledImg}
          setDisabled={setDisabledImg}
          onHover={onHoverImg}
          setOnHove={setOnHoverImg}
        />
        <br />
        <CodeExample codeExample={codeExample} />
      </Paper>

      <GlitchExample>
        <GlitchClip
          disabled={disabledImg}
          duration={durationImg}
          onHover={onHoverImg}
        >
          <img alt="img-glitch" className={classes.exampleImg} src={boliImg} />
        </GlitchClip>

        <GlitchClip
          disabled={disabledText}
          duration={durationText}
          onHover={onHoverText}
        >
          <Typography
            color="error"
            contentEditable="true"
            variant="h3"
            suppressContentEditableWarning
          >
            Glitch Clip
          </Typography>
        </GlitchClip>
      </GlitchExample>
    </>
  );
};

export default memo(ClipGlitchExample);
