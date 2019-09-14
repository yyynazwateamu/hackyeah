//@flow
import React from 'react';
import { GuestScreen } from '@util';
import { Route } from 'react-router-dom';

const GuestPath = ({ component: Component, ...rest } : { component: any }) => (
  <Route {...rest} render={(props : { isAuthenticated: boolean }) => (
    props.isAuthenticated
      ? <Component {...props} />
      : <GuestScreen {...props} />
  )} />
);


export default GuestPath;
