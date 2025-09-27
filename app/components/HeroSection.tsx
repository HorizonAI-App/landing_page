import { SplineScene } from "./ui/splite";
import { Spotlight } from "./ui/spotlight";

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 md:px-6 -mt-12 md:-mt-12 pb-8 md:pb-16 gap-4 lg:gap-0 relative overflow-hidden">
      <Spotlight
        className="-top-60 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Left Side - Text Content */}
      <div className="flex-1 max-w-2xl lg:ml-16 text-center lg:text-left relative z-10 order-2 lg:order-1">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">
          <span className="gradient-text">THE AI TACTICIAN FOR</span>
          <br />
          <span className="text-white">ONCHAIN TRADING</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-12 leading-relaxed">
          Introducing Horizon : Horizon eliminates manual execution and constant monitoring, 
          allowing users to manage complex, time-sensitive transactions and execute optimal 
          trading strategies autonomously.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <button className="bg-white text-[#0B080E] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button className="border border-white text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side - 3D Robot */}
      <div className="flex-1 flex items-center justify-center w-full lg:w-auto relative z-10 order-1 lg:order-2">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[800px] relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
