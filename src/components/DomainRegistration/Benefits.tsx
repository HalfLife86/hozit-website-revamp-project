
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Globe, Shield } from 'lucide-react';

const DomainBenefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Our Domain Registration Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A great domain name is the foundation of your online presence. We make the registration process simple and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Easy Domain Search</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our intuitive domain search tool helps you quickly find the perfect domain name for your business or project.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Extensive TLD Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Choose from hundreds of domain extensions including .com, .net, .org, .co.za and many specialized TLDs.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Privacy Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Protect your personal information with our domain privacy protection services, keeping your details secure.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DomainBenefits;
