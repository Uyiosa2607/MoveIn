"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ListingCard from "@/components/listing_card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectTrigger, SelectItem } from "./ui/select";

import { supabase } from "@/lib/supabase";
import { Label } from "./ui/label";
import { SelectValue } from "@radix-ui/react-select";

interface Listing {
  title: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  category: string;
  location: string;
  id: string;
  img: [];
  city: string;
}

export default function PropertyGrid() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [properties, setProperties] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string>("benin city");
  const [bedroom, setBedroom] = useState<number>(0);
  const [bathroom, setBathroom] = useState<number>(0);

  const length: number = 6;

  async function getListings() {
    try {
      const { data, error } = await supabase.from("listings").select();
      if (!error) {
        setListings(data);
        setProperties(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (city ? property.city === city : true) &&
      (bathroom ? property.bathrooms === bathroom : true) &&
      (bedroom ? property.bedrooms === bedroom : true)
    );
  });

  function handleFilter() {
    setListings(filteredProperties);
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="container w-full px-2 lg:w-[70%] mx-auto">
      <div className="text-xs lg:text-sm pl-2 font-medium font-[Montserrat] capitalize mt-5 flex items-center flex-row gap-6">
        <Dialog>
          <DialogTrigger>
            <p className="w-fit p-1 lg:p-1.5 rounded-2xl border border-neutral-700 px-6 lg:px-6">
              filter
            </p>
          </DialogTrigger>
          <DialogContent
            aria-describedby={undefined}
            className="w-[90%] mx-auto  rounded-xl"
          >
            <DialogTitle>Listing Filter</DialogTitle>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label>
                  <p className="text-base">City</p>
                </Label>
                <Select value={city} onValueChange={(value) => setCity(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All</SelectItem>
                    <SelectItem value="benin city">Benin City</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="port harcourt">Port Harcourt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <Label>
                  <p className="text-base">Bedroom</p>
                </Label>
                <Select
                  value={String(bedroom)}
                  onValueChange={(value) => setBedroom(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Bedroom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Default</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <Label>
                  <p className="text-base">Bathroom</p>
                </Label>
                <Select
                  value={String(bathroom)}
                  onValueChange={(value) => setBathroom(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Bathroom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Default</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DialogTrigger asChild>
                <button
                  onClick={handleFilter}
                  className="w-full text-base my-2 font-semibold bg-green-700 text-white py-2 rounded-lg"
                >
                  Apply
                </button>
              </DialogTrigger>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center mt-3 lg:mt-5 flex-row">
        <p className="font-medium text-base lg:text-lg pl-2">
          Available listings
        </p>
      </div>
      <div className="px-2 gap-y-6 gap-x-2.5 lg:gap-x-4 mt-4 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </div>
  );
}
