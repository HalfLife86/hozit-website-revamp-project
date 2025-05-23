
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from 'lucide-react';

const NetworkDesignPackages = () => {
  const packages = [
    {
      title: "Basic Package",
      description: "For 2 to 5 users",
      features: [
        "Includes initial consultation",
        "Basic network design",
        "Architecture blueprint"
      ],
      price: "R4,000 ZAR",
      priceNote: "(Ex TAX)"
    },
    {
      title: "Standard Package",
      description: "For 5 to 10 users",
      features: [
        "Includes everything in the Basic Package",
        "Advanced network configurations",
        "Security assessments"
      ],
      price: "R8,000 ZAR",
      priceNote: "(Ex TAX)",
      popular: true
    },
    {
      title: "Advanced Package",
      description: "For 10 to 15 users",
      features: [
        "Includes everything in the Standard Package",
        "Comprehensive network implementation support",
        "Ongoing optimization"
      ],
      price: "R15,000 ZAR",
      priceNote: "(Ex TAX)"
    },
    {
      title: "Enterprise Package",
      description: "Custom solutions for more than 15 users",
      features: [
        "Includes everything in the Premium Package",
        "Customized solutions for large-scale networks",
        "Dedicated support"
      ],
      price: "R30,000 ZAR",
      priceNote: "(Ex TAX)"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network Design Packages</h2>
          <p className="text-lg text-gray-600">Choose the perfect package that fits your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className={`flex flex-col h-full ${pkg.popular ? 'border-it-accent shadow-lg' : 'border-gray-200'}`}>
              <CardHeader className={pkg.popular ? 'bg-it-accent bg-opacity-10' : ''}>
                <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">
                  {pkg.price} <span className="text-sm font-normal text-gray-500">{pkg.priceNote}</span>
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-it-blue hover:bg-it-blue-light">Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkDesignPackages;
