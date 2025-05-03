# Changelog - Taller Power BI FUNDETEC

Este archivo documenta todos los cambios significativos realizados en el proyecto.

## [1.2.0] - 2024-07-10

### Añadido
- Integración de recursos adicionales del archivo 'docs/recursos/Recursos para Taller Power BI_.md'
- Nuevos datasets: ventas_supermercados.csv y financial_sample.xlsx adicional
- Nueva plantilla: project_web_template.pbit (Microsoft Project for the Web)
- Nuevas guías: introduccion_power_bi_cea.pdf y excel_power_query.pdf
- Colección de enlaces a videos instructivos (assets/videos_instructivos.md)
- Colección de enlaces a sitios web de referencia (assets/sitios_referencia.md)
- Integración de videos de YouTube en el contenido de los módulos
- Integración de enlaces a sitios web de referencia en el contenido de los módulos
- Archivo js/video-integrator.js para manejar la integración de videos
- Archivo js/markdown-loader.js para cargar contenido Markdown
- Archivo js/content-paths.js para definir rutas de archivos Markdown
- Documentación detallada en README_RECURSOS_ADICIONALES.md

### Modificado
- Actualización de js/modules.js para incluir los nuevos recursos
- Actualización de js/app-initializer.js para integrar videos y enlaces
- Actualización de index.html para incluir los nuevos scripts

### Corregido
- Errores en la carga de contenido de módulos
- Problemas con la visualización de recursos adicionales

## [1.1.0] - 2024-05-04

### Añadido
- Contenido específico para cada modo de usuario (Facilitador, Estudiante, Autoguiado)
- Notas detalladas para el facilitador en todos los módulos
- Ejercicios específicos para el modo estudiante
- Checkpoints y recursos adicionales para el modo autoguiado
- Documentación completa en README.md sobre la interacción entre componentes
- Carpeta para videos instructivos en assets/videos/
- Páginas faltantes: perfil.html, diagnostico.html, acceso-directo.html
- Enlaces a recursos externos en la documentación

### Mejorado
- Cuestionarios con mejor visualización y experiencia de usuario
- Contenido de los pasos que estaban en desarrollo
- Documentación sobre los modos de usuario y su funcionamiento
- Estructura del proyecto con mejor organización
- Mensajes de error y solución de problemas en la documentación

### Corregido
- Enlaces rotos en el menú de navegación
- Problemas con la visualización de cuestionarios
- Inconsistencias en la visualización de contenido específico por modo
- Errores en la documentación sobre la estructura del proyecto

## [1.0.0] - 2024-05-03

### Añadido
- Estructura inicial del proyecto con cuatro módulos principales
- Interfaz de usuario con Tailwind CSS
- Sistema de navegación por módulos y pasos
- Contenido completo para todos los módulos
- Funcionalidad de seguimiento de progreso
- Tres modos de uso: Estudiante, Facilitador y Autoguiado
- Servidor Node.js para desarrollo local

### Cambiado
- Migración de carga de contenido desde archivos Markdown a JavaScript predefinido
- Actualización de la estructura de archivos para mejor organización
- Mejora en la visualización de cuestionarios con opciones debajo del texto

### Eliminado
- Dependencia de archivos Markdown para el contenido
- Páginas HTML separadas (acceso-directo.html, perfil.html, diagnostico.html)
- Cargador de archivos Markdown (markdown-loader.js)
- Versión local de Tailwind CSS (reemplazada por CDN)

## [0.9.0] - 2024-05-02

### Añadido
- Implementación inicial de la aplicación web
- Estructura de módulos y pasos
- Contenido en formato Markdown
- Páginas HTML separadas para diferentes funcionalidades
- Sistema de carga de contenido desde archivos Markdown
- Estilos básicos con Tailwind CSS

### Cambiado
- Mejoras en la interfaz de usuario
- Optimización de la carga de contenido

## [0.8.0] - 2024-05-01

### Añadido
- Prototipo inicial de la aplicación
- Estructura básica de archivos
- Documentación preliminar

## Notas de Migración

### Migración a Contenido Predefinido en JavaScript (v0.9.0 → v1.0.0)

En la versión 1.0.0, se realizó una migración importante del sistema de carga de contenido:

1. **Antes**: El contenido se cargaba desde archivos Markdown (.md) utilizando markdown-loader.js
2. **Ahora**: El contenido está predefinido en archivos JavaScript específicos para cada módulo

#### Archivos Movidos a legacy_code

Los siguientes archivos se han movido a la carpeta `legacy_code` ya que ya no son necesarios:

- **HTML**:
  - acceso-directo.html
  - perfil.html
  - diagnostico.html

- **Markdown**:
  - docs/modulos/*.md
  - docs/guias/*.md

- **JavaScript**:
  - js/markdown-loader.js
  - js/markdown-helper.js

- **CSS**:
  - css/vendor/tailwind.min.css

#### Razones del Cambio

1. **Rendimiento**: Carga más rápida al eliminar la necesidad de procesar Markdown
2. **Confiabilidad**: Eliminación de problemas de CORS al cargar archivos Markdown
3. **Mantenibilidad**: Estructura más clara con contenido específico para cada módulo
4. **Flexibilidad**: Mayor control sobre el formato y la interactividad del contenido

#### Cómo Actualizar Contenido

Para actualizar el contenido en la nueva estructura:

1. Edita directamente los archivos JS correspondientes:
   - module-intro.js
   - module-transform.js
   - module-demo.js
   - module-practice.js

2. Sigue la estructura de objetos JavaScript definida en cada archivo
