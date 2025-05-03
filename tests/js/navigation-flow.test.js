/**
 * Pruebas para el flujo de navegación
 */

// Simular el DOM para pruebas
document.body.innerHTML = `
<button id="start-workshop-btn">Comenzar Taller</button>
<section id="learning-path-section"></section>
<section id="module-content-section" class="hidden"></section>
<div id="learning-path-container"></div>
<div class="mode-option" data-mode="estudiante"></div>
<div class="mode-option" data-mode="facilitador"></div>
<div class="mode-option" data-mode="autoguiado"></div>
`;

// Prueba: Flujo completo de navegación
console.log('Prueba: Flujo completo de navegación');
try {
    // 1. Hacer clic en "Comenzar Taller"
    console.log('1. Hacer clic en "Comenzar Taller"');
    const startButton = document.getElementById('start-workshop-btn');
    if (startButton) {
        startButton.click();
        console.log('✅ Botón "Comenzar Taller" clickeado');
    } else {
        console.log('❌ Botón "Comenzar Taller" no encontrado');
    }
    
    // 2. Verificar que se muestre la ruta de aprendizaje
    console.log('2. Verificar que se muestre la ruta de aprendizaje');
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection && !moduleContentSection.classList.contains('hidden')) {
        console.log('✅ Sección de contenido del módulo visible');
    } else {
        console.log('❌ Sección de contenido del módulo no visible');
    }
    
    // 3. Seleccionar un modo
    console.log('3. Seleccionar un modo');
    const modeOptions = document.querySelectorAll('.mode-option');
    if (modeOptions.length > 0) {
        modeOptions[0].click();
        console.log('✅ Modo seleccionado');
        
        // Verificar que el modo se guarda en localStorage
        const savedMode = localStorage.getItem('userMode');
        if (savedMode) {
            console.log(`✅ Modo guardado en localStorage: ${savedMode}`);
        } else {
            console.log('❌ Modo no guardado en localStorage');
        }
    } else {
        console.log('❌ No se encontraron opciones de modo');
    }
    
    // 4. Navegar entre pasos
    console.log('4. Navegar entre pasos');
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.click();
        console.log('✅ Navegación al siguiente paso');
        
        // Verificar que el paso actual se actualiza
        const currentStep = moduleContentSection.getAttribute('data-current-step');
        if (currentStep === '1') {
            console.log('✅ Paso actual actualizado correctamente');
        } else {
            console.log(`❌ Paso actual no actualizado correctamente: ${currentStep}`);
        }
    } else {
        console.log('❌ Botón "Siguiente" no encontrado');
    }
    
    // 5. Volver a la ruta de aprendizaje
    console.log('5. Volver a la ruta de aprendizaje');
    const backButton = document.getElementById('back-to-path-btn');
    if (backButton) {
        backButton.click();
        console.log('✅ Botón "Volver a la Ruta de Aprendizaje" clickeado');
        
        // Verificar que la sección de contenido del módulo se oculta
        if (moduleContentSection.classList.contains('hidden')) {
            console.log('✅ Sección de contenido del módulo ocultada');
        } else {
            console.log('❌ Sección de contenido del módulo no ocultada');
        }
        
        // Verificar que la sección de ruta de aprendizaje se muestra
        const learningPathSection = document.getElementById('learning-path-section');
        if (learningPathSection && !learningPathSection.classList.contains('hidden')) {
            console.log('✅ Sección de ruta de aprendizaje visible');
        } else {
            console.log('❌ Sección de ruta de aprendizaje no visible');
        }
    } else {
        console.log('❌ Botón "Volver a la Ruta de Aprendizaje" no encontrado');
    }
} catch (error) {
    console.error('❌ Error en la prueba:', error);
}

console.log('\nPruebas completadas');
