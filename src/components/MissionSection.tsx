
import { useState } from 'react';
import { BookOpen, Zap, Users, ArrowRight, Heart, Globe } from 'lucide-react';

const MissionSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

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
    <div className="mb-24 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
      {/* Main Mission Statement */}
      <div className="relative mb-20 group">
        <div className="absolute inset-0 bg-gradient-to-r from-minted-glow/30 via-pure-white/90 to-minted-glow/30 rounded-4xl blur-xl transform group-hover:scale-105 transition-all duration-700"></div>
        
        <div className="relative bg-pure-white/95 backdrop-blur-2xl border border-ridwan-green/10 rounded-4xl p-12 lg:p-16 shadow-2xl shadow-ridwan-green/5 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-bl from-minted-glow/40 via-ridwan-green/5 to-transparent rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-digital-gold/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 text-ridwan-green/80">
              <Heart className="w-5 h-5" />
              <span className="font-inter text-sm font-semibold tracking-wide uppercase">Our Mission</span>
              <Heart className="w-5 h-5" />
            </div>
            
            <h2 className="font-inter font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-midnight-slate mb-8 leading-tight">
              Something <span className="bg-gradient-to-r from-ridwan-green to-digital-gold bg-clip-text text-transparent">Amazing</span> is Coming
            </h2>
            
            <p className="font-lora text-xl md:text-2xl lg:text-3xl text-midnight-slate/85 leading-relaxed mb-8">
              Empowering our community with innovative technology and transformative education, 
              <span className="text-ridwan-green font-semibold"> seamlessly integrating faith and modern life</span> 
              to seek the pleasure of Allah{' '}
              <span className="text-ridwan-green font-arabic text-2xl">سُبْحَانَهُ وَتَعَالَىٰ</span>.
            </p>
            
            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-base md:text-lg text-midnight-slate/70">
              {[
                { text: 'Built with Excellence (Ihsan)', delay: '0s' },
                { text: 'Trusted & Secure (Amanah)', delay: '0.5s' },
                { text: 'Knowledge-Driven (Ilm)', delay: '1s' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group animate-fade-in-up" style={{animationDelay: item.delay}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-ridwan-green to-digital-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-inter font-medium group-hover:text-ridwan-green transition-colors duration-300">{item.text}</span>
                </div>
              ))}
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
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-${feature.bgGlow} rounded-3xl blur-xl transform transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}></div>
              
              <div className={`relative bg-pure-white/95 backdrop-blur-xl border rounded-3xl p-8 lg:p-10 shadow-xl transform transition-all duration-500 overflow-hidden ${
                isActive ? 'border-ridwan-green/20 -translate-y-4 shadow-2xl' : 'border-ridwan-green/8 hover:-translate-y-2'
              }`}>
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-minted-glow/20 via-transparent to-digital-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-8 mx-auto transform transition-all duration-500 relative z-10 ${
                  isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                }`}>
                  <Icon className="w-10 h-10 text-pure-white" />
                  
                  {/* Icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="font-inter font-bold text-2xl lg:text-3xl text-midnight-slate mb-2">{feature.title}</h3>
                  <p className="font-inter text-ridwan-green/80 font-semibold mb-4 text-sm uppercase tracking-wide">{feature.subtitle}</p>
                  <p className="font-lora text-midnight-slate/80 leading-relaxed text-base lg:text-lg">{feature.description}</p>
                  
                  {/* Hover indicator */}
                  <div className={`flex items-center justify-center gap-2 mt-6 text-ridwan-green font-inter font-semibold transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
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
