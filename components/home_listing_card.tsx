"use client";
import Image from "next/image";
import { Bath, BedDouble } from "lucide-react";
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
    id: string;
    img: string[];
  };
}

export default function HomeListingCard({ listing }: CardProp) {
  return (
    <Link href={`listing/${listing.id}`}>
      <div className="w-full relative">
        <p
          className={`w-fit px-1.5 py-0.5 rounded-lg font-semibold font-[Montserrat] absolute left-[5%] top-[4%] lg:top-[7%] text-xs    text-neutral-800 ${
            listing?.category === "rent" ? "bg-yellow-400" : "bg-green-400"
          } `}
        >
          {listing?.category}
        </p>
        <Image
          alt={listing?.title}
          width={500}
          quality={100}
          height={500}
          src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${listing.img[0]}`}
          className="object-fit rounded-t-2xl lg:rounded-t-3xl w-full h-[120px] lg:h-[190px]"
        />
        <div className="p-[8px] rounded-b-3xl bg-stone-100">
          <p className="text-xs lg:text-sm w-full truncate mb-2.5 font-semibold font-[Montserrat]">
            {listing?.title}
          </p>
          <div>
            <div className="flex items-center mb-2 gap-1.5 flex-row">
              <BedDouble size={14} />
              {listing?.bedrooms === 1 ? (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bedrooms} Bedroom`}</p>
              ) : (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bedrooms} Bedrooms`}</p>
              )}
            </div>
            <div className="flex items-center mb-2 gap-1.5 flex-row">
              <Bath size={14} />
              {listing?.bathrooms === 1 ? (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bathrooms} Bathroom`}</p>
              ) : (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bathrooms} Bathrooms`}</p>
              )}
            </div>
            {/* <div className="mb-2 flex items-center gap-1 flex-row">
            <MapPin size={14} />
            <p className="text-xs lg:text-sm w-full font-medium font truncate">
              location text
            </p>
          </div> */}
            <Separator className="my-1.5 lg:my-2" />
            <div className="flex items-center w-full justify-between flex-row">
              <p className="text-xs lg:text-sm font-semibold text-neutral-800">
                {formatToNaira(listing?.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
