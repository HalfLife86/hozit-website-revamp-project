
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Microsoft365Packages = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Microsoft 365 Packages</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer flexible plans to suit businesses of all sizes and needs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Package */}
          <Card className="border-2 border-gray-200 hover:border-it-accent transition-all duration-300">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Starter Package</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-it-accent">R8,990</span>
                <span className="text-gray-600 ml-2">set up fee once-off</span>
              </div>
              <div className="mt-1">
                <span className="text-lg font-bold">R399</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
              <p className="text-gray-700 mt-3">
                Perfect for small teams and startups
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Microsoft 365 Business Basic setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Email migration for up to 5 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Microsoft Teams and OneDrive configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">1-hour remote support post-migration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Basic domain & DNS setup</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-it-accent hover:bg-amber-600 text-white" asChild>
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/microsoft-365/starter-package" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Business Growth Package */}
          <Card className="border-2 border-it-accent shadow-lg transform scale-105">
            <CardHeader>
              <div className="bg-it-accent text-white py-1 px-4 rounded-full text-sm font-bold inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Business Growth Package</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-it-accent">R11,999</span>
                <span className="text-gray-600 ml-2">set up fee once-off</span>
              </div>
              <div className="mt-1">
                <span className="text-lg font-bold">R6,349</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
              <p className="text-gray-700 mt-3">
                Ideal for growing businesses needing full functionality
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Microsoft 365 Business Standard or Premium setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Email, OneDrive & SharePoint migration (up to 15 users)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Advanced domain configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Security & compliance configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">3 hours remote support post-migration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Basic staff training session</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-it-accent hover:bg-amber-600 text-white" asChild>
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/microsoft-365/business-growth-package" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Package */}
          <Card className="border-2 border-gray-200 hover:border-it-accent transition-all duration-300">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Enterprise Package</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-it-accent">Custom</span>
                <span className="text-gray-600 ml-2">Quote</span>
              </div>
              <p className="text-gray-700 mt-3">
                Tailored for large teams or complex environments
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Full Microsoft 365 deployment (Business Premium / Enterprise)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Migration of email, files, SharePoint, Teams, and third-party data</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Hybrid environment configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Security & data loss prevention setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">On-site or remote staff training</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Ongoing support contract option</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-it-accent hover:bg-amber-600 text-white" asChild>
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/microsoft-365/enterprise-package" target="_blank" rel="noopener noreferrer">Get Quote</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">Ongoing Microsoft 365 management & support</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">Microsoft Teams integration & training</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">Data backup solutions for Microsoft 365</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">Security and compliance consulting</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">VoIP integration with Microsoft Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Packages;
