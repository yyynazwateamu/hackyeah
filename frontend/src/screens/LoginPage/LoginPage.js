//@flow
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField, Button, Grid, Link, FormHelperText

} from '@material-ui/core';
import { authSelectors } from '@reducers';
import { authActions } from '@actions';
import { requestStatus } from '@constants';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    textAlign: 'center',
    width:'80%',
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

const LoginPage = (props: Props) => {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(username, password);
  };

  useEffect(() => {
    if ( props.requestStatus === requestStatus.SUCCESS ) {
      props.history.push('/ticket');
    }
  }, [props.requestStatus]);


  return (
    <React.Fragment>
      { props.requestStatus === requestStatus.PENDING && <div>laduje</div> }
      { props.requestStatus === requestStatus.FAILURE && <div>error</div> }
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer} >
          <Typography component="h1" variant="h4" className={classes.header} >
            ZALOGUJ SIĘ
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nazwa użytkownika"
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={props.requestStatus === requestStatus.FAILURE}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={props.requestStatus === requestStatus.FAILURE}
            />
            {props.requestStatus === requestStatus.FAILURE && <FormHelperText
              error
              id="my-helper-text"
            >
              {(props.error && props.error.detail) || 'Loging error'}
            </FormHelperText>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              Zaloguj się
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item xs className={classes.register}>
                <Link href="#" variant="body2">
                  Nie masz jeszcze konta? Zarejestruj się!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

type Props = {
  error?: {
    code: number,
    detail: string,
  },
  requestStatus: string,
  login: (username: string, password: string) => void,
  history: {
    push: () => void,
  },
};

const mapStateToProps = (state) => ({
  error: authSelectors.getError(state),
  requestStatus: authSelectors.getStatus(state),
});


const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(authActions.loginWithAccount(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
