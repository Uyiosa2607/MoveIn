"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Trash2, Heart } from "lucide-react";
import Link from "next/link";
import { formatToNaira } from "@/lib/utils";
import { BedDouble, Bath } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface savedItemProp {
  title: string;
  id: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  img: string;
}

export default function SavedListing() {
  const [savedItems, setSavedItems] = useState<savedItemProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  function getItems() {
    const savedHouses = JSON.parse(localStorage.getItem("saved_properties")!);
    if (savedHouses) {
      setSavedItems(savedHouses);
    }
    setLoading(false);
  }

  useEffect(() => {
    getItems();
  }, []);

  function deleteFromLocalStorage(id: string, key: string) {
    const items = JSON.parse(localStorage.getItem(key)!) || [];
    const updatedItems = items.filter((item: { id: string }) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
    getItems();
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="relative w-full h-[250px] lg:h-[350px] overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/70 to-blue-900/80 z-10" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/modern_landscape.jpg')] bg-cover bg-center bg-no-repeat"
          style={{ filter: "brightness(0.7)" }}
        />

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Heart size={40} className="text-red-400" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Your Favorite Properties
          </h1>
          <p className="text-base lg:text-lg text-gray-100 max-w-xl mx-auto">
            Keep track of properties you love and revisit them anytime
          </p>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container w-full px-4 lg:px-8 lg:w-[85%] mx-auto py-8 -mt-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                Saved Properties
              </h2>
              <p className="text-gray-600 text-sm lg:text-base">
                {savedItems.length}{" "}
                {savedItems.length === 1 ? "property" : "properties"} saved
              </p>
            </div>
            {savedItems.length > 0 && (
              <Link href="/properties">
                <button className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm lg:text-base">
                  Browse More
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Empty State */}
        {!loading && savedItems.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 lg:p-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                No Saved Properties Yet
              </h3>
              <p className="text-gray-600 text-base lg:text-lg mb-8">
                Start exploring and save your favorite properties to view them
                here later
              </p>
              <Link href="/properties">
                <button className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Explore Properties
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Property Grid */}
        {savedItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {savedItems.map((listing) => (
              <div
                key={listing.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                {/* Delete Button */}
                <button
                  onClick={() =>
                    deleteFromLocalStorage(listing.id, "saved_properties")
                  }
                  className="absolute top-3 left-3 z-30 p-2 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-red-500 text-red-500 hover:text-white transition-all shadow-lg group/delete"
                  aria-label="Remove from favorites"
                >
                  <Trash2 size={18} />
                </button>

                <Link href={`listing/${listing.id}`}>
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-[180px] lg:h-[220px]">
                    <Image
                      alt={listing?.title}
                      width={500}
                      quality={100}
                      height={500}
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${listing.img}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 lg:p-5 bg-gradient-to-b from-stone-50 to-stone-100">
                    {/* Title */}
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3 line-clamp-2 min-h-[40px] leading-tight">
                      {listing?.title}
                    </h3>

                    {/* Property Details */}
                    <div className="space-y-2 mb-3">
                      {/* Bedrooms */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <BedDouble size={14} className="text-gray-700" />
                        </div>
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                          {listing?.bedrooms === 1
                            ? `${listing?.bedrooms} Bedroom`
                            : `${listing?.bedrooms} Bedrooms`}
                        </p>
                      </div>

                      {/* Bathrooms */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Bath size={14} className="text-gray-700" />
                        </div>
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                          {listing?.bathrooms === 1
                            ? `${listing?.bathrooms} Bathroom`
                            : `${listing?.bathrooms} Bathrooms`}
                        </p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-gray-300" />

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Price</p>
                        <p className="text-base lg:text-lg font-bold text-gray-900">
                          {formatToNaira(listing?.price)}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        View
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
