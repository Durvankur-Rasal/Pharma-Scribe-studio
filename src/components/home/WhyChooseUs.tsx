
import React from 'react';
import { CheckCircle, BookText, Clock, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Custom Written',
      description: 'Every article is written from scratch based on your specific requirements and topic.',
      icon: <CheckCircle className="w-10 h-10 text-brand-600" />,
    },
    {
      title: 'Research-Backed',
      description: 'Our articles include thorough research from credible academic sources and journals.',
      icon: <BookText className="w-10 h-10 text-brand-600" />,
    },
    {
      title: 'Plagiarism-Free',
      description: 'All content is 100% original and passes through rigorous plagiarism checking.',
      icon: <FileCheck className="w-10 h-10 text-brand-600" />,
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times to meet your deadlines without compromising on quality.',
      icon: <Clock className="w-10 h-10 text-brand-600" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Our review article writing service is designed to help you excel in your academic journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl card-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 rounded-xl text-center">
              <h4 className="text-lg font-medium text-brand-700 mb-2">Full Drafting</h4>
              <p className="text-gray-700">Complete review articles written from introduction to conclusion.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 rounded-xl text-center">
              <h4 className="text-lg font-medium text-brand-700 mb-2">Proofreading</h4>
              <p className="text-gray-700">Grammar, spelling, and style checks to perfect your work.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 rounded-xl text-center">
              <h4 className="text-lg font-medium text-brand-700 mb-2">Reference Formatting</h4>
              <p className="text-gray-700">APA, MLA, Vancouver, or any citation style as required.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 rounded-xl text-center">
              <h4 className="text-lg font-medium text-brand-700 mb-2">Plagiarism Check</h4>
              <p className="text-gray-700">Detailed reports to ensure 100% originality of content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
