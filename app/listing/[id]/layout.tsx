import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property details",
  description:
    "Discover your dream property with [Your Website Name]! Browse thousands of listings for homes, apartments, and commercial spaces. Filter by location, price, and amenities to find the perfect match. Whether you're buying, renting, or selling, we make property search simple and stress-free. Start your journey today!s",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
