/**
 * Crea un diagrama de flujo interactivo
 * @param {Array} stages - Array de objetos con {icon, label, desc}
 * @returns {string} HTML del diagrama interactivo
 */
function createInteractiveDiagram(stages) {
    let stagesHtml = '';

    stages.forEach((stage, index) => {
        stagesHtml += `
        <div class="diagram-stage flex flex-col items-center p-2 cursor-pointer hover:bg-blue-100 rounded transition-all m-2 tooltip-trigger" data-tooltip="stage-tooltip-${index}">
            <div class="text-3xl mb-2">${stage.icon}</div>
            <div class="font-medium">${stage.label}</div>
            <div class="text-xs text-gray-600">${stage.desc}</div>

            <div id="stage-tooltip-${index}" class="tooltip hidden absolute mt-24 bg-white p-3 rounded shadow-lg border border-gray-200 z-10 w-64">
                <h5 class="font-bold text-blue-800 mb-1">${stage.label}</h5>
                <p class="text-sm">${stage.tooltip}</p>
            </div>
        </div>

        ${index < stages.length - 1 ? '<div class="text-blue-300 mx-1">→</div>' : ''}
        `;
    });

    return `
    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
        <div class="flex flex-wrap justify-between items-center text-center">
            ${stagesHtml}
        </div>
        <div class="text-xs text-center mt-2 text-blue-600">Haz clic en cada etapa para más detalles</div>
    </div>
    `;
}

/**
 * Crea un caso práctico
 * @param {string} title - Título del caso
 * @param {string} content - Contenido HTML del caso
 * @returns {string} HTML del caso práctico
 */
function createCaseStudy(title, content) {
    return `
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h4 class="text-lg font-semibold mb-2 text-yellow-800 flex items-center">
            <i class="fas fa-info-circle mr-2"></i>
            ${title}
        </h4>
        ${content}
    </div>
    `;
}

/**
 * Crea un quiz interactivo
 * @param {string} questionId - ID único de la pregunta
 * @param {string} question - Texto de la pregunta
 * @param {Array} options - Array de opciones
 * @param {number} correctIndex - Índice de la opción correcta
 * @returns {string} HTML del quiz
 */
function createQuiz(questionId, question, options, correctIndex) {
    let optionsHtml = '';

    options.forEach((option, index) => {
        optionsHtml += `
        <label class="flex flex-col p-3 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer quiz-option mb-2" data-question="${questionId}" data-correct="${index === correctIndex}">
            <div class="mb-3 font-medium">${option}</div>
            <div class="flex items-center mt-2 border-t pt-2 border-gray-100">
                <input type="radio" name="quiz-${questionId}" value="${index}" class="mr-2">
                <span class="text-sm text-gray-600">Seleccionar esta respuesta</span>
            </div>
        </label>
        `;
    });

    return `
    <div class="border border-gray-200 rounded-lg p-4 quiz-container mb-6">
        <h4 class="text-lg font-semibold mb-3 flex items-center">
            <i class="fas fa-check-circle mr-2 text-blue-600"></i>
            Comprueba tu Comprensión
        </h4>
        <div class="mb-4">
            <p class="font-medium mb-4">${question}</p>
            <div class="mt-4">
                ${optionsHtml}
            </div>
        </div>
        <div class="feedback-message hidden mt-3 p-3 rounded"></div>
        <button class="check-answer-btn mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-question="${questionId}">
            Comprobar
        </button>
    </div>
    `;
}

/**
 * Crea un conjunto de objetivos de aprendizaje
 * @param {Array} objectives - Array de objetos con {title, description, checkpoints}
 * @returns {string} HTML de los objetivos
 */
function createLearningObjectives(objectives) {
    let objectivesHtml = '';

    objectives.forEach((objective, index) => {
        let checkpointsHtml = '';

        objective.checkpoints.forEach((checkpoint, cpIndex) => {
            checkpointsHtml += `
            <div class="checkpoint flex items-center">
                <input type="checkbox" id="checkpoint-${index}-${cpIndex}" class="mr-2 h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-900">
                <label for="checkpoint-${index}-${cpIndex}" class="text-sm text-gray-600">${checkpoint}</label>
            </div>
            `;
        });

        objectivesHtml += `
        <div class="objective-item border border-gray-200 rounded-lg p-4 hover:shadow-md">
            <div class="objective-header flex items-center justify-between cursor-pointer">
                <div class="flex items-center">
                    <span class="objective-icon bg-blue-100 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center mr-3">${objective.icon}</span>
                    <h5 class="font-medium text-blue-900">${objective.title}</h5>
                </div>
                <span class="expand-icon text-blue-900">+</span>
            </div>
            <div class="objective-details mt-3 hidden">
                <p class="text-sm text-gray-600 mb-3">${objective.description}</p>
                <div class="checkpoint-list space-y-2">
                    ${checkpointsHtml}
                </div>
            </div>
        </div>
        `;
    });

    return `
    <div class="learning-objectives bg-white rounded-xl shadow-md p-6 mb-8">
        <div class="objectives-header flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h4 class="text-xl font-bold text-blue-900">Al finalizar este módulo podrás:</h4>
            <button class="objective-expand-all text-sm text-blue-900 font-medium hover:underline mt-2 md:mt-0">
                <i class="fas fa-expand mr-1"></i> Expandir Todos
            </button>
        </div>

        <div class="objective-items space-y-4">
            ${objectivesHtml}
        </div>
    </div>
    `;
}

/**
 * Crea un componente de verificación de requisitos
 * @param {Array} requirements - Array de objetos con {label, status}
 * @returns {string} HTML del componente
 */
function createRequirementsChecker(requirements) {
    let requirementsHtml = '';

    requirements.forEach((req, index) => {
        const statusClass = req.status === 'success' ? 'bg-green-100 text-green-800' :
                           (req.status === 'error' ? 'bg-red-100 text-red-800' :
                           'bg-yellow-100 text-yellow-800');
        const statusIcon = req.status === 'success' ? 'fa-check' :
                          (req.status === 'error' ? 'fa-times' :
                          'fa-question');

        requirementsHtml += `
        <li class="check-item flex items-center justify-between p-3 rounded-lg hover:bg-blue-50">
            <div class="flex items-center">
                <span class="check-icon ${statusClass} h-6 w-6 rounded-full flex items-center justify-center mr-3">
                    <i class="fas ${statusIcon} text-xs"></i>
                </span>
                <span class="check-label text-sm font-medium">${req.label}</span>
            </div>
            <button class="check-btn text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200" data-requirement="${index}">
                Verificar
            </button>
        </li>
        `;
    });

    return `
    <div class="requirements-widget bg-white rounded-xl shadow-md p-6">
        <h4 class="font-bold text-lg mb-4">Verifica que cumples con los requisitos para el taller</h4>

        <ul class="check-list space-y-3">
            ${requirementsHtml}
        </ul>

        <button class="verify-all-btn mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200">
            Verificar Todos los Requisitos
        </button>
    </div>
    `;
}
