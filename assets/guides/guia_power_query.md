# Guía de Power Query para Power BI

## Introducción a Power Query

Power Query es una tecnología de conexión de datos que permite descubrir, conectar, combinar y refinar fuentes de datos para satisfacer sus necesidades de análisis. Es la herramienta ETL (Extract, Transform, Load) integrada en Power BI.

## Interfaz de Power Query

La interfaz de Power Query consta de:

- **Panel de consultas**: Muestra todas las consultas creadas.
- **Cinta de opciones**: Contiene comandos para transformar datos.
- **Vista previa de datos**: Muestra una vista previa de los datos.
- **Panel de pasos aplicados**: Muestra los pasos de transformación aplicados.
- **Barra de fórmulas**: Muestra la fórmula M del paso seleccionado.

## Conectar a datos

Power Query puede conectarse a una amplia variedad de fuentes de datos:

- **Archivos**: Excel, CSV, XML, JSON, PDF, carpeta
- **Bases de datos**: SQL Server, Oracle, MySQL, PostgreSQL, Access
- **Servicios en línea**: SharePoint, Dynamics 365, Salesforce, Google Analytics
- **Otros**: Web, ODBC, OData, Hadoop, Spark

### Pasos para conectarse a datos:

1. En Power BI Desktop, seleccione "Obtener datos" en la pestaña "Inicio"
2. Elija la fuente de datos
3. Proporcione las credenciales necesarias
4. Seleccione las tablas o vistas a importar
5. Elija "Transformar datos" para abrir el Editor de Power Query

## Transformaciones comunes

### Transformaciones de columnas

- **Cambiar tipo de datos**: Convertir columnas a tipos específicos (texto, número, fecha)
- **Reemplazar valores**: Sustituir valores específicos o patrones
- **Dividir columna**: Separar una columna en múltiples basándose en un delimitador
- **Combinar columnas**: Unir varias columnas en una
- **Formato**: Cambiar mayúsculas/minúsculas, recortar espacios, extraer partes

### Transformaciones de filas

- **Filtrar filas**: Eliminar filas basándose en condiciones
- **Eliminar filas**: Quitar filas duplicadas, vacías, con errores
- **Mantener/quitar filas**: Conservar o eliminar las primeras/últimas N filas
- **Agrupar filas**: Resumir datos mediante funciones de agregación

### Transformaciones de tablas

- **Transponer**: Convertir filas en columnas y viceversa
- **Pivotar/Despivotar**: Reorganizar datos para análisis
- **Combinar consultas**: Unir tablas mediante operaciones de combinación (merge)
- **Anexar consultas**: Apilar tablas una encima de otra (append)
- **Agregar columna de índice**: Añadir una columna con números secuenciales
- **Agregar columna condicional**: Crear una columna basada en condiciones

## Pasos de transformación paso a paso

### Limpieza básica de datos

1. **Eliminar columnas innecesarias**:
   - Seleccionar columnas → clic derecho → Quitar
   - O: Pestaña "Inicio" → "Quitar columnas"

2. **Cambiar tipos de datos**:
   - Seleccionar columna → clic derecho → "Cambiar tipo"
   - O: Pestaña "Transformar" → "Tipo de datos"

3. **Reemplazar valores**:
   - Seleccionar columna → clic derecho → "Reemplazar valores"
   - O: Pestaña "Transformar" → "Reemplazar valores"

4. **Eliminar filas vacías o con errores**:
   - Pestaña "Inicio" → "Quitar filas" → "Quitar filas vacías"
   - O: Filtrar columna → Desmarcar "Errores" o "(En blanco)"

### Transformaciones avanzadas

1. **Pivotar columnas**:
   - Seleccionar columnas a pivotar → Pestaña "Transformar" → "Pivotar columnas"
   - Especificar columna de valores y función de agregación

2. **Despivotar columnas**:
   - Seleccionar columnas a despivotar → Pestaña "Transformar" → "Despivotar columnas"
   - Especificar nombres para las columnas de atributo y valor

3. **Combinar consultas (Merge)**:
   - Pestaña "Inicio" → "Combinar consultas"
   - Seleccionar tablas y columnas para la combinación
   - Elegir tipo de combinación (Inner, Left Outer, Right Outer, Full Outer)

