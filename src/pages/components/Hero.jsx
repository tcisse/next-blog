/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-[#f4f4f4]">
      <div className="max-w-6xl flex flex-col mx-auto py-6 justify-between items-center md:items-center md:flex-row md:pt-16 md:pb-40 px-4">
        <div className="md:max-w-2xl">
          <p className="md:text-7xl text-3xl">
            À la <span className="italic font-normal">recherche</span> d'un
            nouveau <span className="font-bold">challenge.</span> Pour changer
            le <span className="font-bold">monde</span> du
            <span className="font-bold box-decoration-slice bg-[#f0ff00] ml-2">
              digital.
            </span>
          </p>
        </div>
        <div>
          <Image src="/assets/hero_image.webp" width={500} height={70} alt="" />
        </div>
      </div>
      <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span class="inline md:block">Start Crafting Your</span>{" "}
          <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
            Next Great Idea
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a
              href="#_"
              type="button"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Purchase Now
            </a>
            <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
              only $15/mo
            </span>
          </span>
          <a href="#_" className="mt-3 text-sm text-indigo-500">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
