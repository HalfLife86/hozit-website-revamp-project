
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ComputerHardwareCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Business Hardware Today</h2>
          <p className="text-lg mb-8">
            Whether you need a single workstation or a complete office setup, our hardware experts are ready to provide the right solutions for your business needs. Contact us today for a consultation and personalized quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
              Contact Our Hardware Team <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              View All Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerHardwareCTA;
