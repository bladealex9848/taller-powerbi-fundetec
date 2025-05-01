/**
 * Contenido del módulo de Introducción
 */

// Paso 1: Importancia del Análisis de Datos
const introStep1Content = {
    title: "Importancia del Análisis de Datos",
    
    // Diagrama de flujo de datos a información
    diagram: {
        stages: [
            {
                icon: "📁",
                label: "Datos Brutos",
                desc: "Colección de valores sin contexto",
                tooltip: "Los datos brutos son valores sin procesar que por sí solos ofrecen poco valor. Ejemplos: registros de ventas, mediciones de sensores, logs de sistema."
            },
            {
                icon: "⚙️",
                label: "Procesamiento",
                desc: "Transformación y limpieza",
                tooltip: "En esta etapa se limpian, filtran y transforman los datos para hacerlos utilizables. Incluye corregir errores, estandarizar formatos y preparar para análisis."
            },
            {
                icon: "📊",
                label: "Visualización",
                desc: "Representación gráfica",
                tooltip: "La visualización convierte datos en gráficos, tablas y dashboards que hacen visible lo invisible. Power BI destaca en esta etapa."
            },
            {
                icon: "💡",
                label: "Insights",
                desc: "Patrones y conocimientos",
                tooltip: "Aquí descubrimos patrones, tendencias y correlaciones que ofrecen valor de negocio real."
            },
            {
                icon: "✅",
                label: "Decisiones",
                desc: "Acciones informadas",
                tooltip: "El objetivo final: decisiones basadas en evidencia en lugar de intuiciones o suposiciones."
            }
        ]
    },
    
    // Beneficios del análisis de datos
    benefits: [
        {
            title: "Tomar decisiones informadas",
            example: "Un análisis de ventas por región y categoría de producto permite decidir dónde enfocar los esfuerzos de marketing con precisión, en lugar de basarse en suposiciones."
        },
        {
            title: "Mejorar la eficiencia operativa",
            example: "Identificar cuellos de botella en procesos mediante análisis de tiempos de ejecución permite optimizar flujos de trabajo y reducir tiempos de espera."
        },
        {
            title: "Descubrir patrones ocultos",
            example: "El análisis de datos puede revelar correlaciones inesperadas, como que las ventas de ciertos productos aumentan cuando llueve o que ciertos problemas técnicos ocurren en patrones predecibles."
        },
        {
            title: "Potenciar tu perfil como Auxiliar en Sistemas",
            example: "Las habilidades de análisis de datos son altamente valoradas en el mercado laboral. Como Auxiliar en Sistemas, podrás generar informes valiosos para la toma de decisiones en tu organización."
        }
    ],
    
    // Caso práctico
    caseStudy: {
        title: "Caso Práctico: Análisis de Tickets de Soporte IT",
        content: `
            <p class="mb-2">
                Imagina que trabajas como Auxiliar en Sistemas en una empresa con 500 empleados. 
                La empresa utiliza un sistema de tickets para solicitudes de soporte técnico. 
                Sin análisis de datos, solo verías una lista interminable de tickets.
            </p>
            <p class="mb-2">Con análisis de datos en Power BI, podrías:</p>
            <ul class="list-disc pl-6 space-y-1 mb-2">
                <li>Identificar qué departamentos generan más tickets</li>
                <li>Descubrir los problemas más comunes</li>
                <li>Analizar tiempos de resolución</li>
                <li>Detectar patrones temporales (ej. picos después de actualizaciones)</li>
            </ul>
            <p class="text-sm text-yellow-800">
                Esto te permitiría implementar soluciones proactivas, como capacitaciones específicas 
                o actualizaciones preventivas.
            </p>
        `
    },
    
    // Quiz para comprobar comprensión
    quiz: {
        questionId: "intro-quiz-1",
        question: "¿Cuál es la principal ventaja del análisis de datos en un contexto técnico?",
        options: [
            "Crear gráficos visualmente atractivos",
            "Tomar decisiones basadas en evidencia en lugar de suposiciones",
            "Almacenar grandes cantidades de información",
            "Reemplazar el conocimiento técnico especializado"
        ],
        correctIndex: 1
    }
};

