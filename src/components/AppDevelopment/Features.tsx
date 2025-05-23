
import React from 'react';
import { Clock, Zap, Shield, ArrowUpRight, Settings } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon,
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string; 
  description: string; 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AppDevelopmentFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: "High Uptime Guarantee",
      description: "We understand the importance of website availability. Our hosting infrastructure is built with redundancy and failover mechanisms to ensure maximum uptime for your website."
    },
    {
      icon: Zap,
      title: "Fast Loading Speeds",
      description: "In today's fast-paced digital world, every second counts. Our hosting servers are optimized for speed, delivering fast loading times to provide an optimal user experience for your visitors."
    },
    {
      icon: Shield,
      title: "Robust Security Measures",
      description: "Protecting your website and data is our top priority. Our hosting plans include advanced security features such as SSL certificates, firewalls, and malware scanning to safeguard against cyber threats."
    },
    {
      icon: ArrowUpRight,
      title: "Scalability Options",
      description: "Whether you're experiencing a sudden surge in traffic or planning for future growth, our hosting plans offer scalability options to accommodate your changing needs. Upgrade or downgrade your resources with ease as your website evolves."
    },
    {
      icon: Settings,
      title: "Domain Management Tools",
      description: "Managing your domain and hosting services is made simple with our intuitive control panel. Access essential tools for domain management, DNS configuration, email setup, and more, all from a centralized dashboard."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Experience The Hozit Features Difference Today!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our app development service comes with these amazing features to ensure your project's success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentFeatures;
