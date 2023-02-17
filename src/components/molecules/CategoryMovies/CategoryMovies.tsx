import React, { useEffect, useState } from "react";
import CategoryFilter from "@/components/atoms/CategoryFilter/CategoryFilter";
import RenderMovies from "@/components/atoms/RenderMovies/RenderMovies";
import { moviesData } from "@/constants/movies";
import { MovieType } from "@/models/movie.model";

const CategoryMovies = () => {

  const [category, setCategory] = useState<string>('Select category');
  const [categoryMovies, setCategoryMovies] = useState<MovieType[]>();

  const handleCategoryMovie = () => {
    const moviesFiltered = moviesData.filter((movie) => movie.genres.find((gender) => gender.name === category));
    setCategoryMovies(moviesFiltered);
  };
  useEffect(() => {
    handleCategoryMovie();
  }, [category]);

  return <section>
    <div className="flex items-center justify-between">
      <span className="font-semibold text-gray-700 text-base dark:text-white mt-9 mb-1 ml-1">Category Movies</span>
    </div>
    <CategoryFilter category={category} setCategory={setCategory}/>
    <RenderMovies addToFavoriteICon movies={categoryMovies}/>
  </section>;
};


export default CategoryMovies;