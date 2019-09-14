import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProtectedPath, GuestPath } from '@util';
import { LoginPage, SplashContainer, LobbyContainer } from '@screens';

const Routes = () => (
  <Router>
    <GuestPath exact path='/' component={SplashContainer} />
    <GuestPath path='/login' component={LoginPage} />
    <ProtectedPath path='/lobby' component={LobbyContainer} />
  </Router>
);

export default Routes;
