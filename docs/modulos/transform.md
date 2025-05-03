---
title: "Conexión y Transformación de Datos"
author: "Ing. Alexander Oviedo Fadul"
date: "Mayo 2025"
version: "1.0"
description: "Aprende a conectar Power BI a diversas fuentes de datos y transformarlos con Power Query"
---

# Conexión y Transformación de Datos

## Conexión a Fuentes de Datos

Power BI puede conectarse a una amplia variedad de fuentes de datos, lo que lo hace extremadamente versátil. Algunas de las fuentes más comunes incluyen:

- **Archivos**: Excel, CSV, XML, JSON, PDF
- **Bases de datos**: SQL Server, Oracle, MySQL, PostgreSQL
- **Servicios en línea**: SharePoint, Dynamics 365, Salesforce
- **Servicios de Azure**: Azure SQL, Synapse Analytics, Data Lake
- **Otros**: Web, Carpetas, API REST

El proceso de conexión comienza con el botón **"Obtener datos"** en la pestaña "Inicio" de Power BI Desktop. Al hacer clic, se despliega un menú con las fuentes más comunes, y seleccionando "Más..." se accede a la lista completa de conectores disponibles.

Para este taller, nos centraremos en la conexión a archivos simples (Excel, CSV) por ser los más accesibles y comunes para comenzar.

## Introducción al Editor de Power Query

El Editor de Power Query es el motor de ETL (Extracción, Transformación, Carga) integrado en Power BI. Es una herramienta potente que permite preparar los datos antes de cargarlos al modelo.

Características principales:

- **No modifica los datos originales**: Todas las transformaciones se aplican a una copia de los datos
- **Proceso repetible**: Las transformaciones se guardan como pasos que se aplican cada vez que se actualizan los datos
- **Interfaz visual**: No requiere programación, aunque permite acceso al código subyacente (lenguaje M)

La interfaz del Editor de Power Query consta de:

1. **Panel de Consultas (izquierda)**: Lista todas las consultas (tablas) disponibles
2. **Vista previa de datos (centro)**: Muestra una muestra de los datos con las transformaciones aplicadas
3. **Panel de Pasos Aplicados (derecha)**: Registra cada transformación como un paso secuencial
4. **Cinta de opciones (arriba)**: Contiene todas las herramientas de transformación organizadas por categorías

## Transformaciones Clave en Power Query

### Quitar Columnas o Filas

Para simplificar el modelo y mejorar el rendimiento, es recomendable eliminar las columnas que no son necesarias para el análisis:

- **Quitar columnas**: Clic derecho en el encabezado > "Quitar" o seleccionar varias columnas > "Quitar columnas"
- **Quitar otras columnas**: Seleccionar las columnas a mantener > Clic derecho > "Quitar otras columnas"
- **Quitar filas**: Usar "Inicio" > "Reducir filas" para eliminar filas vacías, duplicadas o con errores

### Cambiar Tipos de Datos

Es crucial asignar el tipo de dato correcto a cada columna:

- Hacer clic en el icono de tipo de dato en el encabezado de la columna
- Seleccionar el tipo adecuado (Texto, Número decimal, Número entero, Fecha, etc.)
- También se puede usar "Detectar tipo de datos" para que Power Query intente asignar automáticamente

### Dividir y Combinar Columnas

Para datos que necesitan ser separados o unidos:

- **Dividir columna**: Seleccionar la columna > "Transformar" > "Dividir columna" > Por delimitador (coma, espacio, etc.) o por número de caracteres
- **Combinar columnas**: Seleccionar múltiples columnas > "Transformar" > "Combinar" > Especificar el separador

### Reemplazar Valores

Para corregir errores o estandarizar datos:

- Clic derecho en la columna > "Reemplazar valores"
- Especificar el valor a buscar y el valor de reemplazo
- Útil para corregir errores tipográficos o normalizar categorías

### Filtrar Datos

Para trabajar solo con un subconjunto de datos:

- Hacer clic en la flecha de filtro en el encabezado de la columna
- Seleccionar los valores a incluir o excluir
- Usar filtros de texto, número o fecha según el tipo de columna

### Combinar Consultas (Tablas)

Para trabajar con datos de múltiples tablas:

- **Anexar (Append)**: Combina filas de tablas con estructura similar (como apilar)
  - "Inicio" > "Anexar consultas"
- **Combinar (Merge)**: Une tablas lateralmente basándose en columnas coincidentes (similar a JOIN en SQL)
  - "Inicio" > "Combinar consultas"
  - Seleccionar la columna clave en cada tabla
  - Elegir el tipo de combinación (Interna, Externa izquierda, etc.)

## Modelado Básico de Datos: Creación de Relaciones

Una vez que los datos están limpios y cargados en Power BI, es necesario establecer relaciones entre las tablas para poder analizarlos conjuntamente:

1. Ir a la "Vista Modelo" en Power BI Desktop
2. Arrastrar el campo clave de una tabla al campo correspondiente en otra tabla
3. Se abrirá el diálogo "Crear relación" donde se puede configurar:
   - Las columnas que establecen la relación
   - La cardinalidad (uno a muchos, uno a uno, etc.)
   - La dirección del filtro cruzado
   - Si la relación está activa

Las relaciones permiten que los filtros aplicados en una tabla afecten a las visualizaciones basadas en otras tablas relacionadas.

## Asistentes de IA para Apoyo en la Preparación de Datos

Los asistentes de IA pueden ser de gran ayuda durante la fase de preparación de datos:

- **Sugerir transformaciones**: Pedir ideas sobre cómo limpiar datos desordenados
- **Explicar funciones**: Solicitar explicaciones sobre funciones específicas de Power Query
- **Generar código M**: Obtener ayuda para crear transformaciones personalizadas
- **Resolver problemas**: Describir un error y obtener posibles soluciones

Ejemplo de uso: "Tengo una columna con fechas en diferentes formatos (DD/MM/YYYY y MM-DD-YYYY). ¿Cómo puedo estandarizarlas en Power Query?"

La combinación de Power Query y asistentes de IA externos proporciona un flujo de trabajo potente para la preparación de datos, permitiendo obtener datos limpios y estructurados que serán la base de análisis efectivos.
