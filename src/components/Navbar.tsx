
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
            
            {/* Services Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-black flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-md shadow-lg p-2">
                <DropdownMenuItem asChild>
                  <Link to="/website-hosting" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Website Hosting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/domain-registration" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Domain Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/web-development" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo" className="w-full px-3 py-2 hover:bg-orange-100 rounded">SEO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cybersecurity" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Cybersecurity</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/it-support" className="w-full px-3 py-2 hover:bg-orange-100 rounded">IT Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/server-support" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Server Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/app-development" className="w-full px-3 py-2 hover:bg-orange-100 rounded">APP Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/network-design" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Network Design</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/microsoft-365" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Microsoft 365 Setup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/computer-hardware" className="w-full px-3 py-2 hover:bg-orange-100 rounded">Computer Hardware</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#contact" className="nav-link text-black">Contact</a>
            <Button className="btn-primary ml-4">Get Quote</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-600"
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
              
              {/* Mobile Services Section with collapsible items */}
              <div className="space-y-1 pl-3">
                <div className="nav-link text-black font-semibold px-3 py-2">Services</div>
                <Link to="/website-hosting" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Website Hosting</Link>
                <Link to="/domain-registration" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Domain Registration</Link>
                <Link to="/web-development" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Web Development</Link>
                <Link to="/seo" className="nav-link text-black block px-3 py-1 pl-6 text-sm">SEO</Link>
                <Link to="/cybersecurity" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Cybersecurity</Link>
                <Link to="/it-support" className="nav-link text-black block px-3 py-1 pl-6 text-sm">IT Support</Link>
                <Link to="/server-support" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Server Support</Link>
                <Link to="/app-development" className="nav-link text-black block px-3 py-1 pl-6 text-sm">APP Development</Link>
                <Link to="/network-design" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Network Design</Link>
                <Link to="/microsoft-365" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Microsoft 365 Setup</Link>
                <Link to="/computer-hardware" className="nav-link text-black block px-3 py-1 pl-6 text-sm">Computer Hardware</Link>
              </div>
              
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
