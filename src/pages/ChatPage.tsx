import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const ChatPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Legal Assistant
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get Answers to Your Legal Questions
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our AI-powered legal assistant can help you understand legal concepts and guide you through common legal issues.
            </p>
          </div>
          <Chatbot />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage; 