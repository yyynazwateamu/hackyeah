//@flow
import React, {useState, useEffect} from 'react';

const GuestScreen = (props : Props) => {

  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => props.history.push("/game"),
      3000);
    setRedirect(timeout);

    return () => {
      clearTimeout(redirect);
    }
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
}

export default GuestScreen;
