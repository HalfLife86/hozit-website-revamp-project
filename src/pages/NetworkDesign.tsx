
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NetworkDesignHero from '@/components/NetworkDesign/Hero';
import NetworkDesignPackages from '@/components/NetworkDesign/Packages';
import NetworkDesignFeatures from '@/components/NetworkDesign/Features';
import NetworkDesignCTA from '@/components/NetworkDesign/CTA';

const NetworkDesign = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Network Design and Implementation';
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
