import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProtectedPath, GuestPath } from '@util';
import SplashContainer from './screens/splash/SplashContainer';
import StartContainer from './screens/start/StartContainer';
import LobbyContainer from './screens/Lobby/LobbyContainer';

const Routes = () => (
  <Router>
    <GuestPath exact path='/' component={SplashContainer} />
    <ProtectedPath path='/start' component={StartContainer} />
    <ProtectedPath path='/lobby' component={LobbyContainer} />
  </Router>
);

export default Routes;
