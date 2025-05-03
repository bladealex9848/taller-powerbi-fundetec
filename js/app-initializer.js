/**
 * Inicializador de la aplicación
 * Este archivo contiene funciones para inicializar la aplicación web del taller
 */

/**
 * Inicializa la aplicación cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando aplicación...');

    // Verificar si es acceso directo desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const isDirect = urlParams.get('direct') === 'true';
    const modeFromUrl = urlParams.get('mode');
    const resetProgress = urlParams.get('reset') === 'true';

    // Si se solicita reiniciar el progreso, limpiar localStorage
    if (resetProgress) {
        console.log('Reiniciando progreso del taller...');
        resetWorkshopProgress();
    }

    // Si viene de acceso directo y hay un modo especificado, establecerlo
    if (isDirect && modeFromUrl) {
        console.log(`Acceso directo detectado con modo: ${modeFromUrl}`);
        localStorage.setItem('userMode', modeFromUrl);
    }

    // Forzar cierre de modales inmediatamente
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            console.log(`Modal ${modal.id} oculto al inicio`);
        }
    });

    // Inicializar modales primero para configurar los eventos
    initModals();

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

    // Inicializar verificación de requisitos
    initRequirementsChecker();

    // Inicializar el botón de reinicio del taller
    initResetProgressButton();

    // Asegurarse de que los modales estén cerrados después de toda la inicialización
    setTimeout(function() {
        closeAllModals();
        console.log('Cierre de modales forzado después de inicialización');

        // Si es acceso directo, mostrar la ruta de aprendizaje automáticamente
        if (isDirect) {
            const learningPathSection = document.getElementById('learning-path-section');
            if (learningPathSection) {
                learningPathSection.scrollIntoView({ behavior: 'smooth' });
                console.log('Desplazamiento automático a la ruta de aprendizaje');
            }
        }
    }, 100);

    // Agregar un botón de acceso directo en la esquina inferior derecha
    addDirectAccessButton();

    console.log('Aplicación inicializada correctamente');
});

/**
 * Inicializa la ruta de aprendizaje con los módulos
 */
function initLearningPath() {
    const learningPathContainer = document.getElementById('learning-path-container');
    if (!learningPathContainer) return;

    // Intentar cargar el progreso guardado
    let currentModule = 'intro';
    let progress = {
        intro: { completed: false, steps: [false, false, false, false, false] },
        transform: { completed: false, steps: [false, false, false, false] },
        demo: { completed: false, steps: [false, false, false, false, false] },
        practice: { completed: false, steps: [false, false, false, false] }
    };

    // Cargar progreso desde localStorage si existe
    try {
        const savedProgress = localStorage.getItem('moduleProgress');
        if (savedProgress) {
            progress = JSON.parse(savedProgress);
        }

        const savedState = localStorage.getItem('currentState');
        if (savedState) {
            const state = JSON.parse(savedState);
            currentModule = state.moduleId || currentModule;
        }
    } catch (error) {
        console.error('Error al cargar el progreso guardado:', error);
    }

    // Renderizar la ruta de aprendizaje
    learningPathContainer.innerHTML = renderLearningPath(workshopModules, currentModule, progress);

    // Agregar eventos a los módulos
    const moduleNodes = document.querySelectorAll('.path-node');
    moduleNodes.forEach(node => {
        node.addEventListener('click', function() {
            const moduleId = this.id.replace('module-', '');

            // Verificar si hay un paso guardado para este módulo
            let stepIndex = 0;
            try {
                const savedState = localStorage.getItem('currentState');
                if (savedState) {
                    const state = JSON.parse(savedState);
                    if (state.moduleId === moduleId) {
                        stepIndex = state.stepIndex || 0;
                    }
                }
            } catch (error) {
                console.error('Error al cargar el paso guardado:', error);
            }

            showModuleContent(moduleId, stepIndex);
        });
    });

    // Actualizar el indicador de progreso global
    updateGlobalProgress(progress);
}

