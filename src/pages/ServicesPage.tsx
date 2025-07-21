import React, { useState } from 'react';
import { Brain, BookOpen, Gamepad2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Translator",
      description: "Advanced AI-powered translation service that preserves cultural context and nuances in your content.",
      features: ["Real-time translation", "Cultural context preservation", "Multiple language support"],
      color: "text-[#d6b06f]"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Folktale & Origin Explorer",
      description: "Discover the rich stories and origins behind cultural traditions, folktales, and historical narratives.",
      features: ["Interactive storytelling", "Historical context","Meaning of your cultural name"],
      color: "text-[#73ffb4]"
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Language Games",
      description: "Engaging games designed to help you learn languages while exploring different cultures.",
      features: ["Interactive learning", "Cultural immersion", "Progress tracking"],
      color: "text-[#d6b06f]"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-[#f8f6f0] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block bg-[#f8f6f0] text-[#d6b06f] border border-[#d6b06f]/30 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="hero-text">AI-Powered Cultural Solutions</span>
          </h2>
          <p className="text-lg text-[#342603]/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered cultural and linguistic services designed to bridge cultures and preserve heritage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const isFlipped = flippedCards.includes(index);
            
            return (
              <div 
                key={index} 
                className="group relative h-96 overflow-hidden cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                {/* Front Side - Icon Display */}
                <div className={`absolute inset-0 bg-[#f8f6f0] border border-[#d6b06f]/20 hover:border-[#73ffb4]/40 rounded-lg transition-all duration-500 ${
                  isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                } md:group-hover:opacity-0 md:group-hover:scale-95`}>
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className={service.color}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#342603] mb-4">{service.title}</h3>
                    <p className="text-sm text-[#342603]/60">
                      <span className="hidden md:inline">Hover to explore</span>
                      <span className="md:hidden">Tap to explore</span>
                    </p>
                  </div>
                </div>

                {/* Back Side - Details on Hover/Tap */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#342603] to-[#1f1504] border border-[#d6b06f]/30 rounded-lg transition-all duration-500 ${
                  isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } md:group-hover:opacity-100 md:group-hover:scale-100 p-8 flex flex-col`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mr-4">
                        <div className="text-[#d6b06f] scale-75">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-[#e0d6c4]">{service.title}</h3>
                    </div>
                    
                    <p className="text-[#e0d6c4]/80 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-[#e0d6c4]/70 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#73ffb4] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-[#38b000] hover:bg-[#2b7a00] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-base">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - Matching Core Values Style */}
        <div className="bg-[#f8f6f0] border border-[#d6b06f]/20 hover:border-[#73ffb4]/40 transition-all duration-300 hover:scale-105 rounded-lg p-8 text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <div className="text-[#d6b06f] group-hover:text-[#73ffb4] transition-colors">
              <Brain className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#342603] group-hover:text-[#73ffb4] transition-colors mb-4">
            Ready to Get Started?
          </h2>
          
          <p className="text-[#342603]/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who are already exploring cultures and languages with our AI-powered platform.
          </p>
          
          <button className="bg-[#38b000] hover:bg-[#2b7a00] text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;