export default function Footer() {
  return (
    <footer>
      {/* Main Footer Section with Gradient */}
      <div className="relative bg-linear-to-r from-[#21A94E] to-[#06B5D9] text-white py-12 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute z-0 -bottom-6 right-20 w-[300px] h-[100px] -rotate-12 bg-[#21A94E] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Section */}
            <div>
              <h3 className="font-popins text-lg font-bold mb-6">Contact</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Mr. Rizky Effendi */}
                <div className="space-y-2">
                  <p className="text-[15.5px] font-bold">Mr. Rizky Effendi</p>
                  <p className="text-[15.5px]">
                    <span className="font-medium">Phone :</span> +62 878 8496
                    2312
                  </p>
                  <p className="text-[15.5px]">
                    <span className="font-medium">Email :</span> Rizky@onus.asia
                  </p>
                </div>

                {/* Mr. Khafu Algifarie */}
                <div className="space-y-2">
                  <p className="text-[15.5px] font-bold">Mr. Khafu Algifarie</p>
                  <p className="text-[15.5px]">
                    <span className="font-medium">Phone :</span> +62 877 2409
                    2000
                  </p>
                  <p className="text-[15.5px]">
                    <span className="font-medium">Email :</span>{" "}
                    Marketing@onus.asia
                  </p>
                </div>
              </div>
            </div>

            {/* ON US ASIA Section */}
            <div>
              <h3 className="font-popins text-xl font-bold mb-4">
                ON US ASIA (PT. ENERGI KREATIF DINAMIKA)
              </h3>

              <p className="text-lg leading-relaxed mb-2">
                The Strategic Global Event Partner
              </p>

              <p className="text-lg leading-relaxed">
                Plaza Asia 18th floor, Jl. Jend Sudirman Kav 59 - 59,
                <br />
                Jakarta Selatan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 bg-[#0A867C] text-white py-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="font-popins text-base font-bold text-center md:text-left">
            <span className="text-[#272B34]">©</span> On Us Asia 2025. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
