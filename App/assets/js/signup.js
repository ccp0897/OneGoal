document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la redirección inmediata
    let inputs = document.querySelectorAll(".signup__form-input");
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("error");
            isValid = false;
            setTimeout(() => input.classList.remove("error"), 900);
        }
    });

    // Si no hay errores, redirigir a homeLogged.html
    if (isValid) {
        window.location.href = "../pages/homeLogged.html";
    }
});