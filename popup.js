document.getElementById('unfollow').addEventListener('click', function() {
    console.log('Botón "Dejar de seguir" clicado'); // Log para verificar si el botón está siendo presionado
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('Pestaña activa detectada: ', tabs[0].id); // Verificar si obtuviste la pestaña activa
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['content.js']
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message); // Ver si hay errores de ejecución
            } else {
                console.log('content.js ejecutado correctamente'); // Log para confirmar la ejecución
            }
        });
    });
});