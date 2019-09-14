
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SplashContainer from './screens/splash/SplashContainer';
import StartContainer from './screens/start/StartContainer';
import LobbyContainer from './screens/Lobby/LobbyContainer';

const routes =
    <Router>
      <Route exact path='/' component={SplashContainer} />
      <Route path='/start' component={StartContainer} />
      <Route path='/lobby' component={LobbyContainer} />
    </Router>;

export default routes;
