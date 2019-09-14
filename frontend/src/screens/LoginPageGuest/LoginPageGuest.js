//@flow
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField, Grid, Link,
  FormHelperText
} from '@material-ui/core';
import {authSelectors} from '@reducers';
import {authActions} from '@actions';
import {requestStatus} from '@constants';
import { useLoginStyles } from '@util';
import { CustomButton } from '@components';

const LoginPageGuest = (props: Props) => {

  const classes = useLoginStyles();

  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(username);
  };

  useEffect(() => {
    if (props.requestStatus === requestStatus.SUCCESS) {
      props.history.push('/ticket');
    }
  }, [props.requestStatus]);


  return (
    <React.Fragment>
      {props.requestStatus === requestStatus.PENDING && <div>laduje</div>}
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer}>
          <Typography component="h1" variant="h4" className={classes.header}>
            JOIN THE GAME
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Username"
              name="nickname"
              autoComplete="nickname"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={props.requestStatus === requestStatus.FAILURE}
            />
            {props.requestStatus === requestStatus.FAILURE && <FormHelperText
              error
              id="my-helper-text"
            >
              {(props.error && props.error.detail) || 'Loging error'}
            </FormHelperText>}
            <CustomButton
              text="Log in as a guest"
            >
            </CustomButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Check why it is worth to sign up here
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
  login: (username) => dispatch(authActions.loginWithoutAccount(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageGuest);
