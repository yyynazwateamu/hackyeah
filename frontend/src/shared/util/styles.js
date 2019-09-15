import {makeStyles} from '@material-ui/core/styles';
import {colors} from '@constants';

export const useLoginStyles = makeStyles(theme => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    textAlign: 'center',
    width: '70%',
    borderBottom: '1px solid #aaa',
    paddingBottom: '2px',
    fontSize: '28px !important',
    fontWeight: 'bold !important',
    fontFamily: '"IBM Plex Sans", sans-serif !important',
  },

  subheader: {
    paddingTop: '10px',
    fontSize: '16px',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 300,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(9),
  },
  input__container: {
    marginBottom: theme.spacing(2),
  },

  customSubmit: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  },

  register: {
    textAlign: 'right',
  },

  hr: {
    width:'70%',
    textAlign:'center',
    marginTop:'20px',
    animation: 'changeOpacity 2s linear forwards',
  },

}));

export const useErrorStyles = makeStyles(theme => ({
  errorIcon: {
    fontSize: theme.spacing(10),
    color: colors.grey,
    marginTop: theme.spacing(10),
  },

  loggedInIcon: {
    fontSize: theme.spacing(10),
    color: colors.lightGreen,
    marginTop: theme.spacing(10),
  }


}));