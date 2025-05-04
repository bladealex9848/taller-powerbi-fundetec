/**
 * Integrador de videos para el taller de Power BI
 * Este archivo contiene funciones para integrar videos de YouTube en el contenido del taller
 */

/**
 * Inserta un video de YouTube en un contenedor
 * @param {string} containerId - ID del contenedor donde se insertará el video
 * @param {string} videoId - ID del video de YouTube
 * @param {string} title - Título del video
 * @param {string} description - Descripción breve del video
 */
function insertYouTubeVideo(containerId, videoId, title, description = '') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container mb-6 bg-white rounded-lg shadow-sm p-4';

    const videoTitle = document.createElement('h4');
    videoTitle.className = 'text-lg font-medium text-blue-800 mb-2';
    videoTitle.textContent = title;

    const videoDescription = document.createElement('p');
    videoDescription.className = 'text-gray-600 text-sm mb-3';
    videoDescription.textContent = description;

    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'relative pb-56.25 h-0 overflow-hidden rounded-lg';
    videoWrapper.style.paddingBottom = '56.25%'; // 16:9 aspect ratio

    const iframe = document.createElement('iframe');
    iframe.className = 'absolute top-0 left-0 w-full h-full';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = title;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoWrapper.appendChild(iframe);
    videoContainer.appendChild(videoTitle);

    if (description) {
        videoContainer.appendChild(videoDescription);
    }

    videoContainer.appendChild(videoWrapper);
    container.appendChild(videoContainer);
}

/**
 * Inserta videos relacionados con la introducción a Power BI
 * @param {string} containerId - ID del contenedor donde se insertarán los videos
 */
function insertIntroVideos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Videos Recomendados';
    container.appendChild(sectionTitle);

    // Crear contenedor para videos
    const videosContainer = document.createElement('div');
    videosContainer.id = 'intro-videos-container';
    videosContainer.className = 'videos-container';
    container.appendChild(videosContainer);

    // Obtener el paso actual para mostrar videos específicos
    const moduleContentSection = document.getElementById('module-content-section');
    const currentStep = moduleContentSection ? parseInt(moduleContentSection.getAttribute('data-current-step') || '0') : 0;

    if (currentStep === 0) {
        // Videos específicos para el paso 1: Importancia del Análisis de Datos
        insertYouTubeVideo(
            'intro-videos-container',
            'Yzx7iRJFCxQ',
            'Análisis de Datos: ¿Qué es y por qué es importante?',
            'Explicación clara sobre la importancia del análisis de datos en el mundo actual.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'ua-X86o6vr0',
            'Power BI: La herramienta de análisis de datos más potente',
            'Introducción a Power BI como herramienta de análisis de datos.'
        );
    } else if (currentStep === 1) {
        // Videos específicos para el paso 2: Microsoft Power BI: Componentes Esenciales
        insertYouTubeVideo(
            'intro-videos-container',
            'yKTSLuJ9hSY',
            'Power BI: Componentes y Arquitectura',
            'Explicación detallada de los componentes de Power BI y cómo se relacionan entre sí.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'DFWFqLKE3Gs',
            'Power BI Desktop vs Power BI Service: Diferencias y usos',
            'Comparación entre los dos componentes principales de Power BI y cuándo usar cada uno.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'ByZrxlBGiIY',
            'Cómo descargar e instalar Power BI Desktop',
            'Tutorial paso a paso para descargar e instalar Power BI Desktop en tu computadora.'
        );
    } else if (currentStep === 2) {
        // Videos específicos para el paso 3: Recorrido por la Interfaz de Power BI Desktop
        insertYouTubeVideo(
            'intro-videos-container',
            'Wy_QpPu_CZE',
            'Interfaz de Power BI Desktop: Guía completa',
            'Recorrido detallado por todas las áreas de la interfaz de Power BI Desktop.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'Jbocj79eBXQ',
            'Las 3 vistas de Power BI Desktop: Informe, Datos y Modelo',
            'Explicación de las tres vistas principales y cuándo usar cada una.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'Hn9kNzN8H4I',
            'Atajos de teclado en Power BI Desktop',
            'Los atajos de teclado más útiles para trabajar de manera eficiente en Power BI Desktop.'
        );
    } else if (currentStep === 3) {
        // Videos específicos para el paso 4: Tipos de Datos y Modelos (Conceptos Básicos)
        insertYouTubeVideo(
            'intro-videos-container',
            'Ld1MwGK0Ivo',
            'Tipos de datos en Power BI: Guía completa',
            'Explicación detallada de los diferentes tipos de datos en Power BI y cómo trabajar con ellos.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'FnbLGPmB-Dw',
            'Modelado de datos en Power BI para principiantes',
            'Introducción al modelado de datos en Power BI: tablas, relaciones y cardinalidad.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'GmLVXJdhH9o',
            'Relaciones en Power BI: Cómo crearlas y gestionarlas',
            'Tutorial paso a paso para crear y gestionar relaciones entre tablas en Power BI.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'ePPi1RPuZ6s',
            'Mejores prácticas de modelado en Power BI',
            'Consejos y mejores prácticas para crear modelos de datos eficientes y efectivos en Power BI.'
        );
    } else {
        // Videos generales para otros pasos del módulo de introducción
        insertYouTubeVideo(
            'intro-videos-container',
            'oQ4q2CSXP4M',
            'Curso de Microsoft Power BI desde cero | INTRODUCCIÓN',
            'Explicación de versiones, descarga e instalación de Power BI.'
        );

        insertYouTubeVideo(
            'intro-videos-container',
            'C8HatpMK9Hw',
            '¿Cómo usar Power BI? Tutorial desde 0',
            'Tutorial completo para principiantes que cubre los conceptos básicos.'
        );
    }

    // Agregar un tercer video relevante para todos los pasos
    insertYouTubeVideo(
        'intro-videos-container',
        'hKe7bHPiSPU',
        'Tutorial Power BI - Creación de Dashboard en 3 horas',
        'Tutorial detallado para crear un dashboard completo desde cero.'
    );
}

