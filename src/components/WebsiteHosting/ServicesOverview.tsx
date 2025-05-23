
import React from 'react';
import { Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 rounded-lg border border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Website Hosting Solutions</h3>
            <p className="text-gray-600">Reliable website hosting is essential for ensuring your website is accessible to visitors around the clock. Our hosting solutions are designed to deliver exceptional performance, security, and scalability for websites of all sizes. Whether you're launching a personal blog, an e-commerce store, or a corporate website, we offer hosting plans tailored to your specific needs and budget.</p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              <a 
                href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-orange-600 transition-colors"
              >
                Domain Registration Services
              </a>
            </h3>
            <p className="text-gray-600">Choosing the right domain name is crucial as it represents your brand identity on the web. Our domain registration services simplify the process of securing your desired domain name, whether it's a traditional .co.za, .com, .net, or a niche-specific extension. Our user-friendly interface allows you to search for available domain names and register them with ease.</p>
            <div className="mt-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white" 
                asChild
              >
                <a 
                  href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Register a Domain
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
