import React, { useEffect, useState } from "react";
import { GET_MOVIE_DETAILS } from "@/pages/api/querys/movies.query";
import { useLazyQuery } from "@apollo/client";
import { GetMovieDetailsType } from "@/models/movie.model";
import { useRouter } from "next/router";
import Image from "next/image";
import { deleteFavoriteMovie, getFavoriteMovies, handleMovieStateToCache, isFavoriteMovieById } from "@/utils/favorite-movie.states.utils";
import MovieFields from "@/components/atoms/MovieFields/MovieFields";
import LoaderSpinner from "@/components/atoms/LoaderSpinner/LoaderSpinner";

const MovieDetails = () => {
  const router = useRouter();
  const [isFavorite, setIsfavorite] = useState<boolean>(false);
  const [callDetailsMovie, {data, loading}] = useLazyQuery<GetMovieDetailsType>(GET_MOVIE_DETAILS,
    {variables: {id: parseInt(router.query.movieId?.toString() || '')}});

  const movie = data?.movieDetail;

  const isFavoriteMovie = async () => {
    const favoriteMovies = await isFavoriteMovieById(parseInt(router.query.movieId?.toString() || ''));
    setIsfavorite(favoriteMovies);
  };

  useEffect(() => {
    if(router.isReady){
      callDetailsMovie();
      isFavoriteMovie();
    }
  }, [router.isReady, isFavorite]);

  const handleFavoriteInCache = async () => {
    if(isFavorite){
      await deleteFavoriteMovie(movie?.id);
      setIsfavorite(false);
    } else {
      await handleMovieStateToCache(movie);
      setIsfavorite(true);
    }
  };

  if(loading) {
    return <LoaderSpinner />;
  }

  return <section>
    <div className="flex items-center justify-between">
      <span className="font-semibold text-gray-700 text-base dark:text-white mb-5">Movie details</span>
    </div>
    <div className="flex">
      <Image alt={movie?.title || ''} className=" h-4/5 object-cover" height={300} src={`${process.env.NEXT_PUBLIC_IMG_URL}/${movie?.poster_path}`}
        width={300} />
      <div>
        <button className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5
        text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 ml-2" onClick={() => handleFavoriteInCache()}
        type="button">{isFavorite ? "delete favorite" :"Add favorite"}</button>
      </div>
    </div>
    <MovieFields movie={movie} />
  </section>;
};


export default MovieDetails;