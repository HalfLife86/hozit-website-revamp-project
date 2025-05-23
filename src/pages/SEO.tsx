
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHero from '@/components/SEO/Hero';
import SEOPackages from '@/components/SEO/Packages';
import SEOFeatures from '@/components/SEO/Features';
import SEOCTA from '@/components/SEO/CTA';

const SEO = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SEOHero />
        <SEOPackages />
        <SEOFeatures />
        <SEOCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
