import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <img 
            src="/public/amplogo.png" 
            alt="AMPKNOW TECH ACADEMY" 
            className="w-24 h-24 mx-auto mb-6 animate-pulse"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">AMPKNOW TECH ACADEMY</h2>
        <p className="text-blue-200 italic">Knowledge's Your Success</p>
        <div className="mt-8">
          <div className="w-48 h-1 bg-blue-400 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-yellow-400 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;