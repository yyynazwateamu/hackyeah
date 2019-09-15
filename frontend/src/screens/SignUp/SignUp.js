//@flow
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField, FormHelperText,
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, Button,
} from '@material-ui/core';
import {authSelectors} from '@reducers';
import {authActions} from '@actions';
import {requestStatus} from '@constants';
import {useLoginStyles} from '@util';
import {CustomButton, LoadingModal} from '@components';

const SignUp = (props: Props) => {

  const classes = useLoginStyles();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({
      username,
      password,
      email,
    });
  };

  const handleClose = () => {
    props.history.push('/login');
  };

  return (
    <React.Fragment>
      <LoadingModal open={props.requestStatus === requestStatus.PENDING}/>
      <Dialog
        open={props.requestStatus === requestStatus.SUCCESS}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Success
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have been successfully registered. You can log in now.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Log in now!
          </Button>
        </DialogActions>
      </Dialog>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer}>
          <Typography component="h1" variant="h4" className={classes.header}>
            Sign up
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
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={props.requestStatus === requestStatus.FAILURE}
              />
            </div>
            <div className={classes.input__container}>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={props.requestStatus === requestStatus.FAILURE}
              />
            </div>
            <div className={classes.input__container}>
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
            </div>
            <Typography component="p" variant="p">
              By registering to #TrainToKnowledge game you agree with basic terms & conditions.
            </Typography>
            {props.requestStatus === requestStatus.FAILURE && <div className={classes.input__container}><FormHelperText
              error
              id="my-helper-text"
            >
              {(props.error && props.error.detail) || 'Signup error'}
            </FormHelperText></div>}
            <div className={classes.customSubmit}>
              <CustomButton
                text="Sign up"
                inForm
              />
            </div>
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
  signUp: (user: {
    username: string,
    email: string,
    password: string,
  }) => void,
  history: {
    push: () => void,
  },
};

const mapStateToProps = (state) => ({
  error: authSelectors.getError(state),
  requestStatus: authSelectors.getSignupStatus(state),
});


const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(authActions.signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
