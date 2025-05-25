
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SEOStrategiesBlog = () => {
  useEffect(() => {
    document.title = 'Essential SEO Strategies to Boost Your Website Ranking | HozIT Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Implement these proven SEO techniques to improve your website visibility and drive more organic traffic.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="SEO Strategies"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>May 12, 2025</span>
              </div>
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2" />
                <span>HozIT Team</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">SEO</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Essential SEO Strategies to Boost Your Website Ranking
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Search Engine Optimization is crucial for your online success. These proven SEO strategies will help improve your website's visibility and drive more organic traffic to your business.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Understanding SEO Fundamentals</h2>
              <p>
                SEO is about making your website more visible and attractive to search engines like Google. It involves optimizing various elements to help search engines understand and rank your content higher.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">On-Page SEO Strategies</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Keyword Research and Optimization</h3>
              <p>
                Identify relevant keywords your target audience searches for and naturally incorporate them into your content, titles, and meta descriptions.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Title Tags and Meta Descriptions</h3>
              <p>
                Craft compelling title tags under 60 characters and meta descriptions under 160 characters that accurately describe your page content.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. Header Structure</h3>
              <p>
                Use proper header hierarchy (H1, H2, H3) to organize your content and help search engines understand your page structure.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Technical SEO Essentials</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Page Speed Optimization</h3>
              <p>
                Ensure your website loads quickly on all devices. Use compressed images, minimize code, and leverage browser caching.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Mobile Responsiveness</h3>
              <p>
                With mobile-first indexing, ensure your website provides an excellent experience on all device sizes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Content Marketing for SEO</h2>
              <p>
                Create high-quality, valuable content that answers your audience's questions and provides solutions to their problems.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Local SEO for South African Businesses</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claim and optimize your Google Business Profile</li>
                <li>Include location-specific keywords</li>
                <li>Encourage customer reviews</li>
                <li>Ensure NAP consistency across directories</li>
              </ul>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Need Professional SEO Help?</h3>
                <p className="mb-4">
                  HozIT offers comprehensive SEO services to help your business rank higher and attract more customers online.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/seo">Explore Our SEO Services</Link>
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

export default SEOStrategiesBlog;
