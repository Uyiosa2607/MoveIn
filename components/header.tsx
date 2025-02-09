"use client";
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <div className="p-4 fixed bg-stone-100 mb-4 top-0 z-[100] w-full text-neutral-800">
      <div className="flex items-center  justify-between flex-row">
        <Link href="/">
          <div>
            <h3 className="font-bold text-lg">Brand Logo.</h3>
          </div>
        </Link>
        <div
          className={`flex lg:flex lg:justify-center transition-transform ease-in-out duration-300 items-center bg-white pt-[18%] pl-2.5 lg:pl-0  lg:pt-0 absolute lg:relative w-[50%]  lg:w-auto h-[100vh] lg:h-0 right-0 top-0  capitalize flex-col lg:flex-row gap-12 font-medium text-sm ${
            navOpen ? "translate-x-0 overflow-y-clip" : "translate-x-full"
          }`}
        >
          <X
            onClick={toggleNav}
            className="lg:hidden absolute my-6 top-1 right-3"
          />
          <Link className=" hover:text-yellow-400" href="/">
            <p>Home</p>
          </Link>

          <Link className=" hover:text-yellow-400" href="/properties">
            <p>listings</p>
          </Link>
          <Link className=" hover:text-yellow-400" href="/abouts">
            <p>about</p>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-1">
          <Mail size={15} />
          <p className="font-medium  text-sm">Get a Quote</p>
        </div>
        <Menu onClick={toggleNav} className="block lg:hidden" />
      </div>
    </div>
  );
}
