/**
 * Inicializador de la aplicación
 * Este archivo contiene funciones para inicializar la aplicación web del taller
 */

/**
 * Inicializa la aplicación cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la ruta de aprendizaje
    initLearningPath();
    
    // Inicializar los botones de recursos
    initResourceButtons();
    
    // Inicializar las opciones de modo
    initModeOptions();
    
    // Inicializar el botón de inicio del taller
    initStartWorkshopButton();
    
    // Inicializar tooltips
    initTooltips();
    
    // Inicializar modales
    initModals();
    
    // Inicializar verificación de requisitos
    initRequirementsChecker();
});

/**
 * Inicializa la ruta de aprendizaje con los módulos
 */
function initLearningPath() {
    const learningPathContainer = document.getElementById('learning-path-container');
    if (!learningPathContainer) return;
    
    // Estado inicial
    const currentModule = 'intro';
    const progress = {
        intro: { completed: false, steps: [false, false, false, false, false] },
        transform: { completed: false, steps: [false, false, false, false] },
        demo: { completed: false, steps: [false, false, false, false, false] },
        practice: { completed: false, steps: [false, false, false, false] }
    };
    
    // Renderizar la ruta de aprendizaje
    learningPathContainer.innerHTML = renderLearningPath(workshopModules, currentModule, progress);
    
    // Agregar eventos a los módulos
    const moduleNodes = document.querySelectorAll('.path-node');
    moduleNodes.forEach(node => {
        node.addEventListener('click', function() {
            const moduleId = this.id.replace('module-', '');
            showModuleContent(moduleId);
        });
    });
}

/**
 * Muestra el contenido de un módulo específico
 * @param {string} moduleId - ID del módulo a mostrar
 */
function showModuleContent(moduleId) {
    // Ocultar la sección de ruta de aprendizaje
    const learningPathSection = document.getElementById('learning-path-section');
    if (learningPathSection) {
        learningPathSection.classList.add('hidden');
    }
    
    // Mostrar la sección de contenido del módulo
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection) {
        moduleContentSection.classList.remove('hidden');
        
        // Obtener el módulo
        const module = workshopModules[moduleId];
        if (!module) return;
        
        // Renderizar el contenido del módulo
        moduleContentSection.innerHTML = `
            <div class="mb-6">
                <button id="back-to-path-btn" class="flex items-center text-blue-900 hover:underline">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Volver a la Ruta de Aprendizaje
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 class="text-2xl font-bold text-blue-900 mb-2">${module.title}</h2>
                <div class="flex items-center text-gray-600 mb-6">
                    <span class="mr-4"><i class="far fa-clock mr-1"></i> ${module.duration}</span>
                    <span><i class="fas fa-tasks mr-1"></i> ${module.steps.length} pasos</span>
                </div>
                
                <div id="step-navigator-container" class="mb-6">
                    <!-- El navegador de pasos se renderizará aquí -->
                </div>
                
                <div id="step-content-container" class="mt-8">
                    <!-- El contenido del paso se renderizará aquí -->
                </div>
            </div>
        `;
        
        // Agregar evento al botón de volver
        const backButton = document.getElementById('back-to-path-btn');
        if (backButton) {
            backButton.addEventListener('click', function() {
                moduleContentSection.classList.add('hidden');
                learningPathSection.classList.remove('hidden');
            });
        }
        
        // Renderizar el navegador de pasos
        renderStepNavigator(moduleId, 0);
        
        // Renderizar el contenido del primer paso
        renderStepContent(moduleId, 0);
    }
}

/**
 * Renderiza el navegador de pasos para un módulo
 * @param {string} moduleId - ID del módulo
 * @param {number} currentStep - Índice del paso actual (0-based)
 */
function renderStepNavigator(moduleId, currentStep) {
    const stepNavigatorContainer = document.getElementById('step-navigator-container');
    if (!stepNavigatorContainer) return;
    
    const module = workshopModules[moduleId];
    if (!module) return;
    
    // Estado del progreso (simulado para este ejemplo)
    const completedSteps = Array(module.steps.length).fill(false);
    completedSteps[0] = true; // Marcar el primer paso como completado
    
    // Renderizar el navegador usando la función del componente
    stepNavigatorContainer.innerHTML = createStepNavigator(
        moduleId,
        module.steps,
        currentStep,
        completedSteps
    );
    
    // Agregar eventos a los botones de navegación
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const stepButtons = document.querySelectorAll('.step-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentStep > 0) {
                renderStepNavigator(moduleId, currentStep - 1);
                renderStepContent(moduleId, currentStep - 1);
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentStep < module.steps.length - 1) {
                renderStepNavigator(moduleId, currentStep + 1);
                renderStepContent(moduleId, currentStep + 1);
            }
        });
    }
    
    stepButtons.forEach(button => {
        button.addEventListener('click', function() {
            const stepIndex = parseInt(this.getAttribute('data-step'));
            renderStepNavigator(moduleId, stepIndex);
            renderStepContent(moduleId, stepIndex);
        });
    });
}

