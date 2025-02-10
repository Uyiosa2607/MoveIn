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

export function saveToDatabase(listing: listingProp | null) {
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
    };

    savedApartments.push(newProperty);

    localStorage.setItem("saved_properties", JSON.stringify(savedApartments));
    alert("Saved to favorites");
  } catch (error) {
    console.log(error);
  }
}
