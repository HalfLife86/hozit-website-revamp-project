
import React from 'react';
import { Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Risk Assessment and Analysis",
    description: "We begin by conducting a thorough assessment of your existing security posture, identifying potential vulnerabilities and gaps in your defenses. Our experts analyze your infrastructure, applications, and processes to understand your unique risk landscape."
  },
  {
    title: "Threat Detection and Prevention",
    description: "Leveraging advanced threat intelligence and cutting-edge technologies, we deploy robust detection mechanisms to identify and mitigate potential threats in real-time. From malware and phishing attacks to insider threats, we proactively monitor your environment to thwart attacks before they cause harm."
  },
  {
    title: "Incident Response and Management",
    description: "In the event of a security incident or breach, our rapid incident response team springs into action, minimizing damage and restoring normal operations swiftly. We follow established protocols and best practices to contain the incident, investigate root causes, and implement remediation measures to prevent future occurrences."
  },
  {
    title: "Compliance and Regulatory Compliance",
    description: "Stay compliant with industry regulations and standards effortlessly with our compliance management solutions. Whether it's GDPR, HIPAA, or PCI DSS, we help you navigate the complex regulatory landscape and ensure adherence to mandatory requirements, avoiding costly fines and penalties."
  },
  {
    title: "Security Awareness Training",
    description: "Equip your employees with the knowledge and skills to recognize and mitigate security threats effectively. Our tailored security awareness training programs educate your staff on best practices, security policies, and emerging threats, empowering them to become your first line of defense against cyber attacks."
  },
  {
    title: "Penetration Testing",
    description: "Identify and address vulnerabilities in your network, applications, and infrastructure through our comprehensive penetration testing services. Our certified ethical hackers simulate real-world cyber attacks to uncover weaknesses and provide actionable recommendations to strengthen your defenses."
  },
  {
    title: "Antivirus Sales and Support",
    description: "Protect your endpoints and servers from malware, ransomware, and other malicious threats with our antivirus sales and support services. We offer a range of industry-leading antivirus solutions tailored to your organization's needs, along with ongoing support and maintenance to ensure maximum efficacy."
  },
  {
    title: "Continuous Monitoring and Improvement",
    description: "Cyber security is an ongoing process, and we provide continuous monitoring and improvement services to adapt to emerging threats and evolving business needs. Through regular security assessments, penetration testing, and performance monitoring, we continuously enhance your security posture to stay ahead of cyber adversaries."
  }
];

const CybersecurityFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience The Hozit Features Difference Today!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
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

export default CybersecurityFeatures;