/**
 * Renderiza el contenido de un paso específico
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso (0-based)
 */
function renderStepContent(moduleId, stepIndex) {
    const stepContentContainer = document.getElementById('step-content-container');
    if (!stepContentContainer) return;
    
    // Obtener el contenido del módulo según el ID
    let moduleContent;
    switch (moduleId) {
        case 'intro':
            moduleContent = introModuleContent;
            break;
        case 'transform':
            moduleContent = transformModuleContent;
            break;
        case 'demo':
            // Aquí se cargaría el contenido del módulo demo cuando esté disponible
            moduleContent = { step1: { title: "Contenido en desarrollo" } };
            break;
        case 'practice':
            // Aquí se cargaría el contenido del módulo practice cuando esté disponible
            moduleContent = { step1: { title: "Contenido en desarrollo" } };
            break;
        default:
            moduleContent = { step1: { title: "Módulo no encontrado" } };
    }
    
    // Modo de usuario (por defecto: estudiante)
    const userMode = 'estudiante';
    
    // Renderizar el contenido del paso
    stepContentContainer.innerHTML = renderStepContent(moduleContent, moduleId, stepIndex, userMode);
    
    // Inicializar componentes interactivos en el contenido
    initStepInteractiveElements();
}

/**
 * Inicializa los elementos interactivos dentro del contenido de un paso
 */
function initStepInteractiveElements() {
    // Inicializar tooltips
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    tooltipTriggers.forEach(trigger => {
        const tooltipId = trigger.getAttribute('data-tooltip');
        const tooltip = document.getElementById(tooltipId);
        
        if (tooltip) {
            trigger.addEventListener('mouseenter', function() {
                tooltip.classList.remove('hidden');
            });
            
            trigger.addEventListener('mouseleave', function() {
                tooltip.classList.add('hidden');
            });
        }
    });
    
    // Inicializar quizzes
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionId = this.getAttribute('data-question');
            const isCorrect = this.getAttribute('data-correct') === 'true';
            const allOptions = document.querySelectorAll(`.quiz-option[data-question="${questionId}"]`);
            
            // Limpiar selecciones previas
            allOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            
            // Marcar la opción seleccionada
            if (isCorrect) {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
            }
        });
    });
    
    // Inicializar botones de verificación de quiz
    const checkAnswerButtons = document.querySelectorAll('.check-answer-btn');
    checkAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questionId = this.getAttribute('data-question');
            const selectedOption = document.querySelector(`.quiz-option[data-question="${questionId}"] input:checked`);
            const feedbackMessage = this.parentElement.querySelector('.feedback-message');
            
            if (!selectedOption) {
                feedbackMessage.textContent = 'Por favor, selecciona una opción.';
                feedbackMessage.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
                feedbackMessage.classList.add('bg-yellow-100', 'text-yellow-800');
                return;
            }
            
            const isCorrect = selectedOption.closest('.quiz-option').getAttribute('data-correct') === 'true';
            
            feedbackMessage.classList.remove('hidden');
            if (isCorrect) {
                feedbackMessage.textContent = '¡Correcto! Muy bien.';
                feedbackMessage.classList.remove('bg-yellow-100', 'text-yellow-800', 'bg-red-100', 'text-red-800');
                feedbackMessage.classList.add('bg-green-100', 'text-green-800');
            } else {
                feedbackMessage.textContent = 'Incorrecto. Intenta de nuevo.';
                feedbackMessage.classList.remove('bg-yellow-100', 'text-yellow-800', 'bg-green-100', 'text-green-800');
                feedbackMessage.classList.add('bg-red-100', 'text-red-800');
            }
        });
    });
}

/**
 * Inicializa los botones de recursos
 */
function initResourceButtons() {
    const resourceButtons = document.querySelectorAll('.resource-btn');
    resourceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const resourceType = this.getAttribute('data-resource');
            showResourceModal(resourceType);
        });
    });
}

/**
 * Muestra el modal de recursos con un tipo específico
 * @param {string} resourceType - Tipo de recurso a mostrar
 */
function showResourceModal(resourceType) {
    const resourceModal = document.getElementById('resource-modal');
    const resourceModalTitle = document.getElementById('resource-modal-title');
    const resourceModalContent = document.getElementById('resource-modal-content');
    
    if (!resourceModal || !resourceModalTitle || !resourceModalContent) return;
    
    // Configurar el título según el tipo de recurso
    let title = 'Recursos';
    let icon = 'fas fa-file';
    
    switch (resourceType) {
        case 'datasets':
            title = 'Datasets para Práctica';
            icon = 'fas fa-database';
            break;
        case 'guides':
            title = 'Guías y Manuales';
            icon = 'fas fa-book';
            break;
        case 'ai-prompts':
            title = 'Prompts para Asistentes IA';
            icon = 'fas fa-robot';
            break;
        case 'templates':
            title = 'Plantillas de Power BI';
            icon = 'fas fa-file-powerpoint';
            break;
        case 'certification':
            title = 'Certificación';
            icon = 'fas fa-certificate';
            break;
    }
    
    resourceModalTitle.innerHTML = `<i class="${icon} mr-2"></i> ${title}`;
    
    // Renderizar los recursos del tipo seleccionado
    const resources = workshopResources[resourceType] || [];
    resourceModalContent.innerHTML = renderResources(resources);
    
    // Mostrar el modal
    resourceModal.classList.remove('hidden');
}

