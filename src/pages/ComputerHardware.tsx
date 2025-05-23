
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComputerHardwareHero from '@/components/ComputerHardware/Hero';
import ComputerHardwareFeatures from '@/components/ComputerHardware/Features';
import ComputerHardwarePackages from '@/components/ComputerHardware/Packages';
import ComputerHardwareCTA from '@/components/ComputerHardware/CTA';

const ComputerHardware = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Computer Hardware Solutions';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ComputerHardwareHero />
        <ComputerHardwareFeatures />
        <ComputerHardwarePackages />
        <ComputerHardwareCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ComputerHardware;
