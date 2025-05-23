
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebDevHero from '@/components/WebDevelopment/Hero';
import WebDevPackages from '@/components/WebDevelopment/Packages';
import WebDevFeatures from '@/components/WebDevelopment/Features';
import WebDevTypes from '@/components/WebDevelopment/Types';
import WebDevCTA from '@/components/WebDevelopment/CTA';

const WebDevelopment = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Web Development Services';
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
