
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PopupOffer from '@/components/PopupOffer';

const Index = () => {
  // Smooth scrolling functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Enhanced SEO optimization
  useEffect(() => {
    // Update document title
    document.title = 'HozIT - Professional IT Solutions & Services | Web Hosting, Cybersecurity, IT Support';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'HozIT provides comprehensive IT solutions including web hosting, domain registration, cybersecurity, IT support, and web development services for businesses across South Africa. Get reliable IT solutions today.');
    }

    // Add keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'IT solutions, web hosting, domain registration, cybersecurity, IT support, web development, South Africa, server support, Microsoft 365, network design');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/');

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

    updateOrCreateMetaProperty('og:title', 'HozIT - Professional IT Solutions & Services');
    updateOrCreateMetaProperty('og:description', 'Comprehensive IT solutions including web hosting, cybersecurity, IT support, and web development services for businesses across South Africa.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/');
    updateOrCreateMetaProperty('og:type', 'website');
    updateOrCreateMetaProperty('og:locale', 'en_ZA');

    // Add structured data for organization
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "HozIT",
      "description": "Professional IT solutions and services provider",
      "url": "https://hozit.co.za",
      "logo": "https://hozit.co.za/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "ZA"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA"
      },
      "sameAs": [
        "https://www.hozit.co.za"
      ]
    };
    
    structuredData.textContent = JSON.stringify(organizationData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PopupOffer />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
