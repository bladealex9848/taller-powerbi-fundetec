/**
 * Visor de archivos Markdown para el taller de Power BI
 * Este archivo contiene funciones para cargar y mostrar contenido Markdown en la interfaz
 * con funcionalidades avanzadas como filtrado, búsqueda y favoritos
 */

// Almacenamiento de favoritos en localStorage
const FAVORITES_STORAGE_KEY = 'powerbi_sitios_favoritos';

// Categorías de sitios web con sus iconos
const SITE_CATEGORIES = {
    'documentacion': { name: 'Documentación Oficial', icon: 'fas fa-book' },
    'blogs': { name: 'Blogs y Expertos', icon: 'fas fa-user-tie' },
    'comunidades': { name: 'Comunidades', icon: 'fas fa-users' },
    'videos': { name: 'Canales de Video', icon: 'fab fa-youtube' },
    'datasets': { name: 'Datasets', icon: 'fas fa-database' },
    'guias': { name: 'Guías y Manuales', icon: 'fas fa-file-pdf' }
};

/**
 * Carga un archivo Markdown y lo muestra en un modal con funcionalidades avanzadas
 * @param {string} filePath - Ruta al archivo Markdown
 * @param {string} modalId - ID del modal donde se mostrará el contenido
 * @param {string} titleId - ID del elemento donde se mostrará el título del modal
 * @param {string} contentId - ID del elemento donde se mostrará el contenido del modal
 */
