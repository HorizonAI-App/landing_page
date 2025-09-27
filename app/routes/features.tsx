import type { Route } from "./+types/features";
import { Navigation } from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Features - HORIZON.AI" },
    { name: "description", content: "Discover Horizon's AI-powered trading features: autonomous trading, comprehensive tools, enterprise security, and real-time intelligence for Solana blockchain." },
  ];
}

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B080E] mb-6">
            What is Horizon?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Horizon is an AI-powered trading agent that transforms how you interact with the Solana blockchain. 
            Instead of manually monitoring markets and executing trades, Horizon understands natural language 
            commands and autonomously manages your onchain operations.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B080E] mb-8 text-center">
            The Problem We Solve
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Traditional DeFi trading requires:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-[#0B080E] mb-2">24/7 Market Monitoring</h3>
                <p className="text-gray-600">Constant attention to price movements</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-semibold text-[#0B080E] mb-2">Perfect Timing</h3>
                <p className="text-gray-600">Executing trades at optimal moments</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="font-semibold text-[#0B080E] mb-2">Complex Strategies</h3>
                <p className="text-gray-600">Managing multiple positions and rebalancing</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-semibold text-[#0B080E] mb-2">Time-Sensitive Actions</h3>
                <p className="text-gray-600">Reacting to market conditions instantly</p>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 bg-[#0B080E] rounded-xl text-white">
            <p className="text-lg">
              Horizon eliminates these challenges by providing an intelligent agent that can understand 
              your trading intentions and execute them autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B080E] mb-12 text-center">
            🚀 Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Trading */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-[#0B080E] mb-4">AI-Powered Trading</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Natural language command processing</li>
                <li>• Intelligent trade execution</li>
                <li>• Context-aware decision making</li>
                <li>• Autonomous portfolio management</li>
              </ul>
            </div>

            {/* Comprehensive Tool Suite */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0B080E] mb-4">Comprehensive Tool Suite</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wallet Management: Balance checks, transfers</li>
                <li>• Token Trading: Buy/sell via Jupiter DEX</li>
                <li>• Market Analysis: Real-time prices, trends</li>
                <li>• Research Tools: Web search intelligence</li>
                <li>• Prediction Markets: Polymarket integration</li>
              </ul>
            </div>

            {/* Enterprise Security */}
            <div className="bg-[#0B080E] p-8 rounded-xl text-white hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-4">Enterprise-Grade Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Encrypted private key storage</li>
                <li>• Secure transaction validation</li>
                <li>• Rate limiting and safety limits</li>
                <li>• Comprehensive error handling</li>
              </ul>
            </div>

            {/* Real-Time Intelligence */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#0B080E] mb-4">Real-Time Intelligence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Live market data integration</li>
                <li>• DexScreener analytics</li>
                <li>• Price monitoring and alerts</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>

            {/* Analysis Types */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#0B080E] mb-4">Advanced Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Token Analysis</li>
                <li>• Platform Analysis</li>
                <li>• Yield Opportunities</li>
                <li>• Portfolio Strategy</li>
              </ul>
            </div>

            {/* Interactive Forms */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-[#0B080E] mb-4">Interactive Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Risk tolerance assessment</li>
                <li>• Investment amount preferences</li>
                <li>• Rich results display</li>
                <li>• Metrics, charts, recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B080E] mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the future of DeFi trading with Horizon's AI-powered platform.
          </p>
          <a 
            href="https://horizonai.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0B080E] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#0B080E]/90 transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
