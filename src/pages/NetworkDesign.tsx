
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NetworkDesignHero from '@/components/NetworkDesign/Hero';
import NetworkDesignPackages from '@/components/NetworkDesign/Packages';
import NetworkDesignFeatures from '@/components/NetworkDesign/Features';
import NetworkDesignCTA from '@/components/NetworkDesign/CTA';

const NetworkDesign = () => {
  useEffect(() => {
    document.title = 'Network Design & Implementation Services South Africa - Enterprise Networking | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional network design and implementation services in South Africa. Enterprise networking, LAN/WAN setup, wireless networks, network security & infrastructure planning.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'network design South Africa, network implementation, enterprise networking, LAN setup, WAN configuration, wireless networks, network infrastructure');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/network-design');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Network Design & Implementation Services South Africa | HozIT');
    updateOrCreateMetaProperty('og:description', 'Professional network design including enterprise networking, LAN/WAN setup, and wireless network implementation.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/network-design');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NetworkDesignHero />
        <NetworkDesignPackages />
        <NetworkDesignFeatures />
        <NetworkDesignCTA />
      </main>
      <Footer />
    </div>
  );
};

export default NetworkDesign;
