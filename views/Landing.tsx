
import React, { useState } from 'react';

interface LandingProps {
  onConnect: () => void;
}

const Landing: React.FC<LandingProps> = ({ onConnect }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    // Simulate wallet interaction
    setTimeout(() => {
      onConnect();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f0a1a] text-white flex flex-col relative overflow-hidden font-display">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      {/* Nav */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined text-white">account_balance_wallet</span>
          </div>
          <span className="text-xl font-black tracking-tighter italic">DFT_RWA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Audit</a>
          <a href="#" className="hover:text-white transition-colors">Governance</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
          Institutional Grade Tokenization Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
          Digitize Assets. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Unlock Liquidity.</span>
        </h1>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          The premier platform for digitizing RMB Money Market Funds. 
          Real-time NAV tracking, institutional-grade compliance, and seamless on-chain management.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up [animation-delay:300ms]">
          <button 
            onClick={handleConnect}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-primary hover:bg-primary-hover rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/40 min-w-[240px] overflow-hidden"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">wallet</span>
                <span>Connect Wallet</span>
              </div>
            )}
          </button>
          
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg transition-all">
            View Public Explorer
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full animate-fade-in-up [animation-delay:400ms]">
          {[
            { icon: 'security', title: 'KYC / AML', desc: 'Embedded compliance layer with whitelisting.' },
            { icon: 'bolt', title: 'Instant Settlement', desc: 'Atomic mint and burn operations.' },
            { icon: 'monitoring', title: 'Real-time NAV', desc: 'Transparent fund performance tracking.' }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/[0.08] transition-all group">
              <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center text-slate-600 text-[10px] uppercase tracking-widest font-bold">
        Secure • Audited • Compliant
      </footer>
    </div>
  );
};

export default Landing;
