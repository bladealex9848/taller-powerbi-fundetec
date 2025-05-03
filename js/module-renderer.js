/**
 * Renderizador de módulos
 * Este archivo contiene funciones para renderizar los módulos y sus contenidos en la interfaz
 */

/**
 * Renderiza la ruta de aprendizaje con todos los módulos
 * @param {Object} modules - Objeto con todos los módulos del taller
 * @param {string} currentModule - ID del módulo actual
 * @param {Object} progress - Objeto con el progreso de cada módulo
 * @returns {string} HTML de la ruta de aprendizaje
 */
function renderLearningPath(modules, currentModule, progress) {
    let html = '';

    // Obtener los IDs de los módulos en orden
    const moduleIds = Object.keys(modules);

    // Renderizar cada módulo
    moduleIds.forEach((moduleId, index) => {
        const module = modules[moduleId];
        const isActive = moduleId === currentModule;
        const isCompleted = progress[moduleId]?.completed || false;
        const moduleProgress = calculateModuleProgress(moduleId, progress);

        // Crear el HTML del módulo usando la función del componente
        html += createModuleCard(
            moduleId,
            module.title,
            module.duration,
            module.icon,
            index,
            isActive,
            isCompleted,
            moduleProgress
        );

        // Agregar conector entre módulos (excepto después del último)
        if (index < moduleIds.length - 1) {
            html += createModuleConnector();
        }
    });

    return html;
}

/**
 * Renderiza el contenido de un paso específico de un módulo
 * @param {Object} moduleContent - Contenido del módulo
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso (0-based)
 * @param {string} userMode - Modo de usuario (estudiante, facilitador, autoguiado)
 * @returns {string} HTML del contenido del paso
 */
