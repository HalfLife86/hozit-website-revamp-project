
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AppDevelopmentHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">APP Development</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">
            "Code the Future: Where Your App Dreams Take Flight."
          </p>
          <p className="text-xl mb-8 text-gray-700">
            "Empowering Ideas, Crafting Futures – Your Vision, Our Code."
          </p>
          <p className="text-lg mb-8 text-gray-600">
            We turn your boldest ideas into powerful, user-friendly apps. Our expert team blends creativity with cutting-edge technology to craft solutions that not only meet your needs but also captivate and inspire. Let's transform your vision into a seamless digital experience—where possibilities are endless, and success is just a tap away.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentHero;
