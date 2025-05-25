
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CybersecurityHero from '@/components/Cybersecurity/Hero';
import CybersecurityPackages from '@/components/Cybersecurity/Packages';
import CybersecurityFeatures from '@/components/Cybersecurity/Features';
import DisasterRecovery from '@/components/Cybersecurity/DisasterRecovery';
import CybersecurityCTA from '@/components/Cybersecurity/CTA';

const Cybersecurity = () => {
  useEffect(() => {
    document.title = 'Cybersecurity Services South Africa - Business Security Solutions | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive cybersecurity services in South Africa. Protect your business with advanced threat protection, security audits, compliance & incident response. Expert cybersecurity solutions.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'cybersecurity South Africa, network security, data protection, security audits, threat protection, cyber security services');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/cybersecurity');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Cybersecurity Services South Africa - Business Security Solutions | HozIT');
    updateOrCreateMetaProperty('og:description', 'Comprehensive cybersecurity services including threat protection, security audits, and compliance solutions.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/cybersecurity');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CybersecurityHero />
        <CybersecurityPackages />
        <CybersecurityFeatures />
        <DisasterRecovery />
        <CybersecurityCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
