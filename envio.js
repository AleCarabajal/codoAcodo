document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("Nombre").value;
    // Validar otros campos aquí...

    if (!name) {
        alert("Por favor, completa el nombre.");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});