
import React from 'react';
import { Button } from '@/components/ui/button';

const DomainRegistrationHero = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Domain Registration Services</h1>
          <p className="text-xl text-gray-600 mb-8">Secure your perfect domain name and establish your online identity</p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <a 
              href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Search & Register Your Domain Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomainRegistrationHero;
