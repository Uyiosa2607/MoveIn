"use client";
import { useState } from "react";
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

const mockIMGS = ["/banner.jpg", "/modern_house.jpg", "/banner.jpg"];

const listing = {
  title: "new apartment 6",
  bathrooms: 2,
  bedrooms: 2,
  price: 2000,
  cat: "rent",
  id: "6T6DFGWE8DWYER89",
  img: "/modern_house.jpg",
};

export default function Listing() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const bathrooms: number = 2;
  const bedrooms: number = 4;

  const numberOfImages: number = mockIMGS.length - 1;

  function nextIMG() {
    if (currentImage === numberOfImages) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevIMG() {
    if (currentImage === 0) {
      setCurrentImage(numberOfImages);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div className="bg-[#ffff] text-neutral-800">
      <Header />
      <div className="container mt-16 md:mt-20 w-full px-2 lg:w-[70%] mx-auto">
        <p className="my-1.5 md:my-4 w-full truncate mb-2 text-md font-semibold">
          Property name
        </p>
        <div className="flex w-full flex-col md:flex-row gap-4">
          <div className="flex-[1.4] relative w-full">
            <Image
              width={10000}
              quality={100}
              height={1000}
              src={mockIMGS[currentImage]}
              alt="listing image"
              className="w-full rounded-xl h-[300px] md:h-[400px] object-cover"
            />

            <p className="px-1 py-0.5 w-fit absolute left-[4%]  top-[4%] bg-yellow-400 font-semibold text-xs ">
              {"rent"}
            </p>

            <Bookmark
              className="absolute text-white top-[4%] right-[3%]"
              size={30}
              onClick={() => saveToDatabase(listing)}
            />

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
          </div>
          <div className="flex-[1.2] grid gap-2 grid-cols-4">
            {mockIMGS.map((image, index) => (
              <Image
                key={index}
                alt="alt"
                width={200}
                height={200}
                src={image}
                quality={100}
                className="h-200 rounded-md object-cover w-auto"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-[1.2]">
              <p className="text-2xl font-bold my-1.5">
                {formatToNaira(600000)}
              </p>
              <div className="flex mb-1.5 items-center gap-1">
                <MapPin size={16} />
                <p className="text-base leading-tight mb-1.5 font-medium">
                  Somewhere in africa
                </p>
              </div>
              <div className="flex items-center flex-row gap-10">
                <div className="flex items-center gap-1 flex-row ">
                  <BedDouble size={14} />
                  {bedrooms === 1 ? (
                    <p className="text-xs md:text-sm font-medium">{`${bedrooms} Bedroom`}</p>
                  ) : (
                    <p className="text-xs md:text-sm font-medium">{`${bedrooms} Bedrooms`}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 flex-row">
                  <Bath size={14} />
                  {bathrooms === 1 ? (
                    <p className="text-xs md:text-sm font-medium">{`${bathrooms} Bathroom`}</p>
                  ) : (
                    <p className="text-xs md:text-sm font-medium">{`${bathrooms} Bathrooms`}</p>
                  )}
                </div>
              </div>
              <Separator className="my-1.5 md:my-4" />
              <div>
                <p className="text-md mb-1.5 font-semibold">
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
              <div className="flex w-full pl-1 md:pl-[5%] gap-1 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium capitalize">agent name</p>
                  <p>email</p>
                </div>
              </div>
              {/* <Separator className="md:hidden my-1.5" /> */}
              <div className="flex mt-4 w-full  flex-col gap-4">
                <div className="flex px-4 place-content-center text-white gap-1 py-1.5 rounded-xl text-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer flex-row items-center w-[95%] md:w-[90%] mx-auto">
                  <Phone size={14} />
                  <p className="text-sm font-medium">Call agent</p>
                </div>
                <div className="flex px-4 place-content-center  text-white gap-1 py-1.5 rounded-xl hover:bg-green-500 text-center bg-green-700 flex-row cursor-pointer  w-[95%] md:w-[90%] mx-auto items-center">
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
