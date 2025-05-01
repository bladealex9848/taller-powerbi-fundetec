# Prompts para Asistentes IA en Power BI

Este documento proporciona ejemplos de prompts efectivos para utilizar con asistentes de IA cuando trabajes con Power BI. Estos prompts están diseñados para ayudarte a superar obstáculos técnicos, generar código DAX y obtener ideas para visualizaciones.

## Prompts para Fórmulas DAX

### 1. Cálculos Básicos

```
Necesito una fórmula DAX para calcular el total de ventas del mes actual y compararlo con el mismo mes del año anterior. Tengo una tabla 'Ventas' con campos 'Fecha' y 'Monto', y una tabla 'Calendario' relacionada.
```

### 2. Medidas de Tiempo

```
Escribe una fórmula DAX para calcular una media móvil de 3 meses para mis ventas. Tengo una tabla 'Ventas' con campos 'Fecha' y 'Monto', y una tabla 'Calendario' relacionada con jerarquía de año-mes-día.
```

### 3. Segmentación de Clientes

```
Necesito una fórmula DAX para clasificar clientes en categorías: 'Premium' (compras > 10,000), 'Regular' (compras entre 1,000 y 10,000) y 'Básico' (compras < 1,000). Tengo una tabla 'Clientes' y una tabla 'Ventas' relacionada.
```

### 4. Cálculos Avanzados

```
Escribe una fórmula DAX para calcular el percentil 90 de tiempo de resolución de tickets, agrupado por categoría de problema. Tengo una tabla 'Tickets' con campos 'Categoría', 'Fecha_Creación' y 'Fecha_Resolución'.
```

## Prompts para Power Query

### 1. Transformaciones de Texto

```
¿Cómo puedo usar Power Query para extraer el dominio de correo electrónico de una columna que contiene direcciones de email completas? Por ejemplo, de "usuario@empresa.com" quiero obtener solo "empresa.com".
```

### 2. Manejo de Fechas

```
Necesito transformar una columna de fechas en formato "DD/MM/AAAA" a formato "AAAA-MM-DD" en Power Query. Además, quiero crear columnas separadas para año, mes y día.
```

### 3. Combinación de Tablas

```
Tengo dos tablas: 'Empleados' (con ID_Empleado, Nombre) y 'Ventas' (con ID_Empleado, Producto, Monto). ¿Cómo puedo combinarlas en Power Query para obtener una tabla que muestre cada empleado con sus ventas totales?
```

### 4. Limpieza de Datos

```
Mi conjunto de datos tiene valores inconsistentes en la columna 'Estado': algunos son "Completado", otros "COMPLETADO", "completado" o "Comp.". ¿Cómo puedo estandarizar todos estos valores a "Completado" usando Power Query?
```

## Prompts para Visualizaciones

### 1. Selección de Gráficos

```
Tengo datos de ventas por región, producto y tiempo. Quiero mostrar la evolución temporal pero también comparar entre regiones. ¿Qué visualizaciones de Power BI serían más efectivas para este análisis?
```

### 2. Diseño de Dashboards

```
Estoy creando un dashboard ejecutivo para monitorear el rendimiento de un departamento de soporte técnico. Tengo métricas como tiempo de respuesta, satisfacción del cliente y tickets resueltos. ¿Cómo debería organizar estas métricas en un dashboard de una página para máxima claridad?
```

### 3. Visualizaciones Avanzadas

```
Quiero mostrar la relación entre tiempo de respuesta y satisfacción del cliente, segmentado por categoría de problema y prioridad. ¿Qué visualización avanzada de Power BI sería adecuada y cómo debería configurarla?
```

### 4. Mejoras Estéticas

```
Mi dashboard tiene un aspecto básico. ¿Qué mejoras de formato puedo aplicar para hacerlo más profesional y legible? Necesito mantener los colores corporativos azul (#1a3e82) y amarillo (#f9ca24).
```

## Prompts para Solución de Problemas

### 1. Rendimiento

```
Mi informe de Power BI se ha vuelto muy lento. Tiene 5 tablas con aproximadamente 100,000 filas cada una y 10 visualizaciones. ¿Qué estrategias puedo aplicar para mejorar su rendimiento?
```

### 2. Errores en Fórmulas

```
Estoy recibiendo el error "No se puede convertir el valor 'Texto' al tipo Número" en mi fórmula DAX: SUM(Ventas[Monto]). ¿Cómo puedo diagnosticar y solucionar este problema?
```

### 3. Relaciones

```
Tengo problemas al relacionar mis tablas 'Ventas' y 'Productos'. Power BI muestra el mensaje "Relación ambigua". ¿Qué podría estar causando esto y cómo puedo solucionarlo?
```

### 4. Actualización de Datos

```
Al intentar actualizar mi informe, recibo un error de credenciales para la conexión a mi base de datos SQL. ¿Cómo puedo solucionar este problema y asegurar que las actualizaciones funcionen correctamente?
```

## Consejos para Prompts Efectivos

1. **Sé específico**: Incluye detalles sobre tu estructura de datos, nombres de tablas y campos.

2. **Define el contexto**: Explica brevemente para qué necesitas la solución.

3. **Muestra ejemplos**: Si es posible, incluye ejemplos de datos o del resultado esperado.

4. **Especifica limitaciones**: Menciona restricciones o requisitos especiales que debas cumplir.

5. **Itera**: Si la primera respuesta no es exactamente lo que necesitas, refina tu prompt con más detalles.

---

Recuerda que los asistentes IA son herramientas complementarias. Siempre verifica y comprende las soluciones proporcionadas antes de implementarlas en tus proyectos reales.