// Paso 2: Microsoft Power BI: Componentes Esenciales
const introStep2Content = {
    title: "Microsoft Power BI: Componentes Esenciales",
    
    // Descripción general
    description: "Power BI es un conjunto de herramientas y servicios que permiten conectar, transformar, visualizar y compartir datos. Veamos sus componentes principales:",
    
    // Componentes de Power BI
    components: [
        {
            id: "desktop",
            title: "Power BI Desktop",
            description: "Aplicación Windows gratuita para conectar, transformar, modelar y visualizar datos.",
            features: [
                {
                    number: 1,
                    title: "Conexión a datos",
                    description: "Conecta a cientos de fuentes de datos diferentes"
                },
                {
                    number: 2,
                    title: "Transformación",
                    description: "Limpia y prepara datos con Power Query"
                },
                {
                    number: 3,
                    title: "Modelado",
                    description: "Crea relaciones entre tablas y medidas DAX"
                },
                {
                    number: 4,
                    title: "Visualización",
                    description: "Crea reports interactivos con visualizaciones"
                }
            ],
            note: "Power BI Desktop es el foco principal de este taller. Es donde realizarás todo el desarrollo y creación de reportes. Los archivos se guardan con extensión .pbix"
        },
        {
            id: "service",
            title: "Power BI Service",
            description: "Servicio en la nube para publicar, compartir y colaborar en informes y dashboards.",
            features: [
                {
                    number: 1,
                    title: "Publicación",
                    description: "Publica informes creados en Desktop"
                },
                {
                    number: 2,
                    title: "Compartir",
                    description: "Comparte dashboards con otros usuarios"
                },
                {
                    number: 3,
                    title: "Colaboración",
                    description: "Trabaja en equipo en los mismos informes"
                },
                {
                    number: 4,
                    title: "Programación",
                    description: "Configura actualizaciones automáticas de datos"
                }
            ],
            note: "Power BI Service requiere una cuenta de Microsoft. Tiene una versión gratuita con limitaciones y versiones de pago con más funcionalidades."
        },
        {
            id: "mobile",
            title: "Power BI Mobile",
            description: "Aplicaciones móviles para acceder a informes y dashboards desde dispositivos iOS y Android.",
            features: [
                {
                    number: 1,
                    title: "Acceso móvil",
                    description: "Visualiza dashboards en cualquier lugar"
                },
                {
                    number: 2,
                    title: "Notificaciones",
                    description: "Recibe alertas sobre cambios importantes"
                },
                {
                    number: 3,
                    title: "Interacción",
                    description: "Interactúa con informes optimizados para móvil"
                }
            ],
            note: "Las aplicaciones móviles son gratuitas y se conectan a tu cuenta de Power BI Service."
        }
    ],
    
    // Flujo de trabajo en Power BI
    workflow: [
        {
            number: 1,
            icon: "🔌",
            title: "Conectar",
            description: "Conectar a fuentes de datos"
        },
        {
            number: 2,
            icon: "🔄",
            title: "Transformar",
            description: "Limpiar y preparar datos"
        },
        {
            number: 3,
            icon: "🧩",
            title: "Modelar",
            description: "Crear relaciones y medidas"
        },
        {
            number: 4,
            icon: "📊",
            title: "Visualizar",
            description: "Crear dashboards"
        },
        {
            number: 5,
            icon: "📤",
            title: "Compartir",
            description: "Publicar y distribuir"
        }
    ]
};

