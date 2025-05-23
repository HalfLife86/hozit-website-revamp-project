
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const NetworkDesignCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-it-blue to-it-blue-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Business with a Reliable Network Infrastructure</h2>
          <p className="text-lg mb-8">
            With Hozit Domain Hosting as your network design and implementation partner, you can trust that your network infrastructure is in capable hands. From strategic planning and customised design to seamless deployment and ongoing management, we provide end-to-end network solutions that empower your business to thrive in today's digital world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-it-blue font-bold">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-it-blue">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkDesignCTA;
