
import React from 'react';
import { Laptop, Server, Monitor, Cpu, HardDrive, Check, KeyboardIcon } from 'lucide-react';

const featuresList = [
  {
    icon: Laptop,
    title: "Business Laptops & Workstations",
    description: "High-performance laptops and desktop workstations optimized for business applications, with enterprise-grade security features and management capabilities."
  },
  {
    icon: Server,
    title: "Servers & Storage Solutions",
    description: "Reliable server hardware and storage solutions to power your business applications, databases, and file sharing needs with redundancy and scalability options."
  },
  {
    icon: Monitor,
    title: "Displays & Peripherals",
    description: "Ergonomic monitors, keyboards, mice, and other peripherals that enhance productivity and reduce strain during long working hours."
  },
  {
    icon: Cpu,
    title: "Custom-Built Systems",
    description: "Tailor-made computer systems designed specifically for your business requirements, whether for specialized applications or general office use."
  },
  {
    icon: HardDrive,
    title: "Storage & Backup Devices",
    description: "External storage devices, NAS solutions, and backup hardware to ensure your business data remains secure and accessible when needed."
  },
  {
    icon: KeyboardIcon,
    title: "Accessories & Components",
    description: "Quality components and accessories to upgrade existing systems or replace failing parts, keeping your hardware running optimally."
  }
];

const ComputerHardwareFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Computer Hardware Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of hardware solutions to meet your business needs, from individual components to complete systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-it-blue/10 p-3 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-it-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Hardware Procurement Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-it-accent/10 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-it-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Needs Assessment</h4>
                <p className="text-gray-600">We begin by understanding your business requirements, workflows, and budget constraints to recommend appropriate hardware solutions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-it-accent/10 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-it-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Solution Design</h4>
                <p className="text-gray-600">Our experts design hardware configurations that align with your needs, ensuring compatibility and optimal performance.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-it-accent/10 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-it-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Procurement</h4>
                <p className="text-gray-600">We source high-quality hardware from trusted suppliers at competitive prices, handling all logistics and delivery details.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-it-accent/10 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-it-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Implementation & Support</h4>
                <p className="text-gray-600">Our team handles installation, configuration, and provides ongoing support to ensure your hardware performs optimally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerHardwareFeatures;
