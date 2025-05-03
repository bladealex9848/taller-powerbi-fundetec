---
title: "Manual Definitivo de Microsoft Power BI para Principiantes (Desde Cero)"
author: "Ing. Alexander Oviedo Fadul"
date: "Mayo 2025"
version: "1.0"
description: "Guía completa para aprender Microsoft Power BI desde los conceptos básicos hasta técnicas avanzadas"
---

# **Manual Definitivo de Microsoft Power BI para Principiantes (Desde Cero)**

**Sección 1: Introducción a Microsoft Power BI**

Microsoft Power BI se ha consolidado como una herramienta líder en el ámbito de la inteligencia empresarial (Business Intelligence o BI). Para los principiantes que se adentran en el análisis de datos y la visualización, comprender qué es Power BI, sus capacidades y cómo funciona es el primer paso esencial. Esta sección introduce los conceptos fundamentales de Power BI, sus componentes y el flujo de trabajo habitual.

**1.1 ¿Qué es Power BI y para qué sirve?**

Microsoft Power BI es fundamentalmente una colección integrada de servicios de software, aplicaciones y conectores diseñados para trabajar conjuntamente. Su objetivo principal es transformar fuentes de datos dispares y sin relación aparente en información coherente, visualmente atractiva e interactiva.1 Ya sea que los datos provengan de una simple hoja de cálculo de Excel o de una compleja combinación de almacenes de datos basados en la nube y locales (on-premises), Power BI proporciona las herramientas para conectar fácilmente esas fuentes, visualizar los aspectos más importantes, descubrir patrones ocultos y compartir esos hallazgos con cualquier persona o grupo deseado.2

El valor empresarial de Power BI radica en su capacidad para fomentar una "cultura de datos" dentro de una organización, permitiendo que todos los miembros, independientemente de su rol técnico, puedan tomar decisiones más informadas y fundamentadas en datos.2 Ayuda a las empresas a ser más eficientes al facilitar la creación de visualizaciones y reportes claros y convincentes que comunican información compleja de manera sencilla.4 Se utiliza ampliamente para monitorizar Indicadores Clave de Rendimiento (KPIs), analizar tendencias, identificar oportunidades y riesgos, y, en última instancia, impulsar resultados de negocio a través de insights accionables.6

Es importante entender que Power BI no es simplemente un programa para crear gráficos bonitos. Es una plataforma de inteligencia empresarial completa y escalable.7 Abarca todo el ciclo de vida del análisis de datos, desde la conexión inicial y la preparación de los datos hasta el modelado, el análisis avanzado, la visualización y la distribución segura de la información.1 Aprender Power BI implica, por tanto, familiarizarse con un ecosistema de herramientas y servicios interconectados, no solo con una única aplicación.

Además, Power BI se integra dentro del ecosistema más amplio de Microsoft, formando parte de la Power Platform 8 (junto con Power Apps, Power Automate y Copilot Studio) y, más recientemente, de Microsoft Fabric.3 Fabric es una solución de análisis de datos de extremo a extremo que unifica diversas herramientas de datos (ingeniería de datos, ciencia de datos, BI) en una única plataforma.7 Esta integración señala una dirección estratégica de Microsoft hacia un manejo de datos más unificado. Aunque para un principiante el enfoque inmediato estará en las funcionalidades centrales de Power BI (Desktop y Service), comprender este contexto más amplio es útil, ya que las habilidades adquiridas en Power BI pueden servir como puerta de entrada a un conjunto más extenso de capacidades de análisis de datos dentro del ecosistema de Microsoft.

**1.2 Componentes Clave de Power BI**

Power BI se compone de varios elementos que trabajan en conjunto. Para un principiante, los tres componentes básicos y fundamentales son 3:

1. **Power BI Desktop:** Es una aplicación gratuita que se instala en un ordenador con sistema operativo Windows.3 Se considera la herramienta principal para el desarrollo y la creación de informes.6 Aquí es donde los analistas y desarrolladores conectan a las fuentes de datos, realizan la limpieza y transformación de los mismos, construyen el modelo de datos (definiendo relaciones y cálculos) y diseñan los informes interactivos.
2. **Servicio Power BI (Power BI Service):** Es la plataforma en línea (Software as a Service \- SaaS) accesible a través de un navegador web en la dirección app.powerbi.com.3 Su función principal es la de actuar como centro para publicar, compartir, colaborar y consumir los informes y paneles (dashboards) creados (generalmente en Power BI Desktop). Permite configurar actualizaciones automáticas, gestionar la seguridad y el acceso, y crear paneles que consolidan información clave.
3. **Power BI Mobile:** Son aplicaciones nativas disponibles para dispositivos móviles con sistemas operativos Windows, iOS y Android.3 Permiten a los usuarios ver e interactuar con sus informes y paneles desde cualquier lugar, facilitando el acceso a la información en tiempo real mientras se está en movimiento.

Estos tres elementos (Desktop, Service, Mobile) están diseñados para complementarse, permitiendo a los usuarios crear, compartir y consumir información de la manera más efectiva según su rol y necesidades.3

Además de estos componentes centrales, existen tecnologías subyacentes clave, integradas principalmente dentro de Power BI Desktop, que potencian sus capacidades:

* **Power Query:** Es el motor de extracción, transformación y carga (ETL) de Power BI. Proporciona una interfaz gráfica (el Editor de Power Query) para conectar a cientos de fuentes de datos, combinar información de diferentes orígenes y realizar una amplia gama de operaciones de limpieza y transformación para preparar los datos para el análisis.2 Es la experiencia fundamental de preparación de datos.20
* **Power Pivot (Tecnología de Modelado):** Aunque no se vea como una herramienta separada en la interfaz moderna de Desktop, la tecnología subyacente de Power Pivot es la que permite el modelado de datos tabulares en memoria. Esto incluye la creación de relaciones entre tablas y la definición de cálculos complejos utilizando el lenguaje DAX (Data Analysis Expressions).17 Estas funciones se realizan principalmente en las vistas 'Modelo' y 'Datos' de Power BI Desktop.
* **Power View (Tecnología de Visualización):** Similar a Power Pivot, Power View es la tecnología subyacente que impulsa la creación de visualizaciones interactivas (gráficos, tablas, mapas) en Power BI.17 La experiencia de diseño visual se realiza en la vista 'Informe' de Power BI Desktop y en el servicio Power BI.

Es importante notar que, aunque estas tecnologías (Power Query, Power Pivot, Power View) a veces se mencionan como componentes separados 17, en la experiencia actual de Power BI Desktop están profundamente integradas. El usuario interactúa con el Editor de Power Query como una ventana separada para la transformación de datos 19, pero el modelado y la visualización ocurren dentro de las vistas principales de Desktop (Datos, Modelo, Informe) 12, sin necesidad de buscar herramientas explícitamente llamadas "Power Pivot" o "Power View".

Finalmente, existen otros elementos en el ecosistema de Power BI, generalmente para usos más específicos o avanzados, que un principiante debe conocer pero no necesariamente dominar inicialmente:

* **Power BI Report Builder:** Herramienta para crear informes paginados, optimizados para impresión o exportación a formatos como PDF, que manejan grandes volúmenes de datos tabulares.3
* **Power BI Report Server:** Una solución de servidor local (on-premises) que permite a las organizaciones publicar y gestionar informes de Power BI dentro de su propia infraestructura, en lugar de en la nube del Servicio Power BI.3
* **Power BI Embedded:** Una oferta para desarrolladores que permite integrar visualizaciones e informes de Power BI dentro de aplicaciones personalizadas, sitios web o portales.7
* **Power Q\&A:** El motor que permite a los usuarios hacer preguntas sobre sus datos utilizando lenguaje natural y obtener respuestas en forma de visualizaciones.15
* **Dataflows:** Permiten realizar la preparación de datos (usando Power Query) de forma centralizada y reutilizable directamente en el Servicio Power BI, creando una capa de datos preparada que puede ser utilizada por múltiples informes.16

La clara división de roles entre Power BI Desktop (enfocado en la creación y desarrollo) y el Servicio Power BI (enfocado en la compartición, colaboración y consumo) es un concepto fundamental.3 Aunque hay cierta superposición de funcionalidades (por ejemplo, se pueden crear informes básicos en el Servicio), Desktop ofrece un conjunto de herramientas mucho más robusto y completo para la transformación y el modelado de datos.13 Comprender dónde realizar cada tarea es crucial para un flujo de trabajo eficiente.

**1.3 El Flujo de Trabajo Típico en Power BI**

El proceso más común para desarrollar una solución de Business Intelligence con Power BI sigue una secuencia lógica que aprovecha las fortalezas de sus componentes principales 3:

1. **Conectar y Preparar Datos (Power BI Desktop):** El proceso generalmente comienza en Power BI Desktop. El primer paso es conectarse a una o varias fuentes de datos (Excel, bases de datos, servicios web, etc.). Una vez conectados, se utiliza el Editor de Power Query para limpiar, transformar y dar forma a los datos, asegurando que estén listos para el análisis.
2. **Modelar Datos (Power BI Desktop):** Con los datos ya limpios, se pasa a la fase de modelado en las vistas 'Modelo' y 'Datos' de Desktop. Aquí se crean relaciones entre las diferentes tablas y se definen cálculos clave utilizando DAX (columnas calculadas y medidas) para enriquecer el modelo.
3. **Crear Informes (Power BI Desktop):** En la vista 'Informe' de Desktop, se diseñan las visualizaciones (gráficos, tablas, mapas) y se organizan en una o varias páginas para contar una historia con los datos y responder a preguntas de negocio. Se configura la interactividad (filtros, segmentadores).
4. **Publicar (De Desktop a Service):** Una vez que el informe está completo y guardado como un archivo.pbix, se publica en el Servicio Power BI.3 Este paso sube tanto el informe como su modelo de datos subyacente a un área de trabajo designada en la nube.
5. **Crear Paneles (Power BI Service):** Opcionalmente, en el Servicio Power BI, se pueden crear paneles (dashboards) anclando visualizaciones clave de uno o varios informes publicados. Los paneles ofrecen una vista consolidada y de alto nivel para monitorizar métricas importantes.15
6. **Compartir y Colaborar (Power BI Service):** Finalmente, los informes y paneles se comparten con los usuarios finales a través de diversas opciones disponibles en el Servicio Power BI (compartición directa, aplicaciones, áreas de trabajo, etc.).3 Los usuarios pueden entonces acceder, ver e interactuar con el contenido publicado a través del navegador web o las aplicaciones móviles.

Este flujo de trabajo estándar pone un fuerte énfasis en el uso de Power BI Desktop como la herramienta principal para la creación y el desarrollo robusto de informes y modelos de datos.3 Es la ruta recomendada, especialmente para principiantes que necesitan construir una base sólida.

Sin embargo, existen flujos alternativos. Es posible crear informes directamente en el Servicio Power BI, sobre todo si se conecta a conjuntos de datos ya existentes publicados por otros usuarios, a Dataflows, o a ciertas aplicaciones SaaS (como Salesforce) para las cuales Power BI puede generar automáticamente informes y paneles básicos.11 La existencia de estas alternativas y de componentes como los Dataflows 16 sugiere una tendencia hacia mayores capacidades en la nube. No obstante, para tareas complejas de transformación y modelado, Power BI Desktop sigue siendo la herramienta más completa y potente en la actualidad.13 Por lo tanto, la ruta de aprendizaje inicial debe centrarse en dominar los fundamentos en Desktop.

**1.4 Tabla Comparativa: Power BI Desktop vs. Power BI Service (Funciones Clave para Principiantes)**

Para clarificar las diferencias y usos principales de los dos componentes centrales, la siguiente tabla resume sus características clave desde la perspectiva de un principiante:

| Característica | Power BI Desktop | Servicio Power BI (Power BI Service) | Fuentes Clave |
| :---- | :---- | :---- | :---- |
| **Propósito Principal** | Creación, Desarrollo, Modelado, Diseño de Informes | Compartición, Colaboración, Consumo, Monitorización (Dashboards) | 13 |
| **Acceso** | Aplicación local instalada en Windows | Navegador web (app.powerbi.com), Aplicaciones móviles (iOS, Android) | 3 |
| **Costo Básico** | Gratis | Gratis (limitado), Pro (pago), Premium Per User (pago) | 13 |
| **Conexión a Datos** | Muy amplia gama de conectores, opciones avanzadas | Más limitada, puede requerir Gateways para datos locales, depende de modelos/dataflows preexistentes | 13 |
| **Transformación de Datos** | Completa y potente (Editor de Power Query) | Básica (Power Query Online), Dataflows para preparación reutilizable | 13 |
| **Modelado de Datos** | Completo (Relaciones, DAX \- Columnas Calculadas y Medidas) | Muy limitado (principalmente creación de medidas sobre modelos existentes) | 13 |
| **Creación de Informes** | Completa y rica en funcionalidades | Posible, pero más simplificada que en Desktop | 13 |
| **Creación de Paneles** | No disponible | Sí, anclando visuales de informes publicados | 13 |
| **Publicación** | Sí (Publica informes y modelos al Servicio Power BI) | No aplica (es el destino de la publicación) | 13 |
| **Compartir y Colaboración** | Limitado (se comparte el archivo.pbix o se publica al Service) | Extensivo (Compartir directo, Vínculos, Áreas de Trabajo, Apps, Teams, Web público) | 13 |

Esta tabla es una referencia rápida esencial para que los principiantes comprendan dónde realizar las tareas fundamentales y gestionen sus expectativas sobre las capacidades de cada entorno. Ayuda a entender por qué el flujo de trabajo suele comenzar en Desktop y moverse hacia el Service.

**Sección 2: Primeros Pasos: Instalación y Configuración**

Antes de poder empezar a trabajar con los datos, es necesario instalar las herramientas necesarias y configurar el acceso. Esta sección guía a través de la descarga e instalación de Power BI Desktop y el registro en el Servicio Power BI.

**2.1 Descargar e Instalar Power BI Desktop**

Power BI Desktop es la aplicación fundamental para la creación de informes y modelos. Existen dos vías principales para obtenerla e instalarla en un equipo Windows 28:

