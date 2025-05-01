/**
 * Crea un navegador de pasos para un módulo
 * @param {string} moduleId - ID del módulo
 * @param {Array} steps - Array de nombres de pasos
 * @param {number} currentStep - Índice del paso actual
 * @param {Array} completedSteps - Array de booleanos indicando qué pasos están completados
 * @returns {string} HTML del navegador de pasos
 */
function createStepNavigator(moduleId, steps, currentStep, completedSteps) {
    let stepsHtml = '';
    
    steps.forEach((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = completedSteps[index];
        const statusClass = isActive ? 'bg-blue-600 text-white' : 
                           (isCompleted ? 'bg-green-100 text-green-700 border border-green-300' : 
                           'bg-gray-100 text-gray-400 border border-gray-200');
        
        stepsHtml += `
        <div class="flex flex-col items-center cursor-pointer step-button" data-module="${moduleId}" data-step="${index}">
            <div class="w-8 h-8 rounded-full flex items-center justify-center ${statusClass}">
                ${isCompleted ? '<i class="fas fa-check text-sm"></i>' : (index + 1)}
            </div>
            <div class="h-px w-16 bg-gray-200 my-2 hidden md:block"></div>
            <span class="text-xs text-center hidden md:block">
                ${step.length > 20 ? step.substring(0, 18) + '...' : step}
            </span>
        </div>
        `;
    });
    
    return `
    <div class="bg-white rounded-lg shadow-md p-4 mb-6">
        <div class="flex justify-between items-center mb-4">
            <button id="prev-button" class="flex items-center px-4 py-2 rounded ${
                currentStep > 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }" ${currentStep === 0 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left mr-1"></i>
                Anterior
            </button>
            
            <span id="step-indicator" class="font-medium">
                Paso ${currentStep + 1} de ${steps.length}
            </span>
            
            <button id="next-button" class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Siguiente
                <i class="fas fa-chevron-right ml-1"></i>
            </button>
        </div>
        
        <div class="flex justify-between mb-6">
            ${stepsHtml}
        </div>
    </div>
    `;
}

/**
 * Crea un panel de facilitador
 * @param {Object} facilitatorNotes - Notas para el facilitador
 * @returns {string} HTML del panel de facilitador
 */
function createFacilitatorPanel(facilitatorNotes) {
    const { timeAllocation, keyPoints, commonQuestions } = facilitatorNotes;
    
    let timeAllocationHtml = '';
    timeAllocation.forEach(item => {
        timeAllocationHtml += `
        <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>${item}</span>
        </li>
        `;
    });
    
    let keyPointsHtml = '';
    keyPoints.forEach(item => {
        keyPointsHtml += `
        <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>${item}</span>
        </li>
        `;
    });
    
    let commonQuestionsHtml = '';
    commonQuestions.forEach((qa, index) => {
        commonQuestionsHtml += `
        <div class="accordion-item border border-gray-200 rounded-lg overflow-hidden mb-2">
            <div class="accordion-header bg-gray-50 px-4 py-3 font-medium text-blue-900 cursor-pointer flex justify-between items-center">
                <span>${qa.question}</span>
                <i class="fas fa-chevron-down text-sm transform transition-transform duration-200"></i>
            </div>
            <div class="accordion-content hidden">
                <div class="px-4 py-3 text-sm text-gray-600">
                    <p>${qa.answer}</p>
                </div>
            </div>
        </div>
        `;
    });
    
    return `
    <div id="facilitator-panel" class="facilitator-panel bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8 hidden">
        <div class="flex items-start">
            <div class="bg-yellow-400 text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                <i class="fas fa-chalkboard-teacher text-sm"></i>
            </div>
            <div class="flex-grow">
                <h4 class="font-bold text-lg text-blue-900 mb-4">Notas para el Facilitador</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="time-allocation">
                        <h5 class="font-bold text-blue-900 mb-2">Distribución de Tiempo Recomendada:</h5>
                        <ul class="space-y-2 text-sm">
                            ${timeAllocationHtml}
                        </ul>
                    </div>
                    
                    <div class="key-points">
                        <h5 class="font-bold text-blue-900 mb-2">Puntos Clave a Enfatizar:</h5>
                        <ul class="space-y-2 text-sm">
                            ${keyPointsHtml}
                        </ul>
                    </div>
                    
                    <div class="common-questions">
                        <h5 class="font-bold text-blue-900 mb-2">Preguntas Frecuentes:</h5>
                        <div class="accordion space-y-2">
                            ${commonQuestionsHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <button class="toggle-panel-btn mt-4 text-blue-900 font-medium hover:underline flex items-center">
            <i class="fas fa-eye-slash mr-2"></i> Ocultar Panel del Facilitador
        </button>
    </div>
    `;
}
