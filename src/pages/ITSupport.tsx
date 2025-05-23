
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ITSupportHero from '@/components/ITSupport/Hero';
import ITSupportPackages from '@/components/ITSupport/Packages';
import ITSupportFeatures from '@/components/ITSupport/Features';
import ITSupportCTA from '@/components/ITSupport/CTA';

const ITSupport = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - IT Technical Support';
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
