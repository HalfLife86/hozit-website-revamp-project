
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WebDevCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-lg mb-8">
            Take the first step toward establishing your online presence with our professional web development services. Whether you're starting from scratch or upgrading your existing site, our expert team is ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-bold"
              asChild
            >
              <a href="https://www.hozit.co.za/whmcs/contact.php" target="_blank" rel="noopener noreferrer">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600"
              asChild
            >
              <a href="#packages">View Our Packages</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevCTA;
