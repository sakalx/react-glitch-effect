/* eslint react/prop-types: 0 */
import React, { memo } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';

import useStyles from '../hooks/useStyles';

const CodeExample = ({ codeExample }) => {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <CodeIcon color="secondary" fontSize="small" />
        <Typography color="secondary" variant="body2">
          source example
        </Typography>

      </AccordionSummary>
      <AccordionDetails>
        <SyntaxHighlighter
          className={classes.fullWidth}
          language="javascript"
          showLineNumbers
          style={atomOneDark}
        >
          {codeExample}
        </SyntaxHighlighter>
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(CodeExample);
