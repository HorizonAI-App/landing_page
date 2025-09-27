'use client'

import { useState, useEffect } from 'react';
import { 
  Psychology, 
  Security, 
  Speed, 
  Analytics, 
  TrendingUp, 
  Settings,
  AccountBalanceWallet,
  SwapHoriz,
  Search,
  Timeline,
  Assessment,
  AutoAwesome
} from '@mui/icons-material';

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Psychology,
      title: "AI-Powered Trading",
      description: "Natural language command processing and intelligent trade execution",
      details: [
        "Context-aware decision making",
        "Autonomous portfolio management",
        "Smart risk assessment",
        "Predictive market analysis"
      ],
      delay: "0ms"
    },
    {
      icon: Security,
      title: "Enterprise Security",
      description: "Bank-grade security with encrypted storage and secure validation",
      details: [
        "Encrypted private key storage",
        "Secure transaction validation",
        "Rate limiting and safety limits",
        "Comprehensive error handling"
      ],
      delay: "100ms"
    },
    {
      icon: Speed,
      title: "Lightning Fast",
      description: "Real-time execution with Solana's high-performance blockchain",
      details: [
        "Sub-second transaction speeds",
        "Low latency trading",
        "Instant market updates",
        "Optimized for speed"
      ],
      delay: "200ms"
    },
    {
      icon: Analytics,
      title: "Real-Time Intelligence",
      description: "Live market data integration with advanced analytics",
      details: [
        "DexScreener analytics",
        "Price monitoring and alerts",
        "Market trend analysis",
        "Real-time portfolio tracking"
      ],
      delay: "300ms"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analysis",
      description: "Comprehensive analysis tools for informed decision making",
      details: [
        "Token analysis and insights",
        "Platform performance metrics",
        "Yield opportunity detection",
        "Portfolio optimization strategies"
      ],
      delay: "400ms"
    },
    {
      icon: Settings,
      title: "Interactive Experience",
      description: "Customizable interface with rich interactive features",
      details: [
        "Risk tolerance assessment",
        "Investment preference settings",
        "Rich results display",
        "Interactive charts and metrics"
      ],
      delay: "500ms"
    }
  ];

  return (
    <div className="bg-[#0B080E] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Solana Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/solana.png" 
                alt="Solana" 
                className="w-16 h-16 md:w-20 md:h-20 animate-spin-slow"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Features Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <AutoAwesome className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Features</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The AI Trading Agent with
            <br />
            Limitless Potential
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of DeFi trading with Horizon's intelligent AI agent, 
            powered by Solana's lightning-fast blockchain technology.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: feature.delay,
                    animation: isVisible ? `slideInUp 0.6s ease-out ${feature.delay} both` : 'none'
                  }}
                >
                  {/* Border Effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#0B080E]" />
                    </div>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of DeFi trading with Horizon's AI-powered platform, 
              built on Solana's lightning-fast blockchain.
            </p>
            <a 
              href="https://horizonai.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0B080E] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              <AutoAwesome className="w-5 h-5 mr-2" />
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
