/**
 * Sitios web de referencia para el taller de Power BI
 * Este archivo contiene funciones para insertar enlaces a sitios web en el contenido
 * Organizado por módulos y pasos para mostrar enlaces relevantes en cada sección
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
 * Sitios web de documentación oficial general
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
 * Blogs y sitios de expertos general
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
 * Comunidades y foros general
 */
const communitiesAndForums = [
    {
        url: 'https://community.fabric.microsoft.com/t5/Power-BI-forums/ct-p/powerbi',
        title: 'Comunidad Microsoft Fabric/Power BI (Español)',
        description: 'Foro oficial de Microsoft en español.',
        icon: 'fas fa-users'
    },
    {
        url: 'https://community.fabric.microsoft.com/t5/Power-BI-Spanish-forums/ct-p/pbi_spanish',
        title: 'Power Platform España',
        description: 'Comunidad amplia que abarca toda la Power Platform.',
        icon: 'fas fa-users'
    }
];

/**
 * Enlaces específicos para el módulo de introducción
 */
const introModuleLinks = {
    // Paso 0: Importancia del Análisis de Datos
    0: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/fundamentals/power-bi-overview',
                title: 'Introducción a Power BI',
                description: 'Visión general de Power BI y sus capacidades.',
                icon: 'fas fa-book'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-what-is-desktop',
                title: '¿Qué es Power BI Desktop?',
                description: 'Introducción a la herramienta principal de Power BI.',
                icon: 'fas fa-desktop'
            }
        ],
        blogs: [
            {
                url: 'https://powerbi.microsoft.com/es-es/blog/',
                title: 'Blog oficial de Power BI',
                description: 'Noticias y actualizaciones oficiales de Microsoft.',
                icon: 'fas fa-rss'
            },
            {
                url: 'https://www.dataprix.com/es/tecnologia/business-intelligence',
                title: 'Dataprix - Power BI',
                description: 'Artículos sobre análisis de datos con Power BI.',
                icon: 'fas fa-chart-line'
            }
        ],
        communities: [
            {
                url: 'https://community.powerbi.com/t5/Community-Blog/bg-p/community_blog',
                title: 'Comunidad Power BI',
                description: 'Blog de la comunidad con artículos de usuarios.',
                icon: 'fas fa-users'
            }
        ]
    },
    // Paso 1: Microsoft Power BI: Componentes Esenciales
    1: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/fundamentals/service-service-vs-desktop',
                title: 'Power BI Service vs Desktop',
                description: 'Comparación entre los dos componentes principales.',
                icon: 'fas fa-exchange-alt'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/fundamentals/power-bi-service-overview',
                title: 'Power BI Service',
                description: 'Descripción del servicio en la nube de Power BI.',
                icon: 'fas fa-cloud'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/power-bi-desktop-vs-power-bi-service/',
                title: 'SQLBI - Desktop vs Service',
                description: 'Análisis detallado de las diferencias entre ambos componentes.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones específicas sobre Power BI Desktop.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Paso 2: Recorrido por la Interfaz de Power BI Desktop
    2: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-query-overview',
                title: 'Vista general del Editor de consultas',
                description: 'Introducción al editor de consultas de Power BI.',
                icon: 'fas fa-edit'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-relationship-view',
                title: 'Vista de relaciones',
                description: 'Cómo trabajar con la vista de relaciones en Power BI.',
                icon: 'fas fa-project-diagram'
            }
        ],
        blogs: [
            {
                url: 'https://radacad.com/power-bi-desktop-a-comprehensive-guide',
                title: 'RADACAD - Guía de Power BI Desktop',
                description: 'Guía completa sobre la interfaz de Power BI Desktop.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones específicas sobre Power BI Desktop.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Paso 3: Tipos de Datos y Modelos (Conceptos Básicos)
    3: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-modeling-view',
                title: 'Vista de modelado',
                description: 'Cómo trabajar con la vista de modelado en Power BI.',
                icon: 'fas fa-database'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-data-types',
                title: 'Tipos de datos en Power BI',
                description: 'Descripción de los diferentes tipos de datos disponibles.',
                icon: 'fas fa-list'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/data-modeling-for-power-bi/',
                title: 'SQLBI - Modelado de datos',
                description: 'Guía avanzada sobre modelado de datos en Power BI.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/Data-Modeling/td-p/3432923',
                title: 'Foro de Modelado de Datos',
                description: 'Discusiones específicas sobre modelado de datos.',
                icon: 'fas fa-comments'
            }
        ]
    }
};

