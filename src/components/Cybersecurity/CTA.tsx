
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CybersecurityCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Cyber Security</h2>
          <p className="text-xl mb-8">
            With Hozit Domain Hosting as your trusted cyber security partner, you can rest assured that your digital assets 
            are in safe hands. Protect your business from cyber threats and ensure uninterrupted operations with our 
            comprehensive cyber security solutions. Contact us today to strengthen your defenses and safeguard your future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
              asChild
            >
              <a href="#packages">
                View Packages <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-700"
              asChild
            >
              <a 
                href="https://www.hozit.co.za/whmcs/contact.php" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityCTA;
