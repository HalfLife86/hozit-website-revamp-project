
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DomainRegistrationHero from '@/components/DomainRegistration/Hero';
import DomainBenefits from '@/components/DomainRegistration/Benefits';
import DomainExtensions from '@/components/DomainRegistration/Extensions';
import DomainFeatures from '@/components/DomainRegistration/Features';
import DomainCTA from '@/components/DomainRegistration/CTA';

const DomainRegistration = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Domain Registration';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DomainRegistrationHero />
        <DomainBenefits />
        <DomainExtensions />
        <DomainFeatures />
        <DomainCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DomainRegistration;
