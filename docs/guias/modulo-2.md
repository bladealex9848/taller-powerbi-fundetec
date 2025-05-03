# Módulo 2: Conexión y Transformación de Datos

**Duración aproximada: 60 minutos**

## 1. Fuentes de Datos Compatibles con Power BI

### 1.1 Tipos de Conectores Disponibles

Power BI ofrece una amplia gama de conectores para fuentes de datos, que pueden clasificarse en varias categorías:

- **Archivos**: Excel, CSV, XML, JSON, PDF, carpetas
- **Bases de datos relacionales**: SQL Server, Oracle, MySQL, PostgreSQL, Azure SQL
- **Servicios en la nube**: Dynamics 365, SharePoint, Salesforce, Google Analytics
- **Servicios de Power Platform**: Dataflows, Modelos semánticos de Power BI
- **Big Data**: Hadoop, Spark, Azure Data Lake
- **Servicios online**: Facebook, GitHub, MailChimp, Zendesk
- **Otros**: ODBC, OData, Web (para extraer tablas HTML)

### 1.2 Consideraciones para la Selección de Fuentes

Al elegir las fuentes de datos a conectar, se deben tener en cuenta varios factores:

- **Actualización de datos**: Frecuencia con la que cambian los datos y necesidades de actualización
- **Volumen de datos**: Tamaño y complejidad de los conjuntos de datos
- **Seguridad y permisos**: Requisitos de autenticación y autorización
- **Ubicación**: Datos locales (on-premises) vs. en la nube
- **Estructura**: Datos estructurados vs. semi-estructurados o no estructurados

## 2. Proceso "Obtener Datos" (Get Data)

### 2.1 Conexión desde Power BI Desktop

#### 2.1.1 Pasos Básicos de Conexión
1. En la pestaña "Inicio", hacer clic en "Obtener datos"
2. Seleccionar el tipo de fuente de datos adecuado
3. Proporcionar información de conexión (ruta, URL, credenciales)
4. Previsualizar y seleccionar tablas/elementos específicos
5. Elegir entre "Cargar" (directamente) o "Transformar datos" (para limpieza previa)

#### 2.1.2 Modos de Conexión a Datos
- **Importación**: Carga una copia de los datos en el modelo de Power BI (predeterminado)
- **DirectQuery**: Consulta directa a la fuente sin importar los datos
- **Conexión en vivo**: Conexión a un modelo semántico de Analysis Services o Power BI
- **Modo compuesto**: Combina tablas en importación y DirectQuery

### 2.2 Conexión desde el Servicio Power BI

- Opciones más limitadas que en Desktop
- Enfoque en archivos (Excel, CSV) y algunos servicios en la nube
- Importancia de la ubicación de archivos (OneDrive, SharePoint vs. local)
- Diferencias entre "Vincular al archivo" e "Importar"
- Configuración de actualizaciones programadas

## 3. Power Query: Limpieza y Transformación

### 3.1 Introducción al Editor de Power Query

#### 3.1.1 Interfaz Principal
- **Panel de consultas**: Lista de consultas (tablas) en el modelo
- **Vista previa de datos**: Muestra los datos con las transformaciones aplicadas
- **Panel de pasos aplicados**: Registro secuencial de todas las transformaciones
- **Cinta de opciones**: Herramientas organizadas por funcionalidad

#### 3.1.2 El Concepto de "Pasos Aplicados"
- Cada transformación se registra como un paso secuencial
- Permite visualizar el historial de cambios
- Facilita la edición o eliminación de pasos específicos
- Crea una "receta" repetible para la transformación de datos

### 3.2 Transformaciones Comunes en Power Query

#### 3.2.1 Gestión de Columnas
- Quitar, reordenar y cambiar nombre de columnas
- Cambiar tipos de datos
- Insertar columnas personalizadas con fórmulas
- Agregar columnas condicionales (if-then-else)
- Extraer componentes de texto (primeros/últimos caracteres, subcadenas)
- Extraer elementos de fechas (año, mes, día)

#### 3.2.2 Gestión de Filas
- Filtrar filas por valores o condiciones
- Quitar filas duplicadas
- Mantener/quitar filas superiores o inferiores
- Quitar filas en blanco o con errores

#### 3.2.3 Operaciones de Limpieza
- Reemplazar valores
- Dividir columnas (por delimitador o posición)
- Eliminar espacios en blanco y caracteres especiales
- Convertir a mayúsculas/minúsculas
- Unir/combinar columnas

#### 3.2.4 Operaciones de Tabla
- **Anexar consultas (Append)**: Combinar filas de tablas similares
- **Combinar consultas (Merge)**: Unir tablas lateralmente (similar a JOIN en SQL)
- Dinamizar/anular dinamización (Pivot/Unpivot)
- Agrupar por (Group By) para agregaciones
- Transponer tablas

