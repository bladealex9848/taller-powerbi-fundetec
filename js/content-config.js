/**
 * Configuración de contenido
 * Este archivo contiene la configuración de las rutas a los archivos de contenido
 */

/**
 * Rutas a los archivos de contenido Markdown para cada módulo
 */
const contentPaths = {
    intro: {
        main: 'docs/guias/guia-power-bi-para-principiantes.md',
        sections: [
            'docs/guias/guia-power-bi-para-principiantes.md#introduccion',
            'docs/guias/guia-power-bi-para-principiantes.md#componentes',
            'docs/guias/guia-power-bi-para-principiantes.md#interfaz',
            'docs/guias/guia-power-bi-para-principiantes.md#tipos-datos',
            'docs/guias/guia-power-bi-para-principiantes.md#asistentes-ia'
        ]
    },
    transform: {
        main: 'docs/guias/guia-power-bi-para-principiantes.md',
        sections: [
            'docs/guias/guia-power-bi-para-principiantes.md#conexion-datos',
            'docs/guias/guia-power-bi-para-principiantes.md#power-query',
            'docs/guias/guia-power-bi-para-principiantes.md#transformaciones',
            'docs/guias/guia-power-bi-para-principiantes.md#modelado'
        ]
    },
    demo: {
        main: 'docs/planificacion/desarrollo-de-taller-power-bi.md',
        sections: [
            'docs/planificacion/desarrollo-de-taller-power-bi.md#contexto',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#conexion-preparacion',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#dax',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#visualizaciones',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#interactividad'
        ]
    },
    practice: {
        main: 'docs/planificacion/desarrollo-de-taller-power-bi.md',
        sections: [
            'docs/planificacion/desarrollo-de-taller-power-bi.md#practica',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#desarrollo',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#resultado',
            'docs/planificacion/desarrollo-de-taller-power-bi.md#recursos'
        ]
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
