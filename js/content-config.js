/**
 * Configuración de contenido
 * Este archivo contiene la configuración de las rutas a los archivos de contenido
 */

/**
 * Rutas a los archivos de contenido Markdown para cada módulo
 */
const contentPaths = {
    intro: {
        main: 'docs/modulos/intro.md',
        sections: []
    },
    transform: {
        main: 'docs/modulos/transform.md',
        sections: []
    },
    demo: {
        main: 'docs/modulos/demo.md',
        sections: []
    },
    practice: {
        main: 'docs/modulos/practice.md',
        sections: []
    }
};

/**
 * Rutas a los recursos del taller
 */
const resourcePaths = {
    datasets: 'assets/datasets/',
    guides: 'assets/guides/',
    'ai-prompts': 'assets/guides/prompts/',
    templates: 'assets/templates/',
    certification: 'assets/guides/certification/'
};

// Exportar configuración
if (typeof module !== 'undefined') {
    module.exports = {
        contentPaths,
        resourcePaths
    };
}
