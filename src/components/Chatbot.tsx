
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

// Legal terms and concepts for education purposes
const legalTerms: Record<string, string> = {
  "habeas corpus": "Habeas corpus is a legal principle that allows individuals to challenge unlawful detention. For example, if someone believes they're being held in jail without proper legal process, they can file a 'writ of habeas corpus' asking a court to review their case.",
  
  "pro bono": "Pro bono refers to legal services provided voluntarily and without payment, especially for the public good. For example, a corporate lawyer might spend a few hours each month helping low-income individuals with housing issues at no cost.",
  
  "power of attorney": "Power of attorney is a legal document that gives someone else the authority to make decisions on your behalf. For example, if you become seriously ill, the person with power of attorney can handle your financial affairs or make healthcare decisions according to your wishes.",
  
  "tort": "A tort is a civil wrong that causes someone else to suffer loss or harm, resulting in legal liability. For example, if a driver negligently hits your car, their negligence is a tort that makes them liable for your vehicle repair costs and medical expenses.",
  
  "subpoena": "A subpoena is a legal document ordering a person to appear in court to provide testimony or produce documents. For example, if you witnessed a car accident, you might receive a subpoena requiring you to appear in court to testify about what you saw.",
};

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

const generateLegalResponse = (question: string): string => {
  // First check if this is one of our sample questions
  if (sampleResponses[question.trim()]) {
    return sampleResponses[question.trim()];
  }
  
  // Check if user is asking about a legal term
  const lowerQuestion = question.toLowerCase();
  
  // Check for legal term definitions
  for (const term in legalTerms) {
    if (lowerQuestion.includes(term) || 
        lowerQuestion.includes(`what is ${term}`) || 
        lowerQuestion.includes(`define ${term}`) || 
        lowerQuestion.includes(`meaning of ${term}`)) {
      return `**${term.charAt(0).toUpperCase() + term.slice(1)}**: ${legalTerms[term]}`;
    }
  }
  
  // For questions about rights or procedures
  if (lowerQuestion.includes("right") || lowerQuestion.includes("rights")) {
    return "Legal rights vary significantly depending on the specific situation, jurisdiction, and applicable laws. Generally, citizens have rights related to:\n\n1. Due process\n2. Equal protection under the law\n3. Freedom from unreasonable searches\n4. Right to legal representation\n\nFor your specific situation, I recommend consulting with a qualified attorney who can provide advice tailored to your circumstances and jurisdiction.";
  }
  
  if (lowerQuestion.includes("sue") || lowerQuestion.includes("lawsuit")) {
    return "The process of filing a lawsuit typically involves:\n\n1. Attempting to resolve the dispute outside of court\n2. Consulting with an attorney to evaluate your case\n3. Filing a complaint with the appropriate court\n4. Serving the defendant with the lawsuit\n5. Going through discovery, where both sides exchange information\n6. Attempting settlement negotiations\n7. Proceeding to trial if necessary\n\nLawsuits can be complex and time-consuming. Consider the potential costs and benefits before proceeding.";
  }
  
  // Default comprehensive response for other legal questions
  return "Based on your question about legal matters, here's some general information:\n\n1. Legal situations are often complex and highly dependent on specific details and jurisdictions\n2. While I can provide general legal information, this should not be considered legal advice\n3. For your specific situation, I recommend:\n   - Researching applicable laws in your jurisdiction\n   - Consulting relevant government websites for official information\n   - Speaking with a qualified attorney who specializes in this area\n   - Looking into legal aid organizations if cost is a concern\n\nIs there a more specific aspect of your question I can help clarify?";
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
      const botResponse = generateLegalResponse(inputValue);
      
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
