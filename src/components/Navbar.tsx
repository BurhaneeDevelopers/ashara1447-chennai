"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Map,
  Bus,
  MapPin,
  ClipboardList,
  Hotel,
  RefreshCcw,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    {
      href: "/your-journey",
      label: "Your Journey",
      icon: <Map className="w-5 h-5" />,
    },
    {
      href: "/transport",
      label: "Transport",
      icon: <Bus className="w-5 h-5" />,
    },
    { href: "/zones", label: "Zones", icon: <MapPin className="w-5 h-5" /> },
    {
      href: "/general-guidelines",
      label: "Guidelines",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      href: "/accommodation",
      label: "Accommodation",
      icon: <Hotel className="w-5 h-5" />,
    },
    {
      href: "/relay-center",
      label: "Relay Centers",
      icon: <RefreshCcw className="w-5 h-5" />,
    },
    {
      href: "/explore",
      label: "Explore",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="p-4 mx-auto px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ashara-tagline.png"
              alt="Ashara Logo"
              width={70}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 px-3 py-2 text-base font-medium"
              >
                <span>{link.icon}</span>
                <span className="mt-2">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 px-2 py-2 text-base font-medium"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
