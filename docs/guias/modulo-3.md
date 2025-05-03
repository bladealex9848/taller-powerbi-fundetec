# Módulo 3: DEMOSTRACIÓN MAGISTRAL - Power BI en Acción

**Duración aproximada: 60 minutos**

## 1. Contexto: Sistema Marduk y Dashboards Judiciales

### 1.1 Descripción del Proyecto Marduk

El sistema Marduk representa un ecosistema integral de innovación judicial digital diseñado para la Rama Judicial colombiana. Desarrollado por el Ing. Alexander Oviedo Fadul, este proyecto combina experiencia judicial con tecnología avanzada para revolucionar la administración de justicia en Colombia.

### 1.2 Relevancia del Caso de Estudio

Esta demostración se basa en un dashboard real actualmente en producción, lo que proporciona:
- Un ejemplo tangible del impacto de Power BI en entornos institucionales reales
- Demostración de cómo se aplican los conceptos teóricos en un proyecto profesional
- Visión de las mejores prácticas y patrones de diseño en un sistema que maneja datos judiciales sensibles

### 1.3 Tipos de Insights proporcionados por el Dashboard

- Distribución de carga de trabajo entre funcionarios judiciales
- Análisis de tipos de solicitudes por frecuencia y complejidad
- Seguimiento de estados de los trámites judiciales
- Métricas de eficiencia en la gestión de procesos
- Tendencias temporales en la recepción y resolución de casos

## 2. Conexión a Fuentes de Datos para el Dashboard

### 2.1 Fuentes Utilizadas en el Sistema

El dashboard de Marduk se alimenta de múltiples fuentes de datos, incluyendo:
- Archivos Excel exportados del sistema principal
- Archivos CSV con datos históricos
- Base de datos SQL Server con información transaccional

### 2.2 Consideraciones para la Integración de Datos

- **Seguridad**: Manejo adecuado de datos judiciales sensibles
- **Actualización**: Configuración de frecuencia de actualización según la naturaleza de los datos
- **Volumen**: Estrategias para gestionar grandes volúmenes de información judicial
- **Estructura**: Adaptación a diferentes formatos y estructuras de los sistemas fuente

### 2.3 Demostración de la Conexión de Datos

Para esta demostración práctica se utilizan datos de ejemplo simplificados que reflejan la estructura del sistema real, mostrando:
- Proceso de conexión a archivos de ejemplo
- Selección de tablas relevantes
- Configuración inicial de opciones de carga

## 3. Transformación y Preparación de Datos

### 3.1 Revisión de Transformaciones Clave en Power Query

Durante la demostración se aplican las siguientes transformaciones esenciales:
- Limpieza de encabezados y normalización de nombres de columnas
- Filtrado de registros relevantes para el análisis judicial
- Conversión de tipos de datos (especialmente fechas y valores numéricos)
- Creación de columnas calculadas para categorización de casos
- Fusión (merge) de tablas relacionadas (ej: casos con información de responsables)

### 3.2 Creación de un Modelo de Datos Efectivo

La demostración ilustra la construcción de un modelo de datos optimizado:
- Estructura del modelo en estrella adaptada al contexto judicial
- Tabla de hechos principal (solicitudes/trámites)
- Tablas de dimensiones (tipos de solicitud, responsables, estados, fechas)
- Establecimiento de relaciones con cardinalidad adecuada
- Configuración de propiedades para optimizar rendimiento

### 3.3 Limpieza de Datos Específica para Datos Judiciales

Se abordan desafíos particulares del dominio judicial:
- Estandarización de nomenclatura legal
- Manejo de identidad de involucrados (anonimización donde corresponda)
- Corrección de inconsistencias en registros de fechas de actuaciones
- Consolidación de estados procesales similares

## 4. Introducción a DAX y Asistencia de IA para DAX

### 4.1 Fundamentos de DAX (Data Analysis Expressions)

- **Propósito**: Lenguaje de fórmulas para crear cálculos personalizados en Power BI
- **Tipos de cálculos**:
  - Columnas calculadas (nivel de fila)
  - Medidas (agregaciones dinámicas)
- **Sintaxis básica**: Operadores, referencias a columnas/tablas, funciones

### 4.2 Medidas DAX Esenciales para el Dashboard Judicial

La demostración incluye la creación de medidas DAX fundamentales como:
- Conteo total de solicitudes: `Total Solicitudes = COUNTROWS('Tabla Solicitudes')`
- Conteo de casos únicos: `Casos Únicos = DISTINCTCOUNT('Tabla Solicitudes'[ID_Caso])`
- Promedio de tiempo de respuesta: `Tiempo Promedio = AVERAGEX('Tabla Solicitudes', [Fecha_Respuesta] - [Fecha_Solicitud])`
- Porcentaje de resolución: `% Resueltos = DIVIDE(CALCULATE(COUNT('Tabla Solicitudes'[ID]), 'Tabla Solicitudes'[Estado]="Resuelto"), COUNT('Tabla Solicitudes'[ID]), 0)`

### 4.3 Demostración de Asistencia de IA para DAX

