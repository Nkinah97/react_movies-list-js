import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';
export const MovieList = () =>  {
  return (
    <div className="movies" data-cy="MoviesList">
      {moviesFromServer.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  )
};
