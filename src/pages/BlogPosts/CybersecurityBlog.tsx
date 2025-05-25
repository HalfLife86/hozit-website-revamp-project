import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/Blog/BlogPostHero';
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
        <BlogPostHero
          title="Cybersecurity Best Practices for Small Businesses"
          date="May 10, 2025"
          author="HozIT Team"
          category="Cybersecurity"
          imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
          imageAlt="Cybersecurity"
        />
        
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
