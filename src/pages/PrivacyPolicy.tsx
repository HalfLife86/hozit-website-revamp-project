
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyContent from '@/components/PrivacyPolicy/PrivacyContent';
import PrivacyPolicyHero from '@/components/PrivacyPolicy/PrivacyPolicyHero';

const PrivacyPolicy = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Privacy Policy';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PrivacyPolicyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
