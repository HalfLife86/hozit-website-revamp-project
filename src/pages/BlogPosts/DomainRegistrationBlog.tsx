
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DomainRegistrationBlog = () => {
  useEffect(() => {
    document.title = 'Choosing the Right Domain Name for Your Business | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how to select the perfect domain name that aligns with your brand and helps customers find you online.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              
              <img 
                src="/lovable-uploads/f95ab797-93f5-4d89-930b-cc53d3990a38.png"
                alt="Domain Registration"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 18, 2025</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>HozIT Team</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Domain Registration</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Choosing the Right Domain Name for Your Business
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Your domain name is your digital address and often the first impression customers have of your business online. Choosing the right domain is crucial for building brand recognition and ensuring customers can easily find you.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of a Good Domain Name</h2>
              <p>
                A well-chosen domain name serves as the foundation of your online brand identity. It affects everything from search engine rankings to customer trust and marketing effectiveness.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Principles for Domain Selection</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Keep It Simple and Memorable</h3>
              <p>
                Choose a domain that's easy to spell, pronounce, and remember. Avoid hyphens, numbers, and complex spellings that might confuse potential visitors.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Reflect Your Brand</h3>
              <p>
                Your domain should align with your business name or clearly indicate what you do. This helps with brand recognition and search engine optimization.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. Choose the Right Extension</h3>
              <p>
                While .com remains the gold standard, consider local extensions like .co.za for South African businesses to establish local credibility.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">4. Consider SEO Benefits</h3>
              <p>
                Including relevant keywords in your domain can provide SEO benefits, but don't sacrifice brand identity for keyword stuffing.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using trademark-protected names</li>
                <li>Making it too long or complicated</li>
                <li>Choosing a name that limits future growth</li>
                <li>Ignoring social media handle availability</li>
                <li>Not securing multiple extensions</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Domain Extensions for South African Businesses</h2>
              <p>
                Consider these popular extensions for local businesses:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>.co.za</strong> - Perfect for commercial South African businesses</li>
                <li><strong>.com</strong> - Global recognition and trust</li>
                <li><strong>.org</strong> - Ideal for non-profit organizations</li>
                <li><strong>.net</strong> - Good alternative when .com isn't available</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Protecting Your Brand</h2>
              <p>
                Consider registering multiple variations of your domain name and different extensions to protect your brand from competitors and cybersquatters.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Ready to Register Your Domain?</h3>
                <p className="mb-4">
                  HozIT makes domain registration simple and affordable. Search for your perfect domain name and secure it today with our easy registration process.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/domain-registration">Search Available Domains</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DomainRegistrationBlog;
