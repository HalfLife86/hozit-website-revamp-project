
import React from 'react';
import { 
  ShieldCheck, 
  DollarSign, 
  Users, 
  FileText, 
  Cloud, 
  BarChart3 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SoftwareLicensingServices = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "License Compliance Management",
      description: "We help ensure your organization maintains software license compliance, avoiding costly penalties and legal issues while optimizing your license utilization."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Our experts analyze your software usage patterns to identify opportunities for cost savings through license consolidation, right-sizing, and negotiation of better terms."
    },
    {
      icon: Users,
      title: "Volume Licensing Programs",
      description: "Access special pricing and benefits through volume licensing programs from major software vendors, tailored to your organization's size and needs."
    },
    {
      icon: FileText,
      title: "License Agreement Management",
      description: "We help you understand complex licensing agreements, maintain proper documentation, and prepare for software audits with confidence."
    },
    {
      icon: Cloud,
      title: "Cloud Licensing Solutions",
      description: "Navigate the transition from perpetual licenses to subscription-based cloud services with expert guidance on SaaS, PaaS, and IaaS licensing models."
    },
    {
      icon: BarChart3,
      title: "Software Asset Management",
      description: "Implement comprehensive software asset management practices to track licenses, monitor usage, and optimize your software investments."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Software Licensing Services</h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive software licensing solutions to help your business navigate the complex landscape of software procurement and license management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-it-blue/10 inline-flex p-3 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-it-blue" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareLicensingServices;
