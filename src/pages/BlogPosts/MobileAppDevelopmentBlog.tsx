import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MobileAppDevelopmentBlog = () => {
  useEffect(() => {
    document.title = 'Mobile App Development: Native vs. Hybrid Approaches | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understand the differences between native and hybrid app development to make the right choice for your business needs.');
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                alt="Mobile App Development"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 3, 2025</span>
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
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">App Development</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Mobile App Development: Native vs. Hybrid Approaches
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Choosing the right mobile app development approach is crucial for your project's success. Understanding the differences between native and hybrid development helps you make an informed decision.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Native App Development</h2>
              <p>
                Native apps are built specifically for one platform using platform-specific programming languages and tools.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advantages of Native Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Superior performance and responsiveness</li>
                <li>Full access to device features and APIs</li>
                <li>Better user experience with platform-specific UI</li>
                <li>Enhanced security and reliability</li>
                <li>Offline functionality</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Disadvantages of Native Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Higher development costs</li>
                <li>Longer development time</li>
                <li>Need separate teams for iOS and Android</li>
                <li>Maintenance complexity</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Hybrid App Development</h2>
              <p>
                Hybrid apps use web technologies (HTML, CSS, JavaScript) wrapped in a native container to run on multiple platforms.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advantages of Hybrid Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cost-effective development</li>
                <li>Faster time to market</li>
                <li>Single codebase for multiple platforms</li>
                <li>Easier maintenance and updates</li>
                <li>Access to device features through plugins</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Disadvantages of Hybrid Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Potential performance issues</li>
                <li>Limited access to platform-specific features</li>
                <li>Dependency on third-party frameworks</li>
                <li>May not feel completely native</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">When to Choose Native Development</h2>
              <p>
                Consider native development when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Performance is critical (gaming, AR/VR apps)</li>
                <li>You need extensive platform-specific features</li>
                <li>Budget allows for separate platform development</li>
                <li>Long-term app strategy with regular updates</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">When to Choose Hybrid Development</h2>
              <p>
                Consider hybrid development when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Budget and timeline are constrained</li>
                <li>App functionality is relatively simple</li>
                <li>Quick market validation is needed</li>
                <li>Content-focused or business apps</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Popular Development Frameworks</h2>
              <p>
                <strong>Native:</strong> Swift/Objective-C (iOS), Kotlin/Java (Android)
              </p>
              <p>
                <strong>Hybrid:</strong> React Native, Flutter, Ionic, Xamarin
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Need Help Choosing?</h3>
                <p className="mb-4">
                  HozIT's mobile app development team can help you choose the right approach and build a successful mobile app for your business.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/app-development">Explore App Development</Link>
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

export default MobileAppDevelopmentBlog;
