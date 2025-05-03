/**
 * Contenido predefinido para el módulo de demostración
 * Este archivo contiene el contenido del módulo de demostración de Power BI
 */

const demoModuleContent = {
    title: "Demostración de Power BI",
    description: "Aprende a través de ejemplos prácticos cómo crear visualizaciones efectivas",
    
    step1: {
        title: "Introducción a la Demostración",
        description: "Preparación para la demostración práctica de Power BI",
        content: `
            <div class="mb-6">
                <p class="mb-4">En esta sección, veremos una demostración práctica de cómo utilizar Power BI para crear visualizaciones efectivas a partir de datos reales. Seguiremos un enfoque paso a paso para que puedas replicar el proceso en tu propio entorno.</p>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Objetivos de la demostración</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Importar y transformar un conjunto de datos de ventas</li>
                        <li>Crear un modelo de datos con relaciones efectivas</li>
                        <li>Diseñar visualizaciones interactivas</li>
                        <li>Crear un dashboard completo y funcional</li>
                        <li>Compartir y publicar los resultados</li>
                    </ul>
                </div>
                
                <p class="mb-4">Antes de comenzar, asegúrate de tener instalado Power BI Desktop en tu computadora. Si aún no lo has hecho, puedes descargarlo gratuitamente desde el sitio oficial de Microsoft.</p>
                
                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-intro.jpg" alt="Power BI Dashboard" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
        `
    },
    
    step2: {
        title: "Importación de Datos",
        description: "Cómo importar datos desde diferentes fuentes",
        content: `
            <div class="mb-6">
                <p class="mb-4">El primer paso en cualquier proyecto de Power BI es importar los datos que queremos analizar. Power BI permite conectarse a una amplia variedad de fuentes de datos, desde archivos Excel y CSV hasta bases de datos SQL Server, servicios en la nube y más.</p>
                
                <h4 class="font-bold text-blue-800 mb-2">Pasos para importar datos:</h4>
                
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Abre Power BI Desktop</li>
                    <li>Haz clic en "Obtener datos" en la pestaña Inicio</li>
                    <li>Selecciona la fuente de datos apropiada (para esta demostración usaremos Excel)</li>
                    <li>Navega hasta el archivo "VentasEjemplo.xlsx" incluido en los recursos del taller</li>
                    <li>Selecciona las tablas que deseas importar</li>
                    <li>Haz clic en "Cargar" o "Transformar datos" si necesitas realizar ajustes</li>
                </ol>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                    <p>Si tus datos requieren limpieza o transformación, es mejor hacerlo en el Editor de Power Query antes de cargarlos al modelo. Esto mejorará el rendimiento y facilitará el análisis posterior.</p>
                </div>
                
                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-import.jpg" alt="Importación de datos en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
                
                <p class="mb-4">Una vez importados los datos, verás las tablas en el panel de "Campos" a la derecha de la pantalla. Ahora estamos listos para comenzar a crear visualizaciones.</p>
            </div>
        `
    },
    
    step3: {
        title: "Creación de Visualizaciones",
        description: "Cómo crear visualizaciones efectivas con los datos importados",
        content: `
            <div class="mb-6">
                <p class="mb-4">Las visualizaciones son el corazón de Power BI. Nos permiten transformar datos en información visual que facilita la comprensión y el análisis. Power BI ofrece una amplia variedad de visualizaciones, desde gráficos básicos hasta mapas y visualizaciones personalizadas.</p>
                
                <h4 class="font-bold text-blue-800 mb-2">Creando tu primera visualización:</h4>
                
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Selecciona el tipo de visualización que deseas crear desde el panel de Visualizaciones</li>
                    <li>Arrastra los campos relevantes desde el panel de Campos a las áreas correspondientes en el panel de Visualizaciones</li>
                    <li>Ajusta el formato y las propiedades según sea necesario</li>
                </ol>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-bold text-blue-800 mb-2">Visualizaciones recomendadas</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Gráficos de barras para comparaciones</li>
                            <li>Gráficos de líneas para tendencias temporales</li>
                            <li>Gráficos circulares para proporciones</li>
                            <li>Mapas para datos geográficos</li>
                            <li>Tablas y matrices para detalles precisos</li>
                        </ul>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-bold text-green-800 mb-2">Mejores prácticas</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Mantén las visualizaciones simples y claras</li>
                            <li>Usa colores con propósito, no solo por estética</li>
                            <li>Incluye títulos descriptivos</li>
                            <li>Agrega filtros para permitir exploración</li>
                            <li>Considera la accesibilidad en tu diseño</li>
                        </ul>
                    </div>
                </div>
                
                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-visualization.jpg" alt="Creación de visualizaciones en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
                
                <p class="mb-4">Experimenta con diferentes tipos de visualizaciones para encontrar la que mejor comunique tu mensaje. Recuerda que el objetivo es facilitar la comprensión de los datos, no solo crear gráficos bonitos.</p>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Ejemplo práctico: Análisis de ventas por región</h4>
                
                <p class="mb-4">Vamos a crear un gráfico de barras que muestre las ventas por región:</p>
                
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Selecciona el icono de gráfico de barras en el panel de Visualizaciones</li>
                    <li>Arrastra el campo "Región" al área "Eje"</li>
                    <li>Arrastra el campo "Ventas" al área "Valores"</li>
                    <li>Ordena el gráfico de mayor a menor para identificar rápidamente las regiones con mejor desempeño</li>
                    <li>Agrega un título descriptivo como "Ventas totales por región"</li>
                </ol>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <p class="italic text-blue-800">Con este simple gráfico, ya podemos identificar patrones importantes en nuestros datos de ventas y tomar decisiones basadas en evidencia.</p>
                </div>
            </div>
        `
    },
    
    step4: {
        title: "Creación de Dashboards",
        description: "Cómo combinar visualizaciones en un dashboard efectivo",
        content: `
            <div class="mb-6">
                <p class="mb-4">Un dashboard es una colección de visualizaciones organizadas en una sola página que proporciona una visión general de los datos más importantes. Un buen dashboard debe contar una historia coherente y permitir a los usuarios obtener insights rápidamente.</p>
                
                <h4 class="font-bold text-blue-800 mb-2">Pasos para crear un dashboard efectivo:</h4>
                
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li>Planifica tu dashboard antes de comenzar (¿qué historia quieres contar?)</li>
                    <li>Crea las visualizaciones individuales que necesitarás</li>
                    <li>Organiza las visualizaciones de manera lógica en la página</li>
                    <li>Asegúrate de que las visualizaciones interactúen entre sí (filtrado cruzado)</li>
                    <li>Agrega elementos de contexto como títulos, subtítulos y leyendas</li>
                    <li>Considera agregar segmentaciones de datos para filtrado interactivo</li>
                </ol>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Principios de diseño de dashboards</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Simplicidad:</strong> No sobrecargues el dashboard con demasiada información</li>
                        <li><strong>Jerarquía visual:</strong> Coloca la información más importante donde se verá primero</li>
                        <li><strong>Consistencia:</strong> Mantén un estilo coherente en todas las visualizaciones</li>
                        <li><strong>Interactividad:</strong> Permite a los usuarios explorar los datos por sí mismos</li>
                        <li><strong>Contexto:</strong> Proporciona suficiente información para entender los datos</li>
                    </ul>
                </div>
                
                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-dashboard.jpg" alt="Dashboard en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Ejemplo práctico: Dashboard de ventas</h4>
                
                <p class="mb-4">Vamos a crear un dashboard completo de ventas que incluya:</p>
                
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li>Un KPI con las ventas totales y la comparación con el período anterior</li>
                    <li>Un gráfico de líneas que muestre la tendencia de ventas a lo largo del tiempo</li>
                    <li>Un gráfico de barras con las ventas por región</li>
                    <li>Un gráfico circular con las ventas por categoría de producto</li>
                    <li>Una tabla con los detalles de los mejores clientes</li>
                    <li>Segmentaciones para filtrar por fecha, región y categoría</li>
                </ul>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consejo práctico</h4>
                    <p>Utiliza el "modo de enfoque" haciendo clic en los puntos suspensivos de una visualización para verla en pantalla completa. Esto es útil para analizar detalles específicos sin distracciones.</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Comprueba tu comprensión</h4>
                
                <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p class="font-bold mb-2">¿Cuál es el papel principal de los asistentes de IA en el flujo de trabajo de Power BI?</p>
                    
                    <div class="space-y-2 mt-4">
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <input type="radio" name="q1" class="mt-1 mr-2">
                            <span>Reemplazar completamente la necesidad de aprender Power BI</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="true">
                            <input type="radio" name="q1" class="mt-1 mr-2">
                            <span>Complementar el trabajo del analista, acelerando tareas y ayudando a superar obstáculos</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <input type="radio" name="q1" class="mt-1 mr-2">
                            <span>Generar automáticamente informes completos sin intervención humana</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q1" data-correct="false">
                            <input type="radio" name="q1" class="mt-1 mr-2">
                            <span>Sustituir a los profesionales de análisis de datos</span>
                        </label>
                    </div>
                    
                    <div class="mt-4">
                        <button class="check-answer-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-question="q1">
                            Verificar respuesta
                        </button>
                        <p class="feedback-message hidden mt-2 p-2 rounded"></p>
                    </div>
                </div>
            </div>
        `
    },
    
    step5: {
        title: "Publicación y Compartición",
        description: "Cómo publicar y compartir tus dashboards con otros",
        content: `
            <div class="mb-6">
                <p class="mb-4">Una vez que has creado tu dashboard, el siguiente paso es compartirlo con las personas que necesitan ver la información. Power BI ofrece varias opciones para publicar y compartir tus informes.</p>
                
                <h4 class="font-bold text-blue-800 mb-2">Opciones de publicación:</h4>
                
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                    <li><strong>Power BI Service:</strong> Publica tu informe en la nube para compartirlo con otros usuarios</li>
                    <li><strong>Exportar a PDF/PowerPoint:</strong> Crea una versión estática para compartir por correo o presentaciones</li>
                    <li><strong>Insertar en aplicaciones:</strong> Integra tus dashboards en aplicaciones o sitios web</li>
                    <li><strong>Power BI Mobile:</strong> Accede a tus dashboards desde dispositivos móviles</li>
                    <li><strong>Power BI Report Server:</strong> Para entornos que requieren una solución local</li>
                </ol>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-blue-800 mb-2">Pasos para publicar en Power BI Service</h4>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Haz clic en "Publicar" en la pestaña Inicio de Power BI Desktop</li>
                        <li>Inicia sesión con tu cuenta de Power BI (si aún no lo has hecho)</li>
                        <li>Selecciona el área de trabajo donde deseas publicar</li>
                        <li>Espera a que se complete el proceso de publicación</li>
                        <li>Haz clic en "Abrir informe" para ver tu informe en Power BI Service</li>
                    </ol>
                </div>
                
                <div class="flex items-center justify-center mb-4">
                    <img src="assets/img/demo-publish.jpg" alt="Publicación en Power BI" class="max-w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Compartir con otros usuarios</h4>
                
                <p class="mb-4">Una vez publicado tu informe, puedes compartirlo con otros usuarios de varias maneras:</p>
                
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Compartir directamente:</strong> Envía un enlace a usuarios específicos</li>
                    <li><strong>Permisos de área de trabajo:</strong> Da acceso a todo un equipo</li>
                    <li><strong>Crear una aplicación:</strong> Empaqueta varios informes y dashboards</li>
                    <li><strong>Generar un código QR:</strong> Para acceso rápido desde dispositivos móviles</li>
                    <li><strong>Programar actualizaciones:</strong> Envía informes por correo electrónico según un calendario</li>
                </ul>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-yellow-800 mb-2">Consideraciones de seguridad</h4>
                    <p>Asegúrate de entender las implicaciones de seguridad al compartir informes. Configura los permisos adecuadamente para proteger datos sensibles y cumplir con las políticas de tu organización.</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Resumen de la demostración</h4>
                
                <p class="mb-4">En esta demostración, hemos cubierto el proceso completo de creación de un dashboard en Power BI:</p>
                
                <ol class="list-decimal pl-5 space-y-1 mb-4">
                    <li>Importamos datos desde un archivo Excel</li>
                    <li>Creamos visualizaciones efectivas para representar los datos</li>
                    <li>Combinamos las visualizaciones en un dashboard coherente</li>
                    <li>Publicamos y compartimos el dashboard con otros usuarios</li>
                </ol>
                
                <p class="mb-4">Estos conocimientos te proporcionan una base sólida para comenzar a crear tus propios dashboards en Power BI. En el siguiente módulo, tendrás la oportunidad de aplicar lo aprendido en ejercicios prácticos.</p>
                
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-green-800 mb-2">Próximos pasos</h4>
                    <p>Continúa al módulo de práctica para aplicar estos conceptos en ejercicios guiados, o explora recursos adicionales para profundizar en temas específicos de Power BI.</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-bold text-blue-800 mb-2">Comprueba tu comprensión</h4>
                
                <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p class="font-bold mb-2">¿Cuál es la mejor práctica al diseñar dashboards en Power BI?</p>
                    
                    <div class="space-y-2 mt-4">
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <input type="radio" name="q2" class="mt-1 mr-2">
                            <span>Incluir la mayor cantidad posible de visualizaciones en una sola página</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <input type="radio" name="q2" class="mt-1 mr-2">
                            <span>Usar colores brillantes y llamativos para todas las visualizaciones</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="true">
                            <input type="radio" name="q2" class="mt-1 mr-2">
                            <span>Mantener la simplicidad y enfocarse en comunicar claramente los insights más importantes</span>
                        </label>
                        
                        <label class="quiz-option flex items-start p-3 rounded-lg hover:bg-blue-50 cursor-pointer" data-question="q2" data-correct="false">
                            <input type="radio" name="q2" class="mt-1 mr-2">
                            <span>Evitar la interactividad para que los usuarios no se distraigan</span>
                        </label>
                    </div>
                    
                    <div class="mt-4">
                        <button class="check-answer-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-question="q2">
                            Verificar respuesta
                        </button>
                        <p class="feedback-message hidden mt-2 p-2 rounded"></p>
                    </div>
                </div>
            </div>
        `
    },
    
    facilitatorNotes: {
        generalTips: [
            "Antes de la demostración, asegúrate de tener Power BI Desktop instalado y funcionando correctamente",
            "Prepara el archivo de datos de ejemplo con anticipación y verifica que funciona como se espera",
            "Considera tener una versión pre-construida del dashboard final para mostrar el resultado esperado",
            "Anima a los participantes a seguir los pasos en sus propias computadoras si es posible",
            "Destaca las mejores prácticas y errores comunes a evitar durante la demostración"
        ],
        stepSpecificNotes: {
            step1: "Enfatiza la importancia de planificar antes de comenzar a construir. Muchos usuarios saltan directamente a las visualizaciones sin pensar en el objetivo general.",
            step2: "Muestra cómo usar el Editor de Power Query para limpiar datos. Este es un paso que muchos principiantes omiten pero es crucial para un buen análisis.",
            step3: "Demuestra cómo elegir la visualización correcta para diferentes tipos de datos. Explica por qué ciertas visualizaciones funcionan mejor que otras en contextos específicos.",
            step4: "Explica los principios de diseño de dashboards y cómo aplicarlos. Muestra ejemplos de dashboards buenos y malos para ilustrar los conceptos.",
            step5: "Discute las diferentes opciones de licencia de Power BI y sus implicaciones para compartir contenido. Esto es importante para que los participantes entiendan las limitaciones que podrían enfrentar."
        },
        timeAllocation: {
            step1: "10 minutos",
            step2: "15 minutos",
            step3: "20 minutos",
            step4: "20 minutos",
            step5: "15 minutos"
        }
    }
};
