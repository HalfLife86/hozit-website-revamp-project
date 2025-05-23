
import React from 'react';
import { CheckCircle2, Server, HardDrive, Monitor, Cloud, Database, Shield, Laptop } from 'lucide-react';

const features = [
  {
    title: "Windows Server Support",
    description: "Windows Server is a popular choice for businesses seeking a reliable and user-friendly server operating system. Our server support services for Windows Server encompass installation, configuration, optimization, and ongoing maintenance to ensure that your Windows-based servers operate at peak performance. Whether you're running a small business or a large enterprise, we have the expertise to support your Windows Server environment effectively.",
    icon: <Server className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Linux Server Support",
    description: "Linux is a versatile and scalable operating system favored by many organizations for its stability, security, and flexibility. Our server support services for Linux encompass a wide range of distributions, including Ubuntu, CentOS, Red Hat Enterprise Linux, and more. Whether you're hosting web applications, databases, or cloud services, our Linux experts ensure that your servers are configured, secured, and optimized to meet your specific requirements.",
    icon: <HardDrive className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Other Server Operating Systems",
    description: "In addition to Windows and Linux, we provide server support services for a variety of other operating systems, including FreeBSD, macOS Server, UNIX, and others. Our team has extensive experience working with diverse server environments and can provide the expertise and support needed to ensure the reliability and security of your servers, regardless of the operating system you choose.",
    icon: <Monitor className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Multi-Platform Support",
    description: "Many businesses operate in heterogeneous IT environments, with a mix of Windows, Linux, and other operating systems. Our multi-platform support services cater to the unique needs of these environments, providing seamless integration, interoperability, and support across all platforms. Whether you're running a hybrid cloud environment, a virtualized infrastructure, or a traditional on-premises setup, we have the expertise to support your diverse server environment effectively.",
    icon: <Cloud className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Hardware Procurement and Supply",
    description: "Choosing the right hardware is essential for meeting your business requirements and maximizing productivity. Our procurement experts work closely with leading hardware manufacturers and suppliers to source high-quality computer and server hardware tailored to your specific needs. Whether you're upgrading existing systems or building a new infrastructure from scratch, we ensure that you have access to the latest technology at competitive prices.",
    icon: <Database className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Installation and Configuration",
    description: "Proper installation and configuration are critical to the performance and longevity of your hardware assets. Our team of experienced technicians handles every aspect of the installation process, ensuring that your hardware is set up correctly and optimized for maximum performance. From rack mounting servers to configuring network switches, we ensure that your hardware infrastructure is ready to meet your business demands.",
    icon: <Shield className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Hardware Lifecycle Management",
    description: "Managing the lifecycle of your hardware assets is essential for optimizing performance, controlling costs, and mitigating risks. Our hardware lifecycle management services help you plan, track, and manage your hardware assets from acquisition to retirement. We provide guidance on when to upgrade or replace aging hardware, ensuring that your infrastructure remains modern, secure, and cost-effective.",
    icon: <Laptop className="h-12 w-12 text-orange-500" />
  }
];

const ServerSupportFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience The Hozit Features Difference Today!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Hozit Domain Hosting, we understand that your server infrastructure is critical to the success of your business. 
            That's why we provide comprehensive server support services tailored to your specific needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerSupportFeatures;
