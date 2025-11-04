import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { FUNCTION_DICTIONARY } from '../constants/functionDictionary';

const FunctionDictionary = () => {
  const [showDictionary, setShowDictionary] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setShowDictionary(!showDictionary)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-gray-600" />
          <h3 className="text-sm font-medium text-gray-900">Funciones disponibles</h3>
        </div>
        {showDictionary ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {showDictionary && (
        <div className="px-6 pb-6 space-y-3">
          {FUNCTION_DICTIONARY.map((item, idx) => (
            <div key={idx} className="border-l-2 border-blue-200 pl-3">
              <div className="flex items-start justify-between">
                <code className="text-sm font-mono text-blue-600">{item.symbol}</code>
              </div>
              <p className="text-xs text-gray-600 mt-1">{item.description}</p>
              <p className="text-xs text-gray-400 mt-0.5">Ej: {item.example}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunctionDictionary;