
import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, User, Bot, ArrowLeft, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
}

const sampleQuestions = [
  "What are my tenant rights in a rental dispute?",
  "How do I file for a small claims court case?",
  "What should I do if I'm facing workplace discrimination?",
  "What are the steps for filing a consumer protection complaint?"
];

// Sample responses for demo purposes
const sampleResponses: Record<string, string> = {
  "What are my tenant rights in a rental dispute?": 
    "As a tenant, you generally have several rights in a rental dispute:\n\n1. Right to habitable premises (working plumbing, heating, etc.)\n2. Right to privacy (landlord must give notice before entering)\n3. Right to proper notice before eviction (typically 30-60 days)\n4. Right to security deposit return (within specified timeframe)\n5. Protection against retaliation\n\nI recommend:\n- Document everything with photos and written communication\n- Review your lease agreement carefully\n- Check local tenant protection laws that may offer additional rights\n- Consider mediation before legal action",
  
  "How do I file for a small claims court case?": 
    "Filing a small claims court case typically involves these steps:\n\n1. Ensure your claim is within the monetary limits (usually $5,000-$10,000 depending on state)\n2. Gather all relevant documentation and evidence\n3. Contact the defendant to try resolving the issue (many courts require this)\n4. Obtain and complete court forms from your local courthouse\n5. Pay the filing fee (typically $30-$100)\n6. File your claim with the court clerk\n7. Serve the papers to the defendant according to court rules\n8. Prepare for your court date\n\nI recommend researching your state's specific small claims procedures as they vary by jurisdiction.",
  
  "What should I do if I'm facing workplace discrimination?": 
    "If you're facing workplace discrimination, consider these steps:\n\n1. Document all discriminatory incidents with dates, times, and witnesses\n2. Review your company's anti-discrimination policies\n3. Report the behavior to HR or management following company procedures\n4. File a charge with the Equal Employment Opportunity Commission (EEOC) within 180 days\n5. Consult with an employment attorney to understand your options\n\nRemember that discrimination based on protected characteristics (race, color, religion, sex, national origin, age, disability, genetic information) is illegal under federal law. Additional protections may exist under state or local laws.",
  
  "What are the steps for filing a consumer protection complaint?": 
    "To file a consumer protection complaint:\n\n1. First contact the company directly to try resolving the issue\n2. Document all communications and gather evidence (receipts, contracts, etc.)\n3. File a complaint with your state's consumer protection agency or attorney general's office\n4. For specific industries, file with the relevant regulatory agency:\n   - Financial services: Consumer Financial Protection Bureau (CFPB)\n   - Internet services: Federal Communications Commission (FCC)\n   - Products/safety: Consumer Product Safety Commission (CPSC)\n5. Consider filing with the Better Business Bureau (BBB)\n6. For online purchases, use the FTC's ReportFraud.ftc.gov\n\nKeep copies of all submitted complaints and follow up if necessary."
};

const LegalAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI legal assistant. Please describe your legal situation or question, and I'll do my best to provide guidance aligned with ethical and legal standards.",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

    // First check if this is one of our sample questions
    const sampleResponse = sampleResponses[inputValue.trim()];

    // Simulate bot response delay
    setTimeout(() => {
      let botResponseText;
      
      if (sampleResponse) {
        botResponseText = sampleResponse;
      } else {
        // Generic response for other queries
        botResponseText = "Thank you for sharing your situation. Please note that I can only provide general legal information, not specific legal advice that applies to your unique circumstances.\n\nBased on what you've described, I recommend:\n\n1. Document all relevant details and communications\n2. Research your local laws and regulations on this matter\n3. Consider consulting with a licensed attorney who specializes in this area of law\n4. Look into legal aid organizations if cost is a concern\n\nThere may be time-sensitive deadlines in your case, so don't delay in taking appropriate action.";
      }
      
      const botMessage: Message = {
        id: userMessageId + 1,
        content: botResponseText,
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      
      toast({
        title: "Disclaimer",
        description: "This is for informational purposes only and not legal advice. Consult a qualified attorney for your specific situation.",
        duration: 5000,
      });
    }, 1500);
  };

  const handleSampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/" className="mr-3">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-legalease-700">Legal AI Assistant</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 py-4 px-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-2 text-gray-700 font-medium">Legal Assistant Chat</div>
              </div>
            </div>

            <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">
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
                  <span className="text-sm text-gray-600">Example questions:</span>
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
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Describe your legal situation in detail..."
                  className="min-h-[120px] w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all"
                />
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    <span className="inline-block mr-1">*</span>
                    This is not legal advice. Consult with a qualified attorney for your specific situation.
                  </div>
                  <Button
                    type="submit"
                    className={cn(
                      "px-4 py-2 rounded-lg transition-all flex items-center gap-2",
                      inputValue.trim()
                        ? "bg-legalease-600 text-white hover:bg-legalease-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    )}
                    disabled={!inputValue.trim()}
                  >
                    Send
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-4 text-orange-800">
            <h3 className="font-medium mb-2">Important Disclaimer</h3>
            <p className="text-sm">
              The information provided by the Legal AI Assistant is for general informational purposes only and is not intended to be legal advice. 
              The legal information provided is not a substitute for professional legal advice, and you should not rely on it as legal advice for any purpose. 
              You should always consult with a qualified attorney for specific advice regarding your individual situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAssistant;