1. **Instalar desde Microsoft Store:** Esta es la opción generalmente recomendada, especialmente para usuarios individuales.6
   * **Ventajas:**
     * *Actualizaciones Automáticas:* Windows descarga e instala la última versión en segundo plano tan pronto como está disponible, asegurando que siempre se utilice la versión más reciente sin intervención manual.28 Las actualizaciones de Power BI suelen ser mensuales.6
     * *Descargas más Pequeñas:* La Store solo descarga los componentes que han cambiado en cada actualización, lo que resulta en descargas más rápidas y menor consumo de datos.28
     * *Sin Privilegios de Administrador:* La instalación y las actualizaciones no requieren permisos de administrador en el equipo, lo cual es beneficioso en entornos corporativos donde los usuarios no tienen estos privilegios.6
   * **Cómo Acceder:** Se puede encontrar buscando "Power BI Desktop" en la Microsoft Store, a través de un enlace directo desde la web de Microsoft, haciendo clic en el icono de descarga dentro del Servicio Power BI, o desde la página del producto Power BI seleccionando "Download Free".28 Una vez en la página de la Store, se selecciona "Install".28
2. **Descargar Directamente como Ejecutable (.exe):** Esta opción implica descargar un archivo instalador desde la web de Microsoft.
   * **Ventajas:** Permite una instalación offline, mayor control sobre la versión específica que se instala y la posibilidad de usar parámetros de línea de comandos para instalaciones silenciosas o personalizadas.28 Puede ser necesaria en entornos que restringen el acceso a la Microsoft Store.
   * **Desventajas:** Requiere privilegios de administrador para completar la instalación.28 Las actualizaciones deben gestionarse manualmente descargando y ejecutando el instalador de la nueva versión.
   * **Cómo Acceder:** Ir a la página de descarga de Power BI Desktop en el sitio de Microsoft 12 o al Centro de Descargas de Microsoft.6 Seleccionar la opción "See download or language options" o buscar directamente los archivos PBIDesktopSetup.exe (para 32 bits) o PBIDesktopSetup\_x64.exe (para 64 bits).29 Se puede automatizar la descarga e instalación usando scripts, por ejemplo, con PowerShell.30
   * **Instalación:** Ejecutar el archivo.exe descargado y seguir las instrucciones del asistente.29

Es crucial saber que **no se pueden tener instaladas ambas versiones (Store y.exe) al mismo tiempo** en el mismo ordenador.6 Si se desea cambiar de una versión a otra, es necesario desinstalar la versión actual primero.

**Costo y Requisitos:** Power BI Desktop es completamente **gratuito** para descargar y utilizar.10 Sin embargo, solo está disponible para **Windows**.6 Los requisitos mínimos del sistema incluyen Windows 10 o Windows Server 2016 o posterior,.NET Framework 4.7.2 o superior, navegador Microsoft Edge, al menos 2 GB de RAM (se recomiendan 4 GB o más), una resolución de pantalla mínima de 1440x900 y un procesador de 64 bits (x64) de 1 GHz o superior es recomendado.28 También se requiere el componente WebView2, que normalmente se instala con Power BI Desktop.28

La elección entre la versión de la Store y la descarga directa tiene implicaciones prácticas importantes.6 Para la mayoría de los principiantes, la versión de la Store ofrece una experiencia más sencilla debido a las actualizaciones automáticas y la ausencia de necesidad de permisos de administrador. La descarga directa ofrece más control pero requiere más gestión manual.

El hecho de que Power BI Desktop sea gratuito 25 pero exclusivo para Windows 6 representa una consideración importante. Los usuarios de macOS o Linux no pueden instalarlo directamente y necesitarían recurrir a soluciones como máquinas virtuales (VMs) o depender más del Servicio Power BI para la creación de informes, lo cual tiene limitaciones funcionales significativas, especialmente en modelado y transformación de datos.24

**Solución de Problemas Comunes:** Si los diálogos o textos en Power BI Desktop aparecen borrosos, puede deberse a la configuración de escalado de pantalla en Windows. Se recomienda ajustar la configuración de pantalla de Windows a 100%.28

**2.2 Registrarse y Acceder al Servicio Power BI**

Mientras que Power BI Desktop se puede usar sin una cuenta 25, para utilizar el Servicio Power BI (app.powerbi.com), que es esencial para publicar, compartir y colaborar, se necesita una cuenta.31

**Tipo de Cuenta:** Idealmente, se debe utilizar una **cuenta de correo electrónico de trabajo o escuela** (por ejemplo, nombre@empresa.com o nombre@universidad.edu) para registrarse.31 Las direcciones de correo electrónico personales (como @gmail.com, @hotmail.com, @outlook.com) generalmente no son compatibles para el proceso de registro estándar de autoservicio, aunque existen alternativas.31

**Proceso de Inicio de Sesión / Registro:**

1. Navegar a app.powerbi.com en un navegador web.31
2. Introducir la dirección de correo electrónico de trabajo o escuela.31 Microsoft comprobará si ya existe una cuenta asociada (por ejemplo, una cuenta de Microsoft 365).
3. Introducir la contraseña correspondiente (la misma que se usa para otros servicios de Microsoft como Office 365 u Outlook con esa cuenta).31
4. Es posible que se solicite un código de verificación enviado al correo electrónico o dispositivo móvil para mayor seguridad.31
5. Si es la primera vez que se accede y no se tiene una licencia asignada, es posible que se guíe a través de un proceso para obtener una licencia de prueba o gratuita.

Opciones para Obtener Acceso y Licencia (Individual):
Dado que no todos los principiantes tienen una cuenta de trabajo o escuela con una licencia de Power BI asignada, Microsoft ofrece varias vías para empezar:

* **Botones de Prueba/Compra:** En varios sitios de Microsoft, se encuentran botones como "Try free" (Probar gratis), "Buy now" (Comprar ahora) o "Start free trial" (Iniciar prueba gratuita).33 Estos pueden permitir:
  * Obtener una **Licencia Gratuita (Free):** Permite usar Power BI de forma individual en el espacio personal "Mi área de trabajo" y consumir contenido que esté alojado en una capacidad Premium o Fabric.13 No permite compartir contenido con otros usuarios Pro ni colaborar en áreas de trabajo estándar.
  * Iniciar una **Prueba Gratuita:** Frecuentemente se ofrece una prueba de Power BI Premium Per User (PPU) por un tiempo limitado (ej. 60 días).15 Esto otorga acceso a la mayoría de las funcionalidades de pago durante el período de prueba.
* **Vínculo de Correo Electrónico:** Si un colega que ya usa Power BI comparte un informe o panel, al hacer clic en el enlace recibido por correo electrónico se puede iniciar el proceso de inicio de sesión o registro por primera vez.31 El sistema evaluará si se necesita asignar una licencia.
* **Prueba de Microsoft 365:** Para usuarios sin cuenta de trabajo/escuela, una opción es registrarse para una prueba gratuita de Microsoft 365 (por ejemplo, Office 365 E5).35 Este proceso guía en la creación de una nueva cuenta de trabajo temporal con un dominio ".onmicrosoft.com". Estas pruebas suelen incluir una licencia de Power BI Pro y permiten usar el servicio completamente durante el período de prueba.35 Generalmente requiere una tarjeta de crédito para el registro, pero se puede cancelar antes de que finalice el período gratuito para evitar cargos.35
* **Cuenta Gratuita de Fabric:** Registrarse para una licencia gratuita de Microsoft Fabric también otorga acceso a las capacidades de la licencia gratuita de Power BI.25

Tipos de Licencia (Impacto en Principiantes):
Comprender las licencias es crucial porque determinan qué se puede hacer, especialmente en cuanto a compartir y colaborar 13:

* **Free (Gratuita):** Para aprendizaje y uso personal en "Mi área de trabajo". Se puede consumir contenido si está en capacidad Premium/PPU/Fabric.13 No se puede compartir con usuarios Pro ni colaborar en áreas de trabajo estándar.
* **Pro:** La licencia de pago estándar por usuario. Necesaria para publicar contenido en áreas de trabajo compartidas (no Premium) y para compartir contenido con otros usuarios Pro.13 También necesaria para que los destinatarios (que no tengan PPU o acceso a Premium) vean el contenido compartido.
* **Premium Per User (PPU):** Licencia de pago por usuario que incluye todas las capacidades de Pro más acceso a la mayoría de las características de la capacidad Premium (como modelos semánticos más grandes, actualizaciones más frecuentes, características de IA avanzadas).13 Se puede compartir contenido con otros usuarios PPU.
* **Premium por Capacidad:** Licencia organizacional (no por usuario) que proporciona recursos dedicados (capacidad) para un rendimiento mejorado y mayores límites. El contenido alojado en capacidad Premium puede ser consumido por usuarios con licencia Gratuita.13

El acceso a las funciones clave del Servicio Power BI, como la colaboración y el uso compartido, depende directamente del tipo de cuenta y, fundamentalmente, de la licencia que se posea.13 Un usuario con licencia gratuita se encontrará con limitaciones significativas al intentar compartir su trabajo. Las diversas opciones de prueba 15 facilitan la exploración inicial, pero es importante entender sus limitaciones y temporalidad.

**2.3 Navegación Inicial: Interfaz de Power BI Desktop y Service**

Una vez instalado Desktop y registrado en el Service, es útil familiarizarse con las interfaces de usuario principales.

Interfaz de Power BI Desktop:
Al abrir Power BI Desktop, se presenta una interfaz diseñada para la creación de informes 6:

* **Vistas Principales:** Tres iconos en el lado izquierdo permiten cambiar entre las vistas fundamentales 6:
  * **Informe (Report):** El lienzo principal donde se diseñan y organizan las visualizaciones.
  * **Datos (Data):** Permite ver los datos cargados en formato tabular, crear columnas calculadas y medidas básicas.
  * **Modelo (Model):** Muestra las tablas del modelo y las relaciones entre ellas, permitiendo crear y gestionar estas relaciones.
* **Cinta (Ribbon):** En la parte superior, contiene pestañas (Inicio, Transformar datos, Insertar, Modelado, Ver, etc.) con la mayoría de los comandos y opciones.6
* **Lienzo (Canvas):** El área central en la vista Informe donde se colocan y arreglan las visualizaciones.6
* **Paneles:** Generalmente a la derecha, incluyen 6:
  * **Filtros (Filters):** Para aplicar filtros a nivel de visualización, página o informe.
  * **Visualizaciones (Visualizations):** Contiene la paleta de tipos de gráficos disponibles.
  * **Campos (Fields):** Lista todas las tablas y columnas/medidas disponibles en el modelo de datos para arrastrar a las visualizaciones.
* **Selector de Página:** Pestañas en la parte inferior para navegar entre las diferentes páginas del informe.6
* **Pantalla de Bienvenida:** Puede aparecer al inicio, ofreciendo accesos rápidos como "Obtener datos", "Orígenes recientes" o "Abrir informes".12

Interfaz del Servicio Power BI (app.powerbi.com):
La interfaz web está orientada al consumo, la gestión y la colaboración 16:

* **Panel de Navegación (Izquierda):** Es la columna vertebral de la navegación. Contiene secciones clave como 15:
  * *Inicio (Home):* Página de aterrizaje con acceso rápido a contenido frecuente o recomendado.
  * *Favoritos:* Contenido marcado como favorito.
  * *Recientes:* Contenido accedido recientemente.
  * *Aplicaciones (Apps):* Aplicaciones publicadas a las que se tiene acceso.
  * *Compartido conmigo (Shared with me):* Contenido que otros usuarios han compartido directamente.
  * *Áreas de trabajo (Workspaces):* Lista de áreas de trabajo colaborativas a las que se pertenece. Incluye "Mi área de trabajo" (My workspace), que es el espacio personal.
  * *Centro de aprendizaje (Learn):* Acceso a recursos de aprendizaje y ejemplos.
* **Área de Contenido Principal:** El espacio central donde se muestra el contenido seleccionado (un panel, un informe, la configuración, etc.).16
* **Barra de Menú Superior:** Contiene iconos para funciones globales 15:
  * *Icono de Descarga:* Puede incluir un enlace para descargar Power BI Desktop.
  * *Ayuda (?):* Acceso a la documentación y soporte.
  * *Configuración (Engranaje):* Acceso a la configuración del servicio y al portal de administración (si se tienen permisos).
  * *Notificaciones:* Alertas y notificaciones del servicio.
  * *Comentarios:* Opción para enviar feedback a Microsoft.
  * *Cuenta de Usuario (Icono 'Yo' o foto de perfil):* Gestionar la cuenta, ver licencias, iniciar prueba, cerrar sesión.
* **Conceptos Clave del Servicio:** Es importante familiarizarse con la terminología específica del Servicio 16:
  * *Panel (Dashboard):* Lienzo de una página con iconos (tiles) para monitorización.
  * *Informe (Report):* Conjunto de una o más páginas con visualizaciones interactivas.
  * *Modelo Semántico (Semantic Model):* El conjunto de datos y lógica (relaciones, medidas) que alimenta los informes (anteriormente conocido como Dataset o Conjunto de Datos).
  * *Aplicación (App):* Paquete de contenido (paneles, informes) distribuido a una audiencia.
  * *Área de trabajo (Workspace):* Espacio colaborativo para crear y gestionar contenido.
  * *Visualización (Visualization):* Un gráfico, tabla o mapa individual.
  * *Icono (Tile):* Una visualización individual anclada a un panel.

Las interfaces de Desktop y Service son claramente distintas, reflejando sus roles primarios.6 Dominar la navegación en ambas es esencial para seguir el flujo de trabajo completo de Power BI. Además, es útil notar que la terminología puede evolucionar; por ejemplo, "Dataset" ha sido reemplazado por "Semantic Model".16 Utilizar los términos actuales es importante, pero conocer los antiguos ayuda al consultar recursos más antiguos.

**Sección 3: Conexión a Fuentes de Datos Comunes**

El primer paso práctico en cualquier proyecto de Power BI es conectar la herramienta a las fuentes de datos que se desean analizar. Power BI ofrece una amplia conectividad a diversos tipos de orígenes.

**3.1 El Proceso "Obtener Datos" (Get Data)**

Tanto Power BI Desktop como el Servicio Power BI tienen mecanismos para conectarse a los datos, aunque el proceso y las opciones varían ligeramente.