/**
 * Actualiza el indicador de progreso global
 * @param {Object} progress - Objeto con el progreso de todos los módulos
 */
function updateGlobalProgress(progress) {
    const progressPercentage = document.querySelector('.progress-percentage');
    const progressCircle = document.querySelector('.progress-circle');

    if (!progressPercentage || !progressCircle) return;

    // Calcular el porcentaje de progreso global
    let completedSteps = 0;
    let totalSteps = 0;

    Object.keys(progress).forEach(moduleId => {
        if (progress[moduleId].steps) {
            completedSteps += progress[moduleId].steps.filter(step => step).length;
            totalSteps += progress[moduleId].steps.length;
        }
    });

    const percentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

    // Actualizar el texto del porcentaje
    progressPercentage.textContent = `${percentage}%`;

    // Actualizar el círculo de progreso
    progressCircle.style.strokeDashoffset = 100 - percentage;
}

/**
 * Muestra el contenido de un módulo específico
 * @param {string} moduleId - ID del módulo a mostrar
 * @param {number} stepIndex - Índice del paso a mostrar (opcional, por defecto 0)
 */
function showModuleContent(moduleId, stepIndex = 0) {
    // Verificar si el usuario ha seleccionado un modo
    const userMode = localStorage.getItem('userMode');
    if (!userMode) {
        // Si no hay modo seleccionado, mostrar la sección de modalidades de uso
        const modeSections = document.querySelectorAll('section h2');
        let modeSection = null;

        for (const section of modeSections) {
            if (section.textContent.includes('Modalidades de Uso')) {
                modeSection = section.closest('section');
                break;
            }
        }

        if (modeSection) {
            modeSection.scrollIntoView({ behavior: 'smooth' });

            // Mostrar un mensaje para que el usuario seleccione un modo
            const modeOptions = document.querySelectorAll('.mode-option');
            modeOptions.forEach(option => {
                option.classList.add('animate-pulse');
                setTimeout(() => {
                    option.classList.remove('animate-pulse');
                }, 2000);
            });

            return; // No continuar hasta que se seleccione un modo
        }
    }

    // Ocultar la sección de ruta de aprendizaje
    const learningPathSection = document.getElementById('learning-path-section');
    if (learningPathSection) {
        learningPathSection.classList.add('hidden');
    }

    // Mostrar la sección de contenido del módulo
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection) {
        moduleContentSection.classList.remove('hidden');

        // Guardar el módulo y paso actuales como atributos de datos
        moduleContentSection.setAttribute('data-current-module', moduleId);
        moduleContentSection.setAttribute('data-current-step', stepIndex.toString());

        // Obtener el módulo
        const module = workshopModules[moduleId];
        if (!module) return;

        // Renderizar el contenido del módulo
        moduleContentSection.innerHTML = `
            <div class="mb-6 flex justify-between items-center">
                <button id="back-to-path-btn" class="flex items-center text-blue-900 hover:underline">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Volver a la Ruta de Aprendizaje
                </button>
                <div class="text-sm text-gray-600">
                    Modo: <span class="font-medium">${userMode || 'No seleccionado'}</span>
                </div>
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

                // Actualizar la ruta de aprendizaje para reflejar el progreso
                initLearningPath();
            });
        }

        // Renderizar el navegador de pasos
        renderStepNavigator(moduleId, stepIndex);

        // Renderizar el contenido del paso seleccionado
        renderStepContent(moduleId, stepIndex);

        // Guardar el estado actual en localStorage para persistencia
        saveCurrentState(moduleId, stepIndex);
    }
}

/**
 * Guarda el estado actual de navegación
 * @param {string} moduleId - ID del módulo actual
 * @param {number} stepIndex - Índice del paso actual
 */
function saveCurrentState(moduleId, stepIndex) {
    const state = {
        moduleId,
        stepIndex,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('currentState', JSON.stringify(state));
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

    // Cargar el progreso guardado o crear uno nuevo
    let progress = {};
    try {
        const savedProgress = localStorage.getItem('moduleProgress');
        if (savedProgress) {
            progress = JSON.parse(savedProgress);
        }
    } catch (error) {
        console.error('Error al cargar el progreso guardado:', error);
    }

    // Si no hay progreso para este módulo, inicializarlo
    if (!progress[moduleId]) {
        progress[moduleId] = {
            completed: false,
            steps: Array(module.steps.length).fill(false)
        };
    }

    // Marcar el paso actual y anteriores como completados
    for (let i = 0; i <= currentStep; i++) {
        progress[moduleId].steps[i] = true;
    }

    // Guardar el progreso actualizado
    localStorage.setItem('moduleProgress', JSON.stringify(progress));

    // Actualizar el módulo y paso actuales
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection) {
        moduleContentSection.setAttribute('data-current-module', moduleId);
        moduleContentSection.setAttribute('data-current-step', currentStep.toString());
    }

    // Renderizar el navegador usando la función del componente
    stepNavigatorContainer.innerHTML = createStepNavigator(
        moduleId,
        module.steps,
        currentStep,
        progress[moduleId].steps
    );

    // Agregar eventos a los botones de navegación
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const stepButtons = document.querySelectorAll('.step-button');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentStep > 0) {
                const newStep = currentStep - 1;
                renderStepNavigator(moduleId, newStep);
                renderStepContent(moduleId, newStep);
                saveCurrentState(moduleId, newStep);
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentStep < module.steps.length - 1) {
                const newStep = currentStep + 1;
                renderStepNavigator(moduleId, newStep);
                renderStepContent(moduleId, newStep);
                saveCurrentState(moduleId, newStep);

                // Si es el último paso, marcar el módulo como completado
                if (newStep === module.steps.length - 1) {
                    progress[moduleId].completed = true;
                    localStorage.setItem('moduleProgress', JSON.stringify(progress));

                    // Mostrar modal de módulo completado
                    showModuleCompleteModal(moduleId);
                }
            }
        });
    }

    stepButtons.forEach(button => {
        button.addEventListener('click', function() {
            const stepIndex = parseInt(this.getAttribute('data-step'));
            renderStepNavigator(moduleId, stepIndex);
            renderStepContent(moduleId, stepIndex);
            saveCurrentState(moduleId, stepIndex);
        });
    });

    // Actualizar el indicador de progreso global
    updateGlobalProgress(progress);
}

/**
 * Muestra el modal de módulo completado
 * @param {string} moduleId - ID del módulo completado
 */
function showModuleCompleteModal(moduleId) {
    const modal = document.getElementById('module-complete-modal');
    const modalTitle = document.getElementById('module-complete-title');
    const modalMessage = document.getElementById('module-complete-message');
    const nextModuleButton = document.getElementById('next-module-button');

    if (!modal || !modalTitle || !modalMessage || !nextModuleButton) return;

    // Obtener el módulo actual y el siguiente
    const module = workshopModules[moduleId];
    if (!module) return;

    // Determinar el siguiente módulo
    const moduleIds = Object.keys(workshopModules);
    const currentIndex = moduleIds.indexOf(moduleId);
    const nextModuleId = currentIndex < moduleIds.length - 1 ? moduleIds[currentIndex + 1] : null;

    // Actualizar el contenido del modal
    modalTitle.textContent = `¡Felicidades! Has completado el Módulo ${currentIndex + 1}: ${module.title}`;

    if (nextModuleId) {
        modalMessage.textContent = `Has terminado exitosamente este módulo. ¿Estás listo para continuar con el siguiente módulo?`;
        nextModuleButton.classList.remove('hidden');

        // Agregar evento al botón de siguiente módulo
        nextModuleButton.onclick = function() {
            modal.classList.add('hidden');
            showModuleContent(nextModuleId, 0);
        };
    } else {
        modalMessage.textContent = `¡Felicidades! Has completado todos los módulos del taller.`;
        nextModuleButton.classList.add('hidden');
    }

    // Mostrar el modal
    modal.classList.remove('hidden');
}

/**
 * Renderiza el contenido de un paso específico
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso (0-based)
 */
async function renderStepContent(moduleId, stepIndex) {
    const stepContentContainer = document.getElementById('step-content-container');
    if (!stepContentContainer) return;

    // Mostrar indicador de carga
    stepContentContainer.innerHTML = `
        <div class="flex justify-center items-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            <span class="ml-3 text-blue-900">Cargando contenido...</span>
        </div>
    `;

    try {
        // Obtener la ruta del archivo Markdown para este módulo
        const modulePath = contentPaths[moduleId]?.main;
        if (!modulePath) {
            throw new Error(`No se encontró la ruta para el módulo ${moduleId}`);
        }

        // Primero intentar usar el contenido predefinido en JavaScript
        let moduleContent;
        let usingMarkdown = false;
        let usingFallback = false;

        // Verificar si existe contenido predefinido para este módulo
        let predefinedContent = null;

        switch (moduleId) {
            case 'intro':
                console.log('Usando contenido predefinido para intro');
                predefinedContent = introModuleContent;
                break;
            case 'transform':
                console.log('Usando contenido predefinido para transform');
                predefinedContent = transformModuleContent;
                break;
            case 'demo':
                console.log('Usando contenido predefinido para demo');
                predefinedContent = demoModuleContent || {
                    title: "Demostración de Power BI",
                    description: "Aprende a través de ejemplos prácticos",
                    step1: {
                        title: "Demostración Práctica",
                        content: "<p>Este módulo contiene demostraciones prácticas de Power BI.</p>"
                    }
                };
                break;
            case 'practice':
                console.log('Usando contenido predefinido para practice');
                predefinedContent = practiceModuleContent || {
                    title: "Práctica con Power BI",
                    description: "Aplica lo aprendido con ejercicios prácticos",
                    step1: {
                        title: "Ejercicios Prácticos",
                        content: "<p>Este módulo contiene ejercicios prácticos de Power BI.</p>"
                    }
                };
                break;
        }

        // Si existe contenido predefinido, usarlo
        if (predefinedContent) {
            moduleContent = predefinedContent;
            console.log(`Usando contenido predefinido para el módulo ${moduleId}`);
        }
        // Si no hay contenido predefinido o está en caché, intentar cargar desde Markdown
        else {
            // Si ya tenemos el contenido en caché, usarlo
            if (window.moduleContentCache && window.moduleContentCache[moduleId]) {
                console.log(`Usando contenido en caché para el módulo ${moduleId}`);
                moduleContent = window.moduleContentCache[moduleId];
            } else {
                // Si no, intentar cargarlo desde el archivo Markdown
                console.log(`Intentando cargar contenido para el módulo ${moduleId} desde ${modulePath}`);
                moduleContent = await loadModuleContent(moduleId, modulePath);
                usingMarkdown = true;

                // Si se cargó correctamente, guardar en caché
                if (moduleContent) {
                    console.log(`Contenido Markdown cargado correctamente para el módulo ${moduleId}`);
                    if (!window.moduleContentCache) {
                        window.moduleContentCache = {};
                    }
                    window.moduleContentCache[moduleId] = moduleContent;
                } else {
                    console.warn(`No se pudo cargar el contenido Markdown para ${moduleId}, usando contenido de respaldo`);
                    usingFallback = true;
                }
            }
        }

        // Si no se pudo cargar ningún contenido, usar un respaldo genérico
        if (!moduleContent) {
            switch (moduleId) {
                case 'intro':
                    console.log('Usando contenido predefinido para intro');
                    moduleContent = introModuleContent;
                    break;
                case 'transform':
                    console.log('Usando contenido predefinido para transform');
                    moduleContent = transformModuleContent;
                    break;
                case 'demo':
                    console.log('Usando contenido predefinido para demo');
                    moduleContent = {
                        title: "Demostración de Power BI",
                        description: "Contenido en desarrollo",
                        step1: {
                            title: "Demostración Práctica",
                            content: "<p>Este módulo está en desarrollo. Pronto tendrás acceso a demostraciones prácticas de Power BI.</p>"
                        }
                    };
                    break;
                case 'practice':
                    console.log('Usando contenido predefinido para practice');
                    moduleContent = {
                        title: "Práctica con Power BI",
                        description: "Contenido en desarrollo",
                        step1: {
                            title: "Ejercicios Prácticos",
                            content: "<p>Este módulo está en desarrollo. Pronto tendrás acceso a ejercicios prácticos de Power BI.</p>"
                        }
                    };
                    break;
                default:
                    moduleContent = {
                        title: `Módulo ${moduleId}`,
                        description: "Módulo no encontrado",
                        step1: {
                            title: "Contenido no disponible",
                            content: "<p>No se encontró contenido para este módulo.</p>"
                        }
                    };
            }
        }

        // Modo de usuario (obtener del localStorage o usar el predeterminado)
        const userMode = localStorage.getItem('userMode') || 'estudiante';

        // Renderizar el contenido del paso
        stepContentContainer.innerHTML = generateStepContentHTML(moduleContent, moduleId, stepIndex, userMode);

        // Si estamos usando contenido de respaldo o Markdown, mostrar una notificación discreta
        if (usingFallback) {
            // Solo mostrar notificación si realmente hubo un error al cargar
            const notification = document.createElement('div');
            notification.className = 'bg-yellow-50 border-l-2 border-yellow-400 text-yellow-700 p-2 mb-2 text-xs';
            notification.innerHTML = `
                <div class="flex items-center">
                    <div class="py-1"><svg class="h-4 w-4 mr-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div>
                    <div>
                        <p class="text-xs">Contenido cargado desde la versión integrada.</p>
                    </div>
                </div>
            `;
            stepContentContainer.insertBefore(notification, stepContentContainer.firstChild);
        }

        // Inicializar componentes interactivos en el contenido
        initStepInteractiveElements();
    } catch (error) {
        console.error('Error al renderizar el contenido del paso:', error);

        // Mostrar mensaje de error
        stepContentContainer.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">⚠️</div>
                <h4 class="text-xl font-bold mb-2">Error al cargar el contenido</h4>
                <p class="text-gray-600 mb-4">No se pudo cargar el contenido del módulo. Por favor, intenta de nuevo más tarde.</p>
                <div class="text-sm text-gray-500 mb-4 bg-gray-100 p-3 rounded-lg max-w-lg mx-auto text-left">
                    <strong>Detalles del error:</strong><br>
                    ${error.message || 'Error desconocido'}
                </div>
                <button id="retry-load-btn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Reintentar
                </button>
                <button id="use-fallback-btn" class="ml-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                    Usar Contenido Predefinido
                </button>
            </div>
        `;

        // Agregar evento al botón de reintentar
        const retryButton = document.getElementById('retry-load-btn');
        if (retryButton) {
            retryButton.addEventListener('click', function() {
                renderStepContent(moduleId, stepIndex);
            });
        }

        // Agregar evento al botón de usar contenido predefinido
        const fallbackButton = document.getElementById('use-fallback-btn');
        if (fallbackButton) {
            fallbackButton.addEventListener('click', function() {
                // Forzar el uso del contenido predefinido
                if (!window.moduleContentCache) {
                    window.moduleContentCache = {};
                }
                window.moduleContentCache[moduleId] = null;
                renderStepContent(moduleId, stepIndex);
            });
        }
    }
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
 * Renderiza los recursos para un modal
 * @param {Array} resources - Array de recursos a renderizar
 * @returns {string} HTML de los recursos
 */
