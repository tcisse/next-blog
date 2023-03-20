import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between w-full px-10 items-center pt-2 bg-[#f4f4f4] pb-5">
      <div className="text-md">
        <span>Je suis Anna Franco</span>
        <p className="text-gray-500">
          Une{" "}
          <span className="box-decoration-slice bg-[#f0ff00]">
            activiste numérique,
          </span>{" "}
          rédactrice et consultante
        </p>
      </div>
      <div className="flex gap-10 text-gray-600">
        <div className="md:space-x-5 text-xl">
          <Link className="hover:underline hover:text-fuchsia-500" href="/">
            Acceuil
          </Link>
          <Link className="hover:underline hover:text-fuchsia-500" href="/">
            Blog
          </Link>
          <Link className="hover:underline hover:text-fuchsia-500" href="/">
            Contact
          </Link>
        </div>
        <div>Medias sociaux logo</div>
      </div>
    </div>
  );
}
