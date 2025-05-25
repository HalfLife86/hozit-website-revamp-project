
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DomainRegistrationHero from '@/components/DomainRegistration/Hero';
import DomainBenefits from '@/components/DomainRegistration/Benefits';
import DomainExtensions from '@/components/DomainRegistration/Extensions';
import DomainFeatures from '@/components/DomainRegistration/Features';
import DomainPricing from '@/components/DomainRegistration/Pricing';
import DomainCTA from '@/components/DomainRegistration/CTA';

const DomainRegistration = () => {
  useEffect(() => {
    document.title = 'Domain Registration South Africa - Register .co.za & .com Domains | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Register your perfect domain name with HozIT. .co.za domains from R99/year, .com domains from R199/year. Fast registration, free DNS management & 24/7 support.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'domain registration South Africa, .co.za domains, .com domains, domain names, cheap domains, domain search, domain transfer');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/domain-registration');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Domain Registration South Africa - Register .co.za & .com Domains | HozIT');
    updateOrCreateMetaProperty('og:description', 'Register your perfect domain name with HozIT. .co.za domains from R99/year, .com domains from R199/year.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/domain-registration');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DomainRegistrationHero />
        <DomainBenefits />
        <DomainExtensions />
        <DomainPricing />
        <DomainFeatures />
        <DomainCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DomainRegistration;
