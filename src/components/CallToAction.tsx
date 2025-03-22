import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-legalease-600 to-legalease-800 rounded-2xl p-12 shadow-xl">
          <div className="text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Simplify Your Legal Journey?
              </h2>
              <p className="text-legalease-50 text-lg max-w-xl">
                Join thousands of users who have found clarity in their legal matters with LegalEase. 
                Our platform is designed to make legal information accessible to everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <Link 
                to="/chat" 
                className="px-8 py-4 bg-white text-legalease-700 rounded-lg font-medium hover:bg-legalease-50 transition-colors shadow-md flex items-center justify-center"
              >
                Chat with AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/templates" 
                className="px-8 py-4 bg-legalease-700 text-white border border-legalease-500 rounded-lg font-medium hover:bg-legalease-600 transition-colors shadow-md flex items-center justify-center"
              >
                Browse Templates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 