* **En Power BI Desktop:**
  * La función principal para iniciar la conexión es el botón **"Obtener datos" (Get Data)**, ubicado prominentemente en la pestaña **"Inicio" (Home)** de la cinta de opciones.12
  * Al hacer clic en él, se despliega un menú con los tipos de datos más comunes (Excel, SQL Server, Texto/CSV, Web, etc.).
  * Seleccionando **"Más..."** en este menú, o directamente desde la cinta, se abre la ventana completa **"Obtener datos"**, que categoriza cientos de conectores disponibles: Archivos (Excel, CSV, PDF, Carpeta SharePoint), Bases de datos (SQL Server, Oracle, MySQL, PostgreSQL, Azure SQL), Servicios de Power Platform (Modelos semánticos de Power BI, Dataflows), Azure, Servicios en línea (Dynamics 365, Salesforce, Google Analytics) y muchos otros.12
  * Una vez seleccionado el conector y proporcionada la información necesaria (ruta del archivo, URL, credenciales del servidor), Power BI intenta establecer la conexión.
  * A continuación, generalmente presenta una ventana de **"Navegador"** (Navigator) que permite previsualizar y seleccionar las tablas, hojas o elementos específicos que se desean importar de la fuente.12
  * Finalmente, se ofrecen dos opciones principales 12:
    * **"Cargar" (Load):** Importa los datos seleccionados directamente al modelo de datos de Power BI Desktop tal como están.
    * **"Transformar datos" (Transform Data):** Abre el Editor de Power Query, permitiendo limpiar, dar forma y modificar los datos *antes* de cargarlos al modelo. Esta es a menudo la opción recomendada si los datos no están perfectamente limpios o estructurados.
* **En el Servicio Power BI:**
  * La conexión a nuevas fuentes de datos para crear *nuevos* modelos semánticos directamente en el servicio es más limitada que en Desktop, enfocándose principalmente en archivos y algunos servicios en la nube.
  * El proceso suele comenzar en **"Mi área de trabajo"** (o cualquier otra área de trabajo donde se tengan permisos). Se selecciona **"Nuevo" \> "Modelo Semántico"**.15
  * Esto abre una página para **"Agregar datos para empezar a compilar un informe"**, donde se puede elegir el tipo de fuente, como "Excel" o "CSV".15 También se pueden crear modelos a partir de modelos semánticos existentes o Dataflows.
  * Al conectar a **archivos (Excel, CSV)**, la ubicación del archivo es importante 43:
    * **Archivos en OneDrive (Trabajo/Escuela o Personal) o SharePoint:** Se recomienda usar las opciones "OneDrive" o "SharePoint". Power BI establece una conexión con el archivo en la nube. Si se elige **"Vincular al archivo" (Link to file)** (para Excel), el libro se muestra en Power BI como en Excel Online, y los datos se sincronizan periódicamente (aprox. cada hora).15 Si se elige **"Importar" (Import)**, los datos se cargan en un nuevo modelo semántico.44 Para CSV en OneDrive/SharePoint, los datos se importan a un modelo semántico y se mantienen sincronizados.43
    * **Archivos Locales (desde el ordenador):** Se utiliza la opción **"Cargar" (Upload)** o **"Examinar" (Browse)**. Para Excel, esto sube una copia del archivo al área de trabajo.44 Para CSV, importa los datos a un nuevo modelo semántico.43 Los archivos locales no se sincronizan automáticamente; requieren configurar una actualización programada (Scheduled Refresh) si los datos cambian.
  * El Servicio Power BI generalmente no ofrece la misma experiencia interactiva de "Transformar datos" (Editor de Power Query) al conectar a nuevas fuentes como lo hace Desktop. La preparación de datos más compleja suele realizarse en Desktop antes de publicar.14

La elección del método de conexión a archivos (local vs. nube) tiene implicaciones directas en cómo se actualizan los datos y si se pueden editar.43 Conectar a archivos en OneDrive o SharePoint es generalmente preferible si se necesita que los informes reflejen los cambios en los archivos fuente automáticamente.

La opción "Transformar datos" en Power BI Desktop es un punto de entrada fundamental al Editor de Power Query.12 Su presencia destacada justo después de seleccionar una fuente subraya la filosofía de Power BI: la preparación y limpieza de datos es un paso integral y temprano en el proceso de análisis, no una ocurrencia tardía. Trabajar con datos limpios y bien estructurados desde el principio facilita enormemente las fases posteriores de modelado y visualización.

**3.2 Taller Práctico 1: Conectar con Archivos Excel y CSV**

Este taller práctico guía al usuario a través de la conexión a los tipos de archivo más comunes: Excel y CSV, tanto en Power BI Desktop como en el Servicio Power BI. Se utilizarán archivos de ejemplo proporcionados por Microsoft.

**Datos de Ejemplo:**

* Archivo Excel: "Financial Sample.xlsx". Este archivo contiene datos financieros de ejemplo y es comúnmente usado en la documentación de Microsoft.15 Descargarlo previamente desde fuentes oficiales de Microsoft Learn o GitHub.
* Archivo CSV: Un archivo de valores separados por comas. Se puede utilizar el archivo Financial Sample.csv si está disponible, crear uno simple manualmente (ej. con columnas Producto, Ventas, Fecha) o descargar un CSV de ejemplo como el mencionado en.43

**Pasos en Power BI Desktop:**

1. Abrir Power BI Desktop.
2. En la pestaña "Inicio", hacer clic en **"Obtener datos"**.
3. Seleccionar **"Excel workbook"** para el archivo de Excel o **"Text/CSV"** para el archivo CSV.12
4. En la ventana del explorador de archivos, navegar hasta la ubicación donde se guardaron los archivos de ejemplo y seleccionar el archivo correspondiente (Financial Sample.xlsx o el archivo .csv). Hacer clic en **"Abrir"**.12
5. **Para Excel:** Aparecerá la ventana del **"Navegador"**. Mostrará las hojas y tablas dentro del libro. Marcar la casilla junto a la tabla o hoja que contiene los datos (por ejemplo, la tabla llamada financials dentro del archivo Financial Sample 15). Se mostrará una vista previa a la derecha.12
6. **Para CSV:** Aparecerá una ventana de vista previa mostrando cómo Power BI ha interpretado el archivo CSV. Se puede verificar el delimitador detectado (generalmente coma), la codificación del archivo y la detección de tipos de datos basada en las primeras filas.12
7. Para este primer taller, el objetivo es simplemente cargar los datos. Hacer clic en el botón **"Cargar" (Load)** en la parte inferior de la ventana del Navegador o de la vista previa del CSV.12
8. Esperar a que Power BI cargue los datos. Una vez completado, las tablas (financials y la tabla del CSV) aparecerán con sus respectivas columnas en el panel **"Campos" (Fields)** a la derecha de la interfaz de Power BI Desktop.

**Pasos en el Servicio Power BI (Importando como Modelo Semántico):**

1. Abrir el navegador web e ir a app.powerbi.com. Iniciar sesión.
2. En el panel de navegación izquierdo, seleccionar **"Mi área de trabajo"**.15
3. Hacer clic en el botón **"+ Nuevo"** y seleccionar **"Modelo Semántico"**.15
4. En la página "Agregar datos...", seleccionar **"Excel"** o **"CSV"** según el archivo.15
5. Se presentarán opciones para obtener el archivo. Para un archivo guardado localmente, seleccionar **"Cargar" (Upload)** o **"Archivo Local"**. Si el archivo está en OneDrive/SharePoint, se pueden usar esas opciones, pero para asegurar la importación como modelo semántico (y no solo un vínculo o libro), la carga local o la opción explícita de "Importar" es más directa para este ejercicio.43
6. Navegar hasta el archivo de ejemplo (Financial Sample.xlsx o el archivo .csv) en el ordenador y seleccionarlo.
7. **Para Excel (Importar):** Si se carga el archivo Excel, Power BI puede preguntar si se desea "Cargar" (ver como libro) o "Importar" datos a Power BI. Seleccionar **"Importar"**.44 Puede que se necesite seleccionar las tablas/hojas a importar.
8. **Para CSV:** Al cargar el archivo CSV, Power BI lo procesará e importará los datos directamente a un nuevo modelo semántico.43
9. Una vez finalizada la importación, aparecerá un nuevo **Modelo Semántico** con el nombre del archivo (o similar) en la lista de contenido de "Mi área de trabajo".

**Resultado Esperado:** Al finalizar este taller, el usuario habrá conectado y cargado correctamente los datos de ejemplo de Excel y CSV tanto en Power BI Desktop como en el Servicio Power BI (como modelos semánticos), estableciendo la base para los siguientes pasos de transformación y modelado.

**3.3 Taller Práctico 2: Conectar con Datos Web**

Este taller muestra cómo utilizar Power BI Desktop para extraer datos directamente desde una tabla publicada en una página web.

Datos de Ejemplo:
Se necesita la URL de una página web que contenga datos estructurados en una tabla HTML. Un buen ejemplo suele ser una tabla de datos en Wikipedia (ej. lista de países por población, resultados deportivos, etc.). Alternativamente, si la URL mencionada en 12 sobre "sunny locations" sigue siendo válida y contiene una tabla, podría usarse. Es importante elegir una página con una estructura de tabla clara.
Pasos (Solo en Power BI Desktop):
Nota: Extraer datos de tablas HTML arbitrarias es una funcionalidad más robusta en Desktop que en Service.

1. Abrir Power BI Desktop.
2. En la pestaña "Inicio", hacer clic en **"Obtener datos"**.
3. En el menú desplegable, seleccionar **"Web"**.12
4. Aparecerá el cuadro de diálogo "Desde Web". Pegar la URL completa de la página web que contiene la tabla deseada en el campo **"URL"**.12
5. Hacer clic en **"Aceptar"**.
6. Power BI Desktop se conectará a la URL y analizará su contenido. Aparecerá la ventana del **"Navegador"**. A la izquierda, mostrará una lista de las tablas HTML que ha detectado en la página web.
7. Hacer clic en cada tabla sugerida para ver una vista previa de sus datos a la derecha. Identificar la tabla que contiene la información deseada.
8. Marcar la casilla junto al nombre de la tabla seleccionada.
9. En lugar de "Cargar", esta vez hacer clic en el botón **"Transformar datos" (Transform Data)**.12 Esto es importante porque los datos web a menudo requieren limpieza.
10. El Editor de Power Query se abrirá en una nueva ventana, mostrando los datos de la tabla web seleccionada, listos para ser limpiados y transformados en la siguiente sección.

**Resultado Esperado:** El usuario habrá conectado exitosamente Power BI Desktop a una fuente de datos web y tendrá el Editor de Power Query abierto con los datos extraídos, preparado para aplicar las técnicas de transformación y limpieza que se abordarán en la Sección 4\.

**Sección 4: Transformación y Limpieza de Datos con Power Query**

Rara vez los datos se encuentran en un formato perfecto para el análisis directo. La transformación y limpieza de datos es un paso crítico en el proceso de BI, y Power Query es la herramienta integrada en Power BI para esta tarea.

**4.1 Introducción al Editor de Power Query**

El Editor de Power Query es un entorno potente y dedicado dentro de Power BI Desktop (y también disponible de forma más limitada en el Servicio Power BI para Dataflows) diseñado específicamente para la preparación de datos.18

* **Acceso:** Se accede principalmente en Power BI Desktop de dos maneras:
  * Seleccionando **"Transformar datos" (Transform Data)** inmediatamente después de conectarse a una fuente de datos.12
  * Si los datos ya están cargados en el modelo, yendo a la pestaña **"Inicio" (Home)** de Power BI Desktop y haciendo clic en el botón **"Transformar datos"**.19
* **Propósito:** Su función es permitir a los usuarios conectarse a diversas fuentes, y luego **limpiar, dar forma (shape) y transformar** los datos para que se ajusten a las necesidades del análisis antes de cargarlos en el modelo de datos final.2 Es importante destacar que las transformaciones realizadas en Power Query **no modifican los datos en la fuente original**; Power Query trabaja sobre una vista previa y aplica los pasos de transformación cuando se cargan los datos al modelo de Power BI.2
* **Interfaz del Editor:** La ventana del Editor de Power Query tiene una estructura distintiva 19:
  * **Cinta (Ribbon):** Similar a otras aplicaciones de Office, contiene pestañas como "Inicio", "Transformar", "Agregar columna" y "Vista", que agrupan cientos de operaciones de transformación disponibles.
  * **Panel de Consultas (Izquierda):** Muestra una lista de todas las consultas (que generalmente corresponden a tablas) que se están trabajando en la sesión actual. Se puede seleccionar una consulta para ver y transformar sus datos.
  * **Panel de Datos (Centro):** El área principal que muestra una vista previa de los datos de la consulta seleccionada. Aquí es donde se aplican muchas transformaciones directamente (ej. haciendo clic derecho en columnas).
  * **Panel de Configuración de Consulta (Derecha):** Es crucial. Muestra el nombre de la consulta actual y, lo más importante, la lista de **"Pasos Aplicados" (Applied Steps)**.
* **Pasos Aplicados (Applied Steps):** Esta es una de las características más potentes de Power Query. Cada acción de transformación que se realiza (eliminar una columna, filtrar filas, cambiar tipo de dato, etc.) se registra automáticamente como un paso secuencial en esta lista.19 Esto crea una "receta" de transformación para cada consulta. Se puede hacer clic en un paso anterior para ver cómo estaban los datos en ese punto, modificar la configuración de un paso (ej. cambiar un valor de reemplazo), reordenar pasos (con precaución) o eliminar pasos.19 Esta naturaleza basada en pasos hace que el proceso de limpieza sea repetible, auditable y fácil de modificar. En segundo plano, Power Query traduce estos pasos en código escrito en el **lenguaje M**.18
* **Editor Avanzado (Advanced Editor):** Para usuarios más avanzados, la pestaña "Vista" ofrece acceso al "Editor Avanzado".18 Esta ventana muestra el código M completo que Power Query ha generado para la consulta seleccionada a partir de los pasos aplicados. Permite ver la lógica subyacente y también editar o escribir código M directamente para realizar transformaciones personalizadas o complejas que podrían no estar disponibles a través de la interfaz gráfica.19 Si bien los principiantes se centrarán en la interfaz gráfica, es bueno saber que esta capacidad existe para futuras necesidades.

La filosofía de Power Query, basada en registrar una secuencia de pasos de transformación no destructivos 19, es fundamental. Permite experimentar con la limpieza de datos sabiendo que siempre se puede deshacer o ajustar un paso sin afectar la fuente original y asegura que el mismo proceso de limpieza se aplicará cada vez que se actualicen los datos.

**4.2 Tareas Comunes de Limpieza y Transformación**

Power Query ofrece una vasta cantidad de transformaciones.18 A continuación, se describen algunas de las más comunes y útiles para principiantes:

