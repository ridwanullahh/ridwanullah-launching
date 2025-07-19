
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import WaitlistSection from '../components/WaitlistSection';

const Index = () => {
  const [logoUrl, setLogoUrl] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-minted-glow/20 to-minted-glow relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-ridwan-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-digital-gold/8 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-ridwan-green/2 to-transparent rounded-full animate-pulse-slow"></div>
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,179,77,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(5,179,77,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-digital-gold/30 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-ridwan-green/40 rounded-full animate-bounce-gentle" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-ridwan-green/25 rounded-full animate-bounce-gentle" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-digital-gold/20 rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Hero Section */}
          <HeroSection logoUrl={logoUrl} setLogoUrl={setLogoUrl} />

          {/* Mission Section */}
          <MissionSection />

          {/* Waitlist Section */}
          <WaitlistSection />

          {/* Enhanced Footer */}
          <div className="mt-32 pt-16 border-t border-ridwan-green/8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-pure-white/70 backdrop-blur-xl rounded-4xl p-12 lg:p-16 max-w-4xl mx-auto shadow-xl text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-minted-glow/30 to-transparent rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl from-digital-gold/20 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
                <p className="font-lora text-xl lg:text-2xl text-midnight-slate/85 italic mb-6 leading-relaxed">
                  "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
                </p>
                <p className="font-inter text-lg text-ridwan-green font-semibold">
                  — Qur'an 65:3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
