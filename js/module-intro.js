/**
 * Contenido del módulo de Introducción
 */

// Notas para el facilitador (solo visibles en modo facilitador)
const introModuleFacilitatorNotes = {
    timeAllocation: {
        step1: "15-20 minutos",
        step2: "20-25 minutos",
        step3: "15-20 minutos",
        step4: "20-25 minutos",
        step5: "15-20 minutos"
    },
    keyPoints: [
        "Enfatizar la importancia del análisis de datos en el contexto laboral actual",
        "Destacar que Power BI es una herramienta accesible incluso para quienes no tienen experiencia previa en análisis de datos",
        "Resaltar la diferencia entre los componentes de Power BI (Desktop, Service, Mobile)",
        "Explicar que un buen entendimiento de la interfaz facilita el aprendizaje posterior",
        "Mencionar que los asistentes IA son complementos que potencian el trabajo, no reemplazos del conocimiento técnico"
    ],
    generalTips: [
        "Comienza con una breve encuesta para conocer el nivel de experiencia de los participantes con análisis de datos",
        "Utiliza ejemplos relevantes para el perfil de Auxiliar en Sistemas",
        "Muestra la interfaz de Power BI Desktop en tiempo real mientras explicas",
        "Permite que los participantes hagan preguntas después de cada sección",
        "Relaciona los conceptos con situaciones reales que podrían enfrentar en su trabajo"
    ],
    commonQuestions: [
        {
            question: "¿Es necesario tener conocimientos de programación para usar Power BI?",
            answer: "No es necesario para comenzar. Power BI tiene una interfaz visual intuitiva. Sin embargo, para transformaciones más avanzadas, es útil familiarizarse con el lenguaje M (Power Query) y DAX (para cálculos), pero se pueden aprender gradualmente."
        },
        {
            question: "¿Power BI es solo para grandes empresas?",
            answer: "No, Power BI es escalable. Desde profesionales independientes hasta grandes corporaciones pueden beneficiarse. Power BI Desktop es gratuito, y hay opciones de licenciamiento para diferentes necesidades."
        },
        {
            question: "¿Cómo se diferencia Power BI de Excel?",
            answer: "Excel es excelente para análisis ad-hoc y cálculos, pero Power BI está diseñado específicamente para visualización de datos, manejo de grandes volúmenes de información y creación de dashboards interactivos. Power BI puede conectarse a muchas más fuentes de datos y ofrece capacidades de modelado más avanzadas."
        },
        {
            question: "¿Qué recursos necesito para seguir este taller?",
            answer: "Necesitarás una computadora con Windows y Power BI Desktop instalado (es gratuito). También proporcionaremos archivos de ejemplo para los ejercicios prácticos."
        }
    ]
};

