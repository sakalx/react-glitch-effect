/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Paper from '@material-ui/core/Paper';

import useStyles from '../hooks/useStyles';

const GlitchExample = ({ children }) => {
  const classes = useStyles();
  const [imgGlitch, textGlitch] = children;

  return (
    <Paper className={classes.paper} elevation={2}>
      <aside className={classes.exampleContainer}>
        <header className={classes.exampleText}>
          {textGlitch && textGlitch}
        </header>
        {imgGlitch && imgGlitch}
      </aside>
    </Paper>
  );
};

export default memo(GlitchExample);
