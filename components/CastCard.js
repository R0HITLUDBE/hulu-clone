import { Image } from "@chakra-ui/react";

const Castcard = ({ title, coverImage, character }) => {
  return (
    <div className="h-full w-[150px] min-w-[150px] ">
      <Image
        height={'225px'}
        width={'150px'}
        src={
          `https://image.tmdb.org/t/p/original/${coverImage} `}
        alt=""
        loading="lazy"
        className="rounded-md h-[225px] w-[150px] object-cover bg-[#dbdbdb]"
      />
      <h3 className="font-bold ">{title}</h3>
      <p className="text-sm">{character}</p>
    </div>
  );
};

export default Castcard;
