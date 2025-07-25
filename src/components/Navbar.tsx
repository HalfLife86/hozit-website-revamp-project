
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  // Determine which logo to display based on scroll state
  const logoSrc = isScrolled 
    ? "/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png" // Original logo for white background
    : "/lovable-uploads/03851d91-e80c-415c-a2ab-43d544d4a905.png"; // New logo with .co.za for orange hero sections

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
                src={logoSrc}
                alt="HozIT Logo" 
                className="h-6 md:h-8"
                width="72"
                height="29"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`nav-link font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>Home</Link>
            <Link to="/about" className={`nav-link font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>About</Link>
            
            {/* Services Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`nav-link font-bold flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-md shadow-lg p-2">
                <DropdownMenuItem asChild>
                  <Link to="/website-hosting" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Website Hosting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/domain-registration" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Domain Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/web-development" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">SEO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cybersecurity" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Cybersecurity</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/it-support" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">IT Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/server-support" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Server Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/app-development" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">APP Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/network-design" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Network Design</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/microsoft-365" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Microsoft 365 Setup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/computer-hardware" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Computer Hardware</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/software-licensing" className="w-full px-3 py-2 hover:bg-orange-100 rounded font-medium">Software Licensing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/blog" className={`nav-link font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>Blog</Link>
            <Link to="/contact" className={`nav-link font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</Link>
            <Button asChild className="btn-primary ml-4">
              <a href="https://hozit.co.za/support" target="_blank" rel="noopener noreferrer">Support</a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:text-orange-600 ${isScrolled ? 'text-black' : 'text-white'}`}
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
              <Link to="/" className="nav-link text-black font-bold block px-3 py-2">Home</Link>
              <Link to="/about" className="nav-link text-black font-bold block px-3 py-2">About</Link>
              
              {/* Mobile Services Section with collapsible items */}
              <div className="space-y-1 pl-3">
                <div className="nav-link text-black font-bold px-3 py-2">Services</div>
                <Link to="/website-hosting" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Website Hosting</Link>
                <Link to="/domain-registration" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Domain Registration</Link>
                <Link to="/web-development" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Web Development</Link>
                <Link to="/seo" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">SEO</Link>
                <Link to="/cybersecurity" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Cybersecurity</Link>
                <Link to="/it-support" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">IT Support</Link>
                <Link to="/server-support" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Server Support</Link>
                <Link to="/app-development" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">APP Development</Link>
                <Link to="/network-design" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Network Design</Link>
                <Link to="/microsoft-365" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Microsoft 365 Setup</Link>
                <Link to="/computer-hardware" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Computer Hardware</Link>
                <Link to="/software-licensing" className="nav-link text-black font-medium block px-3 py-1 pl-6 text-sm">Software Licensing</Link>
              </div>
              
              <Link to="/blog" className="nav-link text-black font-bold block px-3 py-2">Blog</Link>
              <Link to="/contact" className="nav-link text-black font-bold block px-3 py-2">Contact</Link>
              <Button asChild className="btn-primary mt-2 w-full">
                <a href="https://hozit.co.za/support" target="_blank" rel="noopener noreferrer">Support</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
