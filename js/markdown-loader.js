/**
 * Cargador de contenido Markdown
 * Este archivo contiene funciones para cargar y procesar contenido desde archivos Markdown
 */

/**
 * Carga contenido desde un archivo Markdown
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {Promise<string>} Contenido del archivo
 */
async function loadMarkdownFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.status} ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error al cargar el archivo ${filePath}:`, error);
        return null;
    }
}

/**
 * Convierte contenido Markdown a HTML
 * @param {string} markdown - Contenido Markdown
 * @returns {string} Contenido HTML
 */
function convertMarkdownToHTML(markdown) {
    if (!markdown) return '';
    
    // Esta es una implementación muy básica
    // En una aplicación real, se usaría una biblioteca como marked.js
    
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
 * Extrae metadatos de un archivo Markdown
 * @param {string} markdown - Contenido Markdown
 * @returns {Object} Metadatos extraídos
 */
function extractMarkdownMetadata(markdown) {
    if (!markdown) return {};
    
    const metadataRegex = /^---\\n([\\s\\S]*?)\\n---/;
    const match = markdown.match(metadataRegex);
    
    if (!match) return {};
    
    const metadataStr = match[1];
    const metadata = {};
    
    metadataStr.split('\\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                metadata[key.trim()] = value.slice(1, -1);
            } else {
                metadata[key.trim()] = value;
            }
        }
    });
    
    return metadata;
}

/**
 * Carga y procesa un archivo Markdown para un módulo
 * @param {string} moduleId - ID del módulo
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {Promise<Object>} Contenido procesado para el módulo
 */
async function loadModuleContent(moduleId, filePath) {
    const markdown = await loadMarkdownFile(filePath);
    if (!markdown) return null;
    
    const metadata = extractMarkdownMetadata(markdown);
    const content = markdown.replace(/^---\\n[\\s\\S]*?\\n---/, '').trim();
    const html = convertMarkdownToHTML(content);
    
    // Dividir el contenido en secciones para los pasos
    const sections = splitContentIntoSections(html);
    
    // Crear estructura de contenido para el módulo
    const moduleContent = {
        title: metadata.title || `Módulo ${moduleId}`,
        description: metadata.description || '',
        author: metadata.author || '',
        date: metadata.date || '',
        version: metadata.version || '1.0'
    };
    
    // Añadir secciones como pasos
    sections.forEach((section, index) => {
        moduleContent[`step${index + 1}`] = {
            title: section.title || `Paso ${index + 1}`,
            content: section.content || '',
            description: section.description || ''
        };
    });
    
    return moduleContent;
}

/**
 * Divide el contenido HTML en secciones basadas en encabezados
 * @param {string} html - Contenido HTML
 * @returns {Array<Object>} Array de secciones
 */
function splitContentIntoSections(html) {
    if (!html) return [];
    
    // Dividir por encabezados h2
    const sectionRegex = /<h2.*?>(.*?)<\/h2>([\s\S]*?)(?=<h2|$)/g;
    const sections = [];
    let match;
    
    while ((match = sectionRegex.exec(html)) !== null) {
        const title = match[1];
        const content = match[2];
        
        // Extraer la primera etiqueta p como descripción
        const descriptionMatch = content.match(/<p.*?>(.*?)<\/p>/);
        const description = descriptionMatch ? descriptionMatch[1] : '';
        
        sections.push({
            title,
            description,
            content
        });
    }
    
    // Si no hay secciones h2, usar todo el contenido como una sección
    if (sections.length === 0) {
        const titleMatch = html.match(/<h1.*?>(.*?)<\/h1>/);
        const title = titleMatch ? titleMatch[1] : 'Contenido';
        
        const descriptionMatch = html.match(/<p.*?>(.*?)<\/p>/);
        const description = descriptionMatch ? descriptionMatch[1] : '';
        
        sections.push({
            title,
            description,
            content: html
        });
    }
    
    return sections;
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        loadMarkdownFile,
        convertMarkdownToHTML,
        extractMarkdownMetadata,
        loadModuleContent
    };
}
