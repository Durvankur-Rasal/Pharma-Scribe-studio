
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    topic: '',
    authorName: '',
    collegeName: '',
    pages: '5',
    additionalInfo: '',
    plagiarismReport: false,
    fastDelivery: false,
    powerpoint: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        topic: '',
        authorName: '',
        collegeName: '',
        pages: '5',
        additionalInfo: '',
        plagiarismReport: false,
        fastDelivery: false,
        powerpoint: false,
      });
    }, 1500);
  };

  return (
    <section id="order" className="section-padding bg-gradient-to-br from-brand-50 to-brand-100">
      <div className="container mx-auto">
        <h2 className="section-title">Request Your Custom Review Article</h2>
        <p className="section-subtitle">
          Fill out the form below with your requirements, and we'll get back to you promptly.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pages">Number of Pages *</Label>
                <Input
                  id="pages"
                  name="pages"
                  type="number"
                  min="1"
                  placeholder="5"
                  value={formData.pages}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="authorName">Author Name (as it should appear) *</Label>
                <Input
                  id="authorName"
                  name="authorName"
                  placeholder="Your name as author"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="collegeName">College/Institution Name *</Label>
                <Input
                  id="collegeName"
                  name="collegeName"
                  placeholder="Your college or institution"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="topic">Topic/Title of Review Article *</Label>
              <Textarea
                id="topic"
                name="topic"
                placeholder="Enter the topic or title for your review article"
                value={formData.topic}
                onChange={handleChange}
                required
                className="min-h-[100px]"
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="additionalInfo">Additional Instructions (Optional)</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Specific requirements, formatting preferences, key points to include, etc."
                value={formData.additionalInfo}
                onChange={handleChange}
                className="min-h-[150px]"
              />
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium text-gray-800 mb-3">Add-ons (Optional)</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="plagiarismReport"
                    name="plagiarismReport"
                    checked={formData.plagiarismReport}
                    onChange={handleCheckboxChange}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <Label htmlFor="plagiarismReport" className="flex items-center">
                    <span>Plagiarism Report</span>
                    <span className="ml-2 text-sm text-gray-500">(₹350)</span>
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fastDelivery"
                    name="fastDelivery"
                    checked={formData.fastDelivery}
                    onChange={handleCheckboxChange}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <Label htmlFor="fastDelivery" className="flex items-center">
                    <span>Fast Delivery (48 hrs)</span>
                    <span className="ml-2 text-sm text-gray-500">(₹500)</span>
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="powerpoint"
                    name="powerpoint"
                    checked={formData.powerpoint}
                    onChange={handleCheckboxChange}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <Label htmlFor="powerpoint" className="flex items-center">
                    <span>PowerPoint Presentation</span>
                    <span className="ml-2 text-sm text-gray-500">(₹800)</span>
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 px-8 py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
