
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/WebsiteHosting/Hero';
import ServicesOverview from '@/components/WebsiteHosting/ServicesOverview';
import HostingPlans from '@/components/WebsiteHosting/HostingPlans';
import KeyFeatures from '@/components/WebsiteHosting/KeyFeatures';
import DomainManagement from '@/components/WebsiteHosting/DomainManagement';
import CTASection from '@/components/WebsiteHosting/CTASection';

const WebsiteHosting = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'HozIT - Website Hosting';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesOverview />
        <HostingPlans />
        <KeyFeatures />
        <DomainManagement />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteHosting;
