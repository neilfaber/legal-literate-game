
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalTemplates from '@/components/LegalTemplates';

const TemplatesPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Legal Templates
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Ready-to-Use Legal Document Templates
            </h1>
          </div>
          <LegalTemplates />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
