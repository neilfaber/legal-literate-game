
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface SampleQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

const SampleQuestions: React.FC<SampleQuestionsProps> = ({ 
  questions, 
  onSelectQuestion 
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Lightbulb className="h-4 w-4 text-legalease-500 mr-2" />
        <span className="text-sm text-gray-600">Try asking:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 transition-colors"
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SampleQuestions;
