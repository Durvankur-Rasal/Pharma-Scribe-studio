import React from 'react';
import {
  Mail,
  Phone,
  Smartphone,
  Instagram,
  Linkedin,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = 'mailto:rushiwable9393@gmail.com';
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-brand-50 to-brand-100 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="section-subtitle text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Ready to order your custom review article? Connect directly with us
          through any of these channels for immediate assistance.
        </p>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-lg mb-4">Pharma_scribe_Studio.360</p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() =>
                  window.open('https://chat.whatsapp.com/BdEUXCyHD3v121cuXvaYq4', '_blank')
                }
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Email
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                rushiwable9393@gmail.com
              </p>
              {/* Solution 1: Direct button with onClick handler */}
              <Button 
                className="w-full"
                onClick={handleEmailClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Button>
              
              {/* Alternative email link hidden in case needed */}
              <a 
                href="mailto:rushiwable9393@gmail.com" 
                className="hidden"
                id="email-fallback"
              >
                Email fallback
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Phone
              </h3>
              <p className="text-gray-600 text-lg mb-4">+91 78230 21193</p>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600"
                onClick={() => (window.location.href = 'tel:+917823021193')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Message Guidelines */}
          <div className="mt-16 p-8 bg-white rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What to Include in Your Message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Please Provide:
                </h4>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>Your full name</li>
                  <li>Topic or title for your review article</li>
                  <li>Number of pages required</li>
                  <li>Your college/institution name</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Optional Details:
                </h4>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>Specific requirements or guidelines</li>
                  <li>Preferred delivery timeline</li>
                  <li>Required add‑ons (plagiarism report, PPT, etc.)</li>
                  <li>Any reference papers or resources</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              I typically respond to all inquiries within 24 hours. For urgent
              requests, please contact via WhatsApp.
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Connect on Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/pharma_scribe_studio.360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://linkedin.com/in/rushi-wable-a51819360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;