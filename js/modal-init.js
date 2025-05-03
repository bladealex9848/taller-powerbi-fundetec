/**
 * Inicialización inmediata de modales
 * Este script se ejecuta inmediatamente para cerrar modales antes de que se cargue el resto de la página
 */

// Función de cierre inmediato de modales
(function() {
    console.log('Inicialización inmediata de modales...');
    
    // Función para ocultar modales
    function hideModals() {
        // Usar querySelector en lugar de querySelectorAll para mejor rendimiento
        var modals = document.querySelectorAll('.modal');
        if (modals.length > 0) {
            for (var i = 0; i < modals.length; i++) {
                var modal = modals[i];
                if (modal) {
                    modal.style.display = 'none';
                    modal.className = modal.className + ' hidden';
                }
            }
            console.log('Modales ocultos inmediatamente');
        }
    }
    
    // Ejecutar inmediatamente
    hideModals();
    
    // También ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideModals);
    } else {
        hideModals();
    }
    
    // Y también después de un breve retraso para asegurarse
    setTimeout(hideModals, 50);
    setTimeout(hideModals, 100);
    setTimeout(hideModals, 500);
})();
