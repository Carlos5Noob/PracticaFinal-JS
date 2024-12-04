// Función para convertir un número en una lista de dígitos
function obtenerDigitos(numero) {

    // convertimos el número en una cadena para poder dividirlo en caracteres separados
    return numero.toString().split('').map(function(caracter) {
        return parseInt(caracter); 
    });
        // usamos el map para convertir cada carácter en un número entero
        
}

// Función para calcular la suma de los cubos de los dígitos de un número
function calcularSumaDeCubos(digitos) {
    // uso reduce para sumar los cubos de todos los dígitos en el array
    return digitos.reduce(function(suma, digito) {
        // Para cada dígito, sumo su valor elevado al cubo
        return suma + Math.pow(digito, 3);
    },0); 
}

// Función para verificar si un número es curioso
function esNumeroCurioso(numero) {
    // aquí obtenemos los dígitos del número
    let digitosDelNumero = obtenerDigitos(numero);

    // calculamos la suma de los cubos de los dígitos
    let sumaDeCubosDeDigitos = calcularSumaDeCubos(digitosDelNumero); 
    // devolvemos true si el número es curioso, false si no lo es
    return sumaDeCubosDeDigitos === numero;
}

// Función para encontrar y mostrar los primeros 5 números curiosos
function mostrarNumerosCuriosos() {
    // en este array se almacenarán los números curiosos
    let numerosCuriosos = [];

    let numeroActual = 1;

    while (numerosCuriosos.length < 5) {
        // si el número es curioso, lo agregamos al array
        if (esNumeroCurioso(numeroActual)) {
            numerosCuriosos.push(numeroActual);
        }
        numeroActual++;
    }

    // mostramos los números en un alert. El método join() lo utilizo para separar los número con comas ",".
    alert("Los primeros 5 números curiosos son: " + numerosCuriosos.join(', '));
}

// llamamos a esta función para que muestre los números curiosos
mostrarNumerosCuriosos();
