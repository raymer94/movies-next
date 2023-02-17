export type GetUpcomingMovieType = {
    upcomingMovies: MovieType[];
}
export type GetSearchMovieType = {
    searchMovie: MovieType[];
}

export type GetMovieDetailsType = {
    movieDetail: MovieType;
}

export type MovieType = {
    id: number
    poster_path: string
    backdrop_path: string
    title: string
    overview: string
    vote_average: number
    genres: [Genres]
  };

  type Genres = {
    id: number
    name: string
  }
