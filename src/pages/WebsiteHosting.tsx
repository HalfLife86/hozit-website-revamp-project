
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
    document.title = 'Best Website Hosting South Africa - Fast & Reliable Web Hosting | HozIT';
    
    // Update meta description with compelling copy and keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get the best website hosting in South Africa with HozIT. Fast SSD hosting, 99.9% uptime guarantee, free SSL certificates, and 24/7 support. Choose from affordable shared, VPS, and dedicated hosting plans.');
    }

    // Enhanced keywords with long-tail variations
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'best website hosting South Africa, web hosting services, fast SSD hosting, reliable web hosting, cheap hosting plans, shared hosting SA, VPS hosting, dedicated servers, website hosting with SSL, 24/7 hosting support, WordPress hosting');

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

    updateOrCreateMetaProperty('og:title', 'Best Website Hosting South Africa - Fast & Reliable | HozIT');
    updateOrCreateMetaProperty('og:description', 'Premium web hosting services with SSD storage, 99.9% uptime, free SSL, and expert support. Affordable hosting plans for businesses of all sizes.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/website-hosting');
    updateOrCreateMetaProperty('og:type', 'service');

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
      "name": "Website Hosting Services",
      "description": "Professional web hosting services with SSD storage, 99.9% uptime guarantee, and 24/7 technical support",
      "provider": {
        "@type": "Organization",
        "name": "HozIT",
        "url": "https://hozit.co.za",
        "logo": "https://hozit.co.za/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png"
      },
      "areaServed": "ZA",
      "serviceType": "Web Hosting",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "59",
        "highPrice": "1399",
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock"
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
