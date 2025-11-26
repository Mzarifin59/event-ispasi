"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Component untuk animasi flip angka per digit
function FlipDigit({ digit }: { digit: string }) {
  const [displayDigit, setDisplayDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== displayDigit) {
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setDisplayDigit(digit);
        setIsFlipping(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [digit, displayDigit]);

  return (
    <div className="relative w-[45px] md:w-[60px] h-[70px] md:h-[100px] overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center text-5xl md:text-[100px] font-bold transition-all duration-300 ${
          isFlipping
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        {displayDigit}
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center text-5xl md:text-[100px] font-bold transition-all duration-300 ${
          isFlipping
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full"
        }`}
      >
        {digit}
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetUTC = Date.UTC(2026, 4, 11, 17, 0, 0);

    const updateCountdown = () => {
      const now = new Date();

      const nowUTC = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );

      const diff = targetUTC - nowUTC;

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        setTimeLeft({
          hours: totalHours, 
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatted = {
    hours: String(timeLeft.hours).padStart(4, "0"), 
    minutes: String(timeLeft.minutes).padStart(2, "0"),
    seconds: String(timeLeft.seconds).padStart(2, "0"),
  };

  return (
    <section className="relative bg-[#21A94E] overflow-hidden md:min-h-[543px]">
      <div className="absolute -left-72 -top-72 w-[700px] h-[700px] rounded-full border-150 border-[#00B9F7]/60 opacity-40"></div>
      <div className="max-md:hidden absolute right-10 -bottom-72 w-[700px] h-[700px] rounded-full border-150 border-[#00B9F7]/60 opacity-40"></div>

      {/* Image - Full Height di Pojok Kanan */}
      <div className="absolute right-0 top-0 h-full hidden md:block">
        <Image
          src="/countdown-image.png"
          alt="Woman working on laptop"
          width={815}
          height={543}
          className="h-full w-auto object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 md:min-h-[543px] flex items-center">
        <div className="md:w-1/2">
          {/* Left Content - Countdown */}
          <div className="text-white space-y-8">
            <div className="space-y-2">
              <p className="text-white/90 text-[28px]">12 May - 13 May 2026</p>
              <h2 className="text-4xl font-bold">SPATIAL INFRA CONEX 2026</h2>
            </div>

            {/* Countdown Timer dengan Animasi */}
            <div className="flex gap-6 md:gap-28 items-end mt-14">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-2 tabular-nums">
                  <FlipDigit digit={formatted.hours[0]} />
                  <FlipDigit digit={formatted.hours[1]} />
                </div>
                <div className="text-lg md:text-2xl uppercase tracking-wider">
                  HOURS
                </div>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-2 tabular-nums">
                  <FlipDigit digit={formatted.minutes[0]} />
                  <FlipDigit digit={formatted.minutes[1]} />
                </div>
                <div className="text-lg md:text-2xl uppercase tracking-wider">
                  MINUTES
                </div>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="relative flex gap-1 mb-2 tabular-nums">
                  <FlipDigit digit={formatted.seconds[0]} />
                  <FlipDigit digit={formatted.seconds[1]} />
                </div>
                <div className="text-lg md:text-2xl uppercase tracking-wider">
                  SECONDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