function generateStepContentHTML(moduleContent, moduleId, stepIndex, userMode) {
    // Obtener el contenido del paso
    const stepKey = `step${stepIndex + 1}`;
    const stepContent = moduleContent[stepKey];

    if (!stepContent) {
        console.warn(`No se encontró contenido para el paso ${stepIndex + 1} en el módulo ${moduleId}`);

        // Intentar cargar desde el archivo Markdown directamente
        try {
            // Verificar si la función está disponible
            if (typeof window.loadModuleMarkdownContent === 'function') {
                console.log('Intentando cargar contenido Markdown directamente...');

                // Crear un elemento para mostrar un mensaje de carga
                const loadingElement = document.createElement('div');
                loadingElement.className = 'text-center py-8';
                loadingElement.innerHTML = `
                    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p class="text-gray-600">Cargando contenido...</p>
                `;

                // Insertar el elemento de carga en el contenedor
                const contentContainer = document.getElementById('module-content');
                if (contentContainer) {
                    contentContainer.innerHTML = '';
                    contentContainer.appendChild(loadingElement);
                }

                // Cargar el contenido Markdown
                window.loadModuleMarkdownContent(moduleId, stepIndex)
                    .then(html => {
                        // Actualizar el contenido
                        if (contentContainer) {
                            contentContainer.innerHTML = html;
                        }
                        return html;
                    })
                    .catch(error => {
                        console.error('Error al cargar contenido Markdown:', error);
                        return createErrorMessage(error.message);
                    });

                // Devolver un mensaje temporal mientras se carga
                return 'Cargando...';
            }
        } catch (error) {
            console.error('Error al intentar cargar contenido alternativo:', error);
        }

        // Si no se puede cargar, mostrar mensaje de contenido en desarrollo
        return `<div class="text-center py-8">
            <div class="text-6xl mb-4">🚧</div>
            <h4 class="text-xl font-bold mb-2">Contenido en Desarrollo</h4>
            <p class="text-gray-600">Este contenido estará disponible próximamente.</p>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="text-blue-800">Estamos trabajando para mejorar esta sección. Por favor, intenta con otro paso o módulo.</p>
            </div>
        </div>`;
    }

    // Construir el HTML según el tipo de paso
    let html = `
        <h3 class="text-xl font-bold text-blue-900 mb-6">${stepContent.title}</h3>
        <p class="mb-6">${stepContent.description || ''}</p>
    `;

    // Agregar el contenido principal del paso si existe
    if (stepContent.content) {
        html += `<div class="main-content mb-6">${stepContent.content}</div>`;
    } else {
        // Si no hay contenido principal, mostrar un mensaje de advertencia
        html += `
            <div class="p-4 bg-yellow-50 rounded-lg mb-6">
                <p class="text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    Este paso no tiene contenido principal definido.
                </p>
                ${window.debugMode ? `
                <p class="text-yellow-800 text-sm mt-2">
                    Verifica que la propiedad 'content' esté definida en el objeto ${stepKey}
                    del archivo module-${moduleId}.js
                </p>
                ` : ''}
            </div>
        `;
    }

    // Renderizar componentes específicos según el contenido del paso
    // Esto variará según el tipo de paso y módulo

    // Ejemplo: Renderizar un diagrama si existe
    if (stepContent.diagram) {
        html += renderDiagram(stepContent.diagram);
    }

    // Ejemplo: Renderizar beneficios si existen
    if (stepContent.benefits) {
        html += renderBenefitsList(stepContent.benefits);
    }

    // Ejemplo: Renderizar un caso práctico si existe
    if (stepContent.caseStudy) {
        html += renderCaseStudy(stepContent.caseStudy.title, stepContent.caseStudy.content);
    }

    // Ejemplo: Renderizar un quiz si existe
    if (stepContent.quiz) {
        html += renderQuiz(stepContent.quiz);
    }

    // Renderizar contenido específico según el modo de usuario
    if (userMode === 'facilitador' && moduleContent.facilitatorNotes) {
        html += renderFacilitatorPanel(moduleContent.facilitatorNotes);
    } else if (userMode === 'autoguiado' && stepContent.selfGuidedContent) {
        html += renderSelfGuidedContent(stepContent.selfGuidedContent);
    } else if (userMode === 'estudiante' && stepContent.studentContent) {
        html += renderStudentContent(stepContent.studentContent);
    }

    // Si no hay contenido específico para el paso actual, mostrar un contenido genérico
    if (!stepContent.content && !stepContent.description) {
        html += `
            <div class="p-4 bg-blue-50 rounded-lg mb-6">
                <p class="text-blue-800">Este paso está en desarrollo. Pronto tendrás acceso a más contenido.</p>
            </div>
        `;
    }

    // Agregar información de depuración si está habilitado el modo de depuración
    if (window.debugMode) {
        html += `
            <div class="mt-8 p-3 bg-gray-100 rounded-lg text-xs">
                <p class="font-bold text-gray-700">Información de depuración:</p>
                <div class="mt-1 space-y-1">
                    <p>Módulo: ${moduleId}</p>
                    <p>Paso: ${stepKey} (${stepContent.title || 'No definido'})</p>
                    <p>Modo de usuario: ${userMode || 'No definido'}</p>
                    <p>Contenido principal: ${stepContent.content ? '✅ Definido (' + stepContent.content.length + ' caracteres)' : '❌ No definido'}</p>
                    <p>Componentes adicionales:
                        ${stepContent.diagram ? '✅ Diagrama ' : ''}
                        ${stepContent.benefits ? '✅ Beneficios ' : ''}
                        ${stepContent.caseStudy ? '✅ Caso práctico ' : ''}
                        ${stepContent.quiz ? '✅ Quiz ' : ''}
                        ${!stepContent.diagram && !stepContent.benefits && !stepContent.caseStudy && !stepContent.quiz ? '❌ Ninguno' : ''}
                    </p>
                </div>
            </div>
        `;
    }

    return html;
}

/**
 * Renderiza contenido específico para el modo autoguiado
 * @param {Object} content - Contenido para el modo autoguiado
 * @returns {string} HTML del contenido
 */
function renderSelfGuidedContent(content) {
    return `
        <div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded self-guided-content">
            <h4 class="font-bold text-green-800 mb-2 flex items-center">
                <i class="fas fa-book-reader mr-2"></i>
                Guía de Aprendizaje Autoguiado
            </h4>
            <div class="mb-3">
                ${content.description || ''}
            </div>
            ${content.checkpoints ? renderCheckpoints(content.checkpoints) : ''}
            ${content.additionalResources ? renderAdditionalResources(content.additionalResources) : ''}
        </div>
    `;
}

/**
 * Renderiza checkpoints para el modo autoguiado
 * @param {Array} checkpoints - Lista de checkpoints
 * @returns {string} HTML de los checkpoints
 */
