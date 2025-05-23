
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ITSupportCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Business with Reliable IT Support</h2>
          <p className="text-lg mb-8">
            With Hozit Domain Hosting's IT technical support services, you can enjoy peace of mind knowing that your IT infrastructure is in capable hands. From proactive maintenance to round-the-clock help desk support, we're dedicated to ensuring that your systems operate efficiently and effectively, allowing you to focus on what you do best – running your business.
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

export default ITSupportCTA;
