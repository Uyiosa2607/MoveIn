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
      <div className="w-full relative">
        <p
          className={`w-fit px-1 py-0.5 font-semibold font-[Montserrat]  absolute left-[5%] top-[4%] lg:top-[7%] text-xs    text-neutral-800 ${
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
          className="object-fit  w-full h-[120px] lg:h-[160px]"
        />

        <div className="p-[8px] rounded-b-2xl bg-stone-100">
          <p className="text-xs lg:text-sm w-full truncate mb-1.5 lg:mb-2.5 font-semibold font-[Montserrat]">
            {listing?.title}
          </p>
          <div>
            <div className="flex items-center mb-1.5 lg:mb-2 gap-1.5 flex-row">
              <BedDouble size={14} />
              {listing?.bedrooms === 1 ? (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bedrooms} Bedroom`}</p>
              ) : (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bedrooms} Bedrooms`}</p>
              )}
            </div>
            <div className="flex items-center mb-1.5 lg:mb-2 gap-1.5 flex-row">
              <Bath size={14} />
              {listing?.bathrooms === 1 ? (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bathrooms} Bathroom`}</p>
              ) : (
                <p className="text-xs lg:text-sm font-medium">{`${listing?.bathrooms} Bathrooms`}</p>
              )}
            </div>
            <div className="hidden mb-2 lg:flex items-center gap-1 flex-row">
              <MapPin size={14} />
              <p className="text-xs lg:text-sm w-full font-medium font truncate">
                {listing?.location}
              </p>
            </div>
            <Separator className="w-[90%] mx-auto my-1.5 lg:my-2" />
            <div className="flex items-center w-full justify-between flex-row">
              <p className="text-xs lg:text-sm font-semibold text-neutral-800">
                {formatToNaira(listing?.price)}
              </p>
              <div className="hidden items-center ">
                <p className="text-xs font-medium text-neutral-800">
                  view details
                </p>
                <ChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