// Paso 1: Importancia del Análisis de Datos
const introStep1Content = {
    title: "Importancia del Análisis de Datos",
    description: "En la era digital actual, el análisis de datos se ha convertido en una habilidad fundamental para profesionales de todas las áreas, especialmente en tecnología.",

    // Contenido principal
    content: `
        <div class="mb-6">
            <p class="mb-4">El análisis de datos es el proceso de examinar, limpiar, transformar y modelar datos con el objetivo de descubrir información útil, informar conclusiones y apoyar la toma de decisiones.</p>

            <h3 class="text-lg font-bold text-blue-800 mb-2">¿Por qué es importante el análisis de datos?</h3>

            <p class="mb-4">En un mundo donde se generan cantidades masivas de datos cada segundo, la capacidad de extraer valor de ellos se ha vuelto crucial. Para un Auxiliar en Sistemas, comprender el análisis de datos proporciona:</p>

            <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Ventaja competitiva:</strong> Te diferencia en el mercado laboral al poder ofrecer insights basados en datos.</li>
                <li><strong>Resolución de problemas:</strong> Te permite identificar la causa raíz de problemas técnicos mediante patrones en los datos.</li>
                <li><strong>Mejora continua:</strong> Facilita la medición del rendimiento de sistemas y procesos para optimizarlos.</li>
                <li><strong>Comunicación efectiva:</strong> Te ayuda a presentar información técnica compleja de manera comprensible para diferentes audiencias.</li>
            </ul>

            <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 class="font-bold text-blue-800 mb-2">El ciclo del análisis de datos</h4>
                <p class="mb-2">El análisis de datos efectivo sigue un ciclo que transforma datos brutos en decisiones informadas:</p>
                <ol class="list-decimal pl-6 space-y-1">
                    <li><strong>Recolección:</strong> Obtener datos de diversas fuentes</li>
                    <li><strong>Limpieza:</strong> Corregir errores y estandarizar formatos</li>
                    <li><strong>Exploración:</strong> Examinar los datos para entender sus características</li>
                    <li><strong>Análisis:</strong> Aplicar técnicas estadísticas y analíticas</li>
                    <li><strong>Visualización:</strong> Representar los hallazgos de forma gráfica</li>
                    <li><strong>Interpretación:</strong> Extraer conclusiones significativas</li>
                    <li><strong>Acción:</strong> Implementar decisiones basadas en los insights</li>
                </ol>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-2">El papel de Power BI en el análisis de datos</h3>

            <p class="mb-4">Microsoft Power BI es una herramienta que simplifica enormemente este proceso, permitiéndote:</p>

            <ul class="list-disc pl-6 mb-4">
                <li>Conectar con múltiples fuentes de datos</li>
                <li>Transformar y limpiar datos sin necesidad de programación avanzada</li>
                <li>Crear visualizaciones interactivas con facilidad</li>
                <li>Compartir insights con otros miembros de tu organización</li>
                <li>Actualizar automáticamente los análisis cuando cambian los datos</li>
            </ul>

            <p class="mb-4">A lo largo de este taller, aprenderás a utilizar Power BI para convertir datos en información valiosa que potencie tu rol como Auxiliar en Sistemas.</p>

            <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Dato interesante</h4>
                <p>Según el Foro Económico Mundial, la capacidad de analizar datos es una de las habilidades más demandadas en el mercado laboral actual, y se espera que esta demanda siga creciendo en los próximos años.</p>
            </div>
        </div>
    `,

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
    },

    // Contenido específico para modo estudiante
    studentContent: {
        description: "Como Auxiliar en Sistemas, el análisis de datos te permitirá destacar en tu rol profesional y aportar mayor valor a tu organización.",
        exercises: [
            {
                title: "Identificación de oportunidades de análisis",
                description: "Piensa en tu entorno laboral actual o futuro como Auxiliar en Sistemas:",
                steps: [
                    "Identifica 3 procesos o áreas donde el análisis de datos podría mejorar la eficiencia",
                    "Para cada área, anota qué tipo de datos se podrían analizar",
                    "Reflexiona sobre qué decisiones podrían mejorarse con este análisis",
                    "Comparte tus ideas con un compañero o con el grupo"
                ]
            }
        ]
    },

    // Contenido específico para modo autoguiado
    selfGuidedContent: {
        description: "El análisis de datos es una habilidad fundamental en el mundo tecnológico actual. Esta sección te ayudará a comprender su importancia y aplicaciones prácticas.",
        checkpoints: [
            "Comprendo la diferencia entre datos brutos e información procesada",
            "Puedo identificar al menos tres beneficios concretos del análisis de datos",
            "Entiendo cómo el análisis de datos puede mejorar mi perfil profesional como Auxiliar en Sistemas",
            "Puedo explicar con mis propias palabras el flujo desde datos brutos hasta decisiones informadas"
        ],
        additionalResources: [
            {
                title: "Introducción al análisis de datos para principiantes",
                url: "https://docs.microsoft.com/es-es/learn/paths/data-analytics-beginners/",
                description: "Curso gratuito de Microsoft Learn sobre fundamentos de análisis de datos"
            },
            {
                title: "Casos de éxito de análisis de datos en IT",
                url: "https://powerbi.microsoft.com/es-es/industries/it/",
                description: "Ejemplos reales de cómo el análisis de datos ha transformado departamentos de IT"
            }
        ]
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
    },

    // Contenido específico para modo estudiante
    studentContent: {
        description: "Como futuro profesional en sistemas, es importante que comprendas cómo integrar los asistentes IA en tu flujo de trabajo con Power BI para maximizar tu productividad.",
        exercises: [
            {
                title: "Práctica con prompts efectivos",
                description: "Vamos a practicar la creación de prompts efectivos para asistentes IA:",
                steps: [
                    "Identifica un problema o tarea específica que podrías enfrentar al trabajar con Power BI",
                    "Redacta un prompt claro y específico para un asistente IA, incluyendo contexto y detalles relevantes",
                    "Intercambia tu prompt con un compañero y evalúen mutuamente la claridad y especificidad",
                    "Refina tu prompt basado en la retroalimentación recibida"
                ]
            },
            {
                title: "Análisis de casos de uso",
                description: "Analiza cómo los asistentes IA pueden ayudarte en diferentes fases del trabajo con Power BI:",
                steps: [
                    "Para cada fase (Preparación, Modelado, Visualización, Análisis), identifica una tarea específica donde un asistente IA sería útil",
                    "Describe cómo formularías tu consulta al asistente",
                    "Explica qué harías con la respuesta recibida (verificación, implementación, etc.)",
                    "Comparte tus ideas con el grupo"
                ]
            }
        ]
    },

    // Contenido específico para modo autoguiado
    selfGuidedContent: {
        description: "Los asistentes IA pueden ser aliados poderosos en tu aprendizaje y trabajo con Power BI. Esta sección te ayudará a utilizarlos de manera efectiva y responsable.",
        checkpoints: [
            "Comprendo que los asistentes IA son complementos, no reemplazos del conocimiento técnico",
            "Puedo identificar al menos tres casos de uso específicos para asistentes IA en mi flujo de trabajo con Power BI",
            "Sé cómo formular prompts efectivos para obtener respuestas útiles",
            "Entiendo la importancia de verificar y comprender las soluciones propuestas por los asistentes IA",
            "Puedo explicar cómo los asistentes IA pueden ayudarme en diferentes fases del trabajo con Power BI"
        ],
        additionalResources: [
            {
                title: "Guía de prompts efectivos para análisis de datos",
                url: "https://learn.microsoft.com/es-es/fabric/data-engineering/prompt-engineering",
                description: "Técnicas para formular prompts que generen respuestas útiles para tareas de análisis de datos"
            },
            {
                title: "Copilot en Power BI",
                url: "https://learn.microsoft.com/es-es/power-bi/create-reports/copilot-introduction",
                description: "Documentación oficial sobre cómo utilizar Copilot, el asistente IA integrado en Power BI"
            },
            {
                title: "Ética y mejores prácticas en el uso de IA",
                url: "https://www.microsoft.com/es-es/ai/responsible-ai",
                description: "Consideraciones éticas y mejores prácticas para el uso responsable de asistentes IA"
            }
        ]
    }
};

// Exportar todos los contenidos del módulo
const introModuleContent = {
    // Notas para el facilitador (solo visibles en modo facilitador)
    facilitatorNotes: introModuleFacilitatorNotes,

    // Pasos del módulo
    step1: introStep1Content,
    step2: introStep2Content,
    step3: introStep3Content,
    step4: introStep4Content,
    step5: introStep5Content
};
