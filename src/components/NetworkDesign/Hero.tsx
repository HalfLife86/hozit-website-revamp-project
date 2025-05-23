
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const NetworkDesignHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Network Design and Implementation</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-it-accent">
            "Revolutionize Your Connectivity"
          </p>
          <p className="text-lg mb-8 text-gray-600">
            A robust and well-designed network forms the backbone of your IT infrastructure, enabling seamless communication, collaboration, and data exchange across your organization. At Hozit Domain Hosting, we offer comprehensive network design and implementation services to help you build a secure, reliable, and scalable network infrastructure that meets your business needs and supports your growth objectives.
          </p>
          <p className="text-lg mb-8 text-gray-600">
            Imagine a network that's not just fast, but intelligent; not just reliable, but secure. Our team of experts crafts tailored network architectures that fit your unique needs, ensuring seamless communication, exceptional performance, and top-notch security. From small businesses to large enterprises, we create networks that scale with your growth and adapt to your evolving demands.
          </p>
          <Button size="lg" className="bg-it-accent hover:bg-amber-600 text-white font-bold">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NetworkDesignHero;
