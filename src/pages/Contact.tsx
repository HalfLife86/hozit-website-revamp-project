
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactContent from '@/components/Contact/ContactContent';

const Contact = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'Contact Us - HozIT';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
