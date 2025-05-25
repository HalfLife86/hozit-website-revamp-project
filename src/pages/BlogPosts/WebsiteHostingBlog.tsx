import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebsiteHostingBlog = () => {
  useEffect(() => {
    document.title = 'Why Your Business Needs Professional Website Hosting | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the advantages of reliable website hosting for your business and why it matters for your online presence.');
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Website Hosting"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 20, 2025</span>
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
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Website Hosting</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Why Your Business Needs Professional Website Hosting
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                In today's digital landscape, your website is often the first point of contact between your business and potential customers. The hosting solution you choose can make or break your online presence.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">The Foundation of Your Online Success</h2>
              <p>
                Professional website hosting is more than just storing your website files on a server. It's about ensuring your business maintains a reliable, fast, and secure online presence that builds trust with your customers and supports your growth objectives.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Benefits of Professional Hosting</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Reliability and Uptime</h3>
              <p>
                Professional hosting providers offer 99.9% uptime guarantees, ensuring your website is accessible to customers around the clock. Every minute of downtime can result in lost sales and damaged reputation.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Enhanced Performance</h3>
              <p>
                Fast loading times are crucial for user experience and SEO rankings. Professional hosting utilizes optimized servers, content delivery networks (CDNs), and caching technologies to deliver lightning-fast performance.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. Advanced Security</h3>
              <p>
                Protect your business and customer data with enterprise-grade security features including SSL certificates, regular security updates, malware scanning, and DDoS protection.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">4. Scalability</h3>
              <p>
                As your business grows, your hosting needs will evolve. Professional hosting solutions offer seamless scalability to accommodate increased traffic and resource requirements.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">What to Look for in a Hosting Provider</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 technical support</li>
                <li>Regular automated backups</li>
                <li>Multiple data center locations</li>
                <li>User-friendly control panel</li>
                <li>Email hosting capabilities</li>
                <li>One-click application installations</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Making the Right Choice</h2>
              <p>
                Choosing the right hosting provider is an investment in your business's future. Don't let poor hosting hold back your online success. Partner with a provider that understands your business needs and can grow with you.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Ready to Upgrade Your Hosting?</h3>
                <p className="mb-4">
                  HozIT offers professional website hosting solutions designed for South African businesses. Our hosting packages include everything you need to succeed online.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/website-hosting">Explore Our Hosting Plans</Link>
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

export default WebsiteHostingBlog;
