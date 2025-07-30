
import React from 'react';
import { Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const basicFeatures = [
  'Jr Engineer',
  '40 hours',
  'Web / Mobile Application Security',
  'Source Code Analysis',
  'Network / Information Security',
  'Cloud Security',
  'Malware / Vulnerability Analysis',
  'SSL Pinning Bypass',
  'Penetration Testing',
  'Reverse Engineering',
  'Active Directory',
  'Active / Passive Reconnaissance',
  'Static / Dynamic Analysis',
  'API Security Testing',
  'Endpoint Security',
  'Risk Assessment / Incident Response',
  'Threat Modeling',
  'Open-Source Intelligence (OSINT)',
  'Machine Learning',
];

const standardFeatures = [
  'Senior Engineer',
  'SSD Web Space',
  '40hr cybersecurity ciso and red team services',
  'Senior Tasks like assessments, tuning, training, project management',
  'Small company size',
  'Medium company size',
  'Large company size',
  '1 report',
  '10 Days Delivery',
];

const premiumFeatures = [
  'CISO',
  '40 hours',
  'CISO tasks like Assessments, engineering, Architecture, project planning',
  'Small company size',
  'Medium company size',
  'Large company size',
  '1 report',
  '10 Days Delivery',
];

const CybersecurityPackages = () => {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Cyber Security Solutions</h2>
          <p className="text-xl text-gray-600">
            In today's digital landscape, safeguarding your organization against cyber threats is paramount. 
            At Hozit Domain Hosting, we understand the complex and ever-evolving nature of cybersecurity risks. 
            Our comprehensive approach to cyber security encompasses a range of proactive measures to protect 
            your sensitive data, critical systems, and reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Basic Package */}
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Basic</CardTitle>
              <div className="mt-6">
                <span className="text-3xl font-bold text-blue-600">R150,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/cyber-security-solutions/basic" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Standard Package */}
          <Card className="border-2 border-blue-400 shadow-lg relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-40 bg-blue-600 text-white text-center py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center bg-blue-50 pb-6">
              <CardTitle className="text-2xl font-bold">Standard</CardTitle>
              <div className="mt-6">
                <span className="text-3xl font-bold text-blue-600">R230,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/cyber-security-solutions/standard" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Package */}
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <div className="mt-6">
                <span className="text-3xl font-bold text-blue-600">R250,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/cyber-security-solutions/premium" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityPackages;
