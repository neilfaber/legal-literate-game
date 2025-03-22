
import React from 'react';

const ChatHeader: React.FC = () => {
  return (
    <div className="border-b border-gray-100 py-4 px-6">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="ml-2 text-gray-700 font-medium">Legal Assistant</div>
      </div>
    </div>
  );
};

export default ChatHeader;
