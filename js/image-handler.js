/**
 * Manejador de imágenes
 * Este archivo contiene funciones para manejar la carga de imágenes y proporcionar alternativas cuando fallan
 */

/**
 * Inicializa el manejador de imágenes cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el manejo de errores de imágenes
    initImageErrorHandling();

    // Verificar la imagen de fondo del hero
    checkHeroBackgroundImage();
});

/**
 * Inicializa el manejo de errores para todas las imágenes
 */
function initImageErrorHandling() {
    // Obtener todas las imágenes en la página
    const images = document.querySelectorAll('img');

    // Agregar manejador de errores a cada imagen
    images.forEach(img => {
        img.addEventListener('error', handleImageError);
    });

    console.log(`Manejador de errores agregado a ${images.length} imágenes`);
}

/**
 * Maneja el error de carga de una imagen
 * @param {Event} event - Evento de error
 */
function handleImageError(event) {
    const img = event.target;
    const originalSrc = img.src;
    const alt = img.alt || 'Imagen';

    console.warn(`Error al cargar la imagen: ${originalSrc}`);

    // Determinar qué imagen de respaldo usar según el contexto
    if (originalSrc.includes('logo')) {
        // Respaldo para logos
        img.src = createTextImage(alt, '#1a3e82', '#ffffff');
    } else if (originalSrc.includes('profile') || originalSrc.includes('facilitator')) {
        // Respaldo para imágenes de perfil
        img.src = createTextImage('👤', '#1a3e82', '#ffffff');
    } else if (originalSrc.includes('hero-background')) {
        // Respaldo para imagen de fondo del hero
        document.querySelector('.hero-section').style.background = 'linear-gradient(135deg, #1a3e82 0%, #4a69bd 100%)';
    } else {
        // Respaldo genérico
        img.src = createTextImage('📷', '#f5f8ff', '#1a3e82');
    }

    // Evitar bucle infinito de errores
    img.removeEventListener('error', handleImageError);
}

/**
 * Crea una imagen de texto como respaldo
 * @param {string} text - Texto a mostrar
 * @param {string} bgColor - Color de fondo
 * @param {string} textColor - Color del texto
 * @returns {string} URL de datos de la imagen
 */
function createTextImage(text, bgColor, textColor) {
    // Crear un canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Configurar tamaño
    canvas.width = 200;
    canvas.height = 200;

    // Dibujar fondo
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar texto
    ctx.fillStyle = textColor;
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Convertir a URL de datos
    return canvas.toDataURL('image/png');
}

/**
 * Verifica si la imagen de fondo del hero se carga correctamente
 */
function checkHeroBackgroundImage() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Intentar cargar la imagen de fondo
    const bgImage = new Image();
    bgImage.onload = () => {
        console.log('Imagen de fondo del hero cargada correctamente');
    };

    bgImage.onerror = () => {
        console.warn('Error al cargar la imagen de fondo del hero, aplicando respaldo');

        // Aplicar un gradiente como respaldo
        heroSection.style.background = 'linear-gradient(135deg, #1a3e82 0%, #4a69bd 100%)';

        // Añadir un mensaje en la consola con las rutas probadas
        console.info('Rutas probadas para la imagen de fondo:');
        console.info('1. ../assets/img/hero-background.jpg (desde CSS)');
        console.info('2. assets/img/hero-background.jpg (ruta relativa)');
        console.info('3. /assets/img/hero-background.jpg (ruta absoluta)');
    };

    // Extraer la URL de la imagen del estilo computado
    const computedStyle = window.getComputedStyle(heroSection);
    const backgroundImage = computedStyle.backgroundImage;

    // Si ya hay una imagen de fondo, intentar cargarla
    if (backgroundImage && backgroundImage !== 'none' && !backgroundImage.includes('linear-gradient')) {
        // Extraer la URL de la cadena "url('...')"
        const urlMatch = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
            bgImage.src = urlMatch[1];
        } else {
            // Si no se puede extraer la URL, intentar con la ruta predeterminada
            bgImage.src = 'assets/img/hero-background.jpg';
        }
    } else {
        // Si no hay imagen de fondo, intentar con la ruta predeterminada
        bgImage.src = 'assets/img/hero-background.jpg';
    }
}

/**
 * Precarga imágenes importantes
 * @param {Array<string>} urls - URLs de las imágenes a precargar
 * @returns {Promise<Array>} Promesa que se resuelve cuando todas las imágenes están cargadas
 */
function preloadImages(urls) {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => {
                console.warn(`Error al precargar imagen: ${url}`);
                resolve(null); // Resolver de todos modos para no bloquear
            };
            img.src = url;
        });
    });

    return Promise.all(promises);
}
