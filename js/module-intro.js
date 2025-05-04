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

    // Contenido principal
    content: `
        <div class="mb-6">
            <p class="mb-4">Microsoft Power BI es una plataforma de análisis de datos que permite a los usuarios conectarse a diversas fuentes de datos, transformar y modelar esos datos, y crear visualizaciones interactivas para compartir insights valiosos.</p>

            <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 class="font-bold text-blue-800 mb-2">¿Qué es Power BI?</h4>
                <p class="mb-2">Power BI es una colección de servicios de software, aplicaciones y conectores que trabajan juntos para convertir datos no relacionados en información coherente, visualmente inmersiva e interactiva.</p>
                <p>Ya sea que tus datos estén en una simple hoja de Excel o en una colección de almacenes de datos híbridos en la nube y locales, Power BI te permite conectarte fácilmente a tus fuentes de datos, visualizar lo importante y compartirlo con quien quieras.</p>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Los tres componentes principales de Power BI</h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h4 class="font-bold text-blue-800 mb-2">Power BI Desktop</h4>
                    <p class="text-sm mb-2">Aplicación gratuita para Windows que permite:</p>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                        <li>Conectar a múltiples fuentes de datos</li>
                        <li>Transformar y limpiar datos</li>
                        <li>Crear modelos de datos con relaciones</li>
                        <li>Diseñar visualizaciones interactivas</li>
                    </ul>
                    <p class="text-xs mt-2 italic">Formato de archivo: .pbix</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <h4 class="font-bold text-green-800 mb-2">Power BI Service</h4>
                    <p class="text-sm mb-2">Servicio en la nube (SaaS) que permite:</p>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                        <li>Publicar informes y dashboards</li>
                        <li>Compartir con otros usuarios</li>
                        <li>Configurar actualizaciones automáticas</li>
                        <li>Crear apps y espacios de trabajo</li>
                    </ul>
                    <p class="text-xs mt-2 italic">Acceso: powerbi.microsoft.com</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600">
                    <h4 class="font-bold text-purple-800 mb-2">Power BI Mobile</h4>
                    <p class="text-sm mb-2">Aplicaciones para dispositivos móviles:</p>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                        <li>Disponible para iOS y Android</li>
                        <li>Acceso a informes en cualquier lugar</li>
                        <li>Recibir notificaciones y alertas</li>
                        <li>Escanear códigos QR para acceder a informes</li>
                    </ul>
                    <p class="text-xs mt-2 italic">Descarga: App Store o Google Play</p>
                </div>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Flujo de trabajo típico en Power BI</h3>

            <div class="relative mb-6">
                <div class="flex flex-wrap justify-between items-start relative">
                    <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                        <div class="text-2xl mb-1">🔌</div>
                        <h5 class="font-bold">1. Conectar</h5>
                        <p class="text-xs">Conectar a fuentes de datos</p>
                    </div>

                    <div class="hidden md:block absolute top-12 left-[19%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                    <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                        <div class="text-2xl mb-1">🔄</div>
                        <h5 class="font-bold">2. Transformar</h5>
                        <p class="text-xs">Limpiar y preparar datos</p>
                    </div>

                    <div class="hidden md:block absolute top-12 left-[39%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                    <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                        <div class="text-2xl mb-1">🧩</div>
                        <h5 class="font-bold">3. Modelar</h5>
                        <p class="text-xs">Crear relaciones y medidas</p>
                    </div>

                    <div class="hidden md:block absolute top-12 left-[59%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                    <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                        <div class="text-2xl mb-1">📊</div>
                        <h5 class="font-bold">4. Visualizar</h5>
                        <p class="text-xs">Crear dashboards</p>
                    </div>

                    <div class="hidden md:block absolute top-12 left-[79%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                    <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                        <div class="text-2xl mb-1">📤</div>
                        <h5 class="font-bold">5. Compartir</h5>
                        <p class="text-xs">Publicar y distribuir</p>
                    </div>
                </div>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Licencias y versiones de Power BI</h3>

            <div class="overflow-x-auto mb-6">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Versión</th>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Costo</th>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Características principales</th>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ideal para</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200">Power BI Desktop</td>
                            <td class="py-2 px-4 border-b border-gray-200">Gratuito</td>
                            <td class="py-2 px-4 border-b border-gray-200">Creación de informes y visualizaciones</td>
                            <td class="py-2 px-4 border-b border-gray-200">Uso personal o desarrollo</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200">Power BI Service (Gratuito)</td>
                            <td class="py-2 px-4 border-b border-gray-200">Gratuito</td>
                            <td class="py-2 px-4 border-b border-gray-200">Publicación personal, límite de 1GB</td>
                            <td class="py-2 px-4 border-b border-gray-200">Uso individual, aprendizaje</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200">Power BI Pro</td>
                            <td class="py-2 px-4 border-b border-gray-200">$9.99/usuario/mes</td>
                            <td class="py-2 px-4 border-b border-gray-200">Compartir, colaborar, 10GB por usuario</td>
                            <td class="py-2 px-4 border-b border-gray-200">Equipos y organizaciones</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200">Power BI Premium</td>
                            <td class="py-2 px-4 border-b border-gray-200">Desde $4,995/mes</td>
                            <td class="py-2 px-4 border-b border-gray-200">Capacidad dedicada, informes paginados</td>
                            <td class="py-2 px-4 border-b border-gray-200">Grandes empresas</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 class="font-bold text-yellow-800 mb-2">Importante para este taller</h4>
                <p>En este taller nos enfocaremos principalmente en <strong>Power BI Desktop</strong>, que es gratuito y contiene todas las funcionalidades necesarias para aprender los fundamentos del análisis de datos. Todas las prácticas se realizarán utilizando esta versión.</p>
            </div>

            <div class="flex items-center justify-center mb-4">
                <img src="assets/img/power-bi-ecosystem.jpg" alt="Ecosistema de Power BI" class="max-w-full h-auto rounded-lg shadow-md">
            </div>
        </div>
    `,

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
    ],

    // Diagrama de la arquitectura de Power BI
    diagram: {
        title: "Arquitectura de Power BI",
        description: "Este diagrama muestra cómo se relacionan los diferentes componentes de Power BI:",
        imageUrl: "assets/img/power-bi-architecture.png",
        elements: [
            {
                name: "Fuentes de datos",
                description: "Excel, SQL, servicios web, etc."
            },
            {
                name: "Power BI Desktop",
                description: "Herramienta de desarrollo principal"
            },
            {
                name: "Power BI Service",
                description: "Plataforma de publicación y colaboración"
            },
            {
                name: "Power BI Mobile",
                description: "Acceso desde dispositivos móviles"
            },
            {
                name: "Consumidores",
                description: "Usuarios que visualizan los informes"
            }
        ]
    },

    // Beneficios de Power BI
    benefits: [
        {
            icon: "💰",
            title: "Costo accesible",
            description: "Power BI Desktop es gratuito, y las versiones en la nube tienen opciones para diferentes presupuestos."
        },
        {
            icon: "🔄",
            title: "Actualizaciones frecuentes",
            description: "Microsoft lanza actualizaciones mensuales con nuevas características y mejoras."
        },
        {
            icon: "🔌",
            title: "Amplia conectividad",
            description: "Conecta con cientos de fuentes de datos diferentes, desde Excel hasta servicios en la nube."
        },
        {
            icon: "🧩",
            title: "Integración con Microsoft",
            description: "Se integra perfectamente con Excel, SharePoint, Teams y otras herramientas de Microsoft."
        },
        {
            icon: "📱",
            title: "Acceso multiplataforma",
            description: "Accede a tus informes desde Windows, web o dispositivos móviles."
        }
    ],

    // Quiz para comprobar comprensión
    quiz: {
        questionId: "intro-quiz-components",
        question: "¿Cuál de los siguientes componentes de Power BI es el que utilizarás principalmente para crear informes y visualizaciones en este taller?",
        options: [
            "Power BI Service",
            "Power BI Mobile",
            "Power BI Desktop",
            "Power BI Gateway"
        ],
        correctIndex: 2
    }
};

