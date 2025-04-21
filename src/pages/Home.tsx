
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import PricingSection from '@/components/home/PricingSection';
import SampleArticles from '@/components/home/SampleArticles';
import AboutSection from '@/components/home/AboutSection';
import TrendedJournalSection from '@/components/home/JournalSection';
import ContactSection from '@/components/home/ContactSection';
import { useLocation } from "react-router-dom";

const Home = () => {


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
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
      <TrendedJournalSection/>
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <SampleArticles />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
