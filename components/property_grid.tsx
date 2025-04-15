"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ListingCard from "@/components/listing_card";
import { supabase } from "@/lib/supabase";

interface Listing {
  title: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  category: string;
  location: string;
  id: string;
  img: [];
}

export default function PropertyGrid() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const length: number = 6;

  async function getListings() {
    try {
      const { data, error } = await supabase.from("listings").select();
      if (!error) {
        setListings(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListings();
  }, []);
  return (
    <div className="px-2 gap-y-6 gap-x-2.5 lg:gap-x-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <>
          {Array.from({ length }).map((_, index) => (
            <div key={index}>
              <Skeleton className="rounded-t-2xl mb-1.2 lg:rounded-t-3xl w-full h-[120px] lg:h-[190px]" />
              <Skeleton className="round-md h-5 w-full my-1.5" />
              <Skeleton className="round-md h-5 w-full" />
            </div>
          ))}
        </>
      ) : (
        <>
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </>
      )}
    </div>
  );
}
