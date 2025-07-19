
import { useState } from 'react';
import { BookOpen, Zap, Users, ArrowRight, Heart, Sparkles } from 'lucide-react';

const MissionSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      id: 'ilm',
      icon: BookOpen,
      title: 'Ilm',
      subtitle: 'Knowledge & Wisdom',
      description: 'Pursuit and dissemination of both revealed and acquired knowledge, bridging traditional Islamic scholarship with contemporary learning.',
      color: 'from-ridwan-green to-ridwan-green/80',
      bgGlow: 'ridwan-green/10',
    },
    {
      id: 'innovation',
      icon: Zap,
      title: 'Innovation',
      subtitle: 'Technology & Progress',
      description: 'Creative problem-solving with cutting-edge tools and technology, building solutions that serve our community and beyond.',
      color: 'from-digital-gold to-digital-gold/80',
      bgGlow: 'digital-gold/10',
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community',
      subtitle: 'Unity & Service',
      description: 'Building bridges within the Ummah, fostering collaboration, and empowering individuals to create positive change.',
      color: 'from-ridwan-green/80 to-digital-gold/70',
      bgGlow: 'ridwan-green/8',
    },
  ];

  return (
    <div className="mb-32 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
      {/* Enhanced Main Mission Statement */}
      <div className="relative mb-24 group">
        <div className="absolute inset-0 bg-gradient-to-r from-minted-glow/20 via-pure-white/95 to-minted-glow/20 rounded-4xl blur-2xl transform group-hover:scale-[1.02] transition-all duration-1000"></div>
        
        <div className="relative bg-pure-white/98 backdrop-blur-3xl border border-ridwan-green/8 rounded-4xl p-12 lg:p-20 shadow-2xl shadow-ridwan-green/3 overflow-hidden">
          {/* Enhanced decorative elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-bl from-minted-glow/30 via-ridwan-green/8 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-digital-gold/15 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-8 text-ridwan-green/90 group-hover:scale-105 transition-transform duration-500">
              <Heart className="w-6 h-6" />
              <span className="font-inter text-base font-bold tracking-wider uppercase">Our Mission</span>
              <Heart className="w-6 h-6" />
            </div>
            
            <h2 className="font-inter font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-midnight-slate mb-10 leading-tight">
              Something <span className="bg-gradient-to-r from-ridwan-green to-digital-gold bg-clip-text text-transparent">Extraordinary</span> is Coming
            </h2>
            
            {/* Enhanced mission description with better typography */}
            <div className="space-y-6 mb-12">
              <p className="font-lora text-2xl md:text-3xl lg:text-4xl text-midnight-slate/90 leading-relaxed font-medium">
                Empowering our community with{' '}
                <span className="text-ridwan-green font-semibold relative">
                  innovative technology
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-ridwan-green/30 to-transparent rounded-full"></div>
                </span>
                {' '}and{' '}
                <span className="text-digital-gold font-semibold relative">
                  transformative education
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-digital-gold/30 to-transparent rounded-full"></div>
                </span>
              </p>
              
              <p className="font-lora text-xl md:text-2xl lg:text-3xl text-midnight-slate/85 leading-relaxed">
                Seamlessly integrating faith and modern life to seek the pleasure of Allah{' '}
                <span className="text-ridwan-green font-arabic text-2xl lg:text-3xl font-semibold">سُبْحَانَهُ وَتَعَالَىٰ</span>
              </p>
            </div>
            
            {/* Enhanced trust indicators with better design */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  text: 'Built with Excellence', 
                  arabic: 'Ihsan', 
                  delay: '0s',
                  icon: Sparkles,
                  color: 'ridwan-green'
                },
                { 
                  text: 'Trusted & Secure', 
                  arabic: 'Amanah', 
                  delay: '0.3s',
                  icon: Heart,
                  color: 'digital-gold'
                },
                { 
                  text: 'Knowledge-Driven', 
                  arabic: 'Ilm', 
                  delay: '0.6s',
                  icon: BookOpen,
                  color: 'ridwan-green'
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group animate-fade-in-up bg-gradient-to-br from-minted-glow/40 to-pure-white/80 backdrop-blur-xl rounded-3xl p-8 border border-ridwan-green/10 hover:border-ridwan-green/20 transition-all duration-500 hover:-translate-y-2" style={{animationDelay: item.delay}}>
                    <div className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-pure-white" />
                    </div>
                    <h3 className="font-inter font-bold text-xl text-midnight-slate mb-2">{item.text}</h3>
                    <p className={`font-arabic text-lg text-${item.color} font-semibold`}>({item.arabic})</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeCard === feature.id;
          
          return (
            <div
              key={feature.id}
              className="group relative cursor-pointer animate-fade-in-up"
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={scrollToWaitlist}
            >
              {/* Enhanced glow effect */}
              <div className={`absolute inset-0 bg-${feature.bgGlow} rounded-3xl blur-2xl transform transition-all duration-700 ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}></div>
              
              <div className={`relative bg-pure-white/98 backdrop-blur-xl border rounded-3xl p-10 lg:p-12 shadow-xl transform transition-all duration-700 overflow-hidden ${
                isActive ? 'border-ridwan-green/25 -translate-y-6 shadow-2xl scale-105' : 'border-ridwan-green/8 hover:-translate-y-3'
              }`}>
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-minted-glow/15 via-transparent to-digital-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Enhanced icon */}
                <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-8 mx-auto transform transition-all duration-700 relative z-10 shadow-2xl ${
                  isActive ? 'scale-115 rotate-6' : 'group-hover:scale-110'
                }`}>
                  <Icon className="w-12 h-12 text-pure-white" />
                  
                  {/* Enhanced icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>
                </div>
                
                {/* Enhanced content */}
                <div className="relative z-10 text-center">
                  <h3 className="font-inter font-black text-3xl lg:text-4xl text-midnight-slate mb-3">{feature.title}</h3>
                  <p className="font-inter text-ridwan-green/90 font-bold mb-6 text-sm uppercase tracking-wider">{feature.subtitle}</p>
                  <p className="font-lora text-midnight-slate/85 leading-relaxed text-lg lg:text-xl mb-6">{feature.description}</p>
                  
                  {/* Enhanced call-to-action */}
                  <div className={`flex items-center justify-center gap-3 text-ridwan-green font-inter font-bold text-lg transition-all duration-500 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <span>Join the Movement</span>
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionSection;
