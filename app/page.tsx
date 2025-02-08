import Header from "@/components/header";
import { ArrowRight, Phone } from "lucide-react";
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
    bathrooms: 1,
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
    <div className="bg-[#fff]">
      <Header />

      {/* Hero Section */}
      <div className="w-full mb-10">
        <div className="w-full h-[300px] relative px-4">
          <div className="insert-0 w-full h-full bg-cover bg-center absolute bg-[url('/banner_2.jpg')] opacity-90" />

          {/* Hero Text and button */}
          <div className="z-[50] relative text-white top-[40%] w-full">
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
        <div className="bg-[url('/banner.jpg')] bg-center rounded-3xl text-white bg-cover h-[300px] mt-10 w-full">
          <div className="w-[85%] mx-auto pb-10 pt-5">
            <h4 className="font-medium text-sm mb-2 text-yellow-400">
              features
            </h4>
            <h2 className="font-semibold mb-4 text-3xl ">Why choose us</h2>
            <p className="text-sm font-medium mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              corrupti delectus neque nihil repudiandae similique!
            </p>
            <div className="flex gap-3 flex-col">
              <div className="flex gap-2 items-center flex-row">
                <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
                <p>Trusted Company</p>
              </div>
              <div className="flex  gap-2 items-center flex-row">
                <div className="w-4 border-2 border-yellow-400 h-4 rounded-full"></div>
                <p>Transparent Pricing</p>
              </div>
              <div className="flex gap-2 items-center flex-row">
                <div className="w-4 border-2 border-yellow-400 h-4 rounded-full"></div>
                <p>Professional Support</p>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us ends here */}

        {/* Contact us section */}
        <div className="mt-10 w-full  bg-[url('/contact-bg.jpg')] bg-cover rounded-3xl">
          <div className="w-[85%] mx-auto pt-6">
            <div className="flex gap-4 flex-row">
              <div className="flex-1 text-white">
                <h3>Get in touch</h3>
                <p>Office:</p>
                <p>office address</p>
                <p>Work hours:</p>
                <p>office work hour</p>
                <p>Phone</p>
                <div className="flex items-center flex-row gap-1">
                  <Phone className="text-yellow-400" size={14} />
                  <p>Phone</p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="flex-1 flex flex-col gap-2.5 pb-6">
                <input
                  className="bg-transparent font-[Montserrat] text-white text-sm border-2 border-white rounded-2xl p-[6px] px-3"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent font-[Montserrat] text-white text-sm border-2 border-white rounded-2xl p-[6px]"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="bg-transparent text-white font-[Montserrat] text-sm border-2 border-white rounded-2xl p-[6px]"
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                />
                <textarea
                  className="bg-transparent  text-white font-[Montserrat] text-sm h-[140px] border-2 border-white rounded-2xl p-[6px]"
                  name="message"
                  placeholder="Message"
                />
                <button className="w-full capitalize text-center text-sm font-[Montserrat] text-neutral-800 py-2.5 rounded-3xl bg-yellow-400 font-medium">
                  send Message
                </button>
              </form>
              {/* contact form ends here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
