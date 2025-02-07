import Image from "next/image";

interface CardProp {
  listing: {
    name: string;
    bathrooms: number;
    bedrooms: number;
    price: number;
  };
}

export default function HomeListingCard({ listing }: CardProp) {
  return (
    <div>
      <Image
        alt={listing?.name}
        width={500}
        quality={100}
        height={500}
        src={"/banner.jpg"}
        className="object-fit w-full h-[160px]"
      />
      <p>{listing?.name}</p>
    </div>
  );
}
