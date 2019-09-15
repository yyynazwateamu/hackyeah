//@flow
import React, {useEffect} from 'react';

let redirect = null;

const GuestScreen = (props: Props) => {

  useEffect(() => {
    redirect = setTimeout(() => props.history.push('/lobby'),
      3000);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div>
      Jesteś już zalogowany. Zostaniesz przeniesiony do strony głównej.
    </div>
  );
};

type Props = {
  history: {
    push: (link: string) => void,
  }
};

export default GuestScreen;
