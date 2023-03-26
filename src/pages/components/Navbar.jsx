import React from "react";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMenu,
} from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="flex md:flex-row flex-col justify-between w-full md:px-40 items-center pt-6 bg-[#f4f4f4] pb-5">
      <div className="text-md">Logo</div>
      <div className="flex gap-5 text-gray-600 md:mt-0 mt-5">
        <div className="space-x-5 text-xl">
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
        <div className="flex items-center gap-5">
          <AiOutlineTwitter size={25} />
          <AiOutlineLinkedin size={25} />
          <AiOutlineFacebook size={25} />
        </div>
      </div>
    </div>
  );
}