Se muestra cómo un asistente de IA externo puede complementar el trabajo con DAX:
- Explicación de funciones DAX utilizadas (ej: CALCULATE, COUNTROWS, FILTER)
- Generación de medidas más complejas a partir de descripciones en lenguaje natural
- Diagnóstico de errores comunes en expresiones DAX
- Traducción entre pseudocódigo y sintaxis DAX correcta

### 4.4 Contextos de Evaluación en DAX

Explicación conceptual de los contextos fundamentales en DAX:
- Contexto de fila vs. contexto de filtro
- Modificación de contexto con CALCULATE
- Iteración con funciones X (SUMX, AVERAGEX)
- Propagación de filtros a través de relaciones

## 5. Construcción de Visualizaciones Clave

### 5.1 Selección de Visualizaciones para el Dashboard Judicial

La demostración incluye la creación de visualizaciones específicas:
- **Tarjetas (Cards)**: Mostrando KPIs críticos como Total Solicitudes, Casos Pendientes
- **Gráficos circulares**: Distribución por Tipo de Solicitud
- **Gráficos de barras**: Carga de trabajo por Funcionario Responsable
- **Matriz**: Cruce entre Tipo de Solicitud y Estado del Trámite
- **Cronologías**: Evolución temporal de solicitudes recibidas

### 5.2 Proceso de Creación y Configuración

Para cada visualización se muestra:
- Selección del tipo de visual adecuado para el propósito analítico
- Asignación de campos (columnas y medidas) a los roles visuales
- Configuración de formato (colores, etiquetas, tamaños, leyendas)
- Personalización de interacciones y tooltips
- Optimización para la legibilidad y comprensión rápida

### 5.3 Uso de IA para Sugerir Visualizaciones

Demostración de cómo un asistente de IA puede ayudar a:
- Recomendar tipos de visualizaciones apropiadas según el tipo de datos
- Sugerir mejoras para visualizaciones existentes
- Proponer combinaciones de campos para análisis más profundos
- Guiar la configuración de opciones avanzadas de formato

## 6. Interactividad y Experiencia de Usuario

### 6.1 Configuración de Interacciones entre Visualizaciones

El dashboard de Marduk demuestra interactividad avanzada:
- Filtrado cruzado entre visualizaciones relacionadas
- Comportamiento personalizado de las interacciones (filtrar vs. resaltar)
- Jerarquías para navegación de lo general a lo específico (drill-down)
- Uso de marcadores para estados predefinidos del informe

### 6.2 Implementación de Segmentadores y Filtros

Se muestra la configuración de:
- **Segmentadores (Slicers)**: Para filtrado por Fecha, Tipo de Solicitud, Responsable
- Diseño y formato de segmentadores para mejorar usabilidad
- Opciones de selección única vs. múltiple
- Sincronización de segmentadores entre páginas

### 6.3 Asistencia de IA para Interpretación de Datos

Demostración de cómo un asistente de IA puede:
- Ayudar a interpretar patrones y tendencias visibles en las visualizaciones
- Sugerir narrativas o conclusiones basadas en los datos visualizados
- Generar explicaciones automáticas de anomalías o valores atípicos
- Complementar las Narrativas Inteligentes nativas de Power BI

## 7. Exploración del Dashboard Real de Marduk

### 7.1 Demostración del Producto Final en Producción

Acceso y navegación por el dashboard real del sistema Marduk disponible en:
[Dashboard Marduk](https://app.powerbi.com/view?r=eyJrIjoiMzI3YzU2MTctNWE2Ny00ZjUxLTliZDYtNDVkMzU4MmM4NDM4IiwidCI6IjYyMmNiYTk4LTgwZjgtNDFmMy04ZGY1LThlYjk5OTAxNTk4YiIsImMiOjR9)

### 7.2 Análisis de Funcionalidades Implementadas

- Recorrido por las distintas páginas y secciones del dashboard
- Demostración de la navegación e interactividad
- Explicación de decisiones de diseño específicas
- Aspectos de seguridad y privacidad de datos judiciales

### 7.3 Impacto Real del Dashboard en la Gestión Judicial

- Ejemplos concretos de cómo el dashboard ha mejorado la toma de decisiones
- Métricas de adopción y uso por parte de funcionarios judiciales
- Evolución del dashboard basada en retroalimentación de usuarios reales
- Lecciones aprendidas durante la implementación y despliegue

## Actividades Demostrativas del Módulo 3

### Demostración 3.1: Creación de Medidas DAX
- Implementación de medidas básicas y avanzadas relevantes para el contexto judicial
- Uso de asistente IA para explicación y depuración

### Demostración 3.2: Diseño de Visualizaciones Clave
- Construcción de visualizaciones especializadas
- Configuración de colores, formatos y etiquetas para máxima claridad

### Demostración 3.3: Configuración de Interactividad
- Implementación de filtrado cruzado entre visuales
- Adición y configuración de segmentadores para análisis dinámico

### Demostración 3.4: Exploración del Dashboard Completo
- Navegación por el dashboard real de Marduk
- Análisis de patrones y tendencias visibles en los datos actuales

## Recursos Adicionales

- Enlace al dashboard público de Marduk para referencia posterior
- Guía práctica de DAX para análisis judicial
- Plantillas de visualizaciones optimizadas para contextos legales/institucionales
- Referencias para diseño de dashboards orientados a la gestión pública
