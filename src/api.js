const JOKES_URL = 'https://v2.jokeapi.dev/joke/Dark?type=single&amount=10';

const storage = window.localStorage;

const setLikedJokes = (likedJokes) => {
  storage.setItem('likedJokes', JSON.stringify(likedJokes));
};

const getLikedJokes = () => {
  return JSON.parse(storage.getItem('likedJokes'));
};

export const getJokes = async () => {
  if (!storage.getItem('likedJokes')) {
    setLikedJokes(new Array);
  }

  const jokes = await fetch(JOKES_URL).then(res => res.json()).then(res => res.jokes);
  const likedIDs = getLikedJokes();
  
  return jokes.map(joke => {
    return {
      text: joke.joke,
      id: joke.id,
      liked: likedIDs.length ? likedIDs.includes(joke.id) : false
    }
  });
};

export const addLikedJoke = (id) => {
  const likedJokes = getLikedJokes();
  likedJokes.push(id)

  setLikedJokes(likedJokes);
}

export const removeLikedJoke = (id) => {
  setLikedJokes(getLikedJokes().filter(likedID => !likedID === id));
}
