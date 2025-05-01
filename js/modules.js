/**
 * Definición de los módulos del taller
 */
const workshopModules = {
    intro: {
        id: 'intro',
        title: "Introducción al Análisis de Datos y Power BI",
        duration: "45 min",
        icon: "📊",
        steps: [
            "Importancia del Análisis de Datos",
            "Microsoft Power BI: Componentes Esenciales",
            "Recorrido por la Interfaz",
            "Tipos de Datos y Modelos (Conceptos Básicos)",
            "Asistentes IA en el Flujo de Trabajo"
        ],
        facilitatorNotes: {
            timeAllocation: [
                "Bienvenida y objetivos: 5 minutos",
                "Importancia del análisis de datos: 5 minutos",
                "Componentes Power BI: 10 minutos",
                "Recorrido por la interfaz: 5 minutos",
                "Tipos de datos y modelos: 10 minutos",
                "Asistentes IA en el flujo de trabajo: 5 minutos",
                "Ejercicio interactivo: 5 minutos"
            ],
            keyPoints: [
                "La diferencia entre datos e información útil",
                "Power BI Desktop como herramienta principal del taller",
                "Las tres vistas principales (Informe, Datos, Modelo)",
                "La importancia de definir correctamente los tipos de datos",
                "Los asistentes IA como complemento, no reemplazo"
            ],
            commonQuestions: [
                {
                    question: "¿Es Power BI gratuito?",
                    answer: "Power BI Desktop es gratuito para uso personal y educativo. Power BI Service tiene una versión gratuita con limitaciones y opciones de licencia premium para empresas."
                },
                {
                    question: "¿Funciona en Mac?",
                    answer: "Power BI Desktop solo está disponible nativamente para Windows. Los usuarios de Mac pueden utilizar máquinas virtuales con Windows o acceder a características limitadas a través de Power BI Service en navegador."
                }
            ]
        }
    },
    transform: {
        id: 'transform',
        title: "Conexión y Transformación de Datos",
        duration: "60 min",
        icon: "🔄",
        steps: [
            "Conexión a Fuentes de Datos",
            "Introducción a Power Query (Editor)",
            "Transformaciones Fundamentales",
            "Modelado Básico: Creación de Relaciones"
        ],
        facilitatorNotes: {
            timeAllocation: [
                "Conexión a fuentes de datos: 10 minutos",
                "Power Query Editor: 15 minutos",
                "Transformaciones clave: 20 minutos",
                "Modelado básico: 15 minutos"
            ],
            keyPoints: [
                "Importancia de seleccionar la fuente correcta",
                "Power Query registra cada paso de transformación",
                "Tipos de datos correctos son fundamentales",
                "Relaciones bien definidas son la base de un buen modelo"
            ],
            commonQuestions: [
                {
                    question: "¿Se puede conectar a bases de datos en la nube?",
                    answer: "Sí, Power BI puede conectarse a múltiples fuentes en la nube como Azure SQL, Amazon Redshift, Google BigQuery, entre otras."
                },
                {
                    question: "¿Se pueden combinar varias fuentes de datos?",
                    answer: "Sí, Power Query permite hacer operaciones de Merge (unión) y Append (anexar) para combinar datos de diferentes fuentes."
                }
            ]
        }
    },
    demo: {
        id: 'demo',
        title: "Demostración Magistral: Power BI en Acción",
        duration: "60 min",
        icon: "💡",
        steps: [
            "Contexto: Sistema Marduk y Dashboards Judiciales",
            "Conexión y Preparación de Datos",
            "Introducción a DAX",
            "Construcción de Visualizaciones",
            "Interactividad y Filtros"
        ],
        facilitatorNotes: {
            timeAllocation: [
                "Introducción al caso: 5 minutos",
                "Conexión y preparación: 15 minutos",
                "Introducción a DAX: 15 minutos",
                "Construcción del dashboard: 15 minutos",
                "Interactividad: 10 minutos"
            ],
            keyPoints: [
                "Enfatizar el impacto real del dashboard en la gestión judicial",
                "Mantener las transformaciones simples para claridad",
                "DAX es potente pero empezar con funciones básicas",
                "La interactividad es clave para descubrir insights"
            ],
            commonQuestions: [
                {
                    question: "¿Qué tan complejo es el sistema Marduk real?",
                    answer: "El sistema Marduk completo integra múltiples fuentes de datos y tiene varias capas de procesamiento, pero para el workshop se presenta una versión simplificada que captura los elementos esenciales."
                },
                {
                    question: "¿Es necesario aprender programación para usar DAX?",
                    answer: "DAX tiene una sintaxis que recuerda a Excel. No es necesario ser programador, pero entender conceptos como funciones, parámetros y contextos de filtro es importante para avanzar."
                }
            ]
        }
    },
    practice: {
        id: 'practice',
        title: "Aplicación Práctica y Conclusiones",
        duration: "75 min",
        icon: "🛠️",
        steps: [
            "Práctica Guiada: Introducción y Dataset",
            "Desarrollo Paso a Paso",
            "Resultado Esperado y Solución de Problemas",
            "Recursos para Continuar Aprendiendo"
        ],
        facilitatorNotes: {
            timeAllocation: [
                "Introducción a la práctica: 5 minutos",
                "Desarrollo paso a paso: 45 minutos",
                "Revisión de resultados: 10 minutos",
                "Recursos y cierre: 15 minutos"
            ],
            keyPoints: [
                "Asegurar que todos tienen acceso a los archivos de ejemplo",
                "Ir despacio en los pasos críticos (conexión, relaciones)",
                "Presentar problemas comunes antes de que ocurran",
                "Enfatizar recursos para aprendizaje continuo"
            ],
            commonQuestions: [
                {
                    question: "¿Dónde encuentro más datasets para practicar?",
                    answer: "Microsoft proporciona datasets de ejemplo en su documentación oficial. También puedes explorar Kaggle.com para conjuntos de datos públicos en diversos dominios."
                },
                {
                    question: "¿Cómo puedo compartir mis reports con otros?",
                    answer: "Puedes publicar tus informes en el servicio Power BI (requiere cuenta), exportarlos como PDF/PowerPoint, o compartir el archivo .pbix directamente si los destinatarios tienen Power BI Desktop."
                }
            ]
        }
    }
};

