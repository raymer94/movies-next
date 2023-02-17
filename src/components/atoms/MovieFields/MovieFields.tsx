import React from "react";
import { MovieType } from "@/models/movie.model";

interface MovieFieldsType {
    movie: MovieType | undefined;
}
const MovieFields = ({ movie }: MovieFieldsType) => {
  return (
    <div>
      <div className="mt-6 mb-2 font-bold">
                Movie name:
      </div>
      <div><p>{movie?.title || '-'}</p></div>
      <div className="mt-6 mb-2 font-bold">
                overview:
      </div>
      <div><p>{movie?.overview || '-'}</p></div>
      <div className="mt-6 mb-2 font-bold">
                Rate:
      </div>
      <div><p>{movie?.vote_average || '-'}</p></div>
      <div className="mt-6 mb-2 font-bold">
                Genres:
      </div>
      <div><p>{movie?.genres.map((gen) => gen.name).join(", ") || '-'}</p></div>
    </div>
  );

};

export default MovieFields;