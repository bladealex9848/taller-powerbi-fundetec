/**
 * Cargador de contenido Markdown
 * Este archivo contiene funciones para cargar y procesar contenido desde archivos Markdown
 */

/**
 * Carga contenido desde un archivo Markdown
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {Promise<string>} Contenido del archivo
 */
async function loadMarkdownFile(filePath) {
    try {
        // Intentar primero con fetch (funciona mejor en servidores)
        try {
            const response = await fetch(filePath, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });

            if (response.ok) {
                return await response.text();
            }
        } catch (fetchError) {
            console.warn(`Fetch falló, intentando con XMLHttpRequest: ${fetchError}`);
        }

        // Si fetch falla, intentar con XMLHttpRequest
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, true);
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.setRequestHeader('Pragma', 'no-cache');

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    console.warn(`XMLHttpRequest falló con estado: ${xhr.status}`);
                    // Intentar cargar desde el contenido predefinido
                    resolve(null);
                }
            };

            xhr.onerror = function() {
                console.warn(`No se pudo cargar ${filePath}, usando contenido predefinido.`);
                resolve(null);
            };

            xhr.send();
        });
    } catch (error) {
        console.error(`Error al cargar el archivo ${filePath}:`, error);
        return null;
    }
}

/**
 * Convierte contenido Markdown a HTML
 * @param {string} markdown - Contenido Markdown
 * @returns {string} Contenido HTML
 */
function convertMarkdownToHTML(markdown) {
    if (!markdown) return '';

    // Esta es una implementación muy básica
    // En una aplicación real, se usaría una biblioteca como marked.js

    // Convertir encabezados
    let html = markdown
        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-blue-900 mb-4">$1</h1>')
        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-blue-900 mb-3">$1</h2>')
        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-blue-900 mb-2">$1</h3>')
        .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold text-blue-900 mb-2">$1</h4>')
        .replace(/^##### (.*$)/gm, '<h5 class="text-base font-bold text-blue-900 mb-2">$1</h5>');

    // Convertir párrafos
    html = html.replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre|<table|<p)(.*$)/gm, '<p class="mb-4">$1</p>');

    // Convertir énfasis
    html = html
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/~~(.*?)~~/g, '<del>$1</del>');

    // Convertir listas
    html = html
        .replace(/^\* (.*$)/gm, '<ul class="list-disc pl-5 mb-4"><li>$1</li></ul>')
        .replace(/^\d+\. (.*$)/gm, '<ol class="list-decimal pl-5 mb-4"><li>$1</li></ol>');

    // Corregir listas anidadas
    html = html
        .replace(/<\/ul>\s*<ul class="list-disc pl-5 mb-4">/g, '')
        .replace(/<\/ol>\s*<ol class="list-decimal pl-5 mb-4">/g, '');

    // Convertir enlaces
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');

    // Convertir imágenes
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto my-4">');

    // Convertir bloques de código
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>');

    // Convertir código en línea
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>');

    // Convertir citas
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic mb-4">$1</blockquote>');

    // Convertir líneas horizontales
    html = html.replace(/^---$/gm, '<hr class="my-6 border-t border-gray-300">');

    return html;
}

/**
 * Extrae metadatos de un archivo Markdown
 * @param {string} markdown - Contenido Markdown
 * @returns {Object} Metadatos extraídos
 */
function extractMarkdownMetadata(markdown) {
    if (!markdown) return {};

    const metadataRegex = /^---\n([\s\S]*?)\n---/;
    const match = markdown.match(metadataRegex);

    if (!match) return {};

    const metadataStr = match[1];
    const metadata = {};

    metadataStr.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                metadata[key.trim()] = value.slice(1, -1);
            } else {
                metadata[key.trim()] = value;
            }
        }
    });

    return metadata;
}

/**
 * Carga y procesa un archivo Markdown para un módulo
 * @param {string} moduleId - ID del módulo
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {Promise<Object>} Contenido procesado para el módulo
 */
