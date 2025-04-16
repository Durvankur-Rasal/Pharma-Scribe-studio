
import React, { useState } from 'react';
import { Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SampleArticles = () => {
  const [previewId, setPreviewId] = useState<number | null>(null);

  const samples = [
    {
      id: 1,
      title: 'A Review on Nanoparticles in Targeted Drug Delivery',
      excerpt: 'This comprehensive review explores recent advances in nanoparticle-based drug delivery systems, focusing on their applications in cancer treatment and other therapeutic areas.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1770&auto=format&fit=crop',
      pages: 12,
    },
    {
      id: 2,
      title: 'Recent Advances in Herbal Formulations',
      excerpt: 'An in-depth analysis of innovative herbal formulation techniques and their enhanced therapeutic efficacy in modern pharmaceutical applications.',
      image: 'https://images.unsplash.com/photo-1546074177-31bfa593f731?q=80&w=1770&auto=format&fit=crop',
      pages: 10,
    },
    {
      id: 3,
      title: 'Pharmacogenomics: Personalized Medicine Approach',
      excerpt: 'This review discusses how genetic information is revolutionizing drug development and personalized treatment strategies in clinical practice.',
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=1770&auto=format&fit=crop',
      pages: 14,
    },
    {
      id: 4,
      title: 'Innovations in Controlled Release Drug Delivery Systems',
      excerpt: 'A critical review of recent developments in controlled release technologies and their impact on patient compliance and treatment outcomes.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1770&auto=format&fit=crop',
      pages: 11,
    },
  ];

  const handlePreview = (id: number) => {
    setPreviewId(id === previewId ? null : id);
  };

  return (
    <section id="samples" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Sample Articles</h2>
        <p className="section-subtitle">
          Browse through our collection of high-quality review articles to get a feel for our work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {samples.map((sample) => (
            <div key={sample.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-56">
                <div className={`absolute inset-0 ${previewId === sample.id ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}>
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${previewId === sample.id ? 'opacity-100' : 'opacity-80'} transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{sample.title}</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <span>{sample.pages} pages</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{sample.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={() => handlePreview(sample.id)}>
                    {previewId === sample.id ? (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Hide Preview
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </>
                    )}
                  </Button>
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    <a href="#order">Request Similar</a>
                  </Button>
                </div>
              </div>
              
              {previewId === sample.id && (
                <div className="p-6 pt-0">
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-2">Preview Content</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      This article provides a comprehensive overview of {sample.title.toLowerCase()}. In recent years, significant advancements have been made in this field, revolutionizing treatment approaches and patient outcomes.
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      The literature review highlights key studies from 2018-2023, focusing on breakthrough technologies and clinical applications. The methodology section details the systematic approach used to gather and analyze the most recent peer-reviewed publications.
                    </p>
                    <div className="text-center mt-4">
                      <span className="text-brand-600 text-sm font-medium">Full content available upon request</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-accent-600 hover:bg-accent-700">
            <a href="#order">Request a Custom Article</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleArticles;
