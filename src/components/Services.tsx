
import React from 'react';
import { Server, Shield, Cloud, Monitor, Globe, Database } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="service-card">
      <div className="bg-it-blue/10 inline-flex p-3 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-it-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Design, implementation, and maintenance of reliable IT infrastructure tailored to your business needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions to safeguard your valuable data and systems.'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Leverage cloud technologies for improved flexibility, scalability, and cost-effective IT solutions.'
    },
    {
      icon: Monitor,
      title: 'Managed IT Support',
      description: '24/7 technical support and monitoring to ensure your business operates smoothly without interruptions.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web solutions that help your business establish a strong online presence and reach more customers.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Effective data storage, backup, and recovery solutions to protect your critical business information.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-it-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive IT solutions to help businesses optimize their operations and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
