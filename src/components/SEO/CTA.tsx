
import React from 'react';
import { Button } from '@/components/ui/button';

const SEOCTA = () => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Maximize Your Online Visibility with Hozit Domain Hosting</h2>
          <p className="text-xl mb-8">
            With Hozit Domain Hosting as your SEO partner, you can unlock the full potential of your online presence and drive measurable results for your business. From strategic SEO planning and execution to Google Ads management and content marketing, we provide comprehensive solutions that enhance your visibility, engage your audience, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-orange-600 hover:bg-orange-50 border-white"
              asChild
            >
              <a href="#packages">View Our Packages</a>
            </Button>
            <Button 
              size="lg"
              className="bg-orange-700 hover:bg-orange-800 text-white border border-orange-700"
              asChild
            >
              <a href="https://www.hozit.co.za/whmcs/contact.php" target="_blank" rel="noopener noreferrer">
                Contact Us Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOCTA;