function renderCheckpoints(checkpoints) {
    let checkpointsHtml = '';

    checkpoints.forEach((checkpoint, index) => {
        checkpointsHtml += `
            <div class="flex items-start mb-2">
                <input type="checkbox" id="checkpoint-${index}" class="mt-1 mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="checkpoint-${index}" class="text-sm">${checkpoint}</label>
            </div>
        `;
    });

    return `
        <div class="mt-3">
            <h5 class="font-medium text-green-700 mb-2">Verifica tu progreso:</h5>
            <div class="space-y-1">
                ${checkpointsHtml}
            </div>
        </div>
    `;
}

/**
 * Renderiza recursos adicionales para el modo autoguiado
 * @param {Array} resources - Lista de recursos adicionales
 * @returns {string} HTML de los recursos
 */
function renderAdditionalResources(resources) {
    let resourcesHtml = '';

    resources.forEach(resource => {
        resourcesHtml += `
            <li class="mb-1">
                <a href="${resource.url}" target="_blank" class="text-green-700 hover:underline flex items-center">
                    <i class="fas fa-external-link-alt mr-1 text-xs"></i>
                    ${resource.title}
                </a>
                ${resource.description ? `<p class="text-xs text-gray-600 ml-5">${resource.description}</p>` : ''}
            </li>
        `;
    });

    return `
        <div class="mt-4">
            <h5 class="font-medium text-green-700 mb-2">Recursos adicionales:</h5>
            <ul class="list-none space-y-2">
                ${resourcesHtml}
            </ul>
        </div>
    `;
}

/**
 * Renderiza contenido específico para el modo estudiante
 * @param {Object} content - Contenido para el modo estudiante
 * @returns {string} HTML del contenido
 */
function renderStudentContent(content) {
    return `
        <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded student-content">
            <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                <i class="fas fa-user-graduate mr-2"></i>
                Guía para Estudiantes
            </h4>
            <div class="mb-3">
                ${content.description || ''}
            </div>
            ${content.exercises ? renderExercises(content.exercises) : ''}
        </div>
    `;
}

/**
 * Renderiza ejercicios para el modo estudiante
 * @param {Array} exercises - Lista de ejercicios
 * @returns {string} HTML de los ejercicios
 */
function renderExercises(exercises) {
    let exercisesHtml = '';

    exercises.forEach((exercise, index) => {
        exercisesHtml += `
            <div class="mb-3 p-3 bg-white rounded shadow-sm">
                <h5 class="font-medium text-blue-700 mb-1">Ejercicio ${index + 1}: ${exercise.title}</h5>
                <p class="text-sm mb-2">${exercise.description}</p>
                ${exercise.steps ? renderExerciseSteps(exercise.steps) : ''}
            </div>
        `;
    });

    return `
        <div class="mt-3">
            <h5 class="font-medium text-blue-700 mb-2">Ejercicios prácticos:</h5>
            <div class="space-y-3">
                ${exercisesHtml}
            </div>
        </div>
    `;
}

/**
 * Renderiza pasos de un ejercicio
 * @param {Array} steps - Lista de pasos
 * @returns {string} HTML de los pasos
 */
function renderExerciseSteps(steps) {
    let stepsHtml = '';

    steps.forEach((step, index) => {
        stepsHtml += `
            <li class="mb-1">
                <span class="font-medium">${index + 1}.</span> ${step}
            </li>
        `;
    });

    return `
        <ol class="list-none pl-2 text-sm text-gray-700">
            ${stepsHtml}
        </ol>
    `;
}

/**
 * Renderiza el panel de facilitador
 * @param {Object} facilitatorNotes - Notas para el facilitador
 * @returns {string} HTML del panel de facilitador
 */
function renderFacilitatorPanel(facilitatorNotes) {
    return `
        <div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded facilitator-content">
            <h4 class="font-bold text-red-800 mb-2 flex items-center">
                <i class="fas fa-chalkboard-teacher mr-2"></i>
                Notas para el Facilitador
            </h4>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                ${facilitatorNotes.timeAllocation ? renderTimeAllocation(facilitatorNotes.timeAllocation) : ''}
                ${facilitatorNotes.keyPoints ? renderKeyPoints(facilitatorNotes.keyPoints) : ''}
            </div>

            ${facilitatorNotes.generalTips ? renderGeneralTips(facilitatorNotes.generalTips) : ''}
            ${facilitatorNotes.commonQuestions ? renderCommonQuestions(facilitatorNotes.commonQuestions) : ''}

            <div class="mt-3 text-sm text-red-700 border-t border-red-200 pt-2">
                <strong>Nota:</strong> Esta información es exclusiva para facilitadores y no es visible para los estudiantes.
            </div>
        </div>
    `;
}

