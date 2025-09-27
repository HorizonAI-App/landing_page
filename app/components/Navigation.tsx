'use client'

import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-center py-3 md:py-6 px-5">
      <div className="flex items-center justify-between bg-[#1C191F] backdrop-blur-sm border border-gray-700/50 rounded-full px-6 md:px-8 py-2 md:py-3 w-fit relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2 md:gap-1">
          <img 
            src="/logo.png" 
            alt="HORIZON.AI" 
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span className="text-white text-sm md:text-xl font-medium">HORIZON.AI</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 mx-6 lg:mx-8">
          <a href="#about" className="text-white hover:text-white/80 transition-colors">
            About
          </a>
          <a href="https://github.com/HorizonAI-App/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            Github
          </a>
          <a href="https://x.com/horizonai_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            Twitter/X
          </a>
        </div>

        {/* Mobile Menu Button and Get Started Button Container */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Get Started Button */}
          <button className="bg-[#E8ECFF] text-[#0B080E] px-5 md:px-6 py-2.5 md:py-4 rounded-full font-medium hover:bg-[#E8ECFF]/90 transition-colors text-sm md:text-base">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#1C191F] backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg mt-2">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-white hover:text-white/80 transition-colors text-center py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="https://github.com/HorizonAI-App/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white/80 transition-colors text-center py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </a>
              <a 
                href="https://x.com/horizonai_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white/80 transition-colors text-center py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
