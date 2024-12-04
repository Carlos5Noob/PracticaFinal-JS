// aquí le añado un evento al formulario html completo de tipo "DOMContentLoaded", para que el evento se active una vez el DOM de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function () {

    // en estas variables almaceno los inputs del formulario
    let form = document.querySelector("form");
    let passwordField = document.getElementById("contraseña");
    let confirmPasswordField = document.getElementById("contraseña2");
    let hintField = document.getElementById("indicio");

    // le añado un evento de tipo "submit" al formulario
    form.addEventListener("submit", function (event) {

        // aquí asigno a unas variables el valor de los inputs del formulario
        let password = passwordField.value;
        let confirmPassword = confirmPasswordField.value;
        let hint = hintField.value;

        // Validación de la contraseña
        let passwordRegex = /^[A-Z][A-Za-z\d]{5,}$/; // Mayúscula inicial, mínimo 6 caracteres, al menos un dígito
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito.");
            passwordField.focus(); // si no cumple la condición le pasa el foco
            passwordField.select(); // si no cumple la condición se selecciona el campo automáticamente
            event.preventDefault(); // esto hace que se evite el envío anticipado del formulario
            return;
        }

        // Validación de confirmación de contraseña
        if (password !== confirmPassword) {
            alert("Las contraseñas escritas no coinciden. Vuelve a intentarlo.");
            passwordField.focus(); // si no cumple la condición le pasa el foco
            passwordField.select(); // si no cumple la condición se selecciona el campo automáticamente
            event.preventDefault();
            return;
        }

        // Validación del indicio de contraseña
        if (hint.includes(password)) {
            alert("El indicio de contraseña no puede contener la contraseña.");
            passwordField.focus(); // si no cumple la condición le pasa el foco
            passwordField.select(); // si no cumple la condición se selecciona el campo automáticamente
            event.preventDefault();
            return;
        }

        form.submit(); // si no hay erroes, el formulario se envía

    });
});