* **Seleccionar/Eliminar Columnas:** A menudo, las fuentes de datos contienen más columnas de las necesarias. Se pueden eliminar columnas irrelevantes para simplificar el modelo y mejorar el rendimiento.
  * *Cómo:* Clic derecho en el encabezado de la columna a eliminar \> "Quitar" (Remove), o seleccionar las columnas a *mantener* y luego clic derecho \> "Quitar otras columnas" (Remove Other Columns). También botones en la cinta "Inicio" \> "Administrar columnas".19
* **Renombrar Columnas:** Es fundamental dar nombres claros, descriptivos y consistentes a las columnas. Evitar espacios o caracteres especiales si es posible (usar CamelCase o guiones bajos).
  * *Cómo:* Doble clic en el encabezado de la columna, o clic derecho \> "Cambiar nombre" (Rename).18
* **Cambiar Tipos de Datos:** Power Query intenta detectar el tipo de dato de cada columna (Texto, Número entero, Número decimal, Fecha, Fecha/Hora, Verdadero/Falso, etc.), pero a veces se equivoca o necesita ajuste. Asegurar el tipo correcto es vital para los cálculos y el modelado posteriores.18
  * *Cómo:* Hacer clic en el icono de tipo de dato (ej. ABC, 123, 1.2, 📅) a la izquierda del nombre de la columna, o seleccionar la columna y usar el menú desplegable "Tipo de dato" en la cinta "Transformar" o "Inicio".
* **Filtrar Filas:** Eliminar filas que no son relevantes para el análisis o que contienen errores.
  * *Cómo:* Usar la flecha de filtro en el encabezado de la columna (similar a Excel) para aplicar filtros basados en valores (Filtros de texto, número o fecha).18 También se pueden eliminar filas específicas (ej. filas superiores, inferiores, duplicadas, en blanco, con errores) usando los botones en "Inicio" \> "Reducir filas" \> "Quitar filas".18
* **Reemplazar Valores:** Corregir errores tipográficos, estandarizar términos (ej. reemplazar "N/A", "Null", "" por un valor estándar) o codificar valores.18
  * *Cómo:* Clic derecho en la columna \> "Reemplazar los valores" (Replace Values), o botón en la cinta "Transformar".45 Introducir el valor a buscar y el valor de reemplazo.
* **Dividir Columnas:** Separar el contenido de una columna en múltiples columnas basado en un delimitador (ej. coma, espacio) o por un número fijo de caracteres.19 Útil cuando varios datos están concatenados en una sola columna (ej. "Ciudad, Estado").
  * *Cómo:* Seleccionar la columna \> Cinta "Transformar" o "Inicio" \> "Dividir columna" (Split Column) \> Elegir la opción (Por delimitador, Por número de caracteres, etc.).45
* **Combinar Consultas (Merge/Append):** Para trabajar con datos de múltiples tablas/consultas:
  * **Anexar (Append):** Apila las filas de dos o más tablas que tienen estructuras de columnas similares (mismos nombres y tipos de datos) en una sola tabla más grande.18
    * *Cómo:* Cinta "Inicio" \> "Anexar consultas" (Append Queries).
  * **Combinar (Merge):** Une dos tablas lado a lado basándose en valores coincidentes en una o más columnas clave (similar a un JOIN en SQL o BUSCARV/VLOOKUP en Excel, pero más potente).18 Permite traer columnas de una tabla a otra.
    * *Cómo:* Cinta "Inicio" \> "Combinar consultas" (Merge Queries). Se elige la segunda tabla y las columnas coincidentes en ambas.
* **Dinamizar/Anular Dinamización (Pivot/Unpivot):** Reestructurar tablas. Anular dinamización (Unpivot) es muy útil para transformar datos que están en formato de tabla cruzada (ej. meses en columnas) a un formato tabular (una columna para meses, una para valores), que es más adecuado para Power BI.18
  * *Cómo:* Seleccionar las columnas a anular dinamización (o las que *no* se van a anular) \> Cinta "Transformar" \> "Anular dinamización de columnas" (Unpivot Columns). Pivotar hace la operación inversa.
* **Agrupar (Group By):** Permite resumir (agregar) datos realizando operaciones como Suma, Promedio, Recuento, Mínimo, Máximo, etc., agrupados por los valores de una o más columnas categóricas.46
  * *Cómo:* Cinta "Transformar" o "Inicio" \> "Agrupar por" (Group By). Se especifican las columnas por las que agrupar y las agregaciones a realizar.
* **Agregar Columnas Calculadas (en Power Query):** Se pueden añadir nuevas columnas basadas en cálculos.
  * *Cómo:* Usar las opciones en la pestaña "Agregar columna" (Add Column).19 "Columna personalizada" (Custom Column) permite escribir fórmulas usando el lenguaje M. "Columna condicional" (Conditional Column) permite crear lógica if-then-else a través de una interfaz gráfica. También hay operaciones estándar como multiplicar, sumar, extraer partes de texto o fecha.45

**4.3 Tabla Resumen: Transformaciones Comunes en Power Query**

La siguiente tabla resume algunas de las transformaciones más frecuentes para principiantes y dónde encontrarlas en la interfaz del Editor de Power Query:

| Tarea | Ubicación Común en la Interfaz | Descripción Breve | Fuente(s) |
| :---- | :---- | :---- | :---- |
| Eliminar Columnas | Clic Derecho en Encabezado, Cinta Inicio ("Administrar Columnas") | Quita columnas innecesarias del conjunto de datos. | 19 |
| Renombrar Columna | Doble Clic / Clic Derecho en Encabezado | Cambia el nombre de una columna por uno más descriptivo o estándar. | 18 |
| Cambiar Tipo de Dato | Icono en Encabezado, Cinta Transformar/Inicio ("Tipo de dato") | Asegura que la columna se interprete correctamente (número, texto, fecha, etc.). | 18 |
| Filtrar Filas | Flecha de Filtro en Encabezado, Cinta Inicio ("Reducir filas") | Excluye filas basadas en valores o condiciones (ej. nulos, errores). | 18 |
| Reemplazar Valores | Clic Derecho en Columna, Cinta Transformar ("Reemplazar los valores") | Busca y reemplaza valores específicos dentro de una columna. | 18 |
| Dividir Columna | Cinta Transformar/Inicio ("Dividir columna") | Separa una columna en varias basado en delimitadores o longitud. | 19 |
| Anexar Tablas (Append) | Cinta Inicio ("Anexar consultas") | Combina filas de múltiples tablas (con estructura similar) en una sola tabla. | 18 |
| Combinar Tablas (Merge) | Cinta Inicio ("Combinar consultas") | Une columnas de dos tablas basándose en columnas clave coincidentes (JOIN). | 18 |
| Agrupar Datos (Group By) | Cinta Transformar/Inicio ("Agrupar por") | Resume datos realizando agregaciones (Suma, Promedio, Recuento) por categorías. | 46 |
| Agregar Columna Calculada | Pestaña "Agregar columna" (Custom, Conditional, Standard operations) | Crea nuevas columnas basadas en fórmulas o lógica condicional. | 19 |

Esta tabla sirve como una guía rápida para localizar y aplicar las operaciones de limpieza y transformación más esenciales al empezar con Power Query.

**4.4 Taller Práctico 3: Limpieza y Transformación de Datos de Ejemplo**

Este taller aplica las técnicas aprendidas para limpiar y preparar los datos conectados en el Taller 2 (datos web) o utilizando otro conjunto de datos que requiera transformaciones (por ejemplo, si el archivo Financial Sample tuviera columnas innecesarias o tipos de datos incorrectos, o si se usara un archivo CSV menos estructurado).

**Pasos:**

1. Asegurarse de que el Editor de Power Query esté abierto con los datos a transformar (ya sea continuando desde el Taller 2 o conectándose a una nueva fuente y eligiendo "Transformar datos").
2. **Inspeccionar los Datos:** Dedicar tiempo a revisar la vista previa de los datos.
   * ¿Los nombres de las columnas son claros? (ej. Column1, Column2 necesitan renombrarse).
   * ¿Los tipos de datos detectados son correctos? (ej. una columna numérica detectada como texto).
   * ¿Hay valores nulos (null), vacíos (blank) o errores (Error)?
   * ¿Hay columnas completamente innecesarias?
   * *Opcional:* Explorar las herramientas de **Perfilado de Datos** en la pestaña "Vista" (Calidad de columna, Distribución de columna, Perfil de columna) para obtener estadísticas rápidas sobre los datos.18
3. **Aplicar Transformaciones (Ejemplos):**
   * Seleccionar las columnas que no se necesitan y quitarlas (Clic derecho \> Quitar).
   * Renombrar las columnas restantes a nombres significativos (Doble clic en encabezado).
   * Hacer clic en el icono de tipo de dato en cada encabezado y seleccionar el tipo correcto (ej. Número decimal para precios, Fecha para fechas, Texto para nombres).
   * Usar la flecha de filtro en una columna para desmarcar (null) o (blank) si se desean eliminar esas filas. O usar "Inicio" \> "Quitar filas" \> "Quitar filas en blanco" / "Quitar errores".
   * Si se detectan erratas o inconsistencias (ej. "EE.UU." vs "USA"), usar Clic derecho \> "Reemplazar los valores".
   * Si una columna contiene, por ejemplo, "Ciudad, Estado", seleccionarla y usar "Dividir columna" \> "Por delimitador" (coma) para separarlas.
4. **Revisar Pasos Aplicados:** Observar cómo cada acción realizada se añade a la lista en el panel "Configuración de Consulta". Hacer clic en pasos anteriores para ver el estado de los datos en ese punto. Si se comete un error, se puede eliminar el último paso haciendo clic en la 'X' junto a él.
5. **Opcional (si aplica):** Si se han cargado múltiples tablas relacionadas (ej. Pedidos y Detalles de Pedidos), practicar "Combinar consultas" para traer información relevante de una tabla a otra. Si se tienen datos del mismo tipo en varias tablas (ej. Ventas Enero, Ventas Febrero), practicar "Anexar consultas".

**Resultado Esperado:** Al final de este taller, la consulta seleccionada debería contener datos limpios, con tipos de datos correctos, nombres de columna adecuados y sin información irrelevante. El usuario habrá practicado la aplicación de varias transformaciones fundamentales y entendido cómo funciona el sistema de "Pasos Aplicados" en Power Query.45

**4.5 Aplicar Cambios y Cargar Datos al Modelo**

Una vez que se han aplicado todas las transformaciones deseadas en el Editor de Power Query, el último paso es cargar estos datos limpios y estructurados al modelo de datos de Power BI Desktop, donde estarán disponibles para el modelado y la visualización.

* **Acción:** Dentro del Editor de Power Query, ir a la pestaña **"Inicio" (Home)** y hacer clic en el botón **"Cerrar y aplicar" (Close & Apply)**.47
* **Proceso:** Power Query ejecutará todos los pasos de transformación definidos en la secuencia correcta para cada consulta modificada. Luego, cargará los datos resultantes en el modelo de datos interno de Power BI Desktop. Este proceso puede tardar unos momentos dependiendo del volumen de datos y la complejidad de las transformaciones.
* **Verificación:** Después de que la ventana del Editor de Power Query se cierre, se volverá a la interfaz principal de Power BI Desktop. Las tablas transformadas aparecerán (o se actualizarán si ya existían) en el panel **"Campos" (Fields)** y se podrán inspeccionar en las vistas **"Datos" (Data)** y **"Modelo" (Model)**.47

El comando "Cerrar y aplicar" es el puente esencial que conecta la fase de preparación de datos en Power Query con las fases posteriores de modelado y visualización en Power BI Desktop.47 Hasta que no se ejecuta esta acción, las transformaciones definidas solo existen dentro del Editor de Power Query y no están disponibles en el resto de la herramienta.

**Sección 5: Modelado de Datos: Creando la Estructura**

Una vez que los datos están limpios y cargados en Power BI Desktop, el siguiente paso crucial es el modelado de datos. Esto implica organizar las tablas y definir cómo se relacionan entre sí para permitir análisis precisos y eficientes.

**5.1 Conceptos Básicos de Modelado**

El modelado de datos en Power BI se centra en construir una estructura lógica y coherente a partir de las tablas de datos importadas.2 Esta tarea se realiza principalmente en la **Vista Modelo (Model View)** de Power BI Desktop, que proporciona un lienzo visual para organizar las tablas y dibujar las relaciones entre ellas.19

Los componentes principales de un modelo de datos son las **Tablas**, las **Columnas** dentro de esas tablas y las **Relaciones** que las conectan.49 Un concepto fundamental en el modelado para BI, y muy relevante para Power BI, es la distinción entre:

* **Tablas de Hechos (Fact Tables):** Contienen las métricas numéricas y transaccionales que se desean analizar (ej. tabla de Ventas con columnas como Importe, Cantidad, Costo). Suelen tener muchas filas.
* **Tablas de Dimensiones (Dimension Tables):** Contienen atributos descriptivos que proporcionan contexto a los hechos (ej. tabla de Productos con NombreProducto, Categoría; tabla de Clientes con NombreCliente, Ciudad; tabla de Fechas con Año, Mes, Día). Suelen tener menos filas que las tablas de hechos y contienen claves únicas para cada entidad (ej. ID de Producto único).

Un diseño de modelo común y recomendado en Power BI es el **modelo en estrella (star schema)**, donde una tabla de hechos central está conectada a varias tablas de dimensiones a través de relaciones. Las relaciones típicamente fluyen desde las dimensiones (lado "uno") hacia los hechos (lado "muchos").

Un buen modelo de datos es la base indispensable para crear informes fiables y visualizaciones significativas.51 Facilita enormemente la escritura de cálculos DAX correctos y mejora el rendimiento general del informe.49 El modelado no consiste simplemente en conectar todas las tablas posibles, sino en estructurarlas de manera lógica (idealmente siguiendo principios como el modelo en estrella) para que el análisis sea intuitivo y preciso.49

Es importante reconocer que las decisiones tomadas durante la fase de transformación en Power Query tienen un impacto directo en el modelado. Por ejemplo, si no se separaron entidades lógicas (como Productos y Clientes) en tablas distintas en Power Query, será imposible crear relaciones adecuadas en la Vista Modelo. Si se dejaron columnas innecesarias, el modelo será más pesado y confuso. La calidad de la salida de Power Query determina en gran medida la facilidad y efectividad del modelado de datos. Existe una clara dependencia entre estas fases que el principiante debe comprender.

**5.2 Creación de Relaciones entre Tablas**

