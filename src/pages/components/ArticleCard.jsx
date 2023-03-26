import React, { useState } from "react";
import Image from "next/image";
import { articleCard } from "../data/data.js";

export default function ArticleCard() {
  const [article, setArticle] = useState(articleCard);

  return (
    <div className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Article
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-3">
          {article.map((item, index) => (
            <article
              key={index}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={item.article_cover}
                alt=""
                width={200}
                height={120}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> */}
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-200">
                <time datetime="2020-03-16" className="mr-8">
                  {item.publication_date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5 text-white font-bold">
                    <Image
                      src={item.author_image}
                      alt=""
                      width={200}
                      height={120}
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {item.author}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#">
                  {/* <span className="absolute inset-0">
                </span> */}
                  {item.article_title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
