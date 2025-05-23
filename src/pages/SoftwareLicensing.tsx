
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SoftwareLicensingHero from '@/components/SoftwareLicensing/Hero';
import SoftwareLicensingServices from '@/components/SoftwareLicensing/Services';
import SoftwareLicensingPackages from '@/components/SoftwareLicensing/Packages';
import SoftwareLicensingCTA from '@/components/SoftwareLicensing/CTA';

const SoftwareLicensing = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Software Sales and Licensing';
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
