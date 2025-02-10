"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import HomeListingCard from "@/components/home_listing_card";
import Footer from "@/components/footer";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Listing {
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  category: string;
  id: string;
}

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getListings() {
    try {
      const { data, error } = await supabase.from("listings").select();
      if (!error) return setFeaturedListings(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="bg-[#fff]">
      <Header />

      {/* Hero Section */}
      <div className="w-full mb-10">
        <div className="w-full h-[300px] py-10 lg:h-[500px] relative">
          <div className="insert-0 w-full h-full bg-cover  absolute bg-[url('/hero_image.jpg')] opacity-90" />

          {/* Hero Text and button */}
          <div className="z-[50] relative pl-3 lg:pl-[10%] text-white top-[20%] lg:top-[40%] w-full">
            <h2 className="text-[1.4rem] leading-tight lg:text-6xl mb-1.5 lg:mb-4 w-[50%] capitalize font-semibold font-[Montserrat]">
              Find your dream house
            </h2>
            <p className="text-sm lg:text-base mb-4 w-[75%] lg:w-[40%] font-[Montserrat] font-medium ">
              explore our comprehensive listings of residential properties, from
              cozy starter homes to luxurious estates{" "}
            </p>
            <button className="w-fit px-6 text-xs font-medium py-2 text-neutral-800 rounded-xl bg-yellow-400 ">
              Browse Now
            </button>
          </div>
        </div>
      </div>
      {/* Hero section ends here */}

      {/* Details section */}
      <div className="container mx-auto w-full px-3 lg:w-[70%]">
        {/* listing section title bar */}
        <div className="flex items-center pt-4 lg:pt-4 lg:mt-0 w-full mb-3 lg:mb-2.5 justify-between">
          <h3 className="font-medium text-base lg:text-2xl">
            Featured Listings
          </h3>
          <Link className=" hover:text-yellow-400" href="/properties">
            <div className="flex items-center gap-1 pr-2">
              <p className="font-medium text-xs">view all</p>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* listing container */}
        <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-3">
          {featuredListings.map((listing) => (
            <HomeListingCard listing={listing} key={listing.title} />
          ))}
        </div>
        {/* listing container ends here */}

        {/* why choose  us section */}
        <div className="hidden rounded-2xl lg:block bg-[url('/modern_house.jpg')] relative bg-center text-white bg-cover h-[300px] lg:h-[420px] mt-10 w-full">
          <div className="h-fit bg-stone-100 rounded-2xl lg:right-[5%]  lg:top-[10%] absolute text-[#0b1d27] w-[320px] lg:w-[400px]  pl-3 lg:pl-7 pb-4 pt-2">
            <h4 className="font-medium w-fit text-base mb-1 lg:mb-1.5 text-yellow-400">
              features
            </h4>
            <h2 className="font-semibold w-fit mb-0.5 lg:mb-2.5 text-2xl lg:text-3xl ">
              Why choose us
            </h2>
            <p className="text-sm w-[95%] font-medium mb-3 lg:mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              corrupti delectus neque nihil repudiandae similique!
            </p>
            <div className="flex gap-2 font-medium text-sm w-fit flex-col">
              <div className="flex gap-1.5 items-center flex-row">
                <div className="w-4 h-4 border-[3px] border-yellow-400 rounded-full"></div>
                <p>Trusted Company</p>
              </div>
              <div className="flex  gap-1.5 items-center flex-row">
                <div className="w-4 border-[3px] border-yellow-400 h-4 rounded-full"></div>
                <p>Transparent Pricing</p>
              </div>
              <div className="flex gap-1.5 items-center flex-row">
                <div className="w-4 border-[3px] border-yellow-400 h-4 rounded-full"></div>
                <p>Professional Support</p>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us ends here */}
      </div>
      <Footer />
    </div>
  );
}
