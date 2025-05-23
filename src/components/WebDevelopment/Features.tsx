
import React from 'react';
import { Monitor, Grid, Rocket, Zap, Users, Search } from 'lucide-react';

const features = [
  {
    title: 'Custom Website Design',
    description: 'Your website is a reflection of your brand and business values, and we believe it should be as unique as your fingerprint. Our team of experienced designers works closely with you to understand your vision, goals, and target audience, crafting custom website designs that capture the essence of your brand and resonate with your audience.',
    icon: Monitor
  },
  {
    title: 'WordPress Development',
    description: 'WordPress is a versatile and user-friendly platform that powers millions of websites worldwide. Whether you need a simple blog, an e-commerce site, or a corporate website, we specialize in WordPress development, leveraging the platform\'s flexibility and scalability to create custom solutions tailored to your specific needs.',
    icon: Grid
  },
  {
    title: 'Responsive and Mobile-Friendly',
    description: 'With the majority of internet users accessing websites from mobile devices, having a responsive and mobile-friendly website is no longer optional—it\'s essential. Our websites are designed with a mobile-first approach, ensuring that they look and perform flawlessly across all devices and screen sizes.',
    icon: Rocket
  },
  {
    title: 'Speed Optimization',
    description: 'In today\'s fast-paced digital landscape, website speed is a crucial factor in user experience and search engine rankings. Slow-loading websites not only frustrate visitors but also hurt your search engine visibility and conversions. That\'s why we prioritize speed optimization in our website development process.',
    icon: Zap
  },
  {
    title: 'User-Centric Design',
    description: 'User experience (UX) is at the heart of everything we do. We prioritize usability, accessibility, and intuitive navigation to ensure that your website delivers an exceptional user experience to every visitor. From clear call-to-action buttons to easy-to-find contact information, we design websites with the end-user in mind.',
    icon: Users
  },
  {
    title: 'SEO-Friendly Architecture',
    description: 'A beautiful website is worthless if it can\'t be found by your target audience. That\'s why we build websites with search engine optimization (SEO) in mind from the ground up. Our websites are optimized for search engines, with clean code, fast loading times, and SEO-friendly architecture that improves your visibility and rankings.',
    icon: Search
  }
];

const WebDevFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Web Development Services</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive web development services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg text-orange-600 mb-5">
                <feature.icon className="h-6 w-6" />
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

export default WebDevFeatures;
