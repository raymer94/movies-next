import React, { useEffect, useState } from "react";
import RenderMovies from "@/components/atoms/RenderMovies/RenderMovies";
import { getFavoriteMovies } from "@/utils/favorite-movie.states.utils";
import { MovieType } from "@/models/movie.model";

const FavoritesMovies = () => {
  const [favoritesMoviesState, setFavoritesMoviesState] = useState<MovieType[]>([]);
  useEffect(() => {
    const callMovies = async () => {
      const movies = await getFavoriteMovies();
      setFavoritesMoviesState(movies);
    };
    callMovies();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-base dark:text-white">Favorites Movies</span>
      </div>
      <RenderMovies movies={favoritesMoviesState} />
    </section>
  );
};


export default FavoritesMovies;