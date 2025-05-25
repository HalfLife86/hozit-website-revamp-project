
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { hostingPlans } from './hostingPlansData';

const HostingPlans = () => {
  return (
    <section className="py-16 bg-orange-50" id="hosting-plans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Best Website Hosting Plans South Africa</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect web hosting plan for your needs. All hosting packages include 24/7 support, free SSL certificates, and advanced security features.</p>
        
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Hosting Features</TableHead>
                {hostingPlans.map((plan, index) => (
                  <TableHead key={index} className="text-center">
                    <div className={`px-4 py-2 ${plan.name === "Standard" ? "bg-amber-500 text-white rounded-t-lg" : ""}`}>
                      <h3 className="text-xl font-bold">{plan.name} Hosting</h3>
                      <div className="mt-1">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm">{plan.period}</span>
                      </div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">SSD Web Space</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[0].split("SSD Web Space")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Monthly Bandwidth</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[1].split("Bandwidth")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Hosted Domains</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[2].split("Domain")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">FTP Accounts</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[3].split("Max FTP Account")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Mailing Lists</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[4].split("Max Mailing List")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Subdomains</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[5].split("Subdomain")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">SQL Databases</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[6].split("Max SQL Database")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Email Accounts</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">{plan.features[7].split("Email Account")[0]}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Free SSL Certificate</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-label="SSL certificate included" />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Order Hosting</TableCell>
                {hostingPlans.map((plan, index) => (
                  <TableCell key={index} className="text-center">
                    <Button 
                      className={`${plan.name === "Standard" ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                      asChild
                      aria-label={`Order ${plan.name} hosting plan`}
                    >
                      <a href={plan.orderLink} target="_blank" rel="noopener noreferrer">
                        Order Now
                      </a>
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile optimized hosting plans view */}
        <div className="md:hidden">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4">
              {hostingPlans.map((plan, index) => (
                <TabsTrigger key={index} value={plan.name.toLowerCase()} aria-label={`${plan.name} hosting plan tab`}>
                  {plan.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {hostingPlans.map((plan, index) => (
              <TabsContent key={index} value={plan.name.toLowerCase()}>
                <div className={`rounded-lg overflow-hidden border ${plan.name === "Standard" ? 'border-amber-500 shadow-xl' : 'border-gray-200'}`}>
                  <div className={`p-6 ${plan.name === "Standard" ? 'bg-amber-500 text-white' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name} Website Hosting</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm">{plan.period}</span>
                    </div>
                    <Button 
                      className={`w-full ${plan.name === "Standard" ? 'bg-white text-amber-500 hover:bg-gray-100' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                      asChild
                      aria-label={`Order ${plan.name} hosting plan`}
                    >
                      <a href={plan.orderLink} target="_blank" rel="noopener noreferrer">
                        Order Now
                      </a>
                    </Button>
                  </div>
                  
                  <ul className="p-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
