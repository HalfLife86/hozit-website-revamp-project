
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogContent from '@/components/Blog/BlogContent';

const Blog = () => {
  // Enhanced SEO optimization
  useEffect(() => {
    document.title = 'HozIT Blog - IT Solutions Insights, Tips & Industry News';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay updated with the latest IT solutions insights, cybersecurity tips, web development trends, and technology news from HozIT experts. Professional IT guidance for businesses.');
    }

    // Add keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'IT blog, technology news, cybersecurity tips, web development, server management, IT support tips, business technology');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/blog');

    // Update Open Graph tags
    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'HozIT Blog - IT Solutions Insights & Technology News');
    updateOrCreateMetaProperty('og:description', 'Expert insights on IT solutions, cybersecurity, web development, and business technology from HozIT professionals.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/blog');
    updateOrCreateMetaProperty('og:type', 'website');

    // Add structured data for blog
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const blogData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "HozIT Blog",
      "description": "Professional IT solutions insights and technology news",
      "url": "https://hozit.co.za/blog",
      "publisher": {
        "@type": "Organization",
        "name": "HozIT",
        "logo": "https://hozit.co.za/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png"
      }
    };
    
    structuredData.textContent = JSON.stringify(blogData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
