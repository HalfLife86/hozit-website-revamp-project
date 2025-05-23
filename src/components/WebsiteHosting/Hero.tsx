
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Domain Registration and Website Hosting</h1>
          <p className="text-xl mb-8">Establishing a strong online presence starts with the right domain name and reliable website hosting. At Hozit Domain Hosting, we offer comprehensive solutions to help you secure the perfect domain name and ensure your website remains accessible and responsive to your audience.</p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
