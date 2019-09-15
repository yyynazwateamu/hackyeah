//@flow
import React from 'react';
import { GuestScreen } from '@util';
import { Route } from 'react-router-dom';
import {authSelectors} from '@reducers';
import {connect} from 'react-redux';

const GuestPath = ({ component: Component, ...rest }: { component: any }) => (
  <Route {...rest} render={(props) => (
    rest.isAuthenticated
      ? <GuestScreen {...props} />
      : <Component {...props} />
  )} />
);


const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(GuestPath);
