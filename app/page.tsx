import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import HomeGrid from "@/components/home_grid";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <Header />

      {/* Hero Section */}
      <div className="w-full mb-4">
        <div className="w-full h-[300px]  lg:h-[500px] relative">
          {/* <div className="insert-0 w-full h-full bg-cover  absolute " /> */}

          {/* Hero Text and button */}
          <div className="z-[100] absolute lg:pl-20 text-white top-[35%] lg:top-[30%] w-full">
            <h2 className="leading-tight text-center text-3xl lg:text-left  lg:text-7xl mb-1.5 lg:mb-4 lg:w-[50%]  capitalize font-semibold ">
              Find your dream house
            </h2>
            <p className="text-sm lg:text-base text-center  lg:text-left lg:w-[40%] mb-4  font-medium ">
              Explore our comprehensive listings of residential properties, from
              cozy starter Homes to luxurious Estates
            </p>
            <Link href="/properties">
              <button className="w-fit px-6 flex place-self-center lg:place-self-start lg:block text-sm lg:text-base hover:bg-yellow-300 hover:font-bold font-semibold py-2 text-[#1B1D29] rounded-xl bg-yellow-400 ">
                Browse Now
              </button>
            </Link>
          </div>
          <Image
            width={1000}
            height={1000}
            alt="hero image"
            src="/hero_image.jpg"
            quality={100}
            priority
            className="w-full h-[100%] brightness-75  object-cover"
          />
        </div>
      </div>
      {/* Hero section ends here */}

      {/* Details section */}
      <div className="container mx-auto w-full px-3 lg:w-[70%]">
        {/* listing section title bar */}
        <div className="flex items-center pt-4 lg:pt-4 lg:mt-0 w-full mb-3 lg:mb-2.5 justify-between">
          <h3 className="font-semibold text-base lg:text-2xl">
            Featured Listings
          </h3>
          <Link className=" hover:text-yellow-400" href="/properties">
            <div className="flex items-center gap-1 pr-2">
              <p className="font-medium text-base">view all</p>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* listings container */}

        <HomeGrid />

        {/* listings container */}
      </div>
      <section className="mt-10 h-[240px] relative lg:h-[400px]">
        <div className="absolute z-[50] top-[20%]  w-full">
          <h3 className="text-xl lg:text-5xl  text-white font-[Montserrat] w-[90%] mx-auto text-center font-semibold">
            Find Your Perfect Property is Just a Click Away
          </h3>
          <p className="w-[90%] mt-1 text-sm lg:text-base text-center text-white mx-auto">
            Start browsing our property listings today and take the first step
            towards making your home ownership dreams a reality
          </p>
          <button className="flex mt-3 text-sm text-neutral-800 font-[600] place-self-center w-fit py-1.5 px-3 bg-white  rounded-lg">
            Become an agent
          </button>
        </div>
        <Image
          src="/model-home.jpg"
          quality={100}
          width={1000}
          height={10000}
          priority
          alt="model sized home"
          className="w-full h-full brightness-75 object-cover"
        />
      </section>
      <Footer />
    </div>
  );
}
