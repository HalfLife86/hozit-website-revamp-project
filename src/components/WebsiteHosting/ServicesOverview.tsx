
import React from 'react';
import { Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 rounded-lg border border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-orange-600" aria-label="Website hosting server icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Premium Website Hosting Solutions</h3>
            <p className="text-gray-600">Our reliable website hosting services are designed for exceptional performance and maximum uptime. Whether you need shared hosting for a personal blog, VPS hosting for growing businesses, or dedicated servers for enterprise websites, we provide fast SSD hosting solutions with free SSL certificates and 24/7 technical support to keep your site running smoothly.</p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-orange-600" aria-label="Domain registration database icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              <Link 
                to="/domain-registration"
                className="text-gray-900 hover:text-orange-600 transition-colors"
              >
                Professional Domain Registration Services
              </Link>
            </h3>
            <p className="text-gray-600">Secure your perfect domain name with our comprehensive domain registration services. We offer .co.za, .com, .net, and many other domain extensions at competitive prices. Our easy-to-use domain search tool helps you find available domain names, and our expert team assists with domain transfers and management to establish your strong online presence.</p>
            <div className="mt-4 flex space-x-3">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white" 
                asChild
                aria-label="Learn more about domain registration"
              >
                <Link to="/domain-registration">
                  Learn More
                </Link>
              </Button>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white" 
                asChild
                aria-label="Register a new domain name"
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
