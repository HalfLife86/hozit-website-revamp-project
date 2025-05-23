
import React from 'react';
import { Link } from 'react-router-dom';

const SitemapContent = () => {
  const sitemapLinks = [
    { name: 'Home', path: '/' },
    { name: 'Website Hosting', path: '/website-hosting' },
    { name: 'Domain Registration', path: '/domain-registration' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'SEO', path: '/seo' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'IT Support', path: '/it-support' },
    { name: 'Server Support', path: '/server-support' },
    { name: 'App Development', path: '/app-development' },
    { name: 'Network Design', path: '/network-design' },
    { name: 'Microsoft 365', path: '/microsoft-365' },
    { name: 'Computer Hardware', path: '/computer-hardware' },
    { name: 'Software Licensing', path: '/software-licensing' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our sitemap. Use this page to navigate to any section of our website.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">All Pages</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitemapContent;