Una relación en Power BI es una conexión lógica entre dos tablas que se establece basándose en una o más columnas comunes (columnas clave) presentes en ambas tablas.50 Estas relaciones son las que permiten filtrar y agregar datos de una tabla basándose en la información de otra tabla relacionada. Por ejemplo, permiten calcular las ventas totales (de la tabla de Hechos de Ventas) para un producto específico (de la tabla de Dimensiones de Productos).

La **Vista Modelo (Model View)** en Power BI Desktop es el lugar principal donde se visualizan, crean y gestionan estas relaciones.19 Las tablas se representan como cajas y las relaciones como líneas que conectan las columnas clave entre ellas.50

Power BI Desktop intenta facilitar el proceso mediante la **Detección Automática (Autodetect)**. Al cargar nuevas tablas, Power BI examina los nombres y tipos de datos de las columnas para identificar posibles coincidencias entre tablas y crea relaciones automáticamente si encuentra coincidencias con un alto grado de confianza.50 Esta función se puede habilitar o deshabilitar en las opciones de Power BI Desktop.52 Sin embargo, la detección automática no es infalible y puede crear relaciones incorrectas o no detectar relaciones válidas si los nombres de las columnas no coinciden exactamente o si hay ambigüedad.50 Por ello, es fundamental **siempre revisar las relaciones creadas automáticamente y estar preparado para crearlas o modificarlas manualmente**.

Existen dos formas principales de **crear una relación manualmente** en la Vista Modelo:

1. **Arrastrar y Soltar:** Simplemente hacer clic en la columna clave de una tabla y arrastrar el cursor hasta la columna clave correspondiente en la otra tabla.50 Power BI dibujará la línea de relación.
2. **Botón "Administrar relaciones" (Manage Relationships):** En la pestaña "Modelado" (Modeling) de la cinta, seleccionar "Administrar relaciones" y luego "Nuevo" (New).50 Se abrirá el cuadro de diálogo "Crear relación", donde se seleccionan manualmente la primera tabla y su columna clave, y la segunda tabla y su columna clave.50

Para **editar una relación existente**, se puede:

* Hacer doble clic en la línea de relación en el diagrama de la Vista Modelo.52
* Seleccionar la línea de relación y usar el panel "Propiedades" (Properties) que aparece a la derecha (puede ser necesario expandirlo).50
* Usar el botón "Administrar relaciones", seleccionar la relación de la lista y hacer clic en "Editar" (Edit).50

Es importante destacar que la capacidad para crear o modificar relaciones de forma robusta es una característica fundamental de **Power BI Desktop**. El **Servicio Power BI** tiene capacidades de modelado muy limitadas; generalmente no se pueden crear o editar relaciones complejas directamente en el servicio web.21 Esto refuerza la idea de que el desarrollo del modelo de datos debe realizarse en Desktop. Si los datos requieren un modelado significativo (lo cual es casi siempre el caso para análisis interesantes), el trabajo debe comenzar o realizarse en Power BI Desktop.

**5.3 Entendiendo Cardinalidad y Dirección del Filtro**

Al crear o editar una relación, ya sea automáticamente por Power BI o manualmente por el usuario, se configuran varias opciones importantes que definen cómo funciona esa relación.50 Las dos más importantes para entender inicialmente son la Cardinalidad y la Dirección del Filtro Cruzado.

* **Cardinalidad:** Describe la naturaleza de los datos en las columnas relacionadas, indicando cuántas filas de una tabla pueden relacionarse con las filas de la otra tabla. Las opciones principales son:
  * **Muchos a uno (\*:1):** Esta es la cardinalidad más común y generalmente la deseada entre una tabla de hechos (muchos) y una tabla de dimensiones (uno). Significa que la columna clave en la tabla de dimensiones tiene valores únicos (ej. un ID de producto único), mientras que la columna clave en la tabla de hechos puede tener valores repetidos (ej. el mismo ID de producto aparece en muchas ventas).
  * **Uno a uno (1:1):** Cada valor en la columna clave es único en *ambas* tablas. Menos común, a veces indica que las tablas podrían combinarse.
  * **Uno a muchos (1:\*):** Es la inversa de muchos a uno.
  * **Muchos a muchos (\*:\*):** La columna clave en *ambas* tablas puede contener valores repetidos. Power BI permite este tipo de relación, pero debe usarse con precaución, ya que puede introducir ambigüedad en los cálculos y afectar negativamente el rendimiento. A menudo indica la necesidad de una tabla puente intermedia o una revisión del modelo.
* **Dirección del Filtro Cruzado (Cross filter direction):** Determina la dirección en la que los filtros se propagan a través de la relación.
  * **Única (Single):** Los filtros aplicados a la tabla del lado "uno" (dimensión) filtran la tabla del lado "muchos" (hechos), pero no al revés. Esta es la dirección predeterminada y la más recomendada en la mayoría de los casos, ya que conduce a modelos menos ambiguos y con mejor rendimiento.
  * **Ambas (Both):** Los filtros fluyen en ambas direcciones. Es decir, filtrar la tabla de hechos también puede filtrar la tabla de dimensiones. Aunque puede ser necesario en escenarios específicos (especialmente con relaciones de muchos a muchos o ciertos cálculos complejos), su uso debe ser considerado cuidadosamente, ya que puede crear rutas de filtrado ambiguas (bucles) o ralentizar los informes.
* **Activar/Desactivar Relación:** Normalmente, una relación está activa (línea continua) y se usa para la propagación de filtros por defecto. Power BI no permite múltiples rutas de filtrado activas entre dos tablas. Si existe más de una forma de relacionar dos tablas, solo una puede estar activa. Se pueden crear relaciones adicionales como inactivas (línea punteada). Estas relaciones inactivas no se usan para filtrar por defecto, pero pueden ser activadas explícitamente dentro de una fórmula DAX específica usando la función USERELATIONSHIP.

La configuración correcta de la cardinalidad y la dirección del filtro es absolutamente crucial.50 Si la cardinalidad se establece incorrectamente (ej. se marca como 1:1 cuando es \*:1) o la dirección del filtro no es la adecuada, los cálculos DAX y los filtros aplicados en las visualizaciones pueden producir resultados inesperados o incorrectos. Los principiantes deben prestar especial atención a validar estas configuraciones, especialmente las que Power BI detecta automáticamente. La preferencia general por la dirección 'Única' y la precaución con 'Ambas' y 'Muchos a muchos' guía hacia la construcción de modelos más simples y robustos (como el modelo en estrella), lo cual es una excelente práctica para empezar.

**5.4 Taller Práctico 4: Modelado de Datos con Tablas de Ejemplo**

Este taller se enfoca en aplicar los conceptos de modelado creando y configurando relaciones en Power BI Desktop.

Datos de Ejemplo:
Se necesitan al menos dos tablas que puedan relacionarse lógicamente. Se pueden usar:

* Las tablas ProjectHours y CompanyProject del tutorial descrito en 50 (copiándolas a Excel e importándolas).
* Tablas del archivo "Financial Sample" (si se cargó la tabla financials y quizás una tabla separada de Countries o Products si estuvieran disponibles o se crearan).
* Tablas de otros ejemplos descargables de Microsoft que contengan una estructura de hechos y dimensiones (ej. una tabla de Ventas, una tabla de Productos, una tabla de Fechas).

**Pasos:**

1. Abrir Power BI Desktop y asegurarse de que las tablas de ejemplo necesarias estén cargadas en el modelo (desde talleres anteriores o importándolas ahora).
2. Ir a la **Vista Modelo (Model View)** haciendo clic en el icono correspondiente a la izquierda. Se verán las tablas cargadas como cajas en el lienzo.
3. **Revisar Relaciones Automáticas:** Observar si Power BI ha dibujado líneas entre algunas tablas automáticamente. Si es así:
   * Hacer doble clic en la línea para abrir el cuadro de diálogo "Editar relación".
   * Verificar si las tablas y columnas seleccionadas son correctas.
   * Comprobar la **Cardinalidad** detectada (¿es \*:1, 1:1?) y la **Dirección del filtro cruzado** (¿es Única?). Asegurarse de que tengan sentido según el conocimiento de los datos. Corregir si es necesario.
   * Hacer clic en "Aceptar".
4. **Crear Relación Manual (si falta o es incorrecta):**
   * Identificar las columnas que deben conectar dos tablas (la clave primaria en la tabla de dimensión y la clave foránea en la tabla de hechos, ej. ProductID en la tabla Productos y ProductID en la tabla Ventas).
   * **Método 1 (Arrastrar y Soltar):** Hacer clic en la columna clave de la tabla de dimensión (lado "uno") y arrastrarla sobre la columna clave correspondiente en la tabla de hechos (lado "muchos"). Soltar el botón del ratón. Power BI creará la relación.
   * **Método 2 (Administrar Relaciones):** Ir a la pestaña "Modelado" \> "Administrar relaciones" \> "Nuevo". En el cuadro de diálogo "Crear relación", seleccionar la primera tabla (ej. Hechos) y su columna clave, luego la segunda tabla (ej. Dimensión) y su columna clave.52
5. **Configurar/Verificar la Relación Manual:** Si se usó arrastrar y soltar, hacer doble clic en la nueva línea para verificar/ajustar. Si se usó el diálogo, configurar allí mismo:
   * Asegurar que la **Cardinalidad** sea la correcta (probablemente Muchos a uno).
   * Asegurar que la **Dirección del filtro cruzado** sea "Única" (a menos que haya una razón específica para cambiarla).
   * Verificar que la opción "Activar esta relación" esté marcada.
   * Hacer clic en "Aceptar".
6. **Organizar el Lienzo:** Arrastrar las cajas de las tablas en la Vista Modelo para que el diseño sea claro y lógico. Una práctica común es colocar las tablas de dimensiones encima o alrededor de la tabla de hechos a la que se conectan, haciendo que el flujo de relaciones (usualmente hacia abajo o hacia el centro) sea fácil de seguir.
7. Repetir los pasos 4-6 para todas las relaciones necesarias en el modelo.

**Resultado Esperado:** Al finalizar este taller, el usuario tendrá un modelo de datos básico en Power BI Desktop con las tablas conectadas a través de relaciones correctamente definidas y configuradas. Esta estructura es esencial para poder realizar análisis que combinen información de diferentes tablas en los siguientes pasos con DAX y visualizaciones.

**Sección 6: Introducción a DAX: Cálculos Básicos**

Una vez que se tiene un modelo de datos con tablas relacionadas, el siguiente paso para enriquecer el análisis es crear cálculos personalizados utilizando DAX (Data Analysis Expressions). DAX permite ir más allá de los datos brutos y derivar nueva información y métricas clave.

**6.1 ¿Qué es DAX? Sintaxis Fundamental**

DAX es el lenguaje de fórmulas utilizado en Power BI (así como en SQL Server Analysis Services y Power Pivot para Excel).53 Se describe como una colección de **funciones, operadores y constantes** que se combinan para crear **fórmulas** o **expresiones** con el fin de calcular y devolver uno o más valores.53 El propósito principal de DAX es permitir a los usuarios **crear nueva información a partir de los datos ya existentes** en el modelo.53

Los usos más comunes de DAX en Power BI son para crear dos tipos de cálculos 15:

* **Columnas Calculadas (Calculated Columns):** Añaden una nueva columna a una tabla existente, cuyo valor se calcula fila por fila.
* **Medidas (Measures):** Definen un cálculo agregado (como una suma o un promedio) que se evalúa en el contexto de un informe o visualización.

DAX también se utiliza para crear **Tablas Calculadas** (tablas enteras generadas por una fórmula DAX) 49 y para definir reglas de **Seguridad a Nivel de Fila (Row-Level Security \- RLS)**, que restringen el acceso a los datos para diferentes usuarios.12

La **sintaxis** de DAX tiene algunas características clave 53:

* Las fórmulas siempre comienzan con un signo igual (=).
* Se utilizan nombres de funciones predefinidas (ej. SUM, AVERAGE, IF, CALCULATE, RELATED) seguidos de paréntesis ().
* Los argumentos requeridos por la función se colocan dentro de los paréntesis, separados por comas.
* Para referenciar una **columna**, se utiliza la sintaxis NombreTabla\[NombreColumna\]. Es decir, el nombre de la tabla seguido del nombre de la columna entre corchetes. Este se conoce como el "nombre completo" de la columna y es la forma recomendada para evitar ambigüedades.
* Para referenciar una **tabla** entera (necesario en algunas funciones), simplemente se usa su nombre. Si el nombre de la tabla contiene espacios o caracteres especiales, debe ir entre comillas simples (ej. 'Sales Details').
* Se pueden usar operadores aritméticos estándar (+, \-, \*, /) y operadores de comparación (=, \>, \<, \>=, \<=, \<\>).

Las fórmulas DAX se escriben en la **Barra de Fórmulas**, una interfaz que aparece en la parte superior de Power BI Desktop (en las vistas de Datos, Modelo o Informe) cuando se crea o edita una columna calculada o una medida.55 La barra de fórmulas ofrece IntelliSense (sugerencias de funciones y nombres) y se puede expandir para escribir fórmulas más largas o complejas en múltiples líneas.56

Un concepto fundamental que diferencia a DAX de las fórmulas de Excel es que DAX opera sobre **tablas y columnas completas**, no sobre celdas o rangos individuales.53 Por ejemplo, la función SUM en DAX requiere que se le especifique la columna completa que se desea sumar (SUM(Sales)), no un rango de celdas como SUM(C2:C100). Esta diferencia se debe a que Power BI trabaja con un modelo de datos relacional subyacente. Entender esto es crucial para pensar correctamente al escribir fórmulas DAX.

La sintaxis de referencia NombreTabla\[NombreColumna\] también subraya la importancia de haber realizado un buen trabajo en las fases anteriores de Power Query (limpieza y nombrado de columnas) y Modelado (creación de tablas y relaciones). Un modelo bien estructurado con nombres claros hace que la escritura y comprensión de fórmulas DAX sea mucho más sencilla.

**6.2 Columnas Calculadas vs. Medidas**

Aunque tanto las columnas calculadas como las medidas se crean usando fórmulas DAX, son fundamentalmente diferentes en cómo se calculan, dónde se almacenan y para qué se utilizan. Comprender esta diferencia es uno de los aspectos más importantes para los principiantes en DAX.53

**Columnas Calculadas (Calculated Columns):**

