/**
 * Pruebas para app-initializer.js
 */

// Simular el DOM para pruebas
document.body.innerHTML = `
<button id="start-workshop-btn">Comenzar Taller</button>
<section id="learning-path-section"></section>
<section id="module-content-section" class="hidden"></section>
<div id="learning-path-container"></div>
`;

// Prueba: Inicialización de la aplicación
console.log('Prueba: Inicialización de la aplicación');
try {
    // Verificar que el botón "Comenzar Taller" existe
    const startButton = document.getElementById('start-workshop-btn');
    console.log('✅ Botón "Comenzar Taller" encontrado');
    
    // Simular clic en el botón
    startButton.click();
    
    // Verificar que la sección de contenido del módulo se muestra
    const moduleContentSection = document.getElementById('module-content-section');
    if (moduleContentSection.classList.contains('hidden')) {
        console.log('❌ La sección de contenido del módulo no se muestra');
    } else {
        console.log('✅ La sección de contenido del módulo se muestra correctamente');
    }
    
    // Verificar que la sección de ruta de aprendizaje se oculta
    const learningPathSection = document.getElementById('learning-path-section');
    if (learningPathSection.classList.contains('hidden')) {
        console.log('✅ La sección de ruta de aprendizaje se oculta correctamente');
    } else {
        console.log('❌ La sección de ruta de aprendizaje no se oculta');
    }
} catch (error) {
    console.error('❌ Error en la prueba:', error);
}

// Prueba: Navegación entre módulos
console.log('\nPrueba: Navegación entre módulos');
try {
    // Verificar que se puede volver a la ruta de aprendizaje
    const backButton = document.getElementById('back-to-path-btn');
    if (backButton) {
        console.log('✅ Botón "Volver a la Ruta de Aprendizaje" encontrado');
        
        // Simular clic en el botón
        backButton.click();
        
        // Verificar que la sección de contenido del módulo se oculta
        const moduleContentSection = document.getElementById('module-content-section');
        if (moduleContentSection.classList.contains('hidden')) {
            console.log('✅ La sección de contenido del módulo se oculta correctamente');
        } else {
            console.log('❌ La sección de contenido del módulo no se oculta');
        }
        
        // Verificar que la sección de ruta de aprendizaje se muestra
        const learningPathSection = document.getElementById('learning-path-section');
        if (learningPathSection.classList.contains('hidden')) {
            console.log('❌ La sección de ruta de aprendizaje no se muestra');
        } else {
            console.log('✅ La sección de ruta de aprendizaje se muestra correctamente');
        }
    } else {
        console.log('❌ Botón "Volver a la Ruta de Aprendizaje" no encontrado');
    }
} catch (error) {
    console.error('❌ Error en la prueba:', error);
}

// Prueba: Selección de modo
console.log('\nPrueba: Selección de modo');
try {
    // Verificar que las opciones de modo existen
    const modeOptions = document.querySelectorAll('.mode-option');
    if (modeOptions.length > 0) {
        console.log(`✅ ${modeOptions.length} opciones de modo encontradas`);
        
        // Simular clic en la primera opción
        modeOptions[0].click();
        
        // Verificar que la opción se marca como seleccionada
        if (modeOptions[0].classList.contains('border-yellow-400')) {
            console.log('✅ La opción de modo se marca correctamente como seleccionada');
        } else {
            console.log('❌ La opción de modo no se marca como seleccionada');
        }
    } else {
        console.log('❌ No se encontraron opciones de modo');
    }
} catch (error) {
    console.error('❌ Error en la prueba:', error);
}

console.log('\nPruebas completadas');
