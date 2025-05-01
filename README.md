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

## Cómo Usar la Aplicación

1. Abre el archivo `app.html` en tu navegador web
2. Explora la ruta de aprendizaje y los recursos disponibles
3. Haz clic en "Comenzar Taller" para iniciar el recorrido por los módulos
4. Selecciona el modo que mejor se adapte a tu rol
5. Sigue los pasos de cada módulo y completa los ejercicios

## Estructura de Archivos

```
/
├── app.html              # Aplicación web principal
├── css/                  # Estilos CSS
├── js/                   # Scripts JavaScript
│   ├── modules.js        # Definición de módulos
│   ├── module-intro.js   # Contenido del módulo de introducción
│   ├── module-transform.js # Contenido del módulo de transformación
│   ├── module-renderer.js # Renderizador de módulos
│   └── app-initializer.js # Inicializador de la aplicación
├── components/           # Componentes reutilizables
├── assets/               # Recursos estáticos
│   ├── img/              # Imágenes
│   ├── datasets/         # Conjuntos de datos para práctica
│   ├── guides/           # Guías y manuales
│   └── templates/        # Plantillas de Power BI
└── docs/                 # Documentación adicional
```

## Licencia

© 2025 FUNDETEC - Ing. Alexander Oviedo Fadul. Todos los derechos reservados.

---

Desarrollado para FUNDETEC por Alexander Oviedo Fadul.