* **Cálculo y Almacenamiento:** Una columna calculada añade una nueva columna física a una tabla existente en el modelo de datos. Su valor se calcula **fila por fila** durante el proceso de carga o actualización de los datos. Una vez calculados, estos valores **se almacenan en el modelo**, ocupando espacio en la memoria RAM y aumentando el tamaño del archivo.pbix.54 Se recalculan solo cuando se actualizan los datos de la tabla.
* **Contexto de Cálculo:** Operan en lo que se llama **Contexto de Fila (Row Context)**.53 Esto significa que, al calcular el valor para una fila específica, la fórmula DAX tiene acceso a los valores de *otras columnas en esa misma fila* de la misma tabla (o de tablas relacionadas en el lado "uno" de una relación, usando la función RELATED).
* **Creación:** Se crean en Power BI Desktop seleccionando la tabla en la Vista de Datos o Modelo, y luego yendo a la pestaña "Herramientas de tabla" (Table Tools) y seleccionando "Nueva columna" (New Column).58 La fórmula se escribe en la barra de fórmulas con el formato NombreNuevaColumna \= FORMULA\_DAX.58
* **Uso Típico:** Son útiles cuando se necesita un valor que es específico de cada fila y que se quiere usar posteriormente como un **eje** en un gráfico, una **leyenda**, un **filtro** o una **agrupación**. Ejemplos incluyen:
  * Concatenar columnas de texto (ej. crear "Ciudad, Estado" a partir de columnas separadas 55).
  * Extraer partes de una fecha (Año, Mes, Día de la semana) para usarlas en ejes o filtros.58
  * Clasificar o categorizar filas basándose en algún criterio (ej. "Alto/Medio/Bajo" según el valor de otra columna).
  * Realizar cálculos matemáticos entre columnas de la misma fila (ej. PrecioTotal \= \[Cantidad\] \* \[PrecioUnitario\]).

**Medidas (Measures):**

* **Cálculo y Almacenamiento:** Una medida define un cálculo agregado que **no se almacena físicamente** en el modelo por fila. En cambio, se calcula **"al vuelo" (on-the-fly)** en el momento en que se utiliza en una visualización (o en otro cálculo DAX).53 El resultado depende del contexto en el que se evalúa. No aumentan significativamente el tamaño del modelo (solo almacenan la fórmula).
* **Contexto de Cálculo:** Operan principalmente en lo que se llama **Contexto de Filtro (Filter Context)**.53 Esto significa que el cálculo se realiza sobre el subconjunto de datos que resulta de aplicar todos los filtros activos en ese momento: los filtros aplicados por la propia visualización (ej. ejes, leyendas), los filtros de segmentadores (slicers) en la página, los filtros de otras visualizaciones interactuando, y los filtros definidos dentro de la propia fórmula DAX (especialmente con CALCULATE).
* **Creación:** Se crean en Power BI Desktop haciendo clic derecho sobre una tabla en el panel "Campos" (Fields) y seleccionando "Nueva medida" (New Measure), o usando el botón "Nueva medida" en las pestañas "Inicio" o "Modelado".56 La fórmula se escribe en la barra de fórmulas con el formato NombreMedida \= FORMULA\_DAX\_AGREGADA.56 Las medidas aparecen en el panel Campos con un icono de calculadora.
* **Uso Típico:** Son ideales para calcular **agregaciones** y **KPIs** que necesitan responder dinámicamente a la interacción del usuario en el informe. Ejemplos incluyen:
  * Suma total de ventas (SUM(Ventas\[Importe\])).53
  * Promedio de precio (AVERAGE(Productos\[Precio\])).
  * Recuento de clientes distintos (DISTINCTCOUNT(Ventas\[IDCliente\])).
  * Porcentaje de margen (DIVIDE(SUM(Ventas), SUM(Ventas\[Importe\]))).
  * Cálculos de inteligencia de tiempo (Ventas Año Anterior, Crecimiento vs Año Anterior).53

La elección entre una columna calculada y una medida depende del resultado deseado. Si se necesita un valor estático por fila para usar en ejes o filtros, se usa una columna calculada. Si se necesita un valor agregado que cambie dinámicamente según los filtros del informe, se usa una medida. Como regla general, para mantener los modelos eficientes, se prefiere **usar medidas para las agregaciones** siempre que sea posible, y reservar las columnas calculadas para atributos a nivel de fila que sean realmente necesarios para filtrar o agrupar.

**6.3 Tabla Resumen: Funciones DAX Básicas para Principiantes**

DAX cuenta con cientos de funciones, pero para empezar, es útil conocer algunas de las más fundamentales:

| Función | Descripción | Tipo Principal | Fuente(s) |
| :---- | :---- | :---- | :---- |
| SUM | Suma todos los números en una columna. | Agregación | 53 |
| AVERAGE | Calcula el promedio aritmético de los números en una columna. | Agregación | (Común) |
| COUNT | Cuenta el número de filas en una columna que contienen números. | Agregación | (Común) |
| COUNTA | Cuenta el número de filas en una columna que no están vacías. | Agregación | (Común) |
| DISTINCTCOUNT | Cuenta el número de valores únicos (distintos) en una columna. | Agregación | (Común) |
| MIN | Devuelve el valor numérico o de fecha más pequeño en una columna. | Agregación | (Común) |
| MAX | Devuelve el valor numérico o de fecha más grande en una columna. | Agregación | (Común) |
| IF | Comprueba si se cumple una condición y devuelve un valor si es VERDADERO, y otro valor si es FALSO. | Lógica | 58 |
| RELATED | Devuelve un valor relacionado desde otra tabla (del lado "uno" de una relación). Usada en columnas calculadas. | Relacional | (Común) |
| CALCULATE | Evalúa una expresión (generalmente una medida) en un contexto de filtro modificado. ¡Muy potente\! | Modificador Filtro | 53 |
| DIVIDE | Realiza una división y permite especificar un resultado alternativo en caso de división por cero (segura). | Matemática | (Común) |
| YEAR | Devuelve el año de una fecha como un número entero. | Fecha y Hora | 54 |
| MONTH | Devuelve el mes de una fecha como un número del 1 (enero) al 12 (diciembre). | Fecha y Hora | 54 |
| DAY | Devuelve el día del mes de una fecha como un número del 1 al 31\. | Fecha y Hora | 54 |
| TODAY | Devuelve la fecha actual. | Fecha y Hora | 54 |
| FORMAT | Convierte un valor en texto con un formato específico (ej. formato de fecha "mmmm" para nombre del mes). | Texto / Formato | (Útil) |
| SAMEPERIODLASTYEAR | Devuelve un conjunto de fechas del año anterior correspondiente a las fechas en la columna especificada. Usada con CALCULATE. | Inteligencia Tiempo | (Útil) |
| PREVIOUSQUARTER | Devuelve un conjunto de fechas del trimestre anterior. Usada con CALCULATE. | Inteligencia Tiempo | 53 |

Esta lista proporciona un punto de partida sólido para que los principiantes comiencen a escribir sus primeras fórmulas DAX en los talleres prácticos, cubriendo agregaciones básicas, lógica condicional, navegación de relaciones simple y manipulación básica de fechas. La función CALCULATE se introduce por su importancia, aunque su dominio completo requiere más estudio.

**6.4 Taller Práctico 5: Crear Columnas Calculadas Sencillas**

Este taller se enfoca en la práctica de crear columnas calculadas utilizando DAX en Power BI Desktop.

**Datos:** Utilizar el modelo de datos preparado en el Taller 4 (con relaciones definidas) o el archivo "Financial Sample" cargado previamente. Se asume que existe una tabla con fechas (o se puede crear una tabla de calendario básica).

**Pasos:**

1. Abrir el archivo.pbix en Power BI Desktop.
2. Ir a la **Vista de Datos (Data View)** haciendo clic en el icono correspondiente.
3. En el panel "Campos" (Fields) a la derecha, seleccionar la tabla donde se desea añadir la nueva columna. Por ejemplo, seleccionar la tabla de Fechas (si existe) o la tabla principal (ej. financials).
4. Con la tabla seleccionada, ir a la pestaña **"Herramientas de tabla" (Table Tools)** en la cinta de opciones y hacer clic en **"Nueva columna" (New Column)**.
5. Aparecerá la barra de fórmulas en la parte superior. Escribir la fórmula DAX para la nueva columna. Aquí algunos ejemplos (ajustar nombres de tabla y columna según el modelo):
   * **Ejemplo 1: Año Fiscal (en tabla de Fechas con columna \[Date\])** 58: AñoFiscal \= "FY" & YEAR('financials'\[Date\]) \+ IF(MONTH('financials'\[Date\]) \> 6, 1, 0\) *(Esta fórmula crea un año fiscal que empieza en Julio. Asigna "FY" seguido del año. Si el mes es posterior a Junio (7-12), suma 1 al año.)*
   * **Ejemplo 2: Nombre del Mes (en tabla de Fechas con columna \[Date\])**: NombreMes \= FORMAT('financials'\[Date\], "mmmm") *(Usa la función FORMAT para mostrar el nombre completo del mes.)*
   * **Ejemplo 3: Precio Total (en tabla financials si tiene y)**: PrecioTotalFila \= financials \* financials *(Calcula el producto de dos columnas en la misma fila.)*
   * **Ejemplo 4: Categoría de Descuento (en tabla financials con columna)**: TipoDescuento \= IF(financials \= "None", "Sin Descuento", "Con Descuento") *(Usa IF para crear una categoría simple basada en el valor de otra columna.)*
6. Después de escribir cada fórmula, presionar **Enter**. La nueva columna se calculará y aparecerá en la tabla en la Vista de Datos.
7. Verificar visualmente que los valores calculados en la nueva columna parecen correctos para algunas filas.

**Resultado Esperado:** El usuario habrá añadido exitosamente una o más columnas calculadas a sus tablas, aplicando fórmulas DAX básicas. Habrá practicado la sintaxis de DAX para columnas calculadas y comprendido cómo operan en el contexto de fila para derivar nueva información a partir de datos existentes.

**6.5 Taller Práctico 6: Crear Medidas Básicas**

Este taller se centra en crear medidas, que son cálculos agregados esenciales para los informes.

**Datos:** Utilizar el mismo modelo de datos del taller anterior, asegurándose de que las relaciones estén definidas correctamente.

**Pasos:**

1. Permanecer en Power BI Desktop. Se puede estar en la Vista de Informe, Datos o Modelo.
2. En el panel **"Campos" (Fields)**, localizar la tabla principal que contiene los valores numéricos a agregar (normalmente la tabla de hechos, ej. financials).
3. Hacer clic derecho sobre el nombre de esa tabla y seleccionar **"Nueva medida" (New Measure)**.56 Alternativamente, seleccionar la tabla y usar el botón "Nueva medida" en la cinta "Inicio" o "Modelado".56
4. Aparecerá la barra de fórmulas. Escribir la fórmula DAX para la medida. Aquí algunos ejemplos (ajustar nombres de tabla y columna):
   * **Ejemplo 1: Ventas Totales** 53: Ventas Totales \= SUM(financials)
   * **Ejemplo 2: Unidades Vendidas Totales**: Unidades Totales \= SUM(financials)
   * **Ejemplo 3: Precio de Venta Promedio**: Precio Promedio Venta \= AVERAGE(financials)
   * **Ejemplo 4: Número de Segmentos Distintos**: Num Segmentos \= DISTINCTCOUNT(financials)
   * **Ejemplo 5: Beneficio Neto (si hay Sales y COGS)**: Beneficio Neto \= SUM(financials) \- SUM(financials) *(Se pueden combinar agregaciones simples)*
   * **Ejemplo 6: Ventas en USA (usando CALCULATE)** 53: Ventas USA \= CALCULATE(, financials\[Country\] \= "United States of America") *(Introduce un filtro simple dentro de CALCULATE)*
5. Después de escribir cada fórmula, presionar **Enter**. La medida se creará y aparecerá en la lista de campos de la tabla seleccionada, con un icono de calculadora.
6. **Aplicar Formato:** Para que las medidas se muestren correctamente en las visualizaciones, es importante aplicarles formato. Seleccionar la medida recién creada en el panel "Campos". Aparecerá la cinta contextual **"Herramientas de medición" (Measure Tools)**. Usar las opciones de formato para definir:
   * Tipo de moneda (si aplica).
   * Número de posiciones decimales.58
   * Separador de miles.
   * Formato de porcentaje (si es un ratio).
7. Repetir los pasos 3-6 para crear varias medidas clave para el análisis.

**Resultado Esperado:** El usuario habrá creado un conjunto de medidas DAX básicas que realizan agregaciones sobre los datos. Comprenderá la diferencia entre escribir una fórmula para una medida y una columna calculada, y sabrá cómo aplicar formato a las medidas para su correcta visualización en los informes. Estas medidas estarán listas para ser utilizadas en el Taller 7\.

**Sección 7: Creación de Informes Interactivos**

Con los datos limpios, modelados y enriquecidos con cálculos DAX, es el momento de visualizarlos creando informes interactivos. Esta es la fase donde los datos cobran vida y se convierten en insights comunicables.

**7.1 La Vista de Informe (Desktop y Service)**

La **Vista de Informe (Report View)** es el lienzo digital donde se diseñan y construyen los informes en Power BI.12 Es el espacio donde se combinan visualizaciones de datos, texto e imágenes para contar una historia coherente y permitir la exploración interactiva.

* **Disponibilidad:** Esta vista es central tanto en **Power BI Desktop** (donde se realiza la mayor parte del diseño y desarrollo) como en el **Servicio Power BI** (donde los informes se consumen y también se pueden editar, aunque con algunas limitaciones comparadas con Desktop).13
* **Componentes (Desktop):** La interfaz de la Vista de Informe en Desktop incluye 6:
  * El **Lienzo (Canvas):** El área principal donde se arrastran y colocan las visualizaciones.
  * El **Panel de Visualizaciones (Visualizations):** Ofrece la selección de tipos de gráficos y los "pocillos" (wells) para asignarles campos de datos (Eje X, Eje Y, Leyenda, Valores, etc.). También incluye la pestaña de **Formato** (icono de rodillo/brocha) para personalizar la apariencia de la visualización seleccionada.
  * El **Panel de Campos (Fields):** Lista todas las tablas, columnas y medidas del modelo de datos, listas para ser usadas en las visualizaciones.
  * El **Panel de Filtros (Filters):** Permite aplicar filtros a nivel de visualización individual, a toda la página actual o a todas las páginas del informe.
  * La **Cinta (Ribbon):** Proporciona acceso a comandos adicionales para insertar elementos (texto, formas, botones), gestionar temas, publicar, etc.
