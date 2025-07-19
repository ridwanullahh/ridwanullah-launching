
import { useState, useEffect } from 'react';
import { CheckCircle, Mail, Users, ArrowRight, Sparkles, Bell, Gift, BookOpen } from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';
import waitlistService from '../services/waitlistService';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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

  if (isSubmitted) {
    return (
      <div id="waitlist-section" className="max-w-4xl mx-auto animate-fade-in-up">
        <div className="relative bg-gradient-to-br from-minted-glow/60 via-minted-glow/40 to-ridwan-green/5 rounded-4xl p-16 lg:p-20 text-center shadow-2xl shadow-ridwan-green/10 overflow-hidden border border-ridwan-green/10">
          {/* Enhanced success animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/5 via-transparent to-ridwan-green/5 animate-pulse"></div>
          
          {/* Enhanced floating success elements */}
          <div className="absolute top-12 right-12 w-8 h-8 bg-ridwan-green/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-12 left-12 w-6 h-6 bg-digital-gold/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-ridwan-green/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10">
            {/* Enhanced success icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-ridwan-green to-ridwan-green/90 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-ridwan-green/30 animate-bounce-gentle border-4 border-ridwan-green/20">
              <CheckCircle className="w-16 h-16 text-pure-white" />
            </div>
            
            {/* Enhanced success message */}
            <h3 className="font-inter font-black text-4xl lg:text-5xl text-midnight-slate mb-6">
              بارك الله فيك!
            </h3>
            <p className="font-lora text-2xl lg:text-3xl text-midnight-slate/90 mb-4 font-medium">
              You're now part of something extraordinary!
            </p>
            <p className="font-lora text-xl lg:text-2xl text-midnight-slate/75 mb-12">
              You'll be among the first to experience our platform, In'sha'Allah.
            </p>
            
            {/* Enhanced benefits preview */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Bell, title: 'First Access', desc: 'Be the first to explore our platform', color: 'ridwan-green' },
                { icon: Gift, title: 'Exclusive Content', desc: 'Special launch materials and resources', color: 'digital-gold' },
                { icon: BookOpen, title: 'Priority Support', desc: 'Get dedicated assistance when we launch', color: 'ridwan-green' },
              ].map((benefit, index) => (
                <div key={index} className="bg-pure-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-ridwan-green/10 hover:border-ridwan-green/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color} to-${benefit.color}/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-pure-white" />
                  </div>
                  <h4 className="font-inter font-bold text-xl text-midnight-slate mb-2">{benefit.title}</h4>
                  <p className="text-base text-midnight-slate/70 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist-section" className="max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      <div 
        className="relative bg-pure-white/98 backdrop-blur-3xl border border-ridwan-green/8 rounded-4xl shadow-2xl shadow-ridwan-green/5 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced dynamic background effects */}
        <div className={`absolute inset-0 bg-gradient-to-br from-minted-glow/20 via-transparent to-digital-gold/8 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-60'}`}></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-bl from-ridwan-green/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-digital-gold/12 to-transparent rounded-full blur-2xl"></div>

        <div className="relative z-10 p-16 lg:p-20">
          {/* Enhanced header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 text-ridwan-green/90">
              <Sparkles className="w-6 h-6" />
              <span className="font-inter text-lg font-bold tracking-wider uppercase">Early Access</span>
              <Sparkles className="w-6 h-6" />
            </div>
            
            <h3 className="font-inter font-black text-4xl lg:text-5xl xl:text-6xl text-midnight-slate mb-6 leading-tight">
              Be the First to Know
            </h3>
            <p className="font-lora text-2xl lg:text-3xl text-midnight-slate/85 max-w-4xl mx-auto leading-relaxed font-medium">
              Join our exclusive early access community and be notified when we launch, In'sha'Allah.
            </p>
          </div>

          {/* Enhanced social proof */}
          {waitlistCount > 0 && (
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-minted-glow/80 to-ridwan-green/8 text-ridwan-green font-inter font-bold px-8 py-4 rounded-full border border-ridwan-green/20 shadow-xl backdrop-blur-xl">
                <Users className="w-6 h-6" />
                <span className="text-lg">{waitlistCount.toLocaleString()} visionaries have joined</span>
                <div className="w-3 h-3 bg-ridwan-green rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Enhanced form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative group mb-10">
              {/* Enhanced input field */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-10 py-8 lg:px-12 lg:py-9 bg-gradient-to-r from-minted-glow/50 to-minted-glow/30 border-2 border-ridwan-green/15 rounded-3xl text-midnight-slate placeholder-midnight-slate/50 font-inter text-xl lg:text-2xl focus:outline-none focus:ring-4 focus:ring-ridwan-green/20 focus:border-ridwan-green transition-all duration-500 group-hover:border-ridwan-green/30 shadow-inner backdrop-blur-xl"
                  required
                />
                <Mail className="absolute right-8 top-1/2 transform -translate-y-1/2 w-7 h-7 text-ridwan-green/60 group-hover:text-ridwan-green transition-colors duration-300" />
              </div>
              
              {/* Enhanced input glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/8 to-digital-gold/8 rounded-3xl blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            
            {message && (
              <div className="text-center mb-8">
                <p className="text-red-500 font-inter font-medium bg-red-50 px-6 py-3 rounded-2xl inline-block border border-red-100">{message}</p>
              </div>
            )}
            
            {/* Enhanced submit button */}
            <div className="text-center">
              <AnimatedButton
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                size="lg"
                className="w-full max-w-lg font-black text-2xl py-8 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-ridwan-green/25 rounded-3xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-7 h-7 border-3 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining the revolution...</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-7 h-7" />
                    <span>Notify Me When We Launch</span>
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </AnimatedButton>
            </div>
          </form>
          
          {/* Enhanced benefits grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-ridwan-green/10">
            {[
              { icon: Sparkles, title: 'Exclusive Access', desc: 'Be among the first to explore our platform', color: 'ridwan-green' },
              { icon: Gift, title: 'Launch Bonuses', desc: 'Special perks and content for early supporters', color: 'digital-gold' },
              { icon: BookOpen, title: 'Priority Support', desc: 'Get dedicated assistance and guidance', color: 'ridwan-green' },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}/10 to-${benefit.color}/5 border border-${benefit.color}/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg backdrop-blur-xl`}>
                  <benefit.icon className={`w-10 h-10 text-${benefit.color}`} />
                </div>
                <h4 className="font-inter font-bold text-lg text-midnight-slate mb-3">{benefit.title}</h4>
                <p className="text-base text-midnight-slate/70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Enhanced privacy note */}
          <p className="text-center text-sm text-midnight-slate/50 mt-12 font-inter leading-relaxed max-w-2xl mx-auto">
            We respect your privacy and follow Islamic principles of trust (Amanah). No spam, only meaningful updates about our launch and exclusive content.
            {!waitlistService.isConfigured() && (
              <>
                <br />
                <span className="text-orange-500 font-medium">Note: Waitlist functionality requires configuration.</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;