// Paso 3: Recorrido por la Interfaz
const introStep3Content = {
    title: "Recorrido por la Interfaz de Power BI Desktop",
    
    // Descripción general
    description: "Power BI Desktop tiene una interfaz intuitiva organizada en diferentes áreas funcionales. Vamos a explorar las principales secciones:",
    
    // Áreas principales de la interfaz
    interfaceAreas: [
        {
            id: "ribbon",
            title: "Cinta de Opciones (Ribbon)",
            description: "Contiene todas las acciones y comandos organizados en pestañas temáticas.",
            hotspots: [
                {
                    id: "file-menu",
                    title: "Menú Archivo",
                    description: "Opciones para abrir, guardar, publicar informes."
                },
                {
                    id: "home-tab",
                    title: "Pestaña Inicio",
                    description: "Comandos más comunes y frecuentes."
                },
                {
                    id: "view-tab",
                    title: "Pestaña Vista",
                    description: "Opciones para cambiar entre las vistas principales."
                },
                {
                    id: "modeling-tab",
                    title: "Pestaña Modelado",
                    description: "Herramientas para crear relaciones y medidas."
                }
            ]
        },
        {
            id: "views",
            title: "Vistas Principales",
            description: "Power BI Desktop tiene tres vistas principales para diferentes aspectos del trabajo:",
            hotspots: [
                {
                    id: "report-view",
                    title: "Vista Informe",
                    description: "Donde creas visualizaciones y dashboards."
                },
                {
                    id: "data-view",
                    title: "Vista Datos",
                    description: "Muestra los datos en formato tabular para exploración."
                },
                {
                    id: "model-view",
                    title: "Vista Modelo",
                    description: "Permite crear y gestionar relaciones entre tablas."
                }
            ]
        },
        {
            id: "panels",
            title: "Paneles Laterales",
            description: "Proporcionan acceso a datos y herramientas de visualización:",
            hotspots: [
                {
                    id: "fields-panel",
                    title: "Panel de Campos",
                    description: "Muestra todas las tablas y campos disponibles."
                },
                {
                    id: "visualizations-panel",
                    title: "Panel de Visualizaciones",
                    description: "Contiene tipos de visualizaciones y opciones de formato."
                },
                {
                    id: "filters-panel",
                    title: "Panel de Filtros",
                    description: "Permite aplicar filtros a nivel de página, informe o visual."
                }
            ]
        },
        {
            id: "canvas",
            title: "Lienzo (Canvas)",
            description: "Área central donde se crean y organizan las visualizaciones.",
            hotspots: [
                {
                    id: "visuals",
                    title: "Visualizaciones",
                    description: "Gráficos, tablas y otros elementos visuales."
                },
                {
                    id: "pages",
                    title: "Páginas",
                    description: "Pestañas en la parte inferior para organizar el informe en múltiples páginas."
                }
            ]
        }
    ],
    
    // Ejercicio práctico
    exercise: {
        title: "Ejercicio: Exploración de la Interfaz",
        steps: [
            "Abre Power BI Desktop",
            "Identifica las tres vistas principales (Informe, Datos, Modelo)",
            "Explora las pestañas de la cinta de opciones",
            "Localiza los paneles de Campos, Visualizaciones y Filtros",
            "Cambia entre las diferentes vistas para familiarizarte con ellas"
        ]
    }
};

