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

## Descripción

Esta aplicación web proporciona una plataforma interactiva para el taller de Power BI, permitiendo a los participantes seguir el contenido de manera estructurada, acceder a recursos y realizar ejercicios prácticos.

El taller está diseñado específicamente para estudiantes de Auxiliar en Sistemas Informáticos de FUNDETEC, con enfoque en aplicaciones prácticas de análisis de datos relevantes para su perfil profesional.

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

## Estructura del Proyecto

```
/
├── index.html            # Aplicación web principal
├── css/                  # Estilos CSS
│   ├── styles.css        # Estilos personalizados
│   └── vendor/           # Bibliotecas CSS de terceros
│       └── tailwind.min.css # Tailwind CSS (local)
├── js/                   # Scripts JavaScript
│   ├── modules.js        # Definición de módulos
│   ├── module-intro.js   # Contenido del módulo de introducción
│   ├── module-transform.js # Contenido del módulo de transformación
│   ├── module-renderer.js # Renderizador de módulos
│   ├── markdown-loader.js # Cargador de archivos Markdown
│   └── app-initializer.js # Inicializador de la aplicación
├── components/           # Componentes reutilizables
├── assets/               # Recursos estáticos
│   ├── img/              # Imágenes
│   ├── datasets/         # Conjuntos de datos para práctica
│   ├── guides/           # Guías y manuales
│   └── templates/        # Plantillas de Power BI
├── docs/                 # Documentación y contenido Markdown
│   └── modulos/          # Contenido de los módulos en formato Markdown
├── server.js             # Servidor local para desarrollo
└── .htaccess             # Configuración para servidores Apache
```

## Solución de Problemas

### Problemas de CORS al cargar archivos Markdown

Si experimentas problemas de CORS al cargar archivos Markdown, puedes:

1. Usar el servidor local incluido (`node server.js`)
2. Configurar tu servidor web para permitir CORS (ver archivo `.htaccess`)
3. La aplicación tiene un mecanismo de respaldo que cargará contenido predefinido si no puede acceder a los archivos Markdown

### Problemas con Tailwind CSS

La aplicación usa una versión local de Tailwind CSS para evitar problemas con el CDN en producción. Si experimentas problemas con los estilos:

1. Verifica que el archivo `css/vendor/tailwind.min.css` exista
2. Si es necesario, puedes regenerarlo o descargarlo desde la página oficial de Tailwind CSS

## Licencia

© 2025 FUNDETEC - Ing. Alexander Oviedo Fadul. Todos los derechos reservados.

---

Desarrollado para FUNDETEC por Alexander Oviedo Fadul.