/**
 * Recursos del taller
 */
const workshopResources = {
    datasets: [
        {
            icon: "📊",
            title: "Dataset de Ventas",
            description: "Conjunto de datos de ejemplo con información de ventas por región, producto y fecha.",
            type: "Excel",
            size: "1.2 MB"
        },
        {
            icon: "📊",
            title: "Dataset de Tickets IT",
            description: "Datos de ejemplo de un sistema de tickets de soporte técnico.",
            type: "CSV",
            size: "850 KB"
        },
        {
            icon: "📊",
            title: "Dataset de Marduk (Simplificado)",
            description: "Versión simplificada de los datos del sistema judicial Marduk.",
            type: "Excel",
            size: "2.1 MB"
        }
    ],
    guides: [
        {
            icon: "📚",
            title: "Guía de Inicio Rápido",
            description: "Pasos básicos para comenzar a usar Power BI Desktop.",
            type: "PDF",
            size: "1.5 MB"
        },
        {
            icon: "📚",
            title: "Manual de Transformaciones",
            description: "Referencia de las transformaciones más comunes en Power Query.",
            type: "PDF",
            size: "2.8 MB"
        },
        {
            icon: "📚",
            title: "Guía de Visualizaciones",
            description: "Catálogo de visualizaciones y cuándo usar cada una.",
            type: "PDF",
            size: "3.2 MB"
        }
    ],
    "ai-prompts": [
        {
            icon: "🤖",
            title: "Prompts para DAX",
            description: "Ejemplos de prompts para generar fórmulas DAX con asistentes de IA.",
            type: "TXT",
            size: "45 KB"
        },
        {
            icon: "🤖",
            title: "Prompts para Modelado",
            description: "Ejemplos de prompts para obtener ayuda con el modelado de datos.",
            type: "TXT",
            size: "38 KB"
        },
        {
            icon: "🤖",
            title: "Prompts para Visualización",
            description: "Ejemplos de prompts para generar ideas de visualización.",
            type: "TXT",
            size: "52 KB"
        }
    ],
    templates: [
        {
            icon: "📋",
            title: "Dashboard de Ventas",
            description: "Plantilla de dashboard para análisis de ventas.",
            type: "PBIT",
            size: "450 KB"
        },
        {
            icon: "📋",
            title: "Dashboard de Soporte IT",
            description: "Plantilla para análisis de tickets de soporte técnico.",
            type: "PBIT",
            size: "520 KB"
        },
        {
            icon: "📋",
            title: "Dashboard Ejecutivo",
            description: "Plantilla para informes ejecutivos con KPIs principales.",
            type: "PBIT",
            size: "480 KB"
        }
    ],
    certification: [
        {
            icon: "🏆",
            title: "Certificado de Participación",
            description: "Certificado digital que acredita tu participación en el taller.",
            type: "PDF"
        },
        {
            icon: "🏆",
            title: "Guía de Certificación Microsoft",
            description: "Información sobre la certificación oficial de Microsoft en Power BI.",
            type: "PDF",
            size: "1.1 MB"
        }
    ]
};

/**
 * Requisitos técnicos para el taller
 */
const technicalRequirements = [
    {
        id: "powerbi",
        label: "Power BI Desktop instalado",
        description: "Versión más reciente de Power BI Desktop",
        status: "success"
    },
    {
        id: "windows",
        label: "Windows 10/11",
        description: "Sistema operativo Windows 10 o 11",
        status: "success"
    },
    {
        id: "ram",
        label: "Mínimo 4GB RAM",
        description: "Se recomienda 8GB para mejor rendimiento",
        status: "error"
    },
    {
        id: "internet",
        label: "Conexión a Internet",
        description: "Conexión estable para descargar datos y recursos",
        status: "warning"
    }
];
