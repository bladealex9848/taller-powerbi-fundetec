/**
 * Videos embebidos para el taller de Power BI
 * Este archivo contiene funciones para insertar videos de YouTube en el contenido
 */

/**
 * Inserta un video de YouTube en un contenedor
 * @param {string} containerId - ID del contenedor donde se insertará el video
 * @param {string} videoId - ID del video de YouTube
 * @param {string} title - Título del video
 */
function insertYouTubeVideo(containerId, videoId, title) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container mb-4';
    
    const videoTitle = document.createElement('h4');
    videoTitle.className = 'text-lg font-medium text-blue-800 mb-2';
    videoTitle.textContent = title;
    
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = title;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(iframe);
    container.appendChild(videoContainer);
}

/**
 * Videos introductorios de Power BI
 */
const introVideos = [
    {
        id: 'pwJuFbyhZFE',
        title: 'Cómo usar Power BI (Tutorial desde cero)'
    },
    {
        id: 'hKe7bHPiSPU',
        title: 'Tutorial Power BI - Creación de Dashboard en 3 horas'
    }
];

/**
 * Videos sobre conexión y transformación de datos
 */
const transformVideos = [
    {
        id: 'jeq1vGx2aSs',
        title: 'Tutorial Power BI - Primeros pasos con Power Query Editor'
    },
    {
        id: 'nPlrQUbEn4s',
        title: 'Power Query: Consolidar datos de múltiples hojas Excel'
    }
];

/**
 * Videos sobre visualización y dashboards
 */
const visualizationVideos = [
    {
        id: 'sjrlIAQnD8M',
        title: 'Curso Completo de Power BI'
    },
    {
        id: 'YmYElmzLWgw',
        title: 'Interacciones entre visualizaciones en Power BI'
    }
];

/**
 * Inserta videos en la página según la sección actual
 * @param {string} section - Sección actual ('intro', 'transform', 'demo', 'practice')
 * @param {string} containerId - ID del contenedor donde se insertarán los videos
 */
function insertVideosForSection(section, containerId) {
    let videos = [];
    
    switch (section) {
        case 'intro':
            videos = introVideos;
            break;
        case 'transform':
            videos = transformVideos;
            break;
        case 'demo':
        case 'practice':
            videos = visualizationVideos;
            break;
        default:
            console.error(`Sección desconocida: ${section}`);
            return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }
    
    // Crear título de sección
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-xl font-bold text-blue-900 mb-4 mt-6';
    sectionTitle.textContent = 'Videos Instructivos';
    container.appendChild(sectionTitle);
    
    // Crear contenedor para videos
    const videosContainer = document.createElement('div');
    videosContainer.className = 'videos-container';
    container.appendChild(videosContainer);
    
    // Insertar cada video
    videos.forEach(video => {
        insertYouTubeVideo('videos-container', video.id, video.title);
    });
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        insertYouTubeVideo,
        insertVideosForSection,
        introVideos,
        transformVideos,
        visualizationVideos
    };
}
