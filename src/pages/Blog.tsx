
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogContent from '@/components/Blog/BlogContent';

const Blog = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HozIT - Blog';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
