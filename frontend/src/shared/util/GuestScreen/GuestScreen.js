//@flow
import React, {useEffect} from 'react';
import {Container, Typography} from '@material-ui/core';
import {useErrorStyles, useLoginStyles} from '@util/styles';
import CheckIcon from '@material-ui/icons/Check';

let redirect = null;

const GuestScreen = (props: Props) => {
  const loginStyles = useLoginStyles();
  const errorStyles = useErrorStyles();

  useEffect(() => {
    redirect = setTimeout(() => props.history.push('/lobby'),
      3000);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <Container component="main" maxWidth="xs" >
      <header className="header">
        <CheckIcon className={errorStyles.loggedInIcon} fontSize="large"/>
        <Typography component="h1" variant="h4" className={loginStyles.header}>
          You are logged in
        </Typography>
        <Typography component="span" variant="span" className={loginStyles.subheader}>
          You will be redirected to the lobby page...
        </Typography>
      </header>
    </Container>
  );
};

type Props = {
  history: {
    push: (link: string) => void,
  }
};

export default GuestScreen;
