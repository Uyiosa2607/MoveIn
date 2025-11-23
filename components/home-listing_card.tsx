"use client";
import Image from "next/image";
import { Bath, BedDouble } from "lucide-react";
import { Separator } from "./ui/separator";
import { formatToNaira } from "@/lib/utils";
import { Card } from "./ui/card";
import Link from "next/link";

interface CardProp {
  listing: {
    title: string;
    bathrooms: number;
    bedrooms: number;
    price: number;
    category: string;
    id: string;
    img: string[];
  };
}

export default function HomeListingCard({ listing }: CardProp) {
  return (
    <Link href={`listing/${listing.id}`}>
      <Card className="w-full group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
        {/* Image Container */}
        <div className="relative overflow-hidden h-[160px] lg:h-[240px]">
          {/* Category Badge */}
          <div
            className={`absolute left-3 top-3 z-10 px-3 py-1.5 rounded-lg font-bold text-xs uppercase shadow-md ${
              listing?.category === "rent"
                ? "bg-yellow-400 text-gray-900"
                : "bg-green-400 text-gray-900"
            }`}
          >
            {listing?.category}
          </div>

          {/* Image with hover effect */}
          <Image
            alt={listing?.title}
            width={500}
            quality={100}
            height={500}
            src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${listing.img[0]}`}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-4 lg:p-5">
          {/* Title */}
          <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3 line-clamp-2 min-h-[40px] lg:min-h-[48px] leading-tight">
            {listing?.title}
          </h3>

          {/* Property Details */}
          <div className="space-y-2.5 mb-3">
            {/* Bedrooms */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <BedDouble size={16} className="text-blue-600" />
              </div>
              <p className="text-xs lg:text-sm font-medium text-gray-700">
                {listing?.bedrooms === 1
                  ? `${listing?.bedrooms} Bedroom`
                  : `${listing?.bedrooms} Bedrooms`}
              </p>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bath size={16} className="text-blue-600" />
              </div>
              <p className="text-xs lg:text-sm font-medium text-gray-700">
                {listing?.bathrooms === 1
                  ? `${listing?.bathrooms} Bathroom`
                  : `${listing?.bathrooms} Bathrooms`}
              </p>
            </div>
          </div>

          <Separator className="my-3" />

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Price</p>
              <p className="text-lg lg:text-xl font-bold text-blue-600">
                {formatToNaira(listing?.price)}
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-xs lg:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              View Details
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
