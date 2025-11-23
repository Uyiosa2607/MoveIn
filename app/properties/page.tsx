import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyGrid from "@/components/property-grid";
import { Home } from "lucide-react";

export default function Properties() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="relative w-full h-[250px] lg:h-[350px] overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/70 to-blue-900/80 z-10" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/modern_landscape.jpg')] bg-cover bg-center bg-no-repeat"
          style={{ filter: "brightness(0.7)" }}
        />

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Home size={40} className="text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Browse All Properties
          </h1>
          <p className="text-base lg:text-lg text-gray-100 max-w-xl mx-auto">
            Discover your perfect home from our extensive collection of
            properties
          </p>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </div>

      {/* Property Grid with negative margin */}
      <div className="-mt-8">
        <PropertyGrid />
      </div>

      <Footer />
    </div>
  );
}
