import Image from "next/image";
import { Bath, BedDouble, ChevronRight, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { formatToNaira } from "@/lib/utils";
import Link from "next/link";

interface CardProp {
  listing: {
    title: string;
    bathrooms: number;
    bedrooms: number;
    price: number;
    category: string;
    location: string;
    id: string;
    img: string[];
  };
}

export default function ListingCard({ listing }: CardProp) {
  return (
    <Link href={`listing/${listing.id}`}>
      <div className="w-full group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
        {/* Image Container */}
        <div className="relative overflow-hidden h-[140px] lg:h-[200px]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-4 bg-gradient-to-b from-stone-50 to-stone-100 rounded-b-2xl">
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

            {/* Location */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin size={14} className="text-gray-700" />
              </div>
              <p className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                {listing?.location}
              </p>
            </div>
          </div>

          <Separator className="my-3 bg-gray-300" />

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Price</p>
              <p className="text-base lg:text-lg font-bold text-gray-900">
                {formatToNaira(listing?.price)}
              </p>
            </div>
            <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all duration-300">
              <p className="text-xs lg:text-sm font-semibold">View Details</p>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
