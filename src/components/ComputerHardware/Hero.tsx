
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Laptop } from 'lucide-react';

const ComputerHardwareHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Computer Hardware Solutions</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-it-accent">
            "Reliable Hardware for Peak Performance"
          </p>
          <p className="text-lg mb-8 text-gray-600">
            At Hozit Domain Hosting, we provide high-quality computer hardware solutions tailored to your business needs. From workstations and servers to networking equipment and peripherals, we ensure that your hardware infrastructure supports your operational requirements efficiently and reliably.
          </p>
          <Button size="lg" className="bg-it-accent hover:bg-amber-600 text-white font-bold">
            Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComputerHardwareHero;
