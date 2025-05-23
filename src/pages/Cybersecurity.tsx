
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CybersecurityHero from '@/components/Cybersecurity/Hero';
import CybersecurityPackages from '@/components/Cybersecurity/Packages';
import CybersecurityFeatures from '@/components/Cybersecurity/Features';
import DisasterRecovery from '@/components/Cybersecurity/DisasterRecovery';
import CybersecurityCTA from '@/components/Cybersecurity/CTA';

const Cybersecurity = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CybersecurityHero />
        <CybersecurityPackages />
        <CybersecurityFeatures />
        <DisasterRecovery />
        <CybersecurityCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
