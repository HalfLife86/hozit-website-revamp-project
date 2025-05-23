
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Key, Shield } from 'lucide-react';

const SoftwareLicensingHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Software Sales & Licensing Solutions</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-it-accent">
            "Simplifying Software Procurement & License Management"
          </p>
          <p className="text-lg mb-8 text-gray-600">
            At Hozit Domain Hosting, we take the complexity out of software licensing, helping your business save time, reduce costs, and ensure compliance. Our experts navigate the intricate world of software licenses to find you the most cost-effective solutions for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="h-5 w-5 text-it-accent" />
              <span>Compliance Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Key className="h-5 w-5 text-it-accent" />
              <span>Secure License Management</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-it-accent hover:bg-amber-600 text-white font-bold">
            Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLicensingHero;
