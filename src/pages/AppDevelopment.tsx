
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppDevelopmentHero from '@/components/AppDevelopment/Hero';
import AppDevelopmentPackages from '@/components/AppDevelopment/Packages';
import AppDevelopmentFeatures from '@/components/AppDevelopment/Features';
import AppDevelopmentCTA from '@/components/AppDevelopment/CTA';

const AppDevelopment = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - App Development';
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
