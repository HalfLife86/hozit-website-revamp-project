
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
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
            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <div className="bg-it-blue text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading">
              Leading IT Solutions Provider in South Africa
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              HozIT is a premier IT solutions provider dedicated to helping South African businesses thrive in the digital landscape. With over 10 years of experience, we've successfully transformed hundreds of companies through innovative IT infrastructure, robust cybersecurity, and reliable technical support services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">Microsoft Certified Professionals</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">24/7 Technical Support</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">Custom Business Solutions</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">Competitive Pricing</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">Proven Track Record</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-gray-700">Industry Expertise</span>
              </div>
            </div>
            
            <Button 
              className="btn-primary" 
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
