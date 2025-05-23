
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DomainExtensions = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Popular Domain Extensions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of domain extensions to suit your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { ext: ".com", desc: "Global Standard" },
            { ext: ".co.za", desc: "South Africa" },
            { ext: ".net", desc: "Networks" },
            { ext: ".org", desc: "Organizations" },
            { ext: ".info", desc: "Information" },
            { ext: ".io", desc: "Tech Companies" },
            { ext: ".store", desc: "E-commerce" },
            { ext: ".online", desc: "Web Presence" },
            { ext: ".tech", desc: "Technology" },
            { ext: ".africa", desc: "African Businesses" }
          ].map((domain, index) => (
            <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-orange-600">{domain.ext}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-500">{domain.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <a 
              href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Register Your Domain Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomainExtensions;
