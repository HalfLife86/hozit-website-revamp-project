
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const domainPricing = [
  { extension: '.co.za', price: 100.80, popular: true, description: 'South African' },
  { extension: '.com', price: 240.08, popular: true, description: 'Global Standard' },
  { extension: '.org', price: 240.08, popular: false, description: 'Organizations' },
  { extension: '.net', price: 288.36, popular: false, description: 'Networks' },
  { extension: '.biz', price: 427.20, popular: false, description: 'Business' },
  { extension: '.info', price: 444.29, popular: false, description: 'Information' },
  { extension: '.mobi', price: 555.36, popular: false, description: 'Mobile Websites' },
  { extension: '.online', price: 360.00, popular: false, description: 'Modern Websites' },
  { extension: '.site', price: 598.08, popular: false, description: 'General Websites' },
  { extension: '.xyz', price: 249.91, popular: false, description: 'Modern & Versatile' },
];

const DomainPricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Domain Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Competitive pricing for all popular domain extensions. All prices include VAT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-orange-50">
                <TableHead className="font-bold">Domain Type</TableHead>
                <TableHead className="font-bold">Description</TableHead>
                <TableHead className="font-bold text-right">Annual Price</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domainPricing.map((domain) => (
                <TableRow key={domain.extension} className={domain.popular ? "bg-orange-50/30" : ""}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {domain.extension}
                      {domain.popular && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-800 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{domain.description}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      <span>R {domain.price.toFixed(2)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button 
                      size="sm" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      asChild
                    >
                      <a 
                        href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Register
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>* Prices displayed are for domain registration for a 1-year period and include VAT.</p>
          <p>* Domain renewal prices may differ from registration prices.</p>
        </div>
      </div>
    </section>
  );
};

export default DomainPricing;
