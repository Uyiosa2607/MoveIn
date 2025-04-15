"use client";
import { useState, useEffect } from "react";
import HomeListingCard from "@/components/home_listing_card";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

interface Listing {
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  category: string;
  id: string;
  img: string[];
}

export default function HomeGrid() {
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const length: number = 6;

  async function getListings() {
    try {
      const { data, error } = await supabase.from("listings").select();
      if (!error) {
        setFeaturedListings(data);
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
    <div>
      {loading ? (
        <>
          {
            <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-3">
              {Array.from({ length }).map((_, index) => (
                <div key={index}>
                  <Skeleton className="rounded-t-2xl mb-1.2 lg:rounded-t-3xl w-full h-[120px] lg:h-[190px]" />
                  <Skeleton className="round-md h-5 w-full my-1.5" />
                  <Skeleton className="round-md h-5 w-full" />
                </div>
              ))}
            </div>
          }
        </>
      ) : (
        <>
          {
            <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-3">
              {featuredListings.map((listing) => (
                <HomeListingCard listing={listing} key={listing.title} />
              ))}
            </div>
          }
        </>
      )}
    </div>
  );
}
