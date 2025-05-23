
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SEOHero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Search Engine <span className="text-black">Optimization</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg">
              "Enhance Your Online Visibility and Drive Organic Traffic"
            </p>
            <p className="text-white mb-8">
              In the vast digital landscape, standing out amidst the competition requires more than just a stunning website—it demands strategic visibility. At Hozit Domain Hosting, we specialize in Search Engine Optimization (SEO) services designed to elevate your online presence and drive organic traffic to your website.
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold"
                asChild
              >
                <a href="#packages">View SEO Packages <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-2 animate-fade-in border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">SEO Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Increased Organic Traffic</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Higher Conversion Rates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Improved Brand Visibility</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Long-Term Growth Strategy</span>
                </li>
              </ul>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full mt-6"
                asChild
              >
                <a href="#packages">View SEO Packages</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
