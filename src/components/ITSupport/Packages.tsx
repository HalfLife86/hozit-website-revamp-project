
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ITSupportPackages = () => {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">IT Support Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our IT support packages are tailored for different company sizes, providing the right level of support for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <Card className="border-2 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-2 pt-8">
              <div className="mx-auto bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Basic IT Support</CardTitle>
              <Badge className="mt-2 bg-gray-200 text-gray-800">5 to 8 Users</Badge>
              <div className="mt-4">
                <span className="text-3xl font-bold">R6,500.00</span>
                <span className="text-gray-600 ml-1">/month (Ex Tax)</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Helpdesk Support:</strong> Remote assistance during business hours (9 AM to 5 PM).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Email Support:</strong> Setup, configuration, and troubleshooting.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Software Updates:</strong> Regular updates and patches.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Antivirus Protection:</strong> Installation and management.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Backup Management:</strong> Setup and monitoring.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/basic-it-support" target="_blank" rel="noopener noreferrer">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Standard Package */}
          <Card className="border-2 border-orange-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-1 font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center pb-2 pt-10">
              <div className="mx-auto bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Standard IT Support</CardTitle>
              <Badge className="mt-2 bg-gray-200 text-gray-800">8 to 20 Users</Badge>
              <div className="mt-4">
                <span className="text-3xl font-bold">R8,500.00</span>
                <span className="text-gray-600 ml-1">/month (Ex Tax)</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-gray-700 font-medium">Includes all features of the Basic package, plus:</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>On-Site Support:</strong> Pre-determined hours included per month.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Network Monitoring:</strong> Continuous infrastructure monitoring.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>IT Consultation:</strong> Quarterly meetings with IT experts.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Priority Response:</strong> Faster guaranteed response times.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/basic-it-support" target="_blank" rel="noopener noreferrer">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Package */}
          <Card className="border-2 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-2 pt-8">
              <div className="mx-auto bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Advanced IT Support</CardTitle>
              <Badge className="mt-2 bg-gray-200 text-gray-800">20 to 50 Users</Badge>
              <div className="mt-4">
                <span className="text-3xl font-bold">R15,800.00</span>
                <span className="text-gray-600 ml-1">/month (Ex Tax)</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-gray-700 font-medium">Includes all features of the Standard package, plus:</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Unlimited On-Site Support:</strong> Flexible scheduling and extended hours.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Security Management:</strong> Advanced security measures and audits.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Customized Solutions:</strong> Tailored IT solutions with dedicated account managers.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/basic-it-support" target="_blank" rel="noopener noreferrer">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ITSupportPackages;
