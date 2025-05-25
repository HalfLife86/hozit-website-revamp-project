
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHero from '@/components/SEO/Hero';
import SEOPackages from '@/components/SEO/Packages';
import SEOFeatures from '@/components/SEO/Features';
import SEOCTA from '@/components/SEO/CTA';

const SEO = () => {
  // Enhanced SEO optimization
  React.useEffect(() => {
    document.title = 'SEO Services South Africa - Search Engine Optimization | HozIT';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional SEO services in South Africa. Improve your search rankings, drive organic traffic, and grow your business with HozIT\'s expert search engine optimization solutions.');
    }

    // Add keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'SEO services, search engine optimization, South Africa SEO, Google rankings, organic traffic, local SEO, content marketing, link building');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/seo');

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

    updateOrCreateMetaProperty('og:title', 'Professional SEO Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Boost your online visibility with professional SEO services. Expert search engine optimization to improve rankings and drive organic traffic.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/seo');
    updateOrCreateMetaProperty('og:type', 'service');

    // Add structured data for service
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services",
      "description": "Professional search engine optimization services to improve website rankings and drive organic traffic",
      "provider": {
        "@type": "Organization",
        "name": "HozIT",
        "url": "https://hozit.co.za"
      },
      "areaServed": "ZA",
      "serviceType": "Search Engine Optimization"
    };
    
    structuredData.textContent = JSON.stringify(serviceData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SEOHero />
        <SEOPackages />
        <SEOFeatures />
        <SEOCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
