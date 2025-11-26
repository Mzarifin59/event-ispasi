"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tampilkan popup saat pertama kali render
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleBannerClick = () => {
    // Tutup popup saat banner diklik
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay/Backdrop with Blur - Darker */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-black/40 z-50 flex items-center justify-center p-4"
        onClick={closePopup}
      >
        {/* Banner Image - Direct without container */}
        <div className="relative animate-fadeIn">
          <Button
            onClick={closePopup}
            className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-300"
            aria-label="Close popup"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
          </Button>

          <Link
            href="https://www.instagram.com/spatialinfraconex/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onClick={(e) => {
              e.stopPropagation();
              handleBannerClick();
            }}
          >
            <Image
              src="/banner-popup.png"
              alt="Spatial Infra Conex 2026 Event Banner"
              width={600}
              height={900}
              className="w-full h-auto max-h-[80vh] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