function renderResources(resources) {
    if (!resources || resources.length === 0) {
        return '<p class="text-center text-gray-500 py-4">No hay recursos disponibles.</p>';
    }

    return resources.map(resource => {
        return createResourceCard(
            resource.icon,
            resource.title,
            resource.description,
            resource.type,
            resource.size,
            resource.duration,
            resource.url
        );
    }).join('');
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
    // Guardar el modo en localStorage para persistencia
    localStorage.setItem('userMode', mode);

    console.log(`Modo cambiado a: ${mode}`);

    // Actualizar la interfaz según el modo seleccionado
    document.body.setAttribute('data-mode', mode);

    // Mostrar/ocultar elementos específicos según el modo
    const facilitatorElements = document.querySelectorAll('.facilitator-only');
    const studentElements = document.querySelectorAll('.student-only');
    const selfGuidedElements = document.querySelectorAll('.self-guided-only');

    // Ocultar todos los elementos específicos de modo
    facilitatorElements.forEach(el => el.classList.add('hidden'));
    studentElements.forEach(el => el.classList.add('hidden'));
    selfGuidedElements.forEach(el => el.classList.add('hidden'));

    // Mostrar solo los elementos del modo seleccionado
    switch (mode) {
        case 'facilitador':
            facilitatorElements.forEach(el => el.classList.remove('hidden'));
            // Cambiar el tema de color para facilitadores
            document.documentElement.style.setProperty('--primary-color', '#e74c3c');
            document.documentElement.style.setProperty('--secondary-color', '#c0392b');
            // Actualizar el texto del perfil
            updateProfileText('Facilitador', 'Modo facilitador activado');
            break;
        case 'estudiante':
            studentElements.forEach(el => el.classList.remove('hidden'));
            // Cambiar el tema de color para estudiantes (azul por defecto)
            document.documentElement.style.setProperty('--primary-color', '#3498db');
            document.documentElement.style.setProperty('--secondary-color', '#2980b9');
            // Actualizar el texto del perfil
            updateProfileText('Estudiante', 'Modo estudiante activado');
            break;
        case 'autoguiado':
            selfGuidedElements.forEach(el => el.classList.remove('hidden'));
            // Cambiar el tema de color para autoguiado
            document.documentElement.style.setProperty('--primary-color', '#2ecc71');
            document.documentElement.style.setProperty('--secondary-color', '#27ae60');
            // Actualizar el texto del perfil
            updateProfileText('Autoguiado', 'Modo autoguiado activado');
            break;
    }

    // Actualizar el icono del modo
    updateModeIcon(mode);

    // Si estamos en un módulo, actualizar el contenido para reflejar el nuevo modo
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection && !moduleContentSection.classList.contains('hidden')) {
        // Obtener el módulo y paso actuales
        const currentModule = moduleContentSection.getAttribute('data-current-module');
        const currentStep = parseInt(moduleContentSection.getAttribute('data-current-step') || '0');

        if (currentModule) {
            // Guardar el botón de volver y otros elementos importantes
            const backButton = document.getElementById('back-to-path-btn');
            const backButtonHTML = backButton ? backButton.outerHTML : '';

            // Mostrar indicador de carga
            moduleContentSection.innerHTML = `
                <div class="mb-6">
                    ${backButtonHTML}
                </div>
                <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div class="flex justify-center items-center py-12">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
                        <span class="ml-3 text-blue-900">Actualizando contenido para modo ${mode}...</span>
                    </div>
                </div>
            `;

            // Restaurar el evento del botón de volver
            const newBackButton = document.getElementById('back-to-path-btn');
            if (newBackButton && backButton) {
                newBackButton.addEventListener('click', function() {
                    moduleContentSection.classList.add('hidden');
                    document.getElementById('learning-path-section').classList.remove('hidden');
                    initLearningPath();
                });
            }

            // Pequeño retraso para mostrar la transición
            setTimeout(() => {
                // Volver a renderizar el contenido con el nuevo modo
                showModuleContent(currentModule, currentStep);
            }, 800);
        }
    }
}

