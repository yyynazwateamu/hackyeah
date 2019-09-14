import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProtectedPath, GuestPath } from '@util';
import SplashContainer from './screens/splash/SplashContainer';
import StartContainer from './screens/start/StartContainer';

const Routes = () => (
    <Router>
        <GuestPath exact path='/' component={SplashContainer} />
        <ProtectedPath path='/start' component={StartContainer} />
    </Router>
);


export default Routes;
