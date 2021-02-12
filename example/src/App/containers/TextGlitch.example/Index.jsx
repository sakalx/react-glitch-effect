import React, { memo } from 'react';

import GlitchText from 'src/GlitchText/Index';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import loliImg from '../../../static/img/loli.jpg';
import useColorValue from '../../hooks/useColorValue';
import useSliderValue from '../../hooks/useSliderValue';
import useSwitcherValue from '../../hooks/useSwitcherValue';
import useStyles from '../../hooks/useStyles';

import CodeExample from '../../components/Code.example';
import GlitchExample from '../../components/Glitch.example';
import PropContainer from './Props.container';

import codeExample from './code.example';

const TextGlitchExample = () => {
  const classes = useStyles();

  const [colors, setColors] = useColorValue({
    color1: '#4ca8e5',
    color2: '#c33b6b',
  });
  const [durationText, setDurationText] = useSliderValue(2000);
  const [disabledText, setDisabledText] = useSwitcherValue(false);
  const [onHoverText, setOnHoverText] = useSwitcherValue(false);

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <PropContainer
          title="props Glitch (text):"
          colors={colors}
          setColors={setColors}
          duration={durationText}
          setDuration={setDurationText}
          disabled={disabledText}
          setDisabled={setDisabledText}
          onHover={onHoverText}
          setOnHove={setOnHoverText}
        />
        <br />
        <CodeExample codeExample={codeExample} />
      </Paper>

      <GlitchExample>
        <img alt="img-glitch" className={classes.exampleImg} src={loliImg} />
        <GlitchText
          component="header"
          color1={colors.color1}
          color2={colors.color2}
          disabled={disabledText}
          duration={durationText}
          onHover={onHoverText}
        >
          <Typography
            color="textSecondary"
            contentEditable="true"
            variant="h2"
            suppressContentEditableWarning
          >
            Glitch Text
          </Typography>
        </GlitchText>
      </GlitchExample>
    </>
  );
};

export default memo(TextGlitchExample);