/**
 * Inserta videos relacionados con la transformación de datos
 * @param {string} containerId - ID del contenedor donde se insertarán los videos
 */
function insertTransformVideos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Videos Recomendados';
    container.appendChild(sectionTitle);

    // Crear contenedor para videos
    const videosContainer = document.createElement('div');
    videosContainer.id = 'transform-videos-container';
    videosContainer.className = 'videos-container';
    container.appendChild(videosContainer);

    // Obtener el paso actual para mostrar videos específicos
    const moduleContentSection = document.getElementById('module-content-section');
    const currentStep = moduleContentSection ? parseInt(moduleContentSection.getAttribute('data-current-step') || '0') : 0;

    if (currentStep === 0) {
        // Videos específicos para el paso 1: Conexión a Fuentes de Datos
        insertYouTubeVideo(
            'transform-videos-container',
            'Wy_QpPu_CZE',
            'Obtener datos en Power BI: Todas las fuentes de datos',
            'Explicación detallada de las diferentes fuentes de datos disponibles en Power BI.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'Ld1MwGK0Ivo',
            'Importación vs DirectQuery: ¿Cuál elegir?',
            'Comparación entre los modos de conexión Importación y DirectQuery, ventajas y desventajas.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'ByZrxlBGiIY',
            'Conectar a Excel y CSV en Power BI',
            'Tutorial paso a paso para conectar a archivos Excel y CSV en Power BI.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'GmLVXJdhH9o',
            'Conectar a bases de datos SQL Server desde Power BI',
            'Guía completa para conectar Power BI a bases de datos SQL Server.'
        );
    } else if (currentStep === 1) {
        // Videos específicos para el paso 2: Introducción a Power Query (Editor)
        insertYouTubeVideo(
            'transform-videos-container',
            'f3nEZo4b-Yg',
            'Power Query desde Cero: Tutorial Completo para Principiantes',
            'Introducción a la interfaz de Power Query y sus funcionalidades básicas.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'ezc9ZVMxYwU',
            'Interfaz de Power Query: Guía Detallada',
            'Explicación de cada componente de la interfaz del Editor de Power Query.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'Jbocj79eBXQ',
            'Panel de Pasos Aplicados: El Corazón de Power Query',
            'Cómo utilizar el panel de Pasos Aplicados para documentar y editar transformaciones.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'Hn9kNzN8H4I',
            'Tipos de Datos en Power Query: Guía Completa',
            'Explicación de los diferentes tipos de datos y cómo trabajar con ellos en Power Query.'
        );
    } else if (currentStep === 2) {
        // Videos específicos para el paso 3: Transformaciones Fundamentales
        insertYouTubeVideo(
            'transform-videos-container',
            'Hn9kNzN8H4I',
            'Transformaciones de Columnas en Power Query',
            'Aprende a modificar, dividir, combinar y crear columnas personalizadas en Power Query.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'Jbocj79eBXQ',
            'Transformaciones de Filas en Power Query',
            'Técnicas para filtrar, ordenar y manipular filas en Power Query.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'ezc9ZVMxYwU',
            'Transformaciones de Tabla en Power Query',
            'Aprende a transponer, dinamizar y anular dinamización de tablas en Power Query.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'f3nEZo4b-Yg',
            'Combinación y Anexo de Tablas en Power Query',
            'Cómo combinar datos de múltiples fuentes usando Power Query.'
        );
    } else {
        // Videos generales para otros pasos del módulo de transformación
        insertYouTubeVideo(
            'transform-videos-container',
            'ezc9ZVMxYwU',
            'Conecta, Transforma y Automatiza tus Datos con Power BI',
            'Proceso completo de conexión y transformación de datos.'
        );

        insertYouTubeVideo(
            'transform-videos-container',
            'f3nEZo4b-Yg',
            'Power Query desde Cero: Tutorial Completo para Principiantes',
            'Interfaz de Power Query y transformaciones básicas.'
        );
    }
}

