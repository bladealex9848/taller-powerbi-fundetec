/**
 * Cargador de contenido Markdown
 * Este archivo contiene funciones para cargar y procesar contenido Markdown
 */

/**
 * Carga el contenido de un módulo desde un archivo Markdown
 * @param {string} moduleId - ID del módulo
 * @param {string} filePath - Ruta del archivo Markdown
 * @returns {Promise<Object>} - Objeto con el contenido del módulo
 */
async function loadModuleContent(moduleId, filePath) {
    try {
        // Intentar cargar el archivo Markdown
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo Markdown: ${response.status} ${response.statusText}`);
        }
        
        const markdown = await response.text();
        
        // Procesar el contenido Markdown
        return processMarkdown(markdown, moduleId);
    } catch (error) {
        console.error(`Error al cargar el contenido del módulo ${moduleId}:`, error);
        return null;
    }
}

/**
 * Procesa el contenido Markdown y lo convierte en un objeto de módulo
 * @param {string} markdown - Contenido Markdown
 * @param {string} moduleId - ID del módulo
 * @returns {Object} - Objeto con el contenido del módulo
 */
function processMarkdown(markdown, moduleId) {
    // Dividir el contenido por secciones (usando encabezados de nivel 1)
    const sections = markdown.split(/^# /m).filter(section => section.trim());
    
    // Si no hay secciones, devolver un objeto vacío
    if (sections.length === 0) {
        return {
            title: `Módulo ${moduleId}`,
            description: "No se encontró contenido en el archivo Markdown",
            step1: {
                title: "Contenido no disponible",
                content: "<p>No se encontró contenido en el archivo Markdown.</p>"
            }
        };
    }
    
    // Extraer el título y descripción del módulo
    const titleMatch = sections[0].match(/^(.+?)(?:\n|$)/);
    const title = titleMatch ? titleMatch[1].trim() : `Módulo ${moduleId}`;
    
    // Extraer la descripción (todo lo que está después del título y antes del primer encabezado de nivel 2)
    const descriptionMatch = sections[0].match(/^.+?\n\n([\s\S]+?)(?=\n## |$)/);
    const description = descriptionMatch ? descriptionMatch[1].trim() : "";
    
    // Crear el objeto de módulo
    const moduleContent = {
        title,
        description,
    };
    
    // Procesar los pasos (encabezados de nivel 2)
    const steps = sections[0].split(/\n## /).slice(1);
    
    steps.forEach((step, index) => {
        const stepTitleMatch = step.match(/^(.+?)(?:\n|$)/);
        const stepTitle = stepTitleMatch ? stepTitleMatch[1].trim() : `Paso ${index + 1}`;
        
        // El contenido del paso es todo lo que está después del título
        const stepContent = step.replace(/^.+?\n/, '').trim();
        
        // Convertir el contenido Markdown a HTML
        const stepHtml = markdownToHtml(stepContent);
        
        // Agregar el paso al objeto de módulo
        moduleContent[`step${index + 1}`] = {
            title: stepTitle,
            content: stepHtml
        };
    });
    
    return moduleContent;
}

/**
 * Convierte texto Markdown a HTML (versión simplificada)
 * @param {string} markdown - Texto en formato Markdown
 * @returns {string} - HTML generado
 */
function markdownToHtml(markdown) {
    // Esta es una implementación muy básica
    // Para una aplicación real, se recomienda usar una biblioteca como marked.js
    
    let html = markdown;
    
    // Convertir encabezados
    html = html.replace(/### (.+)/g, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>');
    html = html.replace(/#### (.+)/g, '<h4 class="text-md font-bold mt-3 mb-2">$1</h4>');
    
    // Convertir párrafos
    html = html.replace(/\n\n([^#\n].+?)(?=\n\n|$)/g, '\n\n<p>$1</p>');
    
    // Convertir listas
    html = html.replace(/\n- (.+)/g, '\n<li>$1</li>');
    html = html.replace(/(<li>.+<\/li>\n)+/g, '<ul class="list-disc pl-6 mb-4">$&</ul>');
    
    // Convertir énfasis
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Convertir enlaces
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
    
    // Limpiar espacios en blanco adicionales
    html = html.replace(/\n\n+/g, '\n\n');
    
    return html;
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        loadModuleContent,
        processMarkdown,
        markdownToHtml
    };
}
