
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppDevelopmentHero from '@/components/AppDevelopment/Hero';
import AppDevelopmentPackages from '@/components/AppDevelopment/Packages';
import AppDevelopmentFeatures from '@/components/AppDevelopment/Features';
import AppDevelopmentCTA from '@/components/AppDevelopment/CTA';

const AppDevelopment = () => {
  useEffect(() => {
    document.title = 'Mobile App Development Services South Africa - iOS & Android Apps | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile app development services in South Africa. Custom iOS & Android apps, cross-platform development, UI/UX design & app store optimization.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'app development South Africa, mobile apps, iOS development, Android development, custom apps, mobile app developers');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/app-development');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Mobile App Development Services South Africa - iOS & Android | HozIT');
    updateOrCreateMetaProperty('og:description', 'Professional mobile app development including custom iOS & Android apps, cross-platform solutions, and UI/UX design.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/app-development');
    updateOrCreateMetaProperty('og:type', 'service');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppDevelopmentHero />
        <AppDevelopmentPackages />
        <AppDevelopmentFeatures />
        <AppDevelopmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
