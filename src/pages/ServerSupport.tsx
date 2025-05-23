
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServerSupportHero from '@/components/ServerSupport/Hero';
import ServerSupportSolutions from '@/components/ServerSupport/Solutions';
import ServerSupportFeatures from '@/components/ServerSupport/Features';
import ServerSupportCTA from '@/components/ServerSupport/CTA';

const ServerSupport = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Server Support';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServerSupportHero />
        <ServerSupportSolutions />
        <ServerSupportFeatures />
        <ServerSupportCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServerSupport;
