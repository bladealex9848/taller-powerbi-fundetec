# **Recursos Esenciales en Español para un Taller de Power BI**

## **1\. Introducción**

Este informe recopila y organiza una selección de recursos en español destinados a facilitar la preparación y ejecución de talleres sobre Microsoft Power BI. La disponibilidad de materiales en el idioma nativo de los participantes es crucial para maximizar la comprensión y la aplicabilidad de los conceptos enseñados. Power BI es una herramienta potente y versátil para el análisis y visualización de datos 1, y su dominio requiere acceso a materiales de aprendizaje claros y relevantes.

El objetivo de este documento es proporcionar una guía centralizada para instructores y organizadores de talleres, cubriendo una variedad de tipos de recursos esenciales: conjuntos de datos prácticos para ejercicios, plantillas de informes pre-diseñadas para acelerar el desarrollo, guías y manuales estructurados para consulta teórica, videos instructivos para demostraciones visuales y sitios web de referencia para el aprendizaje continuo y la resolución de dudas. Se ha puesto énfasis en identificar recursos gratuitos y de fácil acceso, especificando formatos disponibles y posibles requisitos de registro. La combinación estratégica de estos elementos permitirá diseñar experiencias de taller más efectivas, atractivas y adaptadas a las necesidades de audiencias hispanohablantes.

## **2\. Conjuntos de Datos (Datasets) en Formato .xlsx y .csv**

La base de cualquier taller práctico de Power BI reside en la disponibilidad de conjuntos de datos relevantes y bien estructurados. Trabajar con datos realistas y variados permite a los participantes aplicar los conceptos aprendidos en escenarios concretos, mejorando la retención y la comprensión práctica.

Importancia de la Diversidad y Relevancia:  
Es fundamental utilizar datasets que no solo demuestren las funcionalidades de Power BI, sino que también resuenen con posibles casos de uso empresariales. Incluir datos de diferentes dominios como ventas 3, marketing 3, recursos humanos 3, finanzas 3 o incluso datos sectoriales específicos (como datos inmobiliarios 6 o de servicios públicos 7\) enriquece la experiencia del taller. La variedad permite ilustrar cómo Power BI se adapta a distintas necesidades analíticas. Además, el uso de datos que reflejen contextos locales (como datos abiertos de gobiernos hispanohablantes) puede aumentar la relevancia para los participantes.  
**Fuentes de Datos Recomendadas:**

* **Portales de Datos Abiertos Gubernamentales:** Son una excelente fuente de datos reales, gratuitos y a menudo disponibles en formatos .xlsx y .csv.  
  * **España:** El portal datos.gob.es 8 y el catálogo del Ministerio de la Presidencia 9 ofrecen diversos conjuntos de datos, aunque la búsqueda específica de datos económicos o de ventas en formatos descargables sin registro puede requerir exploración adicional en fuentes como la OCDE.8 El portal de datos abiertos del Ayuntamiento de Buenos Aires también ofrece datos como precios inmobiliarios en .xlsx.6  
  * **Colombia:** El portal datos.gov.co es una iniciativa robusta que promueve la apertura de datos.10 Ofrece datasets en diversas categorías y fomenta su uso a través de programas como "Datos a la U" y "Máxima Velocidad".10 También permite federar portales de entidades locales como Bogotá.10  
  * **Perú:** La Plataforma Nacional de Datos Abiertos (datosabiertos.gob.pe) proporciona numerosos datasets en .xlsx y .csv sin coste ni registro aparente, cubriendo temas como medio ambiente, gobernabilidad y transporte.7 Se incluyen ejemplos como composición de residuos, registros de morbilidad o nacimientos.7  
  * **Internacionales (con datos de países hispanohablantes):** Repositorios como los del FMI, OCDE, Banco Mundial y Banco Central Europeo, mencionados en datos.gob.es 8, contienen datos económicos descargables en .xlsx o .csv que pueden incluir información de países de habla hispana.  
* **Repositorios de Datos de Ejemplo y Plataformas Educativas:** Sitios como Kaggle, Data.world, ExcelDemy, Maven Analytics y HackerNoon ofrecen datasets gratuitos para practicar análisis de datos, cubriendo áreas como ventas, marketing y recursos humanos.3 Muchos de estos no requieren registro para la descarga.3  
  * **Ejemplos Específicos de Ventas:** Se pueden encontrar datasets de ventas de supermercados, tiendas de bicicletas, minoristas de electrónica, o el ejemplo financiero de Microsoft.3 Estos suelen incluir campos como Fecha, ID Producto, Cantidad, Precio, Ingresos, Cliente, Región, Vendedor, etc..3 Existen plantillas Excel gratuitas con datos de ejemplo para informes de ventas.13  
  * **Ejemplos Específicos de Soporte (Tickets):** Plataformas como Help Desk Migration 14 y Zendesk 15 describen la estructura de datos de tickets de soporte y ofrecen ejemplos descargables en .csv.14 Estos datasets contienen campos como ID Ticket, Solicitante, Fecha Creación, Estado, Prioridad, etc..14  
* **Datos de Muestra de Microsoft:** Microsoft proporciona conjuntos de datos de ejemplo directamente utilizables con Power BI, como los ejemplos de Rentabilidad del Cliente, Recursos Humanos, Análisis de Adquisiciones, Ventas y Marketing, etc., disponibles como archivos .pbix o libros de Excel.16

Formatos y Accesibilidad:  
La mayoría de las fuentes mencionadas ofrecen datos en formatos .xlsx o .csv, ambos fácilmente importables en Power BI.17 Una ventaja significativa de los portales de datos abiertos y las plataformas educativas es que, en general, el acceso y la descarga son gratuitos y no requieren registro previo.3 Es importante verificar la codificación (preferiblemente UTF-8 para .csv 14\) y la estructura de los archivos antes de usarlos en el taller.  
Recomendaciones para la Selección:  
Seleccionar datasets limpios y bien documentados es preferible para evitar dedicar tiempo excesivo del taller a la limpieza de datos, a menos que ese sea un objetivo específico del módulo. Es recomendable incluir al menos un dataset complejo o "sucio" para demostrar las capacidades de transformación de Power Query. Preparar datasets de diferentes tamaños puede ayudar a ilustrar consideraciones de rendimiento.  
**Tabla Resumen: Fuentes de Datasets Sugeridas**

| Fuente Principal | Tipo de Datos | Formatos Comunes | Acceso Gratuito | Requiere Registro | URL/Notas Clave |
| :---- | :---- | :---- | :---- | :---- | :---- |
| datos.gob.es (España) | Datos abiertos gubernamentales (varios) | .csv, .pdf | Sí | Generalmente No | .8 Explorar OCDE para datos económicos específicos.8 |
| datos.gov.co (Colombia) | Datos abiertos gubernamentales (varios) | .xlsx, .csv? | Sí | Generalmente No | .10 Incluye programas de fomento y federación. |
| datosabiertos.gob.pe (Perú) | Datos abiertos gubernamentales (varios) | .xlsx, .csv | Sí | No | .7 Múltiples datasets disponibles directamente. |
| Portales Internacionales (OCDE, FMI, etc.) | Datos económicos, sociales | .xlsx, .csv | Sí | Variable | .8 Contienen datos de países hispanohablantes. |
| Plataformas Educativas (ExcelDemy, Maven Analytics, etc.) | Ejemplos (Ventas, Marketing, HR, etc.) | .xlsx, .csv | Sí | Generalmente No | .3 Descargas directas disponibles. |
| Help Desk Migration / Zendesk | Ejemplo Tickets Soporte | .csv | Sí (Ejemplos) | No (Ejemplos) | .14 Estructura y ejemplos descargables. |
| Microsoft Power BI Samples | Ejemplos Negocio (Ventas, HR, Finanzas, etc.) | .pbix, .xlsx | Sí | No | .16 Integrados en el servicio o descargables. |
| Fuentes Específicas (GitHub, RPubs) | Ejemplos Ventas | .xlsx, .csv | Sí | No | .11 Enlaces directos a archivos en repositorios. |
| Datos Abiertos Buenos Aires | Datos locales (ej. Inmobiliario) | .xlsx | Sí | No | .6 Ejemplo de portal local. |

