import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">AMPKNOW TECH ACADEMY</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of engineers with cutting-edge knowledge and practical skills 
            in Electrical & Electronics Engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">Industry professionals with years of experience</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hands-on Training</h3>
                <p className="text-gray-600 text-sm">Practical approach to learning with real projects</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Career Focus</h3>
                <p className="text-gray-600 text-sm">Industry-relevant curriculum for job readiness</p>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                At AMPKNOW TECH ACADEMY, we believe that knowledge is the foundation of success. Our mission is to 
                provide comprehensive, industry-relevant training in Electrical & Electronics Engineering, Computer 
                Science, and emerging technologies.
              </p>
              <p className="mb-6">
                With a focus on practical learning and real-world applications, we prepare our students to excel 
                in today's competitive technology landscape. Our expert faculty brings years of industry experience 
                to deliver training that bridges the gap between academic theory and professional practice.
              </p>
              <p>
                From embedded systems and IoT to artificial intelligence and machine learning, we offer a diverse 
                range of courses designed to meet the evolving needs of the technology industry.
              </p>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-blue-600 mx-4 lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Na Udaiyarpalayam, Kattur post,<br />
                    Mangalapuram via Rasipuram(Tk),<br />
                    Namakkal (DT), Tamil Nadu, 636202, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 63697 55991</p>
                  <p className="text-gray-600 text-sm">+91 79046 17831</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">ampknowtech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: Leave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;