# XMassUnfollower
Chrome Extension 
m10sec@proton.me
Ejemplo: https://t.me/hackxcrackoldschool/5/144
Extensión de Chrome: XMassUnfollower
Esta extensión de Chrome permite dejar de seguir automáticamente a las cuentas visibles en la página de “Siguiendo” de la red social X. La extensión también incluye desplazamiento automático en la página para procesar múltiples cuentas, confirmando cada acción cuando sea necesario.

Características

	•	Desplazamiento automático para cargar más cuentas en pantalla.
	•	Clic automático en el botón “Siguiendo” para dejar de seguir cuentas.
	•	Confirmación automática en el modal emergente de “Dejar de seguir”.

Requisitos

	•	Navegador Google Chrome (Versión 89 o superior).
	•	Permisos de activeTab, scripting, tabs, y host_permissions para la URL de la red social X.

Instalación

	1.	Clona o descarga este repositorio.
	2.	Abre Google Chrome y ve a chrome://extensions/.
	3.	Activa el Modo de desarrollador en la esquina superior derecha.
	4.	Haz clic en Cargar descomprimida y selecciona la carpeta de este proyecto.

Uso

	1.	Dirígete a la sección de “Siguiendo” en la red social X.
	2.	Haz clic en el icono de la extensión en Chrome y pulsa el botón de “Dejar de seguir”.
	3.	La extensión comenzará a hacer scroll automático y a dejar de seguir cada cuenta visible en la pantalla.

Archivos principales

	•	manifest.json: Archivo de configuración para permisos y detalles de la extensión.
	•	popup.html: Interfaz de usuario simple con un botón para iniciar el proceso.
	•	popup.js: Código que ejecuta content.js en la pestaña activa.
	•	content.js: Código de automatización que incluye el desplazamiento y clics en los botones.