## **3\. Plantillas de Power BI (.pbit)**

Las plantillas de Power BI (archivos .pbit) son un recurso valioso para los talleres, ya que permiten estandarizar la estructura de los informes y acelerar el proceso de creación de visualizaciones.

Rol y Ventajas de las Plantillas .pbit:  
A diferencia de un archivo de informe estándar de Power BI (.pbix), una plantilla .pbit contiene la definición completa del informe (páginas, objetos visuales, modelo de datos, relaciones, medidas, consultas de Power Query, parámetros) pero sin los datos.18 Al abrir un archivo .pbit en Power BI Desktop, se solicita al usuario que se conecte a sus propias fuentes de datos (o proporcione valores para los parámetros definidos), generando un nuevo archivo .pbix basado en la estructura de la plantilla.18 Esto tiene varias ventajas para un taller:

* **Consistencia:** Asegura que todos los participantes comiencen con la misma estructura base, facilitando el seguimiento de las instrucciones.  
* **Eficiencia:** Ahorra tiempo al no tener que construir el modelo de datos, las medidas básicas o el diseño visual desde cero en cada sesión.  
* **Enfoque:** Permite centrar el taller en aspectos específicos como la conexión de datos, la creación de visualizaciones avanzadas o el análisis, en lugar de en la configuración inicial.  
* **Reusabilidad:** Los instructores pueden crear plantillas específicas para diferentes módulos o niveles del taller.  
* **Tamaño:** Los archivos .pbit suelen ser mucho más pequeños que los .pbix al no contener datos.18

**Fuentes de Plantillas .pbit:**

* **Microsoft y Ejemplos Incorporados:** Microsoft Learn explica cómo crear y usar plantillas .pbit.18 Aunque los ejemplos descargables de Microsoft suelen ser .pbix o .xlsx 16, la creación de plantillas a partir de estos es sencilla (Archivo \> Exportar \> Plantilla de Power BI 18).  
* **Comunidades y Galerías:**  
  * La Galería de Temas de la Comunidad de Microsoft Fabric/Power BI 21 puede contener plantillas o temas que sirvan de base. PowerBI.Tips también tiene una galería de temas y plantillas 23, algunas descargables directamente.24  
* **Sitios de Terceros:**  
  * **Digital Factory Store:** Ofrece varias plantillas .pbit gratuitas descargables (previo "pedido" sin coste que requiere email) para gestión de proyectos (con Gantt, curva S), control de producción (con OEE/TRS), análisis FMEA y gestión de inventario.25 Estas plantillas incluyen archivos Excel de ejemplo.25 No mencionan explícitamente plantillas de ventas o RRHH.25  
  * **GitHub:** Es una fuente rica en plantillas .pbit gratuitas para diversos propósitos. Se pueden encontrar repositorios con plantillas para:  
    * Análisis de PlayFab (videojuegos).20  
    * Informes de Log Analytics de Power BI.26  
    * Informes de Azure DevOps OData.27  
    * Informes de Microsoft Project Online y Project for the Web.28  
    * Importación de datos de Microsoft Planner.31  
    * Herramientas para deserializar .pbit para control de versiones.32  
    * Plantillas con temas visuales específicos.33  
  * **Otros Proveedores:** Sitios como Windsor.ai 35, Zebra BI 36 y ZoomCharts 37 ofrecen plantillas (algunas gratuitas, otras pueden requerir sus conectores o visuales específicos) enfocadas en marketing, finanzas, CRM, etc. Windsor.ai requiere una cuenta activa y clave API para usar sus plantillas.35 Zebra BI ofrece plantillas gratuitas para análisis de costes, inventario, finanzas.36

**Consideraciones sobre Plantillas:**

* **Plantillas vs. Informes .pbix:** Es crucial entender la diferencia. Las plantillas .pbit son para iniciar nuevos informes con una estructura definida.18 Los archivos .pbix son informes completos con datos incrustados (o conexión en vivo).16 No se puede publicar directamente un .pbit en el servicio Power BI; debe abrirse, conectarse a datos y guardarse como .pbix primero.38  
* **Parámetros:** Las plantillas pueden incluir parámetros (por ejemplo, para la URL de la fuente de datos o fechas) que se solicitan al usuario al abrir el .pbit, haciendo la conexión de datos más flexible.19  
* **Compatibilidad:** Asegurarse de que las plantillas se crearon con una versión de Power BI Desktop compatible con la utilizada en el taller.

Recomendaciones para el Uso en Talleres:  
Crear plantillas .pbit personalizadas para los ejercicios del taller es altamente recomendable. Pueden incluir:

* Un modelo de datos básico pre-configurado con relaciones y medidas simples.  
* Una estructura de páginas definida (p.ej., Resumen, Ventas, Clientes).  
* Un tema visual corporativo o estandarizado.33  
* Parámetros para facilitar la conexión a los datasets de ejemplo proporcionados.

**Tabla Resumen: Fuentes de Plantillas .pbit Sugeridas**

| Fuente Principal | Tipo de Plantillas | Acceso Gratuito | Requiere Registro/API | URL/Notas Clave |
| :---- | :---- | :---- | :---- | :---- |
| Creación Propia (desde .pbix) | Personalizadas para el taller | Sí (Software) | No | .18 Método recomendado para control total. |
| Digital Factory Store | Gestión Proyectos, Producción, Inventario, FMEA | Sí | Sí (Email) | .25 Incluyen datos de ejemplo. |
| GitHub (Varios Repos) | PlayFab, Log Analytics, Azure DevOps, Project, Planner | Sí | No | .20 Buscar repositorios específicos. |
| PowerBI.Tips Theme Gallery | Enfocadas en diseño visual | Sí | No | .23 Plantillas con diferentes estilos visuales. |
| Windsor.ai | Marketing (Facebook Ads, Google Ads, etc.) | Sí | Sí (Cuenta \+ API) | .35 Requiere su plataforma para la conexión de datos. |
| Zebra BI | Finanzas, Costos, Inventario, Benchmarking | Sí | No | .36 Pueden requerir sus visuales personalizados. |
| Microsoft Community Galleries | Temas, posiblemente plantillas | Sí | No | .21 Explorar galerías de temas y Data Stories. |

## **4\. Guías y Manuales en Español (PDF y Online)**

Disponer de guías y manuales estructurados, tanto en formato PDF descargable como en recursos online, es fundamental para complementar la instrucción práctica del taller y proporcionar material de consulta posterior.

Necesidad de Documentación Estructurada:  
Mientras los ejercicios prácticos y las demostraciones en video son clave, una documentación escrita bien organizada permite a los participantes profundizar en los conceptos teóricos, revisar procedimientos paso a paso a su propio ritmo y tener una referencia fiable para consultas futuras. Cubrir desde los fundamentos de Power BI hasta temas más avanzados como Power Query y DAX es esencial.  
**Fuentes de Guías y Manuales:**

* **Documentación Oficial de Microsoft Learn (Español):** Es la fuente más completa, actualizada y fiable. Aunque es principalmente online, su estructura modular facilita la consulta de temas específicos.  
  * **Power BI:** Cubre la descripción general 1, conexión y modelado de datos 1, DAX 1, creación de informes y paneles 1, administración 1, desarrollo 1, Copilot 2, y guías de procedimientos recomendados y optimización.2  
  * **Power Query:** Documentación específica sobre cómo usar Power Query, obtener y transformar datos, conectores (incluyendo PDF 40), lenguaje M, plegado de consultas, manejo de errores, etc..41  
  * **Guías Específicas:** Microsoft Learn también ofrece guías detalladas sobre temas como modelado de datos (esquema estrella, relaciones, DirectQuery) 39, informes paginados 39, rendimiento 39 y adopción.39  