async function loadMarkdownInModal(filePath, modalId, titleId, contentId) {
    try {
        // Obtener el modal y sus elementos
        const modal = document.getElementById(modalId);
        const modalTitle = document.getElementById(titleId);
        const modalContent = document.getElementById(contentId);

        if (!modal || !modalTitle || !modalContent) {
            console.error(`No se encontraron los elementos del modal: ${modalId}, ${titleId}, ${contentId}`);
            return;
        }

        // Mostrar indicador de carga
        modalContent.innerHTML = `
            <div class="flex justify-center items-center py-10">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span class="ml-3 text-gray-600">Cargando contenido...</span>
            </div>
        `;

        // Mostrar el modal
        modal.classList.remove('hidden');

        // Cargar el archivo Markdown
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.status} ${response.statusText}`);
        }

        const markdown = await response.text();

        // Extraer el título del archivo Markdown (primera línea con #)
        const titleMatch = markdown.match(/^# (.+)$/m);
        const title = titleMatch ? titleMatch[1] : 'Contenido Markdown';

        // Actualizar el título del modal
        modalTitle.innerHTML = `<i class="fas fa-globe mr-2"></i>${title}`;

        // Convertir Markdown a HTML
        const html = convertMarkdownToHTML(markdown);

        // Crear la interfaz de usuario con filtros, búsqueda y contenido
        const interfaceHTML = createMarkdownInterface(html, title);

        // Mostrar la interfaz en el modal
        modalContent.innerHTML = interfaceHTML;

        // Inicializar los componentes interactivos
        initializeMarkdownComponents(modalContent);

        // Cargar favoritos guardados
        loadSavedFavorites();

    } catch (error) {
        console.error('Error al cargar el archivo Markdown:', error);

        // Mostrar mensaje de error en el modal
        const modalContent = document.getElementById(contentId);
        if (modalContent) {
            modalContent.innerHTML = `
                <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <i class="fas fa-exclamation-circle text-red-500"></i>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">
                                Error al cargar el contenido: ${error.message}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

/**
 * Crea la interfaz de usuario para el visor de Markdown
 * @param {string} html - Contenido HTML convertido desde Markdown
 * @param {string} title - Título del contenido
 * @returns {string} - HTML de la interfaz completa
 */
function createMarkdownInterface(html, title) {
    // Crear los filtros de categoría
    const categoryFilters = Object.entries(SITE_CATEGORIES).map(([key, category]) => {
        return `
            <button class="category-filter px-3 py-2 rounded-lg text-sm font-medium flex items-center mr-2 mb-2 bg-blue-50 text-blue-700 hover:bg-blue-100" data-category="${key}">
                <i class="${category.icon} mr-1"></i>
                ${category.name}
            </button>
        `;
    }).join('');

    // Crear la interfaz completa
    return `
        <div class="markdown-interface">
            <!-- Barra de herramientas -->
            <div class="toolbar bg-white sticky top-0 z-10 mb-6 pb-4 border-b border-gray-200">
                <!-- Buscador -->
                <div class="search-container mb-4">
                    <div class="relative">
                        <input type="text" id="markdown-search" placeholder="Buscar sitios web..."
                            class="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-gray-400"></i>
                        </div>
                        <button id="clear-search" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- Filtros de categoría -->
                <div class="filters-container mb-2">
                    <div class="flex flex-wrap items-center">
                        <button class="category-filter px-3 py-2 rounded-lg text-sm font-medium flex items-center mr-2 mb-2 bg-blue-600 text-white" data-category="all">
                            <i class="fas fa-globe mr-1"></i>
                            Todas las categorías
                        </button>
                        ${categoryFilters}
                    </div>
                </div>

                <!-- Selector de favoritos -->
                <div class="favorites-container">
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="show-favorites" class="sr-only">
                        <div class="relative w-10 h-5 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out">
                            <div class="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out"></div>
                        </div>
                        <span class="ml-2 text-sm font-medium text-gray-700">Mostrar solo favoritos</span>
                    </label>
                </div>
            </div>

            <!-- Contenedor del contenido con contador de resultados -->
            <div class="content-container">
                <div id="results-counter" class="mb-4 text-sm text-gray-600">
                    Mostrando todos los sitios web
                </div>
                <div class="markdown-content" id="filtered-content">
                    ${html}
                </div>
            </div>
        </div>
    `;
}

/**
 * Inicializa los componentes interactivos de la interfaz
 * @param {HTMLElement} container - Contenedor de la interfaz
 */
function initializeMarkdownComponents(container) {
    // Obtener elementos
    const searchInput = container.querySelector('#markdown-search');
    const clearSearchBtn = container.querySelector('#clear-search');
    const categoryFilters = container.querySelectorAll('.category-filter');
    const favoritesToggle = container.querySelector('#show-favorites');
    const resultsCounter = container.querySelector('#results-counter');
    const contentContainer = container.querySelector('#filtered-content');

    // Estado actual de los filtros
    let currentFilter = 'all';
    let currentSearch = '';
    let showOnlyFavorites = false;

    // Aplicar estilos a los enlaces y añadir funcionalidad de favoritos
    const links = contentContainer.querySelectorAll('a');
    links.forEach(link => {
        // Añadir clases y atributos básicos
        link.classList.add('text-blue-600', 'hover:text-blue-800', 'hover:underline', 'site-link');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        // Determinar la categoría del enlace basado en su contexto
        const category = determineLinkCategory(link);
        link.setAttribute('data-category', category);

        // Añadir icono específico según la categoría
        const categoryInfo = SITE_CATEGORIES[category] || { icon: 'fas fa-link' };
        const icon = document.createElement('i');
        icon.className = `${categoryInfo.icon} mr-2 text-blue-500`;
        link.parentNode.insertBefore(icon, link);

        // Añadir botón de favorito
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn ml-2 text-gray-400 hover:text-yellow-500 transition-colors duration-200';
        favoriteBtn.innerHTML = '<i class="far fa-star"></i>';
        favoriteBtn.setAttribute('title', 'Añadir a favoritos');
        favoriteBtn.setAttribute('data-url', link.href);

        // Verificar si ya es favorito
        if (isFavorite(link.href)) {
            favoriteBtn.innerHTML = '<i class="fas fa-star"></i>';
            favoriteBtn.classList.remove('text-gray-400');
            favoriteBtn.classList.add('text-yellow-500');
            link.parentNode.classList.add('is-favorite');
        }

        // Añadir evento al botón de favorito
        favoriteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const url = this.getAttribute('data-url');
            const isFav = toggleFavorite(url, link.textContent.trim());

            if (isFav) {
                this.innerHTML = '<i class="fas fa-star"></i>';
                this.classList.remove('text-gray-400');
                this.classList.add('text-yellow-500');
                link.parentNode.classList.add('is-favorite');
            } else {
                this.innerHTML = '<i class="far fa-star"></i>';
                this.classList.remove('text-yellow-500');
                this.classList.add('text-gray-400');
                link.parentNode.classList.remove('is-favorite');

                // Si estamos mostrando solo favoritos, ocultar este elemento
                if (showOnlyFavorites) {
                    link.parentNode.classList.add('hidden');
                    updateResultsCounter();
                }
            }
        });

        link.parentNode.appendChild(favoriteBtn);

        // Añadir icono de enlace externo
        const externalIcon = document.createElement('i');
        externalIcon.className = 'fas fa-external-link-alt ml-1 text-xs';
        link.appendChild(externalIcon);
    });

    // Función para filtrar los enlaces
    function filterLinks() {
        let visibleCount = 0;
        const totalCount = links.length;

        links.forEach(link => {
            const linkContainer = link.parentNode;
            const category = link.getAttribute('data-category');
            const text = link.textContent.toLowerCase();
            const isFav = linkContainer.classList.contains('is-favorite');

            // Aplicar filtros
            const matchesCategory = currentFilter === 'all' || category === currentFilter;
            const matchesSearch = !currentSearch || text.includes(currentSearch.toLowerCase());
            const matchesFavorites = !showOnlyFavorites || isFav;

            // Mostrar u ocultar según los filtros
            if (matchesCategory && matchesSearch && matchesFavorites) {
                linkContainer.classList.remove('hidden');
                visibleCount++;
            } else {
                linkContainer.classList.add('hidden');
            }
        });

        // Actualizar contador de resultados
        updateResultsCounter(visibleCount, totalCount);
    }

    // Actualizar el contador de resultados
    function updateResultsCounter(visible = null, total = null) {
        if (visible === null) {
            // Contar manualmente si no se proporcionan valores
            visible = 0;
            total = links.length;

            links.forEach(link => {
                if (!link.parentNode.classList.contains('hidden')) {
                    visible++;
                }
            });
        }

        let message = '';

        if (visible === total) {
            message = 'Mostrando todos los sitios web';
        } else {
            message = `Mostrando ${visible} de ${total} sitios web`;
        }

        if (currentSearch) {
            message += ` (búsqueda: "${currentSearch}")`;
        }

        if (currentFilter !== 'all') {
            const categoryName = SITE_CATEGORIES[currentFilter]?.name || currentFilter;
            message += ` (categoría: ${categoryName})`;
        }

        if (showOnlyFavorites) {
            message += ' (solo favoritos)';
        }

        resultsCounter.textContent = message;
    }

    // Eventos para el buscador
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.trim();
        filterLinks();
    });

    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
        filterLinks();
    });

    // Eventos para los filtros de categoría
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Quitar la clase activa de todos los filtros
            categoryFilters.forEach(f => {
                f.classList.remove('bg-blue-600', 'text-white');
                f.classList.add('bg-blue-50', 'text-blue-700');
            });

            // Añadir la clase activa al filtro seleccionado
            this.classList.remove('bg-blue-50', 'text-blue-700');
            this.classList.add('bg-blue-600', 'text-white');

            // Actualizar el filtro actual
            currentFilter = this.getAttribute('data-category');

            // Aplicar filtros
            filterLinks();
        });
    });

    // Evento para el toggle de favoritos
    favoritesToggle.addEventListener('change', function() {
        showOnlyFavorites = this.checked;

        // Actualizar estilo del toggle
        const dot = this.nextElementSibling.querySelector('.dot');
        if (showOnlyFavorites) {
            this.nextElementSibling.classList.add('bg-yellow-500');
            this.nextElementSibling.classList.remove('bg-gray-200');
            dot.classList.add('translate-x-5');
        } else {
            this.nextElementSibling.classList.remove('bg-yellow-500');
            this.nextElementSibling.classList.add('bg-gray-200');
            dot.classList.remove('translate-x-5');
        }

        // Aplicar filtros
        filterLinks();
    });

    // Aplicar filtros iniciales
    filterLinks();
}

