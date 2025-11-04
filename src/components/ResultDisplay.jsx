import React from 'react';

const ResultDisplay = ({ error, warning, result }) => {
  return (
    <>
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {warning && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">{warning}</p>
        </div>
      )}

      {result && (
        <div className="mt-4 p-5 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-emerald-600 font-medium mb-1">Raíz aproximada</p>
              <p className="text-2xl font-light text-emerald-900">{result.root.toFixed(8)}</p>
            </div>
            <div>
              <p className="text-xs text-emerald-600 font-medium mb-1">Iteraciones</p>
              <p className="text-2xl font-light text-emerald-900">{result.iterations}</p>
            </div>
            <div>
              <p className="text-xs text-emerald-600 font-medium mb-1">Error final</p>
              <p className="text-2xl font-light text-emerald-900">
                {typeof result.finalError === 'number' ? result.finalError.toFixed(6) : result.finalError}%
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultDisplay;