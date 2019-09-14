//@flow
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField, Grid, Link, FormHelperText

} from '@material-ui/core';
import { authSelectors } from '@reducers';
import { authActions } from '@actions';
import { requestStatus } from '@constants';
import { useLoginStyles } from '@util';
import { CustomButton } from '@components';

const LoginPage = (props: Props) => {

  const classes = useLoginStyles();

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
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer} >
          <Typography component="h1" variant="h4" className={classes.header} >
            LOG IN
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
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
              label="Password"
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
            <CustomButton
              text="Log in"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot your password?
                </Link>
              </Grid>
              <Grid item xs className={classes.register}>
                <Link href={'/signup'} variant="body2">
                  Do not have an account? Register here!
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
