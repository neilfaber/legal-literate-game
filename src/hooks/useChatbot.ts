
import { useState, useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { sampleResponses } from '@/constants/chatSamples';

export const useChatbot = () => {
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

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessageId = Date.now();
    const userMessage: Message = {
      id: userMessageId,
      content: message,
      sender: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = sampleResponses[message.trim()] || 
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

  return {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleSampleQuestion
  };
};
