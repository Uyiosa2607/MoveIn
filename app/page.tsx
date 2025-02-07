import Header from "@/components/header";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HomeListingCard from "@/components/home_listing_card";

const mockData = [
  {
    name: "new apartment 1",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 2",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 3",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 4",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 5",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 6",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* header container */}
      <div className="w-full mb-20">
        <div className="w-full relative px-4 h-full">
          {/* header banner image */}
          <Image
            src={"/landscape.jpg"}
            width={1000}
            height={10000}
            alt="house_banner"
            quality={100}
            className="h-[70vh] rounded-3xl object-cover w-full "
          />

          {/* Header text and button */}

          <div className="absolute text-white top-[40%] w-full">
            <h2 className="text-5xl mb-4 capitalize text-center font-semibold font-[Montserrat]">
              Find your dream house
            </h2>
            <p className="text-center text-base mb-4 font-medium fonr-[Montserrat]">
              explore our comprehensive listings of residential properties, from
              cozy starter homes to luxurious estates{" "}
            </p>
            <button className="flex w-fit px-6 font-medium py-2 text-neutral-800 rounded-xl bg-yellow-400 justify-self-center">
              Browse Now
            </button>
          </div>
        </div>
      </div>

      {/* listing section */}

      <div className="container mx-auto w-[70%]">
        <div className="flex items-center w-full justify-between">
          <h3 className="font-medium text-2xl">Browse Listings</h3>
          <div className="flex items-center gap-1">
            <p className="font-medium text-xs">view all</p>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* listing container */}
        <div className="grid grid-cols-3 space-x-2 space-y-2 px-2 items-center">
          {mockData.map((listing) => (
            <HomeListingCard listing={listing} key={listing.name} />
          ))}
        </div>
      </div>
    </>
  );
}