/**
 * Inserta videos relacionados con la demostración de Power BI
 * @param {string} containerId - ID del contenedor donde se insertarán los videos
 */
function insertDemoVideos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Videos Recomendados';
    container.appendChild(sectionTitle);

    // Crear contenedor para videos
    const videosContainer = document.createElement('div');
    videosContainer.id = 'demo-videos-container';
    videosContainer.className = 'videos-container';
    container.appendChild(videosContainer);

    // Obtener el paso actual del módulo de demostración
    const moduleContentSection = document.getElementById('module-content-section');
    const currentStep = parseInt(moduleContentSection?.getAttribute('data-current-step') || '0');

    // Insertar videos específicos según el paso
    if (currentStep === 0) { // Introducción a la Demostración
        insertYouTubeVideo(
            'demo-videos-container',
            'ZY5uhdKllYk',
            'Cómo crear un Dashboard en Power BI desde Cero y Paso a Paso',
            'Tutorial completo que muestra el proceso de creación de un dashboard desde el principio.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'hKe7bHPiSPU',
            'Tutorial Power BI - Creación de Dashboard en 3 horas',
            'Demostración detallada del flujo de trabajo completo en Power BI.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'iiNDq2VnZSo',
            'Introducción a Power BI: Primeros pasos para crear dashboards',
            'Conceptos básicos para comenzar a crear dashboards efectivos.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'sjrlIAQnD8M',
            'Curso Completo de Power BI',
            'Visión general de todas las funcionalidades que veremos en la demostración.'
        );
    } else if (currentStep === 1) { // Importación de Datos
        insertYouTubeVideo(
            'demo-videos-container',
            'ezc9ZVMxYwU',
            'Importar datos en Power BI: Guía completa de conexiones',
            'Tutorial detallado sobre cómo conectarse a diferentes fuentes de datos en Power BI.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'f3nEZo4b-Yg',
            'Power Query: Transformación de datos en Power BI',
            'Cómo usar Power Query para limpiar y transformar datos antes de cargarlos.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'Jbocj79eBXQ',
            'Conexión a Excel y CSV en Power BI',
            'Tutorial específico sobre cómo importar datos desde archivos Excel y CSV.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'Hn9kNzN8H4I',
            'Conexión a bases de datos SQL en Power BI',
            'Cómo conectar Power BI a bases de datos SQL Server y otras bases de datos relacionales.'
        );
    } else if (currentStep === 2) { // Creación de Visualizaciones
        insertYouTubeVideo(
            'demo-videos-container',
            '8L2ArDp-IDI',
            'Visualizaciones en Power BI: Guía completa',
            'Tutorial detallado sobre los diferentes tipos de visualizaciones disponibles en Power BI.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'ZY5uhdKllYk',
            'Cómo elegir la visualización correcta en Power BI',
            'Guía para seleccionar el tipo de visualización más adecuado según tus datos y objetivos.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'iiNDq2VnZSo',
            'Personalización de visualizaciones en Power BI',
            'Cómo dar formato y personalizar tus visualizaciones para hacerlas más efectivas.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'sjrlIAQnD8M',
            'Visualizaciones avanzadas en Power BI',
            'Técnicas avanzadas para crear visualizaciones más sofisticadas e interactivas.'
        );
    } else if (currentStep === 3) { // Creación de Dashboards
        insertYouTubeVideo(
            'demo-videos-container',
            'ZY5uhdKllYk',
            'Cómo crear un Dashboard en Power BI desde Cero y Paso a Paso',
            'Tutorial completo para crear un dashboard efectivo en Power BI.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'hKe7bHPiSPU',
            'Diseño de Dashboards Profesionales en Power BI',
            'Principios de diseño y mejores prácticas para crear dashboards impactantes.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'iiNDq2VnZSo',
            'Interactividad en Dashboards de Power BI',
            'Cómo configurar la interactividad entre visualizaciones para crear dashboards dinámicos.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'sjrlIAQnD8M',
            'Storytelling con Dashboards en Power BI',
            'Técnicas para contar historias efectivas con tus datos a través de dashboards.'
        );
    } else if (currentStep === 4) { // Interactividad y Filtros
        insertYouTubeVideo(
            'demo-videos-container',
            '8L2ArDp-IDI',
            'Creación de Visualizaciones Simples en Power BI',
            'Gráficos básicos y personalización de visualizaciones.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            'ZY5uhdKllYk',
            'Cómo crear un Dashboard en Power BI desde Cero y Paso a Paso',
            'Tutorial paso a paso para crear un dashboard completo.'
        );
    } else {
        // Videos generales para otros pasos del módulo de demostración
        insertYouTubeVideo(
            'demo-videos-container',
            'ZY5uhdKllYk',
            'Cómo crear un Dashboard en Power BI desde Cero y Paso a Paso',
            'Tutorial paso a paso para crear un dashboard completo.'
        );

        insertYouTubeVideo(
            'demo-videos-container',
            '8L2ArDp-IDI',
            'Creación de Visualizaciones Simples en Power BI',
            'Gráficos básicos y personalización de visualizaciones.'
        );
    }
}

