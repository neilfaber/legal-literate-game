
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalTemplates from '@/components/LegalTemplates';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const TemplatesPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Legal Templates
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Ready-to-Use Legal Document Templates
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse our collection of professionally crafted legal templates for various needs. 
              View, download, and customize them for your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-legalease-50 to-white border-legalease-100">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-legalease-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-legalease-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Browse Templates</h3>
                </div>
                <p className="text-gray-600">
                  Explore our library of legal templates covering various categories from housing to business documents.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-legalease-50 to-white border-legalease-100">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-legalease-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-legalease-600" />
                  </div>
                  <h3 className="text-lg font-semibold">View Online</h3>
                </div>
                <p className="text-gray-600">
                  Preview templates directly in your browser to see if they meet your requirements before downloading.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-legalease-50 to-white border-legalease-100">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-legalease-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-legalease-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Download & Edit</h3>
                </div>
                <p className="text-gray-600">
                  Download templates in text format that you can easily edit in any word processor to customize for your needs.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <LegalTemplates />
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default TemplatesPage;
