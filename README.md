---
title: taller-powerbi-fundetec
emoji: 🐳
colorFrom: yellow
colorTo: yellow
sdk: static
pinned: false
tags:
  - deepsite
---

# Taller Power BI - FUNDETEC

Aplicación web para el Seminario/Taller: Modelado y Análisis de Datos con Microsoft Power BI, desarrollado para FUNDETEC.

![Power BI Logo](assets/img/logos/logo-powerbi.png)

## Descripción

Esta aplicación web proporciona una plataforma interactiva para el taller de Power BI, permitiendo a los participantes seguir el contenido de manera estructurada, acceder a recursos y realizar ejercicios prácticos.

El taller está diseñado específicamente para estudiantes de Auxiliar en Sistemas Informáticos de FUNDETEC, con enfoque en aplicaciones prácticas de análisis de datos relevantes para su perfil profesional.

### Objetivos del Taller

- Introducir a los participantes en los conceptos fundamentales del análisis de datos
- Familiarizar a los estudiantes con la interfaz y funcionalidades de Power BI Desktop
- Enseñar técnicas prácticas de conexión, transformación y visualización de datos
- Desarrollar habilidades para crear dashboards interactivos y profesionales
- Proporcionar recursos para continuar el aprendizaje de manera autónoma

## Estructura del Taller

El taller está organizado en cuatro módulos principales:

1. **Introducción al Análisis de Datos y Power BI** (45 min)
   - Importancia del Análisis de Datos
   - Microsoft Power BI: Componentes Esenciales
   - Recorrido por la Interfaz
   - Tipos de Datos y Modelos (Conceptos Básicos)
   - Asistentes IA en el Flujo de Trabajo

2. **Conexión y Transformación de Datos** (60 min)
   - Conexión a Fuentes de Datos
   - Introducción a Power Query (Editor)
   - Transformaciones Fundamentales
   - Modelado Básico: Creación de Relaciones

3. **Demostración Magistral: Power BI en Acción** (60 min)
   - Contexto: Sistema Marduk y Dashboards Judiciales
   - Conexión y Preparación de Datos
   - Introducción a DAX
   - Construcción de Visualizaciones
   - Interactividad y Filtros

4. **Aplicación Práctica y Conclusiones** (75 min)
   - Práctica Guiada: Introducción y Dataset
   - Desarrollo Paso a Paso
   - Resultado Esperado y Solución de Problemas
   - Recursos para Continuar Aprendiendo

## Características de la Aplicación

- **Ruta de Aprendizaje**: Visualización clara del progreso a través de los módulos
- **Modos de Uso**: Adaptación del contenido según el rol (Estudiante, Facilitador, Autoguiado)
- **Recursos Descargables**: Datasets, guías, plantillas y prompts para IA
- **Ejercicios Interactivos**: Quizzes y actividades prácticas para reforzar el aprendizaje
- **Verificación de Requisitos**: Comprobación de los requisitos técnicos necesarios
- **Contenido Multimedia**: Videos instructivos y demostraciones para enriquecer el aprendizaje
- **Diseño Responsivo**: Adaptación a diferentes dispositivos y tamaños de pantalla

## Modos de Uso

La aplicación ofrece tres modos de uso diferentes, cada uno adaptado a un perfil específico:

### Modo Facilitador

Diseñado para quien imparte el taller, incluye:
- Notas específicas para el facilitador en cada módulo
- Distribución de tiempo recomendada para cada paso
- Puntos clave a enfatizar durante la explicación
- Preguntas frecuentes y sus respuestas
- Consejos para la enseñanza y manejo del grupo

### Modo Estudiante

Orientado a los participantes del taller presencial, incluye:
- Contenido estructurado para seguir la explicación del facilitador
- Ejercicios prácticos paso a paso
- Actividades colaborativas para realizar en clase
- Cuestionarios para verificar la comprensión
- Recursos complementarios para profundizar

### Modo Autoguiado

