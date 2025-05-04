/**
 * Contenido predefinido para el módulo de demostración
 * Este archivo contiene el contenido del módulo de demostración de Power BI
 */

const demoModuleContent = {
    title: "Demostración de Power BI",
    description: "Aprende a través de ejemplos prácticos cómo crear visualizaciones efectivas",

    step1: {
        title: "Introducción a la Demostración",
        description: "Preparación para la demostración práctica de Power BI",
        content: `
            <div class="mb-6">
                <p class="mb-4">En esta sección, veremos una demostración práctica de cómo utilizar Power BI para crear visualizaciones efectivas a partir de datos reales. Seguiremos un enfoque paso a paso para que puedas replicar el proceso en tu propio entorno.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Objetivos de la demostración</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Importar y transformar un conjunto de datos de ventas</li>
                        <li>Crear un modelo de datos con relaciones efectivas</li>
                        <li>Diseñar visualizaciones interactivas</li>
                        <li>Crear un dashboard completo y funcional</li>
                        <li>Compartir y publicar los resultados</li>
                    </ul>
                </div>

                <p class="mb-4">Antes de comenzar, asegúrate de tener instalado Power BI Desktop en tu computadora. Si aún no lo has hecho, puedes descargarlo gratuitamente desde el sitio oficial de Microsoft.</p>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-intro.jpg" alt="Power BI Dashboard" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Requisitos para la demostración</h4>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Software:</strong> Power BI Desktop (última versión)</li>
                            <li><strong>Datos:</strong> Archivo "VentasEjemplo.xlsx" (incluido en los recursos)</li>
                            <li><strong>Conocimientos previos:</strong> Conceptos básicos de Power BI cubiertos en el módulo de introducción</li>
                            <li><strong>Tiempo estimado:</strong> 60-90 minutos para completar todos los pasos</li>
                        </ul>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Beneficios de seguir la demostración</h4>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Aprendizaje práctico:</strong> Consolidar conocimientos teóricos con aplicación real</li>
                            <li><strong>Flujo de trabajo completo:</strong> Ver el proceso de principio a fin</li>
                            <li><strong>Mejores prácticas:</strong> Aprender técnicas optimizadas y profesionales</li>
                            <li><strong>Base para proyectos:</strong> Obtener una plantilla que puedes adaptar a tus propios datos</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo para aprovechar al máximo esta demostración</h4>
                    <p class="mb-2">Para obtener el mayor beneficio de esta demostración, te recomendamos:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Seguir los pasos en tu propia computadora mientras avanzas</li>
                        <li>Experimentar con variaciones de las visualizaciones sugeridas</li>
                        <li>Tomar notas sobre técnicas o conceptos nuevos para ti</li>
                        <li>Intentar replicar el proceso con tus propios datos después de completar la demostración</li>
                    </ul>
                </div>
            </div>
        `,

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "demo-quiz-1",
            question: "¿Cuál es el propósito principal de seguir una demostración paso a paso en Power BI?",
            options: [
                "Memorizar exactamente los mismos pasos para aplicarlos sin variación en todos los proyectos",
                "Aprender el flujo de trabajo completo y las mejores prácticas que luego puedes adaptar a tus propios proyectos",
                "Evitar tener que aprender los conceptos teóricos de Power BI",
                "Crear un dashboard idéntico al de la demostración para usar en tu trabajo"
            ],
            correctIndex: 1
        },

        // Diagrama del flujo de trabajo
        diagram: {
            title: "Flujo de trabajo de la demostración",
            description: "Este diagrama muestra los pasos principales que seguiremos en esta demostración práctica.",
            steps: [
                {
                    step: 1,
                    title: "Importación de datos",
                    description: "Conectar a fuentes de datos y cargarlos en Power BI"
                },
                {
                    step: 2,
                    title: "Transformación",
                    description: "Limpiar y dar forma a los datos para el análisis"
                },
                {
                    step: 3,
                    title: "Modelado",
                    description: "Crear relaciones y medidas calculadas"
                },
                {
                    step: 4,
                    title: "Visualización",
                    description: "Crear gráficos y visuales efectivos"
                },
                {
                    step: 5,
                    title: "Dashboard",
                    description: "Combinar visualizaciones en un dashboard coherente"
                },
                {
                    step: 6,
                    title: "Publicación",
                    description: "Compartir el dashboard con otros usuarios"
                }
            ]
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "Esta demostración te guiará paso a paso en la creación de un dashboard completo en Power BI, desde la importación de datos hasta la publicación final.",
            exercises: [
                {
                    title: "Preparación para la demostración",
                    description: "Antes de comenzar, asegúrate de tener todo lo necesario:",
                    steps: [
                        "Descarga e instala Power BI Desktop desde el sitio oficial de Microsoft",
                        "Descarga el archivo 'VentasEjemplo.xlsx' de los recursos del taller",
                        "Crea una carpeta en tu computadora para guardar tu trabajo",
                        "Abre Power BI Desktop y familiarízate con la interfaz"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te proporcionará una guía detallada para crear un dashboard completo en Power BI, con verificaciones para asegurar tu comprensión en cada paso.",
            checkpoints: [
                "He instalado Power BI Desktop en mi computadora",
                "He descargado el archivo de datos de ejemplo 'VentasEjemplo.xlsx'",
                "Entiendo los objetivos generales de la demostración",
                "Estoy familiarizado con la interfaz básica de Power BI Desktop",
                "Tengo claros los pasos que seguiremos en la demostración"
            ],
            additionalResources: [
                {
                    title: "Guía de inicio rápido de Power BI Desktop",
                    url: "https://docs.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started",
                    description: "Documentación oficial de Microsoft sobre los primeros pasos con Power BI Desktop"
                },
                {
                    title: "Descargar Power BI Desktop",
                    url: "https://powerbi.microsoft.com/es-es/desktop/",
                    description: "Enlace oficial para descargar la última versión de Power BI Desktop"
                }
            ]
        }

    },

    step2: {
        title: "Importación de Datos",
        description: "Cómo importar datos desde diferentes fuentes",
        content: `
            <div class="mb-6">
                <p class="mb-4">El primer paso en cualquier proyecto de Power BI es importar los datos que queremos analizar. Power BI permite conectarse a una amplia variedad de fuentes de datos, desde archivos Excel y CSV hasta bases de datos SQL Server, servicios en la nube y más.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Fuentes de datos comunes</h4>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Archivos:</strong> Excel, CSV, XML, JSON, PDF</li>
                            <li><strong>Bases de datos:</strong> SQL Server, Oracle, MySQL, PostgreSQL</li>
                            <li><strong>Servicios en la nube:</strong> Dynamics 365, Salesforce, Google Analytics</li>
                            <li><strong>Servicios web:</strong> APIs REST, OData, Web</li>
                            <li><strong>Otros:</strong> Carpetas, SharePoint, Azure</li>
                        </ul>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Consideraciones importantes</h4>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Permisos:</strong> Asegúrate de tener acceso a los datos que necesitas</li>
                            <li><strong>Volumen:</strong> Considera el tamaño de los datos para un rendimiento óptimo</li>
                            <li><strong>Actualización:</strong> Define la frecuencia con la que necesitas actualizar los datos</li>
                            <li><strong>Seguridad:</strong> Ten en cuenta las políticas de seguridad de tu organización</li>
                            <li><strong>Calidad:</strong> Evalúa la calidad de los datos antes de importarlos</li>
                        </ul>
                    </div>
                </div>

                <h4 class="font-bold text-blue-800 mb-2">Pasos para importar datos:</h4>

                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Abre Power BI Desktop</li>
                    <li>Haz clic en "Obtener datos" en la pestaña Inicio</li>
                    <li>Selecciona la fuente de datos apropiada (para esta demostración usaremos Excel)</li>
                    <li>Navega hasta el archivo "VentasEjemplo.xlsx" incluido en los recursos del taller</li>
                    <li>Selecciona las tablas que deseas importar</li>
                    <li>Haz clic en "Cargar" o "Transformar datos" si necesitas realizar ajustes</li>
                </ol>

                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                    <p>Si tus datos requieren limpieza o transformación, es mejor hacerlo en el Editor de Power Query antes de cargarlos al modelo. Esto mejorará el rendimiento y facilitará el análisis posterior.</p>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-import.jpg" alt="Importación de datos en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <h4 class="font-bold text-blue-800 mb-3">Decisión: ¿Cargar o Transformar?</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h5 class="font-bold text-blue-800 mb-2">Cargar directamente cuando:</h5>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Los datos ya están limpios y bien estructurados</li>
                            <li>No necesitas combinar con otras fuentes</li>
                            <li>Los tipos de datos ya son correctos</li>
                            <li>No necesitas columnas calculadas complejas</li>
                            <li>Quieres un proceso rápido y directo</li>
                        </ul>
                    </div>

                    <div class="bg-green-50 p-4 rounded-lg">
                        <h5 class="font-bold text-green-800 mb-2">Transformar primero cuando:</h5>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Los datos necesitan limpieza o reestructuración</li>
                            <li>Necesitas combinar múltiples fuentes</li>
                            <li>Debes cambiar tipos de datos</li>
                            <li>Quieres crear columnas calculadas</li>
                            <li>Necesitas filtrar filas o columnas innecesarias</li>
                        </ul>
                    </div>
                </div>

                <p class="mb-4">Una vez importados los datos, verás las tablas en el panel de "Campos" a la derecha de la pantalla. Ahora estamos listos para comenzar a crear visualizaciones.</p>
            </div>
        `,

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "demo-quiz-2",
            question: "¿Cuál es la mejor práctica al importar datos en Power BI?",
            options: [
                "Siempre cargar los datos directamente para ahorrar tiempo",
                "Transformar los datos en el Editor de Power Query antes de cargarlos al modelo cuando sea necesario",
                "Importar todas las tablas disponibles para asegurarse de tener todos los datos posibles",
                "Evitar el uso de Excel como fuente de datos"
            ],
            correctIndex: 1
        },

        // Diagrama del proceso de importación
        diagram: {
            title: "Proceso de importación de datos",
            description: "Este diagrama muestra el flujo de trabajo para importar datos en Power BI.",
            steps: [
                {
                    step: 1,
                    title: "Seleccionar fuente",
                    description: "Elegir el tipo de fuente de datos adecuado"
                },
                {
                    step: 2,
                    title: "Conectar",
                    description: "Proporcionar credenciales y parámetros de conexión"
                },
                {
                    step: 3,
                    title: "Vista previa",
                    description: "Revisar los datos disponibles"
                },
                {
                    step: 4,
                    title: "Decisión",
                    description: "Decidir entre cargar directamente o transformar"
                },
                {
                    step: 5,
                    title: "Transformar (opcional)",
                    description: "Limpiar y dar forma a los datos en Power Query"
                },
                {
                    step: 6,
                    title: "Cargar",
                    description: "Importar los datos al modelo de Power BI"
                }
            ]
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "En esta sección, aprenderás a importar datos desde diferentes fuentes en Power BI, con énfasis en archivos Excel.",
            exercises: [
                {
                    title: "Importación de datos desde Excel",
                    description: "Practica la importación de datos desde un archivo Excel:",
                    steps: [
                        "Abre Power BI Desktop",
                        "Haz clic en 'Obtener datos' en la pestaña Inicio",
                        "Selecciona 'Excel' como fuente de datos",
                        "Navega hasta el archivo 'VentasEjemplo.xlsx' proporcionado en los recursos",
                        "En el navegador, selecciona las tablas 'Ventas' y 'Productos'",
                        "Haz clic en 'Transformar datos' para abrir el Editor de Power Query",
                        "Explora las opciones de transformación disponibles",
                        "Haz clic en 'Cerrar y aplicar' para cargar los datos en Power BI"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te guiará en el proceso de importación de datos en Power BI, con verificaciones para asegurar tu comprensión.",
            checkpoints: [
                "He identificado las fuentes de datos disponibles en Power BI",
                "Entiendo la diferencia entre cargar directamente y transformar datos",
                "He importado correctamente el archivo 'VentasEjemplo.xlsx'",
                "Puedo ver las tablas importadas en el panel de Campos",
                "Comprendo cuándo es necesario usar el Editor de Power Query"
            ],
            additionalResources: [
                {
                    title: "Obtener datos en Power BI Desktop",
                    url: "https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-quickstart-connect-to-data",
                    description: "Documentación oficial de Microsoft sobre cómo conectarse a diferentes fuentes de datos"
                },
                {
                    title: "Introducción a Power Query",
                    url: "https://learn.microsoft.com/es-es/power-query/power-query-what-is-power-query",
                    description: "Guía oficial sobre Power Query, la herramienta de transformación de datos de Power BI"
                }
            ]
        }
    },

    step3: {
        title: "Creación de Visualizaciones",
        description: "Cómo crear visualizaciones efectivas con los datos importados",
        content: `
            <div class="mb-6">
                <p class="mb-4">Las visualizaciones son el corazón de Power BI. Nos permiten transformar datos en información visual que facilita la comprensión y el análisis. Power BI ofrece una amplia variedad de visualizaciones, desde gráficos básicos hasta mapas y visualizaciones personalizadas.</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Visualizaciones de comparación</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Gráfico de barras:</strong> Comparar valores entre categorías</li>
                            <li><strong>Gráfico de columnas:</strong> Similar al de barras, pero vertical</li>
                            <li><strong>Gráfico de cascada:</strong> Mostrar cambios acumulativos</li>
                            <li><strong>Gráfico de embudo:</strong> Visualizar etapas de un proceso</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>Ideal para: Comparar rendimiento entre regiones, productos o períodos</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Visualizaciones de tendencias</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Gráfico de líneas:</strong> Mostrar cambios a lo largo del tiempo</li>
                            <li><strong>Gráfico de áreas:</strong> Enfatizar volumen en tendencias</li>
                            <li><strong>Gráfico de velas:</strong> Analizar datos financieros</li>
                            <li><strong>Gráfico de dispersión:</strong> Identificar correlaciones</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>Ideal para: Análisis de tendencias temporales y patrones</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Visualizaciones de parte-todo</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Gráfico circular:</strong> Mostrar proporciones de un total</li>
                            <li><strong>Gráfico de anillos:</strong> Similar al circular, con espacio central</li>
                            <li><strong>Treemap:</strong> Visualizar jerarquías y proporciones</li>
                            <li><strong>Gráfico de rectángulos:</strong> Comparar proporciones con áreas</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>Ideal para: Distribución de ventas por categoría, segmentación de clientes</p>
                        </div>
                    </div>
                </div>

                <h4 class="font-bold text-blue-800 mb-2">Creando tu primera visualización:</h4>

                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Selecciona el tipo de visualización que deseas crear desde el panel de Visualizaciones</li>
                    <li>Arrastra los campos relevantes desde el panel de Campos a las áreas correspondientes en el panel de Visualizaciones</li>
                    <li>Ajusta el formato y las propiedades según sea necesario</li>
                </ol>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-bold text-blue-800 mb-2">Visualizaciones recomendadas</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Gráficos de barras para comparaciones</li>
                            <li>Gráficos de líneas para tendencias temporales</li>
                            <li>Gráficos circulares para proporciones</li>
                            <li>Mapas para datos geográficos</li>
                            <li>Tablas y matrices para detalles precisos</li>
                        </ul>
                    </div>

                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-bold text-green-800 mb-2">Mejores prácticas</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Mantén las visualizaciones simples y claras</li>
                            <li>Usa colores con propósito, no solo por estética</li>
                            <li>Incluye títulos descriptivos</li>
                            <li>Agrega filtros para permitir exploración</li>
                            <li>Considera la accesibilidad en tu diseño</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Elegir la visualización correcta</h4>
                    <p class="mb-2">La elección de la visualización adecuada depende de lo que quieras comunicar:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Para comparar valores:</strong> Gráficos de barras o columnas</li>
                        <li><strong>Para mostrar tendencias en el tiempo:</strong> Gráficos de líneas o áreas</li>
                        <li><strong>Para mostrar proporciones:</strong> Gráficos circulares o de anillos (limita a 7 categorías máximo)</li>
                        <li><strong>Para mostrar relaciones:</strong> Gráficos de dispersión o burbujas</li>
                        <li><strong>Para mostrar distribuciones:</strong> Histogramas o diagramas de caja</li>
                        <li><strong>Para mostrar datos geográficos:</strong> Mapas</li>
                        <li><strong>Para mostrar valores específicos:</strong> Tarjetas, indicadores o KPIs</li>
                    </ul>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-visualization.jpg" alt="Creación de visualizaciones en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <p class="mb-4">Experimenta con diferentes tipos de visualizaciones para encontrar la que mejor comunique tu mensaje. Recuerda que el objetivo es facilitar la comprensión de los datos, no solo crear gráficos bonitos.</p>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Ejemplo práctico: Análisis de ventas por región</h4>

                <p class="mb-4">Vamos a crear un gráfico de barras que muestre las ventas por región:</p>

                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Selecciona el icono de gráfico de barras en el panel de Visualizaciones</li>
                    <li>Arrastra el campo "Región" al área "Eje"</li>
                    <li>Arrastra el campo "Ventas" al área "Valores"</li>
                    <li>Ordena el gráfico de mayor a menor para identificar rápidamente las regiones con mejor desempeño</li>
                    <li>Agrega un título descriptivo como "Ventas totales por región"</li>
                </ol>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <p class="italic text-blue-800">Con este simple gráfico, ya podemos identificar patrones importantes en nuestros datos de ventas y tomar decisiones basadas en evidencia.</p>
                </div>

                <h4 class="font-bold text-blue-800 mb-3">Personalización de visualizaciones</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h5 class="font-bold text-gray-800 mb-2">Formato básico</h5>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Colores:</strong> Personaliza colores de datos, fondos y bordes</li>
                            <li><strong>Títulos:</strong> Añade títulos claros y descriptivos</li>
                            <li><strong>Leyendas:</strong> Configura posición y formato de leyendas</li>
                            <li><strong>Ejes:</strong> Ajusta escalas, etiquetas y líneas de cuadrícula</li>
                            <li><strong>Etiquetas de datos:</strong> Muestra valores específicos en el gráfico</li>
                        </ul>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h5 class="font-bold text-gray-800 mb-2">Formato avanzado</h5>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Líneas de referencia:</strong> Añade líneas para destacar objetivos o promedios</li>
                            <li><strong>Formato condicional:</strong> Cambia colores según valores o reglas</li>
                            <li><strong>Tooltips:</strong> Personaliza la información que aparece al pasar el cursor</li>
                            <li><strong>Interacciones:</strong> Configura cómo interactúa con otras visualizaciones</li>
                            <li><strong>Análisis:</strong> Añade líneas de tendencia o previsiones</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "demo-quiz-3",
            question: "¿Qué tipo de visualización es más adecuada para mostrar tendencias a lo largo del tiempo?",
            options: [
                "Gráfico circular",
                "Gráfico de líneas",
                "Gráfico de barras",
                "Treemap"
            ],
            correctIndex: 1
        },

        // Diagrama de selección de visualizaciones
        diagram: {
            title: "Guía de selección de visualizaciones",
            description: "Este diagrama te ayuda a elegir la visualización más adecuada según el tipo de análisis que deseas realizar.",
            steps: [
                {
                    step: 1,
                    title: "Comparación",
                    description: "Barras/Columnas: Comparar valores entre categorías"
                },
                {
                    step: 2,
                    title: "Tendencia",
                    description: "Líneas/Áreas: Mostrar cambios a lo largo del tiempo"
                },
                {
                    step: 3,
                    title: "Proporción",
                    description: "Circular/Anillos: Mostrar partes de un todo"
                },
                {
                    step: 4,
                    title: "Distribución",
                    description: "Histograma/Caja: Analizar distribución de valores"
                },
                {
                    step: 5,
                    title: "Correlación",
                    description: "Dispersión/Burbujas: Identificar relaciones entre variables"
                },
                {
                    step: 6,
                    title: "Geográfico",
                    description: "Mapas: Visualizar datos por ubicación"
                }
            ]
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "En esta sección, aprenderás a crear visualizaciones efectivas en Power BI para comunicar tus datos de manera clara y convincente.",
            exercises: [
                {
                    title: "Creación de un gráfico de barras",
                    description: "Practica la creación de un gráfico de barras para comparar ventas por región:",
                    steps: [
                        "Selecciona el icono de gráfico de barras en el panel de Visualizaciones",
                        "Arrastra el campo 'Región' al área 'Eje'",
                        "Arrastra el campo 'Ventas' al área 'Valores'",
                        "Haz clic en los tres puntos (...) en la esquina superior derecha del gráfico",
                        "Selecciona 'Ordenar por' > 'Ventas' para ordenar de mayor a menor",
                        "Haz clic en el icono de formato (rodillo de pintura) en el panel de Visualizaciones",
                        "Expande la sección 'Título' y cambia el texto a 'Ventas por Región'",
                        "Experimenta con diferentes opciones de formato para personalizar tu gráfico"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te guiará en el proceso de creación de visualizaciones efectivas en Power BI, con verificaciones para asegurar tu comprensión.",
            checkpoints: [
                "He identificado los diferentes tipos de visualizaciones disponibles en Power BI",
                "Entiendo qué visualización usar según el tipo de análisis que quiero realizar",
                "He creado un gráfico de barras para comparar ventas por región",
                "He personalizado el formato de mi visualización (colores, títulos, etc.)",
                "Comprendo cómo ordenar y filtrar datos en una visualización"
            ],
            additionalResources: [
                {
                    title: "Tipos de visualizaciones en Power BI",
                    url: "https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a",
                    description: "Documentación oficial de Microsoft sobre los diferentes tipos de visualizaciones disponibles"
                },
                {
                    title: "Mejores prácticas para crear visualizaciones efectivas",
                    url: "https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-accessibility-creating-reports",
                    description: "Guía oficial sobre cómo crear visualizaciones accesibles y efectivas"
                }
            ]
        }
    },

    step4: {
        title: "Creación de Dashboards",
        description: "Cómo combinar visualizaciones en un dashboard efectivo",
        content: `
            <div class="mb-6">
                <p class="mb-4">Un dashboard es una colección de visualizaciones organizadas en una sola página que proporciona una visión general de los datos más importantes. Un buen dashboard debe contar una historia coherente y permitir a los usuarios obtener insights rápidamente.</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Tipos de dashboards</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Estratégicos:</strong> Visión general para ejecutivos</li>
                            <li><strong>Operativos:</strong> Monitoreo de operaciones diarias</li>
                            <li><strong>Analíticos:</strong> Análisis detallado de datos</li>
                            <li><strong>Tácticos:</strong> Seguimiento de proyectos o iniciativas</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>El tipo de dashboard determina su contenido y diseño</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Elementos esenciales</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>KPIs:</strong> Indicadores clave de rendimiento</li>
                            <li><strong>Visualizaciones:</strong> Gráficos y tablas relevantes</li>
                            <li><strong>Filtros:</strong> Segmentaciones para exploración</li>
                            <li><strong>Contexto:</strong> Títulos, subtítulos y anotaciones</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>Cada elemento debe aportar valor al análisis</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Audiencia y propósito</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>¿Quién?</strong> Identifica a los usuarios finales</li>
                            <li><strong>¿Qué?</strong> Define las preguntas a responder</li>
                            <li><strong>¿Por qué?</strong> Establece el objetivo del dashboard</li>
                            <li><strong>¿Cómo?</strong> Determina el nivel de interactividad</li>
                        </ul>
                        <div class="mt-3 text-xs text-blue-600">
                            <p>Adapta el dashboard a las necesidades específicas</p>
                        </div>
                    </div>
                </div>

                <h4 class="font-bold text-blue-800 mb-2">Pasos para crear un dashboard efectivo:</h4>

                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Planifica tu dashboard antes de comenzar (¿qué historia quieres contar?)</li>
                    <li>Crea las visualizaciones individuales que necesitarás</li>
                    <li>Organiza las visualizaciones de manera lógica en la página</li>
                    <li>Asegúrate de que las visualizaciones interactúen entre sí (filtrado cruzado)</li>
                    <li>Agrega elementos de contexto como títulos, subtítulos y leyendas</li>
                    <li>Considera agregar segmentaciones de datos para filtrado interactivo</li>
                </ol>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Principios de diseño de dashboards</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Simplicidad:</strong> No sobrecargues el dashboard con demasiada información</li>
                        <li><strong>Jerarquía visual:</strong> Coloca la información más importante donde se verá primero</li>
                        <li><strong>Consistencia:</strong> Mantén un estilo coherente en todas las visualizaciones</li>
                        <li><strong>Interactividad:</strong> Permite a los usuarios explorar los datos por sí mismos</li>
                        <li><strong>Contexto:</strong> Proporciona suficiente información para entender los datos</li>
                    </ul>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Errores comunes a evitar</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Sobrecargar el dashboard con demasiadas visualizaciones</li>
                                <li>Usar colores inconsistentes o que distraen</li>
                                <li>No proporcionar contexto suficiente para interpretar los datos</li>
                                <li>Elegir visualizaciones inadecuadas para los datos</li>
                            </ul>
                        </div>
                        <div>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Ignorar las necesidades de la audiencia</li>
                                <li>No mantener una jerarquía visual clara</li>
                                <li>Usar escalas engañosas en los gráficos</li>
                                <li>Descuidar la accesibilidad del dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-dashboard.jpg" alt="Dashboard en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Ejemplo práctico: Dashboard de ventas</h4>

                <p class="mb-4">Vamos a crear un dashboard completo de ventas que incluya:</p>

                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li>Un KPI con las ventas totales y la comparación con el período anterior</li>
                    <li>Un gráfico de líneas que muestre la tendencia de ventas a lo largo del tiempo</li>
                    <li>Un gráfico de barras con las ventas por región</li>
                    <li>Un gráfico circular con las ventas por categoría de producto</li>
                    <li>Una tabla con los detalles de los mejores clientes</li>
                    <li>Segmentaciones para filtrar por fecha, región y categoría</li>
                </ul>

                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                    <p>Utiliza el "modo de enfoque" haciendo clic en los puntos suspensivos de una visualización para verla en pantalla completa. Esto es útil para analizar detalles específicos sin distracciones.</p>
                </div>

                <h4 class="font-bold text-blue-800 mb-3">Diseño y distribución</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h5 class="font-bold text-gray-800 mb-2">Patrones de lectura</h5>
                        <p class="text-sm mb-2">Organiza tu dashboard siguiendo patrones naturales de lectura:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Patrón Z:</strong> De izquierda a derecha, arriba a abajo</li>
                            <li><strong>Patrón F:</strong> Concentra información importante a la izquierda</li>
                            <li><strong>Cuadrantes:</strong> Divide la página en 4 secciones lógicas</li>
                        </ul>
                        <p class="text-xs text-gray-600 mt-2">Coloca la información más importante en las zonas de mayor atención visual.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h5 class="font-bold text-gray-800 mb-2">Agrupación lógica</h5>
                        <p class="text-sm mb-2">Agrupa visualizaciones relacionadas:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Por tema:</strong> Ventas, marketing, operaciones</li>
                            <li><strong>Por nivel de detalle:</strong> Resumen → Detalle</li>
                            <li><strong>Por relación:</strong> Causa → Efecto</li>
                            <li><strong>Por tiempo:</strong> Pasado → Presente → Futuro</li>
                        </ul>
                        <p class="text-xs text-gray-600 mt-2">Usa bordes, colores o espaciado para definir grupos visuales.</p>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Comprueba tu comprensión</h4>

                <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p class="font-bold mb-2">¿Cuál es el papel principal de los asistentes de IA en el flujo de trabajo de Power BI?</p>

                    <div class="space-y-2 mt-4">
                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <span>Reemplazar completamente la necesidad de aprender Power BI</span>
                            <input type="radio" name="q1">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="true">
                            <span>Complementar el trabajo del analista, acelerando tareas y ayudando a superar obstáculos</span>
                            <input type="radio" name="q1">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <span>Generar automáticamente informes completos sin intervención humana</span>
                            <input type="radio" name="q1">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <span>Sustituir a los profesionales de análisis de datos</span>
                            <input type="radio" name="q1">
                        </label>
                    </div>

                    <div class="mt-4">
                        <button class="check-answer-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-question="q1">
                            Verificar respuesta
                        </button>
                        <p class="feedback-message hidden mt-2 p-2 rounded"></p>
                    </div>
                </div>
            </div>
        `,

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "demo-quiz-4",
            question: "¿Cuál es el principio más importante al diseñar un dashboard en Power BI?",
            options: [
                "Incluir la mayor cantidad posible de visualizaciones para mostrar todos los datos disponibles",
                "Usar colores brillantes y llamativos para captar la atención del usuario",
                "Mantener la simplicidad y enfocarse en comunicar claramente los insights más importantes",
                "Evitar la interactividad para que los usuarios no se distraigan"
            ],
            correctIndex: 2
        },

        // Diagrama del proceso de creación de dashboards
        diagram: {
            title: "Proceso de creación de dashboards",
            description: "Este diagrama muestra el flujo de trabajo recomendado para crear dashboards efectivos en Power BI.",
            steps: [
                {
                    step: 1,
                    title: "Planificación",
                    description: "Definir objetivos, audiencia y preguntas a responder"
                },
                {
                    step: 2,
                    title: "Preparación",
                    description: "Recopilar y transformar los datos necesarios"
                },
                {
                    step: 3,
                    title: "Diseño",
                    description: "Crear un boceto o wireframe del dashboard"
                },
                {
                    step: 4,
                    title: "Construcción",
                    description: "Crear visualizaciones y organizarlas en la página"
                },
                {
                    step: 5,
                    title: "Refinamiento",
                    description: "Ajustar formato, interactividad y rendimiento"
                },
                {
                    step: 6,
                    title: "Validación",
                    description: "Probar con usuarios reales y recopilar feedback"
                }
            ]
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "En esta sección, aprenderás a combinar visualizaciones en un dashboard efectivo que cuente una historia coherente con tus datos.",
            exercises: [
                {
                    title: "Creación de un dashboard de ventas",
                    description: "Practica la creación de un dashboard de ventas completo:",
                    steps: [
                        "Abre el archivo 'VentasEjemplo.pbix' que has trabajado en los pasos anteriores",
                        "Crea un nuevo informe (página) haciendo clic en el signo '+' en la parte inferior",
                        "Renombra la página como 'Dashboard de Ventas'",
                        "Añade un objeto visual de tarjeta para mostrar las ventas totales",
                        "Crea un gráfico de líneas para mostrar la tendencia de ventas por mes",
                        "Añade un gráfico de barras para las ventas por región",
                        "Incluye un gráfico circular para la distribución de ventas por categoría",
                        "Agrega una tabla con los detalles de los mejores clientes",
                        "Añade segmentaciones para filtrar por fecha, región y categoría",
                        "Organiza todas las visualizaciones de manera lógica en la página",
                        "Asegúrate de que las visualizaciones interactúen correctamente entre sí",
                        "Aplica un tema coherente y ajusta el formato para mejorar la apariencia"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te guiará en el proceso de creación de dashboards efectivos en Power BI, con verificaciones para asegurar tu comprensión.",
            checkpoints: [
                "He definido claramente el propósito y la audiencia de mi dashboard",
                "He creado las visualizaciones necesarias para responder a las preguntas clave",
                "He organizado las visualizaciones de manera lógica siguiendo principios de diseño",
                "He configurado correctamente la interactividad entre visualizaciones",
                "He añadido contexto suficiente (títulos, subtítulos, anotaciones)",
                "He probado mi dashboard para asegurarme de que comunica efectivamente la información"
            ],
            additionalResources: [
                {
                    title: "Diseño de dashboards efectivos en Power BI",
                    url: "https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboards-design-tips",
                    description: "Guía oficial de Microsoft con consejos para diseñar dashboards efectivos"
                },
                {
                    title: "Mejores prácticas para el diseño de informes",
                    url: "https://learn.microsoft.com/es-es/power-bi/guidance/report-design-tips",
                    description: "Recomendaciones para crear informes y dashboards que comuniquen eficazmente"
                }
            ]
        }
    },

    step5: {
        title: "Publicación y Compartición",
        description: "Cómo publicar y compartir tus dashboards con otros",
        content: `
            <div class="mb-6">
                <p class="mb-4">Una vez que has creado tu dashboard, el siguiente paso es compartirlo con las personas que necesitan ver la información. Power BI ofrece varias opciones para publicar y compartir tus informes.</p>

                <h4 class="font-bold text-blue-800 mb-2">Opciones de publicación:</h4>

                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li><strong>Power BI Service:</strong> Publica tu informe en la nube para compartirlo con otros usuarios</li>
                    <li><strong>Exportar a PDF/PowerPoint:</strong> Crea una versión estática para compartir por correo o presentaciones</li>
                    <li><strong>Insertar en aplicaciones:</strong> Integra tus dashboards en aplicaciones o sitios web</li>
                    <li><strong>Power BI Mobile:</strong> Accede a tus dashboards desde dispositivos móviles</li>
                    <li><strong>Power BI Report Server:</strong> Para entornos que requieren una solución local</li>
                </ol>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Pasos para publicar en Power BI Service</h4>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Haz clic en "Publicar" en la pestaña Inicio de Power BI Desktop</li>
                        <li>Inicia sesión con tu cuenta de Power BI (si aún no lo has hecho)</li>
                        <li>Selecciona el área de trabajo donde deseas publicar</li>
                        <li>Espera a que se complete el proceso de publicación</li>
                        <li>Haz clic en "Abrir informe" para ver tu informe en Power BI Service</li>
                    </ol>
                </div>

                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-publish.jpg" alt="Publicación en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Compartir con otros usuarios</h4>

                <p class="mb-4">Una vez publicado tu informe, puedes compartirlo con otros usuarios de varias maneras:</p>

                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Compartir directamente:</strong> Envía un enlace a usuarios específicos</li>
                    <li><strong>Permisos de área de trabajo:</strong> Da acceso a todo un equipo</li>
                    <li><strong>Crear una aplicación:</strong> Empaqueta varios informes y dashboards</li>
                    <li><strong>Generar un código QR:</strong> Para acceso rápido desde dispositivos móviles</li>
                    <li><strong>Programar actualizaciones:</strong> Envía informes por correo electrónico según un calendario</li>
                </ul>

                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consideraciones de seguridad</h4>
                    <p>Asegúrate de entender las implicaciones de seguridad al compartir informes. Configura los permisos adecuadamente para proteger datos sensibles y cumplir con las políticas de tu organización.</p>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Resumen de la demostración</h4>

                <p class="mb-4">En esta demostración, hemos cubierto el proceso completo de creación de un dashboard en Power BI:</p>

                <ol class="list-decimal pl-5 space-y-1 mb-4">
                    <li>Importamos datos desde un archivo Excel</li>
                    <li>Creamos visualizaciones efectivas para representar los datos</li>
                    <li>Combinamos las visualizaciones en un dashboard coherente</li>
                    <li>Publicamos y compartimos el dashboard con otros usuarios</li>
                </ol>

                <p class="mb-4">Estos conocimientos te proporcionan una base sólida para comenzar a crear tus propios dashboards en Power BI. En el siguiente módulo, tendrás la oportunidad de aplicar lo aprendido en ejercicios prácticos.</p>

                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-green-800 mb-2">Próximos pasos</h4>
                    <p>Continúa al módulo de práctica para aplicar estos conceptos en ejercicios guiados, o explora recursos adicionales para profundizar en temas específicos de Power BI.</p>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Comprueba tu comprensión</h4>

                <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p class="font-bold mb-2">¿Cuál es la mejor práctica al diseñar dashboards en Power BI?</p>

                    <div class="space-y-2 mt-4">
                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <span>Incluir la mayor cantidad posible de visualizaciones en una sola página</span>
                            <input type="radio" name="q2">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <span>Usar colores brillantes y llamativos para todas las visualizaciones</span>
                            <input type="radio" name="q2">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="true">
                            <span>Mantener la simplicidad y enfocarse en comunicar claramente los insights más importantes</span>
                            <input type="radio" name="q2">
                        </label>

                        <label class="quiz-option flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <span>Evitar la interactividad para que los usuarios no se distraigan</span>
                            <input type="radio" name="q2">
                        </label>
                    </div>

                    <div class="mt-4">
                        <button class="check-answer-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-question="q2">
                            Verificar respuesta
                        </button>
                        <p class="feedback-message hidden mt-2 p-2 rounded"></p>
                    </div>
                </div>
            </div>
        `
    },

    facilitatorNotes: {
        generalTips: [
            "Antes de la demostración, asegúrate de tener Power BI Desktop instalado y funcionando correctamente",
            "Prepara el archivo de datos de ejemplo con anticipación y verifica que funciona como se espera",
            "Considera tener una versión pre-construida del dashboard final para mostrar el resultado esperado",
            "Anima a los participantes a seguir los pasos en sus propias computadoras si es posible",
            "Destaca las mejores prácticas y errores comunes a evitar durante la demostración"
        ],
        stepSpecificNotes: {
            step1: "Enfatiza la importancia de planificar antes de comenzar a construir. Muchos usuarios saltan directamente a las visualizaciones sin pensar en el objetivo general.",
            step2: "Muestra cómo usar el Editor de Power Query para limpiar datos. Este es un paso que muchos principiantes omiten pero es crucial para un buen análisis.",
            step3: "Demuestra cómo elegir la visualización correcta para diferentes tipos de datos. Explica por qué ciertas visualizaciones funcionan mejor que otras en contextos específicos.",
            step4: "Explica los principios de diseño de dashboards y cómo aplicarlos. Muestra ejemplos de dashboards buenos y malos para ilustrar los conceptos.",
            step5: "Discute las diferentes opciones de licencia de Power BI y sus implicaciones para compartir contenido. Esto es importante para que los participantes entiendan las limitaciones que podrían enfrentar."
        },
        timeAllocation: {
            step1: "10 minutos",
            step2: "15 minutos",
            step3: "20 minutos",
            step4: "20 minutos",
            step5: "15 minutos"
        }
    }
};
