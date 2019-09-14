//@flow
import React from 'react';
import { ProtectedScreen } from '@util';
import { Route } from 'react-router-dom';

const ProtectedPath = ({ component: Component, ...rest } : { component: any }) => (
  <Route {...rest} render={(props : { isAuthenticated: boolean }) => (
    props.isAuthenticated
      ? <Component {...props} />
      : <ProtectedScreen {...props} />
  )} />
);



export default ProtectedPath;
