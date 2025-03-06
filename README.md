# OneGoal
- V0 - Sistema de diseño e implementación en HTML y CSS
## Contenidos
  - [1. Sistema de diseño](#1-Sistema-de-diseño)
  - [2. Implementación HTML y CSS](#2-Implementación-HTML-y-CSS)
  - [3. Funcionamiento básico de la aplicación](#3-Funcionamiento-básico-de-la-aplicación)
  - [4. Tecnología utilizada](#4-Tecnología-utilizada)
  - [5. Futuros trabajos](#5-Futuros-trabajos)
  - [6. Licencia](#6-Licencia)
  - [7. Licencia](#7-Animaciones)
  - [8. Licencia](#8-Asistente de IA)

  

## Enlaces importantes
- Enlace a figma para el diseño de la aplicacion web, junto con sistema de diseño: https://www.figma.com/design/uwO6btN1cfY0TrMC2dDUSA/OneFootball?node-id=211-6&t=iFmAtG7BsS3EdKKn-1

## 1. Sistema de diseño

- Fuente seleccionada para la aplicacion web: "Sinkin Sans". Esta ha tenido que se instalada para su utilización en figma instalando el instalador de fuentes de figma "https://www.figma.com/es-es/downloads/" y posteriormente descargando e instalado la propia fuente desde "https://www.fontsquirrel.com/fonts/sinkin-sans" en el propio ordenador. De todas las fuentes que se te descargan tan solo se han instalado:
  - Sinkin Sans 200 X Light
  - Sinkin Sans 400 Regular
  - Sinkin Sans 500 Medium
  - Sinkin Sans 600 Semibold
  - Sinkin Sans 700 Bold

- Creación del logo en figma, para su posterior exportación en SVG. 

- Páginas creadas en orden para seguir un flujo de ejecucion lógico. En primer lugar se ha creado para desktop.
  1. Landing Page: Página de inicio que se encuentra cualquier usuario al entrar por primera vez en la página. Desde esta página en todo enlace que tenga funcionalidad te llevará a registrarte/iniciar sesión(esto no esta implementado puesto que no se pide). Esta página cuenta con un header que tiene un menú de navegación y los botones de inicio de sesion o registro. Después tiene una primera seccion para llamar la atención del usuario con una lema y el botón para empezar a apostar. Un segunda sección con la meta de la página y lo que ofrecemos y por último un footer que aparecera en la mayoría de las paginas.
  2. Sing Up: Formulario de registro de sesión con seis campos (nombre, apellidos, fecha de nacimiento, nombre de usuario, contraseña y confirmación de contraseña)
  3. Landing Page ya iniciada sesión: En vez de contar con los botones de inicio de sesión o registro, aparecen los iconos de notificaciones, perfil de usuario y el saldo que tiene desde donde se puede agregar más saldo.
  4. Bet Page: Página donde además del header y footer tiene otras secciones como son: la sección de apuestas activas donde aparecen las apuesta que el usuario todavia no ha finalizado. Em cada card de apuesta aparecen los equipos involucrados, el resultado en vivo, el minuto del partido, los usuarios que participan y el monto que ha apostado el usuario en ese partido. Otra sección con apuestas globales a las que se puede unir, una vez unido esta se agragará la sección de apuestas activas. Y una última sección para crear apuestas para proximos partidos.
  5. Challenges Page: Página donde el usuario puede ver una serie de retos diarios y globales, donde se dice lo que tiene que hacer, lo que le falta y los puntos que serían. Y otra sección de los retos que ha completado.
  6. Ranking Page: Página donde aparece el ranking con respuesto a sus seguidores y un ranking mundial.
  7. Profile Page: Página de perfil de usuario donde aparece la información del usuario, se puede acceder a las conversaciones que tenga el usuario creadas (cada apuesta puede tener su propio chat), el monto de dinero del que dispone, una parte para editar el perfil y un historial de apuesta, donde aparece si ha ganado o perdido con el dinero en rojo (perdido) o verde(ganado).
  8. Create Bet: Pop Up que salta en la página de apuesta cuando pulsas el botón de "Create Bet" donde el usuario podrá crear una apuesta, seleccionando el partido (que no haya comenzado aun), si quiere que sea global o solo entre amigos, el monto de dinero a apostar y un apartado para añadir a amigos (los cuales deberían poder rechazar la peticion). Yo considero que se podrá añadir a amigos incluso a una apuesta global y que los huecos que falten hasta rellenar los 9 máximos se puedan completar con gente del mundo y si no se llena cuando ha empezado un partido si tiene el mínimo de 3 participantes que pase ya a activa.

- Creación de las mismas páginas para adaptarlas a móvil (en las páginas del móvil el footer desaparecerá). Además de que el menú de navegación se convertirá en una barra de opciones en la parte baja donde se pondrán los elementos de home, página de apuestas, página de challenges, página de rankings y dos iconos más para la busca y la ayuda que podría sustituir al footer y donde aparecerían el contacto y posibles elementos de ayuda como preguntas frecuentes, etc.
- Las páginas para tablet serán identicas las de ordenador, por lo que no se ha creado el diseño, tan solo se reducirán tamaños (en caso de que sean necesarios).

## 2. Implementación HTML y CSS

Para la implementación del sistema de diseño se han empleado las tecnologías de HTML y CSS. Las decisiones que he tomado a la hora de crear las diferentes páginas son:
- Creación de diferentes páginas html y sus respectivos estilos en archivos diferentes para una mejor organización, aunque puede que se hayan repetido lineas de código pudiendo ser un poco redundante.
- Creción de una página principal para cuando no se ha iniciado sesión, y ya el resto va como si el usuario ya hubiera iniciado sesión.
- El flujo de uso de las diferentes paginas:
    - Partiendo desde el Landig Page, todo enlace que se pulse te llevara a la página de registro, puesto que no se podría hacer nada si no se esta registrado y se haya iniciado sesión.
    - En la página de registro una vez pulsas en el boton te lleva a la página Home típica que un usuario logeado vería.
    - Dentro de esta Home se podrían visitar 4 páginas distintas: Bets, Chanllenges, Rankings y Profile.
    - En cada una de esas cuatro páginas se verá que se está en esa página puesto que el color del acceso a esa página estará cambiado.
    - Desde cualquier página se puede llegar a la página home de nuevo pulsando en el logotipo de la página.
    - Todas las páginas cuentan con tres secciones: header, main y footer.
    - En la página de apuestas cuendo pulsas en crear apuesta salta un pop up para la creción de la apuesta que quiera el usuario.
- Todos los enlaces y botones cuentan con la opción de hover, y algunos que deberían tener funcionalidad también (para representar que son elementos que se podrían pulsar).
- Todas las páginas tienen un fondo de una imagen.
- La página de registro cuenta a su vez con un fondo animado.
- Todo los iconos son svg (salvo las camisetas de los equipos de futbol que son en su mayoría .webp).
- En la página de apuestas la selección de las ligas seria un slider, que se verá mejor en el apartado de móvil ya que en web la cantidad de logos no es suficiente como para que sobrepase el tamaño de su contenedor.
- He empleado flex y grid para la colocación de los elementos.
- He usado la metodología BEM parar nombra las clases dentro del código HTML.
- He usado media querys para tratar de hacer la página responsive para los endpoints: 500px (móvil) y 1150px (tablet). Aunque se han necesitado otros endpoints en medio para que la página se vaya adaptando progresivamente lo mejor posible.
- He creado una estructura de ficheros donde en el directorio raiz estan: index.html, readme, carpeta de pages(donde estan el resto de páginas HTML creadas) y carpeta de assets (compuesta por una carpeta que contiene los estilos CSS, otra carpeta con las fuentes y una última carpeta con imagenes e iconoes que se han empleado en el desarrollo).

## 3. Funcionamiento básico de la aplicación

- Las paginas en HTML son: index.html(home sin iniciar sesión), homeLogged.html(home cuando se ha iniciado sesión), signup.html(registro), bets.html(página de apuesta), challenges.html(página de retos diarios y globales), ranking.html(ranking de amigos y global) y profile.html(perfil de usuario con su historial de apuestas).

- Funcionamiento que se realiza en la página:
  - Desde index.html los elementos con los que se puede interactuar son: menú de navegación (bets, challenges, rankings), botones de log in y sign up y boton de start betting. Todos ellos llevan a la página de sign up, ya que considero que no se podría hacer nada sin estar loggeado.
  - Desde signup.html tan solo pulsando en el botón create account te llevaría a la página de homeLogged.html (simular ya haber iniciado sesión).
  - En la página homeLogged.html si se pulsa en el logo volvería a index.html, si se pulsa en bets te llevaría a página bets.html, si se pulsa en challenges te lleva a challenges.html, si se pulsa en rankings te lleva a ranking.html, si se pulsa en el icono de usuario te lleva a profile.html y si se pulsa en start betting te lleva a bets.html.
  - En la página de bets.html si se pulsa en cualquiera de las secciones del punto anterior te llevaría al mismo sitio, salvo que si pulsas en el logo te llevaría a homeLogged.html en vez de index.html. Esta página bets.html cuenta con un botón de create bet, pulsandolo te salta un pop up con un formularío para la creación de una apuesta (para cerrar el pop up habría que dar a la "x" de arriba a la derecha).
  - El resto de páginas tienen el funcionamiento de ir al resto de páginas si se pulsa en el enlace correspondiente al igual que en bets.html y no tendrían más funcionalidad extra hecha con HTML y CSS (en un futuro se podría añadir con JavaScript).

## 4. Tecnología utilizada
Durante el desarrollo de la página se han usado diferentes tecnologías:
- Figma: Crecación de un sistema de diseño y prototipado de las páginas para ordenador y móvil (para tablet el diseño sería el mismo que para ordenador).
- Visual Studio Code: Entorno donde se ha realizado la progamación de las páginas.
- HTML y CSS: Lenguajes usados para dar estructura y estilo a las páginas diseñadas en Figma.
- GitGub: Plataforma para llevar un control de versiones del proyecto.

## 5. Futuros trabajos
- Agregar funcionalidad con JavaScript u otra tecnología.
- Funcionalidad de chats entre diferentes usuarios.
- Creación de chats cuando se crea una apuesta.
- Acceder a todos los chats del usuario desde el perfil de usuario.
- Modificación de datos personales del perfil.
- Cuando se cree una apuesta esta pasará a activa una vez que empiece el partido.
- Los retos (salvo los diarios) pasaría a completados y se quitarian de globales.
- Agregar saldo.
- Generar notificaciones (mensajes en los chats, creación de apuestas, invitación de amigos, nuevas solicitudes de amistad).
- Buscador de usuarios.

## 6. Licencia
Este proyecto está bajo la licencia Creative Commons BY (CC BY). Esta es una licencia de Creative Commons que permite a otros distribuir, remezclar, adaptar y construir sobre tu obra, incluso con fines comerciales, siempre que te den crédito por la creación original.

## 7. Animaciones

1. Transición en botones
2. Efecto hover en tarjetas de apuestas
3. Animación que simulan balones en la página de registro
4. Rotación de iconos (logos de redes sociales y logos como notificación y perfil) al pasar sobre ellos.
5. Animación de fade-in
6. Cambio de opacidad en fondos al seleccionar el botón de crear apuesta (create bet), el fondo se vuelve opaco y no se puede interactuar con los elementos del fondo
7. "Shake" de errores en el formulario de signup, todos los campos son obligatorios escribir algo, si se queda algun campo sin completar se hace un "shake" y se ponen los campos que no se han completado en rojo.

## 8. Asistente de IA

Para la creación del pop up que simula el diseño de un chat para asistencia he seguido los siguientes pasos:
1. Creación del icono que aparecera en todas las páginas por medio de canvas y la tecnología de Three.js (libreria de JavaScript para crear contenido 3D). He creado una esfera con movimiento para simular un balón. Para ello he usado javascrip que despues se importa para que el canvas pueda ser usado como boton para el pop up.
2. Creación del pop up, que se muestre cuando se pulse en la esfera y desaparezca cuando se pulse en la "x" de salida u otra vez en la esfera.
3. El pop up está pensado para que puedas iniciar una conversación con el chat, que puedas hacer una pregunta ya predefinida (está saldría en función de las preguntas que le hayas hecho con anterioridad a la IA) y un botón que te hace un resumen de lo que has preguntado hasta el momento.
4. Dentro de este pop up, aparece otra esfera en movimiento que se ha hecho de la misma forma que el botón canvas, pero esta vez sin el contorno que simule un balón.
5. Para todo el diseño CSS del asistente de IA se ha usado tailwind4.

Como aclaración el botón de asistente de IA solo aparecerá una vez ya estes loggeado por lo que en la página principal (index.html) no aparecerá sino que se tiene que hacer el registro primero y una vez ya se esté en la página que simula que ya has iniciado sesión aparecerá el asistente.

