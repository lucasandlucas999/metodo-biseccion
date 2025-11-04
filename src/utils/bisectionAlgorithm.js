import { evaluateFunction, calculateError } from './mathEvaluator';

export const runBisectionMethod = (func, a, b, epsilon, maxIterations = 100) => {
  const results = {
    iterations: [],
    result: null,
    error: null,
    warning: null
  };

  try {
    const fa = evaluateFunction(func, a);
    const fb = evaluateFunction(func, b);

    if (fa * fb > 0) {
      results.error = `f(a) y f(b) deben tener signos opuestos. f(${a}) = ${fa.toFixed(6)}, f(${b}) = ${fb.toFixed(6)}`;
      return results;
    }

    let ak = a;
    let bk = b;
    let k = 0;
    let errorPercent = 100;
    let xOld = ak;

    while (errorPercent > epsilon && k < maxIterations) {
      const xk = (ak + bk) / 2;
      const fxk = evaluateFunction(func, xk);
      const intervalLength = Math.abs(bk - ak);
      
      if (k > 0) {
        errorPercent = calculateError(xk, xOld);
      }

      results.iterations.push({
        k: k,
        ak: ak,
        bk: bk,
        xk: xk,
        fxk: fxk,
        interval: intervalLength,
        error: k === 0 ? '-' : errorPercent
      });

      if (Math.abs(fxk) < 1e-10) {
        errorPercent = 0;
        break;
      }

      const fak = evaluateFunction(func, ak);
      
      if (fak * fxk < 0) {
        bk = xk;
      } else {
        ak = xk;
      }

      xOld = xk;
      k++;
    }

    if (k >= maxIterations) {
      results.warning = 'Se alcanzó el número máximo de iteraciones (100).';
    }

    const finalIter = results.iterations[results.iterations.length - 1];
    results.result = {
      root: finalIter.xk,
      iterations: results.iterations.length,
      finalError: finalIter.error === '-' ? 0 : finalIter.error
    };

  } catch (err) {
    results.error = `Error durante el cálculo: ${err.message}`;
  }

  return results;
};