import type { Route } from "./+types/home";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";

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
    </div>
  );
}