async function loadModuleContent(moduleId, filePath) {
    const markdown = await loadMarkdownFile(filePath);
    if (!markdown) return null;

    const metadata = extractMarkdownMetadata(markdown);
    const content = markdown.replace(/^---\n[\s\S]*?\n---/, '').trim();
    const html = convertMarkdownToHTML(content);

    // Dividir el contenido en secciones para los pasos
    const sections = splitContentIntoSections(html);

    // Crear estructura de contenido para el módulo
    const moduleContent = {
        title: metadata.title || `Módulo ${moduleId}`,
        description: metadata.description || '',
        author: metadata.author || '',
        date: metadata.date || '',
        version: metadata.version || '1.0'
    };

    // Añadir secciones como pasos
    sections.forEach((section, index) => {
        moduleContent[`step${index + 1}`] = {
            title: section.title || `Paso ${index + 1}`,
            content: section.content || '',
            description: section.description || ''
        };
    });

    return moduleContent;
}

/**
 * Divide el contenido HTML en secciones basadas en encabezados
 * @param {string} html - Contenido HTML
 * @returns {Array<Object>} Array de secciones
 */
function splitContentIntoSections(html) {
    if (!html) return [];

    // Dividir por encabezados h2
    const sectionRegex = /<h2.*?>(.*?)<\/h2>([\s\S]*?)(?=<h2|$)/g;
    const sections = [];
    let match;

    while ((match = sectionRegex.exec(html)) !== null) {
        const title = match[1];
        const content = match[2];

        // Extraer la primera etiqueta p como descripción
        const descriptionMatch = content.match(/<p.*?>(.*?)<\/p>/);
        const description = descriptionMatch ? descriptionMatch[1] : '';

        sections.push({
            title,
            description,
            content
        });
    }

    // Si no hay secciones h2, usar todo el contenido como una sección
    if (sections.length === 0) {
        const titleMatch = html.match(/<h1.*?>(.*?)<\/h1>/);
        const title = titleMatch ? titleMatch[1] : 'Contenido';

        const descriptionMatch = html.match(/<p.*?>(.*?)<\/p>/);
        const description = descriptionMatch ? descriptionMatch[1] : '';

        sections.push({
            title,
            description,
            content: html
        });
    }

    return sections;
}

/**
 * Genera el HTML para el contenido de un paso específico
 * @param {Object} moduleContent - Objeto con el contenido del módulo
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso (0-based)
 * @param {string} userMode - Modo de usuario (estudiante, facilitador, autoguiado)
 * @returns {string} - HTML generado para el paso
 */
