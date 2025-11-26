"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo-ispasi.png"
              alt="SPASI Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover-bold-effect transition-colors inline-block min-w-fit"
            >
              Home
            </Link>

            <Link
              href="/"
              className="text-gray-900 hover-bold-effect transition-colors inline-block min-w-fit"
            >
              About
            </Link>

            <div className="relative group">
              <button className="text-gray-900 hover-bold-effect transition-colors flex items-center min-w-fit">
                Event Information
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu - Desktop */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Event Details
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Venue
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Registration Info
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Speakers
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="text-gray-900 hover-bold-effect transition-colors inline-block min-w-fit whitespace-nowrap"
            >
              Sponsor & Exhibitor
            </Link>

            <Link
              href="/"
              className="text-gray-900 hover-bold-effect transition-colors inline-block min-w-fit"
            >
              Schedule
            </Link>

            <Link
              href="/"
              className="text-gray-900 hover-bold-effect transition-colors inline-block min-w-fit"
            >
              FAQ
            </Link>
          </div>

          {/* Register Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link href="/">
              <Button
                size={"lg"}
                className="text-base bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-10 py-3 rounded-lg transition-colors"
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>

            {/* Event Information Dropdown - Mobile */}
            <div>
              <button
                onClick={toggleEventDropdown}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Event Information
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isEventDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {/* Dropdown Items - Sesuaikan dengan kebutuhan */}
              {isEventDropdownOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Event Details
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Venue
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Registration Info
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Speakers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Sponsor & Exhibitor
            </Link>

            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Schedule
            </Link>

            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>

            {/* Register Button - Mobile */}
            <div className="pt-4">
              <Link href="/" onClick={toggleMenu}>
                <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}