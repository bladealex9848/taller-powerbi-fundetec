document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    let currentModule = 'intro';
    let currentStep = 0;
    let userMode = 'estudiante';
    let progress = {
        intro: { completed: false, steps: [false, false, false, false, false] },
        transform: { completed: false, steps: [false, false, false, false] },
        demo: { completed: false, steps: [false, false, false] },
        practice: { completed: false, steps: [false, false, false, false] }
    };

    // Elementos DOM
    const moduleButtons = document.querySelectorAll('.module-button');
    const stepButtons = document.querySelectorAll('.step-button');
    const nextButton = document.querySelector('#next-button');
    const prevButton = document.querySelector('#prev-button');
    const modeSelector = document.querySelector('#mode-selector');
    const facilitatorPanel = document.querySelector('#facilitator-panel');
    const moduleContent = document.querySelectorAll('.module-content');
    const stepContent = document.querySelectorAll('.step-content');
    const progressBars = document.querySelectorAll('.progress-bar');
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const objectiveHeaders = document.querySelectorAll('.objective-header');
    const checkboxes = document.querySelectorAll('.checkpoint input[type="checkbox"]');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const resourceButtons = document.querySelectorAll('.resource-btn');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    // Inicialización
    initializeApp();

    // Funciones principales
    function initializeApp() {
        // Inicializar eventos
        initModuleNavigation();
        initStepNavigation();
        initModeSelection();
        initTooltips();
        initAccordions();
        initObjectives();
        initCheckboxes();
        initQuizzes();
        initModals();
        
        // Mostrar el módulo y paso inicial
        showCurrentModuleAndStep();
        updateProgressDisplay();
    }

    function initModuleNavigation() {
        moduleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const moduleId = this.getAttribute('data-module');
                navigateToModule(moduleId);
            });
        });
    }

    function initStepNavigation() {
        stepButtons.forEach(button => {
            button.addEventListener('click', function() {
                const stepIndex = parseInt(this.getAttribute('data-step'));
                navigateToStep(stepIndex);
            });
        });

        if (nextButton) {
            nextButton.addEventListener('click', goToNextStep);
        }

        if (prevButton) {
            prevButton.addEventListener('click', goToPrevStep);
        }
    }

    function initModeSelection() {
        if (modeSelector) {
            modeSelector.addEventListener('change', function() {
                userMode = this.value;
                toggleFacilitatorPanel();
            });
        }
    }

    function initTooltips() {
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

    function initAccordions() {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            });
        });
    }

    function initObjectives() {
        objectiveHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const details = this.nextElementSibling;
                const icon = this.querySelector('.expand-icon');
                
                if (details.classList.contains('hidden')) {
                    details.classList.remove('hidden');
                    icon.textContent = '-';
                } else {
                    details.classList.add('hidden');
                    icon.textContent = '+';
                }
            });
        });
    }

    function initCheckboxes() {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateProgress();
            });
        });
    }

    function initQuizzes() {
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
                
                // Actualizar progreso si es correcta
                if (isCorrect) {
                    updateProgress();
                }
            });
        });
    }

    function initModals() {
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
                modal.classList.add('hidden');
            });
        });
    }

    // Navegación
    function navigateToModule(moduleId) {
        currentModule = moduleId;
        currentStep = 0;
        showCurrentModuleAndStep();
        updateProgressDisplay();
    }

    function navigateToStep(stepIndex) {
        currentStep = stepIndex;
        showCurrentModuleAndStep();
    }

    function goToNextStep() {
        const moduleData = getModuleData(currentModule);
        if (currentStep < moduleData.steps.length - 1) {
            currentStep++;
            // Marcar el paso actual como completado
            markStepAsCompleted(currentModule, currentStep - 1);
        } else {
            // Último paso del módulo
            markStepAsCompleted(currentModule, currentStep);
            markModuleAsCompleted(currentModule);
            
            // Mostrar modal de completado
            const moduleCompleteModal = document.getElementById('module-complete-modal');
            if (moduleCompleteModal) {
                moduleCompleteModal.classList.remove('hidden');
            }
            
            // Verificar si hay un siguiente módulo
            const nextModule = getNextModule(currentModule);
            if (nextModule) {
                // Preparar para navegar al siguiente módulo
                document.getElementById('next-module-button').setAttribute('data-module', nextModule);
            }
        }
        
        showCurrentModuleAndStep();
        updateProgressDisplay();
    }

    function goToPrevStep() {
        if (currentStep > 0) {
            currentStep--;
            showCurrentModuleAndStep();
        }
    }

    // Utilidades
    function showCurrentModuleAndStep() {
        // Ocultar todos los contenidos de módulos
        moduleContent.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Mostrar el contenido del módulo actual
        const currentModuleContent = document.getElementById(`${currentModule}-content`);
        if (currentModuleContent) {
            currentModuleContent.classList.remove('hidden');
        }
        
        // Ocultar todos los contenidos de pasos
        stepContent.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Mostrar el contenido del paso actual
        const currentStepContent = document.getElementById(`${currentModule}-step-${currentStep}`);
        if (currentStepContent) {
            currentStepContent.classList.remove('hidden');
        }
        
        // Actualizar navegación
        updateStepNavigation();
    }

    function updateStepNavigation() {
        const moduleData = getModuleData(currentModule);
        
        // Actualizar indicador de paso
        const stepIndicator = document.getElementById('step-indicator');
        if (stepIndicator) {
            stepIndicator.textContent = `Paso ${currentStep + 1} de ${moduleData.steps.length}`;
        }
        
        // Habilitar/deshabilitar botones de navegación
        if (prevButton) {
            if (currentStep === 0) {
                prevButton.classList.add('cursor-not-allowed', 'opacity-50');
                prevButton.disabled = true;
            } else {
                prevButton.classList.remove('cursor-not-allowed', 'opacity-50');
                prevButton.disabled = false;
            }
        }
    }

    function toggleFacilitatorPanel() {
        if (facilitatorPanel) {
            if (userMode === 'facilitador') {
                facilitatorPanel.classList.remove('hidden');
            } else {
                facilitatorPanel.classList.add('hidden');
            }
        }
    }

    function updateProgress() {
        // Actualizar el progreso basado en checkboxes, quizzes, etc.
        // Esta es una implementación simplificada
        const moduleCheckboxes = document.querySelectorAll(`#${currentModule}-content .checkpoint input[type="checkbox"]:checked`);
        const totalCheckboxes = document.querySelectorAll(`#${currentModule}-content .checkpoint input[type="checkbox"]`);
        
        if (totalCheckboxes.length > 0) {
            const progressPercentage = Math.round((moduleCheckboxes.length / totalCheckboxes.length) * 100);
            updateModuleProgress(currentModule, progressPercentage);
        }
        
        updateProgressDisplay();
    }

    function updateProgressDisplay() {
        // Actualizar barras de progreso y otros indicadores visuales
        progressBars.forEach(bar => {
            const moduleId = bar.getAttribute('data-module');
            const percentage = calculateModuleProgress(moduleId);
            const fill = bar.querySelector('.progress-fill');
            
            if (fill) {
                fill.style.width = `${percentage}%`;
            }
            
            const text = bar.nextElementSibling;
            if (text) {
                text.textContent = `${percentage}% completado`;
            }
        });
        
        // Actualizar iconos de estado en la ruta de aprendizaje
        moduleButtons.forEach(button => {
            const moduleId = button.getAttribute('data-module');
            const isCompleted = progress[moduleId].completed;
            const icon = button.querySelector('.module-icon');
            
            if (icon) {
                if (isCompleted) {
                    icon.classList.remove('bg-gray-300');
                    icon.classList.add('bg-green-500');
                } else if (moduleId === currentModule) {
                    icon.classList.remove('bg-gray-300');
                    icon.classList.add('bg-blue-600');
                } else {
                    icon.classList.remove('bg-blue-600', 'bg-green-500');
                    icon.classList.add('bg-gray-300');
                }
            }
        });
    }

    function markStepAsCompleted(moduleId, stepIndex) {
        if (progress[moduleId] && progress[moduleId].steps[stepIndex] !== undefined) {
            progress[moduleId].steps[stepIndex] = true;
        }
    }

    function markModuleAsCompleted(moduleId) {
        if (progress[moduleId]) {
            progress[moduleId].completed = true;
        }
    }

    function calculateModuleProgress(moduleId) {
        if (!progress[moduleId]) return 0;
        
        const completedSteps = progress[moduleId].steps.filter(step => step).length;
        const totalSteps = progress[moduleId].steps.length;
        
        return Math.round((completedSteps / totalSteps) * 100);
    }

    function getModuleData(moduleId) {
        // Datos de los módulos (estructura similar a la del prototipo React)
        const moduleData = {
            intro: {
                title: "Introducción al Análisis de Datos y Power BI",
                duration: "45 min",
                steps: [
                    "Importancia del Análisis de Datos",
                    "Microsoft Power BI: Componentes Esenciales",
                    "Recorrido por la Interfaz",
                    "Tipos de Datos y Modelos (Conceptos Básicos)",
                    "Asistentes IA en el Flujo de Trabajo"
                ]
            },
            transform: {
                title: "Conexión y Transformación de Datos",
                duration: "60 min",
                steps: [
                    "Conexión a Fuentes de Datos",
                    "Introducción a Power Query (Editor)",
                    "Transformaciones Fundamentales",
                    "Modelado Básico: Creación de Relaciones"
                ]
            },
            demo: {
                title: "Demostración Magistral: Power BI en Acción",
                duration: "60 min",
                steps: [
                    "Contexto: Sistema Marduk y Dashboards Judiciales",
                    "Conexión y Preparación de Datos",
                    "Introducción a DAX"
                ]
            },
            practice: {
                title: "Aplicación Práctica y Conclusiones",
                duration: "75 min",
                steps: [
                    "Práctica Guiada: Introducción y Dataset",
                    "Desarrollo Paso a Paso",
                    "Resultado Esperado y Solución de Problemas",
                    "Recursos para Continuar Aprendiendo"
                ]
            }
        };
        
        return moduleData[moduleId] || moduleData.intro;
    }

    function getNextModule(currentModuleId) {
        const moduleOrder = ['intro', 'transform', 'demo', 'practice'];
        const currentIndex = moduleOrder.indexOf(currentModuleId);
        
        if (currentIndex < moduleOrder.length - 1) {
            return moduleOrder[currentIndex + 1];
        }
        
        return null;
    }
});
