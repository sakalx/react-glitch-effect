import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
    borderWidth: '1px',
    margin: '6px',
    minWidth: '120px',
  },
  paper: {
    flex: '1 1 500px',
    margin: '6px',
    padding: '6px 12px',
    width: '100%',
  },
  exampleContainer: {
    position: 'relative',
  },
  exampleText: {
    left: '12px',
    position: 'absolute',
    top: '12px',
    zIndex: '999',
  },
  exampleImg: {
    height: 'auto',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
}));
