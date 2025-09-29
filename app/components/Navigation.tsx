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
        <div className="flex items-center gap-4">
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
          <a 
            href="https://horizonai.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#E8ECFF] text-[#0B080E] px-5 md:px-6 py-2.5 md:py-4 rounded-full font-medium hover:bg-[#E8ECFF]/90 transition-colors text-sm md:text-base inline-block"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Dropdown - Slides content down */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#0B080E] backdrop-blur-sm border-t border-white/10 shadow-2xl mt-2 rounded-2xl">
            {/* Menu Items */}
            <div className="p-6">
              <nav className="space-y-3">
                <a 
                  href="#about" 
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  About
                </a>
                
                <a 
                  href="https://github.com/HorizonAI-App/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Github
                </a>
                
                <a 
                  href="https://x.com/horizonai_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter/X
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
