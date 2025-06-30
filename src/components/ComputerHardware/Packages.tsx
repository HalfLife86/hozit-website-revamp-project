
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packageData = [
  {
    title: "Starter Workstation",
    price: "R8,999",
    description: "Perfect for general office tasks and basic productivity",
    features: [
      "Intel Core i5 or AMD Ryzen 5 Processor",
      "8GB RAM",
      "256GB SSD",
      "Windows 11 Professional",
      "24-inch Full HD Monitor",
      "Wireless Keyboard and Mouse",
      "1-year warranty"
    ]
  },
  {
    title: "Professional Workstation",
    price: "R14,999",
    description: "Ideal for demanding business applications and multitasking",
    features: [
      "Intel Core i7 or AMD Ryzen 7 Processor",
      "16GB RAM",
      "512GB NVMe SSD",
      "Windows 11 Professional",
      "27-inch QHD Monitor",
      "Wireless Keyboard and Mouse",
      "Productivity Software Package",
      "2-year warranty with priority support"
    ],
    highlighted: true
  },
  {
    title: "Performance Workstation",
    price: "R22,999",
    description: "For resource-intensive tasks and specialized applications",
    features: [
      "Intel Core i9 or AMD Ryzen 9 Processor",
      "32GB RAM",
      "1TB NVMe SSD + 2TB HDD",
      "Windows 11 Professional",
      "Dual 27-inch QHD Monitors",
      "Premium Ergonomic Keyboard and Mouse",
      "Professional Software Suite",
      "3-year warranty with on-site support",
      "Data migration service included"
    ]
  }
];

const ComputerHardwarePackages = () => {
  return (
    <section className="py-16 bg-it-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Computer Hardware Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our pre-configured systems or contact us for custom solutions tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packageData.map((pkg, index) => (
            <Card key={index} className={`flex flex-col ${pkg.highlighted ? 'ring-2 ring-it-accent shadow-lg' : 'shadow'}`}>
              <CardHeader className={pkg.highlighted ? 'bg-it-accent text-white' : ''}>
                <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                <CardDescription className={pkg.highlighted ? 'text-white/90' : ''}>
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold my-4 text-gray-900">{pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${pkg.highlighted ? 'bg-it-accent hover:bg-amber-600' : 'bg-it-blue hover:bg-it-blue-dark'} text-white`}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComputerHardwarePackages;
