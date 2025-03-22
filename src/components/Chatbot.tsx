
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { sampleQuestions } from '@/constants/chatSamples';
import { useChatbot } from '@/hooks/useChatbot';
import ChatMessage from './chat/ChatMessage';
import TypingIndicator from './chat/TypingIndicator';
import SampleQuestions from './chat/SampleQuestions';
import ChatInput from './chat/ChatInput';
import ChatHeader from './chat/ChatHeader';

const Chatbot = () => {
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleSampleQuestion
  } = useChatbot();

  return (
    <section id="chatbot" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              AI Assistant
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Clear Answers to Your Legal Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our AI-powered assistant explains complex legal concepts in simple language, helping you understand your rights and obligations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden">
            <ChatHeader />

            <div className="h-96 overflow-y-auto p-6 bg-gray-50">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && <TypingIndicator />}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <SampleQuestions 
                questions={sampleQuestions} 
                onSelectQuestion={handleSampleQuestion} 
              />
              
              <ChatInput 
                onSendMessage={handleSendMessage}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need help with a specific legal situation?</p>
            <Link to="/legal-assistant">
              <Button className="bg-legalease-600 text-white hover:bg-legalease-700">
                Try Our Full Legal AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
