
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Microsoft365Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Microsoft 365 Solutions</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-it-accent">
            "Power Productivity. Empower Your Team."
          </p>
          <p className="text-lg mb-8 text-gray-600">
            At Hozit Domain Hosting, we help businesses unlock the full potential of Microsoft 365 — the leading cloud-based productivity suite. Whether you're a small business or a growing enterprise, our Microsoft 365 solutions are designed to streamline your operations, enhance collaboration, and secure your digital workspace.
          </p>
          <Button size="lg" className="bg-it-accent hover:bg-amber-600 text-white font-bold">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Hero;
