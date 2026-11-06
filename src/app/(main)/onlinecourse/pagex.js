'use client';
import React from 'react';

export default function MyCoursePage() {
  return (
    <div className={`min-h-screen font-sans flex items-center justify-center p-4 xs:p-6 md:p-8 lg:p-12 overflow-hidden relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300/20 rounded-xl animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-blue-400/20 rounded-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-blue-500/20 rounded-full animate-spin-slow"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto transform animate-fade-in-up">
        
        {/* Icon */}
        <div className="mx-auto w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl mb-8 animate-float">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-6 animate-slide-in">
          Courses
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900 mb-4 animate-fade-in-delay">
          Coming Soon
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-blue-700 max-w-md mx-auto mb-12 leading-relaxed animate-fade-in-delay2">
          Transform your skills with our premium courses designed by industry experts.
        </p>
      </div>
    </div>
  );
}