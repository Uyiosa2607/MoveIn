import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import HomeListingCard from "@/components/home_listing_card";
import Footer from "@/components/footer";

const mockData = [
  {
    name: "new apartment 1",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
  },
  {
    name: "new apartment 2",
    bathrooms: 1,
    bedrooms: 1,
    price: 2000,
  },
  {
    name: "new apartment 3",
    bathrooms: 3,
    bedrooms: 3,
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
    <div className="bg-[#fff]">
      <Header />

      {/* Hero Section */}
      <div className="w-full mb-10">
        <div className="w-full h-[500px] relative px-4">
          <div className="insert-0 w-full h-full bg-cover  absolute bg-[url('/hero_image.jpg')] opacity-90" />

          {/* Hero Text and button */}
          <div className="z-[50] relative pl-6 text-white top-[40%] w-full">
            <h2 className="text-5xl mb-4 w-[50%] capitalize font-semibold font-[Montserrat]">
              Find your dream house
            </h2>
            <p className="text-base mb-4 w-[40%] font-medium fonr-[Montserrat]">
              explore our comprehensive listings of residential properties, from
              cozy starter homes to luxurious estates{" "}
            </p>
            <button className="w-fit px-6 font-medium py-2 text-neutral-800 rounded-xl bg-yellow-400 ">
              Browse Now
            </button>
          </div>
        </div>
      </div>
      {/* Hero section ends here */}

      {/* Details section */}
      <div className="container mx-auto w-[70%]">
        {/* listing section title bar */}
        <div className="flex items-center w-full mb-2.5 justify-between">
          <h3 className="font-medium text-2xl">Browse Listings</h3>
          <div className="flex items-center gap-1 pr-2">
            <p className="font-medium text-xs">view all</p>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* listing container */}
        <div className="grid grid-cols-3 gap-3">
          {mockData.map((listing) => (
            <HomeListingCard listing={listing} key={listing.name} />
          ))}
        </div>
        {/* listing container ends here */}

        {/* why choose  us section */}
        <div className="bg-[url('/modern_house.jpg')] relative bg-center text-white bg-cover h-[420px] mt-10 w-full">
          <div className="h-fit bg-stone-100 rounded-2xl right-[5%] top-[10%] absolute text-[#0b1d27] w-[400px] pl-7 pb-10 pt-5">
            <h4 className="font-medium w-fit text-base mb-1.5 text-yellow-400">
              features
            </h4>
            <h2 className="font-semibold w-fit mb-2.5 text-3xl ">
              Why choose us
            </h2>
            <p className="text-sm w-[90%] font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              corrupti delectus neque nihil repudiandae similique!
            </p>
            <div className="flex gap-2 font-medium text-sm w-fit flex-col">
              <div className="flex gap-1.5 items-center flex-row">
                <div className="w-4 h-4 border-[3px] border-yellow-400 rounded-full"></div>
                <p>Trusted Company</p>
              </div>
              <div className="flex  gap-1.5 items-center flex-row">
                <div className="w-4 border-[3px] border-yellow-400 h-4 rounded-full"></div>
                <p>Transparent Pricing</p>
              </div>
              <div className="flex gap-1.5 items-center flex-row">
                <div className="w-4 border-[3px] border-yellow-400 h-4 rounded-full"></div>
                <p>Professional Support</p>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us ends here */}
      </div>
      <Footer />
    </div>
  );
}
