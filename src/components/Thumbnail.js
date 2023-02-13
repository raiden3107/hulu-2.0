import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group p-4 cursor-pointer transition ease-in sm:hover:scale-105">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        fill={false}
        height={400}
        width={600}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="truncate text-2xl text-white mt-1 transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <HandThumbUpIcon className="h-7 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
