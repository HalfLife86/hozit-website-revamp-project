
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server } from 'lucide-react';

const ServerSupportHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Server className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Server Support</h1>
          <p className="text-lg mb-8">
            Servers come in various configurations, each requiring specialized support to ensure optimal performance and reliability. 
            At Hozit Domain Hosting, we provide comprehensive server support services for a wide range of operating systems, 
            including Windows, Linux, and other server OS platforms. Our dedicated team of experts is committed to keeping your server 
            environment running smoothly and securely, regardless of the operating system you choose.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
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

export default ServerSupportHero;
