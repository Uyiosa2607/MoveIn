"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { formatToNaira } from "@/lib/utils";
import { BedDouble, Bath, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface savedItemProp {
  title: string;
  cat: string;
  id: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  img: string;
}

export default function SavedListing() {
  const [savedItems, setSavedItems] = useState<savedItemProp[]>([]);

  useEffect(() => {
    const savedHouses = JSON.parse(localStorage.getItem("saved_properties")!);
    if (savedHouses) return setSavedItems(savedHouses);
  }, []);

  if (!savedItems)
    return (
      <div className=" bg-white">
        <Header />
        <div className="container  mx-auto">
          <p className="my-4 h-screen w-full text-medium">No saved items</p>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="bg-[#ffff]">
      <Header />
      <div className="bg-[url('/modern_landscape.jpg')] w-full h-[240px] lg:h-[400px] bg-cover " />
      <div className="container min-h-[50vh] w-full px-2 lg:w-[70%] mx-auto">
        <div className="flex items-center mt-3 lg:mt-5 flex-row">
          <p className="font-medium text-base lg:text-lg pl-2">
            Saved listings
          </p>
          <ChevronRight size={15} />
        </div>
        <div className="px-2 gap-y-6 gap-x-2.5 lg:gap-x-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {savedItems.map((listing) => (
            <Link key={listing?.id} href={"/listing/36"}>
              <div className="w-full relative">
                <p
                  className={`w-fit px-1 py-0.5 font-semibold font-[Montserrat]  absolute left-[5%] top-[4%] lg:top-[7%] text-xs    text-neutral-800 ${
                    listing?.cat === "rent" ? "bg-yellow-400" : "bg-green-400"
                  } `}
                >
                  {listing?.cat}
                </p>
                <Image
                  alt={listing?.title}
                  width={500}
                  quality={100}
                  height={500}
                  src={listing?.img}
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
                        location text
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
