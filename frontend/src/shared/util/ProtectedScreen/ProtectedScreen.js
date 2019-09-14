//@flow
import React, {useState, useEffect} from 'react';

const ProtectedScreen = (props: Props) => {

  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => props.history.push('/login'),
      3000);
    setRedirect(timeout);

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
