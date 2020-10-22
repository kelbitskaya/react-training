import Constants from '../constants';

const filter = (movieGenre, movieList) => {
  if (movieGenre === Constants.GENRE[0].title) {
    updateMovies(movieList);
    setActiveGenre(genres[0]);
  } else {
    const currentGenre = movieGenre.title;

    const sortedMovieList = movieList.filter((movie) => movie.genre.some(
      (genre) => genre.toLowerCase === activeGenre,
    ));

    const activeGenreIndex = genres.findIndex((el) => el.title === currentGenre);
    setActiveGenre(genres[activeGenreIndex]);

    updateMovies(sortedMovieList);
  }
};

export default filter;
