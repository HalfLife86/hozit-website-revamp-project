
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const basicFeatures = [
  'Initial website audit',
  'Keyword research and analysis',
  'On-page SEO optimization',
  'Meta tags optimization',
  'Basic link building',
  'Monthly performance report',
  'Google Analytics setup',
];

const standardFeatures = [
  'All features from the Basic Package',
  'Competitor analysis',
  'Content optimization',
  'Blog writing (2 posts per month)',
  'Local SEO optimization',
  'Advanced link building',
  'Monthly strategy call',
];

const premiumFeatures = [
  'All features from the Standard Package',
  'Comprehensive technical SEO audit',
  'Advanced keyword targeting',
  'Blog writing (4 posts per month)',
  'Enhanced local SEO with Google My Business optimization',
  'High-authority link building',
  'Dedicated account manager',
  'Bi-weekly performance report and strategy call',
];

const SEOPackages = () => {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">SEO Solutions</h2>
          <p className="text-xl text-gray-600">
            Each package is designed to provide increasing levels of SEO service and support, ensuring that your website can grow and compete effectively in search engine rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Basic Package */}
          <Card className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Basic SEO Package</CardTitle>
              <div className="mt-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <span className="text-3xl font-bold text-orange-600">R10,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-600">R3000.00</span>
                  <span className="text-gray-500 ml-1">ZAR /month</span>
                </div>
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
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <a href="https://www.hozit.co.za/whmcs/contact.php" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Standard Package */}
          <Card className="border-2 border-orange-400 shadow-lg relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-40 bg-orange-600 text-white text-center py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center bg-orange-50 pb-6">
              <CardTitle className="text-2xl font-bold">Standard SEO Package</CardTitle>
              <div className="mt-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <span className="text-3xl font-bold text-orange-600">R12,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-600">R3600.00</span>
                  <span className="text-gray-500 ml-1">ZAR /month</span>
                </div>
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
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <a href="https://www.hozit.co.za/whmcs/contact.php" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Package */}
          <Card className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Premium SEO Package</CardTitle>
              <div className="mt-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <span className="text-3xl font-bold text-orange-600">R14,400.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-600">R4320.00</span>
                  <span className="text-gray-500 ml-1">ZAR /month</span>
                </div>
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
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <a href="https://www.hozit.co.za/whmcs/contact.php" target="_blank" rel="noopener noreferrer">
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

export default SEOPackages;
