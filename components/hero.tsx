import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-header.png"
          alt="Jakarta Skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay - sesuai dengan kode dari Figma */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #3DB549 0%, #3DB549 35%, #00B4F2 100%)",
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          {/* Date */}
          <p className="text-white text-base sm:text-lg mb-6 font-medium">
            Jakarta, 12 May 2026 - 13 May 2026
          </p>

          {/* Title */}
          <h1 className="text-white text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            SPATIAL INFRA CONEX 2026
          </h1>

          {/* Subtitle */}
          <p className="text-white text-base sm:text-lg font-medium mb-10 leading-relaxed">
            INTERNATIONAL CONFERENCE ON SPATIAL PLANNING
            <br />
            AND INFRASTRUCTURE FOR SUSTAINABLE
            <br />
            DEVELOPMENT
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/register"
              className="text-[#23262F] inline-flex text-lg sm:text-xl items-center bg-white hover:bg-gray-100 font-bold px-4 py-2 sm:px-8 sm:py-3 rounded-lg transition-colors group"
            >
              Register this event
              <div className="pr-2 py-2 sm:pr-3 sm:py-3 bg-cyan-400 rounded-full ml-3">
                <svg
                  className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
