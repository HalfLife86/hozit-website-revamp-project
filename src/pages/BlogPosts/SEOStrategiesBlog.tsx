import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/Blog/BlogPostHero';
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
        <BlogPostHero
          title="Essential SEO Strategies to Boost Your Website Ranking"
          date="May 12, 2025"
          author="HozIT Team"
          category="SEO"
          imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          imageAlt="SEO Strategies"
        />
        
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
