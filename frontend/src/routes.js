import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProtectedPath, GuestPath } from '@util';
import { LoginPage, LoginPageSplash, LoginPageGuest, SignUp,
  SplashContainer, LobbyContainer, QuestionContainer, TicketPage } from '@screens';

const Routes = () => (
  <Router>
    <GuestPath exact path='/' component={SplashContainer} />
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
