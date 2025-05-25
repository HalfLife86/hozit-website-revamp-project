
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/Contact/ContactHero';
import ContactContent from '@/components/Contact/ContactContent';

const Contact = () => {
  // Enhanced SEO optimization
  React.useEffect(() => {
    document.title = 'Contact HozIT - Get Professional IT Solutions & Support';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact HozIT for professional IT solutions, web hosting, cybersecurity, and technical support. Get expert assistance for all your business technology needs in South Africa.');
    }

    // Add keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'contact HozIT, IT support contact, web hosting support, technical assistance, IT consultation, South Africa IT services');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/contact');

    // Update Open Graph tags
    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'Contact HozIT - Professional IT Solutions & Support');
    updateOrCreateMetaProperty('og:description', 'Get in touch with HozIT for expert IT solutions, web hosting, cybersecurity, and technical support services.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/contact');
    updateOrCreateMetaProperty('og:type', 'website');

    // Add structured data for contact page
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const contactData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact HozIT",
      "description": "Contact page for HozIT professional IT solutions and services",
      "url": "https://hozit.co.za/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "HozIT",
        "url": "https://hozit.co.za"
      }
    };
    
    structuredData.textContent = JSON.stringify(contactData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
