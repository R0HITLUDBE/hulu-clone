import Image from "next/image";
import React, { useContext } from "react";

const Card = ({ title, releaseDate, coverImage, id, media_type }) => {
  return (
    <div
      className="h-full w-[150px] min-w-[150px]  "
    >
      <Image
        src={
          `https://image.tmdb.org/t/p/original/${coverImage} `
        }
        alt=""
        loading="lazy"
        className="rounded-md h-[225px] w-[150px] object-cover bg-[#dbdbdb]"
        width={'150px'}
        height={'225px'}
      />
      <h3 className="font-bold ">{title}</h3>
      <p className="text-sm">{releaseDate}</p>
    </div>
  );
};

export default Card;
