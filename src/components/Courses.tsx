import React from 'react';
import { 
  Cpu, 
  Wifi, 
  Zap, 
  Calculator, 
  Battery, 
  Settings, 
  CircuitBoard,
  Palette,
  Brain,
  Code,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  ExternalLink
} from 'lucide-react';

const Courses: React.FC = () => {
  const electricalCourses = [
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Master microcontrollers, ARM processors, and real-time systems programming.",
      duration: "2 Months",
      price: "₹12,000",
      color: "blue"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT & Robotics",
      description: "Build connected devices and intelligent robotic systems.",
      duration: "3 Months",
      price: "₹16,000",
      color: "green"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SMPS Technology",
      description: "Switch Mode Power Supply design and troubleshooting techniques.",
      duration: "2 Months",
      price: "₹9,000",
      color: "yellow"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "MATLAB For Electrical Engineering",
      description: "Advanced mathematical computing and simulation for engineers.",
      duration: "3 Months",
      price: "₹18,000",
      color: "red"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "UPS & Inverter",
      description: "Uninterruptible Power Supply systems and inverter technology.",
      duration: "2 Months",
      price: "₹12,000",
      color: "purple"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "PLC",
      description: "PLC programming, SCADA systems, and process automation.",
      duration: "3 Months",
      price: "₹15,000",
      color: "indigo"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "PCB Designing",
      description: "Professional PCB layout design using industry-standard tools.",
      duration: "2 Months",
      price: "₹12,000",
      color: "pink"
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Basic Electronics With PCB Designing",
      description: "Fundamental electronics concepts combined with PCB design skills.",
      duration: "2 Months",
      price: "₹10,000",
      color: "teal"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Renewable Energy",
      description: "Solar, wind, and sustainable energy systems design and implementation.",
      duration: "2 Months",
      price: "₹10,000",
      color: "green"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "PCB Designing and Components Fixing",
      description: "Advanced PCB design with hands-on component assembly and repair.",
      duration: "2 Months",
      price: "₹12,000",
      color: "blue"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Electric Vehicles",
      description: "EV technology, battery management systems, and charging infrastructure.",
      duration: "2 Months",
      price: "₹16,000",
      color: "red"
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "PCB Troubleshooting",
      description: "Advanced techniques for diagnosing and fixing PCB issues.",
      duration: "2 Months",
      price: "₹18,000",
      color: "purple"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "BMS (Battery Management System)",
      description: "Design and implementation of battery management systems for various applications.",
      duration: "2 Months",
      price: "₹16,000",
      color: "indigo"
    }
  ];

  const csCourses = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create stunning user interfaces and exceptional user experiences.",
      duration: "3 Months",
      price: "₹14,000",
      color: "blue"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Machine learning algorithms and AI application development.",
      duration: "4 Months",
      price: "₹20,000",
      color: "green"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and predictive modeling.",
      duration: "4 Months",
      price: "₹19,000",
      color: "yellow"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web development with modern frameworks.",
      duration: "5 Months",
      price: "₹22,000",
      color: "red"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "AWS, Azure, and Google Cloud platform services.",
      duration: "3 Months",
      price: "₹17,000",
      color: "purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber Security",
      description: "Network security, ethical hacking, and digital forensics.",
      duration: "4 Months",
      price: "₹18,000",
      color: "indigo"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Science",
      description: "Big data analytics, visualization, and business intelligence.",
      duration: "4 Months",
      price: "₹21,000",
      color: "pink"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "iOS and Android app development with React Native.",
      duration: "4 Months",
      price: "₹19,000",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      yellow: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white",
      red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleEnrollClick = (course: any) => {
    const message = `Hi, I want to enroll in ${course.title} course. Duration: ${course.duration}, Price: ${course.price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/917904617831?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const CourseCard = ({ course }: { course: any }) => (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(course.color)}`}>
        {course.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {course.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {course.description}
      </p>
      <div className="flex justify-between items-center mb-4 text-sm">
        <span className="text-gray-500">Duration: {course.duration}</span>
        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button 
          onClick={() => handleEnrollClick(course)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <span>Enroll Now</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training programs designed to equip you with industry-relevant skills 
            and practical knowledge for a successful career in technology.
          </p>
        </div>

        {/* Electrical & Electronics Courses */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              EEE & ECE <span className="text-blue-600">Value Added Courses</span>
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {electricalCourses.map((course, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        {/* Computer Science & IT Courses */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Computer Science & <span className="text-blue-600">Information Technology</span>
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {csCourses.map((course, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our expert-led courses.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/917904617831?text=Hi%2C%20I%20need%20information%20about%20all%20courses%20at%20AMPKNOW%20TECH%20ACADEMY', '_blank')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Course Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;