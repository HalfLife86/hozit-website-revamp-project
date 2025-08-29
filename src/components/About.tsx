
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const About = () => {
  const handleDiscoverSolutions = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3" 
                alt="Professional IT team working on computers providing technical support and cybersecurity services in South Africa"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 hidden sm:block">
              <div className="bg-it-blue text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-2xl sm:text-4xl font-bold">10+</div>
                <div className="text-xs sm:text-sm">Years of Experience</div>
              </div>
            </div>
            {/* Mobile experience badge */}
            <div className="sm:hidden mt-4 text-center">
              <div className="bg-it-blue text-white p-3 rounded-lg shadow-lg inline-block">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Years of Experience</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 font-heading leading-tight">
              Leading IT Solutions Provider in South Africa
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              HozIT is a premier IT solutions provider dedicated to helping South African businesses thrive in the digital landscape. With over 10 years of experience, we've successfully transformed hundreds of companies through innovative IT infrastructure, robust cybersecurity, and reliable technical support services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">Microsoft Certified Professionals</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">24/7 Technical Support</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">Custom Business Solutions</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">Competitive Pricing</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">Proven Track Record</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-700">Industry Expertise</span>
              </div>
            </div>
            
            <Button 
              className="btn-primary w-full sm:w-auto min-h-[44px] sm:min-h-[48px] touch-manipulation text-sm sm:text-base" 
              onClick={handleDiscoverSolutions}
              aria-label="Learn more about HozIT's IT services"
            >
              Discover Our IT Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
