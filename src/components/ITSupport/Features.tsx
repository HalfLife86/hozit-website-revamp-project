
import React from 'react';
import { Shield, PhoneCall, Monitor, Wrench, Settings, Users, BarChart, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Proactive Maintenance",
    description: "Prevention is better than cure, and our proactive maintenance approach ensures that potential issues are identified and addressed before they escalate into major problems. We conduct regular health checks, software updates, and system optimizations to keep your IT environment in peak condition.",
    icon: Wrench
  },
  {
    title: "24/7 Help Desk Support",
    description: "Technical issues can arise at any time, disrupting your operations and productivity. That's why our 24/7 help desk support is always available to assist you, no matter when or where an issue occurs. Our team of knowledgeable technicians is just a phone call or email away, ready to provide prompt resolutions and peace of mind.",
    icon: PhoneCall
  },
  {
    title: "Remote Troubleshooting",
    description: "Many IT issues can be resolved remotely, saving you time and minimizing disruptions to your business. Our remote troubleshooting capabilities enable us to diagnose and fix problems efficiently, without the need for an on-site visit. Through secure remote access tools, we can address issues swiftly, ensuring minimal downtime for your business.",
    icon: Monitor
  },
  {
    title: "On-Site Support",
    description: "For issues that require hands-on assistance, our on-site support services have you covered. Whether it's hardware installations, network configurations, or infrastructure upgrades, our experienced technicians will visit your location to provide the necessary support and ensure that everything is up and running smoothly.",
    icon: Users
  },
  {
    title: "Customized Support Plans",
    description: "We understand that every business is unique, with its own set of IT requirements and challenges. That's why we offer customized support plans tailored to your specific needs and budget. Whether you need basic troubleshooting, comprehensive IT management, or project-based assistance, we have a support plan that's right for you.",
    icon: Settings
  },
  {
    title: "Vendor Management",
    description: "Dealing with multiple vendors can be time-consuming and complex. Our vendor management services streamline the process by serving as a single point of contact for all your IT vendors. From software providers to hardware manufacturers, we handle communication, coordination, and issue resolution, allowing you to focus on your business priorities.",
    icon: Shield
  },
  {
    title: "Scalable Solutions",
    description: "As your business grows and evolves, so do your IT needs. Our scalable support solutions grow with you, adapting to changes in your technology environment and business requirements. Whether you're expanding your operations, adding new users, or integrating new systems, we're here to support your growth every step of the way.",
    icon: BarChart
  },
  {
    title: "Integrated IT Ecosystem",
    description: "We create a seamless IT ecosystem by integrating all your technology components to work together efficiently. From hardware and software to networks and cloud services, we ensure that all elements of your IT infrastructure operate in harmony, maximizing performance and minimizing disruptions.",
    icon: Layers
  }
];

const ITSupportFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience The Hozit Features Difference Today!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSupportFeatures;
