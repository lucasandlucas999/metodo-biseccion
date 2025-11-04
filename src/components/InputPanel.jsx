import React from 'react';
import { Play, Trash2 } from 'lucide-react';

const InputPanel = ({ func, setFunc, a, setA, b, setB, epsilon, setEpsilon, onCalculate, onClear }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-5">Parámetros</h2>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Función f(x)
          </label>
          <input
            type="text"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
            placeholder="x^3 - x - 2"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Límite inferior (a)
            </label>
            <input
              type="number"
              step="any"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Límite superior (b)
            </label>
            <input
              type="number"
              step="any"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Error máximo (%)
            </label>
            <input
              type="number"
              step="any"
              value={epsilon}
              onChange={(e) => setEpsilon(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onCalculate}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex-1"
        >
          <Play size={18} />
          Calcular
        </button>
        <button
          onClick={onClear}
          className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          <Trash2 size={18} />
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default InputPanel;