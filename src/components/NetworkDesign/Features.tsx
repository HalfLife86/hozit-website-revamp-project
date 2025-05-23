
import React from 'react';
import { Network, Shield, Cloud, BarChart, Settings, RefreshCw, ActivitySquare } from 'lucide-react';

const NetworkDesignFeatures = () => {
  const features = [
    {
      icon: Network,
      title: "Strategic Network Planning",
      description: "Our network design process begins with a thorough understanding of your business goals, requirements, and existing infrastructure. We work closely with your team to assess your current network environment, identify pain points, and define strategic objectives for your new network infrastructure."
    },
    {
      icon: Settings,
      title: "Customized Network Architecture",
      description: "Every organization has unique network requirements based on factors such as size, industry, geographic dispersion, and security considerations. Our network architects leverage industry best practices and cutting-edge technologies to design customized network architectures tailored to your specific needs."
    },
    {
      icon: ActivitySquare,
      title: "Network Equipment Procurement and Installation",
      description: "Once the network design is finalized, we assist you in procuring the necessary networking equipment, including routers, switches, firewalls, access points, and other networking devices. Our experienced technicians handle the installation and configuration of network equipment."
    },
    {
      icon: Cloud,
      title: "Cloud Network Design and Integration",
      description: "Cloud computing offers unprecedented scalability, flexibility, and cost-efficiency for modern businesses. Our network design and implementation services encompass cloud network design and integration, enabling seamless connectivity between on-premises and cloud-based resources."
    },
    {
      icon: Shield,
      title: "Network Security and Compliance",
      description: "Security is a top priority in today's interconnected world, and our network design and implementation services prioritize security at every step. We integrate robust security measures, such as firewalls, intrusion detection/prevention systems (IDS/IPS), VPNs, and access controls."
    },
    {
      icon: RefreshCw,
      title: "Scalability and Flexibility",
      description: "Your network infrastructure needs to adapt to changing business requirements and technological advancements. Our network designs are built with scalability and flexibility in mind, allowing for easy expansion and modification as your organization grows."
    },
    {
      icon: BarChart,
      title: "Network Monitoring and Management",
      description: "Proactive monitoring and management are essential for maintaining the health, performance, and security of your network infrastructure. Our network monitoring solutions provide real-time visibility into network traffic, performance metrics, and security events."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience The Hozit Features Difference Today!</h2>
          <p className="text-lg text-gray-600">Comprehensive network solutions designed for your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-it-blue bg-opacity-10 text-it-blue mb-4 mx-auto">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkDesignFeatures;
