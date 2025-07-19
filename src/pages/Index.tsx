
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import WaitlistSection from '../components/WaitlistSection';
import { Globe, Users, Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [logoUrl, setLogoUrl] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-minted-glow/15 to-minted-glow relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-ridwan-green/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-digital-gold/6 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-ridwan-green/1 to-transparent rounded-full animate-pulse-slow"></div>
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,179,77,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(5,179,77,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-5 h-5 bg-digital-gold/20 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-ridwan-green/25 rounded-full animate-bounce-gentle" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-ridwan-green/15 rounded-full animate-bounce-gentle" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-digital-gold/15 rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-ridwan-green/20 rounded-full animate-bounce-gentle" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Hero Section */}
          <HeroSection logoUrl={logoUrl} setLogoUrl={setLogoUrl} />

          {/* Mission Section */}
          <MissionSection />

          {/* Waitlist Section */}
          <WaitlistSection />

          {/* Enhanced Footer with Better Design */}
          <div className="mt-40 pt-20 border-t border-ridwan-green/6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {/* Quranic Verse Card */}
            <div className="bg-pure-white/90 backdrop-blur-3xl rounded-4xl p-16 lg:p-20 max-w-5xl mx-auto shadow-2xl text-center relative overflow-hidden border border-ridwan-green/8 mb-16">
              {/* Enhanced decorative elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-minted-glow/20 to-transparent rounded-full"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-tl from-digital-gold/15 to-transparent rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-ridwan-green/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-digital-gold/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-8 text-ridwan-green/80">
                  <Star className="w-5 h-5" />
                  <span className="font-inter text-sm font-semibold tracking-wide uppercase">Divine Guidance</span>
                  <Star className="w-5 h-5" />
                </div>
                
                <p className="font-lora text-2xl lg:text-3xl xl:text-4xl text-midnight-slate/90 italic mb-8 leading-relaxed font-medium">
                  "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
                </p>
                <p className="font-inter text-xl lg:text-2xl text-ridwan-green font-bold">
                  — Qur'an 65:3
                </p>
              </div>
            </div>

            {/* Enhanced Footer Links and Info */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
                {/* Company Info */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-ridwan-green/10 to-ridwan-green/5 border border-ridwan-green/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-8 h-8 text-ridwan-green" />
                  </div>
                  <h4 className="font-inter font-bold text-xl text-midnight-slate mb-4">Our Mission</h4>
                  <p className="text-midnight-slate/70 leading-relaxed">
                    Bridging faith and technology to empower our global Muslim community with innovative solutions.
                  </p>
                </div>

                {/* Values */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-digital-gold/10 to-digital-gold/5 border border-digital-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-8 h-8 text-digital-gold" />
                  </div>
                  <h4 className="font-inter font-bold text-xl text-midnight-slate mb-4">Our Values</h4>
                  <p className="text-midnight-slate/70 leading-relaxed">
                    Excellence (Ihsan), Trust (Amanah), and Knowledge (Ilm) guide everything we create and deliver.
                  </p>
                </div>

                {/* Community */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-ridwan-green/10 to-digital-gold/5 border border-ridwan-green/15 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-8 h-8 text-ridwan-green" />
                  </div>
                  <h4 className="font-inter font-bold text-xl text-midnight-slate mb-4">Global Impact</h4>
                  <p className="text-midnight-slate/70 leading-relaxed">
                    Serving Muslims worldwide with technology that respects our values and enhances our daily lives.
                  </p>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-12 border-t border-ridwan-green/6 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-ridwan-green to-digital-gold/80 rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-pure-white rounded-md"></div>
                  </div>
                  <span className="font-inter font-bold text-2xl bg-gradient-to-r from-ridwan-green to-digital-gold bg-clip-text text-transparent">
                    Ridwanullah Group
                  </span>
                </div>
                
                <p className="text-midnight-slate/60 font-inter mb-4">
                  © 2024 Ridwanullah Group. Built with love and guided by Islamic principles.
                </p>
                
                <p className="text-midnight-slate/50 font-inter text-sm">
                  May Allah bless this endeavor and make it beneficial for the Ummah. Ameen.
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
