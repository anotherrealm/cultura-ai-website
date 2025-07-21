import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Zap,
  Globe2,
  Book,
  Heart,
  Users2,
  Gamepad,
  Linkedin,
  Github,
  Mail,
  ChevronUp
} from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const CulturaAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      
      // Show scroll to top button
      setShowScrollTop(scrollPosition > 300);
      
      // Determine active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: "Ethan Kisang",
      role: "AI Lead",
      icon: <Zap className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "ethan@culturaai.com"
    },
    {
      name: "Cecil Kioko",
      role: "Backend Developer",
      icon: <Globe2 className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "cecil@culturaai.com"
    },
    {
      name: "Emmanuel Mwangangi",
      role: "Frontend Developer",
      icon: <Book className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "emmanuel@culturaai.com"
    },
    {
      name: "Philip Muendo",
      role: "UI/UX Designer",
      icon: <Heart className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "philip@culturaai.com"
    },
    {
      name: "Walter Simon",
      role: "Integrations Specialist",
      icon: <Users2 className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "walter@culturaai.com"
    },
    {
      name: "Erick Munyaka",
      role: "Researcher",
      icon: <Gamepad className="w-6 h-6" />,
      linkedin: "#",
      github: "#",
      email: "erick@culturaai.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1f1504] text-[#e0d6c4]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#d6b06f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold hero-text">CulturaAI</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'services', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                      activeSection === section
                        ? 'text-[#d6b06f] border-b-2 border-[#d6b06f]'
                        : 'text-[#342603] hover:text-[#d6b06f]'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#342603] hover:text-[#d6b06f] p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#d6b06f]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-[#342603] hover:text-[#d6b06f] hover:bg-[#d6b06f]/10 rounded-md transition-colors duration-200 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Components */}
      <HomePage scrollToSection={scrollToSection} />
      <AboutPage />
      <ServicesPage />

      {/* Team Section */}
      <section id="team" className="section-padding bg-gradient-to-br from-[#f8f6f0] to-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block bg-[#f8f6f0] text-[#d6b06f] border border-[#d6b06f]/30 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="hero-text">Meet Our Experts</span>
            </h2>
            <p className="text-lg text-[#342603]/80 max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation in African cultural preservation and AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card bg-gradient-to-br from-[#342603] to-[#1f1504] border border-[#d6b06f]/30 hover:border-[#73ffb4]/60 hover:shadow-xl transition-all duration-300 hover:scale-105 group rounded-lg overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-[#d6b06f] group-hover:text-[#73ffb4] transition-colors backdrop-blur-sm">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#e0d6c4] group-hover:text-[#73ffb4] transition-colors mb-2">{member.name}</h3>
                  <p className="text-[#d6b06f] font-medium mb-4">{member.role}</p>
                </div>
                <div className="text-center px-6 pb-6">
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-[#e0d6c4]/60 hover:text-[#73ffb4] transition-colors p-2 rounded-full hover:bg-[#d6b06f]/10">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.github} className="text-[#e0d6c4]/60 hover:text-[#73ffb4] transition-colors p-2 rounded-full hover:bg-[#d6b06f]/10">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-[#e0d6c4]/60 hover:text-[#73ffb4] transition-colors p-2 rounded-full hover:bg-[#d6b06f]/10">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactPage />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#342603] to-[#1f1504] text-[#e0d6c4] py-12 border-t border-[#d6b06f]/20">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="hero-text">CulturaAI</span>
            </h3>
            <p className="text-[#e0d6c4]/80 mb-6">
              Preserving African heritage through AI innovation
            </p>
            <p className="text-[#e0d6c4]/60 text-sm">
              © 2024 CulturaAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#d6b06f] text-white rounded-full shadow-lg hover:bg-[#73ffb4] transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  );
};

export default CulturaAI;