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
import {useLoginStyles} from '@util';
import {CustomButton, LoadingModal} from '@components';

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
      <LoadingModal open={props.requestStatus === requestStatus.PENDING}/>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer}>
          <Typography component="h1" variant="h4" className={classes.header}>
            Username
          </Typography>
          <Typography component="span" variant="span" className={classes.subheader}>
            A game for PKP Intercity passengers.
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <div className={classes.input__container}>
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
            </div>
            {props.requestStatus === requestStatus.FAILURE && <div className={classes.input__container}><FormHelperText
              error
              id="my-helper-text"
            >
              {(props.error && props.error.detail) || 'Loging error'}
            </FormHelperText></div>}
            <div className={classes.customSubmit}>
              <CustomButton
                text="Log in as a guest"
                inForm
              />
            </div>
            <Grid container className={classes.links}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Check why it is worth to sign up here
                </Link>
              </Grid>
            </Grid>
            <hr className={classes.hr}/>
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