/**
 * Actualiza el texto del perfil según el modo seleccionado
 * @param {string} title - Título del perfil
 * @param {string} tooltip - Texto del tooltip
 */
function updateProfileText(title, tooltip) {
    const profileTitle = document.querySelector('#user-menu-btn span');
    if (profileTitle) {
        profileTitle.textContent = title;
        profileTitle.setAttribute('title', tooltip);
    }
}

/**
 * Actualiza el icono del modo de usuario
 * @param {string} mode - Modo seleccionado
 */
function updateModeIcon(mode) {
    const iconContainer = document.querySelector('#user-menu-btn .h-10');
    if (!iconContainer) return;

    // Limpiar clases anteriores
    iconContainer.className = 'h-10 w-10 rounded-full flex items-center justify-center';

    // Aplicar estilo según el modo
    switch (mode) {
        case 'facilitador':
            iconContainer.classList.add('bg-red-500');
            iconContainer.innerHTML = '<i class="fas fa-chalkboard-teacher text-white"></i>';
            break;
        case 'estudiante':
            iconContainer.classList.add('bg-blue-500');
            iconContainer.innerHTML = '<i class="fas fa-user-graduate text-white"></i>';
            break;
        case 'autoguiado':
            iconContainer.classList.add('bg-green-500');
            iconContainer.innerHTML = '<i class="fas fa-book-reader text-white"></i>';
            break;
        default:
            iconContainer.classList.add('bg-yellow-400');
            iconContainer.innerHTML = '<i class="fas fa-user text-white"></i>';
    }
}

