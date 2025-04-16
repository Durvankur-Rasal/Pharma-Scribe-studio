
import React from 'react';
import { FileInput, CreditCard, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Topic Input',
      description: 'Share your article topic, requirements, and any specific instructions.',
      icon: <FileInput className="w-12 h-12 text-white" />,
    },
    {
      number: 2,
      title: 'Payment',
      description: 'Choose your package and complete the secure payment process.',
      icon: <CreditCard className="w-12 h-12 text-white" />,
    },
    {
      number: 3,
      title: 'Delivery',
      description: 'Receive your custom-written review article by email within the specified timeframe.',
      icon: <Package className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-r from-brand-600 to-brand-700 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">How It Works</h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 text-center max-w-2xl mx-auto">
          Getting your custom review article is simple and straightforward with our 3-step process.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Circle on timeline for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-brand-600 flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} mb-8 md:mb-24`}>
                    {/* Circle for mobile */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-white text-brand-600 flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                      {step.number}
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="bg-brand-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
