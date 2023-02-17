import React from "react";
import UpcomingMovies from "@/components/molecules/UpcomingMovies/UpcomingMovies";
import CategoryMovies from "@/components/molecules/CategoryMovies/CategoryMovies";
import SearchMovies from "@/components/molecules/SearchMovies/SearchMovies";

const MovieMainPage = () => {
  return (
    <>
      <SearchMovies />
      <UpcomingMovies />
      <CategoryMovies />
    </>
  );
};


export default MovieMainPage;