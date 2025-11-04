import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const HistoryPanel = ({ history, onLoadHistory, onClearHistory }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-600" />
          <h3 className="text-sm font-medium text-gray-900">Historial</h3>
          {history.length > 0 && (
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
              {history.length}
            </span>
          )}
        </div>
        {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {showHistory && (
        <div className="px-6 pb-6">
          {history.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">
              No hay cálculos guardados
            </p>
          ) : (
            <>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {history.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => onLoadHistory(entry)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <code className="text-sm font-mono text-gray-900 block mb-2">
                      {entry.function}
                    </code>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>Intervalo: [{entry.a}, {entry.b}]</p>
                      <p>Raíz: {entry.root.toFixed(6)}</p>
                      <p className="text-gray-400">{entry.timestamp}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={onClearHistory}
                className="w-full mt-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Limpiar historial
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryPanel;