
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebDevelopmentTrendsBlog = () => {
  useEffect(() => {
    document.title = 'Top Web Development Trends for 2025 | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay ahead of the curve with these cutting-edge web development trends that are shaping the digital landscape.');
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Web Development Trends"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 15, 2025</span>
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
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Web Development</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Top Web Development Trends for 2025
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                The web development landscape continues to evolve rapidly. Here are the cutting-edge trends that are shaping how we build and experience websites in 2025.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">AI-Powered Development Tools</h2>
              <p>
                Artificial Intelligence is revolutionizing how developers work, from code generation to automated testing and debugging assistance.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Progressive Web Apps (PWAs) Evolution</h2>
              <p>
                PWAs continue to bridge the gap between web and native apps, offering app-like experiences with improved performance and offline capabilities.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Serverless Architecture Adoption</h2>
              <p>
                Serverless computing allows developers to focus on code while cloud providers handle infrastructure management automatically.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Modern JavaScript Frameworks</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">React 18+ Features</h3>
              <p>
                Concurrent rendering, automatic batching, and improved performance optimizations are making React applications faster and more responsive.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Next.js App Router</h3>
              <p>
                The new App Router in Next.js provides better developer experience with improved routing, layouts, and data fetching patterns.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">WebAssembly (WASM) Growth</h2>
              <p>
                WebAssembly enables near-native performance for web applications, opening new possibilities for complex applications in the browser.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Edge Computing Integration</h2>
              <p>
                Edge computing brings computation closer to users, reducing latency and improving performance for global applications.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Sustainable Web Development</h2>
              <p>
                Green coding practices focus on reducing energy consumption and environmental impact of web applications.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Ready for Modern Web Development?</h3>
                <p className="mb-4">
                  HozIT stays current with the latest web development trends to deliver cutting-edge solutions for your business.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/web-development">Explore Our Development Services</Link>
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

export default WebDevelopmentTrendsBlog;
