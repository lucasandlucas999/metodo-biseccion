import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { evaluateFunction } from '../utils/mathEvaluator';

const GraphVisualization = ({ func, iterations }) => {
  const generateGraphData = () => {
    if (iterations.length === 0) return [];
    
    const aNum = Math.min(...iterations.map(it => it.ak));
    const bNum = Math.max(...iterations.map(it => it.bk));
    const range = bNum - aNum;
    const start = aNum - range * 0.2;
    const end = bNum + range * 0.2;
    const points = 100;
    const step = (end - start) / points;
    
    const data = [];
    for (let i = 0; i <= points; i++) {
      const x = start + i * step;
      try {
        const y = evaluateFunction(func, x);
        if (isFinite(y) && Math.abs(y) < 1000) {
          data.push({ x, y });
        }
      } catch (e) {
        // Ignorar puntos donde la función no está definida
        console.log("Error en generacion de puntos en la gráfica:", e);
      }
    }
    console.log(data);
    return data;
  };

  if (iterations.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Visualización</h2>
      <div className="overflow-x-auto">
        <LineChart width={700} height={350} data={generateGraphData()}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={['auto', 'auto']}
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value) => value.toFixed(4)}
            labelFormatter={(value) => `x = ${value.toFixed(4)}`}
          />
          <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1.5} />
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={false}
            name="f(x)"
          />
          {iterations.map((iter, idx) => (
            <ReferenceLine 
              key={idx}
              x={iter.xk} 
              stroke={idx === iterations.length - 1 ? "#10b981" : "#f59e0b"} 
              strokeWidth={idx === iterations.length - 1 ? 2 : 1}
              strokeDasharray={idx === iterations.length - 1 ? "0" : "4 4"}
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default GraphVisualization;