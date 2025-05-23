
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
  { extension: '.com', price: 289, popular: true, description: 'Global Standard' },
  { extension: '.co.za', price: 149, popular: false, description: 'South African' },
  { extension: '.net', price: 319, popular: false, description: 'Networks' },
  { extension: '.org', price: 319, popular: false, description: 'Organizations' },
  { extension: '.info', price: 339, popular: false, description: 'Information' },
  { extension: '.africa', price: 599, popular: false, description: 'African Continent' },
  { extension: '.io', price: 899, popular: false, description: 'Tech Companies' },
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
                      <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                      <span>R {domain.price}</span>
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
