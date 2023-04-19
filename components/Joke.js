import PropTypes from 'prop-types';

export default function JokeGenerator({ joke, btnText }) {
  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : ''} </p>
    </>
  );
}

JokeGenerator.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btnText: PropTypes.string,
};

JokeGenerator.defaultProps = {
  joke: {
    setup: 'Default Setup',
    punchline: 'Default Punchline',
  },
  btnText: 'Get A Joke',
};
