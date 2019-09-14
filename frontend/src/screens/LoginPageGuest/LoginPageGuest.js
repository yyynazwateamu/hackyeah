//@flow
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField, Button, Grid, Link,
  FormHelperText
} from '@material-ui/core';
import {authSelectors} from '@reducers';
import {authActions} from '@actions';
import {requestStatus} from '@constants';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
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

const LoginPageGuest = (props: Props) => {

  const classes = useStyles();

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
            DOŁĄCZ DO GRY
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Nazwa gracza"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              Zaloguj się jako gość
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zobacz dlaczego warto założyć konto i zarejestruj się
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
