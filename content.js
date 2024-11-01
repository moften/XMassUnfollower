// Función para simular un clic en los botones "Siguiendo"
function unfollowVisibleAccounts() {
    // Seleccionar todos los botones con el atributo data-testid que contiene "unfollow"
    const unfollowButtons = Array.from(document.querySelectorAll('button[data-testid*="unfollow"]'));

    if (unfollowButtons.length === 0) {
        console.log('No se encontraron más cuentas para dejar de seguir.');
        return false; // No más cuentas visibles
    }

    unfollowButtons.forEach((button, index) => {
        setTimeout(() => {
            const buttonText = button.innerText.trim();
            if (buttonText === 'Siguiendo') {
                console.log('Dejando de seguir una cuenta...');
                button.click(); // Simular clic en el botón "Siguiendo"
                
                // Esperar un pequeño retraso para que aparezca el botón de confirmación
                setTimeout(() => {
                    // Encontrar el botón de confirmación y hacer clic en él
                    const confirmButton = document.querySelector('button[data-testid="confirmationSheetConfirm"]');
                    if (confirmButton) {
                        console.log('Confirmando dejar de seguir...');
                        confirmButton.click(); // Simular clic en el botón "Dejar de seguir"
                    }
                }, 500); // Espera medio segundo para asegurarse de que el modal de confirmación se muestre
            }
        }, index * 1500); // Asegurar un intervalo entre cada clic para evitar errores
    });

    return true; // Cuentas encontradas y acción ejecutada
}

// Función de scroll automático
function autoScrollToUnfollow() {
    console.log('Iniciando el proceso de auto-scroll y dejar de seguir...');
    let scrollInterval = setInterval(() => {
        window.scrollBy(0, window.innerHeight); // Desplazarse hacia abajo
        console.log('Haciendo scroll...');
        
        // Intentar dejar de seguir cuentas visibles
        let accountsLeft = unfollowVisibleAccounts();

        // Si no hay más cuentas visibles o alcanzamos el final de la página
        if (!accountsLeft || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            console.log('Deteniendo el proceso. No hay más cuentas o alcanzamos el final de la página.');
            clearInterval(scrollInterval); // Detener el scroll
            alert('Proceso completado. No quedan más cuentas por dejar de seguir.');
        }
    }, 4000); // Esperar 4 segundos entre cada scroll y chequeo
}

// Ejecutar el proceso cuando la página haya cargado
window.onload = function() {
    console.log('Página cargada. Ejecutando autoScrollToUnfollow...');
    autoScrollToUnfollow();
};