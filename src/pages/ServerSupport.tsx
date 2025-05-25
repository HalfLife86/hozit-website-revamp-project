
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServerSupportHero from '@/components/ServerSupport/Hero';
import ServerSupportSolutions from '@/components/ServerSupport/Solutions';
import ServerSupportFeatures from '@/components/ServerSupport/Features';
import ServerSupportCTA from '@/components/ServerSupport/CTA';

const ServerSupport = () => {
  useEffect(() => {
    document.title = 'Server Support & Maintenance Services South Africa - Enterprise Solutions | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional server support and maintenance services in South Africa. Windows & Linux server management, monitoring, security updates & 24/7 support for enterprise businesses.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'server support South Africa, server maintenance, Windows server, Linux server, server monitoring, enterprise IT support');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/server-support');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Server Support & Maintenance Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Professional server support including Windows & Linux server management, monitoring, and 24/7 maintenance.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/server-support');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServerSupportHero />
        <ServerSupportSolutions />
        <ServerSupportFeatures />
        <ServerSupportCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServerSupport;
