//@flow
import React from 'react';
import './login-page-splash.scss';
import {Typography, Button, Container} from '@material-ui/core';
import {useLoginStyles} from '@util';

const LoginPageSplash = (props: Props) => {
  const classes = useLoginStyles();
  return (
    <Container component="main" maxWidth="xs" >
      <img className="upper-img" src="https://picsum.photos/200/300" alt=""/>
      <header className="header">
        <Typography component="h1" variant="h4" className={classes.header}>
          #TrainToKnowledge
        </Typography>
        <Typography component="span" variant="span" className={classes.subheader}>
          A game for PKP Intercity passengers.
        </Typography>
      </header>
      <Container className="login">
        <Button href="/loginGuest" className="login__button" variant="contained" onClick={props.onGuestClick}>Play using
          your ticket number</Button>
        <Button href="/login" className="login__button login__button-orange" variant="contained" color="primary" onClick={props.onUserClick}>Log
          in</Button>
        <Button href="/signup" className="login__button" variant="contained" color="primary">Sign up</Button>
      </Container>

    </Container>
  );
};

type Props = {
  onUserClick: () => void,
  onGuestClick: () => void,
};

export default LoginPageSplash;
