const JOKES_URL = 'https://v2.jokeapi.dev/joke/Dark?type=single&amount=10';

const storage = window.localStorage;

const setJokes = (likedJokes) => {
  storage.setItem('likedJokes', JSON.stringify(likedJokes));
};

export const getJokes = async () => {
  const jokes = await fetch(JOKES_URL).then(res => res.json()).then(res => res.jokes);

  if (!storage.getItem('likedJokes')) {
    setJokes([]);
  }

  return jokes.map(joke => {
    return {
      text: joke.joke,
      id: joke.id
    }
  });
};
