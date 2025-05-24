
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Get in <span className="text-black">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg">
              "We're here to answer your questions and help you grow your business"
            </p>
            <p className="text-white mb-8">
              Our team of IT experts is ready to assist you with any questions or concerns. Whether you need technical support, want to discuss a new project, or are interested in our services, we're just a message away.
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold"
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us Now <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-2 animate-fade-in border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Quick Response Time</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Expert IT Advice</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Customized Solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 Support Available</span>
                </li>
              </ul>
              <a href="#contact-form">
                <Button className="bg-it-accent hover:bg-orange-600 text-white font-bold w-full mt-6">
                  Send Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
