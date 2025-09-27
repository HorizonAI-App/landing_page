import type { Route } from "./+types/home";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HORIZON.AI - The AI Tactician for Onchain Trading" },
    { name: "description", content: "Horizon eliminates manual execution and constant monitoring, allowing users to manage complex, time-sensitive transactions and execute optimal trading strategies autonomously." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
