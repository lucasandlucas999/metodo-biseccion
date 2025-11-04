import React from 'react';

const IterationsTable = ({ iterations }) => {
  if (iterations.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Iteraciones</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">k</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">aₖ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">bₖ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">xₖ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">f(xₖ)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">|bₖ - aₖ|</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Error (%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {iterations.map((iter, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-900">{iter.k}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{iter.ak.toFixed(8)}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{iter.bk.toFixed(8)}</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{iter.xk.toFixed(8)}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{iter.fxk.toFixed(8)}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{iter.interval.toFixed(8)}</td>
                <td className="px-6 py-3 text-sm text-gray-600">
                  {iter.error === '-' ? '-' : iter.error.toFixed(6)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IterationsTable;