import React, { useState } from 'react';
import InputPanel from './InputPanel';
import ResultDisplay from './ResultDisplay';
import GraphVisualization from './GraphVisualization';
import IterationsTable from './IterationsTable';
import FunctionDictionary from './FunctionDictionary';
import HistoryPanel from './HistoryPanel';
import InfoPanel from './InfoPanel';
import CreditsPanel from './CreditsPanel';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { validateFunction } from '../utils/mathEvaluator';
import { runBisectionMethod } from '../utils/bisectionAlgorithm';

const BisectionCalculator = () => {
  const [func, setFunc] = useState('x^3 - x - 2');
  const [a, setA] = useState('1');
  const [b, setB] = useState('2');
  const [epsilon, setEpsilon] = useState('0.01');
  const [iterations, setIterations] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [history, setHistory, clearHistoryStorage] = useLocalStorage('bisection_history', []);

  const saveToHistory = (functionStr, aVal, bVal, epsVal, rootVal, iters, finalErr) => {
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      function: functionStr,
      a: aVal,
      b: bVal,
      epsilon: epsVal,
      root: rootVal,
      iterations: iters,
      finalError: finalErr
    };
    setHistory([newEntry, ...history].slice(0, 10));
  };

  const loadFromHistory = (entry) => {
    setFunc(entry.function);
    setA(entry.a.toString());
    setB(entry.b.toString());
    setEpsilon(entry.epsilon.toString());
    setTimeout(() => handleCalculate(entry.function, entry.a, entry.b, entry.epsilon), 100);
  };

  const handleCalculate = (funcOverride = null, aOverride = null, bOverride = null, epsOverride = null) => {
    setError('');
    setWarning('');
    setIterations([]);
    setResult(null);

    const funcToUse = funcOverride || func;
    const aToUse = aOverride !== null ? aOverride : parseFloat(a);
    const bToUse = bOverride !== null ? bOverride : parseFloat(b);
    const epsToUse = epsOverride !== null ? epsOverride : parseFloat(epsilon);

    // Validaciones
    const validation = validateFunction(funcToUse);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    if (isNaN(aToUse) || isNaN(bToUse) || isNaN(epsToUse)) {
      setError('Los valores ingresados deben ser números válidos.');
      return;
    }

    if (aToUse >= bToUse) {
      setError('El límite inferior (a) debe ser menor que el límite superior (b).');
      return;
    }

    if (epsToUse <= 0) {
      setError('El error permitido debe ser un valor positivo.');
      return;
    }

    // Ejecutar algoritmo
    const results = runBisectionMethod(funcToUse, aToUse, bToUse, epsToUse);

    if (results.error) {
      setError(results.error);
      return;
    }

    if (results.warning) {
      setWarning(results.warning);
    }

    setIterations(results.iterations);
    setResult(results.result);

    // Guardar en historial
    if (results.result) {
      saveToHistory(
        funcToUse,
        aToUse,
        bToUse,
        epsToUse,
        results.result.root,
        results.result.iterations,
        results.result.finalError
      );
    }
  };

  const handleClear = () => {
    setFunc('x^3 - x - 2');
    setA('1');
    setB('2');
    setEpsilon('0.01');
    setIterations([]);
    setResult(null);
    setError('');
    setWarning('');
  };

  const handleClearHistory = () => {
    setHistory([]);
    clearHistoryStorage();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Método de la Bisección
          </h1>
          <p className="text-gray-500 text-sm">
            Encuentra raíces de funciones mediante bisección iterativa
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Panel izquierdo - Entrada y Resultados */}
          <div className="lg:col-span-2 space-y-6">
            <InputPanel
              func={func}
              setFunc={setFunc}
              a={a}
              setA={setA}
              b={b}
              setB={setB}
              epsilon={epsilon}
              setEpsilon={setEpsilon}
              onCalculate={() => handleCalculate()}
              onClear={handleClear}
            />

            <ResultDisplay error={error} warning={warning} result={result} />

            <GraphVisualization func={func} iterations={iterations} />

            <IterationsTable iterations={iterations} />
          </div>

          {/* Panel derecho - Ayuda e Historial */}
          <div className="space-y-6">
            <FunctionDictionary />
            
            <HistoryPanel
              history={history}
              onLoadHistory={loadFromHistory}
              onClearHistory={handleClearHistory}
            />

            <InfoPanel />

            <CreditsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BisectionCalculator;