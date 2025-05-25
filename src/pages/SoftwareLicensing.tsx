
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SoftwareLicensingHero from '@/components/SoftwareLicensing/Hero';
import SoftwareLicensingServices from '@/components/SoftwareLicensing/Services';
import SoftwareLicensingPackages from '@/components/SoftwareLicensing/Packages';
import SoftwareLicensingCTA from '@/components/SoftwareLicensing/CTA';

const SoftwareLicensing = () => {
  useEffect(() => {
    document.title = 'Software Sales & Licensing South Africa - Business Software Solutions | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Software sales and licensing services in South Africa. Microsoft licenses, antivirus software, business applications & compliance management with expert consultation and support.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'software licensing South Africa, Microsoft licenses, business software, antivirus software, software sales, software compliance, enterprise software');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/software-licensing');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Software Sales & Licensing South Africa - Business Software | HozIT');
    updateOrCreateMetaProperty('og:description', 'Software licensing services including Microsoft licenses, antivirus software, and business applications with compliance management.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/software-licensing');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SoftwareLicensingHero />
        <SoftwareLicensingServices />
        <SoftwareLicensingPackages />
        <SoftwareLicensingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SoftwareLicensing;
