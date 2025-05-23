
import React from 'react';
import { keyFeatures } from './hostingPlansData';

const KeyFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Experience The Hozit Features Difference Today!</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Our hosting solutions come with powerful features designed to elevate your online presence.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
