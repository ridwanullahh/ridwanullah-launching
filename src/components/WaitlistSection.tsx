
import { useState, useEffect } from 'react';
import { CheckCircle, Mail, Users, ArrowRight, Sparkles, Bell, Gift } from 'lucide-react';
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
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <div className="relative bg-gradient-to-br from-minted-glow via-minted-glow/60 to-ridwan-green/10 rounded-4xl p-12 lg:p-16 text-center shadow-2xl shadow-ridwan-green/10 overflow-hidden">
          {/* Success animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/5 via-transparent to-ridwan-green/5 animate-pulse"></div>
          
          {/* Floating success elements */}
          <div className="absolute top-8 right-8 w-6 h-6 bg-ridwan-green/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 bg-digital-gold/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          <div className="relative z-10">
            {/* Success icon */}
            <div className="w-24 h-24 bg-ridwan-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-ridwan-green/30 animate-bounce-gentle">
              <CheckCircle className="w-12 h-12 text-pure-white" />
            </div>
            
            {/* Success message */}
            <h3 className="font-inter font-bold text-3xl lg:text-4xl text-midnight-slate mb-4">
              بارك الله فيك!
            </h3>
            <p className="font-lora text-xl lg:text-2xl text-midnight-slate/85 mb-8">
              You'll be among the first to experience our platform, In'sha'Allah.
            </p>
            
            {/* Benefits preview */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Bell, text: 'First Access', desc: 'Be the first to explore' },
                { icon: Gift, text: 'Exclusive Content', desc: 'Special launch materials' },
                { icon: Users, text: 'VIP Community', desc: 'Connect with early adopters' },
              ].map((benefit, index) => (
                <div key={index} className="bg-pure-white/80 rounded-2xl p-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-ridwan-green mx-auto mb-3" />
                  <h4 className="font-inter font-semibold text-midnight-slate mb-1">{benefit.text}</h4>
                  <p className="text-sm text-midnight-slate/70">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      <div 
        className="relative bg-pure-white/95 backdrop-blur-2xl border border-ridwan-green/10 rounded-4xl shadow-2xl shadow-ridwan-green/5 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic background effects */}
        <div className={`absolute inset-0 bg-gradient-to-br from-minted-glow/30 via-transparent to-digital-gold/10 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl from-ridwan-green/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-digital-gold/15 to-transparent rounded-full blur-xl"></div>

        <div className="relative z-10 p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 text-ridwan-green/80">
              <Sparkles className="w-5 h-5" />
              <span className="font-inter text-sm font-semibold tracking-wide uppercase">Early Access</span>
              <Sparkles className="w-5 h-5" />
            </div>
            
            <h3 className="font-inter font-bold text-3xl lg:text-4xl xl:text-5xl text-midnight-slate mb-4">
              Be the First to Know
            </h3>
            <p className="font-lora text-xl lg:text-2xl text-midnight-slate/80 max-w-2xl mx-auto">
              Join our exclusive early access community and be notified when we launch, In'sha'Allah.
            </p>
          </div>

          {/* Social proof */}
          {waitlistCount > 0 && (
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-minted-glow/70 to-ridwan-green/10 text-ridwan-green font-inter font-semibold px-6 py-3 rounded-full border border-ridwan-green/20 shadow-lg">
                <Users className="w-5 h-5" />
                <span>{waitlistCount.toLocaleString()} visionaries have joined</span>
                <div className="w-2 h-2 bg-ridwan-green rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative group mb-8">
              {/* Input field */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-8 py-6 lg:px-10 lg:py-7 bg-gradient-to-r from-minted-glow/40 to-minted-glow/20 border-2 border-ridwan-green/15 rounded-2xl text-midnight-slate placeholder-midnight-slate/50 font-inter text-lg lg:text-xl focus:outline-none focus:ring-4 focus:ring-ridwan-green/20 focus:border-ridwan-green transition-all duration-300 group-hover:border-ridwan-green/25 shadow-inner"
                  required
                />
                <Mail className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-ridwan-green/60 group-hover:text-ridwan-green transition-colors duration-300" />
              </div>
              
              {/* Input glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ridwan-green/10 to-digital-gold/10 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            
            {message && (
              <div className="text-center mb-6">
                <p className="text-red-500 font-inter bg-red-50 px-4 py-2 rounded-lg inline-block">{message}</p>
              </div>
            )}
            
            {/* Enhanced submit button */}
            <div className="text-center">
              <AnimatedButton
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                size="lg"
                className="w-full max-w-md font-bold text-xl py-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-ridwan-green/25"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining the revolution...</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-6 h-6" />
                    <span>Notify Me When We Launch</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </AnimatedButton>
            </div>
          </form>
          
          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-ridwan-green/10">
            {[
              { icon: Sparkles, title: 'Exclusive Access', desc: 'Be among the first to explore our platform' },
              { icon: Gift, title: 'Launch Bonuses', desc: 'Special perks for early supporters' },
              { icon: Users, title: 'VIP Community', desc: 'Connect with like-minded innovators' },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-ridwan-green/10 to-digital-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-ridwan-green" />
                </div>
                <h4 className="font-inter font-semibold text-midnight-slate mb-2">{benefit.title}</h4>
                <p className="text-sm text-midnight-slate/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Privacy note */}
          <p className="text-center text-xs text-midnight-slate/40 mt-8 font-inter leading-relaxed max-w-lg mx-auto">
            We respect your privacy. No spam, only meaningful updates about our launch and exclusive content.
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
