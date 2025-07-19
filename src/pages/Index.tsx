
import { useState } from 'react';
import { CheckCircle, Mail, Users, BookOpen, Zap, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-minted-glow/30 to-minted-glow relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes inspired by the logo */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-ridwan-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-digital-gold/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-ridwan-green/3 to-transparent rounded-full animate-pulse-slow"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,179,77,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(5,179,77,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Modern Logo Section */}
          <div className="mb-12 animate-fade-in-down">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-ridwan-green to-ridwan-green/80 rounded-3xl mb-8 shadow-2xl shadow-ridwan-green/20 animate-bounce-gentle">
              <div className="w-12 h-12 bg-pure-white rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-ridwan-green to-digital-gold rounded-xl"></div>
              </div>
            </div>
            
            <h1 className="font-inter font-bold text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-ridwan-green via-ridwan-green/90 to-digital-gold bg-clip-text text-transparent mb-4 leading-tight">
              Ridwanullah
            </h1>
            <div className="font-lora text-2xl md:text-3xl text-ridwan-green/70 mb-3 font-medium">
              رِضْوَانُ الله
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-digital-gold to-digital-gold/80 text-pure-white font-inter font-bold text-lg md:text-xl px-6 py-2 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5" />
              GROUP
            </div>
          </div>

          {/* Mission Statement with modern card design */}
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-pure-white/80 backdrop-blur-xl border border-ridwan-green/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-ridwan-green/5 max-w-4xl mx-auto">
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-midnight-slate mb-6">
                Something Amazing is Coming
              </h2>
              <p className="font-lora text-xl md:text-2xl text-midnight-slate/80 leading-relaxed mb-8">
                Empowering our community with innovative technology and transformative education, 
                <span className="text-ridwan-green font-semibold"> seamlessly integrating faith and modern life</span> 
                to seek the pleasure of Allah (SWT).
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-midnight-slate/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ridwan-green rounded-full"></div>
                  <span>Built with Excellence (Ihsan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-digital-gold rounded-full"></div>
                  <span>Trusted & Secure (Amanah)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ridwan-green rounded-full"></div>
                  <span>Knowledge-Driven (Ilm)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="group bg-pure-white/90 backdrop-blur-xl border border-ridwan-green/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-ridwan-green/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-ridwan-green to-ridwan-green/80 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-midnight-slate mb-3">Ilm</h3>
              <p className="font-lora text-midnight-slate/70 leading-relaxed">Pursuit and dissemination of both revealed and acquired knowledge</p>
            </div>
            
            <div className="group bg-pure-white/90 backdrop-blur-xl border border-digital-gold/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-digital-gold/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-digital-gold to-digital-gold/80 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-midnight-slate mb-3">Innovation</h3>
              <p className="font-lora text-midnight-slate/70 leading-relaxed">Creative problem-solving with modern tools and technology</p>
            </div>
            
            <div className="group bg-pure-white/90 backdrop-blur-xl border border-ridwan-green/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-ridwan-green/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-ridwan-green/80 to-digital-gold/80 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-midnight-slate mb-3">Community</h3>
              <p className="font-lora text-midnight-slate/70 leading-relaxed">Building unity and service to empower the Ummah</p>
            </div>
          </div>

          {/* Modern Email Signup */}
          <div className="max-w-lg mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {!isSubmitted ? (
              <div className="bg-pure-white/90 backdrop-blur-xl border border-ridwan-green/10 rounded-3xl p-8 shadow-2xl shadow-ridwan-green/5">
                <h3 className="font-inter font-bold text-2xl text-midnight-slate mb-2">
                  Be the First to Know
                </h3>
                <p className="font-lora text-midnight-slate/70 mb-6">
                  Join our exclusive early access list and be notified when we launch, In'sha'Allah.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-minted-glow/30 border-2 border-ridwan-green/20 rounded-2xl text-midnight-slate placeholder-midnight-slate/50 font-inter focus:outline-none focus:ring-4 focus:ring-ridwan-green/20 focus:border-ridwan-green transition-all duration-300"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ridwan-green/60" />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-ridwan-green to-ridwan-green/90 hover:from-ridwan-green/90 hover:to-ridwan-green text-pure-white font-inter font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-ridwan-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-3 border-pure-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      <>
                        <span>Notify Me When We Launch</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-xs text-midnight-slate/40 mt-4 font-inter">
                  We respect your privacy. No spam, only meaningful updates.
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-minted-glow to-minted-glow/50 border-2 border-ridwan-green/30 rounded-3xl p-8 text-center shadow-2xl shadow-ridwan-green/10">
                <div className="w-16 h-16 bg-ridwan-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="font-inter font-bold text-2xl text-midnight-slate mb-2">
                  Barakallahu feeki!
                </h3>
                <p className="font-lora text-midnight-slate/80 text-lg">
                  You'll be among the first to experience our platform, In'sha'Allah.
                </p>
              </div>
            )}
          </div>

          {/* Modern Footer */}
          <div className="mt-20 pt-12 border-t border-ridwan-green/10 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-pure-white/60 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="font-lora text-lg text-midnight-slate/80 italic mb-3">
                "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
              </p>
              <p className="font-inter text-sm text-ridwan-green font-medium">
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
