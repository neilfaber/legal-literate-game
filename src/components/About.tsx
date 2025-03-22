import React from 'react';
import { Scale, Lightbulb, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-legalease-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              About LegalEase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Making Legal Knowledge Accessible to Everyone
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              LegalEase bridges the gap between complex legal concepts and everyday understanding, 
              empowering you to navigate legal matters with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-legalease-100 flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-legalease-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Simplify Legal Complexity</h3>
              <p className="text-gray-600">
                We translate legal jargon into plain language, making it easier for you to understand your rights and obligations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-legalease-100 flex items-center justify-center mb-6">
                <Scale className="h-6 w-6 text-legalease-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Informed Decision Making</h3>
              <p className="text-gray-600">
                Get the information you need to make confident decisions about legal matters affecting your life or business.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-legalease-100 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-legalease-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Learn As You Go</h3>
              <p className="text-gray-600">
                Our platform is designed to educate, not just inform, helping you build legal literacy for long-term empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 