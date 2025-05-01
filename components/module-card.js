/**
 * Crea una tarjeta de módulo para la ruta de aprendizaje
 * @param {string} moduleId - ID único del módulo
 * @param {string} title - Título del módulo
 * @param {string} duration - Duración del módulo
 * @param {string} icon - Emoji o clase de icono
 * @param {number} index - Índice del módulo (para numeración)
 * @param {boolean} isActive - Si el módulo está activo
 * @param {boolean} isCompleted - Si el módulo está completado
 * @param {number} progress - Porcentaje de progreso (0-100)
 * @returns {string} HTML de la tarjeta de módulo
 */
function createModuleCard(moduleId, title, duration, icon, index, isActive, isCompleted, progress) {
    const statusClass = isActive ? 'bg-blue-600' : (isCompleted ? 'bg-green-500' : 'bg-gray-300');
    const statusText = isActive ? 'En progreso' : (isCompleted ? 'Completado' : 'Bloqueado');
    const statusBadgeClass = isActive ? 'bg-blue-100 text-blue-800' : (isCompleted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800');
    const cardClass = isActive ? 'bg-blue-50 border-l-4 border-yellow-400' : (isCompleted ? 'bg-green-50 border-l-4 border-green-400' : 'bg-gray-50 border-l-4 border-gray-300');
    
    return `
    <div class="path-node ${cardClass} p-4 rounded-lg flex items-start mb-4" id="module-${moduleId}">
        <div class="node-icon ${statusClass} text-white h-10 w-10 rounded-full flex items-center justify-center mr-4 text-lg module-icon">
            ${icon}
        </div>
        <div class="node-info flex-grow">
            <h4 class="font-bold ${isActive ? 'text-blue-900' : (isCompleted ? 'text-green-800' : 'text-gray-700')}">
                Módulo ${index + 1}: ${title}
            </h4>
            <div class="flex justify-between items-center mt-1">
                <span class="text-sm text-gray-600">${duration}</span>
                <span class="text-xs ${statusBadgeClass} px-2 py-1 rounded-full">${statusText}</span>
            </div>
            <div class="progress-indicator mt-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="progress-bar ${isActive ? 'bg-yellow-400' : (isCompleted ? 'bg-green-500' : 'bg-gray-300')} h-2 rounded-full" style="width: ${progress}%"></div>
                </div>
            </div>
            <div class="tooltip-content hidden mt-2 text-sm text-gray-600">
                <p>${getModuleDescription(moduleId)}</p>
            </div>
        </div>
    </div>
    `;
}

/**
 * Obtiene la descripción de un módulo
 * @param {string} moduleId - ID del módulo
 * @returns {string} Descripción del módulo
 */
function getModuleDescription(moduleId) {
    const descriptions = {
        'intro': 'Fundamentos, interfaz y conceptos básicos de análisis de datos y Power BI',
        'transform': 'Fuentes de datos, Power Query, transformaciones y modelado inicial',
        'demo': 'Caso real Marduk: dashboard judicial completo en acción',
        'practice': 'Ejercicio guiado y consolidación del aprendizaje'
    };
    
    return descriptions[moduleId] || 'Descripción no disponible';
}

/**
 * Crea un conector entre módulos
 * @returns {string} HTML del conector
 */
function createModuleConnector() {
    return `<div class="path-connector border-l-2 border-dashed border-gray-300 h-6 ml-5 mb-4"></div>`;
}

/**
 * Crea una tarjeta de recurso
 * @param {string} icon - Emoji o clase de icono
 * @param {string} title - Título del recurso
 * @param {string} description - Descripción del recurso
 * @param {string} type - Tipo de archivo
 * @param {string} size - Tamaño del archivo
 * @param {string} duration - Duración (para videos)
 * @returns {string} HTML de la tarjeta de recurso
 */
function createResourceCard(icon, title, description, type, size, duration) {
    return `
    <div class="flex bg-gray-50 rounded-lg border border-gray-200 overflow-hidden resource-card">
        <div class="w-16 bg-blue-100 flex items-center justify-center text-blue-800 text-2xl">
            ${icon}
        </div>
        <div class="p-3 flex-grow">
            <h4 class="font-medium text-blue-800">${title}</h4>
            <p class="text-xs text-gray-600 mb-2">${description}</p>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                    <span class="text-xs px-2 py-1 bg-gray-200 rounded">${type}</span>
                    ${size ? `<span class="text-xs px-2 py-1 bg-gray-200 rounded">${size}</span>` : ''}
                    ${duration ? `<span class="text-xs px-2 py-1 bg-gray-200 rounded">${duration}</span>` : ''}
                </div>
                <button class="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Descargar
                </button>
            </div>
        </div>
    </div>
    `;
}
