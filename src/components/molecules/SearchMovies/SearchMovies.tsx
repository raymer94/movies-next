import React, { useEffect, useState } from 'react';
import { SEARCH_MOVIES } from "@/pages/api/querys/movies.query";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GetSearchMovieType } from "@/models/movie.model";
import RenderMovies from '@/components/atoms/RenderMovies/RenderMovies';
import debounce from 'lodash.debounce';
import LoaderSpinner from '@/components/atoms/LoaderSpinner/LoaderSpinner';

const SearchMovies = () => {

  const [search, setSearch] = useState<string>('');
  const [searchMovie, {data, loading}] = useLazyQuery<GetSearchMovieType>(SEARCH_MOVIES);

  const movieSearch = data?.searchMovie;

  const handleSearch = (movie: string) => {
    setSearch(movie);
  };

  const debouncedHandleSearch = debounce(handleSearch, 500);

  useEffect(() => {
    searchMovie({variables: {
      term: search
    }});
  }, [search]);

  if(loading) {
    return <LoaderSpinner />;
  }

  return <section className="mb-8">
    <div className="flex items-center justify-between">
      <span className="font-semibold text-gray-700 text-base dark:text-white mt-9 mb-2 ml-">Search Movies</span>
    </div>
    <div className="relative items-center content-center flex">
      <span className="text-gray-400 absolute left-4 cursor-pointer">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </span>
      <input className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5
      ext-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
      onChange={(e) => debouncedHandleSearch(e.currentTarget.value)} placeholder="Search ..." type="text" />
    </div>
    <RenderMovies movies={movieSearch} />
  </section>;
};

export default SearchMovies;