Para aprendizaje independiente sin facilitador, incluye:
- Explicaciones más detalladas de cada concepto
- Checkpoints para verificar el progreso y comprensión
- Recursos adicionales para ampliar conocimientos
- Guías paso a paso más exhaustivas
- Enlaces a documentación oficial y tutoriales externos

## Requisitos Técnicos

Para aprovechar al máximo el taller, los participantes deben contar con:

- Power BI Desktop instalado (versión más reciente)
- Windows 10/11
- Mínimo 4GB RAM (recomendado 8GB)
- Conexión a Internet estable

## Facilitador

El taller es impartido por el Ing. Alexander Oviedo Fadul, Ingeniero de Sistemas y Abogado con Máster en Big Data y Business Intelligence, especialista en Gestión y Seguridad de Bases de Datos. Creador del sistema "Marduk", un ecosistema integral de innovación judicial que revoluciona la administración de justicia en Colombia.

## Instalación y Uso

### Opción 1: Uso local directo

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador
3. Explora la ruta de aprendizaje y los recursos disponibles
4. Haz clic en "Comenzar Taller" para ir a la sección de modalidades
5. Selecciona el modo que mejor se adapte a tu rol
6. Sigue los pasos de cada módulo y completa los ejercicios

### Opción 2: Servidor local (recomendado para desarrollo)

1. Clona o descarga este repositorio
2. Ejecuta el servidor local incluido:
   ```
   node server.js
   ```
3. Abre tu navegador y visita `http://localhost:8080`

### Opción 3: Despliegue en servidor web (producción)

1. Sube todos los archivos a tu servidor web (Apache, Nginx, etc.)
2. Asegúrate de que el archivo `.htaccess` esté correctamente configurado (para servidores Apache)
3. Accede a la aplicación a través de la URL de tu servidor

## Interacción entre Componentes

La aplicación está diseñada con una arquitectura modular que permite la interacción fluida entre sus diferentes componentes:

1. **Inicialización de la Aplicación**: El archivo `app-initializer.js` es el punto de entrada que configura la aplicación, carga los módulos y establece los eventos.

2. **Sistema de Navegación**:
   - La ruta de aprendizaje muestra todos los módulos disponibles
   - Al seleccionar un módulo, se carga su contenido específico
   - Dentro de cada módulo, el navegador de pasos permite avanzar secuencialmente

3. **Gestión de Modos**:
   - El selector de modo almacena la preferencia en localStorage
   - El renderizador de contenido (`module-renderer.js`) adapta la visualización según el modo seleccionado
   - Cada módulo contiene secciones específicas para cada modo (facilitador, estudiante, autoguiado)

4. **Sistema de Progreso**:
   - El progreso se guarda automáticamente en localStorage
   - Se actualiza al completar pasos, responder quizzes o marcar checkpoints
   - El indicador visual muestra el avance global y por módulo

5. **Recursos y Modales**:
   - Los recursos se cargan dinámicamente en modales
   - Los modales se gestionan de forma centralizada para evitar conflictos
   - La verificación de requisitos utiliza el sistema de modales

## Recursos Incluidos

### Datasets
- `tickets_soporte.csv`: Datos de tickets de soporte IT para análisis
- `ventas_trimestrales.xlsx`: Datos de ventas por trimestre, producto y región
- `marduk_simplificado.xlsx`: Conjunto de datos simplificado del sistema Marduk
- `ventas_supermercados.csv`: Datos de ventas en supermercados de Argentina
- `financial_sample.xlsx`: Muestra financiera oficial de Microsoft con datos de ventas por segmentos y países

### Plantillas
- `plantilla_dashboard_ventas.pbit`: Plantilla para crear dashboard de ventas
- `plantilla_dashboard_rrhh.pbit`: Plantilla para análisis de recursos humanos
- `project_web_template.pbit`: Plantilla oficial de Microsoft para análisis de proyectos y tareas en Project for the Web