/**
 * Inserta videos relacionados con la práctica de Power BI
 * @param {string} containerId - ID del contenedor donde se insertarán los videos
 */
function insertPracticeVideos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Videos Recomendados';
    container.appendChild(sectionTitle);

    // Crear contenedor para videos
    const videosContainer = document.createElement('div');
    videosContainer.id = 'practice-videos-container';
    videosContainer.className = 'videos-container';
    container.appendChild(videosContainer);

    // Obtener el módulo y paso actuales
    const moduleContentSection = document.getElementById('module-content-section');
    const currentModule = moduleContentSection ? moduleContentSection.getAttribute('data-current-module') : '';
    const currentStep = moduleContentSection ? parseInt(moduleContentSection.getAttribute('data-current-step') || '0') : 0;

    // Insertar videos según el paso actual
    if (currentModule === 'practice' && currentStep === 0) { // Introducción a la Práctica
        insertYouTubeVideo(
            'practice-videos-container',
            'f3nEZo4b-Yg',
            'Preparación para trabajar con Power BI',
            'Guía para configurar correctamente tu entorno de trabajo antes de comenzar con Power BI.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'ezc9ZVMxYwU',
            'Primeros pasos con Power BI Desktop',
            'Introducción a la interfaz y funcionalidades básicas de Power BI Desktop.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'Jbocj79eBXQ',
            'Consejos para practicar eficientemente con Power BI',
            'Recomendaciones para aprovechar al máximo tus sesiones de práctica.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'Hn9kNzN8H4I',
            'Errores comunes al comenzar con Power BI',
            'Problemas frecuentes y cómo evitarlos cuando estás aprendiendo Power BI.'
        );
    } else if (currentModule === 'practice' && currentStep === 1) { // Desarrollo Paso a Paso
        insertYouTubeVideo(
            'practice-videos-container',
            'Jbocj79eBXQ',
            'Conexión a datos en Power BI',
            'Tutorial detallado sobre cómo conectarse a diferentes fuentes de datos en Power BI.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'f3nEZo4b-Yg',
            'Transformación de datos con Power Query',
            'Guía completa sobre cómo usar Power Query para limpiar y transformar datos.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'ezc9ZVMxYwU',
            'Modelado de datos en Power BI',
            'Cómo crear un modelo de datos eficiente con relaciones correctas entre tablas.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'Hn9kNzN8H4I',
            'Modelo en estrella vs. copo de nieve',
            'Diferencias entre los modelos de datos en estrella y copo de nieve, y cuándo usar cada uno.'
        );
    } else { // Recursos para Continuar Aprendiendo (paso 3) u otros pasos
        insertYouTubeVideo(
            'practice-videos-container',
            'hKe7bHPiSPU',
            'Tutorial Power BI - Creación de Dashboard en 3 horas',
            'Tutorial detallado para crear un dashboard completo desde cero.'
        );

        insertYouTubeVideo(
            'practice-videos-container',
            'sjrlIAQnD8M',
            'Curso Completo de Power BI',
            'Curso completo con todas las funcionalidades para seguir aprendiendo.'
        );
    }
}

