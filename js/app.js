// Declaración de variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 5;

// Muestra en la consola el número secreto
console.log(numeroSecreto);

// Loop principal del juego
while (numeroUsuario !== numeroSecreto) {
    // Solicita al usuario que ingrese un número dentro del rango definido
    numeroUsuario = parseInt(prompt('Indica un número entre 1 y ' + numeroMaximo + ', por favor:'));

    console.log(numeroUsuario);

    // Comprueba si el número ingresado por el usuario es igual al número secreto
    if (numeroUsuario === numeroSecreto) {
        // Si el usuario acierta
        console.log("Verificación del número secreto: " + numeroSecreto);
        alert(`¡Acertaste! El número secreto era ${numeroUsuario}. Lo adivinaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
    } else {
        // Si el número ingresado es incorrecto
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor.');
        } else {
            alert('El número secreto es mayor.');
        }
        // Incrementa el contador de intentos y verifica si se alcanzó el máximo
        intentos++;
        if (intentos > maximosIntentos) {
            alert(`¡Agotaste tus ${maximosIntentos} intentos! El número secreto era ${numeroSecreto}.`);
            break;
        }
    }
}
