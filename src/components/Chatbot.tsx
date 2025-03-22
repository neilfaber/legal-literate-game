
import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, User, Bot, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
}

const sampleQuestions = [
  "What are my rights if I'm stopped by police?",
  "How do I file a consumer complaint?",
  "What's the process for small claims court?",
  "What should I know about rental agreements?"
];

// Sample responses for demo purposes
const sampleResponses: Record<string, string> = {
  "What are my rights if I'm stopped by police?": 
    "If stopped by police, you have the right to:\n\n1. Remain silent (5th Amendment)\n2. Refuse searches (4th Amendment)\n3. Leave if not under arrest\n4. Ask if you're free to go\n5. Request an attorney if detained\n\nAlways stay calm, keep hands visible, and don't physically resist. You can politely decline to answer questions beyond identifying information.",
  
  "How do I file a consumer complaint?": 
    "To file a consumer complaint:\n\n1. Contact the company directly first\n2. Document all communication\n3. File with your state's consumer protection office\n4. Consider the Better Business Bureau (BBB)\n5. For financial issues, contact the Consumer Financial Protection Bureau\n6. For online purchases, report to the FTC at ReportFraud.ftc.gov\n\nInclude all relevant details and documentation in your complaint.",
  
  "What's the process for small claims court?": 
    "Small claims court process:\n\n1. Check eligibility (typically for claims under $5,000-$10,000)\n2. Send a demand letter to the other party\n3. File a complaint with court clerk\n4. Pay filing fee ($30-$100)\n5. Serve papers to the defendant\n6. Prepare your evidence\n7. Attend the hearing\n8. Collect judgment if you win\n\nThe process is designed to be navigated without an attorney.",
  
  "What should I know about rental agreements?": 
    "Key rental agreement information:\n\n1. Lease term and amount\n2. Security deposit terms and conditions\n3. Maintenance responsibilities\n4. Rules about modifications\n5. Pet policies\n6. Subletting rules\n7. Termination procedures\n8. State-specific tenant rights\n\nAlways read the entire agreement before signing and keep a copy for your records."
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI legal assistant. How can I help with your legal questions today?",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessageId = Date.now();
    const userMessage: Message = {
      id: userMessageId,
      content: inputValue,
      sender: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = sampleResponses[inputValue.trim()] || 
        "I don't have specific information on that legal question. In a real application, I would provide accurate legal information here based on legal databases and resources.";
      
      const botMessage: Message = {
        id: userMessageId + 1,
        content: botResponse,
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSampleQuestion = (question: string) => {
    setInputValue(question);
    
    // Focus the input element after setting its value
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
      inputElement.focus();
    }
  };

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
            <div className="border-b border-gray-100 py-4 px-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-2 text-gray-700 font-medium">Legal Assistant</div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-6 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "mb-4 max-w-[80%] animate-slide-up",
                    message.sender === 'user' ? "ml-auto" : "mr-auto"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                      message.sender === 'user' 
                        ? "bg-legalease-100 text-legalease-700" 
                        : "bg-legalease-600 text-white"
                    )}>
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div className={cn(
                      "p-4 rounded-xl",
                      message.sender === 'user'
                        ? "bg-legalease-500 text-white"
                        : "bg-white border border-gray-200 text-gray-800"
                    )}>
                      <div className="whitespace-pre-line">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4 max-w-[80%] animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-legalease-600 text-white flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-4 w-4 text-legalease-500 mr-2" />
                  <span className="text-sm text-gray-600">Try asking:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 transition-colors"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  id="chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your legal question..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all"
                />
                <button
                  type="submit"
                  className={cn(
                    "p-3 rounded-lg transition-all",
                    inputValue.trim()
                      ? "bg-legalease-600 text-white hover:bg-legalease-700"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  )}
                  disabled={!inputValue.trim()}
                >
                  <SendHorizontal className="h-5 w-5" />
                </button>
              </form>
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
