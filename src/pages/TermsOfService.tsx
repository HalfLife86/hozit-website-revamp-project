
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TermsContent from '@/components/TermsOfService/TermsContent';
import TermsOfServiceHero from '@/components/TermsOfService/TermsOfServiceHero';

const TermsOfService = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Terms of Service';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TermsOfServiceHero />
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
