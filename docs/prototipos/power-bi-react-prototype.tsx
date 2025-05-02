import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Circle, Info, User, Book, Award, Download, HelpCircle, BarChart2, RefreshCw } from 'lucide-react';

// Componente principal de la aplicación
export default function PowerBIWorkshopPlatform() {
  const [activeModule, setActiveModule] = useState('intro');
  const [activeStep, setActiveStep] = useState(0);
  const [userMode, setUserMode] = useState('estudiante');
  const [showFacilitatorPanel, setShowFacilitatorPanel] = useState(false);
  const [progress, setProgress] = useState({
    intro: { completed: false, steps: [false, false, false, false, false] },
    transform: { completed: false, steps: [false, false, false, false] },
    demo: { completed: false, steps: [false, false, false] },
    practice: { completed: false, steps: [false, false, false, false] }
  });
  
  // Modal state
  const [activeModal, setActiveModal] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  // Toggle facilitator panel based on mode
  useEffect(() => {
    if (userMode === 'facilitador') {
      setShowFacilitatorPanel(true);
    } else {
      setShowFacilitatorPanel(false);
    }
  }, [userMode]);
  
  // Navigate to next step
  const goToNextStep = () => {
    const moduleSteps = moduleContent[activeModule].steps;
    if (activeStep < moduleSteps.length - 1) {
      setActiveStep(activeStep + 1);
      // Update progress
      const newProgress = {...progress};
      newProgress[activeModule].steps[activeStep] = true;
      setProgress(newProgress);
    } else {
      // Last step in module
      const moduleKeys = Object.keys(moduleContent);
      const currentIndex = moduleKeys.indexOf(activeModule);
      if (currentIndex < moduleKeys.length - 1) {
        // Mark current module as completed
        const newProgress = {...progress};
        newProgress[activeModule].completed = true;
        newProgress[activeModule].steps[activeStep] = true;
        setProgress(newProgress);
        
        // Show completion message and navigate to next module
        setActiveModal('moduleComplete');
      }
    }
  };
  
  // Navigate to previous step
  const goToPrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  
  // Navigate to specific module
  const navigateToModule = (moduleId) => {
    setActiveModule(moduleId);
    setActiveStep(0);
  };
  
  // Open modal
  const openModal = (modalId) => {
    setActiveModal(modalId);
  };
  
  // Close modal
  const closeModal = () => {
    setActiveModal(null);
  };
  
  // Show tooltip
  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };
  
  // Hide tooltip
  const hideTooltip = () => {
    setActiveTooltip(null);
  };
  
  // Helper function to calculate progress percentage
  const calculateModuleProgress = (moduleId) => {
    const completedSteps = progress[moduleId].steps.filter(step => step).length;
    const totalSteps = progress[moduleId].steps.length;
    return Math.round((completedSteps / totalSteps) * 100);
  };

  // Module content structure
  const moduleContent = {
    intro: {
      title: "Introducción al Análisis de Datos y Power BI",
      duration: "45 min",
      icon: <BarChart2 />,
      steps: [
        "Importancia del Análisis de Datos",
        "Microsoft Power BI: Componentes Esenciales",
        "Recorrido por la Interfaz",
        "Tipos de Datos y Modelos (Conceptos Básicos)",
        "Asistentes IA en el Flujo de Trabajo"
      ],
      facilitatorNotes: {
        timeAllocation: [
          "Bienvenida y objetivos: 5 minutos",
          "Importancia del análisis de datos: 5 minutos",
          "Componentes Power BI: 10 minutos",
          "Recorrido por la interfaz: 5 minutos",
          "Tipos de datos y modelos: 10 minutos",
          "Asistentes IA en el flujo de trabajo: 5 minutos",
          "Ejercicio interactivo: 5 minutos"
        ],
        keyPoints: [
          "La diferencia entre datos e información útil",
          "Power BI Desktop como herramienta principal del taller",
          "Las tres vistas principales (Informe, Datos, Modelo)",
          "La importancia de definir correctamente los tipos de datos",
          "Los asistentes IA como complemento, no reemplazo"
        ],
        commonQuestions: [
          {
            question: "¿Es Power BI gratuito?",
            answer: "Power BI Desktop es gratuito para uso personal y educativo. Power BI Service tiene una versión gratuita con limitaciones y opciones de licencia premium para empresas."
          },
          {
            question: "¿Funciona en Mac?",
            answer: "Power BI Desktop solo está disponible nativamente para Windows. Los usuarios de Mac pueden utilizar máquinas virtuales con Windows o acceder a características limitadas a través de Power BI Service en navegador."
          }
        ]
      }
    },
    transform: {
      title: "Conexión y Transformación de Datos",
      duration: "60 min",
      icon: <RefreshCw />,
      steps: [
        "Conexión a Fuentes de Datos",
        "Introducción a Power Query (Editor)",
        "Transformaciones Fundamentales",
        "Modelado Básico: Creación de Relaciones"
      ],
      facilitatorNotes: {
        timeAllocation: [
          "Conexión a fuentes de datos: 10 minutos",
          "Power Query Editor: 15 minutos",
          "Transformaciones clave: 20 minutos",
          "Modelado básico: 15 minutos"
        ],
        keyPoints: [
          "Importancia de seleccionar la fuente correcta",
          "Power Query registra cada paso de transformación",
          "Tipos de datos correctos son fundamentales",
          "Relaciones bien definidas son la base de un buen modelo"
        ],
        commonQuestions: [
          {
            question: "¿Se puede conectar a bases de datos en la nube?",
            answer: "Sí, Power BI puede conectarse a múltiples fuentes en la nube como Azure SQL, Amazon Redshift, Google BigQuery, entre otras."
          },
          {
            question: "¿Se pueden combinar varias fuentes de datos?",
            answer: "Sí, Power Query permite hacer operaciones de Merge (unión) y Append (anexar) para combinar datos de diferentes fuentes."
          }
        ]
      }
    },
    demo: {
      title: "Demostración Magistral: Power BI en Acción",
      duration: "60 min",
      icon: <CheckCircle />,
      steps: [
        "Contexto: Sistema Marduk y Dashboards Judiciales",
        "Conexión y Preparación de Datos",
        "Introducción a DAX"
      ],
      facilitatorNotes: {
        timeAllocation: [
          "Introducción al caso: 5 minutos",
          "Conexión y preparación: 15 minutos",
          "Introducción a DAX: 15 minutos",
          "Construcción del dashboard: 15 minutos",
          "Interactividad: 10 minutos"
        ],
        keyPoints: [
          "Enfatizar el impacto real del dashboard en la gestión judicial",
          "Mantener las transformaciones simples para claridad",
          "DAX es potente pero empezar con funciones básicas",
          "La interactividad es clave para descubrir insights"
        ],
        commonQuestions: [
          {
            question: "¿Qué tan complejo es el sistema Marduk real?",
            answer: "El sistema Marduk completo integra múltiples fuentes de datos y tiene varias capas de procesamiento, pero para el workshop se presenta una versión simplificada que captura los elementos esenciales."
          },
          {
            question: "¿Es necesario aprender programación para usar DAX?",
            answer: "DAX tiene una sintaxis que recuerda a Excel. No es necesario ser programador, pero entender conceptos como funciones, parámetros y contextos de filtro es importante para avanzar."
          }
        ]
      }
    },
    practice: {
      title: "Aplicación Práctica y Conclusiones",
      duration: "75 min",
      icon: <HelpCircle />,
      steps: [
        "Práctica Guiada: Introducción y Dataset",
        "Desarrollo Paso a Paso",
        "Resultado Esperado y Solución de Problemas",
        "Recursos para Continuar Aprendiendo"
      ],
      facilitatorNotes: {
        timeAllocation: [
          "Introducción a la práctica: 5 minutos",
          "Desarrollo paso a paso: 45 minutos",
          "Revisión de resultados: 10 minutos",
          "Recursos y cierre: 15 minutos"
        ],
        keyPoints: [
          "Asegurar que todos tienen acceso a los archivos de ejemplo",
          "Ir despacio en los pasos críticos (conexión, relaciones)",
          "Presentar problemas comunes antes de que ocurran",
          "Enfatizar recursos para aprendizaje continuo"
        ],
        commonQuestions: [
          {
            question: "¿Dónde encuentro más datasets para practicar?",
            answer: "Microsoft proporciona datasets de ejemplo en su documentación oficial. También puedes explorar Kaggle.com para conjuntos de datos públicos en diversos dominios."
          },
          {
            question: "¿Cómo puedo compartir mis reports con otros?",
            answer: "Puedes publicar tus informes en el servicio Power BI (requiere cuenta), exportarlos como PDF/PowerPoint, o compartir el archivo .pbix directamente si los destinatarios tienen Power BI Desktop."
          }
        ]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/48/48" 
              alt="FUNDETEC Logo" 
              className="mr-3"
            />
            <h1 className="text-xl font-bold">Taller de Power BI - FUNDETEC</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              className="px-3 py-1 rounded bg-blue-700 text-white border border-blue-600"
              value={userMode}
              onChange={(e) => setUserMode(e.target.value)}
            >
              <option value="estudiante">Modo Estudiante</option>
              <option value="facilitador">Modo Facilitador</option>
              <option value="autoguiado">Modo Autoguiado</option>
            </select>
            <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-3 py-1 rounded">
              <User size={16} className="mr-1" />
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 mt-4">
        {/* Learning Path */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Camino de Aprendizaje</h2>
          <div className="flex flex-wrap justify-between items-center">
            {Object.keys(moduleContent).map((moduleId, index) => (
              <React.Fragment key={moduleId}>
                {/* Module Node */}
                <div 
                  className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeModule === moduleId ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => navigateToModule(moduleId)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${
                    activeModule === moduleId ? 'bg-blue-600' : 
                    progress[moduleId].completed ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    {moduleContent[moduleId].icon}
                  </div>
                  <div className="w-16 h-4 flex justify-center mt-1">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${calculateModuleProgress(moduleId)}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="font-bold text-sm">{index + 1}. {moduleId.charAt(0).toUpperCase() + moduleId.slice(1)}</span>
                    <div className="text-xs text-gray-500">{moduleContent[moduleId].duration}</div>
                  </div>
                </div>
                
                {/* Connector (except after last item) */}
                {index < Object.keys(moduleContent).length - 1 && (
                  <div className="hidden md:block w-16 h-px bg-gray-300 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Module Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-800">
                Módulo {Object.keys(moduleContent).indexOf(activeModule) + 1}: {moduleContent[activeModule].title}
              </h2>
              <div className="text-sm text-gray-600 mt-1">
                <span className="mr-4">
                  <span className="font-medium">Duración:</span> {moduleContent[activeModule].duration}
                </span>
                <span>
                  <span className="font-medium">Progreso:</span> {calculateModuleProgress(activeModule)}%
                </span>
              </div>
            </div>
            <div className="flex items-center">
              {userMode === 'facilitador' && (
                <button 
                  className={`mr-4 px-4 py-2 rounded-md flex items-center ${
                    showFacilitatorPanel ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                  onClick={() => setShowFacilitatorPanel(!showFacilitatorPanel)}
                >
                  <HelpCircle size={16} className="mr-2" />
                  {showFacilitatorPanel ? 'Ocultar Notas' : 'Mostrar Notas'}
                </button>
              )}
              <button 
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 rounded-md flex items-center"
                onClick={() => openModal('moduleResources')}
              >
                <Download size={16} className="mr-2" />
                Recursos
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{width: `${calculateModuleProgress(activeModule)}%`}}
            ></div>
          </div>
        </div>
        
        {/* Facilitator Panel - Conditionally rendered */}
        {showFacilitatorPanel && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-800">
                <span className="flex items-center">
                  <User size={20} className="mr-2" />
                  Notas para el Facilitador
                </span>
              </h3>
              <button 
                className="text-red-500 hover:text-red-700"
                onClick={() => setShowFacilitatorPanel(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Time Allocation */}
              <div>
                <h4 className="font-bold text-red-800 mb-2">Distribución de Tiempo Recomendada:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {moduleContent[activeModule].facilitatorNotes.timeAllocation.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Key Points */}
              <div>
                <h4 className="font-bold text-red-800 mb-2">Puntos Clave a Enfatizar:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {moduleContent[activeModule].facilitatorNotes.keyPoints.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Common Questions */}
            <div className="mt-4">
              <h4 className="font-bold text-red-800 mb-2">Preguntas Frecuentes:</h4>
              <div className="space-y-3">
                {moduleContent[activeModule].facilitatorNotes.commonQuestions.map((qa, index) => (
                  <div key={index} className="bg-white rounded p-3 shadow-sm">
                    <div className="font-medium text-red-700">{qa.question}</div>
                    <div className="text-sm mt-1">{qa.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Content Steps Navigator */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <button 
              className={`flex items-center px-4 py-2 rounded ${
                activeStep > 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              onClick={goToPrevStep}
              disabled={activeStep === 0}
            >
              <ChevronLeft size={16} className="mr-1" />
              Anterior
            </button>
            
            <span className="font-medium">
              Paso {activeStep + 1} de {moduleContent[activeModule].steps.length}
            </span>
            
            <button 
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={goToNextStep}
            >
              Siguiente
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          {/* Steps Progress */}
          <div className="flex justify-between mb-6">
            {moduleContent[activeModule].steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center cursor-pointer ${
                  index > activeStep ? 'opacity-50' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center 
                  ${index === activeStep ? 'bg-blue-600 text-white' : 
                    progress[activeModule].steps[index] ? 'bg-green-100 text-green-700 border border-green-300' : 
                    'bg-gray-100 text-gray-400 border border-gray-200'}
                `}>
                  {progress[activeModule].steps[index] ? (
                    <CheckCircle size={16} />
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="h-px w-16 bg-gray-200 my-2 hidden md:block"></div>
                <span className="text-xs text-center hidden md:block">
                  {step.length > 20 ? step.substring(0, 18) + '...' : step}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Actual Content for Current Step */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            {activeStep + 1}.{activeStep + 1} {moduleContent[activeModule].steps[activeStep]}
          </h3>
          
          {/* Dynamic content based on module and step */}
          {activeModule === 'intro' && activeStep === 0 && (
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">¿Por qué es importante el análisis de datos?</h4>
                
                {/* Interactive Diagram */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                  <div className="flex flex-wrap justify-between items-center text-center">
                    {[
                      { icon: '📁', label: 'Datos Brutos', desc: 'Colección de valores sin contexto' },
                      { icon: '⚙️', label: 'Procesamiento', desc: 'Transformación y limpieza' },
                      { icon: '📊', label: 'Visualización', desc: 'Representación gráfica' },
                      { icon: '💡', label: 'Insights', desc: 'Patrones y conocimientos' },
                      { icon: '✅', label: 'Decisiones', desc: 'Acciones informadas' }
                    ].map((stage, index) => (
                      <React.Fragment key={index}>
                        {/* Stage */}
                        <div 
                          className="flex flex-col items-center p-2 cursor-pointer hover:bg-blue-100 rounded transition-all m-2"
                          onMouseEnter={() => showTooltip(`stage-${index}`)}
                          onMouseLeave={hideTooltip}
                        >
                          <div className="text-3xl mb-2">{stage.icon}</div>
                          <div className="font-medium">{stage.label}</div>
                          <div className="text-xs text-gray-600">{stage.desc}</div>
                          
                          {/* Tooltip */}
                          {activeTooltip === `stage-${index}` && (
                            <div className="absolute mt-24 bg-white p-3 rounded shadow-lg border border-gray-200 z-10 w-64">
                              <h5 className="font-bold text-blue-800 mb-1">{stage.label}</h5>
                              <p className="text-sm">
                                {index === 0 && "Los datos brutos son valores sin procesar que por sí solos ofrecen poco valor. Ejemplos: registros de ventas, mediciones de sensores, logs de sistema."}
                                {index === 1 && "En esta etapa se limpian, filtran y transforman los datos para hacerlos utilizables. Incluye corregir errores, estandarizar formatos y preparar para análisis."}
                                {index === 2 && "La visualización convierte datos en gráficos, tablas y dashboards que hacen visible lo invisible. Power BI destaca en esta etapa."}
                                {index === 3 && "Aquí descubrimos patrones, tendencias y correlaciones que ofrecen valor de negocio real."}
                                {index === 4 && "El objetivo final: decisiones basadas en evidencia en lugar de intuiciones o suposiciones."}
                              </p>
                            </div>
                          )}
                        </div>
                        
                        {/* Arrow between stages */}
                        {index < 4 && (
                          <div className="text-blue-300 mx-1">→</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="text-xs text-center mt-2 text-blue-600">Haz clic en cada etapa para más detalles</div>
                </div>
                
                <p className="mb-4">El análisis de datos transforma datos brutos en información valiosa que permite:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li className="relative">
                    <strong>Tomar decisiones informadas</strong>
                    <span 
                      className="inline-block ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer"
                      onMouseEnter={() => showTooltip('decision-example')}
                      onMouseLeave={hideTooltip}
                    >
                      Ver ejemplo
                    </span>
                    {activeTooltip === 'decision-example' && (
                      <div className="absolute left-0 mt-1 bg-white p-3 rounded shadow-lg border border-gray-200 z-10 w-64">
                        <p className="text-sm">
                          <strong>Ejemplo:</strong> Un análisis de ventas por región y categoría de producto permite decidir dónde enfocar los esfuerzos de marketing con precisión, en lugar de basarse en suposiciones.
                        </p>
                      </div>
                    )}
                  </li>
                  <li>
                    <strong>Mejorar la eficiencia operativa</strong>
                    <span 
                      className="inline-block ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer"
                      onMouseEnter={() => showTooltip('efficiency-example')}
                      onMouseLeave={hideTooltip}
                    >
                      Ver ejemplo
                    </span>
                  </li>
                  <li>
                    <strong>Descubrir patrones ocultos</strong>
                    <span 
                      className="inline-block ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer"
                      onMouseEnter={() => showTooltip('patterns-example')}
                      onMouseLeave={hideTooltip}
                    >
                      Ver ejemplo
                    </span>
                  </li>
                  <li>
                    <strong>Potenciar tu perfil como Auxiliar en Sistemas</strong>
                    <span 
                      className="inline-block ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer"
                      onMouseEnter={() => showTooltip('profile-example')}
                      onMouseLeave={hideTooltip}
                    >
                      Ver ejemplo
                    </span>
                  </li>
                </ul>
                
                {/* Case Study */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-yellow-800 flex items-center">
                    <Info size={18} className="mr-2" />
                    Caso Práctico: Análisis de Tickets de Soporte IT
                  </h4>
                  <p className="mb-2">
                    Imagina que trabajas como Auxiliar en Sistemas en una empresa con 500 empleados. 
                    La empresa utiliza un sistema de tickets para solicitudes de soporte técnico. 
                    Sin análisis de datos, solo verías una lista interminable de tickets.
                  </p>
                  <p className="mb-2">Con análisis de datos en Power BI, podrías:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-2">
                    <li>Identificar qué departamentos generan más tickets</li>
                    <li>Descubrir los problemas más comunes</li>
                    <li>Analizar tiempos de resolución</li>
                    <li>Detectar patrones temporales (ej. picos después de actualizaciones)</li>
                  </ul>
                  <p className="text-sm text-yellow-800">
                    Esto te permitiría implementar soluciones proactivas, como capacitaciones específicas 
                    o actualizaciones preventivas.
                  </p>
                </div>
                
                {/* Quiz */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <CheckCircle size={18} className="mr-2 text-blue-600" />
                    Comprueba tu Comprensión
                  </h4>
                  <div className="mb-2">
                    <p className="font-medium mb-2">¿Cuál es la principal ventaja del análisis de datos en un contexto técnico?</p>
                    <div className="space-y-2">
                      {[
                        "Crear gráficos visualmente atractivos",
                        "Tomar decisiones basadas en evidencia en lugar de suposiciones",
                        "Almacenar grandes cantidades de información",
                        "Reemplazar el conocimiento técnico especializado"
                      ].map((option, index) => (
                        <label key={index} className="flex items-center p-2 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer">
                          <input 
                            type="radio" 
                            name="q1" 
                            value={index}
                            className="mr-2"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Comprobar
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeModule === 'intro' && activeStep === 1 && (
            <div>
              <h4 className="text-lg font-semibold mb-3">Microsoft Power BI: Componentes Esenciales</h4>
              <p className="mb-4">
                Power BI es un conjunto de herramientas y servicios que permiten conectar, transformar, 
                visualizar y compartir datos. Veamos sus componentes principales:
              </p>
              
              {/* Component Explorer */}
              <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-2 border-b border-gray-200">
                  <div className="flex">
                    <button className="px-4 py-2 bg-white rounded-t-lg border-t border-l border-r border-gray-200 font-medium">
                      Power BI Desktop
                    </button>
                    <button className="px-4 py-2 text-gray-600">
                      Power BI Service
                    </button>
                    <button className="px-4 py-2 text-gray-600">
                      Power BI Mobile
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div className="relative">
                        <img 
                          src="/api/placeholder/500/300" 
                          alt="Power BI Desktop Interface"
                          className="w-full rounded border border-gray-300"
                        />
                        {/* Interactive hotspots would go here */}
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h5 className="font-bold text-lg mb-2">Power BI Desktop</h5>
                      <p className="mb-3">Aplicación Windows gratuita para conectar, transformar, modelar y visualizar datos.</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <span className="inline-block bg-blue-100 text-blue-800 p-1 rounded mr-2 mt-0.5">1</span>
                          <span><strong>Conexión a datos:</strong> Conecta a cientos de fuentes de datos diferentes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block bg-blue-100 text-blue-800 p-1 rounded mr-2 mt-0.5">2</span>
                          <span><strong>Transformación:</strong> Limpia y prepara datos con Power Query</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block bg-blue-100 text-blue-800 p-1 rounded mr-2 mt-0.5">3</span>
                          <span><strong>Modelado:</strong> Crea relaciones entre tablas y medidas DAX</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block bg-blue-100 text-blue-800 p-1 rounded mr-2 mt-0.5">4</span>
                          <span><strong>Visualización:</strong> Crea reports interactivos con visualizaciones</span>
                        </li>
                      </ul>
                      <div className="bg-yellow-50 p-3 rounded border border-yellow-100 flex">
                        <div className="text-yellow-500 mr-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <strong>Nota técnica:</strong> Power BI Desktop es el foco principal de este taller. Es donde realizarás todo el desarrollo y creación de reportes. Los archivos se guardan con extensión .pbix
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Workflow Diagram */}
              <h4 className="text-lg font-semibold mb-3">Flujo de Trabajo en Power BI</h4>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <div className="flex flex-wrap justify-between">
                  {[
                    { num: 1, icon: '🔌', title: 'Conectar', desc: 'Conectar a fuentes de datos' },
                    { num: 2, icon: '🔄', title: 'Transformar', desc: 'Limpiar y preparar datos' },
                    { num: 3, icon: '🧩', title: 'Modelar', desc: 'Crear relaciones y medidas' },
                    { num: 4, icon: '📊', title: 'Visualizar', desc: 'Crear dashboards' },
                    { num: 5, icon: '📤', title: 'Compartir', desc: 'Publicar y distribuir' }
                  ].map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center m-2">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                          {step.icon}
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs -mt-3 border-2 border-white">
                          {step.num}
                        </div>
                        <div className="text-center mt-1">
                          <div className="font-medium">{step.title}</div>
                          <div className="text-xs text-gray-500">{step.desc}</div>
                        </div>
                      </div>
                      
                      {/* Arrow (except after last item) */}
                      {index < 4 && (
                        <div className="flex items-center text-blue-300 mx-1">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* More content would go here */}
            </div>
          )}
          
          {/* Placeholder for other steps/modules */}
          {(activeModule !== 'intro' || (activeStep !== 0 && activeStep !== 1)) && (
            <div className="py-8 text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <h4 className="text-xl font-bold mb-2">Contenido en Desarrollo</h4>
              <p className="text-gray-600 mb-4">
                Esta parte del taller está actualmente en desarrollo.
              </p>
              <p className="text-gray-600">
                En el prototipo completo, aquí encontraría el contenido detallado para:
                <span className="font-bold"> {moduleContent[activeModule].title} - {moduleContent[activeModule].steps[activeStep]}</span>
              </p>
            </div>
          )}
          
          {/* Navigation at bottom of content */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between">
            <button 
              className={`flex items-center px-4 py-2 rounded ${
                activeStep > 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              onClick={goToPrevStep}
              disabled={activeStep === 0}
            >
              <ChevronLeft size={16} className="mr-1" />
              Paso Anterior
            </button>
            
            <button 
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={goToNextStep}
            >
              Siguiente Paso
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/api/placeholder/32/32" 
              alt="FUNDETEC Logo" 
              className="mr-2"
            />
            <span className="text-sm">© 2025 FUNDETEC - Ing. Alexander Oviedo Fadul</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-white hover:text-yellow-300 text-sm">
              Contacto
            </button>
            <button className="text-white hover:text-yellow-300 text-sm">
              Recursos
            </button>
            <button className="text-white hover:text-yellow-300 text-sm">
              Certificación
            </button>
          </div>
        </div>
      </footer>
      
      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            {activeModal === 'moduleResources' && (
              <>
                <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-blue-800 flex items-center">
                    <Book size={20} className="mr-2" />
                    Recursos del Módulo {Object.keys(moduleContent).indexOf(activeModule) + 1}
                  </h3>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Resource Cards */}
                    {[
                      { 
                        icon: '📝', 
                        title: 'Diapositivas del Módulo 1', 
                        desc: 'Presentación completa con todos los conceptos clave cubiertos.',
                        type: 'PDF',
                        size: '2.4 MB'
                      },
                      { 
                        icon: '📹', 
                        title: 'Tutorial: Primeros pasos en Power BI', 
                        desc: 'Video tutorial que cubre todos los conceptos del Módulo 1.',
                        type: 'Video MP4',
                        size: '45 MB',
                        duration: '12:45'
                      },
                      { 
                        icon: '📄', 
                        title: 'Glosario de términos de análisis de datos', 
                        desc: 'Definiciones de conceptos clave utilizados en Power BI.',
                        type: 'PDF',
                        size: '1.2 MB'
                      },
                      { 
                        icon: '🔗', 
                        title: 'Enlaces recomendados', 
                        desc: 'Recopilación de recursos oficiales y tutoriales adicionales.',
                        type: 'Web'
                      }
                    ].map((resource, index) => (
                      <div key={index} className="flex bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                        <div className="w-16 bg-blue-100 flex items-center justify-center text-blue-800 text-2xl">
                          {resource.icon}
                        </div>
                        <div className="p-3 flex-grow">
                          <h4 className="font-medium text-blue-800">{resource.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{resource.desc}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                              <span className="text-xs px-2 py-1 bg-gray-200 rounded">{resource.type}</span>
                              {resource.size && (
                                <span className="text-xs px-2 py-1 bg-gray-200 rounded">{resource.size}</span>
                              )}
                              {resource.duration && (
                                <span className="text-xs px-2 py-1 bg-gray-200 rounded">{resource.duration}</span>
                              )}
                            </div>
                            <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                              Descargar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            {activeModal === 'moduleComplete' && (
              <>
                <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-green-700 flex items-center">
                    <CheckCircle size={20} className="mr-2" />
                    ¡Módulo Completado!
                  </h3>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold mb-3">
                    ¡Felicidades! Has completado el Módulo {Object.keys(moduleContent).indexOf(activeModule) + 1}
                  </h4>
                  <p className="mb-6">
                    Has terminado exitosamente el módulo <strong>{moduleContent[activeModule].title}</strong>.
                    ¿Estás listo para continuar con el siguiente módulo?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button 
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                      onClick={closeModal}
                    >
                      Revisar Módulo Actual
                    </button>
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
                      onClick={() => {
                        // Get next module
                        const moduleKeys = Object.keys(moduleContent);
                        const currentIndex = moduleKeys.indexOf(activeModule);
                        if (currentIndex < moduleKeys.length - 1) {
                          navigateToModule(moduleKeys[currentIndex + 1]);
                          closeModal();
                        }
                      }}
                    >
                      Ir al Siguiente Módulo
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
