"use client";
import { useState } from "react";
import { Menu, X, House } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <div className="p-4 fixed bg-stone-100 mb-4 top-0 z-[300] w-full text-[#1B1D29]">
      <div className="flex items-center  justify-between flex-row">
        <Link href="/">
          <div className="flex items-center gap-1 flex-row">
            <House size={35} />
            <h3 className="font-bold font-[Boldonse] mt-1 text-base">MoveIn</h3>
          </div>
        </Link>
        <div
          className={`flex md:flex md:justify-center transition-transform ease-in-out duration-300 items-center bg-white pt-[18%] pl-2.5 md:pl-0 md:pt-0 absolute md:relative w-[50%] md:w-auto h-[100vh] md:h-0 right-0 top-0 capitalize flex-col md:flex-row gap-12 font-[700] text-base ${
            navOpen
              ? "translate-x-0  overflow-y-clip"
              : "translate-x-full md:translate-x-0"
          }`}
        >
          <X
            onClick={toggleNav}
            className="md:hidden absolute my-6 top-1 right-3"
          />
          {/* <Link className=" hover:text-yellow-400" href="/">
            <p>Home</p>
          </Link> */}

          <Link className=" hover:text-yellow-400" href="/properties">
            <p>listings</p>
          </Link>
          <Link className=" hover:text-yellow-400" href="/saved-listing">
            <p>favorites</p>
          </Link>
          <Link className=" hover:text-yellow-400" href="/abouts">
            <p>about</p>
          </Link>
        </div>
        {/* <div className="hidden md:flex items-center gap-1">
          <Mail size={15} />
          <p className="font-medium  text-sm">Get a Quote</p>
        </div> */}
        <Menu onClick={toggleNav} className="block md:hidden" />
      </div>
    </div>
  );
}