/**
 * Renderiza la distribución de tiempo recomendada
 * @param {Object|Array} timeAllocation - Distribución de tiempo
 * @returns {string} HTML de la distribución de tiempo
 */
function renderTimeAllocation(timeAllocation) {
    let timeHtml = '';

    if (Array.isArray(timeAllocation)) {
        timeAllocation.forEach(item => {
            timeHtml += `<li class="mb-1 text-sm">${item}</li>`;
        });
    } else {
        for (const key in timeAllocation) {
            if (timeAllocation.hasOwnProperty(key)) {
                const stepNumber = key.replace('step', '');
                timeHtml += `<li class="mb-1 text-sm">Paso ${stepNumber}: ${timeAllocation[key]}</li>`;
            }
        }
    }

    return `
        <div>
            <h5 class="font-medium text-red-700 mb-2">Distribución de Tiempo:</h5>
            <ul class="list-disc pl-5 space-y-1">
                ${timeHtml}
            </ul>
        </div>
    `;
}

/**
 * Renderiza los puntos clave a enfatizar
 * @param {Array} keyPoints - Puntos clave
 * @returns {string} HTML de los puntos clave
 */
function renderKeyPoints(keyPoints) {
    let pointsHtml = '';

    keyPoints.forEach(point => {
        pointsHtml += `<li class="mb-1 text-sm">${point}</li>`;
    });

    return `
        <div>
            <h5 class="font-medium text-red-700 mb-2">Puntos Clave a Enfatizar:</h5>
            <ul class="list-disc pl-5 space-y-1">
                ${pointsHtml}
            </ul>
        </div>
    `;
}

/**
 * Renderiza consejos generales para el facilitador
 * @param {Array} tips - Consejos generales
 * @returns {string} HTML de los consejos
 */
function renderGeneralTips(tips) {
    let tipsHtml = '';

    tips.forEach(tip => {
        tipsHtml += `<li class="mb-1 text-sm">${tip}</li>`;
    });

    return `
        <div class="mt-4">
            <h5 class="font-medium text-red-700 mb-2">Consejos Generales:</h5>
            <ul class="list-disc pl-5 space-y-1">
                ${tipsHtml}
            </ul>
        </div>
    `;
}

/**
 * Renderiza preguntas frecuentes para el facilitador
 * @param {Array} questions - Preguntas frecuentes
 * @returns {string} HTML de las preguntas
 */
function renderCommonQuestions(questions) {
    let questionsHtml = '';

    questions.forEach(qa => {
        questionsHtml += `
            <div class="mb-2 p-2 bg-white rounded shadow-sm">
                <div class="font-medium text-red-700">${qa.question}</div>
                <div class="text-sm mt-1">${qa.answer}</div>
            </div>
        `;
    });

    return `
        <div class="mt-4">
            <h5 class="font-medium text-red-700 mb-2">Preguntas Frecuentes:</h5>
            <div class="space-y-2">
                ${questionsHtml}
            </div>
        </div>
    `;
}

/**
 * Renderiza un diagrama interactivo
 * @param {Object} diagram - Datos del diagrama
 * @returns {string} HTML del diagrama
 */
function renderDiagram(diagram) {
    if (diagram.stages) {
        return createInteractiveDiagram(diagram.stages);
    }

    // Diagrama genérico si no hay un tipo específico
    return `
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h4 class="font-bold text-lg text-blue-900 mb-3">${diagram.title || 'Diagrama'}</h4>
            <div class="text-center">
                <img src="${diagram.image || 'assets/img/placeholder-diagram.png'}"
                     alt="${diagram.title || 'Diagrama'}"
                     class="max-w-full h-auto mx-auto">
            </div>
        </div>
    `;
}

/**
 * Renderiza un caso de estudio
 * @param {string} title - Título del caso de estudio
 * @param {string} content - Contenido del caso de estudio
 * @returns {string} HTML del caso de estudio
 */
