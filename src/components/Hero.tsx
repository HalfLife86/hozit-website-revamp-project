
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Trophy, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative hero-min-height bg-gradient-to-r from-orange-500 to-orange-600 hero-gradient overflow-hidden">
      {/* Background decoration - lazy loaded */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-15 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-25 animate-pulse delay-150"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
        {/* Trust indicators */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white mb-6">
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base font-bold text-white">Excellent on Google Reviews</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
              <Users className="w-5 h-5 text-white" />
              <span className="text-base font-bold text-white">1,245+ Clients & Counting</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-base font-bold text-white">400+ Projects Delivered</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-full border border-white/40 inline-flex">
            <Heart className="w-6 h-6 fill-pink-400 text-pink-400" />
            <span className="text-lg font-bold text-white">70% Young Black Female Owned Business</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Optimized heading for LCP */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-white">
              Professional IT Solutions for{' '}
              <span className="text-black">South African Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your business with our comprehensive IT services including web hosting, 
              cybersecurity, technical support, and custom development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold group"
                asChild
              >
                <a href="#services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Optimized image section with explicit dimensions */}
          <div className="hidden lg:block">
            <div className="relative">
              <div 
                className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300"
                style={{ minHeight: '350px', width: '350px' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Website Hosting ✓</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Cybersecurity ✓</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">IT Support ✓</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Web Development ✓</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 font-medium">Happy Clients:</span>
                      <span className="text-lg font-bold text-orange-600">1,245+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 font-medium">Projects Done:</span>
                      <span className="text-lg font-bold text-orange-600">400+</span>
                    </div>
                    <div className="flex items-center space-x-1 justify-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">Excellent Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance optimized wave SVG with explicit dimensions */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16" 
          width="1200"
          height="120"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          role="presentation"
          aria-hidden="true"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
