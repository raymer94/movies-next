import React, { useEffect, useState } from "react";
import Tooltip from "@/components/atoms/ToolTip/ToolTip";
import { MovieType } from "@/models/movie.model";
import { handleMovieStateToCache, isFavoriteMovieById } from "@/utils/favorite-movie.states.utils";
import Image from "next/image";
import heart from "../../../../public/heart.png";
import heart2 from "../../../../public/heart-2.png";

interface ToolTipFavoriteButtonType {
    movie: MovieType;
}

const ToolTipFavoriteButton = ({ movie }: ToolTipFavoriteButtonType) => {
  const [addFavorite, setAddFavorite] = useState<string>("Add to favorite");
  const [isFavorite, setIsfavorite] = useState<boolean>(false);

  const handleFavoriteButton = () => {
    handleMovieStateToCache(movie);
    setAddFavorite("Added!");
    setIsfavorite(true);
  };

  const isFavoriteMovie = async () => {
    const favoriteMovies = await isFavoriteMovieById(movie.id);
    setIsfavorite(favoriteMovies);
  };

  useEffect(() => {
    isFavoriteMovie();
  }, [isFavorite, addFavorite]);

  return (
    <Tooltip message={isFavorite? "Added!" : addFavorite}>
      {
        isFavorite ?
          (<button className="p-2.5 bg-gray-800/80 bg-red rounded-lg text-white self-end hover:bg-red-600/80
            animate-bounce inline-flex" onClick={handleFavoriteButton}>
            <Image alt="favorite" height={30} src={heart} width={30} />
          </button>) :
          (<button className="p-2.5 bg-gray-800/80 bg-red rounded-lg text-white self-end hover:bg-red-600/80
        animate-bounce inline-flex" onClick={handleFavoriteButton}>
            <Image alt="no-favorite" height={30} src={heart2} width={30} />
          </button>)
      }

    </Tooltip>
  );
};

export default ToolTipFavoriteButton;