import React from 'react';
import { Info } from 'lucide-react';

const InfoPanel = () => {
  return (
    <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
      <div className="flex items-start gap-3">
        <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-blue-900 mb-2">Cómo usar</h3>
          <ul className="text-xs text-blue-800 space-y-2">
            <li>1. Ingresa una función matemática</li>
            <li>2. Define el intervalo [a, b]</li>
            <li>3. Establece el error máximo</li>
            <li>4. Haz clic en Calcular</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;