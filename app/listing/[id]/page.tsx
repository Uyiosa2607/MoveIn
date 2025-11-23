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
  Share2,
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
  const [isSaved, setIsSaved] = useState<boolean>(false);

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

  function handleSave() {
    if (listing) {
      saveToDatabase({
        title: listing.title,
        price: listing.price,
        bathrooms: listing.bathrooms,
        bedrooms: listing.bedrooms,
        img: listing.img[0],
        id: listing.id,
      });
      setIsSaved(!isSaved);
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      <Header />

      <div className="container mb-12 mt-24 md:mt-28 w-full px-3 lg:px-8 lg:w-[85%] mx-auto">
        {/* Image Gallery Section */}
        <div className="flex w-full flex-col lg:flex-row gap-4 mb-8">
          {/* Main Image */}
          <div className="flex-[1.4] relative w-full group">
            {loading ? (
              <Skeleton className="w-full rounded-2xl h-[350px] md:h-[500px]" />
            ) : (
              <>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    width={10000}
                    quality={100}
                    height={1000}
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${listing?.img[currentImage]}`}
                    alt="property image"
                    className="w-full h-[350px] md:h-[500px] object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Category Badge */}
                  <div
                    className={`absolute left-4 top-4 z-10 px-3 py-1.5 rounded-xl font-semibold text-sm uppercase shadow-lg backdrop-blur-sm ${
                      listing?.category === "rent"
                        ? "bg-yellow-400/90 text-gray-900"
                        : "bg-green-400/90 text-gray-900"
                    }`}
                  >
                    {listing?.category}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button
                      onClick={handleSave}
                      className={`p-2.5 rounded-xl backdrop-blur-sm transition-all ${
                        isSaved
                          ? "bg-blue-600 text-white"
                          : "bg-white/90 text-gray-900 hover:bg-blue-600 hover:text-white"
                      } shadow-lg`}
                    >
                      <Bookmark
                        size={20}
                        fill={isSaved ? "currentColor" : "none"}
                      />
                    </button>
                    <button className="p-2.5 bg-white/90 rounded-xl backdrop-blur-sm hover:bg-white transition-all shadow-lg">
                      <Share2 size={20} className="text-gray-900" />
                    </button>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-lg text-sm font-semibold">
                    {currentImage + 1} / {listing?.img.length}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                    <button
                      onClick={prevIMG}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg transition-all transform hover:scale-110"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextIMG}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg transition-all transform hover:scale-110"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Grid */}
          <div className="flex-[1] grid gap-3 grid-cols-4 lg:grid-cols-2">
            {loading ? (
              <>
                {Array.from({ length }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[100px] lg:h-[120px] rounded-xl"
                  />
                ))}
              </>
            ) : (
              <>
                {listing?.img.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative overflow-hidden rounded-xl transition-all transform hover:scale-105 ${
                      currentImage === index
                        ? "ring-4 ring-blue-600 shadow-xl"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      alt="thumbnail"
                      width={200}
                      height={200}
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${image}`}
                      quality={100}
                      className="h-[100px] lg:h-[120px] rounded-lg object-cover w-full"
                    />
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Property Details Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-[1.5] bg-white rounded-lg shadow-lg p-3 lg:p-8">
            {loading ? (
              <>
                <Skeleton className="h-10 mb-4 w-[95%]" />
                <Skeleton className="h-8 mb-4 w-[60%]" />
                <Skeleton className="h-6 mb-6 w-[80%]" />
                <Skeleton className="h-32 w-full" />
              </>
            ) : (
              <>
                {/* Title */}
                <h1 className="text-2xl lg:text-4xl font-semibold md:font-bold text-gray-900 mb-3 leading-tight">
                  {listing?.title}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2 md:mb-4">
                  <p className="text-xl lg:text-4xl font-bold text-blue-600">
                    {listing && formatToNaira(listing.price)}
                  </p>
                  {listing?.category === "rent" && (
                    <span className="text-gray-600 text-base">/Year</span>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2  mb-3 lg:mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <p className="text-sm lg:text-lg font-medium text-gray-700">
                    {listing?.location}
                  </p>
                </div>

                {/* Property Features */}
                <div className="flex items-center gap-3 lg:gap-6 mb-3 lg:mb-6 flex-wrap">
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BedDouble className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Bedrooms
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-900">
                        {listing?.bedrooms}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl">
                    <div className="p-2  bg-blue-100 rounded-lg">
                      <Bath className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Bathrooms
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-900">
                        {listing?.bathrooms}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Description */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">
                    Property Information
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {listing?.description}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Agent Card */}
          <div className="flex-[1] lg:sticky lg:top-24 lg:self-start">
            {loading ? (
              <Skeleton className="h-80 w-full rounded-2xl" />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-8">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 lg:mb-6">
                  Contact Agent
                </h3>

                {/* Agent Info */}
                <div className="flex items-center gap-4 mb-3 lg:mb-6 pb-6 border-b">
                  <Avatar className="w-12 h-12 ring-2 ring-blue-100">
                    <AvatarImage
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/storage/v1/object/public/storage/${agentDetails?.img}`}
                    />
                    <AvatarFallback className="bg-blue-600 text-white font-bold text-sm md:text-lg">
                      {agentDetails?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-base md:text-lg text-gray-900 capitalize">
                      {agentDetails?.name}
                    </p>
                    <p className="text-sm text-gray-600">Property Agent</p>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a href={`tel:${agentDetails?.phone}`} className="block">
                    <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                      <Phone size={20} />
                      <span>Call Agent</span>
                    </button>
                  </a>

                  <a
                    href={`https://wa.me/${agentDetails?.phone}`}
                    className="block"
                  >
                    <button className="w-full text-base flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                      <Mail size={20} />
                      <span className="text-base font-[600]">WhatsApp</span>
                    </button>
                  </a>

                  {/* <a href={`mailto:${agentDetails?.email}`} className="block">
                    <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition-all">
                      <Mail size={20} />
                      <span>Send Email</span>
                    </button>
                  </a> */}
                </div>

                {/* Agent Contact Info */}
                <div className="mt-6 pt-6 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>{agentDetails?.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} />
                    <span className="truncate">{agentDetails?.email}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
