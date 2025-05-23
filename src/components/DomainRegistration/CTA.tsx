
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DomainCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Hozit Domain Registration Power Your Online Presence</h2>
          <p className="text-lg mb-8">
            Whether you're launching a new website or looking to enhance your existing online presence, Hozit Domain Registration has the expertise and resources to help you succeed. Secure your domain name today and embark on your digital journey with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-bold"
              asChild
            >
              <a 
                href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register Your Domain Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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

export default DomainCTA;
