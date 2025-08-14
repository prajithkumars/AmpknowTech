import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:py-16 max-w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/amplogo.png" 
                alt="AMPKNOW TECH ACADEMY" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-white">AMPKNOW TECH</h3>
                <p className="text-sm text-gray-400 -mt-1">ACADEMY</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of engineers with cutting-edge knowledge and practical skills 
              in Electrical & Electronics Engineering and Computer Science.
            </p>
            <p className="text-yellow-400 italic font-medium">
              "Knowledge's Your Success"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Embedded Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  IoT & Robotics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Na Udaiyarpalayam, Kattur post, Mangalapuram via Rasipuram(Tk), 
                  Namakkal (DT), Tamil Nadu, 636202, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">+91 63697 55991</p>
                  <p className="text-gray-400 text-sm">+91 79046 17831</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">ampknowtech@gmail.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/profile.php?id=61577976128373" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/AmpknowAcademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ampknow_tech_academy?igsh=MWJ4N2N1ZWdueXdrNQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ampknow-tech-academy-94161b373/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@AMPKNOWTECHAcademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AMPKNOW TECH ACADEMY. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 md:mt-0 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;