### 3.3 Lenguaje M: Fundamentos

- Power Query utiliza M (Power Query Formula Language) en segundo plano
- Cada paso aplicado genera código M automáticamente
- El Editor Avanzado permite ver y modificar el código M directamente
- Estructura básica: cada consulta es una serie de pasos encadenados
- Sintaxis básica: asignaciones con "=", argumentos con paréntesis, separados por comas

## 4. Modelado de Relaciones entre Tablas

### 4.1 Fundamentos de Relaciones

- **Definición**: Una relación es una conexión lógica entre tablas basada en columnas comunes
- **Propósito**: Permite combinar datos de múltiples tablas en visualizaciones y cálculos
- **Columnas clave**: Identificadores únicos (claves primarias) que se relacionan con referencias en otras tablas (claves foráneas)

### 4.2 Creación de Relaciones

#### 4.2.1 Métodos para Crear Relaciones
- **Detección automática**: Power BI intenta detectar relaciones basándose en nombres y tipos de columnas
- **Arrastrar y soltar**: En la Vista Modelo, arrastrar una columna de una tabla a otra
- **Administrar relaciones**: Usar el cuadro de diálogo para configurar manualmente

#### 4.2.2 Propiedades de las Relaciones
- **Cardinalidad**: Muchos a uno (*:1), Uno a uno (1:1), Uno a muchos (1:*), Muchos a muchos (*:*)
- **Dirección del filtro cruzado**: Única (predeterminada), Ambas (bidireccional)
- **Activar/desactivar**: Una relación puede estar activa o inactiva

### 4.3 Modelo en Estrella: Mejor Práctica

- **Estructura**: Tabla de hechos central conectada a tablas de dimensiones
- **Ventajas**: Rendimiento óptimo, facilidad de comprensión, mejor soporte para cálculos DAX
- **Tabla de hechos**: Contiene métricas numéricas (ventas, cantidades)
- **Tablas de dimensión**: Contienen atributos descriptivos (productos, clientes, fechas)

### 4.4 Consideraciones y Mejores Prácticas

- Evitar relaciones múltiples entre las mismas tablas
- Preferir relaciones uno-a-muchos sobre muchos-a-muchos
- Usar dirección de filtro única cuando sea posible
- Crear jerarquías para mejorar la navegación

## 5. Utilización de Asistentes de IA para la Preparación de Datos

### 5.1 Escenarios de Apoyo de IA en la Fase ETL

- **Diagnóstico de problemas**: Ayuda para identificar errores o inconsistencias en los datos
- **Sugerencia de transformaciones**: Recomendaciones sobre pasos de limpieza necesarios
- **Explicación de funciones**: Clarificación de sintaxis y uso de funciones de Power Query
- **Generación de código M**: Asistencia para escribir expresiones complejas

### 5.2 Ejemplos Prácticos

#### 5.2.1 Consultas Efectivas para Asistentes de IA
- "Tengo una columna con valores como 'Madrid, España'. ¿Cómo puedo dividirla en dos columnas en Power Query?"
- "¿Cómo puedo estandarizar estos formatos de fecha inconsistentes en Power Query?"
- "Explícame esta función M y lo que hace: Table.FillDown"
- "¿Cuál es la mejor manera de gestionar valores nulos o faltantes en mi conjunto de datos?"

#### 5.2.2 Integración de Sugerencias de IA en el Flujo de Trabajo
- Análisis crítico de las sugerencias recibidas
- Adaptación de las soluciones al contexto específico
- Combinación de múltiples sugerencias para resolver problemas complejos

### 5.3 Limitaciones y Consideraciones

- Verificar siempre las soluciones sugeridas por la IA
- Entender que la IA puede no tener conocimiento de características muy recientes
- Tener en cuenta el contexto y las peculiaridades específicas de cada conjunto de datos

## Actividades Prácticas del Módulo 2

### Actividad 2.1: Conexión a fuentes de datos
- Conectar a archivos Excel/CSV de ejemplo
- Explorar las opciones de previsualización y selección

### Actividad 2.2: Transformaciones básicas en Power Query
- Aplicar múltiples transformaciones a un conjunto de datos desordenado
- Observar cómo se registran los pasos aplicados

### Actividad 2.3: Creación de una relación
- Establecer una relación entre dos tablas relacionadas (ej. Ventas y Productos)
- Configurar la cardinalidad y dirección de filtro adecuadas

### Actividad 2.4: Asistencia de IA para limpieza
- Plantear un problema de limpieza de datos a un asistente de IA
- Implementar la solución sugerida en Power Query

## Recursos Adicionales

- Documentación oficial de Power Query
- Funciones M más utilizadas en la transformación de datos
- Patrones comunes de modelado de datos
- Guías sobre DirectQuery vs Importación
- Mejores prácticas para optimización de modelos