* **Guías y Manuales de Terceros (PDF/Online):** Existen diversas guías creadas por consultoras, expertos y comunidades, a menudo disponibles para descarga (a veces previo registro).  
  * **Bismart:** Ofrece una "Guía Completa de Power BI" en PDF gratuita 42 tras completar un formulario. Cubre desde conceptos básicos hasta avanzados, Power Query, Power BI Service, ejemplos prácticos y comparativas.42 También disponen de otros Ebooks sobre mejores prácticas de reporting, visualización, temas, Charticulator, etc..43  
  * **Pontia Tech:** Proporciona una guía online (anteriormente quizás PDF) que cubre introducción, instalación, interfaz, importación y transformación (Power Query), modelado (DAX básico y avanzado), visualización, Power BI Service y administración.17  
  * **TodoBI / Stratebi:** Ofrecen un documento "Power BI TIPS Vol. III" (posiblemente PDF 44) con consejos prácticos sobre rendimiento de gateways, refresco desde OneDrive, modelado con múltiples tablas de hechos, optimización del tamaño del modelo (eliminar jerarquías de fecha/hora, columnas innecesarias, agregaciones) 44, y visualización (etiquetas de datos).44  
  * **Scribd y Plataformas Similares:** Albergan numerosos manuales y guías sobre Power BI y Power Query en español, de calidad variable.45 Se pueden encontrar guías básicas 45, tutoriales de Power Query con ejercicios paso a paso 45, guías de DAX 45, y manuales más extensos.45 Sin embargo, el acceso completo a Scribd requiere suscripción.  
  * **Imagina Formación:** Ofrece una guía online completa sobre Power Query en Excel, aplicable a Power BI, cubriendo interfaz, importación, transformaciones básicas y avanzadas (columnas personalizadas, lenguaje M), combinación de consultas y funciones.47  
  * **Universidades:** Algunas universidades pueden ofrecer guías introductorias, como el ejemplo de la UPR 48 (PDF corto) o recursos de DataCamp 49 (guía online para principiantes).  
  * **Libros:** Existen libros completos en español sobre Power Query 50 o Power BI 51 que pueden servir como referencia profunda, aunque no sean guías rápidas para un taller.

Temas Cubiertos y Accesibilidad:  
Las guías disponibles cubren un amplio espectro:

* **Introducción y Conceptos Básicos:** Qué es Power BI, versiones, instalación, interfaz.17  
* **Power Query (Obtención y Transformación):** Conexión a fuentes (archivos, BBDD, web, servicios online, PDF) 17, limpieza, transformaciones (filtrar, eliminar/dividir columnas, tipos de datos, usar primera fila como encabezado), combinación de consultas, columnas personalizadas, lenguaje M.17  
* **Modelado de Datos y DAX:** Relaciones, introducción a DAX, funciones básicas y avanzadas, medidas calculadas.1  
* **Visualización y Reporting:** Creación de gráficos y tablas, personalización, diseño, interactividad, dashboards, publicación y compartición.1  
* **Power BI Service:** Colaboración, alertas, suscripciones.17  
* **Administración y Mejores Prácticas:** Permisos, gateways, seguridad, rendimiento, optimización.1

La accesibilidad varía: Microsoft Learn es gratuito y online. Muchas guías de terceros requieren registro (email) para descargar el PDF.42 Recursos en plataformas como Scribd requieren suscripción.45 Es crucial verificar la disponibilidad y formato (PDF vs. online) de cada recurso.

**Recomendaciones:**

* Utilizar **Microsoft Learn** como la referencia principal y oficial.  
* Complementar con **guías PDF descargables** 42 que los participantes puedan conservar. Seleccionar aquellas que ofrezcan ejercicios prácticos 45 o resúmenes de mejores prácticas.43  
* Evaluar la calidad y actualidad de guías encontradas en repositorios generales 45 antes de recomendarlas.  
* Proporcionar enlaces directos a secciones relevantes de la documentación online para consulta durante el taller.

**Tabla Resumen: Guías y Manuales Sugeridos**

| Fuente/Título | Tipo | Temas Clave Cubiertos | Formato | Acceso Gratuito | Requiere Registro | URL/Notas Clave |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Microsoft Learn (Power BI) | Doc. Oficial | Todo (Intro, Datos, Modelo, DAX, Visual, Servicio, Admin) | Online | Sí | No | .1 Fuente principal y más actualizada. |
| Microsoft Learn (Power Query) | Doc. Oficial | Todo (Conexión, Transformación, M, Conectores, Errores) | Online | Sí | No | .40 Documentación detallada de Power Query. |
| Guía Completa Power BI (Bismart) | Guía 3ro | Básico a Avanzado, PQ, Service, Ejemplos | PDF | Sí | Sí (Formulario) | .42 Guía descargable completa. |
| Ebooks Bismart | Guías 3ro | Mejores Prácticas (Reporting, Visualización), Temas, etc. | PDF | Sí | Sí (Formulario) | .43 Recursos específicos adicionales. |
| Guía Power BI (Pontia Tech) | Guía 3ro | Intro, Instalación, PQ, DAX, Visualización, Service, Admin | Online | Sí | No | .17 Guía estructurada online. |
| Power BI TIPS Vol. III (TodoBI) | Guía 3ro (Tips) | Rendimiento, Modelado, Optimización, Visualización | PDF? | ? | ? | .44 Consejos prácticos avanzados. |
| GUIA POWER QUERY (Scribd) | Guía 3ro (Basic) | Conexión Web, Transformaciones básicas, Combinar (Excel) | Online (PDF?) | Parcial | Sí (Suscripción) | .45 Ejemplo de guía básica con ejercicios (requiere Scribd). |
| Guía Power Query (Imagina) | Guía 3ro | Interfaz PQ, Importación, Transformaciones, Combinar, M | Online | Sí | No | .47 Tutorial online detallado de Power Query. |
| Introducción Power BI (UPR) | Guía Univ. | Básico, Instalación, Interfaz, Flujo de trabajo | PDF | Sí | No | .48 Ejemplo de guía introductoria corta. |

## **5\. Videos Instructivos en Español (Enlaces para Embeber)**

Los videos instructivos son un componente dinámico y visualmente atractivo para cualquier taller de Power BI, permitiendo demostrar procesos complejos de manera clara y concisa.

Valor de las Demostraciones en Video:  
Ver a un experto realizar tareas en Power BI, como conectarse a datos, aplicar transformaciones en Power Query o construir visualizaciones interactivas, puede ser mucho más efectivo para algunos aprendices que leer descripciones textuales. Los videos permiten pausar, retroceder y seguir el proceso paso a paso. Integrar videos cortos y específicos en módulos relevantes del taller puede romper la monotonía y reforzar el aprendizaje práctico.  
**Canales de YouTube Relevantes en Español:**

Existe una cantidad significativa de contenido de video sobre Power BI en español en YouTube, creado tanto por canales especializados con grandes audiencias como por expertos individuales. Esta riqueza ofrece una amplia selección, pero también requiere una curación cuidadosa.

