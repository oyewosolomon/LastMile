import Footer from "@/components/layout/Footer";
import HeroSection from "../components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import AboutUs from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import IndustriesSection from "@/components/sections/Industries";
import SustainabilitySection from "./Sustainability";
import PartnershipsSection from "@/components/sections/Partners";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutUs/>
      <ServicesSection/>
      <HowItWorks/>
      <IndustriesSection/>
      <SustainabilitySection/>
      <PartnershipsSection/>
      <Footer/>
    </main>
  );
}