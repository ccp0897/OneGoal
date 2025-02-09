# OneGoal
- V0 - Sistema de diseño e implementación en HTML y CSS
## Contenidos
  - [1. Sistema de diseño](#1-Sistema-de-diseño)
  - [2. Implementación HTML y CSS](#2-Implementación-HTML-y-CSS)
  - [3. Futuros trabajos](#3-Futuros-trabajos)

  

## Enlaces importantes
- Enlace a figma para el diseño de la aplicacion web, junto con sistema de diseño: https://www.figma.com/design/uwO6btN1cfY0TrMC2dDUSA/OneFootball?node-id=0-1&t=iNzVuaJa2WYd7azF-1

## 1. Sistema de diseño

- Fuente seleccionada para la aplicacion web: "Sinkin Sans". Esta ha tenido que se instalada para su utilización en figma instalando el instalador de fuentes de figma "https://www.figma.com/es-es/downloads/" y posteriormente descargando e instalado la propia fuente desde "https://www.fontsquirrel.com/fonts/sinkin-sans".

- Creación del logo en figma, para su posterior exportación en SVG.

- Páginas creadas en orden para seguir un flujo de ejecucion lógico. En primer lugar se ha creado para desktop.
  1. Landing Page: Página de inicio que se encuentra cualquier usuario al entrar por primera vez en la página. Desde esta página donde quiera que se pinche te llevara a registrarte/iniciar sesion(esto no esta implementado puesto que no se pide). Esta página cuenta con un header que tiene un menú de navegación y los botones de inicio de sesion o registro. Después tiene una primera seccion para llamar la atención del usuario con una lema y el botón para empezar a apostar. Un segunda sección con la meta de la página y lo que ofrecemos y por último un footer que aparecera en la mayoría de las paginas.
  2. Sing Up: Formulario de registro de sesión con seis campos (nombre, apellidos, fecha de nacimiento, nombre de usuario, contraseña y confirmación de contraseña)
  3. Landing Page ya iniciada sesión: En vez de contar con los botones de inicion de sesion o registro, aparecen los iconos de notificaciones, perfil de usuario y el saldo que tiene desde donde se puede agregar más saldo.
  4. Bet Page: Página donde además del header y footer tiene otras secciones como son: la sección de apuestas activas donde aparecen las apuesta que el usuario todavia no ha finalizado. Aparecen los equipos involucrados, el resultado en vivo, el minuto del partido, los usuarios que participan y el monto que ha apostado el usuario en ese partido. Otra sección con apuestas globales a las que se puede unir, una vez unido esta se agragará la sección de apuestas activas. Y una última sección para crear apuestas para proximos partidos.
  5. Challenges Page: Página donde el usuario puede ver una serie de retos diarios y globales, donde se dice lo que tiene que hacer, lo que le falta y los puntos que serían. Y otra sección de los retos que ha completado.
  6. Ranking Page: Página donde aparece el ranking con respuesto a sus seguidores y un ranking mundial.
  7. Profile Page: Página de perfil de usuario donde aparece la información del usuario, se puede acceder a las conversaciones que tenga el usuario creadas (cada apuesta puede tener su propio chat), el monto de dinero del que dispone, una parte para editar el perfil y un historial de apuesta, donde aparece si ha ganado o perdido con el dinero en rojo (perdido) o verde(ganado).
  8. Create Bet: Pop Up donde el usuario podrá crear una apuesta, seleccionando el partido (que no haya comenzado aun), si quiere que sea global o solo entre amigos, el monto de dinero a apostar y un apartado para añadir a amigos (los cuales deberían poder rechazar la peticion). Yo considero que se podrá añadir a amigos incluso a una apuesta global.

- Creación de las mismas páginas para adaptarlas a móvil (en las páginas del móvil el footer desaparecerá).
- Las páginas para tablet serán identicas las de ordenador, por lo que no se ha creado el diseño, tan solo se reducirán tamaños.
## 2. Implementación HTML y CSS

Para la implementación del sistema de diseño se han empleado las tecnologías de HTML y CSS. Las decisiones que he tomado a la hora de crear las diferentes páginas son:
- Creación de diferentes páginas html y sus respectivos estilos en archivos diferentes para una mejor organización y reducción de lineas de codigo.
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
- Todo los iconos son svg (salvo las camisetas de los equipos de futbol).
- En la página de apuestas la selección de las ligas seria un slider (pero en css y html no se puede implementar, lo dejaría para futuro JavaScript).
- Se ha empleado flex y grid para la colocación de los elementos.
- Se ha usado la metodología BEM para nombra las clases dentro del código HTML.
- Se han usado media querys para tratar de hacer la página responsive para los endpoints: 400px (móvil) y 1100px (tablet).

## 3. Futuros trabajos
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
