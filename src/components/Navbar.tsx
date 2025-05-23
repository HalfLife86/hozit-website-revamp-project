
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png" 
                alt="HozIT Logo" 
                className="h-14 md:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link text-black">Home</Link>
            <Link to="/website-hosting" className="nav-link text-black">Website Hosting</Link>
            <Link to="/domain-registration" className="nav-link text-black">Domain Registration</Link>
            <Link to="/web-development" className="nav-link text-black">Web Development</Link>
            <Link to="/seo" className="nav-link text-black">SEO</Link>
            <Link to="/cybersecurity" className="nav-link text-black">Cybersecurity</Link>
            <Link to="/it-support" className="nav-link text-black">IT Support</Link>
            <Link to="/server-support" className="nav-link text-black">Server Support</Link>
            <a href="#contact" className="nav-link text-black">Contact</a>
            <Button className="btn-primary ml-4">Get Quote</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-it-accent"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg animate-fade-in">
              <Link to="/" className="nav-link text-black block px-3 py-2">Home</Link>
              <Link to="/website-hosting" className="nav-link text-black block px-3 py-2">Website Hosting</Link>
              <Link to="/domain-registration" className="nav-link text-black block px-3 py-2">Domain Registration</Link>
              <Link to="/web-development" className="nav-link text-black block px-3 py-2">Web Development</Link>
              <Link to="/seo" className="nav-link text-black block px-3 py-2">SEO</Link>
              <Link to="/cybersecurity" className="nav-link text-black block px-3 py-2">Cybersecurity</Link>
              <Link to="/it-support" className="nav-link text-black block px-3 py-2">IT Support</Link>
              <Link to="/server-support" className="nav-link text-black block px-3 py-2">Server Support</Link>
              <a href="#contact" className="nav-link text-black block px-3 py-2">Contact</a>
              <Button className="btn-primary mt-2 w-full">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