// Paso 4: Tipos de Datos y Modelos (Conceptos Básicos)
const introStep4Content = {
    title: "Tipos de Datos y Modelos (Conceptos Básicos)",
    
    // Tipos de datos
    dataTypes: [
        {
            icon: "Aa",
            name: "Texto",
            description: "Cadenas de caracteres como nombres, descripciones, códigos.",
            examples: ["Nombre del cliente", "Categoría de producto", "Ciudad"]
        },
        {
            icon: "123",
            name: "Número",
            description: "Valores numéricos que pueden ser enteros o decimales.",
            examples: ["Cantidad vendida", "Precio", "Edad"]
        },
        {
            icon: "📅",
            name: "Fecha/Hora",
            description: "Fechas, horas o combinación de ambas.",
            examples: ["Fecha de venta", "Fecha de nacimiento", "Hora de registro"]
        },
        {
            icon: "✓✗",
            name: "Booleano",
            description: "Valores verdadero/falso (sí/no).",
            examples: ["Cliente activo", "Producto disponible", "Pago completado"]
        },
        {
            icon: "📊",
            name: "Binario",
            description: "Datos binarios como imágenes o archivos.",
            examples: ["Foto de perfil", "Documento adjunto"]
        }
    ],
    
    // Importancia de los tipos de datos correctos
    dataTypeImportance: [
        "Cálculos precisos: Los números deben ser reconocidos como números para poder sumarlos, promediarlos, etc.",
        "Filtrado efectivo: Las fechas deben ser reconocidas como fechas para filtrar por períodos (mes, trimestre, año).",
        "Ordenamiento correcto: Los textos se ordenan alfabéticamente, los números por valor.",
        "Visualizaciones adecuadas: Power BI sugiere visualizaciones según los tipos de datos seleccionados."
    ],
    
    // Conceptos básicos de modelado
    modelingConcepts: {
        title: "Conceptos Básicos de Modelado de Datos",
        description: "El modelado de datos en Power BI consiste en organizar tablas y establecer relaciones entre ellas para permitir análisis más complejos.",
        concepts: [
            {
                title: "Tablas",
                description: "Conjuntos de datos organizados en filas y columnas.",
                example: "Tabla de Clientes, Tabla de Ventas, Tabla de Productos."
            },
            {
                title: "Relaciones",
                description: "Conexiones entre tablas basadas en campos comunes.",
                example: "La tabla Ventas se relaciona con la tabla Clientes mediante el campo ID_Cliente."
            },
            {
                title: "Cardinalidad",
                description: "Define cómo se relacionan los registros entre tablas.",
                types: [
                    {
                        name: "Uno a Muchos (1:N)",
                        description: "Un registro en la tabla A puede relacionarse con muchos registros en la tabla B.",
                        example: "Un cliente puede tener muchas ventas."
                    },
                    {
                        name: "Uno a Uno (1:1)",
                        description: "Un registro en la tabla A se relaciona con exactamente un registro en la tabla B.",
                        example: "Un empleado tiene un único ID de usuario."
                    },
                    {
                        name: "Muchos a Muchos (N:N)",
                        description: "Múltiples registros en la tabla A pueden relacionarse con múltiples registros en la tabla B.",
                        example: "Estudiantes y cursos: un estudiante puede tomar varios cursos, y un curso puede tener varios estudiantes."
                    }
                ]
            }
        ],
        diagram: {
            title: "Ejemplo Simple de Modelo de Datos",
            tables: [
                {
                    name: "Clientes",
                    fields: ["ID_Cliente", "Nombre", "Ciudad", "Teléfono"]
                },
                {
                    name: "Ventas",
                    fields: ["ID_Venta", "ID_Cliente", "ID_Producto", "Fecha", "Cantidad", "Precio"]
                },
                {
                    name: "Productos",
                    fields: ["ID_Producto", "Nombre", "Categoría", "Costo"]
                }
            ],
            relationships: [
                {
                    from: "Ventas.ID_Cliente",
                    to: "Clientes.ID_Cliente",
                    type: "1:N"
                },
                {
                    from: "Ventas.ID_Producto",
                    to: "Productos.ID_Producto",
                    type: "1:N"
                }
            ]
        }
    },
    
    // Quiz para comprobar comprensión
    quiz: {
        questionId: "intro-quiz-2",
        question: "¿Por qué es importante definir correctamente los tipos de datos en Power BI?",
        options: [
            "Solo por razones estéticas en la interfaz",
            "Para que Power BI ocupe menos espacio en disco",
            "Para permitir cálculos correctos, filtrado adecuado y visualizaciones apropiadas",
            "No es importante, Power BI funciona igual con cualquier tipo de dato"
        ],
        correctIndex: 2
    }
};

