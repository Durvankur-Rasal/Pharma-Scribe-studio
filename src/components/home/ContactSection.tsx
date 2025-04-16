
import React from 'react';
import { Mail, Phone, Smartphone, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions or need assistance? Reach out through any of these channels.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+91 9876543210</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                Message on WhatsApp
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contact@reviewscribestudio.com</p>
              <a 
                href="mailto:contact@reviewscribestudio.com" 
                className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                Send an Email
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 9876543210</p>
              <a 
                href="tel:+919876543210" 
                className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                Call Now
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Connect on Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Response Time</h3>
            <p className="text-gray-600">
              I typically respond to all inquiries within 24 hours. For urgent requests, please contact via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
