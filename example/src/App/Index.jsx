import React, { memo } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import useStyles from './hooks/useStyles';

import SquigglyGlitchExample from './containers/SquigglyGlitch.example/Index';

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Glitch Squiggly</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SquigglyGlitchExample />
        </AccordionDetails>
      </Accordion>
    </main>
  );
};

export default memo(App);
