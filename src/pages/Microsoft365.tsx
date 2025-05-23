
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Microsoft365Hero from '@/components/Microsoft365/Hero';
import Microsoft365Services from '@/components/Microsoft365/Services';
import Microsoft365Packages from '@/components/Microsoft365/Packages';
import Microsoft365CTA from '@/components/Microsoft365/CTA';

const Microsoft365 = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Microsoft 365 Setup and Migration';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Microsoft365Hero />
        <Microsoft365Services />
        <Microsoft365Packages />
        <Microsoft365CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Microsoft365;
