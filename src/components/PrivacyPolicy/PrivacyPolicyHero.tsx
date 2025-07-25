
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const PrivacyPolicyHero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Our <span className="text-black">Privacy Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg">
              "We take your privacy seriously and are committed to protecting your personal information"
            </p>
            <p className="text-white mb-8">
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read it carefully to understand our practices regarding your personal data.
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold"
                onClick={() => {
                  const policyContent = document.getElementById('privacy-content');
                  if (policyContent) {
                    policyContent.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Read Our Policy <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-2 animate-fade-in border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">We Respect Your Privacy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Transparent Data Collection</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Secure Information Storage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">No Selling of Personal Data</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Control Over Your Information</span>
                </li>
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full mt-6"
                onClick={() => {
                  const policyContent = document.getElementById('privacy-content');
                  if (policyContent) {
                    policyContent.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyHero;
