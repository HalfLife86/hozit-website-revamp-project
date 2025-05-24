
import React from 'react';
import { CheckCircle, Server, ArrowRight, Shield, Users, Database, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start">
        <div className="mr-4">
          <Icon className="h-8 w-8 text-it-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const GuaranteeItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center mb-4">
      <CheckCircle className="h-5 w-5 text-black mr-2" />
      <span className="text-black">{text}</span>
    </div>
  );
};

const PartnerLogo = ({ name, logoUrl }: { name: string; logoUrl: string }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
      <img src={logoUrl} alt={`${name} logo`} className="max-h-16 max-w-full object-contain" />
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Server,
      title: 'Up To 20X Faster Servers',
      description: 'Experience lightning-fast performance with our optimized server infrastructure. Our high-performance servers deliver up to 20 times faster processing speeds compared to traditional hosting, ensuring your applications run smoothly and efficiently at all times.'
    },
    {
      icon: ArrowRight,
      title: 'Free Account Migration',
      description: 'Switching to HozIT is completely hassle-free. Our team of experts will handle your entire account migration at no additional cost. We ensure a seamless transition with zero downtime, so you can enjoy better service without any interruption to your business.'
    },
    {
      icon: Shield,
      title: 'Anytime Money Back Guarantee',
      description: 'We stand behind our services with complete confidence. If you\'re not fully satisfied with our solutions, we offer a comprehensive money-back guarantee with no questions asked. Your investment is protected, giving you peace of mind when choosing HozIT for your IT needs.'
    },
    {
      icon: Clock,
      title: '99.9% Uptime Commitment',
      description: 'Reliability is our priority. We guarantee 99.9% uptime for all our services, ensuring your business remains operational around the clock. Our robust infrastructure and proactive monitoring systems work tirelessly to prevent downtime and maintain continuous service availability.'
    }
  ];

  const guarantees = [
    'Reliability',
    'Real People',
    'Daily Backups',
    'Safe & Secure'
  ];

  const partners = [
    { 
      name: 'Microsoft', 
      logoUrl: '/lovable-uploads/5450c8c7-3fff-4a97-b62c-19d686142c56.png' 
    },
    { 
      name: 'Dell Technologies', 
      logoUrl: '/lovable-uploads/a161ee1c-2919-4420-bf46-bed4a6983290.png' 
    },
    { 
      name: 'HP', 
      logoUrl: '/lovable-uploads/2990190c-f09a-48ce-b6b2-27a878e5f6cd.png' 
    },
    { 
      name: 'Cisco', 
      logoUrl: '/lovable-uploads/143d2c9f-a431-4c2f-a44b-052af952a2dc.png' 
    },
    { 
      name: 'cPanel', 
      logoUrl: '/lovable-uploads/d9b638ce-4bfc-4cee-86bf-852b2b1cbffc.png' 
    },
    { 
      name: 'Veeam', 
      logoUrl: '/lovable-uploads/6d911ff7-515b-4f72-b157-430513c3b0ea.png' 
    },
    { 
      name: 'Lenovo', 
      logoUrl: '/lovable-uploads/95846a87-c713-48b1-b054-5a5dfa9e1af6.png' 
    },
    { 
      name: 'Kaspersky', 
      logoUrl: '/lovable-uploads/17c0198e-193f-4903-ba2f-7aed547bbc2e.png' 
    },
    { 
      name: 'ESET', 
      logoUrl: '/lovable-uploads/c38c6447-b355-46fc-ae46-a1ef3d5a7c0e.png' 
    },
    { 
      name: 'N-Able', 
      logoUrl: '/lovable-uploads/1b3f92ab-3cd3-4627-a434-fb7d2be60e78.png' 
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Experience The Hozit Features Difference Today!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
        
        <div className="bg-it-accent text-black rounded-lg p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Hozit Guarantees</h3>
              <p className="mb-6 text-black">
                We are proud to guarantee a quality hosting experience or your money back. 
                A guarantee based on reality… who would have thought?!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {guarantees.map((guarantee, index) => (
                  <GuaranteeItem key={index} text={guarantee} />
                ))}
              </div>
              
              <Button className="mt-6 bg-white text-black hover:bg-gray-100">
                View All Guarantees
              </Button>
            </div>
            <div className="hidden md:block">
              <Shield className="h-32 w-32 mx-auto text-black opacity-20" />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Our Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} name={partner.name} logoUrl={partner.logoUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
