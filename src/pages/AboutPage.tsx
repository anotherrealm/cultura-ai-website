import React from 'react';
import { Globe, Heart, Users, Target, Eye, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description: "Breaking down geographical barriers to connect people worldwide with authentic African cultural experiences.",
      color: "text-[#d6b06f]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cultural Love",
      description: "Fostering deep appreciation and understanding of African traditions, languages, and storytelling heritage.",
      color: "text-[#73ffb4]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Creating vibrant communities where people can share, learn, and celebrate African culture together.",
      color: "text-[#d6b06f]"
    }
  ];

  const mission = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To preserve and celebrate African heritage through cutting-edge AI technology, making cultural wisdom accessible to everyone, everywhere."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision", 
      description: "A world where African culture thrives in the digital age, connecting generations and inspiring global understanding."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Our Innovation",
      description: "Leveraging artificial intelligence to create immersive, educational, and meaningful cultural experiences."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-[#f8f6f0] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block bg-[#f8f6f0] text-[#d6b06f] border border-[#d6b06f]/30 px-4 py-2 text-sm font-medium rounded-full mb-4">
            About CulturaAI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#342603]">
            <span className="hero-text">Preserving Heritage Through Innovation</span>
          </h2>
          <p className="text-lg text-[#342603]/80 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to preserving and celebrating African heritage through cutting-edge AI technology, 
            making cultural wisdom accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission, Vision, Innovation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mission.map((item, index) => (
            <div key={index} className="bg-[#f8f6f0] border border-[#d6b06f]/20 hover:border-[#73ffb4]/40 transition-all duration-300 hover:scale-105 rounded-lg p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#d6b06f]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#342603] mb-4">{item.title}</h3>
              </div>
              <div className="text-center">
                <p className="text-[#342603]/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#342603]">
              Our <span className="hero-text">Core Values</span>
            </h3>
            <p className="text-[#342603]/80 max-w-2xl mx-auto">
              The principles that guide our mission to preserve and share African cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-hover bg-[#f8f6f0] border border-[#d6b06f]/20 hover:border-[#73ffb4]/40 transition-all duration-300 group rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className={`${value.color} group-hover:text-[#73ffb4] transition-colors`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#342603] group-hover:text-[#73ffb4] transition-colors mb-4">
                    {value.title}
                  </h3>
                </div>
                <div className="text-center">
                  <p className="text-[#342603]/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section - Commented Out */}
        {/* 
        <div className="bg-gradient-to-r from-[#f8f6f0] to-white rounded-2xl p-8 border border-[#d6b06f]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#342603] mb-2">Our Impact</h3>
            <p className="text-[#342603]/80">Making a difference in cultural preservation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#d6b06f] mb-2">50+</div>
              <div className="text-sm text-[#342603]/70">African Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#73ffb4] mb-2">1000+</div>
              <div className="text-sm text-[#342603]/70">Traditional Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#d6b06f] mb-2">10K+</div>
              <div className="text-sm text-[#342603]/70">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#73ffb4] mb-2">25+</div>
              <div className="text-sm text-[#342603]/70">Countries Reached</div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default AboutPage;