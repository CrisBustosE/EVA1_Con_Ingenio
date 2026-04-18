// Esperamos a que el HTML cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. INTERACTIVIDAD: MODO OSCURO
       ========================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Comprobamos si el usuario ya tenía el tema oscuro guardado
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️'; // Cambiamos el ícono a sol
    }

    // Escuchamos el clic en el botón de la luna/sol
    themeToggleBtn.addEventListener('click', () => {
        // La clase toggle pone 'dark-mode' si no está, y la quita si está
        body.classList.toggle('dark-mode');

        // Actualizamos el ícono y guardamos la preferencia en el navegador
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    /* =========================================
       2. VALIDACIONES: FORMULARIO DE CONTACTO
       ========================================= */
    const formulario = document.getElementById('formulario');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            // Evita que la página intente hacer la petición al servidor (que no existe) y se recargue
            evento.preventDefault();

            // Capturamos los valores y les quitamos los espacios en blanco de los extremos (trim)
            const nombre = document.getElementById('nombre').value.trim();
            const servicio = document.getElementById('servicio').value;
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validación 1: Campos vacíos (Aunque el HTML5 tiene 'required', la profe pide validación JS)
            if (!nombre || !correo || !mensaje) {
                alert('Por favor, completa todos los campos requeridos antes de enviar.');
                return; // Detiene la ejecución
            }

            // Validación 2: Formato de correo electrónico válido usando una Expresión Regular simple
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                alert('Por favor, ingresa una dirección de correo electrónico válida.');
                return;
            }

            // Validación 3: Largo mínimo del mensaje (un toque extra de calidad)
            if (mensaje.length < 10) {
                alert('Tu mensaje es muy corto. Por favor, danos más detalles (mínimo 10 caracteres).');
                return;
            }

            // SIMULACIÓN DE ENVÍO (Reemplazo de la API caída)
            // Imprimimos los datos en la consola para demostrar que los capturamos bien
            console.log('--- Datos Capturados del Formulario ---');
            console.log('Nombre:', nombre);
            console.log('Servicio:', servicio);
            console.log('Correo:', correo);
            console.log('Mensaje:', mensaje);

            // Le damos feedback al usuario
            alert(`¡Gracias, ${nombre}! \n\nTu mensaje sobre el servicio de "${servicio}" ha sido procesado correctamente.\n\n(Simulación exitosa: API deshabilitada por instrucciones de la evaluación).`);

            // Limpiamos el formulario para que quede en blanco nuevamente
            formulario.reset();
        });
    }

    /* =========================================
       3. INTERACTIVIDAD: MENÚ HAMBURGUESA
       ========================================= */
    const hamburgerBtn = document.getElementById('btn-hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // Activa o desactiva la clase que muestra el menú
            navLinks.classList.toggle('activo');

            // Cambia el ícono a una "X" cuando está abierto
            if (navLinks.classList.contains('activo')) {
                hamburgerBtn.textContent = '✖';
            } else {
                hamburgerBtn.textContent = '☰';
            }
        });
    }
});