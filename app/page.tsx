import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import IconStream from "@/components/IconStream";
import FeatureSteps from "@/components/FeatureSteps";
import BigCalendar from "@/components/BigCalendar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <IconStream />
      <FeatureSteps />
      <BigCalendar />
      <Footer />
    </main>
  );
}
