//@flow
import React from 'react';
import {ProtectedScreen} from '@util';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {authSelectors} from '@reducers';

const ProtectedPath = ({component: Component, ...rest}: { component: any }) => (
  <Route {...rest} render={(props) => {
    return (
      rest.isAuthenticated
        ? <Component {...props} />
        : <ProtectedScreen {...props} />
    );
  }}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(ProtectedPath);
