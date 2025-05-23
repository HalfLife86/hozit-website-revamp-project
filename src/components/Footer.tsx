
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png" 
                alt="HozIT Logo" 
                className="h-16"
              />
            </div>
            <p className="text-black mb-4">
              Providing professional IT solutions and services to businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/people/Hozit-Domain-Hosting/100086561992144/?mibextid=PtKPJ9" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/hozit_sa" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hozit_sa/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/hozit-domain-hosting" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">IT Support</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Cloud Services</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Data Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-black hover:text-gray-700 transition-colors">About Us</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Careers</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-black hover:text-gray-700 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-black">145 Second Street<br />Parkmore Sandton, Johannesburg, 2196</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-black">+27 66 527 5917</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-black">info@hozit.co.za</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              © {currentYear} HozIT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms-of-service" className="text-sm text-black hover:text-gray-700 transition-colors">Terms of Service</Link>
              <Link to="/privacy-policy" className="text-sm text-black hover:text-gray-700 transition-colors">Privacy Policy</Link>
              <Link to="/sitemap" className="text-sm text-black hover:text-gray-700 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
