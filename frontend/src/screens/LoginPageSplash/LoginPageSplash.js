//@flow
import React from 'react';

const LoginPageSplash = (props: Props) => {

  return (
    <React.Fragment>
      <img src="https://picsum.photos/200/300" alt=""/>
      <span>Pociąg do wiedzy</span>
      <span>Gra dla pasażerów PKP intercity</span>
      <button onClick={props.onGuestClick}>Graj za pomocą numeru biletu</button>
      <button onClick={props.onUserClick}>Zaloguj się</button>
      <button>Zarejestruj się</button>
    </React.Fragment>
  );
};

type Props = {
  onUserClick: () => void,
  onGuestClick: () => void,
};

export default LoginPageSplash;
