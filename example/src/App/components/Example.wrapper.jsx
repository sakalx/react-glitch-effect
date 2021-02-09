/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const ExampleWrapper = ({ children, title }) => (
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">
        {title}
      </Typography>
    </AccordionSummary>

    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
);

export default memo(ExampleWrapper);
