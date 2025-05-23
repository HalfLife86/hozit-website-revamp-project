
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DomainManagement = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Domain Management Tools</h2>
            <p className="text-lg text-gray-600 mb-6">
              Managing your domain and hosting services is made simple with our intuitive control panel. Access essential tools for domain management, DNS configuration, email setup, and more, all from a centralized dashboard.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our user-friendly interface puts you in control of your online presence, allowing you to make updates and modifications with ease.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span>Domain Registration Services</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span>Website Hosting Solutions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span>Features of Our Hosting Plans</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span>Domain Management Tools</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Have Additional Questions?</h3>
            <p className="text-center text-gray-600 mb-6">Feel Free to Consult with us over a Live Chat or Ticket System</p>
            <div className="flex justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Contact with us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainManagement;
