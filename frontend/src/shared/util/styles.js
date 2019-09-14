import {makeStyles} from '@material-ui/core/styles';


export const useLoginStyles = makeStyles(theme => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    textAlign: 'center',
    width: '80%',
    borderBottom: '1px solid #aaa',
    paddingBottom: '5px',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  register: {
    textAlign: 'right',
  }
}));