/**
 * Inserta enlaces a sitios web de referencia
 * @param {string} containerId - ID del contenedor donde se insertarán los enlaces
 */
function insertWebsiteLinks(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Sitios Web de Referencia';
    container.appendChild(sectionTitle);

    // Crear contenedor para enlaces
    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container grid grid-cols-1 md:grid-cols-2 gap-4 mb-6';
    container.appendChild(linksContainer);

    // Definir enlaces
    const links = [
        {
            title: 'Documentación de Power BI',
            url: 'https://learn.microsoft.com/es-es/power-bi/',
            description: 'Documentación oficial completa de Microsoft.',
            icon: 'fas fa-book'
        },
        {
            title: 'Documentación de Power Query',
            url: 'https://learn.microsoft.com/es-es/power-query/',
            description: 'Documentación específica sobre Power Query.',
            icon: 'fas fa-exchange-alt'
        },
        {
            title: 'Comunidad Microsoft Fabric/Power BI',
            url: 'https://community.fabric.microsoft.com/t5/Comunidad-de-Power-BI-en-espa%C3%B1ol/ct-p/PBI_Espanol',
            description: 'Foro oficial en español para resolver dudas.',
            icon: 'fas fa-users'
        },
        {
            title: 'PowerBI SP (Francisco Mullor)',
            url: 'https://powerbisp.com/blog',
            description: 'Blog con artículos sobre novedades y tutoriales.',
            icon: 'fas fa-user-tie'
        }
    ];

    // Insertar enlaces
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.className = 'block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300';

        linkElement.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0 text-blue-600 text-xl mr-3">
                    <i class="${link.icon}"></i>
                </div>
                <div>
                    <h4 class="font-medium text-blue-800">${link.title}</h4>
                    <p class="text-sm text-gray-600 mt-1">${link.description}</p>
                </div>
            </div>
        `;

        linksContainer.appendChild(linkElement);
    });

    // Agregar enlace para ver todos los recursos
    const viewAllLink = document.createElement('div');
    viewAllLink.className = 'text-center mt-4';
    viewAllLink.innerHTML = `
        <a href="assets/sitios_referencia.md" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800">
            <span>Ver todos los sitios de referencia</span>
            <i class="fas fa-external-link-alt ml-1"></i>
        </a>
    `;
    container.appendChild(viewAllLink);
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        insertYouTubeVideo,
        insertIntroVideos,
        insertTransformVideos,
        insertDemoVideos,
        insertPracticeVideos,
        insertWebsiteLinks
    };
}
