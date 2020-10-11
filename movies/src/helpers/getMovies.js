import axios from 'axios';

export const getMovies = () => {
  return axios
    .get('http://localhost:4000/movies')
    .then((response) => response.data)
};

export default getMovies;


