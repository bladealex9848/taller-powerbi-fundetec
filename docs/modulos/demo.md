---
title: "DEMOSTRACIÓN MAGISTRAL: Power BI en Acción"
author: "Ing. Alexander Oviedo Fadul"
date: "Mayo 2025"
version: "1.0"
description: "Caso práctico del Sistema Marduk: Flujo completo desde datos hasta dashboard interactivo"
---

# DEMOSTRACIÓN MAGISTRAL: Power BI en Acción

## Contexto: Sistema Marduk y Dashboards Judiciales

El Sistema Marduk es un ecosistema integral de innovación judicial digital desarrollado para la Rama Judicial colombiana. Representa un caso real de transformación digital que ha revolucionado la gestión de procesos judiciales mediante la aplicación de tecnologías avanzadas, incluyendo análisis de datos e inteligencia artificial.

Los dashboards de Power BI implementados en Marduk proporcionan información crítica para la toma de decisiones judiciales, incluyendo:

- **Carga de trabajo**: Distribución y volumen de casos por despacho y funcionario
- **Tipos de solicitudes**: Análisis de la naturaleza de los trámites judiciales
- **Eficiencia de funcionarios**: Métricas de rendimiento y productividad
- **Seguimiento de estados**: Monitoreo del avance de los procesos
- **Tiempos de respuesta**: Análisis de la duración de cada etapa procesal

Esta demostración ilustra cómo Power BI se utiliza en un entorno real para transformar datos judiciales en información accionable que mejora la administración de justicia.

## Conexión de Datos y Preparación con Power Query

En un entorno de producción como Marduk, los datos provienen de múltiples fuentes:

- **Bases de datos SQL Server**: Almacenan la información transaccional del sistema
- **Archivos Excel**: Utilizados para datos complementarios y reportes específicos
- **Servicios web**: APIs que proporcionan datos en tiempo real

El proceso de preparación de datos incluye:

1. **Conexión a las fuentes**: Utilizando los conectores apropiados de Power BI
2. **Limpieza de datos**: Eliminación de duplicados, corrección de errores, estandarización de formatos
3. **Transformación**: Creación de columnas calculadas, agrupación de datos, pivoteo de tablas
4. **Combinación**: Unión de datos de diferentes fuentes para crear un modelo coherente

La estructura del modelo de datos de Marduk incluye tablas principales como:

- Solicitudes (hechos principales)
- Tipos de Solicitud (dimensión)
- Funcionarios (dimensión)
- Estados (dimensión)
- Fechas (dimensión de tiempo)

## Introducción a DAX y Asistencia de IA para DAX

DAX (Data Analysis Expressions) es el lenguaje de fórmulas utilizado en Power BI para crear cálculos personalizados. En el dashboard de Marduk, se utilizan medidas DAX para calcular métricas clave:

```
Total Solicitudes = COUNTROWS('Solicitudes')
```

```
Conteo Casos Únicos = DISTINCTCOUNT('Solicitudes'[ID_Caso])
```

```
Tiempo Promedio Resolución = 
AVERAGEX(
    'Solicitudes',
    DATEDIFF('Solicitudes'[Fecha_Inicio], 'Solicitudes'[Fecha_Fin], DAY)
)
```

Los asistentes de IA pueden ayudar significativamente con DAX:

- **Explicando funciones**: "¿Qué hace AVERAGEX en DAX y cuándo debo usarla?"
- **Creando medidas**: "Escribe una medida DAX para calcular el porcentaje de solicitudes completadas respecto al total"
- **Optimizando fórmulas**: "¿Cómo puedo hacer más eficiente esta medida DAX?"
- **Depurando errores**: "¿Por qué mi medida DAX está devolviendo valores incorrectos?"

## Construcción de Visualizaciones Clave

El dashboard de Marduk incluye diversas visualizaciones estratégicamente seleccionadas:

### Tarjetas (Cards)
- **Total de Solicitudes**: Muestra el número total de trámites
- **Tiempo Promedio de Resolución**: Indica la eficiencia general del sistema
- **Casos Activos**: Refleja la carga actual de trabajo

### Gráficos Circulares (Pie Charts)
- **Distribución por Tipo de Solicitud**: Muestra la proporción de cada categoría de trámite
- **Distribución por Estado**: Visualiza el porcentaje de casos en cada etapa procesal

### Gráficos de Barras (Bar Charts)
- **Carga por Funcionario**: Compara el volumen de trabajo asignado a cada responsable
- **Solicitudes por Mes**: Muestra tendencias temporales en la carga de trabajo

### Matrices (Matrix)
- **Tipo de Solicitud vs. Estado**: Análisis cruzado que permite identificar cuellos de botella en tipos específicos de trámites
- **Funcionario vs. Tiempo de Resolución**: Evalúa la eficiencia individual

### Mapas (Maps)
- **Distribución Geográfica**: Visualiza la concentración de casos por región o jurisdicción

## Interactividad y Asistencia de IA para Interpretación

La potencia de Power BI reside en su interactividad:

- **Filtrado cruzado**: Al seleccionar un elemento en una visualización, las demás se filtran automáticamente
- **Segmentaciones (Slicers)**: Permiten filtrar todo el dashboard por fecha, tipo de solicitud, estado, etc.
- **Exploración detallada (Drill-down)**: Posibilidad de profundizar desde datos agregados hasta registros individuales
- **Tooltips enriquecidos**: Información adicional al pasar el cursor sobre elementos visuales

Los asistentes de IA pueden ayudar a interpretar los datos visualizados:

- **Identificación de tendencias**: "¿Qué tendencias significativas observas en este gráfico de solicitudes mensuales?"
- **Detección de anomalías**: "¿Hay algún valor atípico en la carga de trabajo de los funcionarios?"
- **Sugerencia de insights**: "¿Qué conclusiones importantes puedo extraer de esta distribución de tipos de solicitud?"
- **Recomendaciones de acción**: "Basado en estos datos de tiempos de resolución, ¿qué acciones recomendarías?"

## El Dashboard Real de Marduk en Producción

El dashboard de Marduk en producción integra todas estas visualizaciones en un informe cohesivo y multidimensional que permite:

- **Visión general**: Página principal con KPIs y métricas clave
- **Análisis por funcionario**: Página dedicada al rendimiento individual
- **Análisis temporal**: Tendencias y patrones a lo largo del tiempo
- **Análisis geográfico**: Distribución espacial de la carga judicial
- **Detalle de casos**: Exploración a nivel de registro individual

Este dashboard ha transformado la gestión judicial, proporcionando:

- **Transparencia**: Visibilidad clara de la carga y distribución de trabajo
- **Eficiencia**: Identificación de cuellos de botella y oportunidades de mejora
- **Equidad**: Distribución más equilibrada de la carga laboral
- **Previsibilidad**: Capacidad de anticipar tendencias y planificar recursos

La implementación de este sistema de Business Intelligence ha sido un componente fundamental en la modernización del sistema judicial, demostrando el poder transformador de Power BI cuando se aplica a problemas reales y complejos.
