
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
    document.title = 'Web Hosting South Africa - Reliable Website Hosting Services | HozIT';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web hosting services in South Africa. Fast, secure, and reliable website hosting with 99.9% uptime guarantee. Choose from shared, VPS, and dedicated hosting plans.');
    }

    // Add keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'web hosting, website hosting, South Africa hosting, shared hosting, VPS hosting, dedicated servers, reliable hosting, fast hosting');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/website-hosting');

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

    updateOrCreateMetaProperty('og:title', 'Professional Web Hosting Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Fast, secure, and reliable web hosting services with 99.9% uptime guarantee. Multiple hosting plans to suit your business needs.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/website-hosting');
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
      "name": "Website Hosting Services",
      "description": "Professional web hosting services with reliable performance and 99.9% uptime guarantee",
      "provider": {
        "@type": "Organization",
        "name": "HozIT",
        "url": "https://hozit.co.za"
      },
      "areaServed": "ZA",
      "serviceType": "Web Hosting"
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
