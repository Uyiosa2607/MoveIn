import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import HomeGrid from "@/components/home_grid";
import { Home, Search, ChartLine } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="bg-[#fff]">
      <Header />

      {/* Hero Section */}
      <div className="w-full mb-4">
        <div className="w-full h-[300px]  lg:h-[500px] relative">
          {/* <div className="insert-0 w-full h-full bg-cover  absolute " /> */}

          {/* Hero Text and button */}
          <div className="z-[100] absolute lg:pl-20 text-white top-[35%] lg:top-[45%] w-full">
            <h2 className="leading-tight text-center text-3xl  lg:text-7xl mb-1.5 lg:mb-2   capitalize font-semibold ">
              Find your dream house
            </h2>
            <p className="text-sm lg:text-base text-center w-[80%] mx-auto  mb-4  font-medium ">
              Explore our comprehensive listings of residential properties, from
              cozy starter Homes to luxurious Estates
            </p>
            <Link href="/properties">
              <button className="w-fit px-6 flex place-self-center  lg:block text-sm lg:text-base hover:bg-yellow-300 hover:font-bold font-semibold py-2 text-[#1B1D29] rounded-xl bg-yellow-400 ">
                Browse Now
              </button>
            </Link>
          </div>
          <Image
            width={1000}
            height={1000}
            alt="hero image"
            src="/house-2.jpg"
            quality={100}
            priority
            className="w-full h-[100%] brightness-50  object-cover"
          />
        </div>
      </div>
      {/* Hero section ends here */}

      {/* Details section */}
      <div className="container mx-auto w-full px-3 lg:w-[80%]">
        {/* listing section title bar */}
        <div className="flex items-center pt-4 lg:pt-4 lg:mt-0 w-full mb-3 lg:mb-3 justify-between">
          <h3 className="font-[700] text-base lg:text-xl">Featured Listings</h3>
          <Link className=" hover:text-yellow-400" href="/properties">
            <div className="flex items-center gap-1 pr-2">
              <p className="font-[600] text-base">view all</p>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* listings container */}

        <HomeGrid />

        {/* listings container */}
      </div>

      <section className="w-[80%] py-8 lg:py-16 mt-8 lg:mt-10 mx-auto">
        <div>
          <h3 className="font-[700]  text-gray-900 text-2xl text-center mb-1">
            Our Services
          </h3>
          <p className="text-center text-gray-600 mb-8 font-medium">
            We provide comprehensive real estate services to help you buy, sell,
            or rent properties with confidence
          </p>
        </div>
        <div className="flex items-center gap-4 flex-col lg:flex-row">
          <Card className="flex-1 flex flex-col h-[180px] items-center justify-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Home className="text-blue-600" size={25} />
            </div>
            <h4 className="text-base my-1.5 font-[600]">Property Sales</h4>
            <p className="text-sm text-gray-600 font-medium w-[80%] text-center">
              Our expert agents will help you sell your property at the best
              possible price with a tailored marketing strategy.
            </p>
          </Card>
          <Card className="flex-1 flex  flex-col h-[180px] items-center justify-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <ChartLine className="text-blue-600" size={25} />
            </div>
            <h4 className="text-base my-1.5 font-[600]">Investment Advisory</h4>
            <p className="text-sm text-gray-600 font-medium w-[80%] text-center">
              Get expert advice on real estate investments to maximize returns
              and build a valuable property portfolio.
            </p>
          </Card>
          <Card className="flex-1 flex  flex-col h-[180px] items-center justify-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Search className="text-blue-600" size={25} />
            </div>
            <h4 className="text-base my-1.5 font-[600]">Property Search</h4>
            <p className="text-sm text-gray-600 font-medium w-[80%] text-center">
              Find your dream home with our advanced search tools and
              personalized property recommendations.
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