/**
 * Inicializa las opciones de modo (estudiante, facilitador, autoguiado)
 */
function initModeOptions() {
    const modeOptions = document.querySelectorAll('.mode-option');
    modeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            
            // Quitar selección de todas las opciones
            modeOptions.forEach(opt => {
                opt.classList.remove('border-yellow-400');
                opt.classList.add('border-transparent');
            });
            
            // Marcar la opción seleccionada
            this.classList.remove('border-transparent');
            this.classList.add('border-yellow-400');
            
            // Actualizar el modo de usuario
            updateUserMode(mode);
        });
    });
}

/**
 * Actualiza el modo de usuario
 * @param {string} mode - Modo seleccionado (estudiante, facilitador, autoguiado)
 */
function updateUserMode(mode) {
    // Aquí se implementaría la lógica para cambiar el modo de la aplicación
    console.log(`Modo cambiado a: ${mode}`);
    
    // Ejemplo: mostrar/ocultar panel de facilitador
    const facilitatorPanel = document.querySelector('.facilitator-panel');
    if (facilitatorPanel) {
        if (mode === 'facilitador') {
            facilitatorPanel.classList.remove('hidden');
        } else {
            facilitatorPanel.classList.add('hidden');
        }
    }
}

/**
 * Inicializa el botón de inicio del taller
 */
function initStartWorkshopButton() {
    const startButton = document.getElementById('start-workshop-btn');
    if (!startButton) return;
    
    startButton.addEventListener('click', function() {
        // Mostrar el primer módulo
        showModuleContent('intro');
        
        // Hacer scroll al contenido
        document.getElementById('module-content-section').scrollIntoView({ behavior: 'smooth' });
    });
}

/**
 * Inicializa los tooltips
 */
function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    tooltipTriggers.forEach(trigger => {
        const tooltipId = trigger.getAttribute('data-tooltip');
        const tooltip = document.getElementById(tooltipId);
        
        if (tooltip) {
            trigger.addEventListener('mouseenter', function() {
                tooltip.classList.remove('hidden');
            });
            
            trigger.addEventListener('mouseleave', function() {
                tooltip.classList.add('hidden');
            });
        }
    });
}

/**
 * Inicializa los modales
 */
function initModals() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    });
    
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

/**
 * Inicializa el verificador de requisitos
 */
function initRequirementsChecker() {
    const checkButtons = document.querySelectorAll('.check-btn');
    const verifyAllButton = document.querySelector('.verify-all-btn');
    
    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requirementId = this.getAttribute('data-requirement');
            checkRequirement(requirementId);
        });
    });
    
    if (verifyAllButton) {
        verifyAllButton.addEventListener('click', function() {
            checkAllRequirements();
        });
    }
}

/**
 * Verifica un requisito específico
 * @param {string} requirementId - ID del requisito a verificar
 */
function checkRequirement(requirementId) {
    // Aquí se implementaría la lógica real para verificar cada requisito
    // Por ahora, simulamos resultados aleatorios
    
    const statusOptions = ['success', 'error', 'warning'];
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
    
    updateRequirementStatus(requirementId, randomStatus);
}

/**
 * Verifica todos los requisitos
 */
function checkAllRequirements() {
    const requirements = ['powerbi', 'windows', 'ram', 'internet'];
    
    requirements.forEach(req => {
        checkRequirement(req);
    });
}

/**
 * Actualiza el estado visual de un requisito
 * @param {string} requirementId - ID del requisito
 * @param {string} status - Estado (success, error, warning)
 */
function updateRequirementStatus(requirementId, status) {
    const checkItem = document.querySelector(`.check-item .check-btn[data-requirement="${requirementId}"]`).closest('.check-item');
    const statusIcon = checkItem.querySelector('.check-icon');
    
    // Limpiar clases anteriores
    statusIcon.classList.remove(
        'bg-green-100', 'text-green-800',
        'bg-red-100', 'text-red-800',
        'bg-yellow-100', 'text-yellow-800'
    );
    
    // Actualizar icono
    const iconElement = statusIcon.querySelector('i');
    iconElement.classList.remove('fa-check', 'fa-times', 'fa-question');
    
    // Aplicar nuevas clases según el estado
    switch (status) {
        case 'success':
            statusIcon.classList.add('bg-green-100', 'text-green-800');
            iconElement.classList.add('fa-check');
            break;
        case 'error':
            statusIcon.classList.add('bg-red-100', 'text-red-800');
            iconElement.classList.add('fa-times');
            break;
        case 'warning':
            statusIcon.classList.add('bg-yellow-100', 'text-yellow-800');
            iconElement.classList.add('fa-question');
            break;
    }
}