/**
 * Inicializa el botón de inicio del taller
 */
function initStartWorkshopButton() {
    const startButton = document.getElementById('start-workshop-btn');
    if (!startButton) return;

    startButton.addEventListener('click', function() {
        // Desplazarse a la sección de modalidades de uso
        const modeSections = document.querySelectorAll('section h2');
        let modeSection = null;

        // Buscar la sección que contiene "Modalidades de Uso"
        for (const section of modeSections) {
            if (section.textContent.includes('Modalidades de Uso')) {
                modeSection = section.closest('section');
                break;
            }
        }

        if (modeSection) {
            modeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Si no se encuentra la sección, mostrar la ruta de aprendizaje como respaldo
            document.getElementById('learning-path-section').scrollIntoView({ behavior: 'smooth' });
        }
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
    // Primero, asegurarse de que todos los modales estén cerrados
    closeAllModals();

    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const requirementsBtn = document.getElementById('requirements-btn');
    const modals = document.querySelectorAll('.modal');

    // Asegurarse de que todos los modales tengan la clase 'hidden' y display:none
    modals.forEach(modal => {
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    });

    // Configurar los activadores de modales
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Cerrar todos los modales primero
            closeAllModals();

            // Abrir el modal específico
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.remove('hidden');
                modal.style.display = 'flex';

                // Marcar el body para indicar que hay un modal abierto
                document.body.classList.add('modal-open');

                console.log(`Modal abierto: ${modalId}`);
            }
        });
    });

    // Configurar los botones de cierre
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.style.display = 'none';

                // Quitar la marca del body si no hay más modales abiertos
                const openModals = document.querySelectorAll('.modal:not(.hidden)');
                if (openModals.length === 0) {
                    document.body.classList.remove('modal-open');
                }

                console.log('Modal cerrado por botón de cierre');
            }
        });
    });

    // Configurar cierre al hacer clic fuera del contenido del modal
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            // Solo cerrar si se hizo clic directamente en el fondo del modal, no en su contenido
            if (event.target === this) {
                this.classList.add('hidden');
                this.style.display = 'none';

                // Quitar la marca del body si no hay más modales abiertos
                const openModals = document.querySelectorAll('.modal:not(.hidden)');
                if (openModals.length === 0) {
                    document.body.classList.remove('modal-open');
                }

                console.log('Modal cerrado por clic fuera');
            }
        });
    });

    // Inicializar el botón de requisitos en el menú de usuario
    if (requirementsBtn) {
        requirementsBtn.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Cerrar todos los modales primero
            closeAllModals();

            const requirementsModal = document.getElementById('requirements-modal');
            if (requirementsModal) {
                requirementsModal.classList.remove('hidden');
                requirementsModal.style.display = 'flex';

                // Marcar el body para indicar que hay un modal abierto
                document.body.classList.add('modal-open');

                console.log('Modal de requisitos abierto');
            }
        });
    }

    // Agregar manejador de tecla Escape para cerrar modales
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllModals();
            console.log('Modales cerrados por tecla Escape');
        }
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

