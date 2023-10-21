import { useRouter } from 'next/router'
import React from 'react'
import requests from '../../utils/requests';
import Castcard from '../../components/CastCard';
import Card from '../../components/Card';
import IndividualMovie from '../../components/IndividualMovie';
import { Image, Stat, StatLabel, StatNumber, Tag, Text } from '@chakra-ui/react';
import Header from '../../components/Header';

const Movie = ({ results }) => {
  const router = useRouter()
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const keywords = results?.keywords?.keywords || results?.keywords?.results;
  const cast = results?.casts?.cast || results?.credits?.cast
  let languageNames = new Intl.DisplayNames(['en'], { type: 'language' });

  const getLink = (media_type, link) => {
    if (media_type == 'YouTube') {
      return 'https://www.youtube.com/embed/' + link
    }
    if (media_type == 'Vimeo')
      return 'https://vimeo.com/' + link
  }
  return (
    <div className="w-full h-full">
      <Header />
      <div className=" flex flex-col items-center ">
        {true && (
          <IndividualMovie
            key={results?.id}
            posterImage={
              BASE_URL + results?.poster_path
            }
            backgroundImage={BASE_URL + results?.backdrop_path}
            title={results?.title ?? results?.original_name}
            releaseDate={results?.release_date || results?.first_air_date}
            overview={results?.overview}
            tagline={results?.tagline}
            createdBy={results?.created_by}
            genres={results?.genres}
            episode_run_time={
              results?.runtime ?? results?.episode_run_time
            }
            rating={results?.vote_average}
            streaming={results?.networks?.[0]?.logo_path}
          />
        )}

        <div className="max-w-[1440px] w-full my-8 px-8 flex gap-5 md:flex-row flex-col  ">
          <div className="md:max-w-[75%]">
            <div className="flex gap-5 items-center">
              <h2 className="text-2xl font-semibold">Cast</h2>
            </div>
            <div>
              <div className="relative my-5">
                <div className="p-3 gap-3 flex overflow-x-scroll transparentscroll ">
                  {cast &&
                    cast?.slice(0, 20)?.map((result) => {
                      return (
                        <Castcard
                          key={result.id}
                          id={result.id}
                          coverImage={result.profile_path}
                          title={result.name || result.original_name}
                          character={result.character}
                        />
                      );
                    })}
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent h-full w-[5%]" />
              </div>
              {results?.videos?.results?.length > 0 && <div className='relative'>
                <div className="flex gap-5 items-center">
                  <h2 className="text-2xl font-semibold">Media</h2>
                </div>
                <div className="p-3 gap-3 flex overflow-x-scroll transparentscroll  ">
                  {results?.videos?.results &&
                    results?.videos?.results?.slice(0, 10)?.map((result) => {
                      return (
                        <div className="h-[300px] w-max" key={result?.key}>
                          <iframe src={getLink(result?.site, result?.key)}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            className="h-[85%] w-[400px] mb-3 rounded"
                          />
                          <Text>{result?.name}</Text>
                        </div>
                      );
                    })}
                </div>
              </div>}
              {results?.recommendations?.results?.length > 0 && (<div className="relative my-5">
                <div className="flex gap-5 items-center">
                  <h2 className="text-2xl font-semibold">Recommendation</h2>
                </div>
                <div className="p-3 gap-3 flex overflow-x-scroll transparentscroll">
                  {results?.recommendations?.results &&
                    results?.recommendations?.results?.slice(0, 20)?.map((result) => {
                      return (
                        <Card
                          key={result.id}
                          id={result.id}
                          coverImage={
                            result.poster_path || result.backdrop_path
                          }
                          title={result.original_title || result.original_name}
                          releaseDate={
                            result.release_date || result.first_air_date
                          }
                          media_type={result.media_type}
                        />
                      );
                    })}
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent h-full w-[5%]" />
              </div>)}
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2 px-5">
            <h3 className="font-semibold text-xl">Facts</h3>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{results?.status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Original language</h3>
              <p>{languageNames.of(results?.original_language)}</p>
            </div>
            {results?.type ? (
              <div>
                <h3 className="font-semibold">Type</h3>
                <p>{results?.type}</p>
              </div>
            ) : (
              <span>
                <Stat h={'min-content'} className='h-min'>
                  <StatLabel className="font-semibold">budget</StatLabel>
                  <StatNumber h={'min-content'} fontSize={'md'}>
                    $
                    {results?.budget
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </StatNumber>
                </Stat>
              </span>
            )}
            {results?.revenue ? (
              <span>
                <Stat>
                  <StatLabel className="font-semibold">Revenue</StatLabel>
                  <StatNumber fontSize={'md'}>
                    $
                    {results?.revenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </StatNumber>
                </Stat>
              </span>
            ) : (
              ""
            )}
            <div>
              <h3 className="font-semibold">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {keywords && keywords.map((res) => (<Tag size={'md'} key={res?.id}>{res?.name}</Tag>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const folder_name = context.params.folder_name
  console.log("id", id)
  const request = await fetch(
    `https://api.themoviedb.org/3/${folder_name}/${id}${requests?.['fetchMovie']?.url}`
  ).then((res) => res.json()).catch((err) => {
    console.log(err)
  });
  console.log(request)

  return {
    props: {
      results: request,
    },
  };
}

export default Movie