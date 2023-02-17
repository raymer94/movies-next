import React from "react";
import { GET_UPCOMING_MOVIES } from "@/pages/api/querys/movies.query";
import { useQuery } from "@apollo/client";
import { GetUpcomingMovieType } from "@/models/movie.model";
import RenderMovies from "@/components/atoms/RenderMovies/RenderMovies";
import LoaderSpinner from "@/components/atoms/LoaderSpinner/LoaderSpinner";

const UpcomingMovies = () => {
  const {data, loading} = useQuery<GetUpcomingMovieType>(GET_UPCOMING_MOVIES);
  const upComingMovies = data?.upcomingMovies;

  if(loading) {
    return <LoaderSpinner />;
  }

  return <section>
    <div className="flex items-center justify-between">
      <span className="font-semibold text-gray-700 text-base dark:text-white">Upcoming Movies</span>
    </div>
    <RenderMovies movies={upComingMovies} />
  </section>;
};


export default UpcomingMovies;