/**
 * Enlaces específicos para el módulo de transformación
 */
const transformModuleLinks = {
    // Paso 0: Conexión a Fuentes de Datos
    0: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-data-sources',
                title: 'Fuentes de datos en Power BI',
                description: 'Lista completa de fuentes de datos disponibles.',
                icon: 'fas fa-plug'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/connect-data/service-gateway-onprem',
                title: 'Gateways de datos locales',
                description: 'Cómo conectar a fuentes de datos locales.',
                icon: 'fas fa-network-wired'
            }
        ],
        blogs: [
            {
                url: 'https://radacad.com/directquery-or-import-data-the-eternal-question',
                title: 'RADACAD - DirectQuery vs Import',
                description: 'Análisis detallado de los modos de conexión.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones específicas sobre conexiones de datos.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Paso 1: Transformación de Datos con Power Query
    1: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-query/power-query-what-is-power-query',
                title: '¿Qué es Power Query?',
                description: 'Introducción a Power Query y sus capacidades.',
                icon: 'fas fa-exchange-alt'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-query/power-query-ui',
                title: 'Interfaz de usuario de Power Query',
                description: 'Guía de la interfaz del Editor de consultas.',
                icon: 'fas fa-desktop'
            }
        ],
        blogs: [
            {
                url: 'https://www.powerquery.training/blog/',
                title: 'Power Query Training',
                description: 'Blog especializado en Power Query con tutoriales.',
                icon: 'fas fa-graduation-cap'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Power-Query/bd-p/power-bi-services',
                title: 'Foro de Power Query',
                description: 'Discusiones específicas sobre Power Query.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Paso 2: Modelado de Datos
    2: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-create-and-manage-relationships',
                title: 'Crear y administrar relaciones',
                description: 'Cómo establecer relaciones entre tablas.',
                icon: 'fas fa-project-diagram'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-tutorial-create-calculated-columns',
                title: 'Crear columnas calculadas',
                description: 'Tutorial para crear columnas calculadas con DAX.',
                icon: 'fas fa-calculator'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/data-modeling-for-power-bi/',
                title: 'SQLBI - Modelado de datos',
                description: 'Guía avanzada sobre modelado de datos en Power BI.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/Data-Modeling/td-p/3432923',
                title: 'Foro de Modelado de Datos',
                description: 'Discusiones específicas sobre modelado de datos.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Paso 3: Creación de Medidas con DAX
    3: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/dax/',
                title: 'Referencia de DAX',
                description: 'Documentación oficial del lenguaje DAX.',
                icon: 'fas fa-book-open'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-quickstart-learn-dax-basics',
                title: 'Conceptos básicos de DAX',
                description: 'Introducción a los conceptos fundamentales de DAX.',
                icon: 'fas fa-calculator'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/filter-context-in-dax/',
                title: 'SQLBI - Contexto de filtro en DAX',
                description: 'Explicación detallada del contexto de filtro en DAX.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/DAX-Commands-and-Tips/bd-p/DAXCommands',
                title: 'Foro de DAX',
                description: 'Discusiones específicas sobre DAX.',
                icon: 'fas fa-comments'
            }
        ]
    }
};

/**
 * Enlaces específicos para el módulo de demostración
 */
