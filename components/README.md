# Componentes de la Aplicación Web del Taller Power BI

Este directorio contiene los componentes JavaScript reutilizables que se utilizan en la aplicación web del taller de Power BI.

## Estructura de Archivos

- `module-card.js` - Componente para las tarjetas de módulos en la ruta de aprendizaje
- `step-navigator.js` - Componente para el navegador de pasos dentro de un módulo
- `interactive-elements.js` - Componente para elementos interactivos como quizzes, tooltips, etc.

## Componentes Principales

### Module Card

El componente `module-card.js` proporciona funciones para crear tarjetas de módulos en la ruta de aprendizaje:

- `createModuleCard(moduleId, title, duration, icon, index, isActive, isCompleted, progress)`: Crea una tarjeta de módulo
- `createModuleConnector()`: Crea un conector visual entre módulos
- `createResourceCard(icon, title, description, type, size, duration)`: Crea una tarjeta de recurso

### Step Navigator

El componente `step-navigator.js` proporciona funciones para crear el navegador de pasos dentro de un módulo:

- `createStepNavigator(moduleId, steps, currentStep, completedSteps)`: Crea un navegador de pasos
- `createStepButton(stepIndex, stepTitle, isActive, isCompleted)`: Crea un botón de paso individual

### Interactive Elements

El componente `interactive-elements.js` proporciona funciones para crear elementos interactivos:

- `createInteractiveDiagram(stages)`: Crea un diagrama interactivo
- `createQuiz(question, options, correctIndex)`: Crea un quiz interactivo
- `createDragDropExercise(items, dropZones)`: Crea un ejercicio de arrastrar y soltar
- `createTooltip(content, position)`: Crea un tooltip

## Uso de los Componentes

Los componentes se utilizan principalmente desde los archivos JavaScript en la carpeta `js/`:

```javascript
// Ejemplo de uso de module-card.js
const moduleCardHTML = createModuleCard(
    'intro',
    'Introducción al Análisis de Datos y Power BI',
    '45 min',
    '📊',
    0,
    true,
    false,
    25
);

// Ejemplo de uso de step-navigator.js
const stepNavigatorHTML = createStepNavigator(
    'intro',
    ['Paso 1', 'Paso 2', 'Paso 3'],
    1,
    [true, false, false]
);

// Ejemplo de uso de interactive-elements.js
const quizHTML = createQuiz(
    '¿Cuál es la principal ventaja de Power BI?',
    ['Facilidad de uso', 'Visualizaciones avanzadas', 'Integración con Excel'],
    1
);
```

## Estilo y Diseño

Los componentes generan HTML con clases de Tailwind CSS para el estilo. Las clases principales incluyen:

- `path-node`: Para las tarjetas de módulos
- `step-button`: Para los botones de pasos
- `quiz-option`: Para las opciones de quiz
- `resource-card`: Para las tarjetas de recursos

## Notas de Desarrollo

- Los componentes están diseñados para ser reutilizables y modulares
- Se utiliza Tailwind CSS para el estilo
- Los componentes generan HTML que luego se inserta en el DOM
- Se evita el uso de frameworks para mantener la simplicidad
