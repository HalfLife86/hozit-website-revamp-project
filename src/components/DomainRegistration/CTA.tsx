
import React from 'react';
import { Button } from '@/components/ui/button';

const DomainCTA = () => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Domain Name?</h2>
          <p className="text-xl mb-8">
            Take the first step toward establishing your online presence today.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-orange-600 hover:bg-orange-50 border-white"
            asChild
          >
            <a 
              href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Search Available Domains Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomainCTA;
