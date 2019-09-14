//@flow
import React, { useState } from 'react';
import { loginState } from './states';
import LoginPageSplash from './LoginPageSplash';
import LoginPageUser from './LoginPageUser';
import LoginPageGuest from './LoginPageGuest';

const LoginPage = () => {

  const [loginPageState, setLoginPageState] = useState(loginState.CHOOSE);

  const loginUser = () => setLoginPageState(loginState.LOGIN);

  const loginGuest = () => setLoginPageState(loginState.LOGIN_GUEST);

  return (
    <main>
      { loginPageState === loginState.CHOOSE && <LoginPageSplash onUserClick={loginUser} onGuestClick={loginGuest} />}
      { loginPageState === loginState.LOGIN && <LoginPageUser/>}
      { loginPageState === loginState.LOGIN_GUEST && <LoginPageGuest/>}
    </main>
  );
};

export default LoginPage;