/**
 * Cierra todos los modales abiertos
 */
function closeAllModals() {
    try {
        // Obtener todos los modales
        const modals = document.querySelectorAll('.modal');

        if (modals.length === 0) {
            console.log('No se encontraron modales para cerrar');
            return;
        }

        // Ocultar cada modal y asegurarse de que tenga la clase 'hidden'
        modals.forEach(modal => {
            if (modal) {
                modal.style.display = 'none'; // Forzar display none
                modal.classList.add('hidden');

                // Asegurarse de que el modal no tenga display:flex que podría anular el hidden
                const computedStyle = window.getComputedStyle(modal);
                if (computedStyle.display !== 'none') {
                    modal.style.display = 'none !important';
                }
            }
        });

        // También eliminar cualquier clase de bloqueo del body
        document.body.classList.remove('modal-open', 'overflow-hidden');

        console.log(`${modals.length} modales han sido cerrados`);
    } catch (error) {
        console.error('Error al cerrar modales:', error);
    }
}

/**
 * Inicializa el botón de reinicio del taller
 */
function initResetProgressButton() {
    const resetButton = document.getElementById('reset-progress-btn');
    if (!resetButton) return;

    resetButton.addEventListener('click', function() {
        // Mostrar confirmación con SweetAlert2
        Swal.fire({
            title: '¿Reiniciar progreso?',
            text: '¿Estás seguro de que deseas reiniciar todo el progreso del taller? Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1a3e82',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, reiniciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                resetWorkshopProgress();

                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'Progreso reiniciado',
                    text: 'El progreso del taller ha sido reiniciado correctamente.',
                    icon: 'success',
                    confirmButtonColor: '#1a3e82',
                    timer: 2000,
                    timerProgressBar: true
                }).then(() => {
                    // Recargar la página con parámetro de reinicio
                    window.location.href = window.location.pathname + '?reset=true';
                });
            }
        });
    });
}

