
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Globe, Search, Shield, Check } from 'lucide-react';

const DomainRegistration = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Domain Registration';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Domain Registration Services</h1>
              <p className="text-xl text-gray-600 mb-8">Secure your perfect domain name and establish your online identity</p>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                asChild
              >
                <a 
                  href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Search & Register Your Domain Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Domain Benefits */}
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

        {/* Domain Extensions */}
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

        {/* Domain Features */}
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

        {/* CTA Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Domain Name?</h2>
              <p className="text-xl mb-8">
                Take the first step toward establishing your online presence today.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-orange-600 hover:bg-orange-50 border-white"
                asChild
              >
                <a 
                  href="https://www.hozit.co.za/whmcs/cart.php?a=add&domain=register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Search Available Domains Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DomainRegistration;
