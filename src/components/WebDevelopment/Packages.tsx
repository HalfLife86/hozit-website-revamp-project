
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const packageFeatures = {
  basic: [
    'Functional website',
    '5 pages',
    'Responsive design',
    'Content upload',
    'Opt-in form',
    'Autoresponder integration',
    'Hosting setup',
    'Social media icons',
    '5 Days Delivery',
    'Unlimited Revisions'
  ],
  standard: [
    'Functional website',
    '10 pages',
    'Responsive design',
    'Content upload',
    'Opt-in form',
    'Autoresponder integration',
    'Hosting setup',
    'Social media icons',
    '7 Days Delivery',
    'Unlimited Revisions',
    'Free .co.za and .com domain'
  ],
  premium: [
    'Functional website',
    '5 pages',
    'Responsive design',
    'Content upload',
    'E-commerce functionality',
    'Payment processing',
    'Opt-in form',
    'Autoresponder integration',
    'Hosting setup',
    'Social media icons',
    '10 Days Delivery',
    'Unlimited Revisions'
  ]
};

const WebDevPackages = () => {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Web Design Packages</h2>
          <p className="text-xl text-gray-600">
            Looking for a memorable, modern, professional branding? We've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Basic Package */}
          <Card className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Website Basic Package</CardTitle>
              <CardDescription className="text-base mt-2">
                Responsive WordPress Website with forms, social links, google map, and high quality images
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-orange-600">R5,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {packageFeatures.basic.map((feature, index) => (
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
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-design-packages/basic-package" target="_blank" rel="noopener noreferrer">
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
              <CardTitle className="text-2xl font-bold">Website Standard Package</CardTitle>
              <CardDescription className="text-base mt-2">
                Modern WordPress website with all basic package services + blogs and SEO optimization
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-orange-600">R8,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {packageFeatures.standard.map((feature, index) => (
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
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-design-packages/standard-package" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Package */}
          <Card className="border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center bg-gray-50 pb-6">
              <CardTitle className="text-2xl font-bold">Website Premium Package</CardTitle>
              <CardDescription className="text-base mt-2">
                Extreme WordPress website with all standard package services + ecommerce functionality and support.
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-orange-600">R15,000.00</span>
                <span className="text-gray-500 ml-1">ZAR</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {packageFeatures.premium.map((feature, index) => (
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
                <a href="https://www.hozit.co.za/whmcs/index.php?rp=/store/web-design-packages/advanced-basic-package" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Experience The Hozit Features Difference Today!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WebDevPackages;