// Paso 5: Asistentes IA en el Flujo de Trabajo
const introStep5Content = {
    title: "Asistentes IA en el Flujo de Trabajo",
    
    // Descripción general
    description: "Los asistentes de Inteligencia Artificial pueden complementar significativamente tu trabajo en Power BI, ayudándote a ser más productivo y a superar obstáculos técnicos.",
    
    // Rol de los asistentes IA
    aiAssistantsRole: [
        {
            title: "Complemento, no reemplazo",
            description: "Los asistentes IA son herramientas que potencian tus capacidades, pero no sustituyen el conocimiento fundamental de Power BI y análisis de datos."
        },
        {
            title: "Acelerador de aprendizaje",
            description: "Pueden ayudarte a entender conceptos complejos y a aprender más rápido, proporcionando explicaciones claras y ejemplos."
        },
        {
            title: "Solucionador de problemas",
            description: "Te ayudan a superar obstáculos técnicos, depurar errores y encontrar soluciones alternativas."
        }
    ],
    
    // Casos de uso de asistentes IA con Power BI
    aiUseCases: [
        {
            phase: "Preparación de Datos",
            examples: [
                "Generar código de Power Query para transformaciones específicas",
                "Sugerir estrategias de limpieza para datos desordenados",
                "Ayudar a interpretar errores en la conexión o transformación"
            ]
        },
        {
            phase: "Modelado de Datos",
            examples: [
                "Sugerir estructuras de modelo basadas en tus datos",
                "Ayudar a escribir y entender fórmulas DAX",
                "Explicar conceptos de modelado como relaciones y cardinalidad"
            ]
        },
        {
            phase: "Visualización",
            examples: [
                "Recomendar tipos de visualizaciones adecuadas para tus datos",
                "Sugerir mejoras de diseño y accesibilidad",
                "Generar ideas para dashboards efectivos"
            ]
        },
        {
            phase: "Análisis e Interpretación",
            examples: [
                "Ayudar a identificar patrones y tendencias en los datos",
                "Sugerir preguntas analíticas relevantes",
                "Generar narrativas explicativas para acompañar visualizaciones"
            ]
        }
    ],
    
    // Ejemplos prácticos de prompts
    aiPromptExamples: [
        {
            title: "Para ayuda con DAX",
            prompt: "Escribe una fórmula DAX para calcular el promedio de ventas de los últimos 3 meses para cada producto.",
            response: "Puedes usar esta fórmula DAX:\n\nPromedio Ventas 3 Meses = \nAVERAGEX(\n    DATESINPERIOD(\n        'Calendario'[Fecha],\n        MAX('Calendario'[Fecha]),\n        -3,\n        MONTH\n    ),\n    [Total Ventas]\n)"
        },
        {
            title: "Para transformaciones en Power Query",
            prompt: "¿Cómo puedo dividir una columna que contiene nombres completos en dos columnas separadas para nombre y apellido?",
            response: "En Power Query, selecciona la columna con los nombres completos, ve a Transformar > Dividir columna > Por delimitador. Elige 'Espacio' como delimitador y 'En la primera aparición del delimitador'. Esto creará dos columnas que puedes renombrar como 'Nombre' y 'Apellido'."
        },
        {
            title: "Para ideas de visualización",
            prompt: "¿Qué visualizaciones serían más efectivas para mostrar ventas por región a lo largo del tiempo, comparando con el año anterior?",
            response: "Para este caso, recomendaría:\n1. Un gráfico de líneas para mostrar la tendencia temporal\n2. Un mapa para la dimensión regional\n3. Un gráfico de barras combinado que muestre año actual vs. anterior\n\nPuedes usar un filtro de tiempo como segmentador para permitir exploración interactiva."
        }
    ],
    
    // Mejores prácticas
    aiBestPractices: [
        {
            title: "Sé específico en tus preguntas",
            description: "Cuanto más específico seas, mejores resultados obtendrás. Incluye detalles sobre tu estructura de datos, objetivo y contexto."
        },
        {
            title: "Verifica y comprende las respuestas",
            description: "No apliques ciegamente las sugerencias. Asegúrate de entender la lógica detrás de ellas y verifica que funcionan correctamente."
        },
        {
            title: "Itera y refina",
            description: "Si la primera respuesta no es exactamente lo que necesitas, refina tu pregunta con más detalles o pide aclaraciones específicas."
        },
        {
            title: "Aprende mientras usas",
            description: "Usa los asistentes IA como herramientas de aprendizaje. Pide explicaciones sobre el porqué de las soluciones propuestas."
        }
    ],
    
    // Quiz para comprobar comprensión
    quiz: {
        questionId: "intro-quiz-3",
        question: "¿Cuál es el papel principal de los asistentes de IA en el flujo de trabajo de Power BI?",
        options: [
            "Reemplazar completamente la necesidad de aprender Power BI",
            "Complementar el trabajo del analista, acelerando tareas y ayudando a superar obstáculos",
            "Generar automáticamente informes completos sin intervención humana",
            "Sustituir a los profesionales de análisis de datos"
        ],
        correctIndex: 1
    }
};

// Exportar todos los contenidos del módulo
const introModuleContent = {
    step1: introStep1Content,
    step2: introStep2Content,
    step3: introStep3Content,
    step4: introStep4Content,
    step5: introStep5Content
};
