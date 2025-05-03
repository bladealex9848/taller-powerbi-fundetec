/**
 * Contenido predefinido para el módulo de práctica
 * Este archivo contiene el contenido del módulo de práctica con Power BI
 */

const practiceModuleContent = {
    title: "Práctica con Power BI",
    description: "Aplica lo aprendido con ejercicios prácticos guiados",

    // Notas para el facilitador (solo visibles en modo facilitador)
    facilitatorNotes: {
        timeAllocation: {
            step1: "15-20 minutos",
            step2: "30-35 minutos",
            step3: "20-25 minutos",
            step4: "15-20 minutos"
        },
        keyPoints: [
            "Enfatizar la importancia de la práctica para consolidar conocimientos",
            "Destacar que los errores son parte del aprendizaje",
            "Resaltar la utilidad de los datasets proporcionados para situaciones reales",
            "Explicar que los ejercicios están diseñados para cubrir los conceptos más importantes",
            "Mencionar que los recursos adicionales permiten profundizar en temas específicos"
        ],
        generalTips: [
            "Asegúrate de que todos los participantes tengan acceso a los archivos de práctica",
            "Camina por el aula para ofrecer ayuda individual durante los ejercicios",
            "Fomenta la colaboración entre participantes para resolver problemas",
            "Muestra ejemplos de soluciones posibles al finalizar cada ejercicio",
            "Adapta el ritmo según el nivel general del grupo"
        ],
        commonQuestions: [
            {
                question: "¿Hay una única forma correcta de resolver los ejercicios?",
                answer: "No, Power BI ofrece múltiples caminos para llegar a resultados similares. Lo importante es que el dashboard final comunique efectivamente la información requerida."
            },
            {
                question: "¿Qué hago si mi resultado no coincide exactamente con el ejemplo?",
                answer: "Revisa primero los datos y transformaciones. Pequeñas diferencias en formato o diseño son normales y aceptables mientras la información sea correcta."
            },
            {
                question: "¿Puedo usar estos datasets para prácticas posteriores?",
                answer: "Sí, los datasets proporcionados son para tu uso personal y puedes seguir practicando con ellos después del taller."
            }
        ]
    },

    step1: {
        title: "Introducción a la Práctica",
        description: "Preparación para los ejercicios prácticos",
        content: `
            <div class="mb-6">
                <p class="mb-4">En esta sección, pondrás en práctica todo lo aprendido hasta ahora a través de ejercicios guiados. Estos ejercicios te permitirán consolidar tus conocimientos y desarrollar habilidades prácticas con Power BI.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Objetivos de la práctica</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Aplicar los conceptos aprendidos en situaciones reales</li>
                        <li>Desarrollar habilidades prácticas con Power BI</li>
                        <li>Resolver problemas comunes de análisis de datos</li>
                        <li>Crear dashboards efectivos desde cero</li>
                        <li>Ganar confianza en el uso de Power BI</li>
                    </ul>
                </div>

                <p class="mb-4">Antes de comenzar, asegúrate de tener instalado Power BI Desktop y de haber descargado los archivos de práctica incluidos en los recursos del taller.</p>

                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Archivos necesarios para la práctica</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>VentasRetail.xlsx</strong> - Dataset principal con datos de ventas minoristas</li>
                        <li><strong>Productos.xlsx</strong> - Información detallada de productos</li>
                        <li><strong>Tiendas.xlsx</strong> - Datos de las tiendas y ubicaciones</li>
                        <li><strong>Plantilla_Dashboard.pbit</strong> - Plantilla opcional para comenzar</li>
                    </ul>
                    <p class="mt-2 text-sm">Todos estos archivos están disponibles en la sección de recursos del taller.</p>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/practice-intro.jpg" alt="Ejemplo de dashboard de práctica" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
        `
    },

    step2: {
        title: "Desarrollo Paso a Paso",
        description: "Guía detallada para crear tu primer dashboard",
        content: `
            <div class="mb-6">
                <p class="mb-4">En este ejercicio práctico, crearemos un dashboard de análisis de ventas minoristas paso a paso. Seguiremos el mismo flujo de trabajo que vimos en los módulos anteriores: conectar, transformar, modelar y visualizar.</p>

                <h4 class="font-bold text-blue-800 mb-2">Paso 1: Conexión a los datos</h4>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Abre Power BI Desktop</li>
                    <li>Haz clic en "Obtener datos" > "Excel"</li>
                    <li>Navega hasta el archivo "VentasRetail.xlsx" y selecciónalo</li>
                    <li>En el navegador, selecciona las tablas "Ventas" y "Clientes"</li>
                    <li>Haz clic en "Transformar datos" para abrir el Editor de Power Query</li>
                </ol>

                <h4 class="font-bold text-blue-800 mb-2">Paso 2: Transformación de datos</h4>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>En la tabla "Ventas":
                        <ul class="list-disc pl-5 mt-1">
                            <li>Cambia el tipo de datos de "Fecha" a tipo Fecha</li>
                            <li>Cambia el tipo de datos de "Monto" y "Cantidad" a Decimal</li>
                            <li>Filtra para eliminar cualquier fila con valores nulos en "ID_Producto"</li>
                        </ul>
                    </li>
                    <li>En la tabla "Clientes":
                        <ul class="list-disc pl-5 mt-1">
                            <li>Cambia el tipo de datos de "ID_Cliente" a Texto</li>
                            <li>Reemplaza cualquier valor "N/A" en "Segmento" por "No clasificado"</li>
                        </ul>
                    </li>
                    <li>Carga los datos transformados haciendo clic en "Cerrar y aplicar"</li>
                </ol>

                <h4 class="font-bold text-blue-800 mb-2">Paso 3: Conexión a datos adicionales</h4>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Haz clic en "Obtener datos" > "Excel"</li>
                    <li>Navega hasta el archivo "Productos.xlsx" y selecciónalo</li>
                    <li>Selecciona la tabla "Productos" y cárgala</li>
                    <li>Repite el proceso para cargar la tabla "Tiendas" desde el archivo "Tiendas.xlsx"</li>
                </ol>

                <h4 class="font-bold text-blue-800 mb-2">Paso 4: Modelado de datos</h4>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Ve a la Vista de Modelo (segundo icono en la barra lateral izquierda)</li>
                    <li>Crea las siguientes relaciones:
                        <ul class="list-disc pl-5 mt-1">
                            <li>"Ventas" con "Productos" usando el campo "ID_Producto"</li>
                            <li>"Ventas" con "Clientes" usando el campo "ID_Cliente"</li>
                            <li>"Ventas" con "Tiendas" usando el campo "ID_Tienda"</li>
                        </ul>
                    </li>
                    <li>Asegúrate de que todas las relaciones sean de tipo "Uno a muchos" con la dirección de filtro única</li>
                </ol>

                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-green-800 mb-2">Consejo práctico</h4>
                    <p>Organiza las tablas en el diagrama para que "Ventas" esté en el centro y las demás tablas alrededor. Esto crea un modelo en estrella que es más eficiente y fácil de entender.</p>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/practice-model.jpg" alt="Modelo de datos en estrella" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
        `
    },

    step3: {
        title: "Resultado Esperado y Solución de Problemas",
        description: "Creación de visualizaciones y solución de problemas comunes",
        content: `
            <div class="mb-6">
                <p class="mb-4">Ahora que tenemos nuestro modelo de datos preparado, vamos a crear visualizaciones efectivas y resolver algunos problemas comunes que podrían surgir.</p>

                <h4 class="font-bold text-blue-800 mb-2">Creación de visualizaciones clave</h4>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Regresa a la Vista de Informe (primer icono en la barra lateral izquierda)</li>
                    <li>Crea un KPI de ventas totales:
                        <ul class="list-disc pl-5 mt-1">
                            <li>Inserta un visual de "Tarjeta"</li>
                            <li>Arrastra el campo "Monto" de la tabla "Ventas" al área de valores</li>
                        </ul>
                    </li>
                    <li>Crea un gráfico de ventas por categoría:
                        <ul class="list-disc pl-5 mt-1">
                            <li>Inserta un visual de "Gráfico de barras"</li>
                            <li>Arrastra "Categoría" de "Productos" al eje</li>
                            <li>Arrastra "Monto" de "Ventas" a los valores</li>
                        </ul>
                    </li>
                    <li>Crea un gráfico de tendencia temporal:
                        <ul class="list-disc pl-5 mt-1">
                            <li>Inserta un visual de "Gráfico de líneas"</li>
                            <li>Arrastra "Fecha" de "Ventas" al eje</li>
                            <li>Arrastra "Monto" de "Ventas" a los valores</li>
                            <li>En el panel de visualizaciones, expande la sección "Eje X" y cambia la jerarquía de fechas a "Mes"</li>
                        </ul>
                    </li>
                    <li>Crea un mapa de ventas por ubicación:
                        <ul class="list-disc pl-5 mt-1">
                            <li>Inserta un visual de "Mapa"</li>
                            <li>Arrastra "Ciudad" y "País" de "Tiendas" a la ubicación</li>
                            <li>Arrastra "Monto" de "Ventas" al tamaño</li>
                        </ul>
                    </li>
                </ol>

                <h4 class="font-bold text-blue-800 mb-2">Solución de problemas comunes</h4>
                <div class="space-y-4 mb-4">
                    <div class="bg-red-50 p-4 rounded-lg">
                        <h5 class="font-bold text-red-800 mb-1">Problema: Las relaciones no funcionan correctamente</h5>
                        <p class="mb-1">Síntoma: Los filtros no se propagan entre tablas o los totales no coinciden.</p>
                        <p class="font-bold">Solución:</p>
                        <ul class="list-disc pl-5">
                            <li>Verifica que los campos relacionados tengan el mismo tipo de datos</li>
                            <li>Asegúrate de que la cardinalidad sea correcta (generalmente "Uno a muchos")</li>
                            <li>Comprueba que la dirección del filtro sea la adecuada</li>
                        </ul>
                    </div>

                    <div class="bg-red-50 p-4 rounded-lg">
                        <h5 class="font-bold text-red-800 mb-1">Problema: Las fechas no se agrupan correctamente</h5>
                        <p class="mb-1">Síntoma: No puedes analizar por mes, trimestre o año.</p>
                        <p class="font-bold">Solución:</p>
                        <ul class="list-disc pl-5">
                            <li>Asegúrate de que el campo de fecha tenga el tipo de datos "Fecha" (no texto)</li>
                            <li>Considera crear una tabla de calendario para análisis temporales más avanzados</li>
                        </ul>
                    </div>

                    <div class="bg-red-50 p-4 rounded-lg">
                        <h5 class="font-bold text-red-800 mb-1">Problema: Los totales no coinciden con lo esperado</h5>
                        <p class="mb-1">Síntoma: Los valores sumados manualmente no coinciden con los totales mostrados.</p>
                        <p class="font-bold">Solución:</p>
                        <ul class="list-disc pl-5">
                            <li>Verifica si hay duplicados en los datos</li>
                            <li>Comprueba si hay filtros aplicados que estén afectando los cálculos</li>
                            <li>Revisa las relaciones para asegurarte de que no haya conteos duplicados</li>
                        </ul>
                    </div>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/practice-dashboard.jpg" alt="Dashboard final de práctica" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Resultado esperado</h4>
                    <p>Al finalizar este ejercicio, deberías tener un dashboard interactivo que muestre:</p>
                    <ul class="list-disc pl-5">
                        <li>Ventas totales en un KPI</li>
                        <li>Distribución de ventas por categoría de producto</li>
                        <li>Tendencia de ventas a lo largo del tiempo</li>
                        <li>Distribución geográfica de las ventas</li>
                    </ul>
                    <p class="mt-2">Todas las visualizaciones deberían estar interconectadas, de modo que al hacer clic en una categoría o ubicación, las demás visualizaciones se filtren automáticamente.</p>
                </div>
            </div>
        `
    },

    step4: {
        title: "Recursos para Continuar Aprendiendo",
        description: "Materiales y recursos adicionales para profundizar tus conocimientos",
        content: `
            <div class="mb-6">
                <p class="mb-4">¡Felicidades por completar los ejercicios prácticos! Para seguir desarrollando tus habilidades con Power BI, aquí tienes una selección de recursos adicionales organizados por nivel y tema.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-bold text-blue-800 mb-2">Recursos para principiantes</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><a href="https://docs.microsoft.com/es-es/learn/paths/create-use-analytics-reports-power-bi/" target="_blank" class="text-blue-600 hover:underline">Ruta de aprendizaje oficial de Microsoft</a></li>
                            <li><a href="https://www.youtube.com/playlist?list=PLv2BtOtLblH1MbTtFqwXUWRG9UVOeVt0A" target="_blank" class="text-blue-600 hover:underline">Tutoriales en video para principiantes</a></li>
                            <li><a href="https://powerbi.microsoft.com/es-es/diad/" target="_blank" class="text-blue-600 hover:underline">Dashboard en un día (curso gratuito)</a></li>
                            <li>Libro: "Power BI - Análisis de Datos y Business Intelligence" (disponible en PDF en recursos)</li>
                        </ul>
                    </div>

                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-bold text-green-800 mb-2">Recursos intermedios</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><a href="https://docs.microsoft.com/es-es/learn/paths/dax-power-bi/" target="_blank" class="text-green-600 hover:underline">Curso de DAX para análisis avanzado</a></li>
                            <li><a href="https://www.youtube.com/playlist?list=PLv2BtOtLblH3RYFzJrVqGiDLlRJ0Hf_Vd" target="_blank" class="text-green-600 hover:underline">Tutoriales de modelado avanzado</a></li>
                            <li><a href="https://powerbi.microsoft.com/es-es/blog/" target="_blank" class="text-green-600 hover:underline">Blog oficial de Power BI (actualizaciones y consejos)</a></li>
                            <li>Plantillas avanzadas (disponibles en la sección de recursos)</li>
                        </ul>
                    </div>
                </div>

                <h4 class="font-bold text-blue-800 mb-2">Datasets para práctica adicional</h4>
                <p class="mb-4">Estos conjuntos de datos están disponibles en la sección de recursos y son ideales para seguir practicando:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        <strong>FinanzasPersonales.xlsx</strong>
                        <p class="text-sm">Dataset para crear un dashboard de seguimiento de gastos e ingresos personales.</p>
                    </li>
                    <li>
                        <strong>RendimientoEquipo.xlsx</strong>
                        <p class="text-sm">Datos para analizar el rendimiento de un equipo de trabajo con métricas de productividad.</p>
                    </li>
                    <li>
                        <strong>InventarioTI.xlsx</strong>
                        <p class="text-sm">Conjunto de datos para gestionar y analizar inventario de equipos informáticos.</p>
                    </li>
                    <li>
                        <strong>SoporteTecnico.xlsx</strong>
                        <p class="text-sm">Datos de tickets de soporte técnico para análisis de incidencias y tiempos de resolución.</p>
                    </li>
                </ul>

                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Comunidad y soporte</h4>
                    <p class="mb-2">Conecta con otros usuarios y expertos de Power BI:</p>
                    <ul class="list-disc pl-5">
                        <li><a href="https://community.powerbi.com/" target="_blank" class="text-yellow-600 hover:underline">Comunidad oficial de Power BI</a></li>
                        <li><a href="https://www.reddit.com/r/PowerBI/" target="_blank" class="text-yellow-600 hover:underline">Subreddit de Power BI</a></li>
                        <li><a href="https://www.linkedin.com/groups/5096169/" target="_blank" class="text-yellow-600 hover:underline">Grupo de LinkedIn de Power BI</a></li>
                        <li>Grupo de WhatsApp del taller (escanea el código QR en la sección de recursos)</li>
                    </ul>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Certificaciones Microsoft</h4>
                    <p class="mb-2">Si deseas validar tus conocimientos, considera estas certificaciones:</p>
                    <ul class="list-disc pl-5">
                        <li><a href="https://docs.microsoft.com/es-es/learn/certifications/exams/pl-900" target="_blank" class="text-blue-600 hover:underline">Microsoft Certified: Power Platform Fundamentals (PL-900)</a></li>
                        <li><a href="https://docs.microsoft.com/es-es/learn/certifications/exams/da-100" target="_blank" class="text-blue-600 hover:underline">Microsoft Certified: Data Analyst Associate (DA-100)</a></li>
                    </ul>
                </div>

                <p class="text-center font-bold text-blue-800 mt-6">¡Continúa tu viaje de aprendizaje con Power BI y lleva tus habilidades de análisis de datos al siguiente nivel!</p>
            </div>
        `
    },

    // Contenido específico para modo estudiante
    studentContent: {
        description: "Esta sección te guiará paso a paso en la aplicación práctica de todo lo aprendido sobre Power BI.",
        exercises: [
            {
                title: "Dashboard de ventas minoristas",
                description: "Crea un dashboard completo de análisis de ventas siguiendo las instrucciones detalladas.",
                steps: [
                    "Descarga los archivos de práctica desde la sección de recursos",
                    "Sigue las instrucciones paso a paso del ejercicio principal",
                    "Compara tu resultado con el ejemplo proporcionado",
                    "Intenta agregar al menos una visualización adicional por tu cuenta"
                ]
            },
            {
                title: "Reto adicional: Dashboard de soporte técnico",
                description: "Si completaste el ejercicio principal, intenta este reto adicional:",
                steps: [
                    "Utiliza el archivo SoporteTecnico.xlsx de la sección de recursos",
                    "Crea un dashboard que muestre: tickets por categoría, tiempo promedio de resolución, tickets por técnico y tendencia temporal",
                    "Agrega al menos un KPI y un filtro interactivo",
                    "Comparte tu solución con otros participantes para recibir feedback"
                ]
            }
        ]
    },

    // Contenido específico para modo autoguiado
    selfGuidedContent: {
        description: "Esta sección te proporcionará una guía detallada para aplicar todo lo aprendido de forma independiente, con verificaciones para asegurar tu comprensión.",
        checkpoints: [
            "He conectado correctamente a todas las fuentes de datos requeridas",
            "He transformado los datos aplicando los tipos de datos correctos y limpieza básica",
            "He creado un modelo de datos con relaciones adecuadas entre todas las tablas",
            "He construido al menos 4 visualizaciones diferentes que muestran aspectos relevantes de los datos",
            "He verificado que todas las visualizaciones se filtran correctamente al interactuar con ellas",
            "He identificado y resuelto al menos un problema durante el desarrollo",
            "He explorado al menos uno de los recursos adicionales proporcionados"
        ],
        additionalResources: [
            {
                title: "Guía de solución de problemas comunes en Power BI",
                url: "https://docs.microsoft.com/es-es/power-bi/troubleshoot/",
                description: "Documentación oficial de Microsoft sobre resolución de problemas"
            },
            {
                title: "Plantillas adicionales para práctica",
                url: "assets/templates/plantillas_adicionales.zip",
                description: "Archivo ZIP con plantillas adicionales para diferentes escenarios"
            },
            {
                title: "Ejercicios de práctica adicionales",
                url: "assets/exercises/ejercicios_adicionales.pdf",
                description: "PDF con ejercicios adicionales de diferentes niveles de dificultad"
            }
        ]
    },

    // Quiz para comprobar comprensión
    quiz: {
        questionId: "practice-quiz-1",
        question: "¿Cuál es el primer paso recomendado al crear un nuevo proyecto en Power BI?",
        options: [
            "Crear visualizaciones inmediatamente",
            "Conectar a las fuentes de datos y transformarlos adecuadamente",
            "Publicar el informe en Power BI Service",
            "Diseñar el aspecto visual del dashboard"
        ],
        correctIndex: 1
    }
};
