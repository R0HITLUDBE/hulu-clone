import { CircularProgress, CircularProgressLabel, IconButton, Image, Link } from "@chakra-ui/react";
import { HeartIcon } from "@heroicons/react/outline";
import React, { useState } from "react";


const IndividualMovie = ({
  posterImage,
  backgroundImage,
  title,
  releaseDate,
  overview,
  tagline,
  createdBy,
  genres,
  episode_run_time,
  rating,
  streaming
}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="md:p-8 w-screen  min-h-[571px] flex justify-center bg-cover  bg-[right -200px top] bg-no-repeat bg-center items-center "
      style={{
        backgroundImage: `linear-gradient(to left,rgba(0, 0, 0, 60%),rgba(60, 60, 60, 100%)),url(${backgroundImage})`,
        width: 'fit-content'
      }}
    >
      <div>
        <div
          className={`flex md:flex-row items-center flex-col text-white max-w-[1440px] w-full `}
        >
          <div className="">
            <Image
              src={posterImage}
              alt="poster"
              loading="lazy"
              className="rounded md:h-[450px] h-[147px] min-w-[98px] md:min-w-[300px] object-cover"
            />
            {(streaming && <div className="py-2 md:flex gap-3 justify-center  rounded-b-lg hidden ">
              <Image w={20} h={10} src={BASE_URL + streaming} className="h-[40px] w-auto" alt="netflix" />
              <p>
                Now Streaming <br /> <span className="m-0">Watch Now</span>
              </p>
            </div>)}
          </div>
          <div className="p-5 flex flex-col md:gap-5 gap-2 items-center md:items-start">
            <Link _hover={{
              textDecoration: 'none',
              opacity: '80%'
            }} isExternal="true" href="">
              <h2 className="md:text-4xl font-bold text-2xl ">
                {title}
                <span className="font-normal text-white/50 ">
                  {" "} ({releaseDate.substring(0, 4)})
                </span>
              </h2>
            </Link>
            <p>
              {releaseDate} (US) &#8226;{" "}
              {genres.map((res) => res.name).join(', ')} {" "}
              &#8226; {episode_run_time} min
            </p>
            <div className="flex gap-5">
              <div className="flex flex gap-2 items-center">
                <CircularProgress value={Math.ceil(rating * 10)} color='green.400'>
                  <CircularProgressLabel> {Math.ceil(rating * 10)}%</CircularProgressLabel>
                </CircularProgress>
                <p className="text-md">User <br />Score</p>
              </div>
              <IconButton
                bgColor={'rgb(3,37,65)'}
                color={'white'}
                aria-label='Call Segun'
                size='lg'
                borderRadius={'100'}
                _hover={{
                  backgroundColor: ''
                }}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                }
              />
              <IconButton
                bgColor={'rgb(3,37,65)'}
                color={'white'}
                aria-label='Call Segun'
                size='lg'
                borderRadius={'100'}
                _hover={{
                  backgroundColor: ''
                }}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                }
              /><IconButton
                bgColor={'rgb(3,37,65)'}
                color={'white'}
                aria-label='Call Segun'
                size='lg'
                borderRadius={'100'}
                _hover={{
                  backgroundColor: ''
                }}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
                }
              /><IconButton
                bgColor={'rgb(3,37,65)'}
                color={'white'}
                aria-label='Call Segun'
                size='lg'
                borderRadius={'100'}
                _hover={{
                  backgroundColor: ''
                }}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                }
              />
            </div>
            <div>
              <p className=" italic text-lg text-white/70">{tagline}</p>
              <h3 className="font-semibold text-xl">Overview</h3>
              <p className="">{overview}</p>
            </div>
            <div className="flex justify-start gap-10">
              {createdBy &&
                createdBy.map((res) => {
                  return (
                    <div key={res.name} >
                      <p className="font-bold">{res.name}</p>
                      <p className="text-sm">Creator</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualMovie;
