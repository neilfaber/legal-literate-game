import React from 'react';
import { MessageSquare, FileText, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-legalease-600" />,
      title: "Ask Questions",
      description: "Use our AI legal assistant to get answers to your legal questions in simple, easy-to-understand language.",
      link: "/chat",
      linkText: "Try the Chat"
    },
    {
      icon: <FileText className="h-10 w-10 text-legalease-600" />,
      title: "Access Templates",
      description: "Browse and customize legal document templates for common situations like contracts, agreements, and more.",
      link: "/templates",
      linkText: "View Templates"
    },
    {
      icon: <Users className="h-10 w-10 text-legalease-600" />,
      title: "Join the Community",
      description: "Connect with others facing similar legal challenges and learn from shared experiences.",
      link: "/community",
      linkText: "Explore Community"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Legal Journey Made Simple
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              LegalEase provides multiple ways to help you navigate legal matters with confidence and clarity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-legalease-100 rounded-bl-[100px] opacity-30 transform -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <Link 
                    to={step.link} 
                    className="inline-flex items-center text-legalease-600 font-medium hover:text-legalease-700 transition-colors group"
                  >
                    {step.linkText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-legalease-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 