
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServerSupportCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Business with Reliable Hardware Solutions and Maintenance</h2>
          <p className="text-lg mb-8">
            With Hozit Domain Hosting as your hardware partner, you can trust that your computer and server hardware are in capable hands. 
            From procurement and installation to maintenance and disposal, we provide end-to-end hardware solutions and support to help your business thrive. 
            Contact us today to learn more about how we can support your hardware needs and drive your business forward.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerSupportCTA;
