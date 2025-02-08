import { Mail } from "lucide-react";
export default function Header() {
  return (
    <div className="p-4 fixed bg-stone-100 top-0 z-[100] w-full text-neutral-800">
      <div className="flex items-center  justify-between flex-row">
        <div className="flex justify-center w-[70%] items-center  flex-row gap-14 font-medium text-sm">
          <p>Home</p>
          <p>Pages</p>
          <p>Property List</p>
          <p>Single Property</p>
        </div>
        <div className="flex items-center gap-2.5">
          <Mail size={18} />
          <p className="capitalize font-medium  text-sm">get a quote</p>
        </div>
      </div>
    </div>
  );
}
