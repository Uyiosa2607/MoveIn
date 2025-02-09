"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  ChevronLeft,
  Bath,
  BedDouble,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { formatToNaira } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockIMGS = ["/banner.jpg", "/banner.jpg", "/banner.jpg"];

export default function Listing() {
  const router = useRouter();
  let bathrooms = 2;
  let bedrooms = 1;

  return (
    <div className="bg-[#ffff]">
      <Header />
      <div className="container w-[70%] mx-auto">
        <div
          onClick={() => router.back()}
          className="w-full mb-4  mt-20 flex items-center gap-1"
        >
          <ChevronLeft size={15} />
          <p className="font-medium capitalize text-lg">listings</p>
        </div>
        <p className="my-4 mb-5 text-lg font-semibold">Property name</p>
        <div className="flex w-full  gap-4">
          <div className="flex-2 ">
            <Image
              width={10000}
              quality={100}
              height={1000}
              src={"/banner_2.jpg"}
              alt="listing image"
              className="w-[500px] rounded-xl h-[400px] object-cover"
            />
          </div>
          <div className="flex-1 grid gap-2 grid-cols-4">
            {mockIMGS.map((image, index) => (
              <Image
                key={index}
                alt="alt"
                width={200}
                height={200}
                src={image}
                quality={100}
                className="h-200 rounded-xl object-cover w-auto"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <div className="flex-[1.4]">
              <p className="text-2xl font-bold my-1.5">
                {formatToNaira(600000)}
              </p>
              <div className="flex mb-1.5 items-center gap-1">
                <MapPin size={15} />
                <p className="text-base font-medium">Somewhere in africa</p>
              </div>
              <div className="flex items-center flex-row gap-10">
                <div className="flex items-center flex-row ">
                  <BedDouble size={14} />
                  {bedrooms === 1 ? (
                    <p className="text-xs lg:text-sm font-medium">{`${bedrooms} Bedroom`}</p>
                  ) : (
                    <p className="text-xs lg:text-sm font-medium">{`${bedrooms} Bedrooms`}</p>
                  )}
                </div>
                <div className="flex items-center  flex-row">
                  <Bath size={14} />
                  {bathrooms === 1 ? (
                    <p className="text-xs lg:text-sm font-medium">{`${bathrooms} Bathroom`}</p>
                  ) : (
                    <p className="text-xs lg:text-sm font-medium">{`${bathrooms} Bathrooms`}</p>
                  )}
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <p className="text-lg mb-1.5 font-semibold">
                  Property Information
                </p>
                <p className="font-normal text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio sapiente pariatur unde odio rem animi mollitia,
                  dolore nostrum reprehenderit, nam eveniet ipsa hic, tempore
                  qui soluta. Exercitationem possimus commodi et?
                </p>
              </div>
            </div>
            <div className="flex-[1] flex flex-col justify-end">
              {/* <p className="text-lg pl-[5%] mt-4 font-semibold capitalize mb-6">
                agent details
              </p> */}
              <div className="flex  w-full pl-[5%] gap-1 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium capitalize">agent name</p>
                  <p>email</p>
                </div>
              </div>
              <div className="flex mt-4 w-full  flex-col gap-4">
                <div className="flex px-4 place-content-center text-white gap-1 py-1.5 rounded-xl text-center bg-amber-500 flex-row items-center w-[90%] mx-auto">
                  <Phone size={14} />
                  <p className="text-sm font-medium">Call agent</p>
                </div>
                <div className="flex px-4 place-content-center  text-white gap-1 py-1.5 rounded-xl text-center bg-green-600 flex-row  w-[90%] mx-auto items-center">
                  <Mail size={14} />
                  <p className="text-sm font-medium">Whatsapp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