/**
 * Reinicia todo el progreso del taller
 */
function resetWorkshopProgress() {
    try {
        // Eliminar datos de progreso
        localStorage.removeItem('moduleProgress');
        localStorage.removeItem('currentState');

        // Mantener el modo de usuario
        const userMode = localStorage.getItem('userMode');

        // Limpiar localStorage completamente
        localStorage.clear();

        // Restaurar el modo de usuario si existía
        if (userMode) {
            localStorage.setItem('userMode', userMode);
        }

        console.log('Progreso del taller reiniciado correctamente');

        // Crear progreso inicial
        const initialProgress = {
            intro: { completed: false, steps: [false, false, false, false, false] },
            transform: { completed: false, steps: [false, false, false, false] },
            demo: { completed: false, steps: [false, false, false, false, false] },
            practice: { completed: false, steps: [false, false, false, false] }
        };

        // Guardar progreso inicial
        localStorage.setItem('moduleProgress', JSON.stringify(initialProgress));

        return true;
    } catch (error) {
        console.error('Error al reiniciar el progreso:', error);
        return false;
    }
}

/**
 * Agrega un botón de acceso directo en la esquina inferior derecha
 */
function addDirectAccessButton() {
    // Crear el botón
    const button = document.createElement('a');
    button.href = 'acceso-directo.html';
    button.className = 'fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors z-40';
    button.title = 'Acceso directo sin modales';
    button.innerHTML = '<i class="fas fa-door-open"></i>';

    // Agregar estilos adicionales
    button.style.width = '48px';
    button.style.height = '48px';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.fontSize = '1.25rem';

    // Agregar al body
    document.body.appendChild(button);

    console.log('Botón de acceso directo agregado');
}
