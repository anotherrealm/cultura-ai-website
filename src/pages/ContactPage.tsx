import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email",
      value: "culturaai@gmail.com",
      description: "Send us an email anytime",
      color: "text-[#d6b06f]"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Location", 
      value: "Juja, Kenya",
      description: "Ajira Hub",
      color: "text-[#73ffb4]"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM",
      description: "East Africa Time (EAT)",
      color: "text-[#d6b06f]"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-[#f8f6f0]">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block bg-[#f8f6f0] text-[#d6b06f] border border-[#d6b06f]/30 px-4 py-2 text-sm font-medium rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#342603]">
            <span className="hero-text">Let's Start Your Cultural Journey</span>
          </h2>
          <p className="text-lg text-[#342603]/80 max-w-3xl mx-auto">
            Ready to embark on your cultural journey? Reach out to us using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 fade-in">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-[#f8f6f0] border border-[#d6b06f]/20 hover:border-[#73ffb4]/40 transition-all duration-300 hover:scale-105 rounded-lg p-8 flex flex-col items-center text-center">
              <div className={`w-16 h-16 bg-gradient-to-br from-[#d6b06f]/20 to-[#73ffb4]/20 rounded-full flex items-center justify-center mb-4`}>
                <div className={info.color}>{info.icon}</div>
              </div>
              <h3 className="font-semibold text-[#342603] mb-2 text-xl">{info.title}</h3>
              <p className="text-[#d6b06f] font-medium mb-2 text-lg">{info.value}</p>
              <p className="text-sm text-[#342603]/70">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;