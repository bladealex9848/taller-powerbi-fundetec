# Guía de DAX (Data Analysis Expressions) para Power BI

## Introducción a DAX

DAX (Data Analysis Expressions) es un lenguaje de fórmulas diseñado específicamente para el análisis de datos en Power BI, Power Pivot y Analysis Services Tabular. DAX permite crear cálculos personalizados para análisis de datos y visualizaciones.

## Conceptos fundamentales

### Tipos de cálculos DAX

- **Medidas**: Cálculos dinámicos que se evalúan en el contexto de la visualización.
- **Columnas calculadas**: Cálculos que se almacenan en el modelo y se evalúan fila por fila.
- **Tablas calculadas**: Tablas creadas mediante una expresión DAX.

### Contexto en DAX

El concepto de contexto es fundamental en DAX:

- **Contexto de fila**: Define qué fila se está evaluando en una columna calculada.
- **Contexto de filtro**: Define qué subconjunto de datos se está evaluando en una medida.

## Sintaxis básica

```
[Nombre de la medida] = FUNCIÓN(Argumentos)

// Ejemplo:
[Total Ventas] = SUM(Ventas[Importe])
```

## Funciones DAX comunes

### Funciones de agregación

- `SUM(columna)`: Suma los valores de una columna.
- `AVERAGE(columna)`: Calcula el promedio de una columna.
- `MIN(columna)` y `MAX(columna)`: Encuentra el valor mínimo o máximo.
- `COUNT(columna)`: Cuenta valores no en blanco.
- `COUNTA(columna)`: Cuenta valores no en blanco (incluye texto).
- `COUNTROWS(tabla)`: Cuenta filas en una tabla.
- `DISTINCTCOUNT(columna)`: Cuenta valores únicos.

### Funciones lógicas

- `IF(condición, valor_verdadero, valor_falso)`: Evaluación condicional.
- `AND(condición1, condición2, ...)`: Operador lógico AND.
- `OR(condición1, condición2, ...)`: Operador lógico OR.
- `NOT(condición)`: Operador lógico NOT.
- `SWITCH(expresión, valor1, resultado1, valor2, resultado2, ..., predeterminado)`: Evaluación de múltiples condiciones.

### Funciones de filtro

- `FILTER(tabla, condición)`: Filtra una tabla según una condición.
- `ALL(tabla)`: Elimina todos los filtros de una tabla.
- `ALLEXCEPT(tabla, columna1, columna2, ...)`: Elimina todos los filtros excepto los de las columnas especificadas.
- `CALCULATE(expresión, filtro1, filtro2, ...)`: Evalúa una expresión en un contexto modificado.
- `CALCULATETABLE(expresión, filtro1, filtro2, ...)`: Versión de CALCULATE que devuelve una tabla.

### Funciones de relación

- `RELATED(columna)`: Obtiene un valor relacionado de otra tabla.
- `RELATEDTABLE(tabla)`: Obtiene una tabla relacionada.
- `USERELATIONSHIP(columna1, columna2)`: Usa una relación específica para un cálculo.

### Funciones de inteligencia de tiempo

- `DATEADD(fechas, número, unidad)`: Agrega o resta un intervalo de tiempo.
- `DATESBETWEEN(fechas, inicio, fin)`: Devuelve fechas entre dos límites.
- `DATESMTD(fechas)`: Fechas del mes hasta la fecha.
- `DATESQTD(fechas)`: Fechas del trimestre hasta la fecha.
- `DATESYTD(fechas)`: Fechas del año hasta la fecha.
- `SAMEPERIODLASTYEAR(fechas)`: Mismo período del año anterior.
- `PARALLELPERIOD(fechas, desplazamiento, unidad)`: Período paralelo.

### Funciones de texto

