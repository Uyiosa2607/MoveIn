"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ListingCard from "./listing-card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectTrigger, SelectItem } from "./ui/select";
import { supabase } from "@/lib/supabase";
import { Label } from "./ui/label";
import { SelectValue } from "@radix-ui/react-select";
import { SlidersHorizontal, X } from "lucide-react";

interface Listing {
  title: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  category: string;
  location: string;
  id: string;
  img: [];
  city: string | number;
}

export default function PropertyGrid() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [properties, setProperties] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState("all");
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

  function handleClearFilters() {
    setCity("all");
    setBedroom(0);
    setBathroom(0);
    setListings(properties);
  }

  const hasActiveFilters = city !== "all" || bedroom !== 0 || bathroom !== 0;

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="container w-full px-4 lg:px-8 lg:w-[85%] mx-auto py-6">
      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">
              Filter Properties
            </h2>
            {hasActiveFilters && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                {filteredProperties.length} Results
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  <SlidersHorizontal size={18} />
                  Filters
                </button>
              </DialogTrigger>
              <DialogContent
                aria-describedby={undefined}
                className="w-[95%] max-w-md mx-auto rounded-2xl"
              >
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Filter Listings
                </DialogTitle>

                <div className="flex flex-col gap-5">
                  {/* City Filter */}
                  <div className="flex flex-col gap-2">
                    <Label>
                      <p className="text-base font-semibold text-gray-700">
                        City
                      </p>
                    </Label>
                    <Select
                      value={city}
                      onValueChange={(value) => {
                        if (value === "all") return setCity("");
                        setCity(value);
                      }}
                    >
                      <SelectTrigger className="h-11 rounded-lg border-gray-300">
                        <SelectValue placeholder="All Cities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Cities</SelectItem>
                        <SelectItem value="benin city">Benin City</SelectItem>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="port harcourt">
                          Port Harcourt
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Bedroom Filter */}
                  <div className="flex flex-col gap-2">
                    <Label>
                      <p className="text-base font-semibold text-gray-700">
                        Bedrooms
                      </p>
                    </Label>
                    <Select
                      value={String(bedroom)}
                      onValueChange={(value) => setBedroom(Number(value))}
                    >
                      <SelectTrigger className="h-11 rounded-lg border-gray-300">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Bathroom Filter */}
                  <div className="flex flex-col gap-2">
                    <Label>
                      <p className="text-base font-semibold text-gray-700">
                        Bathrooms
                      </p>
                    </Label>
                    <Select
                      value={String(bathroom)}
                      onValueChange={(value) => setBathroom(Number(value))}
                    >
                      <SelectTrigger className="h-11 rounded-lg border-gray-300">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        <SelectItem value="1">1 Bathroom</SelectItem>
                        <SelectItem value="2">2 Bathrooms</SelectItem>
                        <SelectItem value="3">3 Bathrooms</SelectItem>
                        <SelectItem value="4">4+ Bathrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleClearFilters}
                      className="flex-1 text-base font-semibold bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Reset
                    </button>
                    <DialogTrigger asChild>
                      <button
                        onClick={handleFilter}
                        className="flex-1 text-base font-semibold bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      >
                        Apply Filters
                      </button>
                    </DialogTrigger>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-sm font-medium text-gray-600">
              Active filters:
            </span>
            {city !== "all" && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                City: {city}
                <button
                  onClick={() => setCity("all")}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {bedroom !== 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                {bedroom} Bedroom{bedroom > 1 ? "s" : ""}
                <button
                  onClick={() => setBedroom(0)}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {bathroom !== 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                {bathroom} Bathroom{bathroom > 1 ? "s" : ""}
                <button
                  onClick={() => setBathroom(0)}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl lg:text-2xl text-gray-900">
          {hasActiveFilters ? "Filtered Results" : "All Properties"}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 font-medium">
          {listings.length} {listings.length === 1 ? "Property" : "Properties"}
        </p>
      </div>

      {/* Property Grid */}
      <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          <>
            {Array.from({ length }).map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="rounded-2xl w-full h-[200px] lg:h-[240px]" />
                <Skeleton className="rounded-md h-5 w-full" />
                <Skeleton className="rounded-md h-5 w-3/4" />
                <Skeleton className="rounded-md h-6 w-1/2" />
              </div>
            ))}
          </>
        ) : listings.length > 0 ? (
          <>
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </>
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Properties Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any properties matching your filters. Try
                adjusting your search criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
