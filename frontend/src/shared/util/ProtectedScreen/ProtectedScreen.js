//@flow
import React, {useEffect} from 'react';
import {Container, Typography} from '@material-ui/core';
import {useLoginStyles, useErrorStyles} from '@util';
import ClearIcon from '@material-ui/icons/Clear';

let redirect = null;

const ProtectedScreen = (props: Props) => {
  const loginStyles = useLoginStyles();
  const errorStyles = useErrorStyles();
  useEffect(() => {
    redirect = setTimeout(() => props.history.push('/start'),
      3000);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <Container component="main" maxWidth="xs" >
      <header className="header">
        <ClearIcon className={errorStyles.errorIcon} fontSize="large"/>
        <Typography component="h1" variant="h4" className={loginStyles.header}>
          Unauthorized
        </Typography>
        <Typography component="span" variant="span" className={loginStyles.subheader}>
          You will be redirected to login page...
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

export default ProtectedScreen;
