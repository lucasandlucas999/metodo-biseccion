import * as math from 'mathjs';

export const evaluateFunction = (expression, xValue) => {
  try {
    const scope = { x: xValue, e: Math.E };
    return math.evaluate(expression, scope);
  } catch (err) {
    throw new Error('Error al evaluar la función');
  }
};

export const validateFunction = (expression) => {
  try {
    evaluateFunction(expression, 0);
    evaluateFunction(expression, 1);
    return { isValid: true, error: null };
  } catch (err) {
    return { isValid: false, error: 'La función ingresada no es válida' };
  }
};

export const calculateError = (xNew, xOld) => {
  if (Math.abs(xNew) < 1e-10) {
    return Math.abs(xNew - xOld);
  }
  return Math.abs((xNew - xOld) / xNew) * 100;
};