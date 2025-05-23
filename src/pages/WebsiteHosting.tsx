
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Server, Database, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebsiteHosting = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'HozIT - Website Hosting';
  }, []);

  const hostingPlans = [
    {
      name: "Basic",
      price: "R199",
      period: "/month",
      features: [
        "5GB Storage",
        "Unlimited Bandwidth",
        "5 Email Accounts",
        "1 Free Domain",
        "SSL Certificate",
        "24/7 Support"
      ],
      description: "Perfect for small personal websites and blogs.",
      popular: false
    },
    {
      name: "Business",
      price: "R499",
      period: "/month",
      features: [
        "20GB Storage",
        "Unlimited Bandwidth",
        "20 Email Accounts",
        "2 Free Domains",
        "SSL Certificate",
        "24/7 Priority Support",
        "Daily Backups",
        "E-commerce Ready"
      ],
      description: "Ideal for small to medium businesses and online stores.",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R999",
      period: "/month",
      features: [
        "100GB Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "5 Free Domains",
        "Wildcard SSL",
        "24/7 Premium Support",
        "Hourly Backups",
        "Advanced Security",
        "Dedicated Resources",
        "CDN Integration"
      ],
      description: "For large businesses with high traffic demands and advanced needs.",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Website Hosting Solutions</h1>
              <p className="text-xl mb-8">Fast, secure, and reliable hosting for your website with 99.9% uptime guarantee.</p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">Get Started</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Hosting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                <p className="text-gray-600">Our state-of-the-art servers ensure your website loads quickly for your visitors.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable Infrastructure</h3>
                <p className="text-gray-600">Built on redundant systems with automatic failover for maximum uptime.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Security</h3>
                <p className="text-gray-600">Protection against DDoS attacks, malware, and other online threats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Hosting Plans</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect hosting plan for your needs. All plans include 24/7 support, free SSL, and a 30-day money-back guarantee.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hostingPlans.map((plan, index) => (
                <div key={index} className={`rounded-lg overflow-hidden border ${plan.popular ? 'border-amber-500 shadow-xl relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="bg-amber-500 text-white text-center py-1 absolute top-0 inset-x-0">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <Button className={`w-full ${plan.popular ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                      Select Plan
                    </Button>
                    
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us with their hosting needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Contact Sales</Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Sign Up Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteHosting;
