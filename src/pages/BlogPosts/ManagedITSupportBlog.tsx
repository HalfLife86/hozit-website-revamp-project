import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ManagedITSupportBlog = () => {
  useEffect(() => {
    document.title = 'How Managed IT Support Can Save Your Business Money | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how outsourcing your IT support needs can lead to significant cost savings while improving efficiency.');
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt="Managed IT Support"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 8, 2025</span>
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
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">IT Support</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                How Managed IT Support Can Save Your Business Money
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Many businesses struggle with IT costs and complexity. Managed IT support offers a cost-effective solution that can significantly reduce expenses while improving efficiency and reliability.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">The True Cost of In-House IT</h2>
              <p>
                Maintaining an in-house IT department involves more than just salaries. Consider recruitment costs, training, benefits, equipment, and the opportunity cost of having key staff handle IT issues instead of core business activities.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Cost Savings with Managed IT Support</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Predictable Monthly Costs</h3>
              <p>
                Replace unpredictable IT expenses with fixed monthly fees that help you budget effectively and avoid surprise costs from system failures or emergency repairs.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Reduced Downtime</h3>
              <p>
                Proactive monitoring and maintenance prevent issues before they cause costly downtime. Every hour of downtime can cost businesses thousands in lost productivity and revenue.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. Access to Enterprise-Level Expertise</h3>
              <p>
                Get access to a team of specialists for the cost of a single employee. This includes expertise in cybersecurity, networking, cloud services, and emerging technologies.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Operational Efficiency Benefits</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">24/7 Monitoring and Support</h3>
              <p>
                Round-the-clock monitoring ensures issues are detected and resolved quickly, often before users even notice a problem.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Strategic Technology Planning</h3>
              <p>
                Managed IT providers help you plan technology investments strategically, ensuring you get the best value and avoid costly mistakes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Security and Compliance</h2>
              <p>
                Managed IT support includes comprehensive cybersecurity measures and helps ensure compliance with industry regulations, protecting you from costly data breaches and legal issues.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Scalability and Flexibility</h2>
              <p>
                As your business grows, managed IT support scales with you without the need to hire additional staff or invest in new infrastructure upfront.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Ready to Reduce Your IT Costs?</h3>
                <p className="mb-4">
                  HozIT's managed IT support services can help you save money while improving your technology infrastructure and security.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/it-support">Learn About Our IT Support</Link>
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

export default ManagedITSupportBlog;
