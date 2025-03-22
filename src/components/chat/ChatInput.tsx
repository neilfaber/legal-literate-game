
import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  inputValue, 
  setInputValue 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
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
  );
};

export default ChatInput;