* **Componentes (Service \- Modo Edición):** Al editar un informe en el Servicio Power BI, la interfaz es muy similar a la de Desktop, con los mismos paneles principales (Visualizaciones, Campos, Filtros) integrados en el navegador.15 Sin embargo, algunas opciones avanzadas de formato o configuración disponibles en Desktop podrían no estar presentes o funcionar de manera idéntica en el Service.14
* **Páginas:** Un informe de Power BI puede constar de **múltiples páginas**, cada una con su propio conjunto de visualizaciones, enfocadas quizás en diferentes aspectos del análisis.6 Se navega entre las páginas usando las pestañas ubicadas en la parte inferior del lienzo.6

La creación de informes no es solo una tarea técnica de arrastrar y soltar campos; es un proceso de **diseño visual y comunicación**.4 El objetivo es elegir las visualizaciones más adecuadas para los datos y el mensaje que se quiere transmitir, organizarlas de manera lógica y clara, y facilitar la comprensión y exploración por parte de la audiencia. Aunque la creación/edición es posible en el Servicio 11, la experiencia más rica, fluida y con mayor control sigue estando en Power BI Desktop 13, lo que refuerza el flujo de trabajo que prioriza el desarrollo en Desktop.

**7.2 Añadir y Configurar Visualizaciones Comunes**

El corazón de un informe de Power BI son sus visualizaciones. El proceso básico para añadirlas es:

1. Seleccionar el tipo de visualización deseado haciendo clic en su icono en el **Panel de Visualizaciones**.6 Aparecerá un contenedor vacío en el lienzo.
2. Con la visualización seleccionada, arrastrar los campos (columnas o medidas) desde el **Panel de Campos** hasta los "pocillos" (áreas designadas como Eje X, Eje Y, Leyenda, Valores, Tooltips, etc.) en el Panel de Visualizaciones.6 Power BI representará los datos según la configuración.

Power BI ofrece una amplia gama de visualizaciones integradas (más de 30 según 59). Algunas de las más comunes para principiantes incluyen:

* **Gráficos de Barras y Columnas (Agrupadas, Apiladas, 100% Apiladas):** Excelentes para comparar valores entre diferentes categorías.46 Las barras horizontales son buenas para nombres de categoría largos.
* **Gráficos de Líneas:** Ideales para mostrar tendencias y cambios a lo largo del tiempo (fechas, meses, años).15
* **Gráficos de Área:** Similares a los de línea, pero rellenan el área bajo la línea, útiles para mostrar la magnitud del cambio.
* **Gráficos Circulares y de Anillo:** Muestran la proporción de cada categoría respecto a un total. Deben usarse con precaución, generalmente con pocas categorías (menos de 5-6) para ser efectivos.
* **Tablas (Table):** Muestran datos detallados en filas y columnas, similar a una hoja de cálculo.58 Útiles para ver valores exactos.
* **Matrices (Matrix):** Similares a las tablas dinámicas de Excel. Permiten mostrar datos agregados con encabezados de fila y columna, y expandir/contraer jerarquías.
* **Tarjetas (Card):** Diseñadas para mostrar un único valor numérico agregado muy importante (un KPI, un total general) de forma destacada.39 Existe también la tarjeta de "varias filas".
* **Mapas:** Para visualizar datos geográficos. Incluyen Mapas básicos (puntos o burbujas sobre un mapa) y Mapas Coropléticos (regiones coloreadas según un valor).15
* **Segmentadores (Slicer):** No muestran datos per se, sino que proporcionan controles interactivos (botones, listas, controles deslizantes) que permiten al usuario filtrar fácilmente los datos de la página del informe.26

Además de las visualizaciones integradas, se pueden importar **Visualizaciones Personalizadas (Custom Visuals)** desde el mercado integrado (AppSource) directamente desde el panel de Visualizaciones.39 Algunas son gratuitas, otras de pago; algunas están certificadas por Microsoft (han pasado pruebas de seguridad y rendimiento).39 Herramientas como **Deneb** permiten incluso crear visualizaciones altamente personalizadas usando lenguajes de descripción de gráficos como Vega o Vega-Lite.61

Recientemente, la funcionalidad **Copilot** (actualmente en preview) puede asistir en la creación de informes, sugiriendo visualizaciones o incluso generando páginas enteras basadas en una descripción en lenguaje natural.10

La elección del tipo de visualización correcto es fundamental. No se trata solo de lo que se ve bien, sino de lo que mejor representa los datos y facilita la comprensión del mensaje que se quiere comunicar.59 Un gráfico de barras es bueno para comparaciones, uno de líneas para tendencias, una tabla para detalles precisos, un mapa para geografía, etc. La capacidad emergente de usar Copilot 10 puede acelerar el proceso, pero sigue siendo esencial tener los conocimientos fundamentales para evaluar si la visualización sugerida es la adecuada y para refinarla según sea necesario.

**7.3 Formato Básico e Interactividad**

Crear un informe efectivo va más allá de simplemente colocar gráficos en una página. El formato y la interactividad son clave para la usabilidad y la capacidad de exploración.

* **Formato:**
  * Cada visualización se puede personalizar extensamente. Al seleccionar una visualización, el **Panel de Formato** (icono de rodillo/brocha en el Panel de Visualizaciones) ofrece múltiples opciones.26 Se pueden ajustar:
    * Títulos (texto, fuente, alineación).
    * Ejes (escalas, etiquetas, títulos).
    * Colores de datos (individuales o por serie).
    * Etiquetas de datos (mostrar valores directamente en el gráfico).
    * Leyendas (posición, título).
    * Fondo, Bordes, Sombras.
    * Y muchas otras opciones específicas de cada tipo de visual.
  * Para mantener la consistencia visual en todo el informe, se pueden aplicar **Temas (Themes)**. Un tema define una paleta de colores predeterminada, estilos de fuente y otras propiedades de formato que se aplican a todas las visualizaciones. Se pueden elegir temas predefinidos (pestaña "Ver" \> "Temas") o crear/importar temas personalizados.15
  * Las **Tablas y Matrices** ofrecen opciones de **Formato Condicional** (ej. colorear celdas según su valor, añadir barras de datos o iconos) para resaltar información importante.15
* **Interactividad:** Una de las grandes fortalezas de Power BI es la interactividad inherente entre las visualizaciones.16
  * **Filtrado Cruzado y Resaltado Cruzado (Cross-filtering / Cross-highlighting):** Por defecto, al seleccionar un elemento en una visualización (ej. una barra en un gráfico de barras, una sección en un gráfico circular, una fila en una tabla), las demás visualizaciones en la misma página se filtran o resaltan automáticamente para mostrar solo los datos relacionados con esa selección.62 Este comportamiento se puede ajustar en las opciones de interacción de las visualizaciones.
  * **Panel de Filtros (Filters Pane):** Permite a los creadores de informes definir filtros persistentes que se aplican a una visualización específica, a toda la página o a todas las páginas del informe. Estos filtros pueden ser visibles y modificables por el usuario final o pueden estar ocultos.6
  * **Segmentadores (Slicers):** Son un tipo especial de visualización cuyo único propósito es actuar como un filtro interactivo en la página.26 Ofrecen una forma muy visual e intuitiva para que los usuarios seleccionen los datos que desean ver (ej. seleccionar un año, una región, un producto).
  * **Exploración en Profundidad (Drill-down / Drill-up):** Si los datos tienen una jerarquía definida (ej. Año \> Trimestre \> Mes, o Categoría \> Subcategoría \> Producto), las visualizaciones pueden configurarse para permitir al usuario navegar hacia arriba y hacia abajo en esa jerarquía, pasando de una vista general a una más detallada y viceversa.16
  * **Obtención de Detalles (Drill-through):** Permite configurar una visualización para que, al hacer clic derecho en un punto de datos, el usuario pueda navegar a una página de informe diferente (una página de "detalles") que se filtra automáticamente según el punto de datos seleccionado.
  * **Marcadores (Bookmarks):** Permiten capturar y guardar un estado específico de una página de informe (incluyendo filtros, segmentaciones, ordenación, visibilidad de objetos). Los usuarios (o el creador) pueden luego volver fácilmente a esa vista guardada haciendo clic en el marcador.26 Se pueden usar para crear navegación personalizada o contar historias guiadas.

La interactividad es lo que transforma un informe de Power BI de una imagen estática a una herramienta de exploración de datos.16 Un diseño de informe exitoso considera cuidadosamente no solo qué visualizaciones usar, sino también cómo formatearlas para que sean claras y cómo configurar las interacciones (filtros, segmentadores, exploración) para guiar al usuario y permitirle responder a sus propias preguntas de manera intuitiva.26

**7.4 Taller Práctico 7: Construir un Informe Básico Interactivo**

Este taller consolida lo aprendido creando un informe interactivo de una página en Power BI Desktop.

**Datos:** Utilizar el modelo de datos creado y enriquecido en los talleres anteriores (Taller 4: Modelado, Taller 5: Columnas Calculadas, Taller 6: Medidas). Asegurarse de que el archivo.pbix esté abierto.

**Pasos:**

