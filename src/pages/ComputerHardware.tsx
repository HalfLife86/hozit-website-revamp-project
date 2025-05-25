
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComputerHardwareHero from '@/components/ComputerHardware/Hero';
import ComputerHardwareFeatures from '@/components/ComputerHardware/Features';
import ComputerHardwarePackages from '@/components/ComputerHardware/Packages';
import ComputerHardwareCTA from '@/components/ComputerHardware/CTA';

const ComputerHardware = () => {
  useEffect(() => {
    document.title = 'Computer Hardware Solutions South Africa - Business IT Equipment | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Quality computer hardware solutions for South African businesses. Desktops, laptops, servers, networking equipment & enterprise IT hardware with installation and support services.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'computer hardware South Africa, business computers, servers, laptops, desktops, IT equipment, hardware procurement, enterprise hardware');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/computer-hardware');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Computer Hardware Solutions South Africa - Business IT Equipment | HozIT');
    updateOrCreateMetaProperty('og:description', 'Quality computer hardware including desktops, laptops, servers, and networking equipment for South African businesses.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/computer-hardware');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ComputerHardwareHero />
        <ComputerHardwareFeatures />
        <ComputerHardwarePackages />
        <ComputerHardwareCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ComputerHardware;
