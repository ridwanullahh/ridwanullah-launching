
import { useState, useEffect } from 'react';
import { Sparkles, Star, Zap, ChevronDown } from 'lucide-react';

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

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative mb-24 text-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive background glow */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{
          background: isHovered ? 
            `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(5,179,77,0.08), transparent 50%)` : 
            'transparent'
        }}
      />

      {/* Enhanced Logo Section */}
      <div className="relative inline-block mb-16 group">         
        <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/10 via-digital-gold/15 to-ridwan-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-[2]"></div>
        
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 mx-auto bg-gradient-to-br from-ridwan-green via-ridwan-green/98 to-digital-gold/25 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-ridwan-green/20 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 overflow-hidden border border-ridwan-green/20">
          {/* Enhanced shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-300"></div>
          
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="Ridwanullah Group Logo" 
              className="w-20 h-20 lg:w-28 lg:h-28 object-contain rounded-2xl absolute inset-0 m-auto filter drop-shadow-sm"
              onError={() => setLogoUrl('')}
            />
          ) : (
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-pure-white/95 rounded-2xl absolute inset-0 m-auto flex items-center justify-center shadow-inner backdrop-blur-sm">
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-ridwan-green to-digital-gold rounded-xl transform group-hover:rotate-180 transition-transform duration-1000 shadow-lg"></div>
            </div>
          )}
          
          {/* Enhanced floating particles */}
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-digital-gold to-digital-gold/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-200 shadow-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-ridwan-green to-ridwan-green/90 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-500 shadow-md"></div>
        </div>
      </div>

      {/* Enhanced Typography with Better Spacing */}
      <div className="space-y-8 lg:space-y-12">
        {/* Main Title - More Refined */}
        <div className="relative">
          <h1 className="font-inter font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.88] tracking-tight">
            <span className="inline-block bg-gradient-to-r from-ridwan-green via-ridwan-green/96 to-digital-gold bg-clip-text text-transparent animate-fade-in-up relative group">
              Ridwanullah
              <div className="absolute -inset-6 bg-gradient-to-r from-ridwan-green/5 via-transparent to-digital-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full"></div>
            </span>
          </h1>
        </div>
        
        {/* Enhanced Arabic Calligraphy with Better Typography */}
        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="font-arabic text-3xl md:text-4xl lg:text-5xl text-ridwan-green/95 font-medium tracking-wider relative inline-block">
            <span className="relative">
              رِضْوَانُ الله
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ridwan-green/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
            </span>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ridwan-green/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
        
        {/* Enhanced GROUP Badge with Better Interaction */}
        <div className="inline-flex items-center gap-4 relative animate-fade-in-up group cursor-pointer" style={{animationDelay: '0.5s'}} onClick={scrollToWaitlist}>
          <div className="absolute inset-0 bg-gradient-to-r from-digital-gold/15 via-digital-gold/25 to-digital-gold/15 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-700"></div>
          
          <div className="relative bg-gradient-to-r from-digital-gold/95 via-digital-gold to-digital-gold/90 text-pure-white font-inter font-black text-xl md:text-2xl px-10 py-5 rounded-full shadow-2xl shadow-digital-gold/30 transform hover:scale-110 transition-all duration-500 border border-digital-gold/20 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 inline mr-3 animate-pulse" />
            <span className="tracking-wide">GROUP</span>
            <Star className="w-5 h-5 inline ml-3 animate-spin-slow" />
            
            {/* Enhanced ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/25 transform scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ChevronDown className="w-5 h-5 text-digital-gold animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