const demoModuleLinks = {
    // Paso 0: Introducción a la Demostración
    0: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets',
                title: 'Conjuntos de datos de ejemplo',
                description: 'Datasets oficiales para practicar con Power BI.',
                icon: 'fas fa-database'
            },
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-excel-stunning-report',
                title: 'Crear informes impactantes',
                description: 'Tutorial para crear informes atractivos.',
                icon: 'fas fa-file-alt'
            }
        ],
        blogs: [
            {
                url: 'https://powerbi.microsoft.com/es-es/blog/category/best-practices/',
                title: 'Blog de Power BI - Mejores prácticas',
                description: 'Artículos sobre mejores prácticas en Power BI.',
                icon: 'fas fa-check-circle'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre creación de informes.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Otros pasos del módulo de demostración...
    1: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-shape-and-combine-data',
                title: 'Dar forma y combinar datos',
                description: 'Cómo preparar datos para análisis en Power BI.',
                icon: 'fas fa-random'
            }
        ],
        blogs: [
            {
                url: 'https://www.kasperonbi.com/power-bi-best-practices-data-preparation/',
                title: 'Kasper On BI - Preparación de datos',
                description: 'Mejores prácticas para la preparación de datos.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre importación de datos.',
                icon: 'fas fa-comments'
            }
        ]
    },
    2: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a',
                title: 'Tipos de visualizaciones',
                description: 'Guía de los diferentes tipos de visualizaciones disponibles.',
                icon: 'fas fa-chart-bar'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/best-practices-for-data-visualization/',
                title: 'SQLBI - Visualización de datos',
                description: 'Mejores prácticas para visualizar datos efectivamente.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Power-BI-forums/ct-p/powerbi',
                title: 'Foro de Visualización de Datos',
                description: 'Discusiones sobre visualizaciones en Power BI.',
                icon: 'fas fa-comments'
            }
        ]
    },
    3: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboards',
                title: 'Dashboards en Power BI Service',
                description: 'Cómo crear y compartir dashboards en el servicio.',
                icon: 'fas fa-tachometer-alt'
            }
        ],
        blogs: [
            {
                url: 'https://www.blue-granite.com/blog/power-bi-best-practices-for-creating-reports-and-dashboards',
                title: 'Blue Granite - Mejores prácticas',
                description: 'Consejos para crear dashboards efectivos.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Service/bd-p/power-bi-service',
                title: 'Foro de Power BI Service',
                description: 'Discusiones sobre publicación y compartición.',
                icon: 'fas fa-comments'
            }
        ]
    }
};

/**
 * Enlaces específicos para el módulo de práctica
 */
const practiceModuleLinks = {
    // Paso 0: Introducción a la Práctica
    0: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/guided-learning/',
                title: 'Aprendizaje guiado de Power BI',
                description: 'Curso oficial de Microsoft para aprender Power BI.',
                icon: 'fas fa-graduation-cap'
            }
        ],
        blogs: [
            {
                url: 'https://www.dataprix.com/es/blog/ejercicios-power-bi-principiantes',
                title: 'Dataprix - Ejercicios para principiantes',
                description: 'Ejercicios prácticos para comenzar con Power BI.',
                icon: 'fas fa-tasks'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre ejercicios prácticos.',
                icon: 'fas fa-comments'
            }
        ]
    },
    // Otros pasos del módulo de práctica...
    1: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-tutorial-analyzing-sales-data-from-excel-and-an-odata-feed',
                title: 'Tutorial: Análisis de datos de ventas',
                description: 'Tutorial paso a paso para analizar datos de ventas.',
                icon: 'fas fa-book'
            }
        ],
        blogs: [
            {
                url: 'https://powerbi.pe/blog/',
                title: 'Power BI Training - Tutoriales',
                description: 'Tutoriales paso a paso para desarrollar en Power BI.',
                icon: 'fas fa-user-tie'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre desarrollo paso a paso.',
                icon: 'fas fa-comments'
            }
        ]
    },
    2: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-accessibility-creating-reports',
                title: 'Crear informes accesibles',
                description: 'Guía para crear informes accesibles para todos los usuarios.',
                icon: 'fas fa-universal-access'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/articles/common-mistakes-in-dax/',
                title: 'SQLBI - Errores comunes en DAX',
                description: 'Cómo evitar errores comunes al trabajar con DAX.',
                icon: 'fas fa-exclamation-triangle'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre solución de problemas.',
                icon: 'fas fa-comments'
            }
        ]
    },
    3: {
        official: [
            {
                url: 'https://learn.microsoft.com/es-es/power-bi/guidance/',
                title: 'Guía de Power BI',
                description: 'Guía completa con mejores prácticas y recomendaciones.',
                icon: 'fas fa-book'
            }
        ],
        blogs: [
            {
                url: 'https://www.sqlbi.com/',
                title: 'SQLBI - Guías avanzadas',
                description: 'Guías avanzadas para dominar Power BI.',
                icon: 'fas fa-user-graduate'
            }
        ],
        communities: [
            {
                url: 'https://community.fabric.microsoft.com/t5/Desktop/bd-p/power-bi-designer',
                title: 'Foro de Power BI Desktop',
                description: 'Discusiones sobre aprendizaje continuo.',
                icon: 'fas fa-comments'
            }
        ]
    }
};

