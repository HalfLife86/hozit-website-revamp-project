
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ITSupportHero from '@/components/ITSupport/Hero';
import ITSupportPackages from '@/components/ITSupport/Packages';
import ITSupportFeatures from '@/components/ITSupport/Features';
import ITSupportCTA from '@/components/ITSupport/CTA';

const ITSupport = () => {
  useEffect(() => {
    document.title = 'IT Support Services South Africa - 24/7 Technical Support & Helpdesk | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional IT support services in South Africa. 24/7 helpdesk, remote support, on-site repairs & technical assistance. Keep your business running with reliable IT support.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'IT support South Africa, technical support, helpdesk services, computer repair, network support, 24/7 IT support');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/it-support');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'IT Support Services South Africa - 24/7 Technical Support | HozIT');
    updateOrCreateMetaProperty('og:description', 'Professional IT support services including 24/7 helpdesk, remote support, and on-site repairs.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/it-support');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ITSupportHero />
        <ITSupportPackages />
        <ITSupportFeatures />
        <ITSupportCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ITSupport;
