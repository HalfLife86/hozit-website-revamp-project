
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebDevHero from '@/components/WebDevelopment/Hero';
import WebDevPackages from '@/components/WebDevelopment/Packages';
import WebDevFeatures from '@/components/WebDevelopment/Features';
import WebDevTypes from '@/components/WebDevelopment/Types';
import WebDevCTA from '@/components/WebDevelopment/CTA';

const WebDevelopment = () => {
  useEffect(() => {
    document.title = 'Professional Web Development Services South Africa - Custom Websites | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert web development services in South Africa. Custom websites, e-commerce solutions, responsive design & SEO optimization. Transform your business with professional web development.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'web development South Africa, custom websites, e-commerce development, responsive web design, WordPress development, web developers');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/web-development');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Professional Web Development Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Expert web development services including custom websites, e-commerce solutions, and responsive design.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/web-development');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <WebDevHero />
        <WebDevPackages />
        <WebDevFeatures />
        <WebDevTypes />
        <WebDevCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