/**
 * Determina la categoría de un enlace basado en su contexto
 * @param {HTMLElement} link - Elemento de enlace
 * @returns {string} - Categoría del enlace
 */
function determineLinkCategory(link) {
    // Buscar el encabezado de sección más cercano
    let currentNode = link;
    let sectionTitle = '';

    while (currentNode && !sectionTitle) {
        // Buscar hacia arriba hasta encontrar un encabezado
        currentNode = currentNode.parentNode;

        if (!currentNode) break;

        // Verificar si es un encabezado o contiene un encabezado
        const headings = currentNode.querySelectorAll('h2, h3, h4');
        if (headings.length > 0) {
            sectionTitle = headings[0].textContent.toLowerCase();
        }
    }

    // Determinar categoría basada en el título de la sección
    if (sectionTitle.includes('documentación') || sectionTitle.includes('microsoft learn')) {
        return 'documentacion';
    } else if (sectionTitle.includes('blog') || sectionTitle.includes('experto')) {
        return 'blogs';
    } else if (sectionTitle.includes('comunidad') || sectionTitle.includes('foro')) {
        return 'comunidades';
    } else if (sectionTitle.includes('video') || sectionTitle.includes('youtube')) {
        return 'videos';
    } else if (sectionTitle.includes('dataset') || sectionTitle.includes('datos')) {
        return 'datasets';
    } else if (sectionTitle.includes('guía') || sectionTitle.includes('manual')) {
        return 'guias';
    }

    // Categoría por defecto
    return 'documentacion';
}

