"use client";
import { useState } from "react";
import { Menu, X, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function closeNav() {
    setNavOpen(false);
  }

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Listings" },
    { href: "/saved-listing", label: "Favorites" },
  ];

  return (
    <header className="fixed top-0 z-[300] w-full bg-white shadow-md">
      <div className="container mx-auto px-2.5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={closeNav}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors">
                <House size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                MoveIn
              </h3>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-base capitalize transition-colors relative group ${
                  isActive(link.href)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/properties">
              <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNav}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-gray-900" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-[400] md:hidden transition-opacity duration-300 ${
          navOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeNav}
        />

        {/* Slide-in Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-xl">
                <House size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">MoveIn</h3>
            </div>
            <button
              onClick={closeNav}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-900" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeNav}
                className={`px-4 py-3 rounded-xl font-semibold text-base capitalize transition-all ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="absolute bottom-8 left-6 right-6">
            <Link href="/properties" onClick={closeNav}>
              <button className="w-full px-6 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-base">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
