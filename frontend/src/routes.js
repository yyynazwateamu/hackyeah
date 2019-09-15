import React from 'react';
import { Router } from 'react-router-dom';
import { ProtectedPath, GuestPath, history } from '@util';
import { LoginPage, LoginPageSplash, LoginPageGuest, SignUp,
  SplashPage, LobbyContainer, QuestionContainer, TicketPage } from '@screens';

const Routes = () => (
  <Router history={history}>
    <GuestPath exact path='/' component={SplashPage} />
    <GuestPath path='/start' component={LoginPageSplash} />
    <GuestPath path='/login' component={LoginPage} />
    <GuestPath path='/loginGuest' component={LoginPageGuest} />
    <GuestPath path='/signup' component={SignUp} />
    <ProtectedPath path='/ticket' component={TicketPage} />
    <ProtectedPath path='/lobby' component={LobbyContainer} />
    <ProtectedPath path='/question' component={QuestionContainer} />
  </Router>
);

export default Routes;
