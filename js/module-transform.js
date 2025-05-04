/**
 * Contenido del módulo de Transformación de Datos
 * Este archivo contiene el contenido para el módulo "Conexión y Transformación de Datos"
 */

// Estructura básica del módulo
const transformModuleContent = {
    // Notas para el facilitador (solo visibles en modo facilitador)
    facilitatorNotes: {
        timeAllocation: {
            step1: "20-25 minutos",
            step2: "25-30 minutos",
            step3: "30-35 minutos",
            step4: "25-30 minutos"
        },
        keyPoints: [
            "Enfatizar la importancia de elegir el modo de conexión adecuado según el tamaño y la naturaleza de los datos",
            "Destacar que Power Query es una herramienta poderosa para la preparación de datos que se puede usar en Excel y otras aplicaciones",
            "Resaltar que el panel de Pasos Aplicados es clave para entender y documentar las transformaciones",
            "Explicar que un buen modelo de datos es fundamental para un análisis eficiente y visualizaciones efectivas",
            "Mencionar que las relaciones correctas son la base de cualquier informe de Power BI exitoso"
        ],
        generalTips: [
            "Antes de comenzar, asegúrate de que todos los participantes tienen instalado Power BI Desktop",
            "Proporciona los archivos de ejemplo con anticipación para evitar retrasos",
            "Alterna entre explicaciones teóricas y demostraciones prácticas para mantener el interés",
            "Anima a los participantes a seguir los pasos en sus propios equipos",
            "Reserva tiempo para preguntas después de cada sección",
            "Si hay participantes con diferentes niveles de experiencia, considera formar parejas para aprendizaje colaborativo"
        ],
        commonQuestions: [
            {
                question: "¿Cuál es la diferencia entre Power Query y Power BI?",
                answer: "Power Query es el motor de ETL (Extracción, Transformación y Carga) que forma parte de Power BI. Power BI es la solución completa que incluye Power Query, el modelado de datos, visualizaciones y publicación."
            },
            {
                question: "¿Puedo usar Power Query sin Power BI?",
                answer: "Sí, Power Query también está disponible en Excel y otras aplicaciones de Microsoft como herramienta independiente para transformación de datos."
            },
            {
                question: "¿Cuándo debo usar DirectQuery en lugar de Importación?",
                answer: "DirectQuery es recomendable cuando: 1) Los datos son demasiado grandes para importar, 2) Necesitas datos en tiempo real, 3) Las políticas de seguridad requieren que los datos permanezcan en la fuente original."
            },
            {
                question: "¿Cómo puedo mejorar el rendimiento de mis consultas en Power Query?",
                answer: "Algunas estrategias incluyen: filtrar datos innecesarios lo antes posible en el proceso, eliminar columnas no utilizadas, usar tipos de datos adecuados, y dividir transformaciones complejas en pasos más pequeños."
            },
            {
                question: "¿Qué es un modelo en estrella y por qué es importante?",
                answer: "Un modelo en estrella es un diseño donde una tabla de hechos central (como ventas) se conecta a múltiples tablas de dimensiones (como productos, clientes, fechas). Es importante porque optimiza el rendimiento y facilita la creación de informes."
            }
        ]
    },
    // Paso 1: Conexión a Fuentes de Datos
    step1: {
        title: "Conexión a Fuentes de Datos",

        // Descripción general
        description: "Power BI puede conectarse a una amplia variedad de fuentes de datos, desde archivos simples hasta bases de datos complejas y servicios en la nube.",

        // Contenido principal
        content: `
            <div class="mb-6">
                <p class="mb-4">Uno de los puntos fuertes de Power BI es su capacidad para conectarse a prácticamente cualquier fuente de datos. Esta flexibilidad te permite integrar información de múltiples orígenes para crear análisis completos y visualizaciones potentes.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">¿Por qué es importante?</h4>
                    <p>La conexión a fuentes de datos es el primer paso crítico en cualquier proyecto de Power BI. La forma en que te conectes determinará:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>La frescura de los datos (datos históricos vs. tiempo real)</li>
                        <li>El rendimiento de tus informes</li>
                        <li>Las capacidades de transformación disponibles</li>
                        <li>Los requisitos de infraestructura (como gateways)</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Tipos de Fuentes de Datos</h3>

                <p class="mb-4">Power BI puede conectarse a cientos de fuentes diferentes. Aquí están las categorías principales:</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-2xl mr-2">📄</span>
                            <h4 class="font-bold text-gray-800">Archivos</h4>
                        </div>
                        <ul class="text-sm space-y-2">
                            <li><strong>Excel:</strong> Hojas de cálculo (.xlsx, .xlsm)</li>
                            <li><strong>CSV:</strong> Valores separados por comas</li>
                            <li><strong>Texto:</strong> Archivos de texto plano</li>
                            <li><strong>JSON:</strong> Para datos estructurados</li>
                            <li><strong>PDF:</strong> Extracción de tablas</li>
                            <li><strong>XML:</strong> Datos en formato extensible</li>
                        </ul>
                        <p class="text-xs text-gray-600 mt-2">Ideal para: Conjuntos de datos pequeños a medianos, prototipado rápido, análisis ad-hoc.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-2xl mr-2">🗄️</span>
                            <h4 class="font-bold text-gray-800">Bases de Datos</h4>
                        </div>
                        <ul class="text-sm space-y-2">
                            <li><strong>SQL Server:</strong> Base de datos Microsoft</li>
                            <li><strong>MySQL/MariaDB:</strong> BD de código abierto</li>
                            <li><strong>PostgreSQL:</strong> BD relacional avanzada</li>
                            <li><strong>Oracle:</strong> BD empresarial</li>
                            <li><strong>MongoDB:</strong> BD NoSQL orientada a documentos</li>
                            <li><strong>SAP HANA:</strong> BD en memoria</li>
                        </ul>
                        <p class="text-xs text-gray-600 mt-2">Ideal para: Datos empresariales, grandes volúmenes, datos estructurados, entornos multiusuario.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-2xl mr-2">☁️</span>
                            <h4 class="font-bold text-gray-800">Servicios en la Nube</h4>
                        </div>
                        <ul class="text-sm space-y-2">
                            <li><strong>Azure SQL:</strong> SQL Server en la nube</li>
                            <li><strong>Dynamics 365:</strong> CRM/ERP de Microsoft</li>
                            <li><strong>SharePoint:</strong> Plataforma colaborativa</li>
                            <li><strong>Google Analytics:</strong> Análisis web</li>
                            <li><strong>Salesforce:</strong> Plataforma CRM</li>
                            <li><strong>Common Data Service:</strong> Power Platform</li>
                        </ul>
                        <p class="text-xs text-gray-600 mt-2">Ideal para: Integración con servicios existentes, datos en tiempo real, soluciones empresariales.</p>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Proceso de Conexión a Datos</h3>

                <p class="mb-4">Conectarse a una fuente de datos en Power BI sigue un proceso general similar, independientemente del tipo de fuente:</p>

                <div class="relative mb-6">
                    <div class="flex flex-wrap justify-between items-start relative">
                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">1</div>
                            <h5 class="font-bold">Iniciar la conexión</h5>
                            <p class="text-xs">Haz clic en 'Obtener datos' en la pestaña Inicio</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[19%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">2</div>
                            <h5 class="font-bold">Seleccionar la fuente</h5>
                            <p class="text-xs">Busca y selecciona el tipo de fuente de datos</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[39%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">3</div>
                            <h5 class="font-bold">Configurar la conexión</h5>
                            <p class="text-xs">Proporciona credenciales o ruta de archivo</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[59%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">4</div>
                            <h5 class="font-bold">Seleccionar datos</h5>
                            <p class="text-xs">Elige tablas o elementos específicos</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[79%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">5</div>
                            <h5 class="font-bold">Transformar o cargar</h5>
                            <p class="text-xs">Decide si editar primero o cargar directamente</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                    <p class="mb-2">Casi siempre es recomendable seleccionar "Transformar datos" en lugar de "Cargar" directamente. Esto te llevará al Editor de Power Query donde podrás:</p>
                    <ul class="list-disc pl-5">
                        <li>Revisar la calidad de los datos</li>
                        <li>Eliminar columnas innecesarias</li>
                        <li>Corregir tipos de datos</li>
                        <li>Aplicar transformaciones básicas</li>
                    </ul>
                    <p class="mt-2">Incluso si no necesitas hacer cambios importantes, es buena práctica revisar los datos antes de cargarlos.</p>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Modos de Conexión</h3>

                <p class="mb-4">Power BI ofrece diferentes modos para conectarse a las fuentes de datos. La elección del modo adecuado es crucial para el rendimiento y la funcionalidad de tus informes:</p>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Modo</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ventajas</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Desventajas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Importación</td>
                                <td class="py-2 px-4 border-b border-gray-200">Los datos se copian a Power BI. Este es el modo más común y versátil.</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Rendimiento rápido</li>
                                        <li>Funciona sin conexión</li>
                                        <li>Acceso a todas las características</li>
                                    </ul>
                                </td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Limitado por el tamaño de memoria</li>
                                        <li>Requiere actualización manual o programada</li>
                                        <li>No refleja cambios en tiempo real</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">DirectQuery</td>
                                <td class="py-2 px-4 border-b border-gray-200">Power BI consulta directamente la fuente de datos original sin importar los datos.</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Siempre muestra datos actualizados</li>
                                        <li>Puede manejar conjuntos de datos muy grandes</li>
                                        <li>No duplica los datos</li>
                                    </ul>
                                </td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Rendimiento más lento</li>
                                        <li>Algunas limitaciones en transformaciones</li>
                                        <li>Requiere conexión constante a la fuente</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">LiveConnect</td>
                                <td class="py-2 px-4 border-b border-gray-200">Conexión en vivo a modelos de SQL Server Analysis Services o Power BI Service.</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Reutiliza modelos existentes</li>
                                        <li>Consistencia en toda la organización</li>
                                        <li>Gobernanza centralizada</li>
                                    </ul>
                                </td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Limitado a fuentes específicas</li>
                                        <li>Menos flexibilidad para modificar el modelo</li>
                                        <li>Dependencia de la infraestructura existente</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex items-center justify-center mb-6">
                    <img src="assets/img/import-vs-directquery.png" alt="Comparación entre Importación y DirectQuery" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Consideraciones de Seguridad</h3>

                <p class="mb-4">Al conectarte a fuentes de datos, es importante tener en cuenta aspectos de seguridad:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Credenciales</h4>
                        <p class="text-sm">Power BI puede almacenar de forma segura las credenciales de conexión para actualizaciones automáticas. Estas credenciales se encriptan y no son visibles para otros usuarios.</p>
                        <div class="mt-2 border-t border-gray-200 pt-2">
                            <p class="text-xs text-gray-600">Recomendación: Utiliza cuentas de servicio dedicadas con permisos mínimos necesarios para conectarte a fuentes de datos empresariales.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Nivel de Acceso</h4>
                        <p class="text-sm">Asegúrate de que las credenciales utilizadas tengan solo los permisos necesarios en la fuente de datos, siguiendo el principio de privilegio mínimo.</p>
                        <div class="mt-2 border-t border-gray-200 pt-2">
                            <p class="text-xs text-gray-600">Recomendación: Crea vistas o consultas predefinidas en la fuente para limitar el acceso solo a los datos necesarios.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Datos Sensibles</h4>
                        <p class="text-sm">Ten en cuenta que al importar datos, estos se almacenan en el archivo .pbix. Considera usar DirectQuery para datos muy sensibles o implementar medidas de seguridad adicionales.</p>
                        <div class="mt-2 border-t border-gray-200 pt-2">
                            <p class="text-xs text-gray-600">Recomendación: Implementa seguridad a nivel de fila (RLS) para restringir el acceso a datos sensibles según el usuario.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Gateway</h4>
                        <p class="text-sm">Para fuentes de datos locales (on-premises), necesitarás configurar un gateway para actualizaciones programadas en Power BI Service.</p>
                        <div class="mt-2 border-t border-gray-200 pt-2">
                            <p class="text-xs text-gray-600">Recomendación: Instala el gateway en un servidor dedicado con alta disponibilidad y configura cuentas con los permisos adecuados.</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Cuándo usar cada modo de conexión</h3>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">Usa Importación cuando:</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Necesitas el mejor rendimiento posible</li>
                        <li>El conjunto de datos es relativamente pequeño (menos de 1GB)</li>
                        <li>La actualización en tiempo real no es crítica</li>
                        <li>Necesitas usar todas las funcionalidades de DAX y visualizaciones</li>
                        <li>Quieres permitir el uso sin conexión</li>
                    </ul>
                </div>

                <div class="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-green-800 mb-2">Usa DirectQuery cuando:</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Los datos son demasiado grandes para importar (varios GB o TB)</li>
                        <li>Necesitas datos en tiempo real o casi en tiempo real</li>
                        <li>Las políticas de seguridad o cumplimiento requieren que los datos permanezcan en la fuente</li>
                        <li>La fuente de datos ya está optimizada para consultas analíticas</li>
                        <li>Estás dispuesto a sacrificar algo de rendimiento por la actualidad de los datos</li>
                    </ul>
                </div>

                <div class="bg-purple-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-purple-800 mb-2">Usa LiveConnect cuando:</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Ya tienes modelos semánticos en SQL Server Analysis Services o Power BI Premium</li>
                        <li>Necesitas mantener una única versión de la verdad en toda la organización</li>
                        <li>Quieres aprovechar modelos de datos empresariales existentes</li>
                        <li>Necesitas implementar gobernanza centralizada de datos</li>
                        <li>Deseas separar la creación de informes del modelado de datos</li>
                    </ul>
                </div>

                <p class="mb-4">En la práctica, muchas soluciones de Power BI utilizan una combinación de estos modos de conexión, aprovechando las ventajas de cada uno según las necesidades específicas de cada fuente de datos.</p>
            </div>
        `,

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

        // Contenido principal
        content: `
            <div class="mb-6">
                <p class="mb-4">Power Query es una de las herramientas más poderosas dentro del ecosistema de Power BI. Es el motor que te permite conectar, transformar y combinar datos de múltiples fuentes antes de cargarlos en tu modelo de datos.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">¿Por qué es importante Power Query?</h4>
                    <p class="mb-2">Se estima que los analistas de datos dedican entre el 60% y el 80% de su tiempo a la preparación de datos. Power Query automatiza y simplifica este proceso, permitiéndote:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Limpiar datos inconsistentes o con errores</li>
                        <li>Combinar datos de múltiples fuentes</li>
                        <li>Transformar datos en el formato adecuado para análisis</li>
                        <li>Crear procesos reproducibles y documentados</li>
                        <li>Actualizar automáticamente las transformaciones cuando cambian los datos de origen</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">¿Qué es Power Query?</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <p class="mb-3">Power Query es una tecnología de conexión de datos que permite descubrir, conectar, combinar y refinar fuentes de datos para satisfacer tus necesidades de análisis.</p>

                        <p class="mb-3">Aunque está integrado en Power BI Desktop, Power Query también está disponible en:</p>

                        <ul class="list-disc pl-5 mb-4">
                            <li>Excel (como "Obtener y transformar datos")</li>
                            <li>Power BI Service (para flujos de datos)</li>
                            <li>Power Apps (para flujos de datos)</li>
                            <li>Analysis Services</li>
                            <li>Dynamics 365</li>
                        </ul>

                        <p>Esta consistencia te permite transferir tus habilidades entre diferentes productos de Microsoft.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-3">Características clave de Power Query</h4>

                        <div class="space-y-3">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-blue-800 font-bold">1</span>
                                </div>
                                <div>
                                    <h5 class="font-medium">Motor ETL</h5>
                                    <p class="text-sm text-gray-600">Herramienta especializada para Extraer, Transformar y Cargar datos.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-blue-800 font-bold">2</span>
                                </div>
                                <div>
                                    <h5 class="font-medium">Lenguaje M</h5>
                                    <p class="text-sm text-gray-600">Utiliza un lenguaje de fórmulas llamado M (Power Query Formula Language) para realizar transformaciones.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-blue-800 font-bold">3</span>
                                </div>
                                <div>
                                    <h5 class="font-medium">Interfaz visual</h5>
                                    <p class="text-sm text-gray-600">Proporciona una interfaz gráfica intuitiva que genera código M automáticamente.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-blue-800 font-bold">4</span>
                                </div>
                                <div>
                                    <h5 class="font-medium">Pasos reproducibles</h5>
                                    <p class="text-sm text-gray-600">Registra cada transformación como un paso, creando un proceso reproducible y documentado.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-blue-800 font-bold">5</span>
                                </div>
                                <div>
                                    <h5 class="font-medium">Actualizable</h5>
                                    <p class="text-sm text-gray-600">Las transformaciones se aplican automáticamente cuando se actualizan los datos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Interfaz del Editor de Power Query</h3>

                <p class="mb-4">Cuando haces clic en "Transformar datos" al conectarte a una fuente, se abre el Editor de Power Query. Esta interfaz está diseñada para facilitar la transformación de datos sin necesidad de programación avanzada.</p>

                <div class="flex items-center justify-center mb-6">
                    <img src="assets/img/power-query-interface.png" alt="Interfaz del Editor de Power Query" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Área</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ubicación</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Función</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Características clave</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Cinta de opciones</td>
                                <td class="py-2 px-4 border-b border-gray-200">Parte superior</td>
                                <td class="py-2 px-4 border-b border-gray-200">Contiene todas las transformaciones disponibles organizadas por categorías</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Transformaciones comunes</li>
                                        <li>Operaciones de columna</li>
                                        <li>Operaciones de tabla</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Panel de consultas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Lado izquierdo</td>
                                <td class="py-2 px-4 border-b border-gray-200">Muestra todas las consultas (tablas) disponibles en el modelo</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Organización en carpetas</li>
                                        <li>Consultas vinculadas</li>
                                        <li>Parámetros</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Vista previa de datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Centro</td>
                                <td class="py-2 px-4 border-b border-gray-200">Muestra una vista previa de los datos con las transformaciones aplicadas</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Muestra primeras 1000 filas</li>
                                        <li>Tipos de datos por colores</li>
                                        <li>Filtros de columna</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Panel de Pasos Aplicados</td>
                                <td class="py-2 px-4 border-b border-gray-200">Lado derecho</td>
                                <td class="py-2 px-4 border-b border-gray-200">Registra cada transformación como un paso secuencial</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Secuencia de transformaciones</li>
                                        <li>Edición de pasos</li>
                                        <li>Eliminación de pasos</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Barra de fórmulas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Debajo de la cinta</td>
                                <td class="py-2 px-4 border-b border-gray-200">Muestra y permite editar la fórmula M del paso seleccionado</td>
                                <td class="py-2 px-4 border-b border-gray-200">
                                    <ul class="list-disc pl-5 text-sm">
                                        <li>Edición avanzada</li>
                                        <li>Sintaxis M</li>
                                        <li>Personalización</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Panel de Pasos Aplicados: El Corazón de Power Query</h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="md:col-span-1">
                        <div class="bg-white p-4 rounded-lg shadow-md h-full">
                            <h4 class="font-bold text-gray-800 mb-3">¿Qué es?</h4>
                            <p class="text-sm">El panel de Pasos Aplicados registra cada transformación que realizas en tus datos como un paso secuencial. Cada paso es una instrucción en lenguaje M que modifica los datos de alguna manera.</p>

                            <div class="mt-4">
                                <img src="assets/img/applied-steps.png" alt="Panel de Pasos Aplicados" class="max-w-full h-auto rounded-lg">
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-2">
                        <div class="bg-white p-4 rounded-lg shadow-md h-full">
                            <h4 class="font-bold text-gray-800 mb-3">Beneficios clave</h4>

                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 text-green-500 mr-2">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">Registra cada transformación en orden secuencial</p>
                                        <p class="text-sm text-gray-600">Documenta automáticamente todo el proceso de transformación de datos.</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex-shrink-0 text-green-500 mr-2">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">Permite ver el efecto de cada paso individualmente</p>
                                        <p class="text-sm text-gray-600">Haz clic en cualquier paso para ver cómo se veían los datos en ese punto.</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex-shrink-0 text-green-500 mr-2">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">Facilita la depuración</p>
                                        <p class="text-sm text-gray-600">Puedes deshabilitar pasos temporalmente para identificar problemas.</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex-shrink-0 text-green-500 mr-2">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">Permite reorganizar, editar o eliminar pasos</p>
                                        <p class="text-sm text-gray-600">Modifica tu proceso de transformación en cualquier momento.</p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex-shrink-0 text-green-500 mr-2">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">Crea un proceso reproducible</p>
                                        <p class="text-sm text-gray-600">Las mismas transformaciones se aplicarán automáticamente cuando se actualicen los datos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Pasos comunes en Power Query</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>Origen:</strong> El primer paso que conecta a la fuente de datos original.</li>
                                <li><strong>Navegación:</strong> Selección de tablas o vistas específicas de la fuente.</li>
                                <li><strong>Tipo cambiado:</strong> Asignación de tipos de datos correctos a las columnas.</li>
                            </ul>
                        </div>
                        <div>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>Encabezados promovidos:</strong> Conversión de la primera fila en encabezados de columna.</li>
                                <li><strong>Columnas eliminadas:</strong> Eliminación de columnas innecesarias.</li>
                                <li><strong>Filas filtradas:</strong> Filtrado de filas según criterios específicos.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Tipos de Datos en Power Query</h3>

                <p class="mb-4">Power Query asigna tipos de datos a cada columna, indicados por iconos de colores en los encabezados. Es crucial verificar y corregir estos tipos para asegurar transformaciones y cálculos correctos.</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-blue-600 font-bold mr-2">Abc</span>
                            <h4 class="font-bold text-gray-800">Texto</h4>
                        </div>
                        <p class="text-sm mb-2">Cadenas de caracteres alfanuméricos.</p>
                        <p class="text-xs text-gray-600">Ejemplos: Nombres, direcciones, códigos de producto.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-green-600 font-bold mr-2">123</span>
                            <h4 class="font-bold text-gray-800">Número entero</h4>
                        </div>
                        <p class="text-sm mb-2">Valores numéricos sin decimales.</p>
                        <p class="text-xs text-gray-600">Ejemplos: Cantidades, conteos, edades.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-green-600 font-bold mr-2">1.23</span>
                            <h4 class="font-bold text-gray-800">Número decimal</h4>
                        </div>
                        <p class="text-sm mb-2">Valores numéricos con decimales.</p>
                        <p class="text-xs text-gray-600">Ejemplos: Precios, porcentajes, medidas.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-red-600 font-bold mr-2">📅</span>
                            <h4 class="font-bold text-gray-800">Fecha</h4>
                        </div>
                        <p class="text-sm mb-2">Valores de fecha sin componente de hora.</p>
                        <p class="text-xs text-gray-600">Ejemplos: Fechas de venta, fechas de nacimiento.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-red-600 font-bold mr-2">⏰</span>
                            <h4 class="font-bold text-gray-800">Fecha/Hora</h4>
                        </div>
                        <p class="text-sm mb-2">Valores que incluyen fecha y hora.</p>
                        <p class="text-xs text-gray-600">Ejemplos: Marcas de tiempo, registros de eventos.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-2">
                            <span class="text-purple-600 font-bold mr-2">✓/✗</span>
                            <h4 class="font-bold text-gray-800">Lógico</h4>
                        </div>
                        <p class="text-sm mb-2">Valores Verdadero/Falso (Sí/No).</p>
                        <p class="text-xs text-gray-600">Ejemplos: Indicadores, estados, flags.</p>
                    </div>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">Importancia de los tipos de datos correctos</h4>
                    <p class="mb-2">Asignar el tipo de dato correcto es fundamental porque:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Determina qué operaciones se pueden realizar con los datos (suma, promedio, etc.)</li>
                        <li>Afecta cómo se ordenan y filtran los valores</li>
                        <li>Influye en las visualizaciones que Power BI sugerirá</li>
                        <li>Impacta en el rendimiento y la memoria utilizada</li>
                        <li>Previene errores en cálculos y transformaciones</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Navegación Básica en Power Query</h3>

                <p class="mb-4">Aquí hay algunas acciones básicas que te ayudarán a navegar y trabajar eficientemente en el Editor de Power Query:</p>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Acción</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Cómo hacerlo</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Consejo útil</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Seleccionar columnas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Haz clic en el encabezado de la columna</td>
                                <td class="py-2 px-4 border-b border-gray-200">Ctrl+clic para seleccionar múltiples columnas no adyacentes</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Seleccionar filas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Haz clic en el número de fila</td>
                                <td class="py-2 px-4 border-b border-gray-200">Shift+clic para seleccionar un rango de filas</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Ver menú de columna</td>
                                <td class="py-2 px-4 border-b border-gray-200">Haz clic en la flecha desplegable en el encabezado</td>
                                <td class="py-2 px-4 border-b border-gray-200">Acceso rápido a filtros y transformaciones comunes</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Cambiar tipo de datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Clic derecho en columna > Cambiar tipo > Seleccionar tipo</td>
                                <td class="py-2 px-4 border-b border-gray-200">También en la pestaña Transformar > grupo Cualquier columna</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Filtrar datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Usar la flecha desplegable en el encabezado</td>
                                <td class="py-2 px-4 border-b border-gray-200">Puedes aplicar múltiples filtros en diferentes columnas</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Buscar en datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Ctrl+F o Inicio > Buscar</td>
                                <td class="py-2 px-4 border-b border-gray-200">Útil para localizar valores específicos en grandes conjuntos de datos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-green-800 mb-2">Consejo práctico</h4>
                    <p class="mb-2">Una de las mejores formas de aprender Power Query es explorar las opciones disponibles en la cinta de opciones. Cada pestaña contiene transformaciones específicas:</p>
                    <ul class="list-disc pl-5">
                        <li><strong>Inicio:</strong> Transformaciones más comunes y gestión de consultas</li>
                        <li><strong>Transformar:</strong> Operaciones para modificar columnas y filas</li>
                        <li><strong>Agregar columna:</strong> Crear nuevas columnas con diferentes métodos</li>
                        <li><strong>Vista:</strong> Opciones para personalizar la interfaz</li>
                    </ul>
                    <p class="mt-2">No te preocupes por "romper" algo. Siempre puedes deshacer acciones con Ctrl+Z o eliminar pasos del panel de Pasos Aplicados.</p>
                </div>

                <p class="mb-4">En el siguiente paso, aprenderemos a aplicar transformaciones específicas para limpiar y dar forma a nuestros datos utilizando las herramientas que ofrece Power Query.</p>
            </div>
        `,

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
        description: "En este paso, aprenderás las transformaciones más comunes y útiles en Power Query para limpiar y preparar tus datos.",

        // Contenido principal
        content: `
            <div class="mb-6">
                <p class="mb-4">Una vez que has conectado tus datos y te has familiarizado con la interfaz de Power Query, el siguiente paso es dominar las transformaciones fundamentales que te permitirán limpiar, dar forma y preparar tus datos para el análisis.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">¿Por qué son importantes las transformaciones?</h4>
                    <p class="mb-2">Los datos rara vez vienen en el formato exacto que necesitamos para el análisis. Las transformaciones nos permiten:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Limpiar datos inconsistentes o erróneos</li>
                        <li>Estandarizar formatos y valores</li>
                        <li>Reestructurar los datos para facilitar el análisis</li>
                        <li>Enriquecer los datos con cálculos y categorías adicionales</li>
                        <li>Combinar datos de múltiples fuentes de manera coherente</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Categorías de Transformaciones</h3>

                <p class="mb-4">Power Query ofrece una amplia variedad de transformaciones que podemos clasificar en tres categorías principales:</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">🔄</span>
                            <h4 class="font-bold text-gray-800">Transformaciones de Columnas</h4>
                        </div>
                        <p class="text-sm mb-3">Operaciones que modifican columnas existentes o crean nuevas columnas.</p>
                        <ul class="text-sm space-y-2 list-disc pl-5">
                            <li><strong>Cambiar tipo de datos</strong></li>
                            <li><strong>Reemplazar valores</strong></li>
                            <li><strong>Dividir columna</strong></li>
                            <li><strong>Columna personalizada</strong></li>
                        </ul>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">📋</span>
                            <h4 class="font-bold text-gray-800">Transformaciones de Filas</h4>
                        </div>
                        <p class="text-sm mb-3">Operaciones que filtran, ordenan o modifican filas completas.</p>
                        <ul class="text-sm space-y-2 list-disc pl-5">
                            <li><strong>Filtrar filas</strong></li>
                            <li><strong>Quitar duplicados</strong></li>
                            <li><strong>Mantener/quitar filas superiores</strong></li>
                            <li><strong>Quitar filas vacías</strong></li>
                        </ul>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">📊</span>
                            <h4 class="font-bold text-gray-800">Transformaciones de Tabla</h4>
                        </div>
                        <p class="text-sm mb-3">Operaciones que afectan a la estructura general de la tabla.</p>
                        <ul class="text-sm space-y-2 list-disc pl-5">
                            <li><strong>Transponer</strong></li>
                            <li><strong>Dinamizar/Anular dinamización</strong></li>
                            <li><strong>Combinar consultas</strong></li>
                            <li><strong>Anexar consultas</strong></li>
                        </ul>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Transformaciones de Columnas Esenciales</h3>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Transformación</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Cómo aplicarla</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Caso de uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Cambiar tipo de datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Asigna el tipo de datos correcto a una columna.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Selecciona la columna > pestaña Transformar > grupo Cualquier columna > Tipo de datos</td>
                                <td class="py-2 px-4 border-b border-gray-200">Convertir texto a fechas para análisis temporal, o texto a números para cálculos.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Reemplazar valores</td>
                                <td class="py-2 px-4 border-b border-gray-200">Sustituye valores específicos por otros en una columna.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Clic derecho en columna > Reemplazar valores</td>
                                <td class="py-2 px-4 border-b border-gray-200">Corregir errores de ortografía, estandarizar categorías (ej. "Norte", "NORTE" a "Norte").</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Dividir columna</td>
                                <td class="py-2 px-4 border-b border-gray-200">Divide una columna en múltiples basándose en un delimitador o posición.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Selecciona la columna > pestaña Transformar > Dividir columna</td>
                                <td class="py-2 px-4 border-b border-gray-200">Separar nombres completos en nombre y apellido, o direcciones en calle, ciudad, etc.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Columna personalizada</td>
                                <td class="py-2 px-4 border-b border-gray-200">Crea una nueva columna basada en una fórmula personalizada.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Agregar columna > Columna personalizada</td>
                                <td class="py-2 px-4 border-b border-gray-200">Calcular márgenes de beneficio, crear categorías basadas en condiciones, combinar texto.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Transformaciones de Filas Esenciales</h3>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Transformación</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Cómo aplicarla</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Caso de uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Filtrar filas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Elimina filas que no cumplen con criterios específicos.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Clic en flecha desplegable de columna > seleccionar filtros</td>
                                <td class="py-2 px-4 border-b border-gray-200">Mostrar solo ventas del último año, eliminar registros con valores nulos en campos críticos.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Quitar duplicados</td>
                                <td class="py-2 px-4 border-b border-gray-200">Elimina filas duplicadas basándose en una o más columnas.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Selecciona columnas > pestaña Inicio > Quitar filas > Quitar duplicados</td>
                                <td class="py-2 px-4 border-b border-gray-200">Eliminar transacciones duplicadas, crear una lista única de clientes o productos.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Mantener/quitar filas superiores</td>
                                <td class="py-2 px-4 border-b border-gray-200">Mantiene o elimina un número específico de filas desde el principio.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Inicio > Quitar filas > Mantener/quitar filas superiores</td>
                                <td class="py-2 px-4 border-b border-gray-200">Eliminar filas de encabezado adicionales, quitar filas de resumen al principio de un informe.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Quitar filas vacías</td>
                                <td class="py-2 px-4 border-b border-gray-200">Elimina filas que no contienen datos.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Inicio > Quitar filas > Quitar filas vacías</td>
                                <td class="py-2 px-4 border-b border-gray-200">Limpiar datos exportados que contienen líneas en blanco entre secciones.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Transformaciones de Tabla Esenciales</h3>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Transformación</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Cómo aplicarla</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Caso de uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Transponer</td>
                                <td class="py-2 px-4 border-b border-gray-200">Convierte filas en columnas y viceversa.</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Transformar > Transponer</td>
                                <td class="py-2 px-4 border-b border-gray-200">Convertir datos de formato horizontal a vertical o viceversa para facilitar el análisis.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Dinamizar/Anular dinamización</td>
                                <td class="py-2 px-4 border-b border-gray-200">Convierte valores de columna en columnas separadas (dinamizar) o viceversa (anular dinamización).</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Transformar > Dinamizar/Anular dinamización</td>
                                <td class="py-2 px-4 border-b border-gray-200">Convertir datos de formato ancho a largo para análisis o viceversa para presentación.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Combinar consultas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Une dos tablas basándose en columnas comunes (similar a JOIN en SQL).</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Inicio > Combinar consultas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Unir datos de ventas con información de productos o clientes basándose en IDs comunes.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Anexar consultas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Apila dos o más tablas con estructura similar (similar a UNION en SQL).</td>
                                <td class="py-2 px-4 border-b border-gray-200">Pestaña Inicio > Anexar consultas</td>
                                <td class="py-2 px-4 border-b border-gray-200">Combinar datos de ventas de diferentes períodos o regiones en una sola tabla.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Ejemplo Práctico: Limpieza de Datos de Ventas</h3>

                <p class="mb-4">Veamos un ejemplo práctico de cómo aplicar estas transformaciones para limpiar un conjunto de datos de ventas con problemas comunes:</p>

                <div class="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h4 class="font-bold text-gray-800 mb-3">Escenario: Tabla de ventas con problemas comunes</h4>

                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4">
                            <p class="font-medium">Paso 1: Cambiar tipos de datos</p>
                            <p class="text-sm text-gray-600 mb-2">Problema: Las fechas están como texto y los valores numéricos no tienen el formato correcto.</p>
                            <div class="bg-gray-100 p-2 rounded text-xs">
                                <code>Seleccionar columna 'Fecha' > Transformar > Tipo de datos > Fecha</code>
                            </div>
                            <p class="text-sm text-green-600 mt-1">Resultado: Las fechas ahora se reconocen correctamente para filtrado y análisis temporal.</p>
                        </div>

                        <div class="border-l-4 border-blue-500 pl-4">
                            <p class="font-medium">Paso 2: Reemplazar valores inconsistentes</p>
                            <p class="text-sm text-gray-600 mb-2">Problema: La columna 'Categoría' tiene valores inconsistentes como 'Electronicos' y 'Electrónicos'.</p>
                            <div class="bg-gray-100 p-2 rounded text-xs">
                                <code>Clic derecho en 'Categoría' > Reemplazar valores > Valor a buscar: 'Electronicos' > Reemplazar con: 'Electrónicos'</code>
                            </div>
                            <p class="text-sm text-green-600 mt-1">Resultado: Categorías estandarizadas para análisis consistente.</p>
                        </div>

                        <div class="border-l-4 border-blue-500 pl-4">
                            <p class="font-medium">Paso 3: Quitar filas con valores nulos en campos críticos</p>
                            <p class="text-sm text-gray-600 mb-2">Problema: Algunas filas tienen valores nulos en el campo 'ID_Producto', lo que podría distorsionar el análisis.</p>
                            <div class="bg-gray-100 p-2 rounded text-xs">
                                <code>Clic en flecha de 'ID_Producto' > Filtros > Desmarcar 'Null'</code>
                            </div>
                            <p class="text-sm text-green-600 mt-1">Resultado: Eliminación de transacciones incompletas que podrían distorsionar el análisis.</p>
                        </div>

                        <div class="border-l-4 border-blue-500 pl-4">
                            <p class="font-medium">Paso 4: Crear columna calculada para margen de beneficio</p>
                            <p class="text-sm text-gray-600 mb-2">Problema: Necesitamos calcular el margen de beneficio para cada venta.</p>
                            <div class="bg-gray-100 p-2 rounded text-xs">
                                <code>Agregar columna > Columna personalizada > Nombre: 'Margen' > Fórmula: [Precio_Venta] - [Costo]</code>
                            </div>
                            <p class="text-sm text-green-600 mt-1">Resultado: Nueva columna que facilita el análisis de rentabilidad.</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Mejores Prácticas para Transformaciones</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Nombrar pasos claramente</h4>
                        <p class="text-sm mb-2">Renombra los pasos en el panel de Pasos Aplicados con nombres descriptivos para facilitar la comprensión y mantenimiento.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>Clic derecho en un paso > Cambiar nombre</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Ejemplo: Cambiar "Tipo cambiado" por "Convertir Fecha a tipo Fecha"</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Orden de transformaciones</h4>
                        <p class="text-sm mb-2">Filtra y elimina datos innecesarios al principio para mejorar el rendimiento de pasos posteriores.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>1. Filtrar filas no deseadas</code><br>
                            <code>2. Eliminar columnas innecesarias</code><br>
                            <code>3. Luego aplicar transformaciones más complejas</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Trabajar con menos datos acelera las transformaciones siguientes.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Comentar pasos complejos</h4>
                        <p class="text-sm mb-2">Añade comentarios a pasos complejos o no obvios para documentar tu lógica.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>Clic derecho en un paso > Propiedades > Descripción</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Especialmente útil para fórmulas personalizadas o transformaciones poco comunes.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Verificar resultados</h4>
                        <p class="text-sm mb-2">Revisa regularmente los resultados de tus transformaciones para asegurarte de que funcionan como esperas.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>Haz clic en cada paso para ver cómo cambian los datos</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Es más fácil corregir problemas inmediatamente que encontrarlos más tarde.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Crear consultas de referencia</h4>
                        <p class="text-sm mb-2">Para transformaciones complejas, crea consultas intermedias de referencia para dividir el proceso en pasos manejables.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>Clic derecho en una consulta > Referencia</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">Facilita la depuración y mejora la organización de transformaciones complejas.</p>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Usar funciones M para casos avanzados</h4>
                        <p class="text-sm mb-2">Para transformaciones más complejas, aprende a usar el lenguaje M directamente en columnas personalizadas.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <code>Agregar columna > Columna personalizada > Fórmula avanzada</code>
                        </div>
                        <p class="text-xs text-gray-600 mt-2">El lenguaje M ofrece funcionalidades que no están disponibles en la interfaz gráfica.</p>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo importante: Transformaciones vs. Medidas DAX</h4>
                    <p class="mb-2">Es importante entender cuándo usar transformaciones en Power Query y cuándo usar medidas DAX en el modelo:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <h5 class="font-bold text-sm mb-1">Usa Power Query para:</h5>
                            <ul class="list-disc pl-5 text-sm space-y-1">
                                <li>Limpiar y preparar datos antes de cargarlos</li>
                                <li>Combinar datos de múltiples fuentes</li>
                                <li>Crear columnas que necesitas en todas las visualizaciones</li>
                                <li>Transformaciones estructurales (transponer, dinamizar)</li>
                                <li>Operaciones que solo necesitas hacer una vez</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-bold text-sm mb-1">Usa DAX para:</h5>
                            <ul class="list-disc pl-5 text-sm space-y-1">
                                <li>Cálculos que dependen de selecciones del usuario</li>
                                <li>Agregaciones (sumas, promedios, etc.)</li>
                                <li>Análisis de tiempo (comparaciones año tras año)</li>
                                <li>Cálculos que necesitan responder a filtros</li>
                                <li>Medidas que cambian según el contexto</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Flujo de Trabajo Recomendado</h3>

                <p class="mb-4">Para aprovechar al máximo Power Query, te recomendamos seguir este flujo de trabajo para tus transformaciones:</p>

                <div class="relative mb-6">
                    <div class="flex flex-wrap justify-between items-start relative">
                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">1</div>
                            <h5 class="font-bold">Explorar</h5>
                            <p class="text-xs">Examina tus datos para identificar problemas y necesidades</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[19%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">2</div>
                            <h5 class="font-bold">Limpiar</h5>
                            <p class="text-xs">Corrige tipos de datos, valores inconsistentes y errores</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[39%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">3</div>
                            <h5 class="font-bold">Transformar</h5>
                            <p class="text-xs">Reestructura los datos al formato necesario para análisis</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[59%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">4</div>
                            <h5 class="font-bold">Enriquecer</h5>
                            <p class="text-xs">Añade columnas calculadas y categorías útiles</p>
                        </div>

                        <div class="hidden md:block absolute top-12 left-[79%] w-[12%] border-t-2 border-dashed border-gray-400"></div>

                        <div class="z-10 bg-white p-3 rounded-lg shadow-md mb-4 w-full md:w-[18%] text-center">
                            <div class="text-xl font-bold mb-1">5</div>
                            <h5 class="font-bold">Documentar</h5>
                            <p class="text-xs">Nombra y comenta pasos para facilitar mantenimiento</p>
                        </div>
                    </div>
                </div>

                <p class="mb-4">Dominar las transformaciones fundamentales en Power Query te permitirá preparar tus datos de manera eficiente para el análisis, ahorrando tiempo y asegurando resultados más precisos. En el siguiente paso, aprenderemos a crear relaciones entre tablas para construir un modelo de datos efectivo.</p>
            </div>
        `,

        // Categorías de transformaciones
        transformationCategories: [
            {
                category: "Transformaciones de Columnas",
                icon: "🔄",
                description: "Operaciones que modifican columnas existentes o crean nuevas columnas.",
                transformations: [
                    {
                        name: "Cambiar tipo de datos",
                        description: "Asigna el tipo de datos correcto a una columna.",
                        howTo: "Selecciona la columna > pestaña Transformar > grupo Cualquier columna > Tipo de datos",
                        importance: "Fundamental para cálculos correctos y visualizaciones adecuadas."
                    },
                    {
                        name: "Reemplazar valores",
                        description: "Sustituye valores específicos por otros en una columna.",
                        howTo: "Clic derecho en columna > Reemplazar valores",
                        importance: "Útil para corregir errores de entrada o estandarizar valores."
                    },
                    {
                        name: "Dividir columna",
                        description: "Divide una columna en múltiples basándose en un delimitador o posición.",
                        howTo: "Selecciona la columna > pestaña Transformar > Dividir columna",
                        importance: "Ideal para separar nombres completos, direcciones o datos combinados."
                    },
                    {
                        name: "Columna personalizada",
                        description: "Crea una nueva columna basada en una fórmula personalizada.",
                        howTo: "Pestaña Agregar columna > Columna personalizada",
                        importance: "Permite cálculos complejos y transformaciones avanzadas."
                    }
                ]
            },
            {
                category: "Transformaciones de Filas",
                icon: "📋",
                description: "Operaciones que filtran, ordenan o modifican filas completas.",
                transformations: [
                    {
                        name: "Filtrar filas",
                        description: "Elimina filas que no cumplen con criterios específicos.",
                        howTo: "Clic en flecha desplegable de columna > seleccionar filtros",
                        importance: "Fundamental para eliminar datos irrelevantes o erróneos."
                    },
                    {
                        name: "Quitar duplicados",
                        description: "Elimina filas duplicadas basándose en una o más columnas.",
                        howTo: "Selecciona columnas > pestaña Inicio > Quitar filas > Quitar duplicados",
                        importance: "Esencial para datos limpios y análisis precisos."
                    },
                    {
                        name: "Mantener/quitar filas superiores",
                        description: "Mantiene o elimina un número específico de filas desde el principio.",
                        howTo: "Pestaña Inicio > Quitar filas > Mantener/quitar filas superiores",
                        importance: "Útil para eliminar encabezados adicionales o filas de resumen."
                    },
                    {
                        name: "Quitar filas vacías",
                        description: "Elimina filas que no contienen datos.",
                        howTo: "Pestaña Inicio > Quitar filas > Quitar filas vacías",
                        importance: "Ayuda a limpiar conjuntos de datos con espacios en blanco."
                    }
                ]
            },
            {
                category: "Transformaciones de Tabla",
                icon: "📊",
                description: "Operaciones que afectan a la estructura general de la tabla.",
                transformations: [
                    {
                        name: "Transponer",
                        description: "Convierte filas en columnas y viceversa.",
                        howTo: "Pestaña Transformar > Transponer",
                        importance: "Útil cuando los datos están en formato 'ancho' en lugar de 'largo' o viceversa."
                    },
                    {
                        name: "Dinamizar/Anular dinamización",
                        description: "Convierte valores de columna en columnas separadas (dinamizar) o viceversa (anular dinamización).",
                        howTo: "Pestaña Transformar > Dinamizar/Anular dinamización",
                        importance: "Fundamental para reestructurar datos para análisis específicos."
                    },
                    {
                        name: "Combinar consultas",
                        description: "Une dos tablas basándose en columnas comunes (similar a JOIN en SQL).",
                        howTo: "Pestaña Inicio > Combinar consultas",
                        importance: "Esencial para relacionar datos de diferentes fuentes."
                    },
                    {
                        name: "Anexar consultas",
                        description: "Apila dos o más tablas con estructura similar (similar a UNION en SQL).",
                        howTo: "Pestaña Inicio > Anexar consultas",
                        importance: "Útil para consolidar datos del mismo tipo de diferentes períodos o fuentes."
                    }
                ]
            }
        ],

        // Ejemplos prácticos
        practicalExamples: [
            {
                title: "Limpieza de datos de ventas",
                scenario: "Tenemos una tabla de ventas con problemas comunes de datos.",
                steps: [
                    {
                        description: "Cambiar tipos de datos (fechas, números)",
                        code: "Seleccionar columna 'Fecha' > Transformar > Tipo de datos > Fecha",
                        result: "Las fechas ahora se reconocen correctamente para filtrado y análisis temporal."
                    },
                    {
                        description: "Reemplazar valores inconsistentes",
                        code: "Clic derecho en 'Categoría' > Reemplazar valores > Valor a buscar: 'Electronicos' > Reemplazar con: 'Electrónicos'",
                        result: "Categorías estandarizadas para análisis consistente."
                    },
                    {
                        description: "Quitar filas con valores nulos en campos críticos",
                        code: "Clic en flecha de 'ID_Producto' > Filtros > Desmarcar 'Null'",
                        result: "Eliminación de transacciones incompletas que podrían distorsionar el análisis."
                    },
                    {
                        description: "Crear columna calculada para margen de beneficio",
                        code: "Agregar columna > Columna personalizada > Nombre: 'Margen' > Fórmula: [Precio_Venta] - [Costo]",
                        result: "Nueva columna que facilita el análisis de rentabilidad."
                    }
                ]
            }
        ],

        // Mejores prácticas
        bestPractices: [
            {
                title: "Nombrar pasos claramente",
                description: "Renombra los pasos en el panel de Pasos Aplicados con nombres descriptivos para facilitar la comprensión y mantenimiento.",
                how: "Clic derecho en un paso > Cambiar nombre"
            },
            {
                title: "Orden de transformaciones",
                description: "Filtra y elimina datos innecesarios al principio para mejorar el rendimiento de pasos posteriores.",
                why: "Trabajar con menos datos acelera las transformaciones siguientes."
            },
            {
                title: "Comentar pasos complejos",
                description: "Añade comentarios a pasos complejos o no obvios para documentar tu lógica.",
                how: "Clic derecho en un paso > Propiedades > Descripción"
            },
            {
                title: "Verificar resultados",
                description: "Revisa regularmente los resultados de tus transformaciones para asegurarte de que funcionan como esperas.",
                why: "Es más fácil corregir problemas inmediatamente que encontrarlos más tarde."
            },
            {
                title: "Crear consultas de referencia",
                description: "Para transformaciones complejas, crea consultas intermedias de referencia para dividir el proceso en pasos manejables.",
                how: "Clic derecho en una consulta > Referencia"
            }
        ],

        // Ejercicio práctico
        exercise: {
            title: "Ejercicio: Aplicar Transformaciones Fundamentales",
            description: "Continuando con nuestro conjunto de datos de ventas, aplicaremos varias transformaciones clave:",
            steps: [
                "Cambia los tipos de datos de las columnas (Fecha a tipo Fecha, Ventas a Decimal, etc.)",
                "Filtra para mostrar solo ventas del último año",
                "Reemplaza valores inconsistentes en la columna 'Región' (ej. 'Norte' y 'NORTE' a 'Norte')",
                "Crea una columna personalizada 'Trimestre' basada en la columna 'Fecha'",
                "Elimina las columnas innecesarias para el análisis",
                "Ordena los datos por fecha y monto de venta"
            ],
            expectedResult: "Una tabla limpia y bien estructurada lista para el análisis."
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "Esta sección te guiará paso a paso en la aplicación de transformaciones fundamentales en Power Query.",
            exercises: [
                {
                    title: "Limpieza de datos de ventas",
                    description: "Practica la limpieza de un conjunto de datos de ventas con problemas comunes.",
                    steps: [
                        "Abre el archivo 'Ventas_Ejercicio.xlsx' proporcionado en los recursos",
                        "Conecta a la tabla 'Ventas' usando Power Query",
                        "Cambia el tipo de datos de la columna 'Fecha' a Fecha",
                        "Cambia el tipo de datos de las columnas 'Monto', 'Costo' y 'Cantidad' a Decimal",
                        "Filtra la columna 'Región' para eliminar valores vacíos",
                        "Reemplaza los valores 'N/A' en la columna 'Categoría' por 'Sin categorizar'",
                        "Crea una columna personalizada 'Beneficio' con la fórmula [Monto] - [Costo]",
                        "Elimina las columnas que no necesitarás para el análisis ('ID_Interno', 'Notas')",
                        "Ordena los datos por 'Fecha' en orden ascendente",
                        "Carga los datos transformados en Power BI"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te proporcionará una guía detallada para dominar las transformaciones fundamentales en Power Query, con verificaciones para asegurar tu comprensión.",
            checkpoints: [
                "He identificado al menos tres tipos diferentes de transformaciones que puedo aplicar a mis datos",
                "Entiendo la diferencia entre transformaciones de columnas, filas y tablas",
                "Puedo cambiar correctamente los tipos de datos de las columnas",
                "Sé cómo filtrar datos para eliminar valores no deseados",
                "Puedo crear columnas personalizadas con fórmulas básicas",
                "Entiendo cómo combinar datos de diferentes tablas",
                "He practicado la limpieza de datos con al menos un conjunto de datos"
            ],
            additionalResources: [
                {
                    title: "Guía completa de transformaciones en Power Query",
                    url: "https://docs.microsoft.com/es-es/power-query/power-query-ui",
                    description: "Documentación oficial de Microsoft sobre todas las transformaciones disponibles"
                },
                {
                    title: "Ejercicios adicionales de transformación de datos",
                    url: "assets/exercises/transformaciones_adicionales.xlsx",
                    description: "Archivo con ejercicios adicionales para practicar diferentes transformaciones"
                }
            ]
        },

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "transform-quiz-3",
            question: "¿Cuál de las siguientes transformaciones deberías usar para convertir una tabla donde cada producto es una columna, a un formato donde haya una sola columna de 'Producto' y otra de 'Valor'?",
            options: [
                "Transponer",
                "Anular dinamización",
                "Dividir columna",
                "Combinar consultas"
            ],
            correctIndex: 1
        }
    },

    // Paso 4: Modelado Básico: Creación de Relaciones
    step4: {
        title: "Modelado Básico: Creación de Relaciones",
        description: "En este paso, aprenderás a crear relaciones entre tablas para construir un modelo de datos efectivo en Power BI.",

        // Contenido principal
        content: `
            <div class="mb-6">
                <p class="mb-4">Una vez que has limpiado y transformado tus datos, el siguiente paso crucial es crear relaciones entre las diferentes tablas. Las relaciones son el corazón de un modelo de datos efectivo en Power BI, permitiéndote combinar información de múltiples fuentes para obtener insights más profundos.</p>

                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-blue-800 mb-2">¿Por qué son importantes las relaciones?</h4>
                    <p class="mb-2">Las relaciones entre tablas permiten:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Analizar datos de múltiples tablas simultáneamente</li>
                        <li>Crear visualizaciones que combinen campos de diferentes tablas</li>
                        <li>Filtrar datos en una tabla basándose en selecciones en otra tabla</li>
                        <li>Mantener un modelo de datos normalizado y eficiente</li>
                        <li>Implementar cálculos complejos que atraviesan múltiples tablas</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Conceptos Fundamentales de Relaciones</h3>

                <div class="mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h4 class="font-bold text-gray-800 mb-2">¿Qué es una relación?</h4>
                        <p class="mb-2">Una relación es una conexión entre dos tablas a través de campos comunes, que permite a Power BI entender cómo se relacionan los datos entre sí.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-sm"><strong>Ejemplo:</strong> Relacionar una tabla de Ventas con una tabla de Productos a través del campo 'ID_Producto' permite analizar las ventas por categoría de producto, precio, o cualquier otro atributo del producto.</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mb-6">
                        <img src="assets/img/relationship-example.png" alt="Ejemplo de relación entre tablas" class="max-w-full h-auto rounded-lg shadow-md">
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Cardinalidad de Relaciones</h3>

                <p class="mb-4">La cardinalidad define cómo se relacionan los registros entre las tablas conectadas. Existen tres tipos principales:</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">1:N</span>
                            <h4 class="font-bold text-gray-800">Uno a muchos</h4>
                        </div>
                        <p class="text-sm mb-3">Cada registro en la primera tabla puede relacionarse con múltiples registros en la segunda tabla.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ejemplo:</strong> Un producto puede tener muchas ventas.</p>
                        </div>
                        <div class="mt-3 text-xs text-green-600">
                            <p>✓ Más común en Power BI</p>
                            <p>✓ Recomendada para la mayoría de los casos</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">1:1</span>
                            <h4 class="font-bold text-gray-800">Uno a uno</h4>
                        </div>
                        <p class="text-sm mb-3">Cada registro en la primera tabla se relaciona con exactamente un registro en la segunda tabla.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ejemplo:</strong> Un empleado tiene un único perfil de usuario.</p>
                        </div>
                        <div class="mt-3 text-xs text-yellow-600">
                            <p>⚠️ Menos común en Power BI</p>
                            <p>⚠️ Generalmente, es mejor combinar las tablas</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">N:N</span>
                            <h4 class="font-bold text-gray-800">Muchos a muchos</h4>
                        </div>
                        <p class="text-sm mb-3">Múltiples registros en la primera tabla pueden relacionarse con múltiples registros en la segunda tabla.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ejemplo:</strong> Estudiantes y cursos (un estudiante puede tomar varios cursos, y un curso puede tener varios estudiantes).</p>
                        </div>
                        <div class="mt-3 text-xs text-yellow-600">
                            <p>⚠️ Requiere una tabla puente</p>
                            <p>⚠️ Más complejo de implementar y entender</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Dirección del Filtro</h3>

                <p class="mb-4">La dirección del filtro define cómo se propagan los filtros entre tablas relacionadas:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">→</span>
                            <h4 class="font-bold text-gray-800">Única (predeterminada)</h4>
                        </div>
                        <p class="text-sm mb-3">Los filtros se propagan de la tabla 'uno' a la tabla 'muchos'.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ejemplo:</strong> Filtrar por categoría de producto filtrará las ventas relacionadas, pero filtrar por región de ventas no filtrará los productos.</p>
                        </div>
                        <div class="mt-3 text-xs text-green-600">
                            <p>✓ Opción predeterminada y recomendada</p>
                            <p>✓ Mejor rendimiento</p>
                            <p>✓ Evita ambigüedades en el modelo</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-2xl mr-2">↔️</span>
                            <h4 class="font-bold text-gray-800">Bidireccional</h4>
                        </div>
                        <p class="text-sm mb-3">Los filtros se propagan en ambas direcciones.</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ejemplo:</strong> Filtrar por categoría de producto filtrará las ventas relacionadas, Y filtrar por región de ventas también filtrará los productos vendidos en esa región.</p>
                        </div>
                        <div class="mt-3 text-xs text-red-600">
                            <p>⚠️ Puede causar problemas de rendimiento</p>
                            <p>⚠️ Puede crear ambigüedades en el modelo</p>
                            <p>⚠️ Usar solo cuando sea absolutamente necesario</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-yellow-800 mb-2">Integridad Referencial</h4>
                    <p class="mb-2">La opción "Asumir integridad referencial" indica a Power BI que todos los valores en la tabla 'muchos' existen en la tabla 'uno'.</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Actívala cuando:</strong> Estés seguro de que los datos cumplen esta condición (por ejemplo, todas las ventas tienen un producto válido).</li>
                        <li><strong>Beneficio:</strong> Puede mejorar el rendimiento de las consultas.</li>
                        <li><strong>Precaución:</strong> Si hay valores en la tabla 'muchos' que no existen en la tabla 'uno', podrías obtener resultados incorrectos.</li>
                    </ul>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Vista de Modelo en Power BI</h3>

                <p class="mb-4">La Vista de Modelo es donde crearás y gestionarás las relaciones entre tablas. Es una representación visual de tu modelo de datos.</p>

                <div class="flex items-center justify-center mb-6">
                    <img src="assets/img/model-view.png" alt="Vista de Modelo en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Característica</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Representación visual</td>
                                <td class="py-2 px-4 border-b border-gray-200">Muestra todas las tablas y sus relaciones como un diagrama, facilitando la comprensión del modelo.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Creación de relaciones</td>
                                <td class="py-2 px-4 border-b border-gray-200">Permite arrastrar y soltar campos entre tablas para crear relaciones de forma intuitiva.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Edición de propiedades</td>
                                <td class="py-2 px-4 border-b border-gray-200">Permite configurar cardinalidad, dirección de filtro e integridad referencial para cada relación.</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-200 font-medium">Organización</td>
                                <td class="py-2 px-4 border-b border-gray-200">Permite reorganizar las tablas para una mejor visualización del modelo y documentación.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Métodos para Crear Relaciones</h3>

                <p class="mb-4">Power BI ofrece varios métodos para crear relaciones entre tablas:</p>

                <div class="space-y-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <h4 class="font-bold text-gray-800">Método 1: Arrastrar y soltar (Recomendado)</h4>
                        </div>
                        <ol class="list-decimal pl-5 space-y-1 mb-3">
                            <li>Ve a la Vista de Modelo (segundo icono en la barra lateral izquierda)</li>
                            <li>Identifica las dos tablas que deseas relacionar</li>
                            <li>Haz clic en el campo de una tabla y arrástralo al campo correspondiente en la otra tabla</li>
                            <li>Configura las propiedades de la relación en el diálogo que aparece</li>
                        </ol>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ventaja:</strong> Método visual e intuitivo, ideal para la mayoría de los casos.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-blue-600 font-bold mr-2">⚙️</span>
                            <h4 class="font-bold text-gray-800">Método 2: Administrar relaciones</h4>
                        </div>
                        <ol class="list-decimal pl-5 space-y-1 mb-3">
                            <li>En la pestaña Modelado, haz clic en 'Administrar relaciones'</li>
                            <li>Haz clic en 'Nueva...'</li>
                            <li>Selecciona las tablas y campos para relacionar</li>
                            <li>Configura las propiedades de la relación</li>
                            <li>Haz clic en 'Aceptar'</li>
                        </ol>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ventaja:</strong> Útil cuando tienes muchas tablas o necesitas una vista más detallada de todas las relaciones.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <span class="text-yellow-600 font-bold mr-2">🔍</span>
                            <h4 class="font-bold text-gray-800">Método 3: Detección automática</h4>
                        </div>
                        <ol class="list-decimal pl-5 space-y-1 mb-3">
                            <li>En la pestaña Inicio, haz clic en 'Administrar relaciones'</li>
                            <li>Haz clic en 'Detección automática...'</li>
                            <li>Power BI intentará detectar posibles relaciones</li>
                            <li>Revisa las relaciones sugeridas y selecciona las que deseas crear</li>
                            <li>Haz clic en 'Aceptar'</li>
                        </ol>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <p class="text-xs"><strong>Ventaja:</strong> Útil como punto de partida, pero siempre revisa las relaciones detectadas para asegurarte de que son correctas.</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Diseño en Estrella: El Modelo Recomendado</h3>

                <p class="mb-4">El diseño en estrella es el modelo de datos más recomendado para Power BI. Consiste en:</p>

                <div class="flex flex-col md:flex-row gap-6 mb-6">
                    <div class="md:w-1/2">
                        <div class="bg-white p-4 rounded-lg shadow-md h-full">
                            <h4 class="font-bold text-gray-800 mb-3">Estructura del Modelo en Estrella</h4>
                            <ul class="list-disc pl-5 space-y-2">
                                <li><strong>Tablas de hechos</strong> (en el centro):
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>Contienen medidas y eventos transaccionales</li>
                                        <li>Ejemplos: Ventas, Pedidos, Presupuestos</li>
                                        <li>Suelen tener muchas filas</li>
                                    </ul>
                                </li>
                                <li><strong>Tablas de dimensiones</strong> (alrededor):
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>Contienen atributos descriptivos</li>
                                        <li>Ejemplos: Productos, Clientes, Fechas</li>
                                        <li>Suelen tener menos filas que las tablas de hechos</li>
                                    </ul>
                                </li>
                                <li><strong>Relaciones</strong>:
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>Uno a muchos (1:N)</li>
                                        <li>Desde dimensiones (lado "uno") hacia hechos (lado "muchos")</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="md:w-1/2">
                        <div class="bg-white p-4 rounded-lg shadow-md h-full">
                            <h4 class="font-bold text-gray-800 mb-3">Ventajas del Modelo en Estrella</h4>
                            <ul class="list-disc pl-5 space-y-2">
                                <li><strong>Rendimiento optimizado</strong>:
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>El motor de Power BI está optimizado para este diseño</li>
                                        <li>Consultas más rápidas y eficientes</li>
                                    </ul>
                                </li>
                                <li><strong>Facilidad de uso</strong>:
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>Modelo intuitivo y fácil de entender</li>
                                        <li>Simplifica la creación de medidas y visualizaciones</li>
                                    </ul>
                                </li>
                                <li><strong>Flexibilidad</strong>:
                                    <ul class="list-circle pl-5 mt-1">
                                        <li>Fácil de extender con nuevas dimensiones</li>
                                        <li>Adaptable a diferentes necesidades analíticas</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center mb-6">
                    <img src="assets/img/star-schema.png" alt="Modelo en Estrella" class="max-w-full h-auto rounded-lg shadow-md">
                </div>

                <h3 class="text-lg font-bold text-blue-800 mb-3">Mejores Prácticas para Relaciones</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Evita relaciones circulares</h4>
                        <p class="text-sm mb-2">No crees cadenas de relaciones que formen un círculo cerrado.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Causan ambigüedades en la propagación de filtros y pueden generar resultados incorrectos.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Usa relaciones bidireccionales con precaución</h4>
                        <p class="text-sm mb-2">Limita el uso de relaciones bidireccionales solo a casos donde sean absolutamente necesarias.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Pueden causar problemas de rendimiento y resultados inesperados.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Verifica la integridad de los datos</h4>
                        <p class="text-sm mb-2">Asegúrate de que los datos cumplen con la integridad referencial antes de crear relaciones.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Evita resultados incorrectos por datos no coincidentes.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Usa claves numéricas cuando sea posible</h4>
                        <p class="text-sm mb-2">Las relaciones basadas en columnas numéricas tienen mejor rendimiento que las basadas en texto.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Las comparaciones numéricas son más eficientes que las de texto.</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Crea una tabla de fechas dedicada</h4>
                        <p class="text-sm mb-2">Utiliza una tabla de fechas dedicada para análisis temporales en lugar de usar directamente las columnas de fecha en las tablas de hechos.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Permite análisis temporales más avanzados (año a la fecha, mes a la fecha, etc.).</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h4 class="font-bold text-gray-800 mb-2">Documenta tu modelo</h4>
                        <p class="text-sm mb-2">Organiza visualmente tu modelo y añade descripciones a las tablas y relaciones.</p>
                        <div class="bg-gray-100 p-2 rounded text-xs">
                            <p><strong>Por qué:</strong> Facilita el mantenimiento y la comprensión del modelo por parte de otros usuarios.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-red-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold text-red-800 mb-2">Problemas comunes y cómo evitarlos</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Relaciones ambiguas:</strong> Si hay múltiples rutas entre tablas, Power BI puede no saber cuál usar. Solución: Diseña un modelo claro en estrella.</li>
                        <li><strong>Relaciones inactivas:</strong> Solo una relación entre dos tablas puede estar activa. Las demás deben usarse explícitamente en fórmulas DAX. Solución: Usa la función USERELATIONSHIP en DAX cuando necesites usar relaciones inactivas.</li>
                        <li><strong>Problemas de rendimiento:</strong> Demasiadas relaciones bidireccionales pueden degradar el rendimiento. Solución: Limita su uso a lo estrictamente necesario.</li>
                        <li><strong>Datos no coincidentes:</strong> Valores en la tabla "muchos" que no existen en la tabla "uno". Solución: Limpia los datos antes de crear relaciones o usa la función TREATAS en DAX.</li>
                    </ul>
                </div>

                <p class="mb-4">Crear un modelo de datos efectivo con relaciones bien diseñadas es fundamental para el éxito de tus informes en Power BI. Un buen modelo facilita el análisis, mejora el rendimiento y permite obtener insights más profundos de tus datos.</p>
            </div>
        `,

        // Conceptos fundamentales de relaciones
        fundamentalConcepts: {
            title: "Conceptos Fundamentales de Relaciones",
            concepts: [
                {
                    concept: "¿Qué es una relación?",
                    description: "Una relación conecta dos tablas a través de campos comunes, permitiendo analizar datos de múltiples tablas juntas.",
                    example: "Relacionar una tabla de Ventas con una tabla de Productos a través del campo 'ID_Producto'."
                },
                {
                    concept: "Cardinalidad",
                    description: "Define cómo se relacionan los registros entre las tablas conectadas.",
                    types: [
                        {
                            name: "Uno a muchos (1:N)",
                            description: "Cada registro en la primera tabla puede relacionarse con múltiples registros en la segunda tabla.",
                            example: "Un producto puede tener muchas ventas.",
                            isCommon: true
                        },
                        {
                            name: "Uno a uno (1:1)",
                            description: "Cada registro en la primera tabla se relaciona con exactamente un registro en la segunda tabla.",
                            example: "Un empleado tiene un único perfil de usuario.",
                            isCommon: false
                        },
                        {
                            name: "Muchos a muchos (N:N)",
                            description: "Múltiples registros en la primera tabla pueden relacionarse con múltiples registros en la segunda tabla.",
                            example: "Estudiantes y cursos (un estudiante puede tomar varios cursos, y un curso puede tener varios estudiantes).",
                            isCommon: false,
                            note: "Requiere una tabla puente o se implementa con dos relaciones uno a muchos."
                        }
                    ]
                },
                {
                    concept: "Dirección del filtro",
                    description: "Define cómo se propagan los filtros entre tablas relacionadas.",
                    types: [
                        {
                            name: "Única (predeterminada)",
                            description: "Los filtros se propagan de la tabla 'uno' a la tabla 'muchos'.",
                            example: "Filtrar por categoría de producto filtrará las ventas relacionadas."
                        },
                        {
                            name: "Bidireccional",
                            description: "Los filtros se propagan en ambas direcciones.",
                            example: "Filtrar por región de ventas también filtrará los productos vendidos en esa región.",
                            warning: "Puede causar problemas de rendimiento y ambigüedades en el modelo si no se usa correctamente."
                        }
                    ]
                },
                {
                    concept: "Integridad referencial",
                    description: "Asegura que cada valor en la columna 'muchos' existe en la columna 'uno'.",
                    options: [
                        {
                            name: "Asumir integridad referencial",
                            description: "Power BI asume que todos los valores en la tabla 'muchos' existen en la tabla 'uno'.",
                            when: "Activar cuando estés seguro de que los datos cumplen esta condición."
                        }
                    ]
                }
            ]
        },

        // Vista de modelo
        modelView: {
            title: "Vista de Modelo en Power BI",
            description: "La Vista de Modelo es donde crearás y gestionarás las relaciones entre tablas.",
            howToAccess: "Haz clic en el icono de Vista de Modelo en la barra lateral izquierda (segundo icono).",
            keyFeatures: [
                {
                    feature: "Representación visual",
                    description: "Muestra todas las tablas y sus relaciones como un diagrama."
                },
                {
                    feature: "Creación de relaciones",
                    description: "Permite arrastrar y soltar campos entre tablas para crear relaciones."
                },
                {
                    feature: "Edición de propiedades",
                    description: "Permite configurar cardinalidad, dirección de filtro e integridad referencial."
                },
                {
                    feature: "Organización",
                    description: "Permite reorganizar las tablas para una mejor visualización del modelo."
                }
            ]
        },

        // Creación de relaciones
        creatingRelationships: {
            title: "Creación de Relaciones",
            methods: [
                {
                    method: "Arrastrar y soltar",
                    steps: [
                        "Ve a la Vista de Modelo",
                        "Identifica las dos tablas que deseas relacionar",
                        "Haz clic en el campo de una tabla y arrástralo al campo correspondiente en la otra tabla",
                        "Configura las propiedades de la relación en el diálogo que aparece"
                    ],
                    isPreferred: true
                },
                {
                    method: "Administrar relaciones",
                    steps: [
                        "En la pestaña Modelado, haz clic en 'Administrar relaciones'",
                        "Haz clic en 'Nueva...'",
                        "Selecciona las tablas y campos para relacionar",
                        "Configura las propiedades de la relación",
                        "Haz clic en 'Aceptar'"
                    ],
                    isPreferred: false,
                    when: "Útil cuando tienes muchas tablas o necesitas una vista más detallada."
                },
                {
                    method: "Detección automática",
                    steps: [
                        "En la pestaña Inicio, haz clic en 'Administrar relaciones'",
                        "Haz clic en 'Detección automática...'",
                        "Power BI intentará detectar posibles relaciones",
                        "Revisa las relaciones sugeridas y selecciona las que deseas crear",
                        "Haz clic en 'Aceptar'"
                    ],
                    isPreferred: false,
                    when: "Útil como punto de partida, pero siempre revisa las relaciones detectadas."
                }
            ]
        },

        // Mejores prácticas
        bestPractices: [
            {
                title: "Diseño en estrella",
                description: "Organiza tu modelo con tablas de hechos (transacciones) en el centro y tablas de dimensiones (categorías, productos, clientes) alrededor.",
                why: "Mejora el rendimiento y facilita la comprensión del modelo."
            },
            {
                title: "Evita relaciones circulares",
                description: "No crees cadenas de relaciones que formen un círculo cerrado.",
                why: "Causan ambigüedades en la propagación de filtros y pueden generar resultados incorrectos."
            },
            {
                title: "Usa relaciones bidireccionales con precaución",
                description: "Limita el uso de relaciones bidireccionales solo a casos donde sean absolutamente necesarias.",
                why: "Pueden causar problemas de rendimiento y resultados inesperados."
            },
            {
                title: "Verifica la integridad de los datos",
                description: "Asegúrate de que los datos cumplen con la integridad referencial antes de crear relaciones.",
                why: "Evita resultados incorrectos por datos no coincidentes."
            },
            {
                title: "Usa claves numéricas cuando sea posible",
                description: "Las relaciones basadas en columnas numéricas tienen mejor rendimiento que las basadas en texto.",
                why: "Las comparaciones numéricas son más eficientes que las de texto."
            }
        ],

        // Ejercicio práctico
        exercise: {
            title: "Ejercicio: Creación de un Modelo de Datos Básico",
            description: "Vamos a crear un modelo de datos relacionando varias tablas:",
            steps: [
                "Carga las tablas 'Ventas', 'Productos', 'Clientes' y 'Fechas' del archivo de ejemplo",
                "Ve a la Vista de Modelo",
                "Crea una relación entre 'Ventas' y 'Productos' usando el campo 'ID_Producto'",
                "Crea una relación entre 'Ventas' y 'Clientes' usando el campo 'ID_Cliente'",
                "Crea una relación entre 'Ventas' y 'Fechas' usando el campo 'Fecha'",
                "Configura todas las relaciones como 'Uno a muchos' con la dirección de filtro única",
                "Verifica que las relaciones se muestren correctamente en el diagrama"
            ],
            expectedResult: "Un modelo en estrella con la tabla de Ventas en el centro, conectada a las dimensiones."
        },

        // Contenido específico para cada modo
        studentContent: {
            description: "Esta sección te guiará paso a paso en la creación de un modelo de datos efectivo en Power BI.",
            exercises: [
                {
                    title: "Creación de un modelo de ventas",
                    description: "Practica la creación de un modelo de datos para análisis de ventas.",
                    steps: [
                        "Abre el archivo 'Modelo_Ventas.pbix' proporcionado en los recursos",
                        "Observa que ya se han cargado las tablas 'Ventas', 'Productos', 'Clientes' y 'Fechas'",
                        "Ve a la Vista de Modelo haciendo clic en el segundo icono de la barra lateral izquierda",
                        "Crea una relación entre 'Ventas' y 'Productos': arrastra el campo 'ID_Producto' de Ventas al campo 'ID_Producto' de Productos",
                        "En el diálogo, asegúrate de que la cardinalidad sea 'Uno a muchos' (1:*) con 'Productos' en el lado 'Uno'",
                        "Repite el proceso para relacionar 'Ventas' con 'Clientes' a través de 'ID_Cliente'",
                        "Relaciona 'Ventas' con 'Fechas' arrastrando el campo 'Fecha' de Ventas al campo 'Fecha' de la tabla Fechas",
                        "Reorganiza las tablas en el diagrama para que 'Ventas' esté en el centro y las demás alrededor",
                        "Guarda el archivo y crea una visualización simple para probar las relaciones"
                    ]
                }
            ]
        },

        selfGuidedContent: {
            description: "Esta sección te proporcionará una guía detallada para crear modelos de datos efectivos en Power BI, con verificaciones para asegurar tu comprensión.",
            checkpoints: [
                "Entiendo los diferentes tipos de cardinalidad en las relaciones (1:N, 1:1, N:N)",
                "Puedo identificar cuándo usar la dirección de filtro única vs. bidireccional",
                "Sé cómo crear relaciones usando el método de arrastrar y soltar",
                "Comprendo el concepto de modelo en estrella y su importancia",
                "Puedo identificar y evitar relaciones circulares",
                "He creado un modelo con al menos tres tablas relacionadas",
                "He verificado que mis relaciones funcionan correctamente creando visualizaciones que usan datos de múltiples tablas"
            ],
            additionalResources: [
                {
                    title: "Guía completa de modelado de datos en Power BI",
                    url: "https://docs.microsoft.com/es-es/power-bi/transform-model/desktop-relationships-understand",
                    description: "Documentación oficial de Microsoft sobre relaciones en Power BI"
                },
                {
                    title: "Ejercicio avanzado de modelado",
                    url: "assets/exercises/modelado_avanzado.pbix",
                    description: "Archivo con un ejercicio más complejo para practicar técnicas avanzadas de modelado"
                }
            ]
        },

        // Quiz para comprobar comprensión
        quiz: {
            questionId: "transform-quiz-4",
            question: "En un modelo de datos de Power BI, ¿cuál es la cardinalidad más común y recomendada para relacionar una tabla de hechos (como Ventas) con una tabla de dimensiones (como Productos)?",
            options: [
                "Muchos a muchos (N:N)",
                "Uno a uno (1:1)",
                "Uno a muchos (1:N) con la tabla de dimensiones en el lado 'uno'",
                "Uno a muchos (1:N) con la tabla de hechos en el lado 'uno'"
            ],
            correctIndex: 2
        }
    }
};

// Exportar el módulo
if (typeof module !== 'undefined') {
    module.exports = transformModuleContent;
}
