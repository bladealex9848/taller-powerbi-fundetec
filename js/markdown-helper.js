/**
 * Ayudante para cargar contenido Markdown
 * Este archivo proporciona funciones para cargar y mostrar contenido Markdown directamente
 */

/**
 * Carga el contenido Markdown para un módulo y paso específicos
 * @param {string} moduleId - ID del módulo
 * @param {number} stepIndex - Índice del paso (0-based)
 * @returns {Promise<string>} HTML del contenido
 */
async function loadModuleMarkdownContent(moduleId, stepIndex) {
    console.log(`Cargando contenido Markdown para módulo ${moduleId}, paso ${stepIndex + 1}`);
    
    // Construir la ruta al archivo Markdown
    const filePath = `docs/modulos/${moduleId}.md`;
    
    try {
        // Cargar el archivo Markdown
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo Markdown: ${response.status} ${response.statusText}`);
        }
        
        // Obtener el contenido del archivo
        const markdown = await response.text();
        console.log(`Markdown cargado correctamente (${markdown.length} caracteres)`);
        
        // Extraer la sección correspondiente al paso
        const content = extractStepContent(markdown, stepIndex);
        
        // Convertir a HTML
        return convertToHTML(content);
    } catch (error) {
        console.error(`Error al cargar el contenido Markdown para ${moduleId}:`, error);
        return createErrorMessage(error.message);
    }
}

/**
 * Extrae el contenido de un paso específico de un archivo Markdown
 * @param {string} markdown - Contenido Markdown completo
 * @param {number} stepIndex - Índice del paso (0-based)
 * @returns {string} Contenido Markdown del paso
 */
function extractStepContent(markdown, stepIndex) {
    // Eliminar metadatos si existen
    const contentWithoutMetadata = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');
    
    // Dividir por encabezados de nivel 2 (##)
    const sections = contentWithoutMetadata.split(/^## /gm);
    
    // La primera sección es el título y la introducción
    if (stepIndex === 0) {
        return sections[0];
    }
    
    // Ajustar el índice para las secciones siguientes
    const sectionIndex = stepIndex;
    
    // Verificar si existe la sección
    if (sectionIndex < sections.length) {
        // Añadir el ## que se eliminó al dividir
        return `## ${sections[sectionIndex]}`;
    }
    
    // Si no existe la sección, devolver un mensaje
    return `# Contenido no disponible\n\nEl paso ${stepIndex + 1} no está disponible en este momento.`;
}

/**
 * Convierte contenido Markdown a HTML
 * @param {string} markdown - Contenido Markdown
 * @returns {string} Contenido HTML
 */
function convertToHTML(markdown) {
    if (!markdown) return '';
    
    // Convertir encabezados
    let html = markdown
        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-blue-900 mb-4">$1</h1>')
        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-blue-900 mb-3">$1</h2>')
        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-blue-900 mb-2">$1</h3>')
        .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold text-blue-900 mb-2">$1</h4>')
        .replace(/^##### (.*$)/gm, '<h5 class="text-base font-bold text-blue-900 mb-2">$1</h5>');
    
    // Convertir párrafos
    html = html.replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre|<table|<p)(.*$)/gm, '<p class="mb-4">$1</p>');
    
    // Convertir énfasis
    html = html
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/~~(.*?)~~/g, '<del>$1</del>');
    
    // Convertir listas
    html = html
        .replace(/^\* (.*$)/gm, '<ul class="list-disc pl-5 mb-4"><li>$1</li></ul>')
        .replace(/^\d+\. (.*$)/gm, '<ol class="list-decimal pl-5 mb-4"><li>$1</li></ol>');
    
    // Corregir listas anidadas
    html = html
        .replace(/<\/ul>\s*<ul class="list-disc pl-5 mb-4">/g, '')
        .replace(/<\/ol>\s*<ol class="list-decimal pl-5 mb-4">/g, '');
    
    // Convertir enlaces
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
    
    // Convertir imágenes
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto my-4">');
    
    // Convertir bloques de código
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>');
    
    // Convertir código en línea
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>');
    
    // Convertir citas
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic mb-4">$1</blockquote>');
    
    // Convertir líneas horizontales
    html = html.replace(/^---$/gm, '<hr class="my-6 border-t border-gray-300">');
    
    return html;
}

/**
 * Crea un mensaje de error formateado
 * @param {string} message - Mensaje de error
 * @returns {string} HTML del mensaje de error
 */
function createErrorMessage(message) {
    return `
        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">Error al cargar el contenido</h3>
                    <div class="mt-2 text-sm text-red-700">
                        <p>${message}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-8">
            <div class="text-6xl mb-4">📚</div>
            <h4 class="text-xl font-bold mb-2">Contenido no disponible</h4>
            <p class="text-gray-600">Estamos trabajando para mejorar esta sección. Por favor, intenta con otro paso o módulo.</p>
        </div>
    `;
}

// Exponer funciones globalmente
window.loadModuleMarkdownContent = loadModuleMarkdownContent;
window.markdownToHtml = convertToHTML;
