# Método de la Bisección

Sistema interactivo para encontrar raíces de funciones matemáticas mediante el método de bisección. Herramienta educativa desarrollada para el curso de Métodos Numéricos.

## Características

- Cálculo iterativo del método de bisección con visualización paso a paso
- Soporte para funciones matemáticas complejas (trigonométricas, exponenciales, logarítmicas)
- Gráfica interactiva que muestra la función y las iteraciones
- Tabla detallada de todas las iteraciones realizadas
- Historial de cálculos guardado localmente
- Diccionario de funciones disponibles con ejemplos
- Validaciones automáticas de entrada
- Interfaz minimalista y responsive

## Tecnologías utilizadas

- React 18
- Vite
- Tailwind CSS
- Recharts (visualización de gráficas)
- Math.js (evaluación de expresiones matemáticas)
- Lucide React (iconos)

## Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/lucasandlucas999/metodo-biseccion.git
cd metodo-biseccion
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
```

4. Crear archivos de configuración de Tailwind:

Crear `tailwind.config.js` en la raíz del proyecto:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Crear `postcss.config.js` en la raíz del proyecto:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

5. Verificar que `src/index.css` contenga las directivas de Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Ejecución en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Construcción para producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Estructura del proyecto
```
metodo-biseccion/
├── src/
│   ├── components/
│   │   ├── BisectionCalculator.jsx    # Componente principal
│   │   ├── InputPanel.jsx              # Panel de entrada de datos
│   │   ├── ResultDisplay.jsx           # Visualización de resultados
│   │   ├── GraphVisualization.jsx      # Gráfica de la función
│   │   ├── IterationsTable.jsx         # Tabla de iteraciones
│   │   ├── FunctionDictionary.jsx      # Diccionario de funciones
│   │   ├── HistoryPanel.jsx            # Panel de historial
│   │   ├── InfoPanel.jsx               # Panel de información
│   │   └── CreditsPanel.jsx            # Panel de créditos
│   ├── utils/
│   │   ├── bisectionAlgorithm.js       # Implementación del algoritmo
│   │   └── mathEvaluator.js            # Evaluación de funciones
│   ├── hooks/
│   │   └── useLocalStorage.js          # Hook para localStorage
│   ├── constants/
│   │   └── functionDictionary.js       # Constantes de funciones
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Uso

1. Ingresa una función matemática en el campo "Función f(x)" utilizando la variable `x`
2. Define el intervalo de búsqueda con los límites inferior (a) y superior (b)
3. Establece el error porcentual máximo permitido como criterio de parada
4. Haz clic en "Calcular" para ejecutar el método de bisección
5. Revisa los resultados en la tabla de iteraciones y la gráfica
6. Los cálculos se guardan automáticamente en el historial

### Ejemplos de funciones válidas

- Polinomios: `x^3 - x - 2`, `x^2 - 4`
- Trigonométricas: `sin(x) - x/2`, `cos(x) - x`
- Exponenciales: `e^x - 3*x`, `exp(x) - 2`
- Logarítmicas: `log(x) - 2`, `log10(x) + x`
- Raíces: `sqrt(x) - 2`, `sqrt(x+1) - 3`
- Combinadas: `x^2 + sin(x) - 1`

### Sintaxis soportada

- Operadores: `+`, `-`, `*`, `/`, `^`
- Funciones: `sin()`, `cos()`, `tan()`, `log()`, `log10()`, `sqrt()`, `exp()`, `abs()`
- Constantes: `pi`, `e`

## Solución de problemas

### Tailwind CSS no se aplica

Si los estilos no se cargan correctamente:

1. Detén el servidor de desarrollo
2. Elimina la carpeta `node_modules` y `package-lock.json`
3. Ejecuta `npm install` nuevamente
4. Verifica que los archivos de configuración estén correctos
5. Inicia el servidor con `npm run dev`

### Error al evaluar funciones

Asegúrate de usar la sintaxis correcta. Consulta el diccionario de funciones disponible en la interfaz para ver ejemplos.

### El historial no se guarda

El historial se almacena en localStorage del navegador. Verifica que tu navegador permita el uso de localStorage y que no esté en modo incógnito.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## Créditos

Desarrollado por:
- Lucas Acuña
- Fredy Céspedes
- Diogo Lima

Asistido por Claude Sonnet 4.5

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.