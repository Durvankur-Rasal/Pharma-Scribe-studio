
import React from 'react';
import { Sparkles, GraduationCap, FileText, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              Hello! I'm a passionate Pharmacy graduate with over 3 years of experience in academic and research writing. 
              My journey began during my own academic years when I discovered my talent for synthesizing complex scientific 
              information into clear, comprehensive review articles.
            </p>
            <p className="text-gray-600 mb-6">
              Having helped numerous students and researchers with their academic writing needs, I've developed a keen 
              understanding of what makes a review article truly exceptional. My work combines thorough research, critical 
              analysis, and clear communication—all essential elements for academic success.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in Pharmaceutical Sciences, Medicine, Pharmacology, and other Life Science disciplines. My goal 
              is to help you excel in your academic journey by providing high-quality, plagiarism-free review articles that 
              meet the highest standards.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Pharmacy Graduate</h4>
                  <p className="text-sm text-gray-500">B.Pharm with Honors</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">3+ Years</h4>
                  <p className="text-sm text-gray-500">Writing Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">200+</h4>
                  <p className="text-sm text-gray-500">Articles Written</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">150+</h4>
                  <p className="text-sm text-gray-500">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                alt="Professional portrait" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="absolute top-6 -left-6 w-full h-full bg-accent-200 rounded-xl -z-10"></div>
            
            {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg w-64">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Expert in</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Pharmaceutical Sciences
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Pharmacology
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Medicinal Chemistry
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Drug Delivery Systems
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
