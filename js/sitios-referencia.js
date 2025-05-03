/**
 * Sitios web de referencia para el taller de Power BI
 * Este archivo contiene funciones para insertar enlaces a sitios web en el contenido
 */

/**
 * Inserta un enlace a un sitio web en un contenedor
 * @param {string} containerId - ID del contenedor donde se insertará el enlace
 * @param {string} url - URL del sitio web
 * @param {string} title - Título del enlace
 * @param {string} description - Descripción del sitio web
 * @param {string} icon - Clase de icono (Font Awesome)
 */
function insertWebsiteLink(containerId, url, title, description, icon) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor con ID ${containerId} no encontrado`);
        return;
    }

    const linkContainer = document.createElement('div');
    linkContainer.className = 'website-link mb-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300';
    
    const linkTitle = document.createElement('a');
    linkTitle.className = 'text-lg font-medium text-blue-700 hover:text-blue-900 flex items-center';
    linkTitle.href = url;
    linkTitle.target = '_blank';
    linkTitle.rel = 'noopener noreferrer';
    
    const iconElement = document.createElement('i');
    iconElement.className = icon + ' mr-2';
    
    const titleText = document.createElement('span');
    titleText.textContent = title;
    
    linkTitle.appendChild(iconElement);
    linkTitle.appendChild(titleText);
    
    const linkDescription = document.createElement('p');
    linkDescription.className = 'text-gray-600 mt-1 ml-6';
    linkDescription.textContent = description;
    
    linkContainer.appendChild(linkTitle);
    linkContainer.appendChild(linkDescription);
    container.appendChild(linkContainer);
}

/**
 * Sitios web de documentación oficial
 */
const officialDocumentation = [
    {
        url: 'https://learn.microsoft.com/es-es/power-bi/',
        title: 'Documentación de Power BI - Microsoft Learn',
        description: 'Documentación oficial de Microsoft en español.',
        icon: 'fas fa-book'
    },
    {
        url: 'https://learn.microsoft.com/es-es/power-query/',
        title: 'Documentación de Power Query - Microsoft Learn',
        description: 'Documentación oficial de Power Query en español.',
        icon: 'fas fa-exchange-alt'
    },
    {
        url: 'https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets',
        title: 'Ejemplos y datasets oficiales',
        description: 'Ejemplos y datasets oficiales de Microsoft.',
        icon: 'fas fa-database'
    }
];

/**
 * Blogs y sitios de expertos
 */
const blogsAndExperts = [
    {
        url: 'https://powerbisp.com/',
        title: 'PowerBI SP (Francisco Mullor Cabrera)',
        description: 'Blog de un MVP de Microsoft centrado en Power BI.',
        icon: 'fas fa-user-tie'
    },
    {
        url: 'https://www.bitigabi.com/',
        title: 'Biti (Santiago Tomás Selma)',
        description: 'Blog enfocado en Business Intelligence con Power BI.',
        icon: 'fas fa-user-tie'
    },
    {
        url: 'https://elfuturodelosdatos.com/',
        title: 'El Futuro de los Datos (Salvador Ramos)',
        description: 'Sitio web y blog de un veterano MVP de Microsoft.',
        icon: 'fas fa-user-tie'
    }
];

/**
 * Comunidades y foros
 */
const communitiesAndForums = [
    {
        url: 'https://community.fabric.microsoft.com/t5/Comunidad-de-Power-BI-en-espa%C3%B1ol/ct-p/PBI_Espanol',
        title: 'Comunidad Microsoft Fabric/Power BI (Español)',
        description: 'Foro oficial de Microsoft en español.',
        icon: 'fas fa-users'
    },
    {
        url: 'https://www.powerplatformspain.com/',
        title: 'Power Platform España',
        description: 'Comunidad amplia que abarca toda la Power Platform.',
        icon: 'fas fa-users'
    }
];

/**
 * Inserta enlaces a sitios web en la página según la categoría
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
    
    // Crear contenedor para documentación oficial
    const officialTitle = document.createElement('h4');
    officialTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    officialTitle.textContent = 'Documentación Oficial';
    container.appendChild(officialTitle);
    
    const officialContainer = document.createElement('div');
    officialContainer.className = 'official-documentation mb-4';
    container.appendChild(officialContainer);
    
    // Insertar enlaces de documentación oficial
    officialDocumentation.forEach(site => {
        insertWebsiteLink('official-documentation', site.url, site.title, site.description, site.icon);
    });
    
    // Crear contenedor para blogs y expertos
    const blogsTitle = document.createElement('h4');
    blogsTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    blogsTitle.textContent = 'Blogs y Expertos';
    container.appendChild(blogsTitle);
    
    const blogsContainer = document.createElement('div');
    blogsContainer.className = 'blogs-experts mb-4';
    container.appendChild(blogsContainer);
    
    // Insertar enlaces de blogs y expertos
    blogsAndExperts.forEach(site => {
        insertWebsiteLink('blogs-experts', site.url, site.title, site.description, site.icon);
    });
    
    // Crear contenedor para comunidades y foros
    const communitiesTitle = document.createElement('h4');
    communitiesTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    communitiesTitle.textContent = 'Comunidades y Foros';
    container.appendChild(communitiesTitle);
    
    const communitiesContainer = document.createElement('div');
    communitiesContainer.className = 'communities-forums mb-4';
    container.appendChild(communitiesContainer);
    
    // Insertar enlaces de comunidades y foros
    communitiesAndForums.forEach(site => {
        insertWebsiteLink('communities-forums', site.url, site.title, site.description, site.icon);
    });
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        insertWebsiteLink,
        insertWebsiteLinks,
        officialDocumentation,
        blogsAndExperts,
        communitiesAndForums
    };
}