4. **Anexar consultas (Append)**:
   - Pestaña "Inicio" → "Anexar consultas"
   - Seleccionar tablas a anexar
   - Elegir anexar como nueva consulta o a la consulta existente

## Funciones avanzadas

### Columnas personalizadas

Crear columnas con fórmulas personalizadas:
- Pestaña "Agregar columna" → "Columna personalizada"
- Escribir fórmula usando el lenguaje M

Ejemplo:
```
if [Precio] > 100 then "Alto" else if [Precio] > 50 then "Medio" else "Bajo"
```

### Columnas condicionales

Crear columnas basadas en condiciones:
- Pestaña "Agregar columna" → "Columna condicional"
- Definir condiciones y valores resultantes

### Agrupación de datos

Resumir datos mediante funciones de agregación:
- Pestaña "Transformar" → "Agrupar por"
- Seleccionar columnas para agrupar
- Definir agregaciones (suma, promedio, conteo, etc.)

### Extracción de datos de texto

- **Extraer texto**: Obtener parte de un texto (primeros/últimos caracteres, rango)
- **Dividir por delimitador**: Separar texto basado en un carácter o patrón
- **Dividir por posición**: Separar texto basado en posiciones fijas
- **Dividir por longitud**: Separar texto en segmentos de longitud específica

### Manejo de fechas y horas

- **Extraer partes de fechas**: Obtener año, trimestre, mes, día, etc.
- **Calcular duraciones**: Determinar días entre fechas
- **Agrupar por períodos**: Agrupar por semanas, meses, trimestres, años

## Parámetros y funciones

### Crear parámetros

Los parámetros permiten crear consultas dinámicas:
- Pestaña "Inicio" → "Administrar parámetros" → "Nuevo parámetro"
- Definir nombre, tipo, valores permitidos y valor actual

### Usar parámetros en consultas

- En fuentes de datos (URLs, rutas de archivos)
- En filtros y transformaciones
- En fórmulas personalizadas

### Funciones personalizadas

Crear funciones reutilizables:
- Convertir una consulta en función
- Definir parámetros de entrada
- Llamar a la función desde otras consultas

## Lenguaje M

Power Query utiliza el lenguaje M (Power Query Formula Language) para definir transformaciones:

- Cada paso en el panel "Pasos aplicados" genera código M
- Se puede ver y editar el código M en la barra de fórmulas
- El código M completo se puede ver en el "Editor avanzado"

### Estructura básica de M

```
let
    // Definición de pasos
    Origen = ...,
    #"Paso 1" = ...,
    #"Paso 2" = ...,
    // Más pasos...
    #"Paso final" = ...
in
    #"Paso final"  // Resultado de la consulta
```

## Mejores prácticas

1. **Documentar transformaciones**: Renombrar pasos para claridad
2. **Optimizar rendimiento**: Filtrar datos lo antes posible
3. **Evitar duplicación**: Crear consultas de referencia
4. **Usar tipos de datos adecuados**: Definir tipos correctamente
5. **Gestionar errores**: Manejar valores nulos y errores
6. **Probar con muestras**: Usar "Mantener filas" para trabajar con subconjuntos
7. **Crear consultas modulares**: Dividir transformaciones complejas
8. **Usar parámetros**: Para consultas flexibles y reutilizables

## Solución de problemas comunes

- **Errores de tipo de datos**: Verificar conversiones de tipos
- **Errores de combinación**: Comprobar claves de combinación
- **Rendimiento lento**: Revisar pasos que pueden optimizarse
- **Errores de actualización**: Verificar conexiones y credenciales
- **Columnas cambiantes**: Usar "Elegir columnas" para estabilizar

## Recursos adicionales

- [Documentación oficial de Power Query](https://learn.microsoft.com/es-es/power-query/)
- [Referencia del lenguaje M](https://learn.microsoft.com/es-es/powerquery-m/power-query-m-function-reference)
- [Comunidad de Power BI](https://community.powerbi.com/)
- [Blog de Power Query](https://blog.crossjoin.co.uk/)

---

Esta guía proporciona una introducción a Power Query y sus principales funcionalidades. Para obtener información más detallada, consulte la documentación oficial y los recursos adicionales mencionados.
