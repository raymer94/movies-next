import { MovieType } from "@/models/movie.model";

export const getFavoriteMovies = async () => {
  const cacheStorage = await caches.open("favoriteMovie");
  const cachedResponse = await cacheStorage.match("http://localhost:3000");
  return await cachedResponse?.json() || [];
};

export const isFavoriteMovieById = async (movieId: number) => {
  const favoriteMovies = await getFavoriteMovies();
  return favoriteMovies.some((favorite: MovieType) => favorite.id === movieId);
};

export const deleteFavoriteMovie = async (movieId: number | undefined) => {
  const cacheStorage = await caches.open("favoriteMovie");
  const cachedResponse = await cacheStorage.match("http://localhost:3000");
  const response = await cachedResponse?.json() || [];
  const newMovies = response.filter((movie: MovieType) => movie.id !== movieId);

  const data = new Response(JSON.stringify(newMovies));
  caches.open('favoriteMovie').then((cache) => {
    cache.put('http://localhost:3000', data);
  });
};

export const handleMovieStateToCache = async (movie: MovieType | undefined) => {
  const cacheStorage = await caches.open("favoriteMovie");
  const cachedResponse = await cacheStorage.match("http://localhost:3000");
  const response = await cachedResponse?.json() || [];
  response.push(movie);

  const data = new Response(JSON.stringify(response));
  caches.open('favoriteMovie').then((cache) => {
    cache.put('http://localhost:3000', data);
  });
};
