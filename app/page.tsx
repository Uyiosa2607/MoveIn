"use client";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import HomeGrid from "@/components/home-grid";
import { Home, Search, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="w-full mb-12">
        <div className="w-full h-[400px] lg:h-[650px] relative">
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-gray-900/60 to-transparent z-10" />

          {/* Hero Text and button */}
          <div className="z-20 absolute left-0 right-0 top-[35%] lg:top-[40%] w-full px-4">
            <div className="max-w-4xl mx-auto lg:ml-20">
              <h2 className="leading-tight text-left lg:text-left text-4xl lg:text-7xl mb-3 lg:mb-4 capitalize font-bold text-white drop-shadow-lg">
                Find Your Dream Home
              </h2>
              <p className="text-base lg:text-xl text-left lg:text-left max-w-2xl mb-6 lg:mb-8 font-medium text-gray-100">
                Explore our comprehensive listings of residential properties,
                from cozy starter homes to luxurious estates
              </p>

              {/* Enhanced Search Bar */}
              <div className="bg-white rounded-2xl shadow-2xl p-3 lg:p-4 max-w-3xl mb-6">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex-1 flex items-center px-4 py-3 rounded-xl border border-gray-200 bg-white">
                    <Search className="text-gray-400 mr-2" size={20} />
                    <input
                      type="text"
                      placeholder="Enter location or property type..."
                      className="flex-1 outline-none text-gray-700"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Search size={18} />
                    Search
                  </button>
                </div>
              </div>

              <Link href="/properties">
                <button className="px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg hover:bg-yellow-300 hover:shadow-xl transform hover:scale-105 font-bold text-gray-900 rounded-xl bg-yellow-400 transition-all shadow-lg">
                  Browse Properties
                </button>
              </Link>
            </div>
          </div>

          <Image
            width={1920}
            height={1080}
            alt="hero image"
            src="/house-2.jpg"
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                Properties Listed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-2">
                3500+
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                Expert Agents
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <div className="container mx-auto w-full px-4 lg:w-[85%] py-8 lg:py-12">
        {/* Enhanced listing section title bar */}
        <div className="flex items-center mb-8 lg:mb-10">
          <div className="flex-1">
            <h3 className="font-bold text-2xl lg:text-4xl text-gray-900 mb-2">
              Featured Listings
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              Handpicked properties just for you
            </p>
          </div>
          <Link
            className="hover:text-blue-600 transition-colors"
            href="/properties"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
              <p className="font-semibold text-base lg:text-lg">View All</p>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={18}
              />
            </div>
          </Link>
        </div>

        {/* listings container */}
        <HomeGrid />
      </div>

      {/* Enhanced Services Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-gray-50 to-white">
        <div className="container mx-auto px-4 lg:w-[85%]">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="font-bold text-3xl lg:text-4xl text-gray-900 mb-3">
              Our Services
            </h3>
            <p className="text-center text-gray-600 text-base lg:text-xl max-w-2xl mx-auto font-medium">
              We provide comprehensive real estate services to help you buy,
              sell, or rent properties with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  <Home className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl lg:text-2xl mb-3 font-bold text-gray-900">
                  Property Sales
                </h4>
                <p className="text-sm lg:text-base text-gray-600 font-medium leading-relaxed">
                  Our expert agents will help you sell your property at the best
                  possible price with a tailored marketing strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl lg:text-2xl mb-3 font-bold text-gray-900">
                  Investment Advisory
                </h4>
                <p className="text-sm lg:text-base text-gray-600 font-medium leading-relaxed">
                  Get expert advice on real estate investments to maximize
                  returns and build a valuable property portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  <Search className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl lg:text-2xl mb-3 font-bold text-gray-900">
                  Property Search
                </h4>
                <p className="text-sm lg:text-base text-gray-600 font-medium leading-relaxed">
                  Find your dream home with our advanced search tools and
                  personalized property recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-base lg:text-xl max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with EstateElite
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-12"
          >
            <SwiperSlide>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white rounded-2xl">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center mb-5">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-blue-100">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20woman%20with%20short%20blonde%20hair%2C%20friendly%20smile%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20portrait&width=100&height=100&seq=avatar1&orientation=squarish" />
                      <AvatarFallback className="bg-blue-600 text-white font-bold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Jennifer Davis
                      </h4>
                      <p className="text-sm text-gray-600">Home Buyer</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    &quot;MoveIn made finding our dream home a breeze. Our agent
                    understood exactly what we were looking for and found us the
                    perfect property within our budget.&quot;
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white rounded-2xl">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center mb-5">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-blue-100">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20man%20with%20dark%20hair%20and%20glasses%2C%20friendly%20smile%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20portrait&width=100&height=100&seq=avatar2&orientation=squarish" />
                      <AvatarFallback className="bg-blue-600 text-white font-bold">
                        MR
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Michael Rodriguez
                      </h4>
                      <p className="text-sm text-gray-600">Property Seller</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    &quot;I sold my property through EstateElite and was
                    impressed by their professionalism. They marketed my home
                    effectively and secured a sale above asking price!&quot;
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white rounded-2xl">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center mb-5">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-blue-100">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20long%20dark%20hair%2C%20friendly%20smile%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20portrait&width=100&height=100&seq=avatar3&orientation=squarish" />
                      <AvatarFallback className="bg-blue-600 text-white font-bold">
                        SL
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Sarah Lee
                      </h4>
                      <p className="text-sm text-gray-600">Investor</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    &quot;The investment advisory team at EstateElite helped me
                    build a profitable real estate portfolio. Their market
                    insights and personalized approach exceeded my
                    expectations.&quot;
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white rounded-2xl">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center mb-5">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-blue-100">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20older%20man%20with%20gray%20hair%2C%20friendly%20smile%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20portrait&width=100&height=100&seq=avatar4&orientation=squarish" />
                      <AvatarFallback className="bg-blue-600 text-white font-bold">
                        DP
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        David Parker
                      </h4>
                      <p className="text-sm text-gray-600">Home Buyer</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    &quot;As first-time homebuyers, we appreciated the guidance
                    and patience of our EstateElite agent. They made a
                    complicated process feel simple and stress-free.&quot;
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8">
            Join thousands of satisfied clients who found their dream properties
            with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
