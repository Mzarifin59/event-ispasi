import Image from "next/image";
import { Button } from "./ui/button";

// Komponen Join Us Section
export default function JoinUsSection() {
  return (
    <section className="pt-16 pb-16 md:pb-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="font-popins bg-linear-to-br from-cyan-50 to-blue-50 text-cyan-500 font-semibold text-sm tracking-wide w-fit p-2 rounded-md text-center md:text-left">
              Jakarta, 12 May 2026 - 13 May 2026
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#090F4E] leading-tight">
              Join Us For SPATIAL INFRA CONEX 2026 !
            </h1>

            <p className="text-[#79839A] leading-relaxed text-justify text-[15.5px]">
              The Spatial Planning and Infrastructure framework establishes
              direct linkage to key stakeholders across Indonesia's spatial
              development and infrastructure ecosystem. Its integration scope
              spans central and regional governments, international
              government-to-government partners, global financial institutions
              such as the Asian Development Bank and the World Bank,
              professional industry associations, and leading academic
              institutions. This network provides a strategic platform for
              collaboration, policy coordination, investment facilitation, and
              the development of high-impact infrastructure projects.
            </p>
          </div>

          {/* Right Content - Image Card */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative w-full">
              <Image
                src="/image-joinus.png"
                alt="City skyline"
                width={514}
                height={348}
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Card - Responsive positioning */}
            <div className="relative mt-8 lg:absolute lg:-bottom-30 xl:-bottom-24 xl:left-[106px] lg:left-11 min-[1180px]:left-20 lg:mt-0 bg-white rounded-2xl shadow-xl overflow-hidden w-full lg:w-4/5 min-[1180px]:w-2/3 xl:w-2/3 mx-auto md:mx-0">
              <div className="p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Discover Our Program
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  You can check program start from day-1 until day-3 event
                </p>

                <div className="flex flex-col xl:flex-row gap-2 sm:gap-3 md:gap-4">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-colors w-full xl:w-auto whitespace-nowrap">
                    Register
                  </Button>

                  <Button
                    size={"lg"}
                    className="flex items-center justify-center gap-1 sm:gap-2 text-[#272B34] px-3 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-transparent text-sm sm:text-base font-semibold transition-colors bg-transparent w-full sm:w-auto whitespace-nowrap"
                  >
                    <span className="text-sm sm:text-base md:text-xl pl-2 pr-1 md:pl-3 md:pr-2 py-0.5 md:py-1 bg-[#21A94E] rounded-full text-white">
                      ▶
                    </span>
                    Explore Program
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
