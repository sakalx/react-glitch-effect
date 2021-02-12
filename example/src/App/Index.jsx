import React, {
  useState, useMemo, useEffect, memo,
} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import useStyles from './hooks/useStyles';

import ExampleWrapper from './components/Example.wrapper';
import ToggleColorSchema from './components/ToggleColorSchema';
import SquigglyGlitchExample from './containers/SquigglyGlitch.example/Index';
import ClipGlitchExample from './containers/ClipGlitch.example/Index';
import TextGlitchExample from './containers/TextGlitch.example/Index';

const App = () => {
  const initPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [prefersDarkMode, setPrefersDarkMode] = useState(true);

  const classes = useStyles();

  const theme = useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );

  useEffect(() => {
    setPrefersDarkMode(initPrefersDarkMode);
  }, [initPrefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <main className={classes.root}>
        <CssBaseline />
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
      <ToggleColorSchema setPrefersDarkMode={setPrefersDarkMode} />
    </ThemeProvider>
  );
};

export default memo(App);
