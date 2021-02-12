import React, { memo } from 'react';

import useStyles from './hooks/useStyles';

import ExampleWrapper from './components/Example.wrapper';
import SquigglyGlitchExample from './containers/SquigglyGlitch.example/Index';
import ClipGlitchExample from './containers/ClipGlitch.example/Index';
import TextGlitchExample from './containers/TextGlitch.example/Index';

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

      <ExampleWrapper title="Text Glitch">
        <TextGlitchExample />
      </ExampleWrapper>
    </main>
  );
};

export default memo(App);
