"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronRight } from "lucide-react";
import ListingCard from "@/components/listing_card";
import { supabase } from "@/lib/supabase";

interface Listing {
  title: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  category: string;
  id: string;
  img: [];
}

export default function Properties() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getListings() {
    try {
      const { data, error } = await supabase.from("listings").select();
      if (!error) return setListings(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="bg-[#ffff]">
      <Header />
      <div className="bg-[url('/modern_landscape.jpg')] w-full h-[240px] lg:h-[400px] bg-cover " />
      <div className="container w-full px-2 lg:w-[70%] mx-auto">
        <div className="text-xs lg:text-sm pl-2 font-medium font-[Montserrat] capitalize mt-5 flex items-center flex-row gap-6">
          <p className="w-fit p-1 lg:p-1.5 rounded-2xl border border-neutral-700 px-6 lg:px-6">
            filter
          </p>
        </div>
        <div className="flex items-center mt-3 lg:mt-5 flex-row">
          <p className="font-medium text-base lg:text-lg pl-2">
            Available listings
          </p>
          <ChevronRight size={15} />
        </div>
        <div className="px-2 gap-y-6 gap-x-2.5 lg:gap-x-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
