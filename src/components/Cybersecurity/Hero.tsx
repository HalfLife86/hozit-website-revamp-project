
import React from 'react';

const CybersecurityHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Cyber Security
          </h1>
          <p className="text-xl mb-8">
            In today's digital landscape, safeguarding your organization against cyber threats is paramount. 
            At Hozit Domain Hosting, we understand the complex and ever-evolving nature of cybersecurity risks. 
            Our comprehensive approach to cyber security encompasses a range of proactive measures to protect 
            your sensitive data, critical systems, and reputation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#packages" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              View Cybersecurity Packages
            </a>
            <a 
              href="https://www.hozit.co.za/whmcs/contact.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-orange-400 shadow-md"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHero;
