// Función para descifrar el texto
function descifrarCesar(texto, nivel, alfabeto) {
    let abecedario;

    if (alfabeto === "0") {
        // castellano
        abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    } else {
        // inglés
        abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let resultado = ""; // en esta variable se va a almacenar el resultado del texto a descifrar

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (abecedario.includes(char)) {
            // aquí meto la lógica para hacer el desplazamiento de los caracteres
            let index = abecedario.indexOf(char);
            let newIndex = (index - nivel + abecedario.length) % abecedario.length;

            // aquí añado el nuevo carácter al resultado
            resultado += abecedario[newIndex];
        } else {
            resultado += char;
        }
    }

    return resultado;
}

document.getElementById('boton').addEventListener('click', function(){

    // obtenemos los valores de los inputs del formulario
    let alfabeto = document.getElementById("alfabeto").value;
    let texto = document.getElementById("texto").value.toUpperCase();
    let nivel = parseInt(document.getElementById("nivel").value);

    let textoDescifrado = descifrarCesar(texto, nivel, alfabeto);

    // le metemos al párrafo con id "resultado" el resultado del descifrado
    document.getElementById("resultado").innerHTML = textoDescifrado;

})



    



