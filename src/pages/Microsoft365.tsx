
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Microsoft365Hero from '@/components/Microsoft365/Hero';
import Microsoft365Services from '@/components/Microsoft365/Services';
import Microsoft365Packages from '@/components/Microsoft365/Packages';
import Microsoft365CTA from '@/components/Microsoft365/CTA';

const Microsoft365 = () => {
  useEffect(() => {
    document.title = 'Microsoft 365 Setup & Migration Services South Africa - Office 365 Experts | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert Microsoft 365 setup and migration services in South Africa. Office 365 implementation, Teams deployment, SharePoint configuration & ongoing support from certified professionals.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'Microsoft 365 South Africa, Office 365 setup, Microsoft Teams, SharePoint, Exchange Online, Microsoft 365 migration, Office 365 support');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/microsoft-365');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Microsoft 365 Setup & Migration Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Expert Microsoft 365 implementation including Office 365 setup, Teams deployment, and SharePoint configuration.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/microsoft-365');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Microsoft365Hero />
        <Microsoft365Services />
        <Microsoft365Packages />
        <Microsoft365CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Microsoft365;
