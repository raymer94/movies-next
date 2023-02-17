import { gql } from '@apollo/client';

export const GET_UPCOMING_MOVIES = gql`
query QueryMovie{
    upcomingMovies{
        id
        title
        overview
        vote_average
        poster_path
        backdrop_path
        genres {
            id
            name
          }
    }
  }
`;

export const SEARCH_MOVIES = gql`
query Query($term: String!) {
    searchMovie(term: $term) {
        id
        title
        overview
        vote_average
        poster_path
        backdrop_path
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
query QueryMovieDetails($id: Int!) {
    movieDetail(id: $id) {
      id
      title
      overview
      vote_average
      poster_path
      backdrop_path
      genres {
        id
        name
      }
    }
  }
`;
