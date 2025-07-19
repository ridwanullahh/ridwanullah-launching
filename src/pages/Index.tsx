
import { useState } from 'react';
import { CheckCircle, Mail, Users, BookOpen, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-midnight-slate via-slate-900 to-ridwan-green/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ridwan-green/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-digital-gold/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-ridwan-green/20 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,179,77,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,179,77,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Brand Logo/Name */}
          <div className="mb-8 animate-fade-in-down">
            <h1 className="font-inter font-bold text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pure-white via-minted-glow to-ridwan-green bg-clip-text text-transparent mb-4">
              Ridwanullah
            </h1>
            <div className="font-lora text-lg md:text-xl text-gray-300 mb-2">
              رِضْوَانُ الله
            </div>
            <div className="font-inter font-medium text-sm md:text-base text-ridwan-green tracking-widest uppercase">
              Group
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="font-lora text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
              Empowering our community with innovative technology and transformative education, 
              <span className="text-ridwan-green"> seamlessly integrating faith and modern life</span> 
              to seek the pleasure of Allah (SWT).
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-ridwan-green/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-ridwan-green" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white mb-2">Ilm</h3>
              <p className="font-lora text-gray-300 text-sm">Pursuit and dissemination of both revealed and acquired knowledge</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-digital-gold/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-digital-gold" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white mb-2">Innovation</h3>
              <p className="font-lora text-gray-300 text-sm">Creative problem-solving with modern tools and technology</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white mb-2">Community</h3>
              <p className="font-lora text-gray-300 text-sm">Building unity and service to empower the Ummah</p>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-4">
              Something Amazing is Coming
            </h2>
            <p className="font-lora text-lg text-gray-300 max-w-2xl mx-auto">
              We're crafting an extraordinary experience that bridges the timeless wisdom of Islam 
              with cutting-edge technology. Be the first to know when we launch, In'sha'Allah.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-ridwan-green focus:border-transparent transition-all duration-300"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-ridwan-green to-ridwan-green/80 hover:from-ridwan-green/90 hover:to-ridwan-green text-white font-inter font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    'Notify Me When We Launch'
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-ridwan-green/20 border border-ridwan-green/30 rounded-2xl p-6 text-center">
                <CheckCircle className="w-12 h-12 text-ridwan-green mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-lg text-white mb-2">
                  Barakallahu feeki!
                </h3>
                <p className="font-lora text-gray-300">
                  You'll be among the first to experience our platform, In'sha'Allah.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <p className="font-lora text-gray-400 text-sm">
              "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
            </p>
            <p className="font-inter text-xs text-gray-500 mt-2">
              Qur'an 65:3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