/**
 * Inserta enlaces a sitios web en la página según el módulo y paso actual
 * @param {string} containerId - ID del contenedor donde se insertarán los enlaces
 * @param {string} [moduleId] - ID del módulo actual (intro, transform, demo, practice)
 * @param {number} [stepIndex] - Índice del paso actual (0, 1, 2, 3)
 */
function insertWebsiteLinks(containerId, moduleId, stepIndex) {
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

    // Determinar qué enlaces mostrar según el módulo y paso
    let officialLinks = officialDocumentation;
    let blogLinks = blogsAndExperts;
    let communityLinks = communitiesAndForums;

    // Si se especifica un módulo y paso, mostrar enlaces específicos
    if (moduleId && stepIndex !== undefined) {
        let moduleLinks;

        // Seleccionar el objeto de enlaces según el módulo
        switch (moduleId) {
            case 'intro':
                moduleLinks = introModuleLinks;
                break;
            case 'transform':
                moduleLinks = transformModuleLinks;
                break;
            case 'demo':
                moduleLinks = demoModuleLinks;
                break;
            case 'practice':
                moduleLinks = practiceModuleLinks;
                break;
            default:
                moduleLinks = null;
        }

        // Si hay enlaces específicos para este módulo y paso, usarlos
        if (moduleLinks && moduleLinks[stepIndex]) {
            const stepLinks = moduleLinks[stepIndex];

            if (stepLinks.official && stepLinks.official.length > 0) {
                officialLinks = stepLinks.official;
            }

            if (stepLinks.blogs && stepLinks.blogs.length > 0) {
                blogLinks = stepLinks.blogs;
            }

            if (stepLinks.communities && stepLinks.communities.length > 0) {
                communityLinks = stepLinks.communities;
            }
        }
    }

    // Crear contenedor para documentación oficial
    const officialTitle = document.createElement('h4');
    officialTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    officialTitle.textContent = 'Documentación Oficial';
    container.appendChild(officialTitle);

    const officialContainer = document.createElement('div');
    officialContainer.id = 'official-documentation';
    officialContainer.className = 'official-documentation mb-4';
    container.appendChild(officialContainer);

    // Insertar enlaces de documentación oficial
    officialLinks.forEach(site => {
        insertWebsiteLink('official-documentation', site.url, site.title, site.description, site.icon);
    });

    // Crear contenedor para blogs y expertos
    const blogsTitle = document.createElement('h4');
    blogsTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    blogsTitle.textContent = 'Blogs y Expertos';
    container.appendChild(blogsTitle);

    const blogsContainer = document.createElement('div');
    blogsContainer.id = 'blogs-experts';
    blogsContainer.className = 'blogs-experts mb-4';
    container.appendChild(blogsContainer);

    // Insertar enlaces de blogs y expertos
    blogLinks.forEach(site => {
        insertWebsiteLink('blogs-experts', site.url, site.title, site.description, site.icon);
    });

    // Crear contenedor para comunidades y foros
    const communitiesTitle = document.createElement('h4');
    communitiesTitle.className = 'text-lg font-semibold text-blue-800 mb-2 mt-4';
    communitiesTitle.textContent = 'Comunidades y Foros';
    container.appendChild(communitiesTitle);

    const communitiesContainer = document.createElement('div');
    communitiesContainer.id = 'communities-forums';
    communitiesContainer.className = 'communities-forums mb-4';
    container.appendChild(communitiesContainer);

    // Insertar enlaces de comunidades y foros
    communityLinks.forEach(site => {
        insertWebsiteLink('communities-forums', site.url, site.title, site.description, site.icon);
    });

    // Agregar enlace para ver todos los sitios de referencia
    const viewAllLink = document.createElement('div');
    viewAllLink.className = 'text-center mt-6';
    viewAllLink.innerHTML = `
        <a href="sitios_referencia.html" class="inline-flex items-center text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-1">
            <span>Ver todos los sitios de referencia</span>
            <i class="fas fa-globe ml-2"></i>
        </a>
    `;
    container.appendChild(viewAllLink);
}

// Exportar funciones
if (typeof module !== 'undefined') {
    module.exports = {
        insertWebsiteLink,
        insertWebsiteLinks,
        officialDocumentation,
        blogsAndExperts,
        communitiesAndForums,
        introModuleLinks,
        transformModuleLinks,
        demoModuleLinks,
        practiceModuleLinks
    };
}
