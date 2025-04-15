"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Bath,
  BedDouble,
  MapPin,
  Phone,
  Mail,
  Bookmark,
} from "lucide-react";
import { formatToNaira, saveToDatabase } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface Listing {
  title: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  category: string;
  id: string;
  img: string[];
  description: string;
  location: string;
  author_id: string;
}

interface agentINFO {
  name: string;
  email: string;
  phone: string;
  img: string;
}

export default function ListingDetails() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [listing, setListing] = useState<Listing | null>(null);
  const [agentDetails, setAgentDetails] = useState<agentINFO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const length: number = 4;

  const params = useParams();

  async function getListings() {
    try {
      const { data, error } = await supabase
        .from("listings")
        .select()
        .eq("id", params.id)
        .single();
      if (!error) {
        setListing(data);
        setLoading(false);
        getAgentInfo(data.author_id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getAgentInfo(id: string) {
    try {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", id)
        .single();
      if (!error) {
        setAgentDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListings();
  }, []);

  function nextIMG() {
    if (currentImage === listing!.img.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevIMG() {
    if (currentImage === 0) {
      setCurrentImage(listing!.img.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div className="bg-[#ffff] text-[#1B1D29]">
      <Header />
      <div className="container mt-16 md:mt-20 w-full px-2 lg:w-[70%] mx-auto">
        <div className="flex  w-full flex-col md:flex-row gap-4">
          <div className="flex-[1.4] relative w-full">
            {loading ? (
              <>
                <Skeleton className="w-full rounded-xl h-[300px] md:h-[400px] object-cover" />
              </>
            ) : (
              <>
                {" "}
                <Image
                  width={10000}
                  quality={100}
                  height={1000}
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${listing?.img[currentImage]}`}
                  alt={"property_image"}
                  className="w-full rounded-xl h-[300px] md:h-[400px] object-cover"
                />
                <p className="px-1.5 py-0.5 w-fit rounded-lg absolute left-[4%] top-[4%] bg-yellow-400 font-semibold text-xs">
                  {listing?.category}
                </p>
                {listing && (
                  <Bookmark
                    className="absolute text-white top-[4%] right-[3%]"
                    size={30}
                    onClick={() =>
                      saveToDatabase({
                        title: listing.title,
                        price: listing.price,
                        bathrooms: listing.bathrooms,
                        bedrooms: listing.bedrooms,
                        img: listing.img[0],
                        id: listing.id,
                      })
                    }
                  />
                )}
                <div className="w-full absolute text-white left-0 z-[20] top-[50%]  flex items-center px-4 justify-between">
                  <ChevronLeft
                    onClick={prevIMG}
                    size={30}
                    className="p-1 rounded-full bg-gray-400 hover:bg-gray-200"
                  />
                  <ChevronRight
                    onClick={nextIMG}
                    size={30}
                    className="p-1 rounded-full bg-gray-400 hover:bg-gray-200"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex-[1.2] grid gap-2 grid-cols-4">
            {loading ? (
              <>
                {Array.from({ length }).map((_, index) => (
                  <div key={index}>
                    <Skeleton className="h-[80px] md:h-[100px] rounded-md object-cover w-full" />
                  </div>
                ))}
              </>
            ) : (
              <>
                {listing?.img.map((image, index) => (
                  <Image
                    key={index}
                    alt="alt"
                    width={200}
                    height={200}
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${image}`}
                    quality={100}
                    className="h-[80px] md:h-[100px] rounded-md object-cover w-full"
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-[1.2]">
              {loading ? (
                <>
                  <Skeleton className="h-8 mt-3 mb-3 w-[95%]" />
                  <Skeleton className="h-6 mb-2 w-[90%]" />
                  <Skeleton className="h-6 mb-2 w-[80%]" />
                  <div>
                    <Skeleton className="h-14 w-full mb-2 font-semibold" />
                    <Skeleton className="h-20 my-5 w-full" />
                    {/* {listing?.description}
                    </Skeleton> */}
                  </div>
                </>
              ) : (
                <>
                  {loading ? null : (
                    <p className="my-1.5 md:my-4 w-full truncate mb-1 text-xl font-[800] capitalize">
                      {listing?.title}
                    </p>
                  )}
                  {listing && (
                    <p className="text-lg text-green-700 font-bold my-1.5">
                      {formatToNaira(listing.price)}
                    </p>
                  )}
                  <div className="flex mb-1.5 items-center gap-1">
                    <MapPin size={16} />
                    <p className="text-base mt-1 leading-tight mb-1.5 font-medium">
                      {listing?.location}
                    </p>
                  </div>
                  <div className="flex items-center flex-row gap-10">
                    <div className="flex items-center gap-1 flex-row ">
                      <BedDouble size={14} />
                      {listing?.bedrooms === 1 ? (
                        <p className="text-xs md:text-sm font-medium">{`${listing?.bedrooms} Bedroom`}</p>
                      ) : (
                        <p className="text-xs md:text-sm font-medium">{`${listing?.bedrooms} Bedrooms`}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 flex-row">
                      <Bath size={14} />
                      {listing?.bathrooms === 1 ? (
                        <p className="text-xs md:text-sm font-medium">{`${listing?.bathrooms} Bathroom`}</p>
                      ) : (
                        <p className="text-xs md:text-sm font-medium">{`${listing?.bathrooms} Bathrooms`}</p>
                      )}
                    </div>
                  </div>
                  <Separator className="my-1.5 md:my-4" />
                  <div>
                    <p className="text-base mb-1.5 font-[700]">
                      Property Information
                    </p>
                    <p className="font-normal text-sm">
                      {listing?.description}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="flex-[1] flex flex-col justify-end">
              {loading ? (
                <>
                  <Skeleton className="h-40 w-[95%] mx-auto" />
                </>
              ) : (
                <>
                  <div className="flex w-full pl-1 md:pl-[5%] gap-1 items-center">
                    <Avatar>
                      <AvatarImage
                        src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${agentDetails?.img}`}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium capitalize">
                        {agentDetails?.name}
                      </p>
                      <p>{agentDetails?.email}</p>
                    </div>
                  </div>
                  {/* <Separator className="md:hidden my-1.5" /> */}
                  <div className="flex mt-4 w-full  flex-col gap-4">
                    <a href={`tel:${agentDetails?.phone}`}>
                      <div className="flex px-4 place-content-center text-white gap-1 py-1.5 rounded-xl text-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer flex-row items-center w-[95%] md:w-[90%] mx-auto">
                        <Phone size={14} />
                        <p className="text-sm font-medium">Call agent</p>
                      </div>
                    </a>
                    <a href={`https://wa.me/${agentDetails?.phone}`}>
                      <div className="flex px-4 place-content-center  text-white gap-1 py-1.5 rounded-xl hover:bg-green-500 text-center bg-green-700 flex-row cursor-pointer  w-[95%] md:w-[90%] mx-auto items-center">
                        <Mail size={14} />
                        <p className="text-sm font-medium">Whatsapp</p>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