### Guías y Manuales
- `guia_rapida_power_bi.md`: Pasos básicos para comenzar a usar Power BI Desktop
- `guia_power_query.md`: Referencia de transformaciones comunes en Power Query
- `guia_dax.md`: Guía de funciones y expresiones DAX
- `dax_reference.pdf`: Documento oficial de Microsoft con todas las funciones DAX
- `introduccion_power_bi_cea.pdf`: Guía introductoria de la Universidad de Puerto Rico
- `excel_power_query.pdf`: Manual completo sobre el uso de Power Query en Excel

### Videos Instructivos
- Colección organizada de enlaces a videos tutoriales en español (assets/videos_instructivos.md)
- Videos embebidos en el contenido de los módulos
- Tutoriales paso a paso para cada fase del análisis de datos
- Demostraciones de creación de dashboards completos

### Sitios Web de Referencia
- Colección de enlaces a documentación oficial, blogs de expertos y comunidades (assets/sitios_referencia.md)
- Enlaces a Microsoft Learn, PowerBI SP, Biti y El Futuro de los Datos
- Comunidades activas como Power Platform España y PowerBIEspañol

## Estructura del Proyecto

```
/
├── index.html            # Aplicación web principal
├── perfil.html           # Página de perfil de usuario
├── diagnostico.html      # Herramienta de diagnóstico
├── acceso-directo.html   # Página de acceso directo a módulos
├── css/                  # Estilos CSS
│   ├── styles.css        # Estilos personalizados
│   ├── enhanced-mode.css # Estilos mejorados para modos de usuario
│   ├── modal.css         # Estilos para modales
│   └── vendor/           # Bibliotecas CSS de terceros
│       └── basic.css     # CSS básico de respaldo
├── js/                   # Scripts JavaScript
│   ├── modules.js        # Definición de módulos
│   ├── module-intro.js   # Contenido del módulo de introducción
│   ├── module-transform.js # Contenido del módulo de transformación
│   ├── module-demo.js    # Contenido del módulo de demostración
│   ├── module-practice.js # Contenido del módulo de práctica
│   ├── video-integrator.js # Integrador de videos de YouTube
│   ├── markdown-loader.js # Cargador de contenido Markdown
│   ├── content-paths.js  # Rutas de archivos Markdown
│   ├── debug-helper.js   # Utilidades para depuración
│   ├── image-handler.js  # Manejador de imágenes
│   ├── modal-init.js     # Inicializador de modales
│   └── app-initializer.js # Inicializador de la aplicación
├── components/           # Componentes reutilizables
│   ├── module-card.js    # Componente de tarjeta de módulo
│   ├── step-navigator.js # Navegador de pasos
│   └── interactive-elements.js # Elementos interactivos (quizzes, etc.)
├── assets/               # Recursos estáticos
│   ├── img/              # Imágenes y logos
│   ├── datasets/         # Conjuntos de datos para práctica
│   │   └── adicionales/  # Datasets adicionales
│   ├── guides/           # Guías y manuales
│   │   └── adicionales/  # Guías adicionales
│   ├── templates/        # Plantillas de Power BI
│   │   └── adicionales/  # Plantillas adicionales
│   ├── videos/           # Videos instructivos
│   ├── videos_instructivos.md # Colección de enlaces a videos
│   └── sitios_referencia.md # Colección de enlaces a sitios web
├── docs/                 # Documentación y recursos
│   ├── modulos/          # (Vacía - contenido movido a legacy_code)
│   ├── guias/            # (Vacía - contenido movido a legacy_code)
│   └── recursos/         # Recursos adicionales para el taller
├── legacy_code/          # Código no utilizado (para referencia)
│   ├── html/             # Páginas HTML no utilizadas
│   ├── js/               # Scripts JS no utilizados
│   ├── css/              # Estilos CSS no utilizados
│   └── docs/             # Documentación Markdown no utilizada
│       ├── modulos/      # Contenido Markdown de módulos
│       └── guias/        # Guías en formato Markdown
├── server.js             # Servidor local para desarrollo
├── .htaccess             # Configuración para servidores Apache
├── README.md             # Documentación principal
├── README_RECURSOS_ADICIONALES.md # Documentación de recursos adicionales
└── CHANGELOG.md          # Registro de cambios
```

