
import { useState, useEffect } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

interface HeroSectionProps {
  logoUrl: string;
  setLogoUrl: (url: string) => void;
}

const HeroSection = ({ logoUrl, setLogoUrl }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const envLogoUrl = import.meta.env.VITE_LOGO_URL;
    if (envLogoUrl) {
      setLogoUrl(envLogoUrl);
    }
  }, [setLogoUrl]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="relative mb-20 text-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive background glow */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered ? 
            `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(5,179,77,0.15), transparent 40%)` : 
            'transparent'
        }}
      />

      {/* Logo with enhanced interactivity */}
      <div className="relative inline-block mb-12 group">
        <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/20 via-digital-gold/20 to-ridwan-green/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150"></div>
        
        <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-ridwan-green via-ridwan-green/95 to-digital-gold/30 rounded-3xl shadow-2xl shadow-ridwan-green/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="Ridwanullah Group Logo" 
              className="w-24 h-24 object-contain rounded-2xl absolute inset-0 m-auto"
              onError={() => setLogoUrl('')}
            />
          ) : (
            <div className="w-20 h-20 bg-pure-white rounded-2xl absolute inset-0 m-auto flex items-center justify-center shadow-inner">
              <div className="w-12 h-12 bg-gradient-to-br from-ridwan-green to-digital-gold rounded-xl transform group-hover:rotate-180 transition-transform duration-700"></div>
            </div>
          )}
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-digital-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-ridwan-green rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-300"></div>
        </div>
      </div>

      {/* Enhanced Typography with Stagger Animation */}
      <div className="space-y-6">
        <h1 className="font-inter font-black text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.85] tracking-tight">
          <span className="inline-block bg-gradient-to-r from-ridwan-green via-ridwan-green/95 to-digital-gold bg-clip-text text-transparent animate-fade-in-up relative">
            Ridwanullah
            <div className="absolute -inset-4 bg-gradient-to-r from-ridwan-green/10 via-transparent to-digital-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </span>
        </h1>
        
        {/* Enhanced Arabic Calligraphy */}
        <div className="font-lora text-2xl md:text-3xl lg:text-4xl text-ridwan-green/90 font-semibold tracking-wider animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <span className="relative inline-block">
            رِضْوَانُ الله
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-ridwan-green/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </span>
        </div>
        
        {/* Enhanced GROUP Badge */}
        <div className="inline-flex items-center gap-3 relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-digital-gold/20 via-digital-gold/30 to-digital-gold/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative bg-gradient-to-r from-digital-gold via-digital-gold/95 to-digital-gold/90 text-pure-white font-inter font-black text-lg md:text-xl px-8 py-4 rounded-full shadow-2xl shadow-digital-gold/40 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-5 h-5 inline mr-2 animate-pulse" />
            <span>GROUP</span>
            <Star className="w-4 h-4 inline ml-2 animate-spin-slow" />
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