function renderCaseStudy(title, content) {
    return `
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-6">
            <h4 class="font-bold text-lg text-yellow-800 mb-3 flex items-center">
                <i class="fas fa-briefcase mr-2"></i>
                ${title || 'Caso de Estudio'}
            </h4>
            <div class="case-study-content">
                ${content || 'Contenido del caso de estudio no disponible.'}
            </div>
        </div>
    `;
}

/**
 * Renderiza una lista de beneficios o puntos clave
 * @param {Array} benefits - Lista de beneficios o puntos
 * @param {string} title - Título opcional de la sección
 * @returns {string} HTML de la lista
 */
function renderBenefitsList(benefits, title = 'Puntos Clave') {
    let itemsHtml = '';

    benefits.forEach(benefit => {
        itemsHtml += `
            <li class="flex items-start mb-2">
                <span class="text-blue-500 mr-2">•</span>
                <span>${typeof benefit === 'string' ? benefit : benefit.title}</span>
            </li>
        `;
    });

    return `
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h4 class="font-bold text-lg text-blue-900 mb-3">${title}</h4>
            <ul class="list-none pl-2">
                ${itemsHtml}
            </ul>
        </div>
    `;
}

/**
 * Renderiza un quiz interactivo
 * @param {Object} quiz - Datos del quiz
 * @returns {string} HTML del quiz
 */
function renderQuiz(quiz) {
    let optionsHtml = '';

    quiz.options.forEach((option, index) => {
        optionsHtml += `
            <label class="flex justify-between items-center p-3 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer quiz-option mb-2"
                   data-question="${quiz.questionId}"
                   data-correct="${index === quiz.correctIndex}">
                <div class="font-medium">${option}</div>
                <input type="radio" name="quiz-${quiz.questionId}" value="${index}">
            </label>
        `;
    });

    return `
        <div class="border border-gray-200 rounded-lg p-4 quiz-container mt-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
                <i class="fas fa-check-circle mr-2 text-blue-600"></i>
                Comprueba tu Comprensión
            </h4>
            <div class="mb-2">
                <p class="font-medium mb-2">${quiz.question}</p>
                <div class="space-y-2">
                    ${optionsHtml}
                </div>
            </div>
            <div class="feedback-message hidden mt-3 p-3 rounded"></div>
            <button class="check-answer-btn mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    data-question="${quiz.questionId}">
                Comprobar
            </button>
        </div>
    `;
}

/**
 * Calcula el porcentaje de progreso de un módulo
 * @param {string} moduleId - ID del módulo
 * @param {Object} progress - Objeto con el progreso de todos los módulos
 * @returns {number} Porcentaje de progreso (0-100)
 */
function calculateModuleProgress(moduleId, progress) {
    if (!progress[moduleId] || !progress[moduleId].steps) {
        return 0;
    }

    const completedSteps = progress[moduleId].steps.filter(step => step).length;
    const totalSteps = progress[moduleId].steps.length;

    if (totalSteps === 0) {
        return 0;
    }

    return Math.round((completedSteps / totalSteps) * 100);
}

/**
 * Renderiza los recursos de un tipo específico
 * @param {Array} resources - Lista de recursos
 * @returns {string} HTML de los recursos
 */
function renderResources(resources) {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';

    resources.forEach(resource => {
        html += createResourceCard(
            resource.icon,
            resource.title,
            resource.description,
            resource.type,
            resource.size,
            resource.duration
        );
    });

    html += '</div>';
    return html;
}

/**
 * Crea un mensaje de error formateado
 * @param {string} message - Mensaje de error
 * @returns {string} HTML del mensaje de error
 */
function createErrorMessage(message) {
    return `
        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">Error al cargar el contenido</h3>
                    <div class="mt-2 text-sm text-red-700">
                        <p>${message}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-8">
            <div class="text-6xl mb-4">📚</div>
            <h4 class="text-xl font-bold mb-2">Contenido no disponible</h4>
            <p class="text-gray-600">Estamos trabajando para mejorar esta sección. Por favor, intenta con otro paso o módulo.</p>
        </div>
    `;
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        renderLearningPath,
        generateStepContentHTML,
        renderResources,
        calculateModuleProgress,
        createErrorMessage
    };
}