function generateStepContentHTML(moduleContent, moduleId, stepIndex, userMode) {
    // Obtener el paso actual
    const stepKey = `step${stepIndex + 1}`;
    const step = moduleContent[stepKey];

    if (!step) {
        return `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">🔍</div>
                <h4 class="text-xl font-bold mb-2">Paso no encontrado</h4>
                <p class="text-gray-600">No se encontró el contenido para este paso. Por favor, intenta con otro paso o módulo.</p>
            </div>
        `;
    }

    // Generar HTML para el paso
    let html = `
        <div class="step-content">
            <h3 class="text-2xl font-bold text-blue-900 mb-4">${step.title}</h3>
            <div class="content-body">
                ${step.content}
            </div>
    `;

    // Agregar contenido específico según el modo de usuario
    if (userMode === 'facilitador') {
        // Contenido específico para facilitadores
        const facilitatorNotes = getFacilitatorNotes(moduleId, stepIndex);
        html += `
            <div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded facilitator-content">
                <h4 class="font-bold text-red-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    Notas para el Facilitador
                </h4>

                <div class="mb-3">
                    <h5 class="font-semibold text-red-700 mb-1">Distribución de Tiempo Recomendada:</h5>
                    <ul class="list-disc ml-5 text-sm">
                        ${facilitatorNotes.timeAllocation.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="mb-3">
                    <h5 class="font-semibold text-red-700 mb-1">Puntos Clave a Enfatizar:</h5>
                    <ul class="list-disc ml-5 text-sm">
                        ${facilitatorNotes.keyPoints.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h5 class="font-semibold text-red-700 mb-1">Preguntas Frecuentes:</h5>
                    <div class="space-y-2">
                        ${facilitatorNotes.commonQuestions.map(qa => `
                            <div class="bg-white rounded p-2 shadow-sm">
                                <div class="font-medium text-red-700">${qa.question}</div>
                                <div class="text-sm mt-1">${qa.answer}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="mt-3 text-sm text-red-700 border-t border-red-200 pt-2">
                    <strong>Nota:</strong> Esta información es exclusiva para facilitadores y no es visible para los estudiantes.
                </div>
            </div>
        `;
    } else if (userMode === 'autoguiado') {
        // Contenido específico para modo autoguiado
        const selfGuidedContent = getSelfGuidedContent(moduleId, stepIndex);
        html += `
            <div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded self-guided-content">
                <h4 class="font-bold text-green-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Punto de Verificación
                </h4>

                <div class="mb-3">
                    <h5 class="font-semibold text-green-700 mb-1">Antes de continuar, verifica tu comprensión:</h5>
                    <ul class="list-disc ml-5">
                        ${selfGuidedContent.checkpoints.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="mb-3">
                    <h5 class="font-semibold text-green-700 mb-1">Ejercicio de Práctica:</h5>
                    <p class="mb-2">${selfGuidedContent.exercise.description}</p>
                    <div class="bg-white p-3 rounded border border-green-200">
                        <strong>Actividad:</strong> ${selfGuidedContent.exercise.activity}
                    </div>
                </div>

                <div class="mt-3 text-sm bg-green-100 p-2 rounded">
                    <strong>Consejo:</strong> ${selfGuidedContent.tip}
                </div>
            </div>
        `;
    } else {
        // Contenido específico para estudiantes (modo por defecto)
        const studentContent = getStudentContent(moduleId, stepIndex);
        if (studentContent.hasQuiz) {
            html += `
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded student-content">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                        </svg>
                        Comprueba tu Comprensión
                    </h4>

                    <div class="quiz-container">
                        <p class="font-medium mb-2">${studentContent.quiz.question}</p>
                        <div class="space-y-2">
                            ${studentContent.quiz.options.map((option, index) => `
                                <label class="flex flex-col p-3 rounded border border-blue-200 hover:bg-blue-100 cursor-pointer quiz-option" data-question="quiz-${moduleId}-${stepIndex}" data-correct="${option.isCorrect}">
                                    <div class="mb-3 font-medium">${option.text}</div>
                                    <div class="flex items-center mt-2 border-t pt-2 border-gray-100">
                                        <input type="radio" name="quiz-${moduleId}-${stepIndex}" value="${index}" class="mr-2">
                                        <span class="text-sm text-gray-600">Seleccionar esta respuesta</span>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                        <div class="mt-3">
                            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 check-answer-btn" data-question="quiz-${moduleId}-${stepIndex}">
                                Comprobar Respuesta
                            </button>
                            <div class="feedback-message mt-2 p-2 rounded hidden"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (studentContent.hasExample) {
            html += `
                <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded student-content">
                    <h4 class="font-bold text-yellow-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        Ejemplo Práctico
                    </h4>

                    <div class="example-container">
                        <p class="mb-2">${studentContent.example.description}</p>
                        <div class="bg-white p-3 rounded border border-yellow-200 font-mono text-sm overflow-x-auto">
                            ${studentContent.example.code}
                        </div>
                        <p class="mt-2 text-sm text-yellow-700">
                            <strong>Resultado:</strong> ${studentContent.example.result}
                        </p>
                    </div>
                </div>
            `;
        }
    }

    // Cerrar el contenedor principal
    html += `</div>`;

    return html;
}

/**
 * Obtiene las notas específicas para facilitadores según el módulo y paso
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso
 * @returns {Object} - Notas para facilitadores
 */
function getFacilitatorNotes(moduleId, stepIndex) {
    // Contenido predefinido para facilitadores según el módulo y paso
    const facilitatorContent = {
        intro: [
            {
                timeAllocation: [
                    "Introducción al tema: 5 minutos",
                    "Explicación de conceptos clave: 10 minutos",
                    "Preguntas y respuestas: 5 minutos"
                ],
                keyPoints: [
                    "Enfatizar la importancia del análisis de datos en el contexto laboral actual",
                    "Destacar cómo estas habilidades mejoran la empleabilidad",
                    "Relacionar con situaciones reales que enfrentarán los estudiantes"
                ],
                commonQuestions: [
                    {
                        question: "¿Es necesario tener conocimientos previos de programación?",
                        answer: "No, Power BI está diseñado para ser accesible a usuarios sin experiencia en programación, aunque conocimientos básicos de Excel son útiles."
                    },
                    {
                        question: "¿Funciona Power BI en Mac?",
                        answer: "Power BI Desktop solo está disponible nativamente para Windows. Los usuarios de Mac pueden utilizar máquinas virtuales o acceder a funcionalidades limitadas a través del servicio web."
                    }
                ]
            },
            {
                timeAllocation: [
                    "Presentación de Power BI: 5 minutos",
                    "Demostración de componentes: 10 minutos",
                    "Preguntas sobre licenciamiento: 5 minutos"
                ],
                keyPoints: [
                    "Aclarar la diferencia entre Power BI Desktop, Service y Mobile",
                    "Enfatizar que Desktop es gratuito y suficiente para el aprendizaje inicial",
                    "Mostrar ejemplos reales de cada componente si es posible"
                ],
                commonQuestions: [
                    {
                        question: "¿Cuánto cuesta Power BI?",
                        answer: "Power BI Desktop es completamente gratuito. Power BI Service tiene una versión gratuita con limitaciones y versiones de pago (Pro: $9.99/usuario/mes, Premium: basado en capacidad)."
                    },
                    {
                        question: "¿Se necesita una cuenta de Microsoft para usar Power BI?",
                        answer: "Para Power BI Desktop no es obligatorio, pero para publicar y compartir informes en el servicio sí se requiere una cuenta de Microsoft."
                    }
                ]
            },
            {
                timeAllocation: [
                    "Recorrido por la interfaz: 10 minutos",
                    "Demostración de navegación: 5 minutos",
                    "Ejercicio práctico de familiarización: 5 minutos"
                ],
                keyPoints: [
                    "Asegurarse de que todos los estudiantes pueden seguir la navegación en sus equipos",
                    "Enfatizar las tres vistas principales y cuándo usar cada una",
                    "Mostrar atajos de teclado útiles para mejorar la productividad"
                ],
                commonQuestions: [
                    {
                        question: "¿La interfaz cambia con las actualizaciones?",
                        answer: "Microsoft actualiza regularmente Power BI, pero los elementos fundamentales de la interfaz se mantienen consistentes. Las nuevas funcionalidades suelen agregarse sin cambiar drásticamente la experiencia de usuario."
                    },
                    {
                        question: "¿Puedo personalizar la interfaz?",
                        answer: "Power BI ofrece algunas opciones de personalización como temas, pero la estructura básica de la interfaz no es altamente personalizable como otros productos."
                    }
                ]
            },
            {
                timeAllocation: [
                    "Explicación de tipos de datos: 8 minutos",
                    "Demostración de modelo de datos: 10 minutos",
                    "Ejercicio de identificación de tipos: 7 minutos"
                ],
                keyPoints: [
                    "Enfatizar la importancia de asignar correctamente los tipos de datos",
                    "Mostrar ejemplos de errores comunes por tipos incorrectos",
                    "Explicar el concepto de modelo en estrella para relacionar tablas"
                ],
                commonQuestions: [
                    {
                        question: "¿Qué pasa si asigno un tipo de dato incorrecto?",
                        answer: "Puede causar cálculos incorrectos, problemas de rendimiento y limitaciones en las visualizaciones disponibles. Power BI intentará convertir los datos, pero no siempre con éxito."
                    },
                    {
                        question: "¿Cuántas tablas puedo relacionar en un modelo?",
                        answer: "Técnicamente no hay un límite estricto, pero por rendimiento y claridad se recomienda mantener el modelo lo más simple posible, idealmente siguiendo un esquema en estrella o copo de nieve."
                    }
                ]
            },
            {
                timeAllocation: [
                    "Introducción a asistentes IA: 5 minutos",
                    "Demostración de casos de uso: 10 minutos",
                    "Discusión sobre limitaciones: 5 minutos"
                ],
                keyPoints: [
                    "Aclarar que la IA es un complemento, no un reemplazo del conocimiento fundamental",
                    "Mostrar ejemplos prácticos de prompts efectivos",
                    "Discutir consideraciones éticas y de privacidad"
                ],
                commonQuestions: [
                    {
                        question: "¿Es fiable el código generado por IA?",
                        answer: "El código generado por IA puede ser un buen punto de partida, pero siempre debe ser revisado y probado. Puede contener errores o no estar optimizado para casos específicos."
                    },
                    {
                        question: "¿Qué asistente de IA es mejor para Power BI?",
                        answer: "Copilot está integrado en Power BI, pero herramientas como ChatGPT o Claude también son útiles. La elección depende de las necesidades específicas y el contexto de uso."
                    }
                ]
            }
        ],
        transform: [
            // Contenido para el módulo de transformación...
            {
                timeAllocation: [
                    "Introducción a fuentes de datos: 8 minutos",
                    "Demostración de conexiones: 10 minutos",
                    "Ejercicio práctico: 7 minutos"
                ],
                keyPoints: [
                    "Mostrar la variedad de fuentes disponibles en el menú 'Obtener datos'",
                    "Explicar las diferencias entre importación y conexión directa",
                    "Destacar consideraciones de seguridad y permisos"
                ],
                commonQuestions: [
                    {
                        question: "¿Qué fuente de datos es mejor usar?",
                        answer: "Depende del caso de uso. Para principiantes, Excel y CSV son más accesibles. Para entornos empresariales, bases de datos como SQL Server ofrecen mejor rendimiento y seguridad."
                    },
                    {
                        question: "¿Puedo conectarme a múltiples fuentes en un mismo informe?",
                        answer: "Sí, Power BI permite combinar datos de diferentes fuentes en un mismo modelo, aunque hay consideraciones de rendimiento y complejidad a tener en cuenta."
                    }
                ]
            }
        ],
        // Otros módulos...
    };

    // Obtener las notas específicas para el módulo y paso actual
    const moduleNotes = facilitatorContent[moduleId] || [];
    const stepNotes = moduleNotes[stepIndex] || {
        timeAllocation: [
            "Presentación del tema: 5-7 minutos",
            "Demostración práctica: 10-12 minutos",
            "Preguntas y respuestas: 3-5 minutos"
        ],
        keyPoints: [
            "Asegurarse de que todos los estudiantes comprenden los conceptos básicos antes de avanzar",
            "Relacionar el contenido con aplicaciones prácticas en el entorno laboral",
            "Fomentar la participación activa mediante preguntas dirigidas"
        ],
        commonQuestions: [
            {
                question: "¿Este tema aparece en la evaluación final?",
                answer: "Sí, este es un tema fundamental que será evaluado tanto en la parte teórica como práctica."
            },
            {
                question: "¿Dónde puedo encontrar más información sobre este tema?",
                answer: "En la documentación oficial de Microsoft Power BI y en los recursos adicionales proporcionados al final del taller."
            }
        ]
    };

    return stepNotes;
}

/**
 * Obtiene el contenido específico para modo autoguiado según el módulo y paso
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso
 * @returns {Object} - Contenido para modo autoguiado
 */
function getSelfGuidedContent(moduleId, stepIndex) {
    // Contenido predefinido para modo autoguiado según el módulo y paso
    const selfGuidedContent = {
        intro: [
            {
                checkpoints: [
                    "Comprendo por qué el análisis de datos es importante en el contexto profesional actual",
                    "Puedo explicar cómo el análisis de datos beneficia a un Auxiliar en Sistemas",
                    "Entiendo el proceso de transformación de datos en información útil"
                ],
                exercise: {
                    description: "Aplica lo aprendido identificando un caso de uso en tu entorno:",
                    activity: "Piensa en tu trabajo actual o futuro como Auxiliar en Sistemas. Identifica tres tipos de datos que podrías analizar para mejorar algún proceso y anota qué información útil podrías obtener de ellos."
                },
                tip: "Recuerda que los mejores análisis comienzan con preguntas claras. Define primero qué quieres saber, luego identifica qué datos necesitas."
            },
            {
                checkpoints: [
                    "Puedo identificar los componentes principales del ecosistema Power BI",
                    "Entiendo las diferencias entre Power BI Desktop, Service y Mobile",
                    "Conozco las opciones de licenciamiento y sus limitaciones"
                ],
                exercise: {
                    description: "Verifica tu instalación de Power BI Desktop:",
                    activity: "Abre Power BI Desktop en tu equipo. Si no lo tienes instalado, descárgalo desde el sitio oficial de Microsoft. Identifica la versión que tienes instalada (Ayuda > Acerca de) y familiarízate con la pantalla de inicio."
                },
                tip: "Power BI Desktop se actualiza mensualmente. Considera configurar actualizaciones automáticas para tener acceso a las últimas funcionalidades."
            },
            // Más contenido para otros pasos...
        ],
        // Otros módulos...
    };

    // Obtener el contenido específico para el módulo y paso actual
    const moduleContent = selfGuidedContent[moduleId] || [];
    const stepContent = moduleContent[stepIndex] || {
        checkpoints: [
            "Comprendo los conceptos principales presentados en esta sección",
            "Puedo aplicar estos conocimientos en ejercicios prácticos",
            "Entiendo cómo se relaciona este tema con el contenido anterior"
        ],
        exercise: {
            description: "Practica lo aprendido con este ejercicio:",
            activity: "Revisa el contenido de esta sección y crea un resumen con los puntos clave. Luego, piensa en una aplicación práctica de estos conceptos en un entorno laboral real."
        },
        tip: "Toma notas mientras estudias y revísalas periódicamente. La repetición espaciada es una técnica efectiva para la retención de conocimientos."
    };

    return stepContent;
}

/**
 * Obtiene el contenido específico para estudiantes según el módulo y paso
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso
 * @returns {Object} - Contenido para estudiantes
 */
function getStudentContent(moduleId, stepIndex) {
    // Contenido predefinido para estudiantes según el módulo y paso
    const studentContent = {
        intro: [
            {
                hasQuiz: true,
                quiz: {
                    question: "¿Cuál es la principal ventaja del análisis de datos para un Auxiliar en Sistemas?",
                    options: [
                        { text: "Reducir la carga de trabajo administrativo", isCorrect: false },
                        { text: "Tomar decisiones basadas en evidencia en lugar de suposiciones", isCorrect: true },
                        { text: "Eliminar la necesidad de conocimientos técnicos", isCorrect: false },
                        { text: "Automatizar completamente los procesos de TI", isCorrect: false }
                    ]
                },
                hasExample: true,
                example: {
                    description: "Ejemplo de análisis de tickets de soporte:",
                    code: "// Análisis en Power BI\n// 1. Conectar a datos de tickets\n// 2. Crear medida para tiempo promedio de resolución\nTiempo Promedio = AVERAGEX(Tickets, Tickets[Fecha_Cierre] - Tickets[Fecha_Apertura])\n// 3. Visualizar por departamento",
                    result: "Un dashboard que muestra que el departamento de Finanzas tiene el mayor tiempo de resolución (2.3 días) y Recursos Humanos genera la mayor cantidad de tickets (42%)."
                }
            },
            {
                hasQuiz: true,
                quiz: {
                    question: "¿Cuál de los siguientes componentes de Power BI es completamente gratuito?",
                    options: [
                        { text: "Power BI Service", isCorrect: false },
                        { text: "Power BI Mobile", isCorrect: false },
                        { text: "Power BI Desktop", isCorrect: true },
                        { text: "Power BI Report Server", isCorrect: false }
                    ]
                },
                hasExample: false
            },
            // Más contenido para otros pasos...
        ],
        // Otros módulos...
    };

    // Obtener el contenido específico para el módulo y paso actual
    const moduleContent = studentContent[moduleId] || [];
    const stepContent = moduleContent[stepIndex] || {
        hasQuiz: false,
        hasExample: false
    };

    return stepContent;
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        loadMarkdownFile,
        convertMarkdownToHTML,
        extractMarkdownMetadata,
        loadModuleContent,
        generateStepContentHTML
    };
}
