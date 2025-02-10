/* eslint-disable prefer-const */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface listingProp {
  id: string;
  img: string;
  price: number;
  title: string;
  bathrooms: number;
  bedrooms: number;
  cat: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToNaira(amount: number) {
  // Convert the number to a string and add commas as thousand separators
  const formattedAmount = amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedAmount;
}

export const mockData = [
  {
    title: "new apartment 1",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
    cat: "rent",
    id: "6T6DAFGSWE8WYER89",
    img: "/modern_house.jpg",
  },
  {
    title: "new apartment 2",
    bathrooms: 1,
    bedrooms: 1,
    price: 2000,
    cat: "sale",
    id: "6T6DFGWE8WDYER89",
    img: "/modern_house.jpg",
  },
  {
    title: "new apartment 3",
    bathrooms: 3,
    bedrooms: 3,
    price: 200000,
    cat: "sale",
    id: "6T6DFGWE8WAYER89",
    img: "/modern_house.jpg",
  },
  {
    title: "new apartment 4",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
    cat: "rent",
    id: "6T6SDFGWE8WYER89",
    img: "/modern_house.jpg",
  },
  {
    title: "new apartment 5",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
    cat: "rent",
    id: "6T6DSFGWE8WYER89",
    img: "/modern_house.jpg",
  },
  {
    title: "new apartment 6",
    bathrooms: 2,
    bedrooms: 2,
    price: 2000,
    cat: "rent",
    id: "6T6DFGWE8DWYER89",
    img: "/modern_house.jpg",
  },
];

export function saveToDatabase(listing: listingProp) {
  let savedApartments =
    JSON.parse(localStorage.getItem("saved_properties")!) || [];

  try {
    const newProperty = {
      title: listing?.title,
      id: listing?.id,
      img: listing?.img,
      price: listing?.price,
      bedrooms: listing?.bedrooms,
      bathrooms: listing?.bathrooms,
      cat: listing?.cat,
    };

    savedApartments.push(newProperty);

    localStorage.setItem("saved_properties", JSON.stringify(savedApartments));
    console.log("saved to local storage");
  } catch (error) {
    console.log(error);
  }
}
