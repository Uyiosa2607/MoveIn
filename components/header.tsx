import { Mail } from "lucide-react";
export default function Header() {
  return (
    <div className="p-4 fixed bg-stone-100 top-0 z-[100] w-full text-neutral-800">
      <div className="flex items-center  justify-between flex-row">
        <div>
          <h3 className="font-bold text-lg">Brand Logo.</h3>
        </div>
        <div className="flex justify-center items-center  capitalize flex-row gap-14 font-medium text-sm">
          <p>Home</p>
          <p>about</p>
          <p>listings</p>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={15} />
          <p className="font-medium  text-sm">Get a Quote</p>
        </div>
      </div>
    </div>
  );
}
