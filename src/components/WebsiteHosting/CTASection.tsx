
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Let Hozit Domain Hosting Power Your Online Presence</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're launching a new website or looking to enhance your existing online presence, Hozit Domain Hosting has the expertise and resources to help you succeed. Secure your domain name, choose a hosting plan that meets your needs, and embark on your digital journey with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-orange-600 hover:bg-gray-100">Contact Sales</Button>
          <Button className="bg-black hover:bg-gray-800 text-white">Sign Up Now</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
