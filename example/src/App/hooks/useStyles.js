import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiAccordionDetails-root': {
      flexWrap: 'wrap',
    },
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  fieldset: {
    borderColor: 'inherit',
    borderRadius: '6px',
    margin: '6px',
    minWidth: '120px',
  },
  paper: {
    flex: '1',
    margin: '6px',
    padding: '6px 12px',
  },
  exampleContainer: {
    position: 'relative',
  },
  exampleText: {
    position: 'absolute',
    left: '12px',
    top: '12px',
  },
  exampleImg: {
    height: 'auto',
    width: '100%',
  },
}));
