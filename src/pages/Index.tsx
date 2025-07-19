
import { useState, useEffect } from 'react';
import { CheckCircle, Mail, Users, BookOpen, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedButton } from '../components/ui/animated-button';
import waitlistService from '../services/waitlistService';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [logoUrl, setLogoUrl] = useState('');

  // Load logo URL from environment or use uploaded image
  useEffect(() => {
    const envLogoUrl = import.meta.env.VITE_LOGO_URL;
    if (envLogoUrl) {
      setLogoUrl(envLogoUrl);
    }
    
    // Load waitlist count
    waitlistService.getWaitlistCount().then(count => {
      setWaitlistCount(count);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setMessage('');
    
    try {
      const result = await waitlistService.subscribeToWaitlist(email);
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
        setWaitlistCount(prev => prev + 1);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Enhanced Logo and Brand Section */}
          <div className="mb-16 animate-fade-in-down">
            {/* Logo */}
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-ridwan-green via-ridwan-green/90 to-digital-gold/20 rounded-3xl mb-8 shadow-2xl shadow-ridwan-green/25 animate-bounce-gentle relative overflow-hidden group">
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt="Ridwanullah Group Logo" 
                  className="w-20 h-20 object-contain rounded-2xl"
                  onError={() => setLogoUrl('')}
                />
              ) : (
                <div className="w-16 h-16 bg-pure-white rounded-2xl flex items-center justify-center shadow-inner">
                  <div className="w-10 h-10 bg-gradient-to-br from-ridwan-green to-digital-gold rounded-xl"></div>
                </div>
              )}
              {/* Subtle glow animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-ridwan-green/20 to-digital-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Enhanced Typography Hierarchy */}
            <h1 className="font-inter font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-ridwan-green via-ridwan-green/95 to-digital-gold bg-clip-text text-transparent mb-6 leading-[0.9] tracking-tight">
              Ridwanullah
            </h1>
            
            {/* Arabic Calligraphy - Enhanced */}
            <div className="font-lora text-xl md:text-2xl lg:text-3xl text-ridwan-green/80 mb-4 font-medium tracking-wide">
              رِضْوَانُ الله
            </div>
            
            {/* Enhanced GROUP Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-digital-gold via-digital-gold/95 to-digital-gold/80 text-pure-white font-inter font-black text-base md:text-lg lg:text-xl px-8 py-3 rounded-full shadow-xl shadow-digital-gold/30 mb-8 relative overflow-hidden group">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="relative z-10">GROUP</span>
              <div className="absolute inset-0 bg-gradient-to-r from-digital-gold/80 to-digital-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Mission Statement */}
          <div className="mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-pure-white/90 backdrop-blur-xl border border-ridwan-green/8 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-ridwan-green/5 max-w-5xl mx-auto relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-minted-glow/40 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <h2 className="font-inter font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-midnight-slate mb-6 leading-tight">
                Something Amazing is Coming
              </h2>
              <p className="font-lora text-lg md:text-xl lg:text-2xl text-midnight-slate/85 leading-relaxed mb-8 max-w-4xl mx-auto">
                Empowering our community with innovative technology and transformative education, 
                <span className="text-ridwan-green font-semibold"> seamlessly integrating faith and modern life</span> 
                to seek the pleasure of Allah <span className="text-ridwan-green font-medium">سُبْحَانَهُ وَتَعَالَىٰ</span>.
              </p>
              
              {/* Enhanced trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-sm md:text-base text-midnight-slate/60">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ridwan-green rounded-full animate-pulse"></div>
                  <span className="font-inter font-medium">Built with Excellence (Ihsan)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-digital-gold rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="font-inter font-medium">Trusted & Secure (Amanah)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ridwan-green rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="font-inter font-medium">Knowledge-Driven (Ilm)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="group bg-pure-white/95 backdrop-blur-xl border border-ridwan-green/8 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-ridwan-green/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-minted-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="w-18 h-18 bg-gradient-to-br from-ridwan-green to-ridwan-green/80 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                <BookOpen className="w-9 h-9 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl lg:text-2xl text-midnight-slate mb-4 relative z-10">Ilm</h3>
              <p className="font-lora text-midnight-slate/75 leading-relaxed text-base lg:text-lg relative z-10">Pursuit and dissemination of both revealed and acquired knowledge</p>
            </div>
            
            <div className="group bg-pure-white/95 backdrop-blur-xl border border-digital-gold/15 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-digital-gold/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="w-18 h-18 bg-gradient-to-br from-digital-gold to-digital-gold/80 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Zap className="w-9 h-9 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl lg:text-2xl text-midnight-slate mb-4 relative z-10">Innovation</h3>
              <p className="font-lora text-midnight-slate/75 leading-relaxed text-base lg:text-lg relative z-10">Creative problem-solving with modern tools and technology</p>
            </div>
            
            <div className="group bg-pure-white/95 backdrop-blur-xl border border-ridwan-green/8 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-ridwan-green/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-minted-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="w-18 h-18 bg-gradient-to-br from-ridwan-green/80 to-digital-gold/60 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Users className="w-9 h-9 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl lg:text-2xl text-midnight-slate mb-4 relative z-10">Community</h3>
              <p className="font-lora text-midnight-slate/75 leading-relaxed text-base lg:text-lg relative z-10">Building unity and service to empower the Ummah</p>
            </div>
          </div>

          {/* Enhanced Email Signup */}
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {!isSubmitted ? (
              <div className="bg-pure-white/95 backdrop-blur-xl border border-ridwan-green/8 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-ridwan-green/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-minted-glow/30 to-transparent rounded-full -translate-x-12 -translate-y-12"></div>
                
                <h3 className="font-inter font-bold text-2xl lg:text-3xl text-midnight-slate mb-3">
                  Be the First to Know
                </h3>
                <p className="font-lora text-midnight-slate/75 mb-8 text-lg">
                  Join our exclusive early access list and be notified when we launch, In'sha'Allah.
                </p>
                
                {waitlistCount > 0 && (
                  <div className="inline-flex items-center gap-2 bg-minted-glow/50 text-ridwan-green font-inter font-semibold text-sm px-4 py-2 rounded-full mb-6">
                    <Users className="w-4 h-4" />
                    <span>{waitlistCount} others have joined</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-minted-glow/30 border-2 border-ridwan-green/15 rounded-2xl text-midnight-slate placeholder-midnight-slate/50 font-inter text-lg focus:outline-none focus:ring-4 focus:ring-ridwan-green/20 focus:border-ridwan-green transition-all duration-300 group-hover:border-ridwan-green/25"
                      required
                    />
                    <Mail className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ridwan-green/60 group-hover:text-ridwan-green transition-colors duration-300" />
                  </div>
                  
                  {message && (
                    <p className="text-red-500 text-sm font-inter text-center">{message}</p>
                  )}
                  
                  <AnimatedButton
                    type="submit"
                    disabled={isLoading}
                    isLoading={isLoading}
                    size="lg"
                    className="w-full"
                  >
                    {isLoading ? (
                      "Joining..."
                    ) : (
                      <>
                        <span>Notify Me When We Launch</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </AnimatedButton>
                </form>
                
                <p className="text-xs text-midnight-slate/40 mt-6 font-inter leading-relaxed">
                  We respect your privacy. No spam, only meaningful updates. 
                  {!waitlistService.isConfigured() && (
                    <br /><span className="text-orange-500">Note: Waitlist functionality requires configuration.</span>
                  )}
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-minted-glow to-minted-glow/40 border-2 border-ridwan-green/20 rounded-3xl p-8 lg:p-12 text-center shadow-2xl shadow-ridwan-green/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ridwan-green/5 to-transparent rounded-3xl"></div>
                <div className="w-20 h-20 bg-ridwan-green rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-pure-white" />
                </div>
                <h3 className="font-inter font-bold text-2xl lg:text-3xl text-midnight-slate mb-3 relative z-10">
                  بارك الله فيك!
                </h3>
                <p className="font-lora text-midnight-slate/85 text-lg lg:text-xl relative z-10">
                  You'll be among the first to experience our platform, In'sha'Allah.
                </p>
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          <div className="mt-24 pt-16 border-t border-ridwan-green/8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-pure-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto shadow-lg">
              <p className="font-lora text-lg lg:text-xl text-midnight-slate/85 italic mb-4 leading-relaxed">
                "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
              </p>
              <p className="font-inter text-base text-ridwan-green font-semibold">
                — Qur'an 65:3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
