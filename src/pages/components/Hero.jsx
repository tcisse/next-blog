/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-[#f4f4f4]">
      <div className="max-w-6xl flex flex-col mx-auto py-6 justify-between items-center md:items-center md:flex-row md:pt-16 md:pb-40 px-4">
        <div className="md:max-w-2xl">
          <p className="md:text-7xl text-3xl">
            À la <span className="italic font-normal">recherche</span> d'un nouveau{" "}
            <span className="font-bold">challenge.</span> Pour changer le{" "}
            <span className="font-bold">monde</span> du 
             <span className="font-bold box-decoration-slice bg-[#f0ff00] ml-2">digital.</span>
          </p>
        </div>
        <div>
          <Image src="/assets/hero_image.webp" width={500} height={70} alt="" />
        </div>
      </div>
    </div>
  );
}
