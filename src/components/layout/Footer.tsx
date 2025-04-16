
import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">ReviewScribeStudio</h3>
            <p className="text-gray-600 max-w-sm">
              Professional review articles for Pharma, Medicine, and Life Sciences students. Custom written and plagiarism-free.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-gray-600 hover:text-brand-600">Services</Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-600 hover:text-brand-600">How It Works</Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-600 hover:text-brand-600">Pricing</Link>
              </li>
              <li>
                <Link to="/#samples" className="text-gray-600 hover:text-brand-600">Sample Articles</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-600 hover:text-brand-600">About</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-600 hover:text-brand-600">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-500" />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-500" />
                <span className="text-gray-600">contact@reviewscribestudio.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ReviewScribeStudio. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
            Legal note: Articles are for academic guidance and should be used ethically. Our services are designed to assist with research and learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
