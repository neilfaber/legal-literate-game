
import React, { useState } from 'react';
import { FileText, Download, Search, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
}

const templates: Template[] = [
  {
    id: 'rental-agreement',
    title: 'Residential Rental Agreement',
    category: 'Housing',
    description: 'A standard lease agreement for residential property rentals, covering terms, conditions, and responsibilities.',
    complexity: 'Medium',
  },
  {
    id: 'consumer-complaint',
    title: 'Consumer Complaint Letter',
    category: 'Consumer Rights',
    description: 'A formal complaint letter template for consumers to address issues with products or services.',
    complexity: 'Simple',
  },
  {
    id: 'power-of-attorney',
    title: 'General Power of Attorney',
    category: 'Personal Documents',
    description: 'A legal document allowing someone to act on your behalf for specified matters.',
    complexity: 'Complex',
  },
  {
    id: 'small-claims',
    title: 'Small Claims Court Filing',
    category: 'Legal Proceedings',
    description: 'Forms and instructions for filing a case in small claims court for minor disputes.',
    complexity: 'Medium',
  },
  {
    id: 'will-simple',
    title: 'Simple Last Will and Testament',
    category: 'Estate Planning',
    description: 'A basic will template for straightforward estate planning needs.',
    complexity: 'Medium',
  },
  {
    id: 'employment-contract',
    title: 'Basic Employment Contract',
    category: 'Employment',
    description: 'A standard employment agreement outlining terms of employment and responsibilities.',
    complexity: 'Medium',
  },
];

const LegalTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(templates.map(template => template.category)));

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Legal Documents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Legal Document Templates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access and customize professional legal templates without legal expertise. Handle common legal tasks with confidence.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all"
                />
              </div>
              
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all bg-white"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id}
                className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden transform transition-all hover:shadow-hover hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-legalease-50 text-legalease-600 p-2 rounded-lg">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">{template.category}</span>
                    </div>
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      template.complexity === 'Simple' ? "bg-green-50 text-green-600" :
                      template.complexity === 'Medium' ? "bg-yellow-50 text-yellow-600" :
                      "bg-orange-50 text-orange-600"
                    )}>
                      {template.complexity}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-sm font-medium text-legalease-600 hover:text-legalease-700 transition-colors flex items-center">
                      View Template <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors flex items-center">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center shadow-subtle border border-gray-100">
              <p className="text-gray-500 mb-4">No templates match your search criteria.</p>
              <button 
                className="text-legalease-600 hover:text-legalease-700 font-medium"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalTemplates;
