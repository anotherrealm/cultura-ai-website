import React from 'react';
import { Globe } from 'lucide-react';

interface HomePageProps {
  scrollToSection: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-32 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(248, 246, 240, 0.3)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18f8e75e-60cb-41a4-9037-ba65c31ef160.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-[#f8f6f0]/40 to-[#e8e0d0]/60"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#d6b06f] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#73ffb4] rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#d6b06f]/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-[#73ffb4]/70 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
           
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-[#342603] mb-2">Embrace</span>
                <span className="hero-text block mb-2">African Heritage</span>
                <span className="text-[#342603] block">Through AI</span>
              </h1>
              <div className="w-20 h-1 sm:w-24 bg-gradient-to-r from-[#d6b06f] to-[#73ffb4] mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#342603]/80 max-w-2xl leading-relaxed">
              Discover the rich tapestry of African cultures through our innovative AI platform. 
              Explore traditional stories, learn languages, and connect with your heritage in ways never before possible.
            </p>

          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Background Circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d6b06f]/30 to-[#73ffb4]/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#f8f6f0]/90 to-white/80 rounded-full backdrop-blur-sm border border-[#d6b06f]/30"></div>
                {/* Central Content */}
                <div className="absolute inset-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d6b06f] to-[#73ffb4] rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#d6b06f]">Cultural AI</h3>
                    <p className="text-xs sm:text-sm text-[#342603]/80">Preserving Heritage</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#d6b06f] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#73ffb4] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-[#d6b06f] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                {/* Floating Elements - hidden on mobile */}
                <div className="hidden md:flex">
                  {/* Top Right Floating Element */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#73ffb4]/20 rounded-full flex items-center justify-center animate-float">
                    <div className="w-6 h-6 bg-[#73ffb4] rounded-full"></div>
                  </div>
                  {/* Bottom Left Floating Element */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#d6b06f]/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <div className="w-8 h-8 bg-[#d6b06f] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Services Button - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10">
        <button 
          onClick={() => scrollToSection('services')}
          className="bg-[#38b000] hover:bg-[#2b7a00] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Explore Services
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d6b06f] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d6b06f] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;