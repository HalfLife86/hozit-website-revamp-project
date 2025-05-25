
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/WebsiteHosting/Hero';
import ServicesOverview from '@/components/WebsiteHosting/ServicesOverview';
import HostingPlans from '@/components/WebsiteHosting/HostingPlans';
import KeyFeatures from '@/components/WebsiteHosting/KeyFeatures';
import DomainManagement from '@/components/WebsiteHosting/DomainManagement';
import CTASection from '@/components/WebsiteHosting/CTASection';

const WebsiteHosting = () => {
  // Enhanced SEO optimization
  React.useEffect(() => {
    document.title = 'Best Website Hosting South Africa 2025 - Fast SSD Hosting from R59/month | HozIT';
    
    // Update meta description with compelling copy and keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium website hosting South Africa with 99.9% uptime, free SSL certificates, SSD storage & 24/7 support. Affordable hosting plans from R59/month. Get fast, reliable web hosting today!');
    }

    // Enhanced keywords with long-tail variations
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'website hosting South Africa, web hosting, SSD hosting, WordPress hosting, domain hosting, cheap hosting, reliable hosting, fast hosting, hosting plans, web hosting services');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/website-hosting');

    // Update Open Graph tags with more compelling titles
    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Best Website Hosting South Africa 2025 - Fast SSD Hosting | HozIT');
    updateOrCreateMetaProperty('og:description', 'Premium website hosting with 99.9% uptime, free SSL certificates, SSD storage & 24/7 support. Affordable hosting plans from R59/month.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/website-hosting');
    updateOrCreateMetaProperty('og:type', 'service');
    updateOrCreateMetaProperty('og:image', 'https://hozit.co.za/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png');

    // Enhanced structured data for better search results
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Hosting Services South Africa",
      "description": "Premium website hosting with SSD storage, 99.9% uptime guarantee, free SSL certificates and 24/7 technical support",
      "provider": {
        "@type": "Organization",
        "name": "HozIT",
        "url": "https://hozit.co.za",
        "logo": "https://hozit.co.za/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+27-11-123-4567",
          "contactType": "customer service"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      },
      "serviceType": "Web Hosting",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "59",
        "highPrice": "1399",
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    };
    
    structuredData.textContent = JSON.stringify(serviceData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesOverview />
        <HostingPlans />
        <KeyFeatures />
        <DomainManagement />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteHosting;
