
import React from 'react';
import { Button } from '@/components/ui/button';

const WebDevHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Website Development</h1>
          <p className="text-lg text-gray-700 mb-8">
            In today's digital world, your website serves as the cornerstone of your online presence, 
            acting as a virtual storefront and a platform for engaging with your audience. At Hozit Domain Hosting, 
            we understand the importance of having a professional and effective website that not only attracts 
            visitors but also converts them into loyal customers. With our website development services, 
            we empower businesses of all sizes to establish a strong online presence and achieve their digital goals.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white"
            asChild
          >
            <a href="#packages">View Our Packages</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevHero;
