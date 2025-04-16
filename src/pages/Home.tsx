
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import PricingSection from '@/components/home/PricingSection';
import SampleArticles from '@/components/home/SampleArticles';
import OrderForm from '@/components/home/OrderForm';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };
    
    // Initialize animations on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <SampleArticles />
      <OrderForm />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