## Solución de Problemas

### Problemas con el servidor local

Si experimentas problemas al ejecutar el servidor local:

1. Asegúrate de tener Node.js instalado
2. Ejecuta `node server.js` desde la raíz del proyecto
3. Si el puerto 8081 está ocupado, puedes modificar el puerto en el archivo `server.js`
4. Accede a la aplicación a través de `http://localhost:8081`

### Problemas con la carga de contenido

La aplicación carga todo el contenido desde archivos JavaScript predefinidos:

1. Cada módulo tiene su propio archivo JS (module-intro.js, module-transform.js, etc.)
2. No se utilizan archivos Markdown para cargar contenido
3. Si necesitas modificar el contenido, edita directamente los archivos JS correspondientes

### Problemas con los estilos

La aplicación utiliza Tailwind CSS desde CDN para los estilos principales:

1. Asegúrate de tener conexión a Internet para cargar Tailwind CSS desde CDN
2. Si hay problemas con el CDN, la aplicación utiliza `css/vendor/basic.css` como respaldo
3. Los estilos personalizados se encuentran en `css/styles.css` y `css/enhanced-mode.css`

### Problemas con los modos de usuario

Si experimentas problemas con los modos de usuario:

1. Verifica que localStorage esté habilitado en tu navegador
2. Intenta limpiar el localStorage con `localStorage.clear()` en la consola del navegador
3. Asegúrate de que los archivos JS de los módulos incluyan contenido específico para cada modo

### Problemas con los recursos

Si los recursos no se cargan correctamente:

1. Verifica que los archivos existan en las carpetas correspondientes
2. Comprueba que los formatos sean compatibles con tu navegador
3. Si usas un servidor local, asegúrate de que esté configurado para servir archivos estáticos

## Recursos Externos Recomendados

### Documentación Oficial
- [Documentación de Power BI](https://learn.microsoft.com/es-es/power-bi/)
- [Guía de inicio rápido de Power BI Desktop](https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started)
- [Referencia de funciones DAX](https://learn.microsoft.com/es-es/dax/dax-function-reference)
- [Documentación de Power Query](https://learn.microsoft.com/es-es/power-query/)
- [Guía de Power BI](https://learn.microsoft.com/es-es/power-bi/guidance/)

### Cursos y Tutoriales en Español
- [Microsoft Learn: Power BI](https://learn.microsoft.com/es-es/training/powerplatform/power-bi)
- [datdata (YouTube)](https://www.youtube.com/c/datdata)
- [EXCELeINFO (YouTube)](https://www.youtube.com/channel/UCZHYfToa95Ybj3vPN9EPMAg)
- [PowerBIEspañol (YouTube)](https://www.youtube.com/channel/UCSK9waxG-zoj_GyfKLuTU4w)
- [PowerBI SP (Blog)](https://powerbisp.com/blog)
- [Biti (Blog)](https://www.biti.es/)
- [El Futuro de los Datos (Blog)](https://www.elfuturodelosdatos.com/)

### Comunidad
- [Comunidad Microsoft Fabric/Power BI (Español)](https://community.fabric.microsoft.com/t5/Comunidad-de-Power-BI-en-espa%C3%B1ol/ct-p/PBI_Espanol)
- [Power Platform España](https://www.next-step.es/power-platform-espana/)
- [Grupo de Telegram PowerBIEspañol](https://t.me/powerbiespanol)
- [Galería de Temas](https://community.fabric.microsoft.com/t5/Themes-Gallery/bd-p/ThemesGallery)

### Datasets y Ejemplos
- [Ejemplos y datasets oficiales](https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets)
- [Datos Abiertos Argentina](https://datos.gob.ar/)
- [Datos Abiertos España](https://datos.gob.es/)

## Licencia

© 2025 FUNDETEC - Ing. Alexander Oviedo Fadul. Todos los derechos reservados.

---

Desarrollado para FUNDETEC por Alexander Oviedo Fadul.