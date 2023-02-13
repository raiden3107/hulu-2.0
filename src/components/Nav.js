import requests from "@/utilities/requests";
import { useRouter } from "next/router";
import React from "react";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-4 space-x-10 sm:space-x-20 overflow-x-scroll whitespace-nowrap text-2xl scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer last:pr-24 transition duration-100 hover:text-white hover:scale-125 active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
