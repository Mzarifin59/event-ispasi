import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PopupBanner from "@/components/popup-banner";
import JoinUsSection from "@/components/join-us";
import CountdownSection from "@/components/count-down";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <JoinUsSection />
      <CountdownSection />
      <PopupBanner />
      <div className="h-20 bg-white">

      </div>
      <Footer />
    </main>
  );
}