import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CybersecurityBlog = () => {
  useEffect(() => {
    document.title = 'Cybersecurity Best Practices for Small Businesses | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Protect your business from cyber threats with these essential security measures that every small business should implement.');
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Cybersecurity"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
              />
              
              <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 10, 2025</span>
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
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Cybersecurity</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Cybersecurity Best Practices for Small Businesses
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Small businesses are increasingly becoming targets for cybercriminals. Implementing robust cybersecurity measures is no longer optional—it's essential for protecting your business, customers, and reputation.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Why Small Businesses Are at Risk</h2>
              <p>
                Cybercriminals often target small businesses because they typically have fewer security measures in place compared to larger enterprises, yet they handle valuable data and financial information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Essential Cybersecurity Measures</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Implement Strong Password Policies</h3>
              <p>
                Require complex passwords and enable two-factor authentication across all business accounts. Consider using a password manager to generate and store secure passwords.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Keep Software Updated</h3>
              <p>
                Regularly update all software, operating systems, and applications. Enable automatic updates where possible to ensure you receive critical security patches promptly.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. Install Comprehensive Antivirus Protection</h3>
              <p>
                Deploy enterprise-grade antivirus and anti-malware solutions across all devices. Ensure real-time scanning is enabled and definitions are automatically updated.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">4. Secure Your Network</h3>
              <p>
                Use firewalls, secure Wi-Fi with WPA3 encryption, and consider implementing a VPN for remote access. Segregate your network to limit potential damage from breaches.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5. Regular Data Backups</h3>
              <p>
                Implement automated backup solutions that store data both locally and in the cloud. Test backup restoration regularly to ensure data integrity.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Employee Training and Awareness</h2>
              <p>
                Your employees are your first line of defense. Regular training on identifying phishing emails, social engineering tactics, and safe browsing practices is crucial.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Creating an Incident Response Plan</h2>
              <p>
                Prepare for potential security incidents with a clear response plan that includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Immediate containment procedures</li>
                <li>Communication protocols</li>
                <li>Data recovery steps</li>
                <li>Legal and regulatory compliance requirements</li>
                <li>Post-incident analysis and improvement</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Compliance and Regulations</h2>
              <p>
                Stay informed about data protection regulations like POPIA (Protection of Personal Information Act) in South Africa and ensure your security measures meet compliance requirements.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Need Help Securing Your Business?</h3>
                <p className="mb-4">
                  HozIT offers comprehensive cybersecurity solutions designed specifically for small and medium businesses. Protect your business with our expert security services.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/cybersecurity">Explore Security Solutions</Link>
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

export default CybersecurityBlog;
