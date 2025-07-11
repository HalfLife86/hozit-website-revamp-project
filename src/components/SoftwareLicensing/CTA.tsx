
import React from 'react';
import { FileCheck } from 'lucide-react';

const SoftwareLicensingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileCheck className="h-16 w-16 mx-auto mb-6 text-white opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimize Your Software Licensing Today</h2>
          <p className="text-lg mb-8">
            Stop overpaying for software and ensure compliance with our expert licensing solutions. Our team helps you navigate complex licensing terms, find the most cost-effective options, and implement proper license management practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLicensingCTA;