* **datdata:** 54 Canal muy activo (+200K suscriptores) dedicado a la visualización de datos, con mucho contenido de Power BI. Ofrece cursos completos (desde cero 55), talleres prácticos (\#dashboardeando 55), podcasts (\#podcastpowerbi 55) y tips cortos (\#datEn5 55). Cubre temas desde básicos hasta avanzados, incluyendo Python en Power BI 54 y finanzas.5456 lo identifica como un canal español relevante. 57 muestra un ejemplo de contenido práctico.  
* **Sergio Alejandro Campos (EXCELeINFO):** 58 Canal con más de 300K suscriptores, MVP de Microsoft. Aunque su enfoque principal es Excel, tiene una cantidad considerable de contenido sobre Power BI, Power Query y macros aplicables.56 Ofrece tutoriales, tips 61, y ejemplos prácticos como la generación de datos de prueba 62 o la consolidación de datos con Power Query.63  
* **Sandielly Ortega Polanco:** 64 Identificado como creador de contenido en YouTube con más de 35K suscriptores, compartiendo experiencia en Power BI, Fabric, IA, SQL y automatización.64 Es coautor de "The Complete Power BI Interview Guide".6656 y 56 lo destacan como un canal relevante en español. (Nota: La mayoría de los documentos encontrados se centran en su perfil como autor, mencionando su canal, pero no muestran directamente el contenido del mismo).  
* **PowerBIEspañol en telegram (Canal de YouTube Asociado):** 71 Este canal sirve como repositorio de las conferencias virtuales organizadas por la comunidad de Telegram. Contiene numerosas charlas prácticas (+15 por evento) impartidas por MVPs y expertos sobre todo el ecosistema Power BI, así como paneles de preguntas y respuestas.71 Es una excelente fuente de contenido específico y avanzado.  
* **Otros Canales:** Existen muchos otros canales que publican tutoriales sobre Power BI en español, cubriendo temas específicos como introducción 72, conexión de datos 74, transformación con Power Query 63, creación de visualizaciones 77, construcción de dashboards 79, o interacciones entre gráficos.81

**Selección de Videos por Tema (Ejemplos):**

* **Introducción a Power BI Desktop:**  
  * Video explicando versiones, descarga e instalación.72  
  * Demostración rápida de interfaz y creación de un dashboard básico.80  
* **Conexión y Obtención de Datos:**  
  * Video titulado "Conecta, Transforma y Automatiza tus Datos con Power BI".74  
  * Ejemplo de conexión a un conjunto de datos en la nube en tiempo real.75  
* **Transformación de Datos (Power Query):**  
  * Tutorial sobre consolidación de datos de múltiples hojas Excel.63  
  * Demostración de transformaciones básicas (dividir columnas, formato, etc.).76  
  * Videos mostrando transformaciones en la interfaz de Power Query.83  
* **Creación de Visualizaciones:**  
  * Cómo crear gráficos básicos (barras, tabla, circular, tarjetas) y personalizarlos.78  
  * Uso de tooltips personalizados y configuración de interacciones.77  
* **Creación de Dashboards/Informes:**  
  * Tutorial paso a paso para crear un dashboard, incluyendo formato y títulos.79  
  * Demostración de creación rápida de dashboard funcional y opción "Mostrar como tabla".80  
* **Conceptos Específicos:**  
  * Explicación de interacciones entre visualizaciones (resaltar vs. filtrar).81  
  * Demostración de interactividad básica y publicación web.73

Consideraciones para la Incorporación (Embedding):  
La mayoría de las plataformas de aprendizaje (LMS) o sitios web permiten embeber videos de YouTube fácilmente utilizando el enlace estándar o el código \<iframe\> proporcionado por YouTube. Es importante considerar la duración: videos cortos (5-15 min) son ideales para inserciones puntuales durante una sesión síncrona, mientras que videos más largos o listas de reproducción pueden asignarse como material de pre-estudio o repaso asíncrono. Siempre se debe verificar que el contenido del video sea actual, ya que la interfaz y funcionalidades de Power BI evolucionan.85  
Recomendaciones para la Selección y Uso:  
Dada la vasta cantidad de contenido disponible, la curación activa es esencial. El instructor debe previsualizar los videos para asegurar su calidad técnica (audio/video claro), precisión conceptual, actualidad y adecuación pedagógica al nivel y objetivos del taller. Priorizar videos de canales reconocidos 54 puede ser un buen punto de partida. Utilizar videos para demostrar tareas específicas que son más fáciles de entender visualmente que explicadas textualmente.  
**Tabla Resumen: Recursos de Video Sugeridos**

| Tema Específico | Título/Descripción Sugerida | Canal/Fuente Principal | Nivel Estimado | Enlace Ejemplo/Canal | Notas |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Introducción / Instalación | Versiones, Descarga, Instalación, Configuración Inicial | EXCELeINFO / Otros | Básico | 72 | Ideal para inicio o pre-requisito. |
| Conexión de Datos | Conectar a diversas fuentes (Excel, Web, BBDD) | datdata / EXCELeINFO / Otros | Básico | 74 | Demostraciones prácticas. |
| Transformación (Power Query) | Consolidar Hojas, Limpieza Básica, Transformaciones Comunes | EXCELeINFO / datdata / Otros | Básico/Medio | 63 | Fundamental para la preparación de datos. |
| Creación de Visualizaciones | Gráficos Comunes (Barras, Líneas, Tarta), Tarjetas, Tablas | datdata / Otros | Básico | 78 | Mostrar creación y personalización simple. |
| Creación de Dashboards/Informes | Construcción paso a paso, Formato, Títulos, Interacciones | datdata / Otros | Básico/Medio | 79 | Integración de visualizaciones y diseño. |
| Contenido Avanzado / Específico | Funciones DAX, Modelado, Temas Específicos (Finanzas, etc.) | datdata / PowerBIEspañol / Otros | Medio/Avanzado | Canal datdata 55, Canal PowerBIEspañol 71 | Para módulos avanzados o como recurso adicional. |
| Conferencias / Charlas Expertas | Temas variados por MVPs y expertos | PowerBIEspañol | Variable | Canal PowerBIEspañol 71 | Útil para explorar casos de uso y técnicas avanzadas post-taller. |

## **6\. Sitios Web de Referencia, Blogs y Comunidades en Español**

El aprendizaje de Power BI es un proceso continuo. Más allá del taller, es crucial que los participantes conozcan recursos fiables donde puedan consultar documentación, aprender nuevas técnicas, resolver dudas y conectar con otros usuarios.

Importancia de la Referencia Continua:  
Power BI es una plataforma dinámica con actualizaciones frecuentes y nuevas funcionalidades.85 Los sitios de referencia, blogs de expertos y comunidades activas son indispensables para mantenerse al día, encontrar soluciones a problemas específicos que surgen en el uso diario y profundizar en áreas de interés.  
**Recursos Oficiales de Microsoft:**

* **Microsoft Learn (Español):** Es la piedra angular. Proporciona la documentación más completa, precisa y actualizada sobre todos los aspectos de Power BI 1, Power Query 41 y DAX.1 Incluye tutoriales, guías conceptuales 39 y referencias técnicas. Su acceso es gratuito y no requiere registro.  
* **Blog Oficial de Power BI:** Aunque mayoritariamente en inglés 19, es el canal principal para anuncios de nuevas características y actualizaciones. Se recomienda seguirlo (posiblemente con herramientas de traducción).  
* **Comunidad Microsoft Fabric/Power BI (Español):** 22 Foros oficiales donde los usuarios pueden plantear preguntas, compartir soluciones y participar en discusiones. Es un recurso valioso para resolver problemas específicos con la ayuda de la comunidad y expertos de Microsoft.21

**Blogs Relevantes de Expertos Hispanohablantes:**

Estos blogs ofrecen perspectivas prácticas, tutoriales detallados, casos de uso y opiniones basadas en la experiencia de profesionales reconocidos en la comunidad Power BI de habla hispana.

* **PowerBI SP (Francisco Mullor Cabrera):** 87 Blog de un MVP de Microsoft centrado en Power BI, con publicaciones frecuentes sobre novedades (cálculos visuales, funciones WINDOW, Dataflow Gen2), DAX, Power Query, Power Automate y visualizaciones.87 Es autor de un libro sobre Dataflows 89 y su blog es referenciado por otros expertos.90 Su perfil destaca su especialización y actividad.91  
* **Biti (Santiago Tomás Selma):** 92 Blog enfocado en Business Intelligence con Power BI, DAX, Power Query y tecnologías relacionadas. Publica artículos de actualidad (costos de Fabric, integración con Dynamics 365), casos prácticos (KPI Cards, Field Parameters, mapas personalizados, transformar datos desde-hasta), modelado y opinión.92  
* **El Futuro de los Datos (Salvador Ramos):** 51 Sitio web y blog de un veterano MVP de Microsoft.94 Ofrece mentoría, formación, consultoría y recursos descargables sobre Power BI.51 Comparte conocimientos basados en más de 20 años de experiencia y cientos de proyectos BI.51 Su enfoque combina la técnica con la aplicación al negocio.94

**Comunidades Activas de Usuarios en Español:**

Las comunidades proporcionan un espacio para la interacción, el apoyo mutuo y el networking entre usuarios de Power BI.

* **Comunidad Microsoft Fabric/Power BI (Español):** 22 El foro oficial ya mencionado.  
* **Power Platform España:** 97 Una comunidad amplia que abarca toda la Power Platform (incluyendo Power BI) para España y Latinoamérica. Organizan webinars gratuitos (disponibles en YouTube), difunden eventos y noticias, y fomentan la colaboración. Cuentan con cientos de miembros y alcance internacional.97  
* **PowerBIEspañol (Telegram \+ YouTube):** 71 Una comunidad muy activa centrada específicamente en Power BI, con un grupo de Telegram para discusiones diarias y un canal de YouTube con contenido de alta calidad, incluyendo conferencias virtuales completas con expertos y MVPs.71  
* **Otros Grupos:** Existen grupos informales en plataformas como LinkedIn o Meetup donde los usuarios también comparten conocimientos y experiencias (aunque no detallados en la investigación).

Valor de Combinar Recursos Oficiales y Comunitarios:  
Mientras que Microsoft Learn 1 proporciona la base técnica sólida y oficial, los blogs de expertos 51 y las comunidades 22 añaden un valor incalculable al ofrecer:

* **Contexto Práctico:** Casos de uso reales y soluciones a problemas comunes que no siempre se detallan en la documentación.  
* **Perspectivas Diversas:** Diferentes enfoques y trucos compartidos por profesionales con experiencia variada.  
* **Apoyo Interactivo:** La posibilidad de hacer preguntas y recibir respuestas de otros usuarios y expertos en foros y grupos.22  
* **Actualización Rápida:** Las comunidades y blogs a menudo discuten las últimas novedades y sus implicaciones prácticas casi en tiempo real.

Recomendaciones para los Participantes del Taller:  
Es fundamental animar a los participantes a explorar activamente estos recursos después del taller. Se les debe enseñar cómo navegar la documentación de Microsoft Learn, cómo buscar soluciones en los foros de la comunidad y cómo seguir los blogs clave para continuar su desarrollo profesional en Power BI. La participación en comunidades como Power Platform España 97 o PowerBIEspañol 71 puede ser especialmente beneficiosa.  
**Tabla Resumen: Sitios de Referencia, Blogs y Comunidades Sugeridas**

| Nombre del Sitio/Blog/Comunidad | Tipo | Enfoque Principal | Autor/Organización Principal | Idioma | URL Clave | Notas |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Microsoft Learn (Power BI) | Documentación Oficial | Todo sobre Power BI (Técnico, Conceptual, Guías) | Microsoft | Español | 1 | Fuente fundamental, gratuita y actualizada. |
| Microsoft Learn (Power Query) | Documentación Oficial | Todo sobre Power Query (Técnico, M, Conectores) | Microsoft | Español | 41 | Documentación esencial para la preparación de datos. |
| Comunidad Microsoft Fabric/PBI | Foro Oficial | Preguntas y Respuestas, Discusiones Técnicas | Microsoft / Comunidad | Español | 22 | Lugar para buscar soluciones y pedir ayuda. |
| PowerBI SP | Blog Experto (MVP) | Novedades, DAX, Power Query, Dataflows, Visualización | Francisco Mullor Cabrera | Español | 87 | Blog activo con contenido técnico y práctico. |
| Biti | Blog Experto | BI con Power BI, DAX, PQ, Fabric, Dynamics 365 | Santiago Tomás Selma | Español | 92 | Casos prácticos, actualidad y opinión. |
| El Futuro de los Datos | Blog/Sitio Experto (MVP) | Power BI aplicado al negocio, Mentoría, Formación | Salvador Ramos | Español | 51 | Enfoque en valor de negocio y fundamentos BI. |
| Power Platform España | Comunidad (Meetup/Online) | Power Platform (incl. Power BI), Eventos, Networking | Varios Organizadores | Español | 97 | Comunidad amplia con webinars y difusión de eventos. |
| PowerBIEspañol | Comunidad (Telegram/YT) | Ecosistema Power BI, Conferencias Virtuales, Recursos | Varios Expertos/MVPs | Español | 71 | Comunidad muy activa con contenido de alta calidad (videos de charlas). |
| datdata | Canal YouTube / Blog? | Visualización de Datos, Power BI (Cursos, Talleres) | datdata | Español | Canal:.54 Sitio: datdata.com 54 | Contenido visual y práctico muy popular. |
| EXCELeINFO | Canal YouTube / Blog? | Excel, Power BI, Power Query, Macros | Sergio Alejandro Campos (MVP) | Español | Canal:.58 Sitio: deztaca.com 58 | Fuerte en Excel con mucho contenido aplicable/directo de Power BI. |
| Sandielly Ortega Polanco | Canal YouTube / Autor | Power BI, Fabric, IA, SQL, Automatización | Sandielly Ortega Polanco | Español | Menciones:.64 Buscar canal directamente. | Creador de contenido reconocido y coautor de libro. |

## **7\. Conclusión: Potenciando sus Talleres de Power BI en Español**

La investigación realizada confirma la existencia de un ecosistema rico y diverso de recursos en español para apoyar la creación y ejecución de talleres de Power BI efectivos. Desde conjuntos de datos adaptados a contextos locales y empresariales 3, pasando por plantillas .pbit que agilizan la práctica 20, guías estructuradas en PDF y online para la consulta teórica 17, hasta una vasta colección de videos instructivos 55 y una red activa de sitios de referencia, blogs de expertos 51 y comunidades de usuarios.22

El valor reside no solo en la cantidad, sino en la calidad y accesibilidad de muchos de estos recursos. La disponibilidad de datos abiertos gubernamentales 7, datasets de ejemplo gratuitos 3 y plantillas descargables 25 permite diseñar ejercicios prácticos relevantes sin incurrir en costos adicionales. La documentación oficial de Microsoft Learn en español 1 proporciona una base sólida y fiable, mientras que las guías, blogs y videos de la comunidad hispanohablante 42 ofrecen perspectivas prácticas, soluciones a problemas comunes y un enfoque adaptado culturalmente.

Para los instructores, la clave del éxito radicará en la **curación y combinación estratégica** de estos materiales. Se recomienda:

1. **Seleccionar y Preparar Datasets:** Elegir conjuntos de datos (.xlsx, .csv) que sean relevantes para la audiencia y los objetivos del taller, incluyendo ejemplos limpios para empezar y quizás algunos más complejos para demostrar Power Query.3 Utilizar datos locales o sectoriales cuando sea posible.6  
2. **Aprovechar o Crear Plantillas .pbit:** Utilizar plantillas existentes 25 o crear plantillas personalizadas 18 que incluyan un modelo básico, medidas iniciales y un diseño coherente para enfocar a los participantes en los aspectos clave de cada módulo.  
3. **Combinar Guías y Documentación:** Usar Microsoft Learn 1 como referencia principal y complementarla con guías PDF descargables 42 o resúmenes de mejores prácticas 43 que los participantes puedan consultar offline.  
4. **Integrar Videos Estratégicamente:** Embeber videos cortos y claros 72 de canales fiables 55 para demostrar visualmente procesos específicos, asegurándose de su actualidad y calidad pedagógica.  
5. **Fomentar la Exploración Continua:** Dirigir a los participantes hacia los blogs de expertos 51 y las comunidades activas 22 como recursos indispensables para resolver dudas, mantenerse actualizados y seguir aprendiendo después del taller.

Al invertir tiempo en seleccionar y adaptar estos recursos en español, los instructores pueden diseñar talleres de Power BI que no solo sean informativos, sino también altamente prácticos, relevantes y motivadores para los participantes, capacitándolos eficazmente en el uso de esta poderosa herramienta de inteligencia de negocios.

#### **Obras citadas**

1. ¿Qué es Power BI? \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-bi/fundamentals/power-bi-overview](https://learn.microsoft.com/es-es/power-bi/fundamentals/power-bi-overview)  
2. Documentación de Power BI \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-bi/](https://learn.microsoft.com/es-es/power-bi/)  
3. Bases de datos para descargar en Excel y practicar análisis de datos, fecha de acceso: mayo 3, 2025, [https://jhonmosquera.com/bases-de-datos-para-descargar/](https://jhonmosquera.com/bases-de-datos-para-descargar/)  
4. Bases de Datos de Ventas en Formato XLS: Guía Completa, fecha de acceso: mayo 3, 2025, [https://jhonmosquera.com/base-de-datos-xls-ventas/](https://jhonmosquera.com/base-de-datos-xls-ventas/)  
5. Human Resources sample for Power BI: Take a tour \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/en-us/power-bi/create-reports/sample-human-resources](https://learn.microsoft.com/en-us/power-bi/create-reports/sample-human-resources)  
6. Precio de venta de departamentos (XLSX) \- Buenos Aires Data, fecha de acceso: mayo 3, 2025, [https://data.buenosaires.gob.ar/dataset/mercado-inmobiliario/resource/1848cc2d-a99d-481f-aacf-b15e31986575](https://data.buenosaires.gob.ar/dataset/mercado-inmobiliario/resource/1848cc2d-a99d-481f-aacf-b15e31986575)  
7. Plataforma Nacional de Datos Abiertos, fecha de acceso: mayo 3, 2025, [https://datosabiertos.gob.pe/SEARCH/field\_resources%253Afield\_format/xlsx-39](https://datosabiertos.gob.pe/SEARCH/field_resources%253Afield_format/xlsx-39)  
8. 10 repositorios de datos públicos relacionados con el sector de la ..., fecha de acceso: mayo 3, 2025, [https://datos.gob.es/es/noticia/10-repositorios-de-datos-publicos-relacionados-con-el-sector-de-la-economia](https://datos.gob.es/es/noticia/10-repositorios-de-datos-publicos-relacionados-con-el-sector-de-la-economia)  
9. Catálogo de datos abiertos \- Ministerio de la Presidencia \- Sede Electrónica, fecha de acceso: mayo 3, 2025, [https://mpr.sede.gob.es/pagina/index/directorio/catalogo\_datos\_abiertos](https://mpr.sede.gob.es/pagina/index/directorio/catalogo_datos_abiertos)  
10. Guía para el uso y aprovechamiento de Datos Abiertos en Colombia \- Gobierno digital, fecha de acceso: mayo 3, 2025, [https://gobiernodigital.mintic.gov.co/692/articles-272749\_recurso\_1.pdf](https://gobiernodigital.mintic.gov.co/692/articles-272749_recurso_1.pdf)  
11. Proyección de Ventas \- RPubs, fecha de acceso: mayo 3, 2025, [https://rpubs.com/JamilethC/1188200](https://rpubs.com/JamilethC/1188200)  
12. TRABAJO AUTÓNOMO: Estadística para ciencia de datos \- RPubs, fecha de acceso: mayo 3, 2025, [https://rpubs.com/nahomiMC/1187551](https://rpubs.com/nahomiMC/1187551)  
13. Las mejores plantillas gratuitas de informes de ventas en Excel para mejorar la gestión de ventas \- ClickUp, fecha de acceso: mayo 3, 2025, [https://clickup.com/es-ES/blog/232982/plantillas-excel-para-informes-de-ventas](https://clickup.com/es-ES/blog/232982/plantillas-excel-para-informes-de-ventas)  
14. Guías de Migración CSV: Consejos y Trucos \- Help Desk Migration, fecha de acceso: mayo 3, 2025, [https://help-desk-migration.com/es/help/csv-migration-guides/](https://help-desk-migration.com/es/help/csv-migration-guides/)  
15. Exportación de datos de ticket, usuario u organización de la cuenta \- Zendesk help, fecha de acceso: mayo 3, 2025, [https://support.zendesk.com/hc/es/articles/4408886165402-Exportaci%C3%B3n-de-datos-de-ticket-usuario-u-organizaci%C3%B3n-de-la-cuenta](https://support.zendesk.com/hc/es/articles/4408886165402-Exportaci%C3%B3n-de-datos-de-ticket-usuario-u-organizaci%C3%B3n-de-la-cuenta)  
16. Obtención de ejemplos para Power BI \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets](https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets)  
17. www.pontia.tech, fecha de acceso: mayo 3, 2025, [https://www.pontia.tech/wp-content/uploads/2025/04/guia-power-bi.pdf](https://www.pontia.tech/wp-content/uploads/2025/04/guia-power-bi.pdf)  
18. Creación y uso de plantillas de informe en Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-templates](https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-templates)  
19. Deep Dive into Query Parameters and Power BI Templates, fecha de acceso: mayo 3, 2025, [https://powerbi.microsoft.com/en-us/blog/deep-dive-into-query-parameters-and-power-bi-templates/](https://powerbi.microsoft.com/en-us/blog/deep-dive-into-query-parameters-and-power-bi-templates/)  
20. PlayFab/PlayFabPowerBITemplates: This repository contains Power BI templates to quickly access key game KPIs. \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/PlayFab/PlayFabPowerBITemplates](https://github.com/PlayFab/PlayFabPowerBITemplates)  
21. Need free powerBI templates \- Microsoft Fabric Community, fecha de acceso: mayo 3, 2025, [https://community.powerbi.com/t5/Desktop/Need-free-powerBI-templates/td-p/2909286](https://community.powerbi.com/t5/Desktop/Need-free-powerBI-templates/td-p/2909286)  
22. Themes Gallery \- Microsoft Fabric Community, fecha de acceso: mayo 3, 2025, [https://community.fabric.microsoft.com/t5/Themes-Gallery/bd-p/ThemesGallery](https://community.fabric.microsoft.com/t5/Themes-Gallery/bd-p/ThemesGallery)  
23. Kicking out some free Power BI Templates : r/PowerBI \- Reddit, fecha de acceso: mayo 3, 2025, [https://www.reddit.com/r/PowerBI/comments/1d8z1an/kicking\_out\_some\_free\_power\_bi\_templates/](https://www.reddit.com/r/PowerBI/comments/1d8z1an/kicking_out_some_free_power_bi_templates/)  
24. PowerBI.tips, fecha de acceso: mayo 3, 2025, [https://themes.powerbi.tips/themes/gallery?id=92419915-494b-48d9-9e02-d98eed917095](https://themes.powerbi.tips/themes/gallery?id=92419915-494b-48d9-9e02-d98eed917095)  
25. Más de 5 plantillas de paneles de Power BI para descargar gratis \- Digital Factory, fecha de acceso: mayo 3, 2025, [https://digitalfactory.store/es/pages/5-modeles-de-tableau-de-bord-power-bi-a-telecharger-gratuits](https://digitalfactory.store/es/pages/5-modeles-de-tableau-de-bord-power-bi-a-telecharger-gratuits)  
26. microsoft/PowerBI-LogAnalytics-Template-Reports: The repository hosts Power BI template files that can be used to analyze Power BI data after you send it to Azure Log Analytics. \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/microsoft/PowerBI-LogAnalytics-Template-Reports](https://github.com/microsoft/PowerBI-LogAnalytics-Template-Reports)  
27. nbrown02/AzureDevOps-OData-SampleReports: A collection of Power BI templates for all the sample Azure DevOps OData Power BI reports provided by Microsoft for you to visualise your Azure DevOps, Azure DevOps Server and/or TFS data. \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/nbrown02/AzureDevOps-OData-SampleReports](https://github.com/nbrown02/AzureDevOps-OData-SampleReports)  
28. Project-Power-BI-Templates/Project Online/README.md at master \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/OfficeDev/Project-Power-BI-Templates/blob/master/Project%20Online/README.md](https://github.com/OfficeDev/Project-Power-BI-Templates/blob/master/Project%20Online/README.md)  
29. Microsoft Project for the Web Power BI Template.pbit \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/OfficeDev/Project-Power-BI-Templates/blob/master/Project%20for%20the%20Web/Microsoft%20Project%20for%20the%20Web%20Power%20BI%20Template.pbit](https://github.com/OfficeDev/Project-Power-BI-Templates/blob/master/Project%20for%20the%20Web/Microsoft%20Project%20for%20the%20Web%20Power%20BI%20Template.pbit)  
30. OfficeDev/Project-Power-BI-Templates \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/OfficeDev/Project-Power-BI-Templates](https://github.com/OfficeDev/Project-Power-BI-Templates)  
31. ben-howard/PowerBI-Planner: A Power BI template file that imports plans exported from Microsoft Planner \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/ben-howard/PowerBI-Planner](https://github.com/ben-howard/PowerBI-Planner)  
32. Hugoberry/powerbi-deserialize-action \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/Hugoberry/powerbi-deserialize-action](https://github.com/Hugoberry/powerbi-deserialize-action)  
33. Artchibald/WTW-Microsoft-Power-BI-templates \- GitHub, fecha de acceso: mayo 3, 2025, [https://github.com/Artchibald/WTW-Microsoft-Power-BI-templates](https://github.com/Artchibald/WTW-Microsoft-Power-BI-templates)  
34. Power BI Templates \- Data Meerkat, fecha de acceso: mayo 3, 2025, [https://datameerkat.com/power-bi-templates](https://datameerkat.com/power-bi-templates)  
35. Free Power BI Templates. Use our 25+ Dashboard Examples \- Windsor.ai, fecha de acceso: mayo 3, 2025, [https://windsor.ai/powerbi-templates/](https://windsor.ai/powerbi-templates/)  
36. Report Template Gallery (Power BI, Excel, PowerPoint) \- Zebra BI, fecha de acceso: mayo 3, 2025, [https://zebrabi.com/templates/](https://zebrabi.com/templates/)  
37. Power BI Dashboards \- Free Examples \- ZoomCharts, fecha de acceso: mayo 3, 2025, [https://zoomcharts.com/en/microsoft-power-bi-custom-visuals/dashboard-and-report-examples/](https://zoomcharts.com/en/microsoft-power-bi-custom-visuals/dashboard-and-report-examples/)  
38. Publish a Power BI template (PBIT) to Power BI Service and configure data source, fecha de acceso: mayo 3, 2025, [https://community.powerbi.com/t5/Desktop/Publish-a-Power-BI-template-PBIT-to-Power-BI-Service-and/td-p/1698579](https://community.powerbi.com/t5/Desktop/Publish-a-Power-BI-template-PBIT-to-Power-BI-Service-and/td-p/1698579)  
39. Documentación de guía de Power BI \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-bi/guidance/](https://learn.microsoft.com/es-es/power-bi/guidance/)  
40. Conector de PDF de Power Query \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-query/connectors/pdf](https://learn.microsoft.com/es-es/power-query/connectors/pdf)  
41. Documentación de Power Query \- Learn Microsoft, fecha de acceso: mayo 3, 2025, [https://learn.microsoft.com/es-es/power-query/](https://learn.microsoft.com/es-es/power-query/)  
42. La Guía Definitva de Power BI \- Descargar libro \- Bismart, fecha de acceso: mayo 3, 2025, [https://landing.bismart.com/guia-definitiva-power-bi](https://landing.bismart.com/guia-definitiva-power-bi)  
43. Ebooks | Nuestros Ebooks sobre BI, Data Analytics y Power BI \- Bismart, fecha de acceso: mayo 3, 2025, [https://bismart.com/ebooks](https://bismart.com/ebooks)  
44. todobi.com, fecha de acceso: mayo 3, 2025, [https://todobi.com/content/files/2023/02/TipsPowerBI\_V3-1.pdf](https://todobi.com/content/files/2023/02/TipsPowerBI_V3-1.pdf)  
45. Guia Power Query | PDF | Microsoft Excel \- Scribd, fecha de acceso: mayo 3, 2025, [https://es.scribd.com/document/453627204/GUIA-POWER-QUERY](https://es.scribd.com/document/453627204/GUIA-POWER-QUERY)  
46. Manual de POWER BI | PDF \- SlideShare, fecha de acceso: mayo 3, 2025, [https://es.slideshare.net/slideshow/manual-de-power-bi/235299280](https://es.slideshare.net/slideshow/manual-de-power-bi/235299280)  
47. Guía Completa de Power Query en Excel \- Imagina Formación, fecha de acceso: mayo 3, 2025, [https://imaginaformacion.com/tutoriales/guia-completa-de-power-query-en-excel](https://imaginaformacion.com/tutoriales/guia-completa-de-power-query-en-excel)  
48. Introducción a Power BI, fecha de acceso: mayo 3, 2025, [https://cea.uprrp.edu/wp-content/uploads/2024/03/IntroduccionPowerBI-CEA.pdf](https://cea.uprrp.edu/wp-content/uploads/2024/03/IntroduccionPowerBI-CEA.pdf)  
49. ¿Qué es Power BI? \- Guía para principiantes de Power BI \- DataCamp, fecha de acceso: mayo 3, 2025, [https://www.datacamp.com/es/blog/all-about-power-bi](https://www.datacamp.com/es/blog/all-about-power-bi)  
50. Excel 2013 y Power Query, fecha de acceso: mayo 3, 2025, [https://camcomcba.com.ar/wp-content/uploads/2022/04/M-Evento-282-20220401124541.pdf](https://camcomcba.com.ar/wp-content/uploads/2022/04/M-Evento-282-20220401124541.pdf)  
51. El Futuro de los Datos \- Analisis de Datos con Power BI, fecha de acceso: mayo 3, 2025, [https://www.elfuturodelosdatos.com/](https://www.elfuturodelosdatos.com/)  
52. Introducción, Tutorial, y Tips para aprender Power BI | Driveo, fecha de acceso: mayo 3, 2025, [https://driveo.es/wp-content/uploads/2024/06/PDF-PowerBI-Guia-ShadowDigital.pdf](https://driveo.es/wp-content/uploads/2024/06/PDF-PowerBI-Guia-ShadowDigital.pdf)  
53. UNIVERSIDAD DE ATACAMA ANALISIS DE DATOS CON POWER QUERY, POWER PIVOT Y DAX, fecha de acceso: mayo 3, 2025, [https://repositorioacademico.uda.cl/server/api/core/bitstreams/5b13af98-b6b6-4137-b2e0-cc3f30dc67c1/content](https://repositorioacademico.uda.cl/server/api/core/bitstreams/5b13af98-b6b6-4137-b2e0-cc3f30dc67c1/content)  
54. datdata \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/channel/UC6DnLOwz8R0iZPmkZ3vMM1g/videos](https://www.youtube.com/channel/UC6DnLOwz8R0iZPmkZ3vMM1g/videos)  
55. datdata \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/c/datdata](https://www.youtube.com/c/datdata)  
56. 100 blogs for Power BI \- BARC research, fecha de acceso: mayo 3, 2025, [https://barc.com/100-blogs-for-power-bi/](https://barc.com/100-blogs-for-power-bi/)  
57. Excel and Power BI Tips By Datdata, SerDataPro, and Vizxlization \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=mId7xf17NOc](https://www.youtube.com/watch?v=mId7xf17NOc)  
58. Sergio Alejandro Campos \- EXCELeINFO \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/channel/UCZHYfToa95Ybj3vPN9EPMAg](https://www.youtube.com/channel/UCZHYfToa95Ybj3vPN9EPMAg)  
59. Excel VBA and Macros \- Chapter 10 \- Most used properties to work with ranges @EXCELeINFO \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=ddbchsgGhF8](https://www.youtube.com/watch?v=ddbchsgGhF8)  
60. Excel VBA and Macros \- Chapter 1 \- Introduction to Spreadsheet Applications Development, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=ltXto0niwlc\&pp=0gcJCdgAo7VqN5tD](https://www.youtube.com/watch?v=ltXto0niwlc&pp=0gcJCdgAo7VqN5tD)  
61. Display data in charts even if there are hidden rows and columns. \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=Lh4XCYiJ6h4](https://www.youtube.com/watch?v=Lh4XCYiJ6h4)  
62. Generate test data with a single formula \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=Dj22naHlB2E](https://www.youtube.com/watch?v=Dj22naHlB2E)  
63. Power Query: la herramienta definitiva para consolidar datos de Excel. \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=JTSAnYHbPrc](https://www.youtube.com/watch?v=JTSAnYHbPrc)  
64. The Complete Power BI Interview Guide: A modern approach to acing the data analyst interview and landing your dream job \- Amazon.com, fecha de acceso: mayo 3, 2025, [https://www.amazon.com/Complete-Power-Interview-Guide-interview-ebook/dp/B0CW1JX687](https://www.amazon.com/Complete-Power-Interview-Guide-interview-ebook/dp/B0CW1JX687)  
65. The Complete Power BI Interview Guide: A modern approach to acing the data analyst interview and landing your dream job \- Amazon.com, fecha de acceso: mayo 3, 2025, [https://www.amazon.com/Complete-Power-Interview-Guide-interview/dp/1805120670](https://www.amazon.com/Complete-Power-Interview-Guide-interview/dp/1805120670)  
66. Part 3: The Final Stretch – Preparing for the HR Round and Beyond \- Packt, fecha de acceso: mayo 3, 2025, [https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/part-3-the-final-stretch-preparing-for-the-hr-round-and-beyond-13/section/part-3-the-final-stretch-preparing-for-the-hr-round-and-beyond-13](https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/part-3-the-final-stretch-preparing-for-the-hr-round-and-beyond-13/section/part-3-the-final-stretch-preparing-for-the-hr-round-and-beyond-13)  
67. Exploring and analyzing data \- Packt+ | Advance your knowledge in tech, fecha de acceso: mayo 3, 2025, [https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-3-the-power-bi-workflow-5/section/exploring-and-analyzing-data-ch05lvl1sec22](https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-3-the-power-bi-workflow-5/section/exploring-and-analyzing-data-ch05lvl1sec22)  
68. Accepting a job offer – the dos and don'ts \- Packt+ | Advance your knowledge in tech, fecha de acceso: mayo 3, 2025, [https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-13-best-practices-for-accepting-and-rejecting-job-offers-onboarding-and-beyond-16/section/accepting-a-job-offer-the-dos-and-donts-ch16lvl1sec05](https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-13-best-practices-for-accepting-and-rejecting-job-offers-onboarding-and-beyond-16/section/accepting-a-job-offer-the-dos-and-donts-ch16lvl1sec05)  
69. Expert Report Building \- Packt+ | Advance your knowledge in tech, fecha de acceso: mayo 3, 2025, [https://www.packtpub.com/en-us/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-8-expert-report-building-10/section/best-practices-before-adding-your-first-visual?chapterId=10](https://www.packtpub.com/en-us/product/the-complete-power-bi-interview-guide-9781805120674/chapter/chapter-8-expert-report-building-10/section/best-practices-before-adding-your-first-visual?chapterId=10)  
70. The Complete Power BI Interview Guide | Data | Subscription \- Packt, fecha de acceso: mayo 3, 2025, [https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674?type=subscription](https://www.packtpub.com/en-PT/product/the-complete-power-bi-interview-guide-9781805120674?type=subscription)  
71. PowerBIEspañol en telegram \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/channel/UCSK9waxG-zoj\_GyfKLuTU4w](https://www.youtube.com/channel/UCSK9waxG-zoj_GyfKLuTU4w)  
72. Curso de Microsoft Power BI desde cero | INTRODUCCION (video 1\) \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=oQ4q2CSXP4M](https://www.youtube.com/watch?v=oQ4q2CSXP4M)  
73. Tutorial de Introducción a Power BI \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=bKO1wa3UBfk](https://www.youtube.com/watch?v=bKO1wa3UBfk)  
74. Conecta, Transforma y Automatiza tus Datos con Power BI \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=ezc9ZVMxYwU](https://www.youtube.com/watch?v=ezc9ZVMxYwU)  
75. ¿Cómo Conectarte a un Conjunto de Datos en Power BI? | Visualizaciones en Tiempo Real, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=2fiajqwzVSM](https://www.youtube.com/watch?v=2fiajqwzVSM)  
76. ¿Cómo Utilizar Power Query? Guía Completa \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=sHck2uPqpcg\&pp=0gcJCfcAhR29\_xXO](https://www.youtube.com/watch?v=sHck2uPqpcg&pp=0gcJCfcAhR29_xXO)  
77. Cómo Crear Visualizaciones en Power BI: Múltiplos Pequeños, Mapas y Líneas de Referencia \- YouTube, fecha de acceso: mayo 3, 2025, [https://m.youtube.com/watch?v=KygqLQeZuTc](https://m.youtube.com/watch?v=KygqLQeZuTc)  
78. Creación de Visualizaciones Simples en Power BI \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=8L2ArDp-IDI](https://www.youtube.com/watch?v=8L2ArDp-IDI)  
79. Cómo crear un Dashboard en Power BI desde Cero y Paso a Paso \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=ZY5uhdKllYk](https://www.youtube.com/watch?v=ZY5uhdKllYk)  
80. Aprende a hacer un DASHBOARD en POWER BI \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=EARXUaMhqcE](https://www.youtube.com/watch?v=EARXUaMhqcE)  
81. ¿Cómo usar power BI? Tutorial desde 0 \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=C8HatpMK9Hw](https://www.youtube.com/watch?v=C8HatpMK9Hw)  
82. Tutorial de Power BI 1 en español, primeros pasos. \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=qou3\_v7vlt4](https://www.youtube.com/watch?v=qou3_v7vlt4)  
83. 2\. Power Query desde Cero: Tutorial Completo para Principiantes \- ESPAÑOL \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=f3nEZo4b-Yg](https://www.youtube.com/watch?v=f3nEZo4b-Yg)  
84. Power Query \- Beginner to PRO Masterclass in 30 minutes \- YouTube, fecha de acceso: mayo 3, 2025, [https://www.youtube.com/watch?v=MMdcczmULrU](https://www.youtube.com/watch?v=MMdcczmULrU)  
85. Introducción a Power BI: creación de paneles \- Digital Factory, fecha de acceso: mayo 3, 2025, [https://digitalfactory.store/es/blogs/article-de-blog-digital-factory/introduction-a-power-bi](https://digitalfactory.store/es/blogs/article-de-blog-digital-factory/introduction-a-power-bi)  
86. How do i open a pbit files \- Microsoft Fabric Community \- Power BI forums, fecha de acceso: mayo 3, 2025, [https://community.powerbi.com/t5/Desktop/How-do-i-open-a-pbit-files/td-p/2279725](https://community.powerbi.com/t5/Desktop/How-do-i-open-a-pbit-files/td-p/2279725)  
87. Blog \- \- Power BI SP, fecha de acceso: mayo 3, 2025, [https://powerbisp.com/blog](https://powerbisp.com/blog)  
88. Francisco Mullor Cabrera, autor en \- Power BI SP, fecha de acceso: mayo 3, 2025, [https://powerbisp.com/author/francisco-mullor](https://powerbisp.com/author/francisco-mullor)  
89. Power BI Dataflows \- Lulu, fecha de acceso: mayo 3, 2025, [https://www.lulu.com/es/shop/francisco-mullor-cabrera/power-bi-dataflows/paperback/product-y6v2mz.html](https://www.lulu.com/es/shop/francisco-mullor-cabrera/power-bi-dataflows/paperback/product-y6v2mz.html)  
90. Go with the dataflow \- a conditional (formatting) love story \- Datalineo, fecha de acceso: mayo 3, 2025, [https://www.datalineo.com/post/go-with-the-dataflow-a-conditional-formatting-love-story](https://www.datalineo.com/post/go-with-the-dataflow-a-conditional-formatting-love-story)  
91. Francisco Mullor Cabrera \- AI-powered profile by Favikon, fecha de acceso: mayo 3, 2025, [https://app.favikon.com/profile/67077c532f0209d83a343866/](https://app.favikon.com/profile/67077c532f0209d83a343866/)  
92. Santiago Tomás \- Blog Business Intelligence con PowerBI, fecha de acceso: mayo 3, 2025, [https://www.biti.es/author/biti/](https://www.biti.es/author/biti/)  
93. 2021 \- Blog Business Intelligence con PowerBI, fecha de acceso: mayo 3, 2025, [https://www.biti.es/2021/](https://www.biti.es/2021/)  
94. Salvador Ramos \- El Futuro de los Datos \- Analisis de Datos con Power BI, fecha de acceso: mayo 3, 2025, [https://www.elfuturodelosdatos.com/salvador-ramos/](https://www.elfuturodelosdatos.com/salvador-ramos/)  
95. Dominar los Datos con Power BI \- Entrevista a Salvador Ramos \- Conceptos Claros, fecha de acceso: mayo 3, 2025, [https://conceptosclaros.com/salvador-ramos/](https://conceptosclaros.com/salvador-ramos/)  
96. 01x04 el Futuro de Power BI con Salvador Ramos \- datdata, fecha de acceso: mayo 3, 2025, [https://www.datdata.com/blog/podcast-salvador-ramos](https://www.datdata.com/blog/podcast-salvador-ramos)  
97. POWER PLATFORM ESPAÑA: La Gran Comunidad de usuarios de Microsoft Power Platform | Next Step Consultores, fecha de acceso: mayo 3, 2025, [https://www.next-step.es/power-platform-espana/](https://www.next-step.es/power-platform-espana/)