- `CONCATENATE(texto1, texto2, ...)`: Concatena cadenas de texto.
- `UPPER(texto)`, `LOWER(texto)`: Convierte a mayúsculas o minúsculas.
- `LEFT(texto, n)`, `RIGHT(texto, n)`: Extrae caracteres desde la izquierda o derecha.
- `MID(texto, inicio, longitud)`: Extrae caracteres desde una posición.
- `FIND(buscar, texto, [inicio])`: Encuentra la posición de un texto dentro de otro.
- `SUBSTITUTE(texto, antiguo, nuevo)`: Sustituye texto.

### Funciones matemáticas

- `ABS(número)`: Valor absoluto.
- `ROUND(número, decimales)`: Redondea a un número de decimales.
- `TRUNC(número, decimales)`: Trunca a un número de decimales.
- `POWER(número, potencia)`: Eleva un número a una potencia.
- `SQRT(número)`: Raíz cuadrada.
- `LN(número)`, `LOG(número, [base])`: Logaritmo natural o en base específica.

## Patrones comunes de DAX

### Cálculo de porcentajes

```
% del Total = DIVIDE([Medida], [Total Medida], 0)

// Ejemplo:
% de Ventas = DIVIDE([Total Ventas], CALCULATE([Total Ventas], ALL(Productos)), 0)
```

### Acumulados (Running Totals)

```
Ventas Acumuladas = 
CALCULATE(
    [Total Ventas],
    FILTER(
        ALL(Calendario[Fecha]),
        Calendario[Fecha] <= MAX(Calendario[Fecha])
    )
)
```

### Comparación con período anterior

```
Crecimiento vs Año Anterior = 
[Total Ventas] - CALCULATE([Total Ventas], SAMEPERIODLASTYEAR(Calendario[Fecha]))

% Crecimiento = 
DIVIDE(
    [Total Ventas] - CALCULATE([Total Ventas], SAMEPERIODLASTYEAR(Calendario[Fecha])),
    CALCULATE([Total Ventas], SAMEPERIODLASTYEAR(Calendario[Fecha])),
    0
)
```

### Top N con "Otros"

```
Top 5 Clientes = 
IF(
    ISFILTERED(Clientes[Cliente]),
    [Total Ventas],
    VAR TopClientes = TOPN(5, ALL(Clientes[Cliente]), [Total Ventas])
    RETURN
    IF(
        CONTAINS(TopClientes, Clientes[Cliente], Clientes[Cliente]),
        [Total Ventas],
        CALCULATE([Total Ventas], EXCEPT(ALL(Clientes[Cliente]), TopClientes))
    )
)
```

## Mejores prácticas

1. **Nombres descriptivos**: Use nombres claros y descriptivos para medidas y columnas.
2. **Comentarios**: Documente fórmulas complejas con comentarios.
3. **Formato**: Aplique formato adecuado a las medidas (moneda, porcentaje, etc.).
4. **Evite columnas calculadas innecesarias**: Use medidas cuando sea posible.
5. **Optimice para rendimiento**: Evite cálculos anidados excesivos.
6. **Reutilice medidas**: Construya medidas complejas a partir de medidas más simples.
7. **Pruebe en contextos diferentes**: Asegúrese de que las medidas funcionen en todos los contextos.

## Depuración de fórmulas DAX

- Utilice la función `ISFILTERED()` para comprobar si una columna está filtrada.
- Utilice `HASONEVALUE()` para comprobar si una columna tiene un solo valor.
- Divida fórmulas complejas en variables con `VAR`.
- Utilice el analizador de rendimiento de DAX para identificar cuellos de botella.

## Recursos adicionales

- [Documentación oficial de DAX](https://learn.microsoft.com/es-es/dax/)
- [Referencia de funciones DAX](https://learn.microsoft.com/es-es/dax/dax-function-reference)
- [SQLBI](https://www.sqlbi.com/) - Recursos avanzados de DAX
- [DAX Patterns](https://www.daxpatterns.com/) - Patrones comunes de DAX

---

Esta guía proporciona una introducción a DAX y sus principales funcionalidades. Para obtener información más detallada, consulte la documentación oficial y los recursos adicionales mencionados.
