import React from 'react';
import pkpLogo from '@assets/graphics/PKP.svg';
import {Container, Typography} from '@material-ui/core';
import {useLoginStyles, history} from '@util';
import './splash-page.scss';

const SplashPage = () => {

  React.useEffect(() => {
    setTimeout(() => history.push('/start'), 4900);
  }, []);
  const classes = useLoginStyles();
  return (
    <Container component="main" maxWidth="xs"  className="main__container">
      <img className="upper-img-splash" src={pkpLogo} alt="PKP Intercity"/>
      <header className="splash__header">
        <Typography component="h1" variant="h4" className={`${classes.header} title`}>
          #TrainToKnowledge
        </Typography>
        <Typography component="span" variant="span" className={classes.subheader}>
          A game for PKP Intercity passengers.
        </Typography>
      </header>
      <div className="bottom__fill">

      </div>
    </Container>
  );
};

export default SplashPage;
