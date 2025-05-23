
import React from 'react';
import { Check } from 'lucide-react';

const DomainFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">All-Inclusive Domain Features</h2>
            <p className="text-lg text-gray-600">
              When you register a domain with us, you get more than just a web address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Free DNS Management",
              "Domain Forwarding",
              "Email Forwarding",
              "Domain Lock Protection",
              "Easy Control Panel",
              "Auto-Renewal Options",
              "Quick Domain Transfers",
              "24/7 Support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainFeatures;