/**
 * Verifica si una URL está en favoritos
 * @param {string} url - URL a verificar
 * @returns {boolean} - true si está en favoritos
 */
function isFavorite(url) {
    const favorites = getFavorites();
    return favorites.some(fav => fav.url === url);
}

/**
 * Alterna el estado de favorito de una URL
 * @param {string} url - URL a alternar
 * @param {string} title - Título del enlace
 * @returns {boolean} - Nuevo estado (true si es favorito)
 */
function toggleFavorite(url, title) {
    const favorites = getFavorites();
    const index = favorites.findIndex(fav => fav.url === url);

    if (index === -1) {
        // Añadir a favoritos
        favorites.push({ url, title, date: new Date().toISOString() });
        saveFavorites(favorites);
        return true;
    } else {
        // Quitar de favoritos
        favorites.splice(index, 1);
        saveFavorites(favorites);
        return false;
    }
}

/**
 * Obtiene la lista de favoritos
 * @returns {Array} - Lista de favoritos
 */
function getFavorites() {
    const favoritesJson = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
}

/**
 * Guarda la lista de favoritos
 * @param {Array} favorites - Lista de favoritos
 */
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

/**
 * Carga los favoritos guardados y actualiza la interfaz
 */
function loadSavedFavorites() {
    const favorites = getFavorites();

    // Buscar todos los botones de favoritos
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(btn => {
        const url = btn.getAttribute('data-url');

        if (favorites.some(fav => fav.url === url)) {
            // Marcar como favorito
            btn.innerHTML = '<i class="fas fa-star"></i>';
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-yellow-500');
            btn.parentNode.classList.add('is-favorite');
        }
    });
}

