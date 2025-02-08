import Image from "next/image";
import { Bath, BedDouble, ChevronRight } from "lucide-react";

interface CardProp {
  listing: {
    name: string;
    bathrooms: number;
    bedrooms: number;
    price: number;
  };
}

export default function HomeListingCard({ listing }: CardProp) {
  return (
    <div className="w-full">
      <Image
        alt={listing?.name}
        width={500}
        quality={100}
        height={500}
        src={"/banner.jpg"}
        className="object-fit rounded-t-3xl w-full h-[190px]"
      />
      <div className="p-[8px] rounded-b-3xl bg-stone-100">
        <p className="text-base mb-2.5 font-semibold font-[Montserrat]">
          {listing?.name}
        </p>
        <div>
          <div className="flex items-center mb-2 gap-1.5 flex-row">
            <BedDouble size={14} />
            {listing?.bedrooms === 1 ? (
              <p className="text-sm font-medium">{`${listing?.bedrooms} Bedroom`}</p>
            ) : (
              <p className="text-sm font-medium">{`${listing?.bedrooms} Bedrooms`}</p>
            )}
          </div>
          <div className="flex items-center mb-2 gap-1.5 flex-row">
            <Bath size={14} />
            {listing?.bathrooms === 1 ? (
              <p className="text-sm font-medium">{`${listing?.bathrooms} Bathroom`}</p>
            ) : (
              <p className="text-sm font-medium">{`${listing?.bathrooms} Bathrooms`}</p>
            )}
          </div>
          <div className="w-[95%] margin-auto my-1.5 border-b-2 border-neutral-500" />
          <div className="flex items-center w-full justify-between flex-row">
            <p className="text-sm font-semibold text-neutral-800">
              ${listing?.price}
            </p>
            <div className="flex items-center ">
              <p className="text-sm font-medium text-neutral-800">
                view details
              </p>
              <ChevronRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
