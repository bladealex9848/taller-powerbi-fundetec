/**
 * Ayudante de depuración
 * Este archivo contiene funciones para ayudar a depurar la aplicación
 */

// Configuración de depuración
const DEBUG = {
    enabled: true,
    logLevel: 'info', // 'error', 'warn', 'info', 'debug'
    showInConsole: true,
    logToElement: false,
    logElementId: 'debug-log'
};

// Niveles de log
const LOG_LEVELS = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
};

/**
 * Inicializa el ayudante de depuración cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Crear elemento de log si está habilitado
    if (DEBUG.enabled && DEBUG.logToElement) {
        createLogElement();
    }
    
    // Sobrescribir métodos de console para capturar logs
    if (DEBUG.enabled) {
        overrideConsoleMethods();
    }
    
    // Log inicial
    logDebug('Debug helper initialized');
});

/**
 * Crea un elemento para mostrar logs en la página
 */
function createLogElement() {
    // Verificar si ya existe
    if (document.getElementById(DEBUG.logElementId)) {
        return;
    }
    
    // Crear elemento
    const logElement = document.createElement('div');
    logElement.id = DEBUG.logElementId;
    logElement.style.cssText = `
        position: fixed;
        bottom: 0;
        right: 0;
        width: 400px;
        max-height: 200px;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        font-family: monospace;
        font-size: 12px;
        padding: 10px;
        z-index: 9999;
        border-top-left-radius: 5px;
    `;
    
    // Crear barra de título
    const titleBar = document.createElement('div');
    titleBar.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #555;
    `;
    titleBar.innerHTML = `
        <span>Debug Console</span>
        <button id="${DEBUG.logElementId}-clear" style="background: none; border: none; color: white; cursor: pointer;">Clear</button>
    `;
    
    // Crear contenedor de logs
    const logContainer = document.createElement('div');
    logContainer.id = `${DEBUG.logElementId}-container`;
    
    // Agregar elementos
    logElement.appendChild(titleBar);
    logElement.appendChild(logContainer);
    document.body.appendChild(logElement);
    
    // Agregar evento para limpiar logs
    document.getElementById(`${DEBUG.logElementId}-clear`).addEventListener('click', function() {
        document.getElementById(`${DEBUG.logElementId}-container`).innerHTML = '';
    });
}

/**
 * Sobrescribe los métodos de console para capturar logs
 */
function overrideConsoleMethods() {
    // Guardar métodos originales
    const originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
        debug: console.debug
    };
    
    // Sobrescribir console.log
    console.log = function() {
        // Llamar al método original si está habilitado
        if (DEBUG.showInConsole) {
            originalConsole.log.apply(console, arguments);
        }
        
        // Registrar en el elemento de log si está habilitado
        if (DEBUG.logToElement && LOG_LEVELS[DEBUG.logLevel] >= LOG_LEVELS.info) {
            logToElement('log', arguments);
        }
    };
    
    // Sobrescribir console.info
    console.info = function() {
        // Llamar al método original si está habilitado
        if (DEBUG.showInConsole) {
            originalConsole.info.apply(console, arguments);
        }
        
        // Registrar en el elemento de log si está habilitado
        if (DEBUG.logToElement && LOG_LEVELS[DEBUG.logLevel] >= LOG_LEVELS.info) {
            logToElement('info', arguments);
        }
    };
    
    // Sobrescribir console.warn
    console.warn = function() {
        // Llamar al método original si está habilitado
        if (DEBUG.showInConsole) {
            originalConsole.warn.apply(console, arguments);
        }
        
        // Registrar en el elemento de log si está habilitado
        if (DEBUG.logToElement && LOG_LEVELS[DEBUG.logLevel] >= LOG_LEVELS.warn) {
            logToElement('warn', arguments);
        }
    };
    
    // Sobrescribir console.error
    console.error = function() {
        // Llamar al método original si está habilitado
        if (DEBUG.showInConsole) {
            originalConsole.error.apply(console, arguments);
        }
        
        // Registrar en el elemento de log si está habilitado
        if (DEBUG.logToElement && LOG_LEVELS[DEBUG.logLevel] >= LOG_LEVELS.error) {
            logToElement('error', arguments);
        }
    };
    
    // Sobrescribir console.debug
    console.debug = function() {
        // Llamar al método original si está habilitado
        if (DEBUG.showInConsole) {
            originalConsole.debug.apply(console, arguments);
        }
        
        // Registrar en el elemento de log si está habilitado
        if (DEBUG.logToElement && LOG_LEVELS[DEBUG.logLevel] >= LOG_LEVELS.debug) {
            logToElement('debug', arguments);
        }
    };
}

/**
 * Registra un mensaje en el elemento de log
 * @param {string} level - Nivel de log
 * @param {Arguments} args - Argumentos del log
 */
function logToElement(level, args) {
    // Verificar si el elemento existe
    const logContainer = document.getElementById(`${DEBUG.logElementId}-container`);
    if (!logContainer) {
        return;
    }
    
    // Crear elemento de log
    const logEntry = document.createElement('div');
    logEntry.style.cssText = `
        margin-bottom: 3px;
        padding: 2px 0;
        border-bottom: 1px solid #333;
    `;
    
    // Determinar color según el nivel
    let color = 'white';
    switch (level) {
        case 'error':
            color = '#ff6b6b';
            break;
        case 'warn':
            color = '#feca57';
            break;
        case 'info':
            color = '#54a0ff';
            break;
        case 'debug':
            color = '#1dd1a1';
            break;
    }
    
    // Formatear mensaje
    const timestamp = new Date().toLocaleTimeString();
    const message = Array.from(args).map(arg => {
        if (typeof arg === 'object') {
            try {
                return JSON.stringify(arg);
            } catch (e) {
                return String(arg);
            }
        }
        return String(arg);
    }).join(' ');
    
    // Establecer contenido
    logEntry.innerHTML = `
        <span style="color: #999;">[${timestamp}]</span>
        <span style="color: ${color};">[${level.toUpperCase()}]</span>
        <span>${message}</span>
    `;
    
    // Agregar al contenedor
    logContainer.appendChild(logEntry);
    
    // Hacer scroll al final
    logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * Registra un mensaje de depuración
 * @param {string} message - Mensaje a registrar
 * @param {Object} data - Datos adicionales (opcional)
 */
function logDebug(message, data) {
    if (!DEBUG.enabled || LOG_LEVELS[DEBUG.logLevel] < LOG_LEVELS.debug) {
        return;
    }
    
    if (data) {
        console.debug(`[DEBUG] ${message}`, data);
    } else {
        console.debug(`[DEBUG] ${message}`);
    }
}

/**
 * Registra un mensaje informativo
 * @param {string} message - Mensaje a registrar
 * @param {Object} data - Datos adicionales (opcional)
 */
function logInfo(message, data) {
    if (!DEBUG.enabled || LOG_LEVELS[DEBUG.logLevel] < LOG_LEVELS.info) {
        return;
    }
    
    if (data) {
        console.info(`[INFO] ${message}`, data);
    } else {
        console.info(`[INFO] ${message}`);
    }
}

/**
 * Registra una advertencia
 * @param {string} message - Mensaje a registrar
 * @param {Object} data - Datos adicionales (opcional)
 */
function logWarn(message, data) {
    if (!DEBUG.enabled || LOG_LEVELS[DEBUG.logLevel] < LOG_LEVELS.warn) {
        return;
    }
    
    if (data) {
        console.warn(`[WARN] ${message}`, data);
    } else {
        console.warn(`[WARN] ${message}`);
    }
}

/**
 * Registra un error
 * @param {string} message - Mensaje a registrar
 * @param {Object} data - Datos adicionales (opcional)
 */
function logError(message, data) {
    if (!DEBUG.enabled || LOG_LEVELS[DEBUG.logLevel] < LOG_LEVELS.error) {
        return;
    }
    
    if (data) {
        console.error(`[ERROR] ${message}`, data);
    } else {
        console.error(`[ERROR] ${message}`);
    }
}

/**
 * Muestra u oculta el panel de depuración
 */
function toggleDebugPanel() {
    if (!DEBUG.enabled || !DEBUG.logToElement) {
        return;
    }
    
    const logElement = document.getElementById(DEBUG.logElementId);
    if (logElement) {
        logElement.style.display = logElement.style.display === 'none' ? 'block' : 'none';
    }
}

// Exponer funciones globalmente
window.DEBUG_HELPER = {
    log: logDebug,
    info: logInfo,
    warn: logWarn,
    error: logError,
    toggle: toggleDebugPanel,
    clear: function() {
        const logContainer = document.getElementById(`${DEBUG.logElementId}-container`);
        if (logContainer) {
            logContainer.innerHTML = '';
        }
    }
};
