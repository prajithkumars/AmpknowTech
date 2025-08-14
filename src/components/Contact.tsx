import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form details
    const message = `Hi, I'm interested in AMPKNOW TECH ACADEMY courses.

My Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}

Please provide more information about your courses.`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/917904617831?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after sending
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Redirecting to WhatsApp with your details...');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your learning journey? Contact us today to learn more about our courses 
            and how we can help you achieve your career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mx-4 lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your interests and how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6 mx-4 lg:mx-0">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Our Campus</h4>
                    <p className="text-gray-600 text-sm">
                      Na Udaiyarpalayam, Kattur post, Mangalapuram via Rasipuram(Tk), 
                      Namakkal (DT), Tamil Nadu, 636202, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm">+91 63697 55991</p>
                    <p className="text-gray-600 text-sm">+91 79046 17831</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm">ampknowtech@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-600">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
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

            {/* Google Map */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg mx-4 lg:mx-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.7588321014846!2d78.36811947505365!3d11.569138888631997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzA4LjkiTiA3OMKwMjInMTQuNSJF!5e0!3m2!1sen!2sin!4v1755056017463!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;