# Registro de Pruebas Manuales

## Fecha: 2 de mayo de 2025

### Prueba: Flujo de navegación principal

| Paso | Resultado | Observaciones |
|------|-----------|---------------|
| Hacer clic en "Comenzar Taller" | ❌ Falla | No muestra correctamente la ruta de aprendizaje |
| Seleccionar un modo | ❌ Falla | No se marca como seleccionado |
| Seleccionar un módulo | ❌ Falla | No muestra el contenido del módulo |
| Navegar entre pasos | ❌ Falla | No funciona la navegación entre pasos |

### Prueba: Verificación de recursos

| Paso | Resultado | Observaciones |
|------|-----------|---------------|
| Hacer clic en botón "Datasets" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Guías" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Prompts IA" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Plantillas" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Certificación" | ✅ Éxito | Muestra el modal correctamente |
| Descargar recursos | ❌ Falla | Los botones de descarga no funcionan |

### Prueba: Verificación de requisitos

| Paso | Resultado | Observaciones |
|------|-----------|---------------|
| Hacer clic en "Verificar Todos los Requisitos" | ✅ Éxito | Muestra resultados aleatorios (simulados) |
| Verificar requisito individual | ✅ Éxito | Muestra resultado aleatorio (simulado) |

## Fecha: 3 de mayo de 2025

### Prueba: Flujo de navegación principal (después de correcciones)

| Paso | Resultado | Observaciones |
|------|-----------|---------------|
| Hacer clic en "Comenzar Taller" | ✅ Éxito | Muestra correctamente la ruta de aprendizaje |
| Seleccionar un modo | ✅ Éxito | Se marca como seleccionado y se guarda en localStorage |
| Seleccionar un módulo | ✅ Éxito | Muestra el contenido del módulo y carga desde Markdown |
| Navegar entre pasos | ✅ Éxito | Funciona la navegación entre pasos y guarda el progreso |
| Completar un módulo | ✅ Éxito | Muestra el modal de módulo completado |
| Volver a la ruta de aprendizaje | ✅ Éxito | Muestra la ruta con el progreso actualizado |
| Cerrar y volver a abrir la página | ✅ Éxito | Mantiene el progreso y la posición actual |

### Prueba: Verificación de recursos (después de correcciones)

| Paso | Resultado | Observaciones |
|------|-----------|---------------|
| Hacer clic en botón "Datasets" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Guías" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Prompts IA" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Plantillas" | ✅ Éxito | Muestra el modal correctamente |
| Hacer clic en botón "Certificación" | ✅ Éxito | Muestra el modal correctamente |
| Descargar recursos | ✅ Éxito | Los botones de descarga funcionan correctamente |
