//Declaración de variables
let numeroUsuario = 0;
let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 1;
let maximoIntentos = 3;

//Función para cambiar de texto un elemento
function cambiarTexto(elemento, nuevoTexto) {
    let parrafo = document.getElementById(elemento);
    parrafo.textContent = nuevoTexto;
}

//Función para limpiar el input al reintentar
function limpiar() {
    document.getElementById('numeroUsuario').value = '';
}

//Función para verificar si el usuario acerto el numero secreto
function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroUsuario == numeroSecreto) {
        cambiarTexto('texto__alterado', '¡Acertaste! El número secreto era ' + numeroSecreto + ' lo hiciste en ' + intentos + (intentos === 1 ? ' intento. ' : ' intentos. '));
        console.log('Se adivino el numero secreto en ' + intentos + (intentos === 1 ? ' intento. ' : ' intentos. '));
        document.getElementById('jugar').setAttribute('disabled', 'true');
        document.getElementById('reintentar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            cambiarTexto('texto__alterado', '¡El número secreto es menor!');
        } else {
            cambiarTexto('texto__alterado', '¡El número secreto es mayor!');
        }
        intentos++;
        if (intentos > maximoIntentos) {
            cambiarTexto('texto__alterado', '¡Se acabaron los intentos el número secreto es ' + numeroSecreto + '!');
            console.log('No se adivino el numero secreto.');
            document.getElementById('jugar').setAttribute('disabled', 'true');
            document.getElementById('reintentar').removeAttribute('disabled');
        }
        limpiar();
    }
}

//Al presionar el boton jugar se ejecuta la funcion intentoUsuario
document.getElementById('jugar').onclick = intentoUsuario;

//Funcion para generar el numero secreto automaticamente
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroAleatorio);
    return numeroAleatorio;
}

//Funcion para las propiedades iniciales del juego
function propiedadesIniciales() {
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
    cambiarTexto('texto__alterado', 'Ingresa un número del 1 al ' + numeroMaximo + ':');
}

//Funcion para reiniciar el juego
function reintentar() {
    limpiar();
    propiedadesIniciales();
    document.getElementById('jugar').removeAttribute('disabled');
    document.getElementById('reintentar').setAttribute('disabled', 'true');

}

//Al presionar el boton reintentar se ejecuta la funcion reintentar
document.getElementById('reintentar').onclick = reintentar;

//Al comenzar se ejecuta la funcion propiedadesIniciales
propiedadesIniciales();