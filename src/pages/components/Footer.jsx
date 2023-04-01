import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500">
      <div className="flex flex-col justify-center mx-auto space-y-5 py-10 relative">
        <div className="text-center text-4xl">Logo</div>
        <div>
          <div className="space-x-10 text-2xl text-center font-bold">
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
        </div>
        <hr className="mb-5 mx-20" />
        <div className="text-center text-2xl">
          © 2023 Cissé Labs Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
