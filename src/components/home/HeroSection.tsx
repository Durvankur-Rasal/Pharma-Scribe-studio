
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-brand-100/30"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-24 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Need a <span className="text-brand-600">Review Article?</span> 
            <br />
            Get a Custom One Written For You!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Ready-made, plagiarism-free review articles for Pharma, Medicine, and Life Sciences students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-brand-600 hover:bg-brand-700 text-lg px-8 py-6 rounded-lg" size="lg">
              <a href="#order" className="flex items-center">
                Request a Review Article
                <ChevronRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50 text-lg px-8 py-6 rounded-lg" size="lg">
              <a href="#samples">View Samples</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -left-4 -top-4 w-full h-full bg-accent-200 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Academic papers" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