// Paso 3: Recorrido por la Interfaz
const introStep3Content = {
    title: "Recorrido por la Interfaz de Power BI Desktop",

    // Descripción general
    description: "Power BI Desktop tiene una interfaz intuitiva organizada en diferentes áreas funcionales. Vamos a explorar las principales secciones:",

    // Contenido principal
    content: `
        <div class="mb-6">
            <p class="mb-4">Para aprovechar al máximo Power BI Desktop, es fundamental familiarizarse con su interfaz. Conocer dónde se encuentra cada herramienta y función te permitirá trabajar de manera más eficiente y aprovechar todo el potencial de la aplicación.</p>

            <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Antes de empezar</h4>
                <p>Si aún no has instalado Power BI Desktop, puedes descargarlo gratuitamente desde la <a href="https://powerbi.microsoft.com/es-es/desktop/" target="_blank" class="text-blue-600 hover:underline">página oficial de Microsoft</a>. Es compatible con Windows 10 y versiones posteriores.</p>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Visión general de la interfaz</h3>

            <div class="flex items-center justify-center mb-6">
                <img src="assets/img/power-bi-interface-overview.jpg" alt="Visión general de la interfaz de Power BI Desktop" class="max-w-full h-auto rounded-lg shadow-md">
            </div>

            <p class="mb-4">La interfaz de Power BI Desktop se divide en varias áreas principales, cada una con un propósito específico:</p>

            <h3 class="text-lg font-bold text-blue-800 mb-3">1. Cinta de opciones (Ribbon)</h3>

            <p class="mb-4">Similar a otras aplicaciones de Microsoft, la cinta de opciones contiene todas las acciones y comandos organizados en pestañas temáticas:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Archivo</h4>
                    <p class="text-sm">Contiene opciones para abrir, guardar y publicar informes, así como configuraciones generales.</p>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Inicio</h4>
                    <p class="text-sm">Incluye las herramientas más comunes como portapapeles, fuentes, párrafos y herramientas de inserción rápida.</p>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Insertar</h4>
                    <p class="text-sm">Permite añadir visualizaciones, elementos visuales personalizados, botones y otros objetos al informe.</p>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Modelado</h4>
                    <p class="text-sm">Contiene herramientas para crear y gestionar relaciones, medidas, columnas calculadas y jerarquías.</p>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Vista</h4>
                    <p class="text-sm">Permite cambiar entre las tres vistas principales: Informe, Datos y Modelo.</p>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-1">Pestaña Ayuda</h4>
                    <p class="text-sm">Proporciona acceso a recursos de ayuda, comunidad y actualizaciones.</p>
                </div>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">2. Vistas principales</h3>

            <p class="mb-4">Power BI Desktop tiene tres vistas principales, accesibles desde la pestaña Vista o mediante los iconos en la barra lateral izquierda:</p>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-blue-600">
                <h4 class="font-bold text-blue-800 mb-2">Vista Informe</h4>
                <p class="mb-2">Es donde pasarás la mayor parte del tiempo. Aquí puedes:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Crear y organizar visualizaciones</li>
                    <li>Diseñar el aspecto visual de tus dashboards</li>
                    <li>Añadir elementos interactivos como filtros y segmentadores</li>
                    <li>Organizar tu informe en múltiples páginas</li>
                </ul>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-green-600">
                <h4 class="font-bold text-green-800 mb-2">Vista Datos</h4>
                <p class="mb-2">Permite explorar tus datos en formato tabular. Aquí puedes:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Ver los datos en formato de tabla</li>
                    <li>Verificar que los datos se han cargado correctamente</li>
                    <li>Comprobar los resultados de tus transformaciones</li>
                    <li>Examinar los valores de columnas calculadas y medidas</li>
                </ul>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-purple-600">
                <h4 class="font-bold text-purple-800 mb-2">Vista Modelo</h4>
                <p class="mb-2">Muestra la estructura de tu modelo de datos. Aquí puedes:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Crear y gestionar relaciones entre tablas</li>
                    <li>Organizar visualmente tu modelo de datos</li>
                    <li>Ver la cardinalidad y dirección de las relaciones</li>
                    <li>Identificar tablas aisladas o problemas en el modelo</li>
                </ul>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">3. Paneles laterales</h3>

            <p class="mb-4">Los paneles laterales proporcionan acceso a datos y herramientas de visualización:</p>

            <div class="overflow-x-auto mb-6">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Panel</th>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Función</th>
                            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Uso típico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200 font-medium">Panel de Datos</td>
                            <td class="py-2 px-4 border-b border-gray-200">Muestra todas las tablas y campos disponibles</td>
                            <td class="py-2 px-4 border-b border-gray-200">Arrastrar campos a visualizaciones, crear jerarquías</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200 font-medium">Panel de Visualizaciones</td>
                            <td class="py-2 px-4 border-b border-gray-200">Contiene tipos de visualizaciones y opciones de formato</td>
                            <td class="py-2 px-4 border-b border-gray-200">Seleccionar tipo de visual, configurar campos, dar formato</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-200 font-medium">Panel de Filtros</td>
                            <td class="py-2 px-4 border-b border-gray-200">Permite aplicar filtros a diferentes niveles</td>
                            <td class="py-2 px-4 border-b border-gray-200">Filtrar a nivel de visual, página o informe completo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">4. Lienzo (Canvas)</h3>

            <p class="mb-4">El área central donde se crean y organizan las visualizaciones:</p>

            <ul class="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Área de trabajo principal:</strong> Donde arrastras y colocas visualizaciones.</li>
                <li><strong>Páginas:</strong> Pestañas en la parte inferior que permiten organizar tu informe en múltiples páginas.</li>
                <li><strong>Cuadrícula y guías:</strong> Ayudan a alinear y organizar los elementos visuales.</li>
                <li><strong>Zoom:</strong> Controles en la esquina inferior derecha para acercar o alejar la vista.</li>
            </ul>

            <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                <p class="mb-2">Puedes personalizar la interfaz de Power BI Desktop según tus preferencias:</p>
                <ul class="list-disc pl-5">
                    <li>Ocultar o mostrar paneles haciendo clic en los iconos de expansión</li>
                    <li>Ajustar el tamaño de los paneles arrastrando sus bordes</li>
                    <li>Cambiar el tema de color en Archivo > Opciones > Vista previa de características</li>
                    <li>Usar atajos de teclado para navegar más rápido (Ctrl+F1 muestra la lista de atajos)</li>
                </ul>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Atajos de teclado útiles</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <p class="text-sm font-bold">Generales:</p>
                        <ul class="text-sm list-disc pl-5">
                            <li>Ctrl+S: Guardar</li>
                            <li>Ctrl+Z: Deshacer</li>
                            <li>Ctrl+Y: Rehacer</li>
                            <li>F1: Ayuda</li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-sm font-bold">Navegación:</p>
                        <ul class="text-sm list-disc pl-5">
                            <li>Alt+1: Vista Informe</li>
                            <li>Alt+2: Vista Datos</li>
                            <li>Alt+3: Vista Modelo</li>
                            <li>Ctrl+Tab: Cambiar entre páginas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

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
    },

    // Diagrama de la interfaz
    diagram: {
        title: "Mapa de la Interfaz de Power BI Desktop",
        description: "Este diagrama muestra las principales áreas de la interfaz de Power BI Desktop:",
        imageUrl: "assets/img/power-bi-interface-map.png",
        elements: [
            {
                name: "Cinta de opciones",
                description: "Contiene todas las acciones y comandos organizados en pestañas"
            },
            {
                name: "Panel de Datos",
                description: "Muestra todas las tablas y campos disponibles"
            },
            {
                name: "Panel de Visualizaciones",
                description: "Contiene tipos de visualizaciones y opciones de formato"
            },
            {
                name: "Panel de Filtros",
                description: "Permite aplicar filtros a diferentes niveles"
            },
            {
                name: "Lienzo (Canvas)",
                description: "Área central donde se crean y organizan las visualizaciones"
            },
            {
                name: "Selector de Vistas",
                description: "Permite cambiar entre las vistas Informe, Datos y Modelo"
            }
        ]
    },

    // Atajos de teclado útiles
    shortcuts: [
        {
            key: "Ctrl+N",
            description: "Crear un nuevo archivo"
        },
        {
            key: "Ctrl+O",
            description: "Abrir un archivo existente"
        },
        {
            key: "Ctrl+S",
            description: "Guardar el archivo actual"
        },
        {
            key: "F5",
            description: "Actualizar visualizaciones"
        },
        {
            key: "Alt+1",
            description: "Cambiar a Vista Informe"
        },
        {
            key: "Alt+2",
            description: "Cambiar a Vista Datos"
        },
        {
            key: "Alt+3",
            description: "Cambiar a Vista Modelo"
        },
        {
            key: "Ctrl+C",
            description: "Copiar elemento seleccionado"
        },
        {
            key: "Ctrl+V",
            description: "Pegar elemento copiado"
        },
        {
            key: "Ctrl+Z",
            description: "Deshacer última acción"
        }
    ],

    // Quiz para comprobar comprensión
    quiz: {
        questionId: "intro-quiz-interface",
        question: "¿Cuál de las siguientes vistas de Power BI Desktop se utiliza para crear y gestionar relaciones entre tablas?",
        options: [
            "Vista Informe",
            "Vista Datos",
            "Vista Modelo",
            "Vista Relaciones"
        ],
        correctIndex: 2
    },

    // Contenido específico para modo estudiante
    studentContent: {
        description: "Familiarizarse con la interfaz de Power BI Desktop es fundamental para tu desarrollo como Auxiliar en Sistemas. Esta habilidad te permitirá crear informes y dashboards de manera eficiente.",
        exercises: [
            {
                title: "Exploración guiada de la interfaz",
                description: "Realiza los siguientes pasos para familiarizarte con la interfaz:",
                steps: [
                    "Abre Power BI Desktop y crea un nuevo archivo",
                    "Identifica y anota la función de cada una de las pestañas de la cinta de opciones",
                    "Cambia entre las tres vistas principales y describe la diferencia entre ellas",
                    "Localiza los paneles de Datos, Visualizaciones y Filtros",
                    "Practica los atajos de teclado más comunes (Ctrl+S, Alt+1, Alt+2, Alt+3)"
                ]
            }
        ]
    },

    // Contenido específico para modo autoguiado
    selfGuidedContent: {
        description: "La interfaz de Power BI Desktop puede parecer compleja al principio, pero con práctica te resultará intuitiva y eficiente. Esta sección te ayudará a familiarizarte con ella.",
        checkpoints: [
            "Puedo identificar las tres vistas principales de Power BI Desktop y su propósito",
            "Conozco la función de los principales paneles (Datos, Visualizaciones, Filtros)",
            "Entiendo cómo está organizada la cinta de opciones y sus pestañas principales",
            "Puedo navegar eficientemente por la interfaz usando tanto el ratón como atajos de teclado",
            "Sé cómo personalizar la interfaz según mis preferencias de trabajo"
        ],
        additionalResources: [
            {
                title: "Guía de la interfaz de Power BI Desktop",
                url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-what-is-desktop",
                description: "Documentación oficial de Microsoft sobre la interfaz de Power BI Desktop"
            },
            {
                title: "Atajos de teclado en Power BI Desktop",
                url: "https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-accessibility-keyboard-shortcuts",
                description: "Lista completa de atajos de teclado para trabajar más eficientemente"
            }
        ]
    }
};

// Paso 4: Tipos de Datos y Modelos (Conceptos Básicos)
const introStep4Content = {
    title: "Tipos de Datos y Modelos (Conceptos Básicos)",

    // Contenido principal
    content: `
        <div class="mb-6">
            <p class="mb-4">Para crear informes efectivos en Power BI, es fundamental comprender los tipos de datos y los conceptos básicos de modelado. Estos conocimientos te permitirán organizar tus datos de manera óptima y extraer el máximo valor de ellos.</p>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Tipos de Datos en Power BI</h3>

            <p class="mb-4">Power BI trabaja con diferentes tipos de datos, cada uno con características específicas y usos particulares:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div class="flex items-center mb-2">
                        <span class="text-xl font-bold mr-2">Aa</span>
                        <h4 class="font-bold text-blue-800">Texto</h4>
                    </div>
                    <p class="text-sm mb-2">Cadenas de caracteres alfanuméricos.</p>
                    <p class="text-xs text-gray-600">Ejemplos: Nombres, direcciones, códigos de producto, categorías.</p>
                    <p class="text-xs text-gray-600 mt-1">Operaciones: Concatenación, búsqueda, filtrado por coincidencia.</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center mb-2">
                        <span class="text-xl font-bold mr-2">123</span>
                        <h4 class="font-bold text-green-800">Número</h4>
                    </div>
                    <p class="text-sm mb-2">Valores numéricos enteros o decimales.</p>
                    <p class="text-xs text-gray-600">Ejemplos: Precios, cantidades, edades, porcentajes.</p>
                    <p class="text-xs text-gray-600 mt-1">Operaciones: Suma, promedio, mínimo, máximo, comparaciones.</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600">
                    <div class="flex items-center mb-2">
                        <span class="text-xl font-bold mr-2">📅</span>
                        <h4 class="font-bold text-purple-800">Fecha/Hora</h4>
                    </div>
                    <p class="text-sm mb-2">Valores de fecha, hora o combinación de ambos.</p>
                    <p class="text-xs text-gray-600">Ejemplos: Fecha de venta, fecha de nacimiento, hora de registro.</p>
                    <p class="text-xs text-gray-600 mt-1">Operaciones: Filtrado por períodos, cálculos de diferencia, agrupación por año/mes/día.</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-600">
                    <div class="flex items-center mb-2">
                        <span class="text-xl font-bold mr-2">✓✗</span>
                        <h4 class="font-bold text-yellow-800">Booleano</h4>
                    </div>
                    <p class="text-sm mb-2">Valores verdadero/falso (sí/no).</p>
                    <p class="text-xs text-gray-600">Ejemplos: Cliente activo, producto disponible, pago completado.</p>
                    <p class="text-xs text-gray-600 mt-1">Operaciones: Filtrado por condición, lógica condicional.</p>
                </div>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-blue-800 mb-2">¿Por qué son importantes los tipos de datos correctos?</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Cálculos precisos:</strong> Los números deben ser reconocidos como números para poder sumarlos, promediarlos, etc.</li>
                    <li><strong>Filtrado efectivo:</strong> Las fechas deben ser reconocidas como fechas para filtrar por períodos (mes, trimestre, año).</li>
                    <li><strong>Ordenamiento correcto:</strong> Los textos se ordenan alfabéticamente, los números por valor.</li>
                    <li><strong>Visualizaciones adecuadas:</strong> Power BI sugiere visualizaciones según los tipos de datos seleccionados.</li>
                </ul>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Conceptos Básicos de Modelado de Datos</h3>

            <p class="mb-4">El modelado de datos en Power BI consiste en organizar tablas y establecer relaciones entre ellas para permitir análisis más complejos.</p>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Tablas</h4>
                <p class="mb-2">Conjuntos de datos organizados en filas (registros) y columnas (campos).</p>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 text-sm">
                        <thead>
                            <tr>
                                <th class="py-1 px-3 border-b border-gray-200 bg-gray-100 text-left">ID_Cliente</th>
                                <th class="py-1 px-3 border-b border-gray-200 bg-gray-100 text-left">Nombre</th>
                                <th class="py-1 px-3 border-b border-gray-200 bg-gray-100 text-left">Ciudad</th>
                                <th class="py-1 px-3 border-b border-gray-200 bg-gray-100 text-left">Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-1 px-3 border-b border-gray-200">001</td>
                                <td class="py-1 px-3 border-b border-gray-200">Ana García</td>
                                <td class="py-1 px-3 border-b border-gray-200">Madrid</td>
                                <td class="py-1 px-3 border-b border-gray-200">555-1234</td>
                            </tr>
                            <tr>
                                <td class="py-1 px-3 border-b border-gray-200">002</td>
                                <td class="py-1 px-3 border-b border-gray-200">Juan López</td>
                                <td class="py-1 px-3 border-b border-gray-200">Barcelona</td>
                                <td class="py-1 px-3 border-b border-gray-200">555-5678</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-xs text-gray-600 mt-2">Ejemplo: Tabla de Clientes con campos ID_Cliente, Nombre, Ciudad y Teléfono.</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Relaciones</h4>
                <p class="mb-2">Conexiones entre tablas basadas en campos comunes que permiten combinar datos de diferentes tablas.</p>
                <div class="flex items-center justify-center mb-2">
                    <img src="assets/img/relationship-example.png" alt="Ejemplo de relación entre tablas" class="max-w-full h-auto rounded-lg">
                </div>
                <p class="text-sm">La tabla Ventas se relaciona con la tabla Clientes mediante el campo ID_Cliente, y con la tabla Productos mediante el campo ID_Producto.</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-md mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Cardinalidad</h4>
                <p class="mb-2">Define cómo se relacionan los registros entre tablas:</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div class="border border-gray-200 rounded p-3">
                        <h5 class="font-bold text-sm mb-1">Uno a Muchos (1:N)</h5>
                        <p class="text-xs">Un registro en la tabla A puede relacionarse con muchos registros en la tabla B.</p>
                        <p class="text-xs italic mt-1">Ejemplo: Un cliente puede tener muchas ventas.</p>
                    </div>

                    <div class="border border-gray-200 rounded p-3">
                        <h5 class="font-bold text-sm mb-1">Uno a Uno (1:1)</h5>
                        <p class="text-xs">Un registro en la tabla A se relaciona con exactamente un registro en la tabla B.</p>
                        <p class="text-xs italic mt-1">Ejemplo: Un empleado tiene un único ID de usuario.</p>
                    </div>

                    <div class="border border-gray-200 rounded p-3">
                        <h5 class="font-bold text-sm mb-1">Muchos a Muchos (N:N)</h5>
                        <p class="text-xs">Múltiples registros en la tabla A pueden relacionarse con múltiples registros en la tabla B.</p>
                        <p class="text-xs italic mt-1">Ejemplo: Estudiantes y cursos: un estudiante puede tomar varios cursos, y un curso puede tener varios estudiantes.</p>
                    </div>
                </div>

                <p class="text-xs text-gray-600">La cardinalidad más común en Power BI es Uno a Muchos (1:N).</p>
            </div>

            <h3 class="text-lg font-bold text-blue-800 mb-3">Ejemplo de Modelo de Datos</h3>

            <p class="mb-4">Veamos un ejemplo simple de modelo de datos para un sistema de ventas:</p>

            <div class="flex items-center justify-center mb-6">
                <img src="assets/img/data-model-example.png" alt="Ejemplo de modelo de datos" class="max-w-full h-auto rounded-lg shadow-md">
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-yellow-800 mb-2">Consejos para un buen modelado</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Normalización:</strong> Divide los datos en tablas lógicas para evitar redundancia.</li>
                    <li><strong>Claves únicas:</strong> Asegúrate de que cada tabla tenga un campo de identificación único.</li>
                    <li><strong>Dirección de filtro:</strong> Configura correctamente la dirección en que se propagan los filtros entre tablas.</li>
                    <li><strong>Tablas de fechas:</strong> Crea tablas de calendario para análisis temporales más potentes.</li>
                    <li><strong>Nombres claros:</strong> Usa nombres descriptivos para tablas y campos.</li>
                </ul>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Ventajas de un buen modelo de datos</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Rendimiento:</strong> Un modelo bien diseñado es más eficiente y rápido.</li>
                    <li><strong>Flexibilidad:</strong> Facilita la creación de diferentes tipos de análisis y visualizaciones.</li>
                    <li><strong>Mantenibilidad:</strong> Es más fácil de actualizar y expandir con el tiempo.</li>
                    <li><strong>Precisión:</strong> Reduce errores en cálculos y agregaciones.</li>
                    <li><strong>Usabilidad:</strong> Hace que los informes sean más intuitivos para los usuarios finales.</li>
                </ul>
            </div>

            <p class="mb-4">En las próximas secciones del taller, aprenderás a aplicar estos conceptos en la práctica, creando modelos de datos efectivos para tus análisis en Power BI.</p>
        </div>
    `,

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
