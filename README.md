## Índice

- [Introducción](#introducción)
- [Instalación](#instalación)
- [Características por módulo (Manual de Usuario)](#características)
- - [My Team](#my-team)
- - [Model The Product](#model-the-product)
- - [Latency/Traceroute Tests](#latencytraceroute-tests)
- - [CPU/Memory Usage Monitoring](#cpumemory-usage-monitoring)
- - [Software Testing Module](#software-testing-module)
- - [Load Test](#load-test)
- - [Incident Manager Module](#incident-manager-module)


## Introducción


## Características por módulo
#### **My Team**

Puesto que uno de los requerimientos principales de la PWA era la habilidad de colaboración entre varios ingenieros de fiabilidad del sitio. Se decidió agregar una pantalla o página desde la que se manejan a los miembros de un “Team” (equipo). Desde esta pantalla un ingeniero perteneciente a un equipo puede agregar a nuevos miembros y también revocar el acceso de miembros ya pertenecientes al equipo.

Con respecto a esta primera versión, no existe la posibilidad de restringir accesos a módulos a un miembro específico. Tampoco existe un usuario administrador del equipo, todos los miembros tienen la misma capacidad de realizar nuevas mediciones, cambios y eliminar datos. Mas bien, en esta versión 1, el manejo de equipos permite que los miembros de un “Team” puedan colaborar entre sí y acceder a la información recabada.

En futuras versiones de la PWA, se planea introducir controles más granulares sobre los permisos de acceso y la gestión de roles dentro de los equipos. Esto permitirá designar a un administrador que podrá asignar diferentes niveles de acceso a los miembros, como la capacidad de realizar cambios, eliminar datos o acceder a ciertos módulos de manera restringida. Asimismo, se implementarán funcionalidades de auditoría que registrarán las acciones realizadas por cada miembro, lo que brindará mayor transparencia y control sobre las modificaciones hechas en el sistema.

**Imagen 2: Página Team Members**
La ruta /myteam es la que almacena la lógica de la pantalla Team Members que se muestra en la imagen 2. Esta ruta implementa una instancia del servicio TeamsService, este servicio es capaz de actualizar, obtener y eliminar a miembros de un equipo.

Por su lado, TeamsService implementa una instancia del servicio AuthService, este servicio maneja la única instancia de Firebase Authentication que es la capaz de realizar la autenticación de los usuarios dentro de la PWA. Firebase Authentication se encarga de verificar la identidad de los usuarios mediante la autenticación por correo electrónico. Una vez autenticados, AuthService permite obtener los tokens de autenticación necesarios para validar las acciones de los usuarios al interactuar con el servicio TeamsService.

#### **Model The Product**

En cuanto a las funcionalidades del aplicativo, todas comienzan a partir de modelar un producto en la pantalla o página Model The Product. “Las personas usan un producto para lograr un objetivo en el mundo real. Para ayudar a los equipos de productos a crear productos y servicios que faciliten los objetivos de los usuarios, es necesario comprender lo que los usuarios del producto están tratando de lograr.” \[10\], es por esto por lo que los ingenieros de fiabilidad del sitio de Google han decidido implementar en su metodología al modelado del producto.

Un producto nace de la idea de poder modelar objetivos de la vida real, estos productos se forman a partir de un user objetive (objetivo a nivel de usuario) mismos que encapsulan, product steps (pasos para cumplir un objetivo), product services (servicios para cumplir ese objetivo) y product SLOs o también llamados Service Level Objectives (definen la importancia del producto).

**Diagrama 16: Ejemplo de un producto basado en la metodología SRE**



En el diagrama 16 se observa un ejemplo práctico de como un ingeniero de fiabilidad del sitio debe modelar un producto, en este caso el objetivo principal es el de componer un correo electrónico en un aplicativo, en el ejemplo se muestran los pasos, servicios y los SLOs dados para mantener y monitorear al producto.

Se observan dos pasos o steps. El usuario será capaz de componer un correo a través de un servicio “front-end”, además de enviar el correo haciendo uso del servicio “mail server”. Mismos que requieren una disponibilidad del 99.9% y 99.999% respectivamente, además la latencia de conexión al servidor de correo debe ser menor a 500ms.

A partir de estos productos es de donde nace toda la metodología SRE, estos son los pilares que el equipo de fiabilidad del sitio va a mantener y monitorear.

**Imagen 3: Página Model The Product**



La ruta /new-product la que almacena la lógica de creación de productos, misma que se muestra en la imagen 3. Esta ruta implementa una instancia del servicio Product Service, servicio capaz de crear, actualizar, obtener y eliminar productos de un equipo. Esta no es la única ruta del módulo Model The Product, el mismo cuenta con dos rutas más /model-product y /view-product.

Con respecto a la ruta /model-product, este es el menú principal desde donde el usuario pude navegar hacia las dos otras rutas. Por el contrario, la ruta /view-product permite al usuario ver un producto ya creado, actualizarlo o eliminarlo. Todas las rutas mencionadas trabajan con el servicio Product Service, este servicio permite realizar la conexión con la base de datos, Firestore, de esta manera es posible realizar el CRUD (Create, Read, Update, Delete) de la colección productos.

Como se observa en la imagen 3, este módulo permite modelar un producto basado en la metodología SRE, estos productos forman un papel importante en todos los otros módulos de la app, por lo que un equipo debe por lo menos crear un producto antes de realizar una prueba o monitoreo.

#### **Latency/Traceroute Tests**

Tal como se vio en el diagrama 16, los ingenieros de fiabilidad del sito requieren habitualmente monitorear latencias de sus productos. Al realizar un test de tipo latency o traceroute el ingeniero es capaz de analizar el comportamiento en términos de velocidad de su producto. Esta latencia permite que el ingeniero pueda tomar acciones reales, ya que permite simular el requerimiento o uso del servicio desde una localidad externa a donde se encuentra alojado el servicio en cuestión.

Por el lado de la prueba tipo traceroute, se sabe que internet puede ser frágil a la hora de realizar enrutamiento, existen servicios críticos que los equipos SRE manejan a diario y en algún momento ese servicio puede resultar inaccesible o muy lento al acceder. Las pruebas tipo traceroute nos permiten realizar esta trazabilidad desde una localidad hacia un servicio que se encuentra en internet y poder visualizar si estamos teniendo problemas de enrutamiento.

RIPE Atlas es un servicio de probes o probetas que se encuentran alojadas por personas corrientes, equipos IT y entusiastas de la tecnología. Estas probetas nos permiten realizar mediciones en internet, específicamente mediciones tipo de latencias y traceroutes. Atlas es un servicio de paga, tal como se menciona en la sección anterior de este documento, pero es posible no incurrir en gastos. Gracias a la gran comunidad que tiene RIPE Atlas he decidido implementar en el aplicativo este tipo de prueba, prueba que permite a los SRE mantener los SLOs de sus productos.

**Imagen 4: Página Latency Test**



**Imagen 5: Página Latency Test**



Las rutas /latency-test y /trace-test son las que almacenan la lógica de envió de una nueva medición hacia el servicio de RIPE Atlas, así como se observa en la imagen 4 y 5. Estas páginas son las encargadas de enviar el url, host name o dominio al cual se le realiza el test, además de los países desde donde se va a ejecutar la prueba y una breve descripción del porqué de la prueba. Debido a la similitud de las páginas se ha decidido mencionar a estos dos módulos en una sola sección de este documento.

**Imagen 6: Tabla de resultados de una prueba de latencia**



**Imagen 7: Resultado de una prueba de latencia en el mapamundi**



**Imagen 8: Promedio de los resultados de pruebas de latencia por día y país.**



El PWA permite la visualización de la medición de diferentes maneras, en el caso de la medición de latencia podemos visualizar en formato tabla la ciudad y país desde donde se realiza la medición, la latencia calculada en ms, y la ciudad y país hacia donde llegó la medición, tal como se muestra en la imagen 6. Otra forma de visualizar la latencia es mediante el mapa, mismo que indica con precisión el lugar desde donde y hacia donde se realiza la medición, así como se indica en la imagen 7. Finalmente, la latencia puede ser visualizada como un promedio de mediciones por país, donde el eje X muestra la fecha de realización de la prueba y el eje Y muestra el promedio diario de latencia calculada, mostrada en la imagen 8.

**Imagen 9: Hops (saltos) de una prueba traceroute**



**Imagen 10: Resultado de una prueba tipo traceroute en el mapamundi**



**Imagen 11: Promedio de los resultados de pruebas traceroute por día y país.**



En cambio, en el caso de la medición de traceroutes podemos visualizar en formato “hops” (salto) la ciudad y país desde donde se realiza el salto en la red y el RTT (tiempo de ida y vuelta) calculado, tal como se muestra en la imagen 9. Otra forma de visualizar un traceroute es mediante el mapa, mismo que indica con precisión todos los saltos de red que se han dado, así como se indica en la imagen 10, este tipo de visualización realmente permite al SRE visualizar el enrutamiento que se realiza desde una localidad hacia el destino final. Finalmente, los RTT pueden ser visualizados como un promedio de mediciones por país, donde el eje X muestra la fecha de realización de la prueba y el eje Y muestra el promedio diario de RTT calculada, mostrada en la imagen 11.

**Imagen 12: Análisis de un traceroute por parte de la inteligencia artificial**



En cuanto a la inteligencia artificial, los dos módulos permiten realizar un análisis automático, este análisis está disponible desde las rutas /graph-latency y /graph-trace. El modelo Gemini analiza los datos y es capaz de detectar anomalías en las mediciones tal como se muestra en la imagen 12, qué es un ejemplo de un análisis realizado por la IA, en el mismo la inteligencia artificial detecta inconsistencias de enrutamiento para varias mediciones tipo traceroute desde Brasil hacia un host no especificado. Adicional, el ingeniero es capaz de realizar preguntas a la inteligencia artificial sobre el análisis realizado.

Finalmente, las rutas previamente mencionadas implementan a los servicios Ripe Latency o Ripe Traceroute respectivamente. Estos servicios permiten enviar las mediciones a RIPE Atlas y una vez se ha terminado de ejecutar el test el mismo se guarda en la base de datos de Firestore. El servicio Location permite obtener la localización exacta desde donde se realiza las mediciones gracias a la API de IP-API.

#### **CPU/Memory Usage Monitoring**

EL monitoreo de productos es esencial para el ingeniero de fiabilidad del sitio. Los SRE pasan varias horas al día viendo cómo se comportan sus servidores físicos en términos de carga, normalmente de CPU y memoria. A mayor carga, mayor posibilidad de caer en incidentes no deseados. Es por esto que se ha decidido implementar un módulo de monitoreo de uso de CPU y memoria.

Estos son los únicos módulos que requieren que los datos sean enviados a través del API Express, obligatoriamente. Los módulos permiten visualizar y comparar mediciones actuales con mediciones pasadas. Además, es posible que la inteligencia artificial sea la que realice el análisis y comparación. Cabe aclarar que al igual que el módulo de latencia y traceroute, estos módulos son similares y se ha decidido mencionar a estos dos en una sola sección de este documento.

**Imagen 13: Página CPU Usage**



**Imagen 14: Página Memory Usage**


Tal como se muestran en las imágenes 13 y 14, los módulos de monitoreo de CPU y memoria son similares. El nombre de los gráficos que modelan la información es Flame Graph, en los últimos años se han convertido en un estándar a la hora de representar información de utilización de CPU y memoria, los mismos son utilizados por una de las competencias mencionadas anteriormente de la app, Grafana.

“Los Flame Graphs son una visualización de datos jerárquicos, creados para visualizar rastros de pila de software perfilado, lo que permite identificar rápida y correctamente las rutas de código más frecuentes.” \[11\]. Tal como lo menciona Brendan Gregg, los Flame Graphs nos permiten visualizar la información de la manera más rápida, en su blog, Gregg menciona como podemos utilizar estos gráficos para determinar el rendimiento de las CPUs, mismo que fue trasladado en la app para medir también la utilización de memoria de un producto. “El perfilado mediante muestreo a una tasa fija es una forma burda pero efectiva de ver qué rutas de código están calientes” \[11\].

La lectura de un Flame Graph se realiza por niveles. Cada cuadro representa una función en la pila. El eje “y” representa la profundidad de la pila. La versión que se utiliza en el PWA implementa al "diseño de icicle" para invertir el orden y hacer que las llamas aparezcan invertidas, es por esto por lo que la lectura se realiza de arriba hacia abajo. Por otro lado, el eje “x” cubre la cantidad de muestra recolectada, en la PWA se puede visualizar la fecha de recolección de datos más no el tiempo en que fue realizada la medición. Adicionalmente, el ancho de cada cuadro indica el tiempo total que esa función está en ejecución.

Finalmente, las rutas /flame_graph_cpu y /flame_graph_memory de la API Express admiten los verbos HTTP PUT y GET. En el manual de usuario de la API que se encuentra en los anexos de este documento, se encuentra documentada la forma de envió de los datos. Los datos llegan al API Express mediante el verbo PUT, los datos son almacenados en la base de datos Firestore. La PWA es capaz de realizar peticiones al API Express mediante el servicio FlameGraph, y mostrar los datos en la pantalla CPU Usage o Memory Usage. Adicional, automáticamente al comparar mediciones, el modelo de inteligencia artificial realiza un análisis de los datos, este análisis es mostrado al SRE. El ingeniero puede realizar preguntas sobre el análisis al igual que en los anteriores módulos de latencia/traceroute.

#### **Software Testing Module**

Evitar un incidente antes de que ocurra es esencial, este módulo, Software Testing, permite que los ingenieros de fiabilidad del sitio realicen pruebas unitarias, de integración y de sistema, estas pruebas permiten a los SRE realizar actualizaciones y despliegues de manera segura.

“Las pruebas es el mecanismo que usas para demostrar áreas específicas de equivalencia cuando ocurren cambios. Cada prueba que pasa tanto antes como después de un cambio reduce la incertidumbre que el análisis debe considerar. Las pruebas exhaustivas nos ayudan a predecir la confiabilidad futura de un sitio …” \[12\]. Tal como lo menciona el manual de SRE de Google, las pruebas nos permiten reducir la incertidumbre de nuestros sistemas y predecir la confiabilidad de los mismos, Google opta por utilizar el método tradicional de testeo mismo que se basa en los tres tipos de pruebas mencionadas anteriormente.

Las pruebas unitarias, son la unidad básica de testeo, normalmente se realizan sobre el código bruto, como funciones y clases. Seguidamente tenemos las pruebas de integración, estas pruebas se realizan sobre componentes ya ensamblados que tienen una funcionalidad especifica, estas pruebas se realizan sobre ambientes especiales, con datos reducidos para agilizar el testeo. Finalmente, las pruebas de sistema, estas pruebas comprueban la funcionalidad del componente en una copia del sistema idéntica a la que se encuentra ya en producción. Las pruebas de sistema aseguran la funcionalidad de inicio a fin o en ingles el end-to-end de un software.

El manual SRE de Google menciona otros tipos de pruebas como las de estrés, pruebas tipo canary, de configuración, entre otras. Más adelante se ha implementado un módulo específico para realizar pruebas de tipo estrés. Se espera que en próximas versiones de la app se puedan realizar otros tipos de testeo.

**Imagen 15: Página Software Testing**


Como se observa en la imagen 15, el aplicativo es capaz de realizar los 3 tipos de pruebas previamente mencionados.

**Imagen 16: Página Software Testing. Unit Test**


La imagen 16 muestra el configurador de una prueba unitaria, en este caso debido a que las pruebas unitarias se realizan directamente sobre código, es posible configurar el aplicativo para poder realizar testeo de código como clases y funciones automáticamente a partir de un archivo almacenado en un repositorio de GitHub. El archivo es enviado al modelo Gemini, y el modelo regresa un test unitario que el ingeniero de fiabilidad del sitio puede copiar, modificar y utilizar. Adicional, es posible no conectar un repositorio GitHub al app, y realizar un test unitario dando contexto a la IA o no utilizar ningún tipo de ayuda y solo pegar un código manualmente.

**Imagen 17: Página Software Testing. Integration Test**


La imagen 17 muestra el configurador de una prueba tipo integración, en este caso debido a que las pruebas se realizan directamente sobre componentes ya completados, es posible enviar imágenes, videos, código y texto plano a la inteligencia artificial. Se selecciona el framework de testeo en el cual se realizará la prueba y Gemini devuelve un test de integración listo para ser usado. Así mismo como para las pruebas unitarias, es posible elegir código de un repositorio de GitHub o pegar una prueba realizada manualmente.

**Imagen 18: Página Software Testing. System Test**



La imagen 18 muestra el configurador de una prueba tipo sistema, estas pruebas se basan en pasos, pasos que debe seguir una persona o tester para culminar exitosamente la prueba en cuestión. En este caso el aplicativo también es capaz de asistir al ingeniero utilizando inteligencia artificial, el SRE es capaz de dar contexto sobre la prueba y Gemini regresará una descripción, los pasos a seguir y lo esperado por cada paso.

Finalmente, es posible ejecutar todas las pruebas, revisar los resultados y además todos los módulos admiten asignar a un tester por prueba. Desde la pantalla principal se muestran los resultados y cuando se asigna a una prueba a un miembro del equipo, el mismo recibe una notificación tipo push. Adicionalmente, el API permite actualizar los resultados de una prueba, por lo que el ingeniero puede realizar automatizaciones.

#### **Load Test**

“Para operar un sistema de manera segura, los SREs necesitan entender los límites tanto del sistema como de sus componentes.” \[12\]. Tal como se menciona entender los límites de los sistemas permite a los ingenieros de fiabilidad del sitio actuar ante situaciones en las que el sistema se pone en estrés, de esta manera es posible hacer una predicción y entender el comportamiento de los componentes ante circunstancias inusuales o de alta demanda.

Tal como se mencionó en el anterior módulo, debemos actuar y prevenir el incidente, este módulo permite realizar una prueba de carga o prueba de estrés a un sistema en cuestión. Para este módulo se ha decidido implementar el uso de una librería llamada Artillery. Artillery permite realizar pruebas de carga a un servicio web, enviado varios usuarios virtuales, mismos que consumen recursos del objetivo hasta que este deja de funcionar o Artillery cree que ha pasado la prueba con éxito.

En este caso el papel de la API toma un rol muy importante pues es la capaz de realzar estas pruebas de estrés. La API espera a obtener los resultados, los resultados son transformados para luego ser guardados directamente sobre la base de Firestore. Es importante recalcar que la API no almacena internamente resultados pues una de las características previamente mencionadas es que se trata de una API REST.

Adicionalmente, este módulo tiene una correlación directa con el módulo de Software Testing, y para esta primera versión este ha sido la segunda tipo de macro prueba que se implementa basada en la metodología SRE de Google.

**Imagen 19: Página Load Test**



Tal como se observa en la imagen 19, el módulo de Load Test, permite al ingeniero agregar un target u objetivo. Este objetivo debe ser un recurso que se pueda acceder desde internet. Artillery entonces crea una cantidad aleatoria de usuarios virtuales mismos que comienzan a realizar peticiones y descargas sobre el recurso.

**Imagen 20: Página Load Test. Resultados**



Entre los resultados obtenidos, tal como se muestra en la imagen 20, se grafica en la PWA la cantidad de HTTP Status Codes devueltos por petición. Entre los estados más comunes se pueden observar 1xx,2xx,3xx,4xx y 5xx, que pertenecen a códigos informativos, de éxito, redirecciones, errores a nivel de cliente y errores a nivel de servidor respectivamente. Por otro lado, se grafican también los tiempos tomados en realizar cada petición, en este caso se muestra el tiempo máximo, mínimo, la media, la mediana, el p95 y p99.

Finalmente, este módulo también contiene ayuda de inteligencia artificial para poder analizar los resultados obtenidos y cuando un test ha finalizado, el usuario que realizó la prueba recibirá una notificación push con el resultado del test.

#### **Incident Manager Module**

No vivimos en un mundo perfecto, y el software que escribimos tampoco lo es. Los ingenieros de fiabilidad del sitio de Google han diseñado una metodología basada en evitar estos incidentes. “Resolver un incidente significa mitigar el impacto y/o restaurar el servicio a su condición previa. Gestionar un incidente significa coordinar los esfuerzos de los equipos de respuesta de manera eficiente y asegurar que la comunicación fluya tanto entre los respondedores como hacia aquellos interesados en el progreso del incidente” \[13\]. Google entonces propone en su metodología a la “Cultura Postmortem”.

La cultura postmortem o postmortem culture en inglés, propone a los equipos SRE a aprender de los errores. Es un análisis detallado realizado después de la resolución de un incidente para identificar las causas raíz, evaluar la efectividad de la respuesta y proponer mejoras para evitar incidentes similares en el futuro.

En este caso el PWA se basa en la interfaz que proporciona el software Jira para crear un incidente y manejarlo mientras se encuentra abierto. Esto debido a que Jira se ha convertido en un estándar a la hora de manejo de incidentes. La propuesta de valor del PWA en este módulo es la habilidad de poder asignar a un Incident Commander, quien lidera la estrategia, mantiene una visión general del incidente y asigna responsabilidades según las prioridades; un Operations Leader, que realiza las acciones operativas necesarias para resolver el incidente, siendo el único equipo autorizado para modificar el sistema con su equipo; y un Communication Leader, que es el enlace con el público y los interesados, emitiendo actualizaciones periódicas y manteniendo la documentación precisa. Este equipo coordinado permite una respuesta eficiente y efectiva, minimizando el impacto y restaurando la normalidad.

**Imagen 21: Página Incident Manager**



Como se muestra en la imagen 21, es posible asignar miembros a un incidente. De igual forma, se muestra en la parte superior los estados, urgencia e impacto organizacional que el incidente tiene en cuestión. Entre los estados se encuentra el abierto, cerrado y postmortem. Las urgencias van desde un rango bajo, medio, alto y crítico. Finalmente, el impacto organizacional puede ser localizado, limitado, significativo y extenso.

**Imagen 22: Página Incident Manager. Progreso de un incidente**



La imagen 22 muestra el progreso de un incidente ficticio, en el mismo muestra la interacción de dos miembros del incidente resolviendo la problemática. Adicionalmente, cuando existe un cambio en el progreso los miembros del incidente reciben una notificación push, con información de la actualización. Cabe recalcar que aun que la imagen 22 no lo muestra, es posible adjuntar archivos al progreso del incidente.

**Imagen 23: Página Incident Manager. Postmortem**



Para concluir la imagen 23 muestra la pantalla de postmortem del incidente, donde los miembros del equipo deben responder a tres preguntas clave para analizar el incidente: What went wrong? (¿Qué salió mal?), What can be learned? (¿Qué se puede aprender?) y How to prevent similar incidents in the future? (¿Cómo prevenir incidentes similares en el futuro?). Adicionalmente, es posible hacer que el modelo Gemini sea quien responda a estas preguntas, esto es debido a que toda la información del incidente es enviada al modelo, la inteligencia artificial es capaz de asistir al ingeniero de fiabilidad del sitio en la etapa de postmortem del incidente.
