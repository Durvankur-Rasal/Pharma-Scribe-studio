import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-brand-700">Pharma Scribe Studio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/#services" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/#how-it-works" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              How It Works
            </Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/#samples" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              Samples
            </Link>
            <Link to="/#about" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/#contact" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button className="bg-brand-600 hover:bg-brand-700">
              <Link to="/#contact">Contact Us</Link>
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPXVsHJ3Yys-wjPTf239UHnQFC-t-2NPgv3f8Fq-Nhwo-wbg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Article
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['services', 'how-it-works', 'pricing', 'samples', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                to={`/#${section}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            ))}

            <Link
              to="/#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-600 text-white hover:bg-brand-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPXVsHJ3Yys-wjPTf239UHnQFC-t-2NPgv3f8Fq-Nhwo-wbg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Article
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
