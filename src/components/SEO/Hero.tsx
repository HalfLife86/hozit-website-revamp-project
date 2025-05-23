
import React from 'react';

const SEOHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            SEO Services: Enhance Your Online Visibility
          </h1>
          <p className="text-xl mb-8">
            In the vast digital landscape, standing out amidst the competition requires more than just a stunning website—it demands strategic visibility. At Hozit Domain Hosting, we specialize in Search Engine Optimization (SEO) services designed to elevate your online presence and drive organic traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#packages" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              View SEO Packages
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

export default SEOHero;
