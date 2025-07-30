
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PackageCard = ({ 
  title, 
  price, 
  features,
  deliveryDays,
  revisions,
  description,
  url
}: { 
  title: string;
  price: string;
  features: string[];
  deliveryDays: number;
  revisions?: number;
  description: string;
  url: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6 border-b">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 mb-1">ZAR</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{deliveryDays} Days Delivery</span>
          </li>
          {revisions && (
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{revisions} Revisions</span>
            </li>
          )}
        </ul>
        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">Order Now</a>
        </Button>
      </div>
    </div>
  );
};

const AppDevelopmentPackages = () => {
  const packages = [
    {
      title: "App Dev Basic Package",
      price: "R20,000.00",
      description: "Barebone app with splash screen and icon along with 2 screens No designs no backend",
      features: [
        "Functional Android App",
        "Functional IOS App",
        "Splash screen",
        "App icon",
        "Source code"
      ],
      deliveryDays: 7,
      revisions: undefined,
      url: "https://hozit.co.za/whmcs/index.php?rp=/store/app-development/app-dev-basic-package"
    },
    {
      title: "App Dev Standard Package",
      price: "R71,000.00",
      description: "4-6 Screens no designs basic firebase backend with 2 screens No designs no backend",
      features: [
        "Functional Android App",
        "Functional IOS App",
        "App icon",
        "Splash screen",
        "Ad network integration",
        "Source code"
      ],
      deliveryDays: 21,
      revisions: 2,
      url: "https://hozit.co.za/whmcs/index.php?rp=/store/app-development/app-dev-standard-package"
    },
    {
      title: "App Dev Premium Package",
      price: "R145,000.00",
      description: "6-10 screens, data integration no designs support backend integration will be provided",
      features: [
        "Functional Android App",
        "Functional IOS App",
        "App submission",
        "App icon",
        "Splash screen",
        "Ad network integration",
        "Source code"
      ],
      deliveryDays: 45,
      revisions: 2,
      url: "https://hozit.co.za/whmcs/index.php?rp=/store/app-development/app-dev-premium-package"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our App Development Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package that aligns with your vision and requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              deliveryDays={pkg.deliveryDays}
              revisions={pkg.revisions}
              url={pkg.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentPackages;
