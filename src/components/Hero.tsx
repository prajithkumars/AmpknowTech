import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/159306/circuit-circuit-board-resistor-computer-159306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Geometric Elements */}
        <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 border-2 border-yellow-400/30 rotate-45 animate-pulse"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            AMPKNOW TECH
          </span>
          <br />
          <span className="text-white block text-center">ACADEMY</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-8 italic font-light">
          "Knowledge's Your Success"
        </p>

        <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Master the future of technology with our comprehensive Electrical & Electronics Engineering courses.
          From embedded systems to AI, we provide hands-on training that transforms knowledge into success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <button
            onClick={() => scrollToSection('courses')}
            className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() =>
              window.open(
                'https://wa.me/917904617831?text=Hi%2C%20I%20need%20information%20about%20courses%20at%20AMPKNOW%20TECH%20ACADEMY',
                '_blank'
              )
            }
            className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Contact Us</span>
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in-up px-4"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-blue-200 text-sm sm:text-base">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-blue-200 text-sm sm:text-base">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-blue-200 text-sm sm:text-base">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-blue-200 text-sm sm:text-base">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;