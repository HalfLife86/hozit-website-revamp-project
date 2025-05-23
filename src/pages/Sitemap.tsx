
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SitemapContent from '@/components/Sitemap/SitemapContent';

const Sitemap = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Sitemap';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <SitemapContent />
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