1. Ir a la **Vista de Informe (Report View)** en Power BI Desktop. Si hay varias páginas, asegurarse de estar en una página en blanco o crear una nueva (+).
2. **Añadir un Título:** Ir a la pestaña "Insertar" (Insert) \> "Cuadro de texto" (Text Box). Escribir un título descriptivo para el informe (ej. "Informe de Ventas Financieras"). Formatear el texto (tamaño, fuente, negrita).
3. **Añadir Tarjetas de KPI:**
   * Seleccionar la visualización "Tarjeta" (Card) del panel de Visualizaciones.
   * Arrastrar una medida clave (ej. \`\` creada en Taller 6\) al campo "Fields" de la tarjeta.
   * Repetir para otras 2-3 medidas importantes (ej. ,, \[Precio Promedio Venta\]).
   * Seleccionar cada tarjeta y usar el panel de Formato para ajustar el tamaño de la etiqueta de datos, el título de la categoría, etc. Alinear las tarjetas en la parte superior de la página.
4. **Añadir Gráfico de Tendencia:**
   * Seleccionar la visualización "Gráfico de líneas" (Line chart).
   * Arrastrar la columna de fecha (ej. financials\[Date\]) al pocillo "Eje X". Power BI creará automáticamente una jerarquía de fechas (Año, Trimestre, Mes, Día).
   * Arrastrar la medida \`\` al pocillo "Eje Y".
   * Formatear el gráfico: añadir un título claro ("Ventas Totales por Fecha"), ajustar etiquetas de ejes.
5. **Añadir Gráfico de Comparación Categórica:**
   * Seleccionar la visualización "Gráfico de barras agrupadas" (Clustered bar chart) o "Gráfico de columnas agrupadas" (Clustered column chart).
   * Arrastrar una columna categórica de una tabla de dimensión (si existe, ej. financials\[Product\] o financials) al pocillo "Eje Y" (barras) o "Eje X" (columnas).
   * Arrastrar la medida \`\` al pocillo "Eje X" (barras) o "Eje Y" (columnas).
   * Formatear el gráfico (título, colores si se desea).
6. **Añadir Tabla de Detalles:**
   * Seleccionar la visualización "Tabla" (Table).
   * Arrastrar varias columnas y/o medidas que proporcionen detalles interesantes (ej. financials\[Product\], financials\[Country\], ,, \`\`).
   * Ajustar el ancho de las columnas.
   * *Opcional:* Explorar el formato condicional (seleccionar la tabla \> panel Formato \> Elementos de celda) para, por ejemplo, añadir barras de datos a una columna numérica.
7. **Añadir un Segmentador (Slicer):**
   * Seleccionar la visualización "Segmentación de datos" (Slicer).
   * Arrastrar una columna que sea útil para filtrar, como financials\[Country\] o la columna \[AñoFiscal\] creada en Taller 5, al pocillo "Campo".
   * Formatear el segmentador (ej. cambiar de lista a menú desplegable en el panel de Formato \> Configuración de la segmentación \> Estilo). Colocarlo en un lugar accesible (ej. a la izquierda o arriba).
8. **Aplicar Formato General y Organizar:**
   * Ir a la pestaña "Ver" (View) \> "Temas" (Themes) y seleccionar un tema predefinido para dar una apariencia consistente.
   * Ajustar manualmente colores o fuentes si se desea.
   * Asegurarse de que todas las visualizaciones tengan títulos claros y legibles.
   * Organizar las visualizaciones en el lienzo de forma lógica y estéticamente agradable. Evitar el desorden.
9. **Probar la Interactividad:**
   * Hacer clic en un país en el segmentador. Observar cómo todas las demás visualizaciones (tarjetas, gráficos, tabla) se actualizan para mostrar solo los datos de ese país.
   * Hacer clic en una barra del gráfico de barras (ej. un producto). Observar cómo las otras visualizaciones se resaltan o filtran para reflejar esa selección.
   * Probar a explorar en profundidad (drill-down) en el gráfico de líneas si se está usando la jerarquía de fechas (buscar los iconos de flecha en la esquina superior del gráfico).
10. **Guardar el Informe:** Ir a "Archivo" (File) \> "Guardar" (Save) o "Guardar como" (Save As) para guardar el trabajo en un archivo .pbix.29

**Resultado Esperado:** El usuario habrá creado su primer informe de Power BI funcional, interactivo y visualmente organizado en Power BI Desktop. Este informe, guardado como archivo.pbix, contendrá varias visualizaciones conectadas, utilizará las medidas creadas previamente y permitirá la exploración básica de los datos a través de segmentadores y filtrado cruzado. Estará listo para ser publicado en el Servicio Power BI. 45 ofrecen ejemplos visuales de informes terminados.

**Sección 8: Creación y Uso de Paneles (Dashboards) en Power BI Service**

Mientras que los informes (creados principalmente en Desktop) son ideales para la exploración detallada, el Servicio Power BI ofrece una herramienta complementaria llamada **Panel (Dashboard)**, diseñada para la monitorización de alto nivel.

**8.1 Diferencia entre Informes y Paneles (Dashboards)**

Es fundamental entender la distinción entre estos dos tipos de contenido en Power BI 16:

* **Informe (Report):**
  * **Estructura:** Una o más páginas interconectadas.
  * **Fuente de Datos:** Basado en un **único** modelo semántico subyacente.
  * **Propósito:** Exploración profunda, análisis detallado, descubrimiento de insights.
  * **Interactividad:** Muy alta (filtrado cruzado, resaltado, segmentadores, drill-down, drill-through).
  * **Creación:** Principalmente en Power BI Desktop, también editable en el Servicio Power BI.
* **Panel (Dashboard):**
  * **Estructura:** Un lienzo de **una sola página**.
  * **Fuente de Datos:** Puede mostrar visualizaciones (llamadas "iconos" o "tiles") provenientes de **uno o varios** informes y, por lo tanto, potencialmente de **múltiples** modelos semánticos.
  * **Propósito:** Monitorización de un vistazo, vista consolidada de métricas clave (KPIs) de diferentes áreas.
  * **Interactividad:** Limitada. Hacer clic en un icono generalmente **navega al informe** o página subyacente de donde proviene ese icono para una exploración más detallada. No hay filtrado cruzado directo entre iconos de diferentes informes.
  * **Creación:** Se crea **exclusivamente** en el Servicio Power BI, anclando elementos desde informes publicados.

En resumen, los informes son para explorar y analizar en detalle un conjunto de datos, mientras que los paneles son para obtener una visión rápida y consolidada del estado general, actuando como un "cuadro de mando".16 Esta diferencia de propósito se refleja en sus distintas capacidades y métodos de creación. La existencia de los paneles depende de que primero existan informes publicados en el Servicio Power BI, ya que se construyen a partir de ellos.15

**8.2 Anclar Visualizaciones a un Panel**

El proceso para construir un panel consiste en "anclar" (pin) visualizaciones individuales o páginas enteras desde los informes publicados al lienzo del panel.

**Pasos para Anclar una Visualización Individual:**

1. Abrir el informe deseado dentro del Servicio Power BI (puede estar en vista de lectura o edición).15
2. Pasar el cursor del ratón sobre la visualización que se desea incluir en el panel.
3. Aparecerán varios iconos sobre la visualización; hacer clic en el icono con forma de **chincheta (Pin visual)**.15
4. Se abrirá un cuadro de diálogo "Anclar al panel"

#### **Obras citadas**

1. learn.microsoft.com, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/training/powerplatform/power-bi\#:\~:text=Microsoft%20Power%20BI%20es%20una,coherente%2C%20interactiva%20y%20atractiva%20visualmente.](https://learn.microsoft.com/es-es/training/powerplatform/power-bi#:~:text=Microsoft%20Power%20BI%20es%20una,coherente%2C%20interactiva%20y%20atractiva%20visualmente.)
2. Training for Power BI | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/powerplatform/power-bi](https://learn.microsoft.com/en-us/training/powerplatform/power-bi)
3. What is Power BI? \- Power BI | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview](https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview)
4. Get started building with Power BI \- Training | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/](https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/)
5. Describe the capabilities of Microsoft Power BI \- Training, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/modules/introduction-power-bi/](https://learn.microsoft.com/en-us/training/modules/introduction-power-bi/)
6. Tutorial de Power BI para principiantes \- DataCamp, fecha de acceso: mayo 1, 2025, [https://www.datacamp.com/es/tutorial/tutorial-power-bi-for-beginners](https://www.datacamp.com/es/tutorial/tutorial-power-bi-for-beginners)
7. Power BI: visualización de datos | Microsoft Power Platform, fecha de acceso: mayo 1, 2025, [https://www.microsoft.com/es-es/power-platform/products/power-bi](https://www.microsoft.com/es-es/power-platform/products/power-bi)
8. Introducción a Power BI \- Microsoft, fecha de acceso: mayo 1, 2025, [https://www.microsoft.com/es-es/power-platform/products/power-bi/getting-started-with-power-bi](https://www.microsoft.com/es-es/power-platform/products/power-bi/getting-started-with-power-bi)
9. Introducción al aprendizaje de Power BI \- Microsoft, fecha de acceso: mayo 1, 2025, [https://www.microsoft.com/es-es/power-platform/products/power-bi/learning](https://www.microsoft.com/es-es/power-platform/products/power-bi/learning)
10. Power BI documentation \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/](https://learn.microsoft.com/en-us/power-bi/)
11. What is the Power BI service? \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview](https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview)
12. Get started with Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-getting-started](https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-getting-started)
13. Comparing Power BI Desktop and the Power BI service \- Power BI ..., fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/service-service-vs-desktop](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-service-vs-desktop)
14. Power BI Desktop vs Service: What's the Difference? \- Tech Efficiency Solutions, fecha de acceso: mayo 1, 2025, [https://www.techefficiencysolutions.com/blog/power-bi-desktop-vs-power-bi-service/](https://www.techefficiencysolutions.com/blog/power-bi-desktop-vs-power-bi-service/)
15. Tutorial: Get started creating in the Power BI service \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started)
16. Basics of the Power BI service \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts)
17. What are the major components of Power BI? \- Microsoft Fabric Community, fecha de acceso: mayo 1, 2025, [https://community.powerbi.com/t5/Desktop/What-are-the-major-components-of-Power-BI/td-p/3032281](https://community.powerbi.com/t5/Desktop/What-are-the-major-components-of-Power-BI/td-p/3032281)
18. Clean, transform, and load data in Power BI \- Training | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/](https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/)
19. Query overview in Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview)
20. Power BI forums \- Microsoft Fabric Community, fecha de acceso: mayo 1, 2025, [https://community.fabric.microsoft.com/t5/Power-BI-forums/ct-p/powerbi](https://community.fabric.microsoft.com/t5/Power-BI-forums/ct-p/powerbi)
21. Power BI Service vs Desktop \- Key Differences & Use Cases, fecha de acceso: mayo 1, 2025, [https://anexas.net/blog/2024/05/17/power-bi-desktop-vs-power-bi-service-choosing-the-right-platform/](https://anexas.net/blog/2024/05/17/power-bi-desktop-vs-power-bi-service-choosing-the-right-platform/)
22. Comparing Power BI Desktop and the Power BI servic... \- Microsoft Fabric Community, fecha de acceso: mayo 1, 2025, [https://community.powerbi.com/t5/Desktop/Comparing-Power-BI-Desktop-and-the-Power-BI-service/td-p/3159623](https://community.powerbi.com/t5/Desktop/Comparing-Power-BI-Desktop-and-the-Power-BI-service/td-p/3159623)
23. Publish semantic models and reports from Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-upload-desktop-files](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-upload-desktop-files)
24. Power Bi desktop vs Power Bi web service : r/PowerBI \- Reddit, fecha de acceso: mayo 1, 2025, [https://www.reddit.com/r/PowerBI/comments/1gt5ycu/power\_bi\_desktop\_vs\_power\_bi\_web\_service/](https://www.reddit.com/r/PowerBI/comments/1gt5ycu/power_bi_desktop_vs_power_bi_web_service/)
25. Is Power BI desktop really free? What is the catch? : r/PowerBI \- Reddit, fecha de acceso: mayo 1, 2025, [https://www.reddit.com/r/PowerBI/comments/15a82w9/is\_power\_bi\_desktop\_really\_free\_what\_is\_the\_catch/](https://www.reddit.com/r/PowerBI/comments/15a82w9/is_power_bi_desktop_really_free_what_is_the_catch/)
26. Create reports and dashboards in Power BI \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/create-reports/](https://learn.microsoft.com/en-us/power-bi/create-reports/)
27. Formas de colaborar y compartir en Power BI \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-how-to-collaborate-distribute-dashboards-reports](https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-how-to-collaborate-distribute-dashboards-reports)
28. Get Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop](https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop)
29. Download Microsoft Power BI Desktop from Official Microsoft Download Center, fecha de acceso: mayo 1, 2025, [https://www.microsoft.com/en-us/download/details.aspx?id=58494](https://www.microsoft.com/en-us/download/details.aspx?id=58494)
30. Install Desktop Power BI Using PowerShell \- Microsoft Fabric Community, fecha de acceso: mayo 1, 2025, [https://community.fabric.microsoft.com/t5/Desktop/Install-Desktop-Power-BI-Using-PowerShell/td-p/3964041](https://community.fabric.microsoft.com/t5/Desktop/Install-Desktop-Power-BI-Using-PowerShell/td-p/3964041)
31. Sign in and out of the Power BI service \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/consumer/end-user-sign-in](https://learn.microsoft.com/en-us/power-bi/consumer/end-user-sign-in)
32. Tutorial: Introducción a la creación en el servicio Power BI \- Power ..., fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/fundamentals/service-get-started](https://learn.microsoft.com/es-es/power-bi/fundamentals/service-get-started)
33. Quickstart: Sign up for or purchase a license for the Power BI service \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/fundamentals/service-self-service-signup-for-power-bi](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-self-service-signup-for-power-bi)
34. Connect Excel to Power BI semantic models \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-connect-power-bi-datasets-excel](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-connect-power-bi-datasets-excel)
35. Sign up for Power BI with a new Microsoft 365 trial, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-signing-up-for-power-bi-with-a-new-office-365-trial](https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-signing-up-for-power-bi-with-a-new-office-365-trial)
36. Compartir un panel o informe desde las aplicaciones móviles de Power BI \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/consumer/mobile/mobile-share-dashboard-from-the-mobile-apps](https://learn.microsoft.com/es-es/power-bi/consumer/mobile/mobile-share-dashboard-from-the-mobile-apps)
37. Publish and access reports in Power BI service – Online workshop \- Training, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/modules/publish-access-reports/](https://learn.microsoft.com/en-us/training/modules/publish-access-reports/)
38. Uso compartido de informes y paneles de Power BI con compañeros de trabajo y otros usuarios \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-share-dashboards](https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-share-dashboards)
39. Glossary for Power BI developers \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/developer/embedded/pbi-glossary](https://learn.microsoft.com/es-es/power-bi/developer/embedded/pbi-glossary)
40. Create a workspace in Power BI \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-the-new-workspaces](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-the-new-workspaces)
41. Obtención de ejemplos para Power BI \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets](https://learn.microsoft.com/es-es/power-bi/create-reports/sample-datasets)
42. Representación de los paneles y los informes que otros usuarios han compartido conmigo \- Power BI | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/collaborate-share/end-user-shared-with-me](https://learn.microsoft.com/es-es/power-bi/collaborate-share/end-user-shared-with-me)
43. Get data from comma separated value (CSV) files \- Power BI | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/connect-data/service-comma-separated-value-files](https://learn.microsoft.com/en-us/power-bi/connect-data/service-comma-separated-value-files)
44. Get data from Excel workbook files \- Power BI | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/connect-data/service-excel-workbook-files](https://learn.microsoft.com/en-us/power-bi/connect-data/service-excel-workbook-files)
45. ¿Cómo usar power BI? Tutorial desde 0 \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=C8HatpMK9Hw](https://www.youtube.com/watch?v=C8HatpMK9Hw)
46. Curso de Microsoft Power BI desde cero para principiantes 2023 \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/playlist?list=PL2Z95CSZ1N4Hhlv70xz0tdr9od6w\_PMTX](https://www.youtube.com/playlist?list=PL2Z95CSZ1N4Hhlv70xz0tdr9od6w_PMTX)
47. \[Aprende Power BI\] Limpiar una Base de Datos en Power BI con Power Query \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=P26QovW0jP0\&pp=0gcJCdgAo7VqN5tD](https://www.youtube.com/watch?v=P26QovW0jP0&pp=0gcJCdgAo7VqN5tD)
48. Limpieza de datos con Power Query \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=zxQFgO84Fg8](https://www.youtube.com/watch?v=zxQFgO84Fg8)
49. Modelar datos en Power BI \- Training | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/training/modules/model-data-power-bi/](https://learn.microsoft.com/es-es/training/modules/model-data-power-bi/)
50. Crear y administrar relaciones en Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-create-and-manage-relationships](https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-create-and-manage-relationships)
51. Creación de relaciones de modelos de Power BI \- Training \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/training/modules/create-power-bi-model-relationships/](https://learn.microsoft.com/es-es/training/modules/create-power-bi-model-relationships/)
52. Create and manage relationships in Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships)
53. Aspectos básicos de DAX en Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-quickstart-learn-dax-basics](https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-quickstart-learn-dax-basics)
54. Información general de DAX \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/dax/dax-overview](https://learn.microsoft.com/es-es/dax/dax-overview)
55. Creación de columnas calculadas en Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-calculated-columns](https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-calculated-columns)
56. Tutorial: Crear medidas propias en Power BI Desktop \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-tutorial-create-measures](https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-tutorial-create-measures)
57. Install Power BI Report Server \- Learn Microsoft, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/power-bi/report-server/install-report-server](https://learn.microsoft.com/en-us/power-bi/report-server/install-report-server)
58. Creación de cálculos DAX en Power BI Desktop, fecha de acceso: mayo 1, 2025, [https://microsoftlearning.github.io/PL-300-Microsoft-Power-BI-Data-Analyst.es-es/Instructions/Labs/04-create-dax-calculations-in-power-bi-desktop.html](https://microsoftlearning.github.io/PL-300-Microsoft-Power-BI-Data-Analyst.es-es/Instructions/Labs/04-create-dax-calculations-in-power-bi-desktop.html)
59. Build Power BI visuals and reports \- Training | Microsoft Learn, fecha de acceso: mayo 1, 2025, [https://learn.microsoft.com/en-us/training/paths/build-power-bi-visuals-reports/](https://learn.microsoft.com/en-us/training/paths/build-power-bi-visuals-reports/)
60. Curso de Power BI desde cero (actualizado 2024\) \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=lAebJGKPRdc](https://www.youtube.com/watch?v=lAebJGKPRdc)
61. Vandalytic \- Vandalytic \- tu blog de Power BI y más en español, fecha de acceso: mayo 1, 2025, [https://vandalytic.com/](https://vandalytic.com/)
62. Curso Básico de Power BI (Reporte completo) \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=gLxp8NRmdZ0](https://www.youtube.com/watch?v=gLxp8NRmdZ0)
63. Cómo usar Power BI (Tutorial desde cero) \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=pwJuFbyhZFE](https://www.youtube.com/watch?v=pwJuFbyhZFE)
64. Casos prácticos con PowerBI, de 0 a 100 \- YouTube, fecha de acceso: mayo 1, 2025, [https://m.youtube.com/watch?v=Yl9VEY-zkYk](https://m.youtube.com/watch?v=Yl9VEY-zkYk)
65. QUE ES Y COMO SE CREA UN PANEL EN POWER BI EN LINEA \- YouTube, fecha de acceso: mayo 1, 2025, [https://www.youtube.com/watch?v=G8KWcYKMnco](https://www.youtube.com/watch?v=G8KWcYKMnco)