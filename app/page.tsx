import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PolicySection from "@/components/PolicySection";
import LeadershipSection from "@/components/LeadershipSection";
import TimelineSection from "@/components/TimelineSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <PolicySection />
      <LeadershipSection />
      <TimelineSection />
      <NewsSection />
      <GallerySection />
      <CtaSection />
      <Footer />
    </main>
  );
}
