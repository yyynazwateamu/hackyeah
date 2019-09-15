//@flow
import React, {useEffect} from 'react';

let redirect = null;

const ProtectedScreen = (props: Props) => {

  useEffect(() => {
    redirect = setTimeout(() => props.history.push('/start'),
      3000);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div>
      Brak uprawnień. Zostaniesz przeniesiony do strony logowania.
    </div>
  );
};

type Props = {
  history: {
    push: (link: string) => void,
  }
};

export default ProtectedScreen;
