import { useState } from 'react';
import { Button } from 'react-bootstrap';
import JokeGenerator from '../components/Joke';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <>
      <JokeGenerator joke={joke} btnText={btnText} />
      {
        btnText === 'Get A Joke' || btnText === 'Get A New Joke'
          ? <Button onClick={getAJoke}>{btnText}</Button>
          : <Button onClick={() => setButton('Get A New Joke')}>{btnText}</Button>
      }
    </>
  );
}

export default Home;
