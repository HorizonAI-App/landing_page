export function Footer() {
  return (
    <footer className="bg-[#0B080E] relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-32 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            {/* Logo and Text */}
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img 
                src="/logo.png" 
                alt="HORIZON.AI" 
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-white text-xl md:text-2xl font-medium">HORIZON.AI</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://x.com/horizonai_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium">X</span>
              </a>

              <a 
                href="https://github.com/HorizonAI-App/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">Github</span>
              </a>
            </div>
          </div>

          {/* Bottom Credit */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 HORIZON.AI. All rights reserved.
              </p>
              <a 
                href="https://x.com/thatweb3gee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Built by mankind
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
