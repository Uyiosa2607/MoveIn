import Image from "next/image";
import { Bath, BedDouble, ChevronRight, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

interface CardProp {
  listing: {
    name: string;
    bathrooms: number;
    bedrooms: number;
    price: number;
  };
}

export default function ListingCard({ listing }: CardProp) {
  return (
    <div className="w-full relative">
      <p className="w-fit p-1 lg:p-1.5 font-semibold font-[Montserrat] capitalize absolute left-[5%] top-[4%] lg:top-[7%] text-xs  bg-yellow-400 text text-neutral-800 ">
        for rent
      </p>
      <Image
        alt={listing?.name}
        width={500}
        quality={100}
        height={500}
        src={"/banner.jpg"}
        className="object-fit  w-full h-[120px] lg:h-[160px]"
      />
      <div className="p-[8px] rounded-b-2xl bg-stone-100">
        <p className="text-xs lg:text-sm w-full truncate mb-1.5 lg:mb-2.5 font-semibold font-[Montserrat]">
          {listing?.name}
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
          <div className="mb-2 flex items-center gap-1 flex-row">
            <MapPin size={14} />
            <p className="text-xs lg:text-sm w-full font-medium font truncate">
              location text
            </p>
          </div>
          <Separator className="w-[90%] mx-auto my-1.5 lg:my-2" />
          <div className="flex items-center w-full justify-between flex-row">
            <p className="text-xs lg:text-sm font-semibold text-neutral-800">
              ${listing?.price}
            </p>
            <div className="flex items-center ">
              <p className="text-xs font-medium text-neutral-800">
                view details
              </p>
              <ChevronRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
