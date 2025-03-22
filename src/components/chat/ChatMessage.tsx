
import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
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
  );
};

export default ChatMessage;
