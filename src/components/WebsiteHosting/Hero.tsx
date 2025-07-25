
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Best Website Hosting <span className="text-black">South Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg">
              Fast, reliable web hosting with 99.9% uptime guarantee and free SSL certificates
            </p>
            <p className="text-white mb-8">
              Get premium website hosting services in South Africa with SSD storage, lightning-fast performance, and 24/7 expert support. Our reliable hosting solutions ensure your website stays online and loads quickly for your visitors.
            </p>
            <div>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold" aria-label="Get started with website hosting">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-2 animate-fade-in border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Website Hosting Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1" aria-hidden="true">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">99.9% Uptime Guarantee</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1" aria-hidden="true">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Free SSL Certificates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1" aria-hidden="true">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 Technical Support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1" aria-hidden="true">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Fast SSD Storage</span>
                </li>
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full mt-6" aria-label="View website hosting plans">
                View Hosting Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
