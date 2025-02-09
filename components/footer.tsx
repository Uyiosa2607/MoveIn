export default function Footer() {
  return (
    <div className="bg-[#0b1d27] text-white h-fit pt-8 pb-10 mt-8">
      <div className="container px-2 md:w-[100%] lg:w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 md:items-center">
          <div className="flex-2 flex gap-4  flex-col">
            <p className="text-sm leading-tight text-left font-bold">
              Brand Logo
            </p>
            <p className="text-xs font-normal">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div>
              <p className="text-sm mb-1 font-medium">
                Are you finding a home?
              </p>
              <input
                className="border-b-[1px] text-sm pb-1 border-white bg-transparent text-white w-full"
                placeholder="Email address"
                type="email"
              />
            </div>
          </div>
          <div className="flex-1 flex gap-5 flex-col md:flex-row md:items-center  justify-between">
            <div className="flex gap-4 capitalize text-xs font-normal  flex-col">
              <p className="capitalize text-base font-semibold">explore</p>
              <p>buy</p>
              <p>rent</p>
              <p>short term</p>
            </div>
            <div className="flex gap-4 capitalize text-xs font-normal  flex-col">
              <p className="capitalize text-sm font-semibold">services</p>
              <p>property management</p>
              <p>Property valuation</p>
              <p>property exchange</p>
            </div>
            <div className="flex gap-4 capitalize text-xs font-normal  flex-col">
              <p className="capitalize text-sm font-semibold">Quick links</p>
              <p>Blogs</p>
              <p>FAQ</p>
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
