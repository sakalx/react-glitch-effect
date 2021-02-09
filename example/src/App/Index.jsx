import React, { memo } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import useStyles from './hooks/useStyles';

import ExampleWrapper from './components/Example.wrapper';
import SquigglyGlitchExample from './containers/SquigglyGlitch.example/Index';
import ClipGlitchExample from './containers/ClipGlitch.example/Index';

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <ExampleWrapper title="Squiggly Glitch">
        <SquigglyGlitchExample />
      </ExampleWrapper>

      <ExampleWrapper title="Clip Glitch">
        <ClipGlitchExample />
      </ExampleWrapper>
    </main>
  );
};

export default memo(App);
