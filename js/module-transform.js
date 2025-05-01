/**
 * Contenido del módulo de Transformación de Datos
 * Este archivo contiene el contenido para el módulo "Conexión y Transformación de Datos"
 */

// Estructura básica del módulo
const transformModuleContent = {
    // Paso 1: Conexión a Fuentes de Datos
    step1: {
        title: "Conexión a Fuentes de Datos",

        // Descripción general
        description: "Power BI puede conectarse a una amplia variedad de fuentes de datos, desde archivos simples hasta bases de datos complejas y servicios en la nube.",

        // Tipos de fuentes de datos
        dataSources: [
            {
                category: "Archivos",
                icon: "📄",
                sources: [
                    {
                        name: "Excel",
                        description: "Hojas de cálculo de Microsoft Excel (.xlsx, .xlsm)",
                        commonUse: "Ideal para conjuntos de datos pequeños a medianos o para prototipado rápido."
                    },
                    {
                        name: "CSV",
                        description: "Archivos de valores separados por comas (.csv)",
                        commonUse: "Formato universal para intercambio de datos tabulares simple."
                    },
                    {
                        name: "Texto",
                        description: "Archivos de texto plano (.txt) con delimitadores",
                        commonUse: "Similar a CSV, pero puede usar otros delimitadores como tabulaciones."
                    },
                    {
                        name: "JSON",
                        description: "JavaScript Object Notation (.json)",
                        commonUse: "Común en APIs web y para datos con estructura jerárquica."
                    },
                    {
                        name: "PDF",
                        description: "Portable Document Format (.pdf)",
                        commonUse: "Extracción de tablas de documentos PDF."
                    }
                ]
            },
            {
                category: "Bases de Datos",
                icon: "🗄️",
                sources: [
                    {
                        name: "SQL Server",
                        description: "Base de datos relacional de Microsoft",
                        commonUse: "Entornos empresariales Microsoft, alto rendimiento."
                    },
                    {
                        name: "MySQL/MariaDB",
                        description: "Bases de datos relacionales de código abierto",
                        commonUse: "Aplicaciones web, soluciones de código abierto."
                    },
                    {
                        name: "PostgreSQL",
                        description: "Base de datos relacional avanzada de código abierto",
                        commonUse: "Aplicaciones que requieren características avanzadas y código abierto."
                    },
                    {
                        name: "Oracle",
                        description: "Base de datos empresarial",
                        commonUse: "Grandes empresas, aplicaciones críticas."
                    },
                    {
                        name: "MongoDB",
                        description: "Base de datos NoSQL orientada a documentos",
                        commonUse: "Datos no estructurados o semi-estructurados."
                    }
                ]
            },
            {
                category: "Servicios en la Nube",
                icon: "☁️",
                sources: [
                    {
                        name: "Azure SQL",
                        description: "SQL Server en la nube de Microsoft",
                        commonUse: "Aplicaciones empresariales en la nube de Microsoft."
                    },
                    {
                        name: "Dynamics 365",
                        description: "Plataforma de aplicaciones empresariales de Microsoft",
                        commonUse: "Análisis de datos de CRM y ERP."
                    },
                    {
                        name: "SharePoint",
                        description: "Plataforma colaborativa de Microsoft",
                        commonUse: "Análisis de datos almacenados en sitios de SharePoint."
                    },
                    {
                        name: "Google Analytics",
                        description: "Análisis de tráfico web",
                        commonUse: "Análisis de comportamiento de usuarios en sitios web."
                    },
                    {
                        name: "Salesforce",
                        description: "Plataforma CRM en la nube",
                        commonUse: "Análisis de datos de ventas y clientes."
                    }
                ]
            }
        ],

        // Proceso de conexión
        connectionProcess: {
            title: "Proceso de Conexión a Datos",
            steps: [
                {
                    number: 1,
                    title: "Iniciar la conexión",
                    description: "En Power BI Desktop, haz clic en 'Obtener datos' en la pestaña Inicio o usa el menú Archivo > Obtener datos.",
                    tip: "También puedes usar el atajo Alt+H+GD."
                },
                {
                    number: 2,
                    title: "Seleccionar la fuente",
                    description: "Navega por las categorías o usa el cuadro de búsqueda para encontrar tu fuente de datos.",
                    tip: "Las fuentes más comunes aparecen en la sección 'Común'."
                },
                {
                    number: 3,
                    title: "Configurar la conexión",
                    description: "Proporciona la información necesaria según el tipo de fuente (ruta de archivo, credenciales, URL, etc.).",
                    tip: "Para bases de datos, puedes probar la conexión antes de continuar."
                },
                {
                    number: 4,
                    title: "Seleccionar datos",
                    description: "Elige las tablas, vistas o elementos específicos que deseas importar.",
                    tip: "Puedes previsualizar los datos antes de cargarlos."
                },
                {
                    number: 5,
                    title: "Transformar o cargar",
                    description: "Decide si quieres cargar los datos directamente o editarlos primero con Power Query.",
                    tip: "Casi siempre es recomendable usar 'Transformar datos' para revisar y limpiar antes de cargar."
                }
            ]
        },

        // Modos de conexión
        connectionModes: [
            {
                name: "Importación",
                description: "Los datos se copian a Power BI. Este es el modo más común y versátil.",
                pros: ["Rendimiento rápido", "Funciona sin conexión", "Acceso a todas las características de Power BI"],
                cons: ["Limitado por el tamaño de memoria", "Requiere actualización manual o programada", "No refleja cambios en tiempo real"]
            },
            {
                name: "DirectQuery",
                description: "Power BI consulta directamente la fuente de datos original sin importar los datos.",
                pros: ["Siempre muestra datos actualizados", "Puede manejar conjuntos de datos muy grandes", "No duplica los datos"],
                cons: ["Rendimiento más lento", "Algunas limitaciones en transformaciones y cálculos", "Requiere conexión constante a la fuente"]
            },
            {
                name: "LiveConnect",
                description: "Conexión en vivo a modelos de SQL Server Analysis Services o Power BI Service.",
                pros: ["Reutiliza modelos existentes", "Consistencia en toda la organización", "Gobernanza centralizada"],
                cons: ["Limitado a fuentes específicas", "Menos flexibilidad para modificar el modelo"]
            }
        ],

        // Consideraciones de seguridad
        securityConsiderations: [
            {
                title: "Credenciales",
                description: "Almacena de forma segura las credenciales de conexión. Power BI puede encriptar y guardar las credenciales para actualizaciones automáticas."
            },
            {
                title: "Nivel de acceso",
                description: "Asegúrate de que las credenciales utilizadas tengan solo los permisos necesarios en la fuente de datos, siguiendo el principio de privilegio mínimo."
            },
            {
                title: "Datos sensibles",
                description: "Ten en cuenta que al importar datos, estos se almacenan en el archivo .pbix. Considera usar DirectQuery para datos muy sensibles."
            },
            {
                title: "Gateway",
                description: "Para fuentes de datos locales (on-premises), necesitarás configurar un gateway para actualizaciones programadas en Power BI Service."
            }
        ],

        // Ejercicio práctico
        exercise: {
            title: "Ejercicio: Conectar a una fuente de datos",
            description: "Vamos a practicar la conexión a un archivo Excel de ejemplo:",
            steps: [
                "Abre Power BI Desktop",
                "Haz clic en 'Obtener datos' en la pestaña Inicio",
                "Selecciona 'Excel' en la categoría de archivos",
                "Navega hasta el archivo 'Ventas_Ejemplo.xlsx' proporcionado",
                "En el navegador, selecciona la tabla 'Ventas'",
                "Haz clic en 'Transformar datos' para abrir el Editor de Power Query"
            ],
            note: "Este ejercicio nos llevará directamente al siguiente paso: Introducción a Power Query."
        },

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "transform-quiz-1",
            question: "¿Cuál es la principal diferencia entre el modo de conexión 'Importación' y 'DirectQuery'?",
            options: [
                "Importación solo funciona con archivos Excel, mientras que DirectQuery funciona con cualquier fuente",
                "Importación copia los datos a Power BI, mientras que DirectQuery consulta directamente la fuente original",
                "Importación es más lenta, mientras que DirectQuery siempre es más rápido",
                "No hay diferencia, son términos intercambiables"
            ],
            correctIndex: 1
        }
    },

    // Paso 2: Introducción a Power Query (Editor)
    step2: {
        title: "Introducción a Power Query (Editor)",

        // Descripción general
        description: "Power Query es el motor de Extracción, Transformación y Carga (ETL) integrado en Power BI. Permite limpiar, transformar y dar forma a los datos antes de cargarlos en el modelo.",

        // ¿Qué es Power Query?
        whatIsPowerQuery: {
            title: "¿Qué es Power Query?",
            points: [
                {
                    title: "Motor ETL",
                    description: "Herramienta especializada para Extraer, Transformar y Cargar datos."
                },
                {
                    title: "Lenguaje M",
                    description: "Utiliza un lenguaje de fórmulas llamado M (Power Query Formula Language) para realizar transformaciones."
                },
                {
                    title: "Interfaz visual",
                    description: "Proporciona una interfaz gráfica intuitiva que genera código M automáticamente."
                },
                {
                    title: "Pasos reproducibles",
                    description: "Registra cada transformación como un paso, creando un proceso reproducible y documentado."
                },
                {
                    title: "Actualizable",
                    description: "Las transformaciones se aplican automáticamente cuando se actualizan los datos."
                }
            ]
        },

        // Interfaz del Editor de Power Query
        interface: {
            title: "Interfaz del Editor de Power Query",
            areas: [
                {
                    name: "Cinta de opciones",
                    description: "Contiene todas las transformaciones disponibles organizadas por categorías.",
                    location: "Parte superior de la ventana",
                    key_features: ["Transformaciones comunes", "Operaciones de columna", "Operaciones de tabla"]
                },
                {
                    name: "Panel de consultas",
                    description: "Muestra todas las consultas (tablas) disponibles en el modelo.",
                    location: "Lado izquierdo",
                    key_features: ["Organización en carpetas", "Consultas vinculadas", "Parámetros"]
                },
                {
                    name: "Vista previa de datos",
                    description: "Muestra una vista previa de los datos con las transformaciones aplicadas hasta el momento.",
                    location: "Centro de la ventana",
                    key_features: ["Muestra primeras 1000 filas", "Tipos de datos por colores", "Filtros de columna"]
                },
                {
                    name: "Panel de Pasos Aplicados",
                    description: "Registra cada transformación como un paso secuencial.",
                    location: "Lado derecho",
                    key_features: ["Secuencia de transformaciones", "Edición de pasos", "Eliminación de pasos"]
                },
                {
                    name: "Barra de fórmulas",
                    description: "Muestra y permite editar la fórmula M del paso seleccionado.",
                    location: "Debajo de la cinta de opciones",
                    key_features: ["Edición avanzada", "Sintaxis M", "Personalización"]
                }
            ]
        },

        // Pasos Aplicados
        appliedSteps: {
            title: "Panel de Pasos Aplicados: El Corazón de Power Query",
            description: "El panel de Pasos Aplicados es una de las características más poderosas de Power Query, ya que:",
            benefits: [
                "Registra cada transformación en orden secuencial",
                "Permite ver el efecto de cada paso individualmente",
                "Facilita la depuración al poder deshabilitar pasos temporalmente",
                "Documenta automáticamente el proceso de transformación",
                "Permite reorganizar, editar o eliminar pasos según sea necesario"
            ],
            commonSteps: [
                {
                    name: "Origen",
                    description: "El primer paso que conecta a la fuente de datos original."
                },
                {
                    name: "Navegación",
                    description: "Selección de tablas o vistas específicas de la fuente."
                },
                {
                    name: "Tipo cambiado",
                    description: "Asignación de tipos de datos correctos a las columnas."
                },
                {
                    name: "Encabezados promovidos",
                    description: "Conversión de la primera fila en encabezados de columna."
                },
                {
                    name: "Columnas eliminadas",
                    description: "Eliminación de columnas innecesarias."
                },
                {
                    name: "Filas filtradas",
                    description: "Filtrado de filas según criterios específicos."
                }
            ]
        },

        // Tipos de datos en Power Query
        dataTypes: {
            title: "Tipos de Datos en Power Query",
            description: "Power Query asigna tipos de datos a cada columna. Es crucial verificar y corregir estos tipos para asegurar transformaciones y cálculos correctos.",
            types: [
                {
                    icon: "Abc",
                    name: "Texto",
                    color: "Azul",
                    examples: ["Nombres", "Códigos", "Descripciones"]
                },
                {
                    icon: "123",
                    name: "Número entero",
                    color: "Verde",
                    examples: ["Cantidades", "Conteos", "Edades"]
                },
                {
                    icon: "1.23",
                    name: "Número decimal",
                    color: "Verde",
                    examples: ["Precios", "Porcentajes", "Medidas"]
                },
                {
                    icon: "📅",
                    name: "Fecha",
                    color: "Rojo",
                    examples: ["Fechas sin componente de hora"]
                },
                {
                    icon: "⏰",
                    name: "Fecha/Hora",
                    color: "Rojo",
                    examples: ["Marcas de tiempo", "Fechas con hora"]
                },
                {
                    icon: "✓/✗",
                    name: "Lógico (Verdadero/Falso)",
                    color: "Púrpura",
                    examples: ["Indicadores Sí/No", "Flags"]
                }
            ],
            importance: "Asignar el tipo de dato correcto es fundamental para que Power BI pueda realizar cálculos adecuados, aplicar filtros correctamente y sugerir visualizaciones apropiadas."
        },

        // Navegación básica
        basicNavigation: {
            title: "Navegación Básica en Power Query",
            actions: [
                {
                    action: "Seleccionar columnas",
                    how: "Haz clic en el encabezado de la columna",
                    tip: "Ctrl+clic para seleccionar múltiples columnas no adyacentes"
                },
                {
                    action: "Seleccionar filas",
                    how: "Haz clic en el número de fila",
                    tip: "Shift+clic para seleccionar un rango de filas"
                },
                {
                    action: "Ver menú de columna",
                    how: "Haz clic en la flecha desplegable en el encabezado",
                    tip: "Acceso rápido a filtros y transformaciones comunes"
                },
                {
                    action: "Cambiar tipo de datos",
                    how: "Clic derecho en columna > Cambiar tipo > Seleccionar tipo",
                    tip: "También en la pestaña Transformar > grupo Cualquier columna"
                },
                {
                    action: "Filtrar datos",
                    how: "Usar la flecha desplegable en el encabezado",
                    tip: "Puedes aplicar múltiples filtros en diferentes columnas"
                },
                {
                    action: "Buscar en datos",
                    how: "Ctrl+F o Inicio > Buscar",
                    tip: "Útil para localizar valores específicos en grandes conjuntos de datos"
                }
            ]
        },

        // Ejercicio práctico
        exercise: {
            title: "Ejercicio: Exploración del Editor de Power Query",
            description: "Continuando con el ejercicio anterior, ahora exploraremos el Editor de Power Query:",
            steps: [
                "Observa la estructura del Editor de Power Query",
                "Identifica los diferentes paneles (Consultas, Vista previa, Pasos Aplicados)",
                "Revisa los pasos ya aplicados en el panel derecho",
                "Haz clic en diferentes pasos para ver cómo cambian los datos",
                "Verifica los tipos de datos de las columnas (observa los iconos de colores)",
                "Explora la cinta de opciones para familiarizarte con las transformaciones disponibles"
            ],
            note: "En el siguiente paso, aplicaremos transformaciones específicas a estos datos."
        },

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "transform-quiz-2",
            question: "¿Cuál es la función principal del panel de 'Pasos Aplicados' en Power Query?",
            options: [
                "Mostrar una vista previa de los datos finales",
                "Registrar y permitir la edición de cada transformación aplicada en orden secuencial",
                "Conectar a diferentes fuentes de datos",
                "Generar visualizaciones automáticas de los datos"
            ],
            correctIndex: 1
        }
    },

    // Paso 3: Transformaciones Fundamentales
    step3: {
        title: "Transformaciones Fundamentales",
        // El contenido detallado se agregará en pasos posteriores
    },

    // Paso 4: Modelado Básico: Creación de Relaciones
    step4: {
        title: "Modelado Básico: Creación de Relaciones",
        // El contenido detallado se agregará en pasos posteriores
    }
};

// Exportar el módulo
if (typeof module !== 'undefined') {
    module.exports = transformModuleContent;
}
