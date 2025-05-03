# JavaScript de la Aplicación Web del Taller Power BI

Este directorio contiene los archivos JavaScript que controlan la funcionalidad de la aplicación web del taller de Power BI.

## Estructura de Archivos

- `app-initializer.js` - Inicializa la aplicación y contiene las funciones principales
- `modules.js` - Define los módulos del taller y sus propiedades
- `module-intro.js` - Contenido específico del módulo de introducción
- `module-transform.js` - Contenido específico del módulo de transformación
- `module-renderer.js` - Funciones para renderizar los módulos y su contenido
- `markdown-loader.js` - Funciones para cargar y procesar contenido desde archivos Markdown
- `content-config.js` - Configuración de rutas a archivos de contenido

## Flujo de Navegación

La aplicación sigue el siguiente flujo de navegación:

1. **Inicio**: El usuario hace clic en "Comenzar Taller"
2. **Ruta de Aprendizaje**: Se muestra la ruta con los módulos disponibles
3. **Selección de Modo**: El usuario selecciona un modo (Estudiante, Facilitador, Autoguiado)
4. **Selección de Módulo**: El usuario selecciona un módulo para comenzar
5. **Navegación por Pasos**: El usuario navega por los pasos del módulo
6. **Completar Módulo**: Al completar un módulo, se muestra un modal de felicitación
7. **Siguiente Módulo**: El usuario puede continuar con el siguiente módulo

## Persistencia de Datos

La aplicación utiliza localStorage para guardar:

- `userMode`: Modo seleccionado por el usuario
- `currentState`: Estado actual (módulo y paso)
- `moduleProgress`: Progreso en cada módulo

## Carga de Contenido

El contenido se carga desde archivos Markdown en la carpeta `docs/`:

- `docs/guias/guia-power-bi-para-principiantes.md` - Contenido para los módulos de introducción y transformación
- `docs/planificacion/desarrollo-de-taller-power-bi.md` - Contenido para los módulos de demostración y práctica

## Funciones Principales

- `initLearningPath()`: Inicializa la ruta de aprendizaje
- `showModuleContent(moduleId, stepIndex)`: Muestra el contenido de un módulo
- `renderStepNavigator(moduleId, currentStep)`: Renderiza el navegador de pasos
- `renderStepContent(moduleId, stepIndex)`: Renderiza el contenido de un paso
- `updateUserMode(mode)`: Actualiza el modo de usuario
- `loadModuleContent(moduleId, filePath)`: Carga contenido desde un archivo Markdown

## Dependencias

- `components/module-card.js`: Componente para las tarjetas de módulos
- `components/step-navigator.js`: Componente para el navegador de pasos
- `components/interactive-elements.js`: Componente para elementos interactivos

## Notas de Desarrollo

- La aplicación está diseñada para ser modular y extensible
- Se utiliza localStorage para persistencia de datos
- El contenido se carga dinámicamente desde archivos Markdown
- Se implementa un sistema de caché para mejorar el rendimiento
