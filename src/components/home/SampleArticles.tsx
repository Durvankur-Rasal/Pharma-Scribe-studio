import React, { useState } from 'react';
import { Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SampleArticles = () => {
  const [previewId, setPreviewId] = useState<number | null>(null);

  const samples = [
    {
      id: 1,
      title: 'Antibiotic Resistance: Global Threat To Public Health',
      excerpt:
        'Antibiotics are drugs used to prevent and treat infectious diseases in humans, animals, and plants. The problem of antibiotic resistance is linked to the overuse and abuse of these drugs and the inability of the pharmaceutical industry to create new drugs due to difficult regulatory requirements and diminished financial incentives.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop',
      pages: 12,
    },
    {
      id: 2,
      title:
        'An Overview On: Coronavirus Disease and Its Myths Providing Factors Contributing To the COVID-19 Spread',
      excerpt:
        'The first incidence of the COVID-19 pandemic, which is spreading quickly, was discovered in Wuhan, Hubei Province, China, in December 2019. On March 11, 2020, WHO proclaimed COVID-19 to be a pandemic. The disease primarily damages the lung parenchyma and is spread through respiratory droplets.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop',
      pages: 10,
    },
    {
      id: 3,
      title: 'A Comprehensive Review of Bone Cancer',
      excerpt:
        'Bone metastases are a common cause of morbidity and mortality in individuals with breast cancer. Bone tumors are more common than initial malignant tumors, but because they are frequently asymptomatic and go undiagnosed, the frequency of benign lesions may be underestimated.',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop',
      pages: 14,
    },
    {
      id: 4,
      title: 'Rapamycin: Pharmacological and Therapeutic Potential',
      excerpt:
        'Rapamycin is a novel immunosuppressant developed as a potent anti-aging agent. Its well-known function in preventing organ transplant rejection has been complemented by its efficacy in treating conditions such as cancer, neurodegenerative diseases, and metabolic disorders.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
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
                <div
                  className={`absolute inset-0 ${
                    previewId === sample.id ? 'opacity-100' : 'opacity-30'
                  } transition-opacity duration-300`}
                >
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
                    previewId === sample.id ? 'opacity-100' : 'opacity-80'
                  } transition-opacity duration-300`}
                ></div>
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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPXVsHJ3Yys-wjPTf239UHnQFC-t-2NPgv3f8Fq-Nhwo-wbg/viewform?usp=header">Request Similar</a>
                  </Button>
                </div>
              </div>

              {previewId === sample.id && (
                <div className="p-6 pt-0">
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-2">Abstract</h4>
                    {sample.id === 1 && (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          Antibiotics are drugs used to prevent and treat infectious diseases in humans, animals, and plants. The problem of antibiotic resistance is linked to the overuse and abuse of these drugs and the inability of the pharmaceutical industry to create new drugs due to difficult regulatory requirements and diminished financial incentives.
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          Many of these bacteria currently impose a significant clinical and financial burden on patients, families, and the U.S. healthcare system. The rapid emergence of resistant bacteria throughout the world jeopardizes the effectiveness of antibiotics that have transformed medicine and saved millions of lives. The molecular mechanisms of resistance to evolving bacterial genetics and biochemistry make it difficult to maintain effective antibiotic activity.
                        </p>
                      </>
                    )}
                    {sample.id === 2 && (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          The first incidence of the COVID-19 pandemic, which is spreading quickly, was discovered in Wuhan, Hubei Province, China, in December 2019. On March 11, 2020, WHO proclaimed COVID-19 to be a pandemic.
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          The disease primarily damages the lung parenchyma and is spread through respiratory droplets produced by infected people while coughing or sneezing. Patients with COVID-19 can experience a wide range of clinical symptoms, from asymptomatic infections to critically serious disease. This review examines viral infections like SARS and MERS and provides a thorough analysis of the COVID-19 pandemic.
                        </p>
                      </>
                    )}
                    {sample.id === 3 && (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          Bone metastases are a common cause of morbidity and mortality in individuals with breast cancer. Bone tumors are more common than initial malignant tumors, but because they are frequently asymptomatic and go undiagnosed, the frequency of benign lesions may be underestimated.
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          The TCGA database was used to download raw counts, fragments per kilobase per million mapped reads (FPKM), and miRNA-sequence data for bone cancer. The incidence of bone cancer is increasing over time, and due to rising prevalence, incidence, and patient survival rates, quality of life has gained significant attention in treatment protocols. This review highlights the necessity of creating an internationally standardized bone module for future clinical trials.
                        </p>
                      </>
                    )}
                    {sample.id === 4 && (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          Rapamycin is a novel immunosuppressant developed as a potent anti-aging agent. Its well-known function in preventing organ transplant rejection has been complemented by its efficacy in treating conditions such as cancer, neurodegenerative diseases, and metabolic disorders.
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          This review focuses on rapamycin's pharmacological value by discussing known pathologies and medical applications and exploring future uses and treatments. It highlights the drug's mechanism of action, therapeutic potential, and emerging research directions for novel applications.
                        </p>
                      </>
                    )}
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPXVsHJ3Yys-wjPTf239UHnQFC-t-2NPgv3f8Fq-Nhwo-wbg/viewform?usp=header">Request a Custom Article</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleArticles;
