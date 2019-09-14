//@flow
import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './login-page-splash.scss';

const LoginPageSplash = (props: Props) => {

  return (
    <React.Fragment>
      <img className="upper-img" src="https://picsum.photos/200/300" alt=""/>
      <Container className="login">
        <span className="login__title">Pociąg do wiedzy</span>
        <span className="login__info">Gra dla pasażerów PKP intercity</span>
        <Button href="loginGuest" className="login__button" variant="contained" onClick={props.onGuestClick}>Graj za pomocą numeru biletu</Button>
        <Button href="login" className="login__button" variant="contained" color="primary" onClick={props.onUserClick}>Zaloguj się</Button>
        <Button href="signup" className="login__button" variant="contained" color="primary">Zarejestruj się</Button>
      </Container>
      
    </React.Fragment>
  );
};

type Props = {
  onUserClick: () => void,
  onGuestClick: () => void,
};

export default LoginPageSplash;
