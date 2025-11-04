import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp, Award} from 'lucide-react';

const CreditsPanel = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setShowCredits(!showCredits)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Award size={18} className="text-rose-500" />
          <h3 className="text-sm font-medium text-gray-900">Créditos</h3>
        </div>
        {showCredits ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {showCredits && (
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">Desarrollado por</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-gray-900">Lucas Acuña</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-sm text-gray-900">Fredy Céspedes</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <p className="text-sm text-gray-900">Diogo Lima</p>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Asistido por</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-sm text-gray-700">Claude Sonnet 4.5</p>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                Herramienta educativa para Métodos Numéricos
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsPanel;