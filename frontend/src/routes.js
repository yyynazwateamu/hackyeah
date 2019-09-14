import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SplashContainer from './screens/splash/SplashContainer';
import StartContainer from './screens/start/StartContainer';

const Routes = () => (
    <Router>
        <Route exact path='/' component={SplashContainer} />
        <Route path='/start' component={StartContainer} />
    </Router>
);


export default Routes;