/**
 * Convierte texto Markdown a HTML
 * @param {string} markdown - Texto en formato Markdown
 * @returns {string} - HTML generado
 */
function convertMarkdownToHTML(markdown) {
    // Esta es una implementación básica
    // Para una aplicación real, se recomienda usar una biblioteca como marked.js

    let html = markdown;

    // Eliminar el título principal (ya se muestra en el encabezado del modal)
    html = html.replace(/^# .+$/m, '');

    // Convertir encabezados
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-blue-900 mb-3 mt-6">$1</h2>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-blue-800 mb-2 mt-5">$1</h3>');
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-bold text-blue-700 mb-2 mt-4">$1</h4>');
    html = html.replace(/^##### (.+)$/gm, '<h5 class="text-base font-bold text-blue-600 mb-2 mt-3">$1</h5>');

    // Convertir párrafos
    html = html.replace(/^(?!<h[2-6]|<ul|<ol|<li|<blockquote|<pre|<table|<p)(.+)$/gm, '<p class="mb-4">$1</p>');

    // Convertir listas
    html = html.replace(/^- (.+)$/gm, '<li class="mb-1 flex items-start"><i class="fas fa-link text-blue-500 mr-2 mt-1 text-xs"></i><span>$1</span></li>');

    // Agrupar elementos de lista
    html = html.replace(/(<li class="mb-1 flex items-start">[\s\S]+?<\/li>)+/g, '<ul class="list-none pl-0 mb-6 space-y-2">$&</ul>');

    // Convertir énfasis
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');

    // Convertir enlaces
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 hover:underline">$1</a>');

    // Convertir bloques de código
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>');

    // Convertir código en línea
    html = html.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>');

    // Convertir citas
    html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-300 pl-4 italic mb-4 text-gray-700">$1</blockquote>');

    // Añadir estilos para secciones
    html = html.replace(/<h2 class="(.+?)">(.+?)<\/h2>/g,
        '<div class="section-card bg-white rounded-lg shadow-md p-5 mb-6 border-l-4 border-blue-500">' +
        '<h2 class="$1">$2</h2>');

    // Cerrar las secciones
    const sections = html.split('<div class="section-card');
    let processedHtml = sections[0];

    for (let i = 1; i < sections.length; i++) {
        processedHtml += '<div class="section-card' + sections[i];

        // Si no es la última sección, cerrar antes de la siguiente
        if (i < sections.length - 1) {
            const nextSectionPos = processedHtml.lastIndexOf('<div class="section-card');
            if (nextSectionPos !== -1) {
                processedHtml = processedHtml.substring(0, nextSectionPos) + '</div>' + processedHtml.substring(nextSectionPos);
            }
        }
    }

    // Cerrar la última sección si existe
    if (sections.length > 1) {
        processedHtml += '</div>';
    }

    return processedHtml;
}

/**
 * Configura los enlaces para abrir archivos Markdown en modales
 */
function setupMarkdownLinks() {
    // Buscar todos los enlaces a archivos Markdown
    const markdownLinks = document.querySelectorAll('a[href$=".md"]');

    markdownLinks.forEach(link => {
        // Prevenir el comportamiento predeterminado
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const filePath = this.getAttribute('href');

            // Cargar el archivo Markdown en el modal de recursos
            loadMarkdownInModal(
                filePath,
                'resource-modal',
                'resource-modal-title',
                'resource-modal-content'
            );
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupMarkdownLinks();

    // También configurar el enlace específico de sitios de referencia si existe
    const sitiosReferenciaLinks = document.querySelectorAll('a[href="assets/sitios_referencia.md"]');
    sitiosReferenciaLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Redirigir a la nueva página HTML en lugar de cargar el modal
            window.location.href = 'sitios_referencia.html';
        });
    });
});

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        loadMarkdownInModal,
        convertMarkdownToHTML,
        setupMarkdownLinks
    };
}
