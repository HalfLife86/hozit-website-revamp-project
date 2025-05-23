
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Microsoft365CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with Microsoft 365</h2>
          <p className="text-lg mb-8">
            Whether you're moving from another provider, upgrading from legacy software, or starting fresh — our team is here to guide you every step of the way. Experience the power of Microsoft 365 with our expert implementation and support.
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

export default Microsoft365CTA;
