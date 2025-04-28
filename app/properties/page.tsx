import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyGrid from "@/components/property_grid";

export default function Properties() {
  return (
    <div className="bg-[#ffff]">
      <Header />
      <div className="bg-[url('/modern_landscape.jpg')] w-full h-[240px] lg:h-[400px] bg-cover " />
      <PropertyGrid />
      <Footer />
    </div>
  );
}
