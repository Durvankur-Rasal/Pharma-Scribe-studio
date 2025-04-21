
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic Article',
      price: '₹100',
      unit: '/page',
      description: 'Perfect for standard undergraduate review papers',
      features: [
        'Academic quality writing',
        'Basic research sources',
        'Standard delivery (7 days)',
        'Free title page & bibliography',
        'Simple charts and diagrams',
        'One round of revisions',
        'Plagiarism-free content',
      ],
      notIncluded: [
        'Plagiarism report',
        'Fast delivery',
        'PowerPoint presentation',
        'Complex statistical analysis',
      ],
      mostPopular: false,
    },
    {
      name: 'Advanced Article',
      price: '₹150',
      unit: '/page',
      description: 'Ideal for detailed graduate-level reviews',
      features: [
        'Premium academic writing',
        'Extensive research from journals',
        'Faster delivery (5 days)',
        'Free title page & bibliography',
        'Complex charts and diagrams',
        'Two rounds of revisions',
        'Plagiarism-free content',
        'Plagiarism report included',
        'Option for expedited delivery',
      ],
      notIncluded: [
        'PowerPoint presentation (available as add-on)',
        'Complex statistical analysis (available as add-on)',
      ],
      mostPopular: true,
    },
  ];

  const addOns = [
    {
      name: 'Plagiarism Report',
      price: '₹500',
      description: 'Detailed originality report from premium plagiarism detection software',
    },
    {
      name: 'Fast Delivery',
      price: '₹400',
      description: '48-hour turnaround for urgent requirements',
    },
    {
      name: 'PowerPoint Presentation',
      price: '₹800',
      description: 'Professional slides based on your review article',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">
          Affordable options tailored to your academic needs with transparent pricing and no hidden fees.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg ${
                plan.mostPopular ? 'border-2 border-accent-500 relative' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-brand-700">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button className={`w-full ${plan.mostPopular ? 'bg-accent-500 hover:bg-accent-600' : 'bg-brand-600 hover:bg-brand-700'}`}>
                  <a href="#order">Select Plan</a>
                </Button>
              </div>
              
              <div className="border-t border-gray-100 p-8">
                <h4 className="font-medium text-gray-800 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-medium text-gray-800 mt-6 mb-4">Not included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-medium text-gray-800 mb-2">{addon.name}</h4>
                <p className="text-brand-600 font-bold mb-3">{addon.price}</p>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
