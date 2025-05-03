# Pruebas de la Aplicación Web del Taller Power BI

Este directorio contiene pruebas para verificar el correcto funcionamiento de la aplicación web del taller de Power BI.

## Estructura de Pruebas

- `/js` - Pruebas para los archivos JavaScript principales
  - `app-initializer.test.js` - Pruebas para la inicialización de la aplicación
  - `modules.test.js` - Pruebas para la definición de módulos
  - `module-renderer.test.js` - Pruebas para el renderizado de módulos
  
- `/components` - Pruebas para los componentes
  - `module-card.test.js` - Pruebas para las tarjetas de módulos
  - `step-navigator.test.js` - Pruebas para el navegador de pasos
  - `interactive-elements.test.js` - Pruebas para elementos interactivos

## Cómo Ejecutar las Pruebas

Para ejecutar todas las pruebas:

```bash
npm test
```

Para ejecutar una prueba específica:

```bash
npm test -- tests/js/app-initializer.test.js
```

## Pruebas Manuales

Además de las pruebas automatizadas, se recomienda realizar las siguientes pruebas manuales:

1. **Flujo de navegación principal**:
   - Hacer clic en "Comenzar Taller"
   - Verificar que se muestre la ruta de aprendizaje
   - Seleccionar un modo (Estudiante, Facilitador, Autoguiado)
   - Seleccionar un módulo
   - Navegar entre los pasos del módulo

2. **Verificación de recursos**:
   - Hacer clic en cada botón de recursos
   - Verificar que se muestre el modal correspondiente
   - Verificar que los recursos se puedan descargar

3. **Verificación de requisitos**:
   - Hacer clic en "Verificar Todos los Requisitos"
   - Verificar que se muestren los resultados correctamente

## Registro de Pruebas

Cada vez que se realicen pruebas manuales, se debe registrar el resultado en el archivo `tests/manual-test-log.md`.
