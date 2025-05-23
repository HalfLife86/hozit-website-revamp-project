
import React from 'react';
import { Server, Globe, Shield, Monitor, Database, Search, Smartphone, Network, Mail, Laptop, Package, Key, HeadsetIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  ctaText,
  link
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  ctaText: string;
  link?: string;
}) => {
  const ButtonComponent = link ? (
    <Button className="bg-it-accent hover:bg-amber-600 text-white mt-auto w-full" asChild>
      <Link to={link}>{ctaText}</Link>
    </Button>
  ) : (
    <Button className="bg-it-accent hover:bg-amber-600 text-white mt-auto w-full">
      {ctaText}
    </Button>
  );

  return (
    <div className="service-card flex flex-col h-full">
      <div className="bg-it-blue/10 inline-flex p-3 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-it-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {ButtonComponent}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Website Hosting',
      description: 'Establishing a strong online presence starts with the right domain name and reliable website hosting.',
      ctaText: 'Compare Packages',
      link: '/website-hosting'
    },
    {
      icon: Globe,
      title: 'Domain Registration',
      description: 'Establishing a strong online presence starts with the right domain name and reliable website hosting.',
      ctaText: 'Register your Domain',
      link: '/domain-registration'
    },
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'In today\'s digital world, your website serves as the cornerstone of your online presence, acting as a virtual storefront and a platform for engaging with your audience.',
      ctaText: 'Compare Packages',
      link: '/web-development'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'In the vast digital landscape, standing out amidst the competition requires more than just a stunning website—it demands strategic visibility.',
      ctaText: 'Compare Packages',
      link: '/seo'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'In today\'s digital landscape, safeguarding your organization against cyber threats is paramount.',
      ctaText: 'Compare Plans',
      link: '/cybersecurity'
    },
    {
      icon: HeadsetIcon,
      title: 'IT Support',
      description: 'Navigating the complexities of IT infrastructure can be daunting, but with Hozit Domain Hosting\'s comprehensive IT technical support services.',
      ctaText: 'Compare Packages',
      link: '/it-support'
    },
    {
      icon: Database,
      title: 'Server Support',
      description: 'Servers come in various configurations, each requiring specialized support to ensure optimal performance and reliability.',
      ctaText: 'Compare Packages',
      link: '/server-support'
    },
    {
      icon: Smartphone,
      title: 'APP Development',
      description: 'If you are looking for a Developer to professionally build a mobile application for iOS & Android (iPhone, iPad, Android). You are at the right place.',
      ctaText: 'Compare Plans',
      link: '/app-development'
    },
    {
      icon: Network,
      title: 'Network Design',
      description: 'A robust and well-designed network forms the backbone of your IT infrastructure, enabling seamless communication, across your organization.',
      ctaText: 'Compare Packages',
      link: '/network-design'
    },
    {
      icon: Mail,
      title: 'Microsoft 365 Setup and Migration',
      description: 'Seamlessly transition your business to Microsoft 365 with our expert setup and migration services. We handle everything from account configuration to data migration, ensuring zero downtime and enhanced productivity.',
      ctaText: 'Learn More',
      link: '/microsoft-365'
    },
    {
      icon: Laptop,
      title: 'Computer Hardware',
      description: 'Get the right hardware solutions for your business needs. We provide consultation, procurement, and installation of high-quality computer hardware that aligns with your business requirements and budget.',
      ctaText: 'View Options'
    },
    {
      icon: Key,
      title: 'Software Sales and Licensing',
      description: 'Navigate the complex world of software licensing with our expert guidance. We help you find the most cost-effective licensing solutions for your business applications and ensure compliance with all relevant regulations.',
      ctaText: 'Explore Solutions'
    }
  ];

  return (
    <section id="services" className="py-20 bg-it-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">Services We are Providing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check our Top Notch services and select the services which you need to get the solution of your problem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              ctaText={service.ctaText}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
