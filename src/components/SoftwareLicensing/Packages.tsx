
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SoftwareLicensingPackages = () => {
  const packages = [
    {
      title: "Basic License Management",
      price: "R2,500",
      period: "per month",
      description: "Essential license management for small businesses",
      features: [
        "License inventory & tracking",
        "Basic compliance reporting",
        "Software procurement assistance",
        "License renewal management",
        "Up to 25 users/devices"
      ],
      isPopular: false
    },
    {
      title: "Business License Solution",
      price: "R4,500",
      period: "per month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Everything in Basic package",
        "Software asset optimization",
        "Volume licensing benefits",
        "Quarterly compliance audits",
        "License consolidation",
        "Up to 100 users/devices",
        "Dedicated licensing specialist"
      ],
      isPopular: true
    },
    {
      title: "Enterprise License Management",
      price: "Custom",
      period: "pricing",
      description: "Advanced solutions for large organizations",
      features: [
        "Everything in Business package",
        "Full software asset management",
        "Custom licensing agreements",
        "Monthly optimization reviews",
        "Audit defense support",
        "Cloud licensing strategy",
        "Unlimited users/devices",
        "24/7 licensing support"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-16 bg-it-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Licensing Packages</h2>
          <p className="text-lg text-gray-600">
            Choose the licensing management package that best fits your business needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${pkg.isPopular ? 'border-it-accent relative' : 'border-transparent'}`}
            >
              {pkg.isPopular && (
                <div className="bg-it-accent text-white text-center py-2 absolute w-full">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${pkg.isPopular ? 'pt-14' : ''}`}>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-it-blue">{pkg.price}</span>
                  <span className="text-gray-500"> {pkg.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.isPopular ? 'bg-it-accent hover:bg-amber-600' : 'bg-it-blue hover:bg-blue-700'} text-white`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareLicensingPackages;
