/*
Primer desafío:

1. Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
    
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

2. Declara una variable llamada nombre y asígnale el valor "Luna".

let nombre = Luna;

3. Crea una variable llamada edady asígnale el valor 25.

let edad = 25;

4. Establece una variable numeroDeVentas y asígnale el valor 50.

let numeroDeVentas = 50;

5. Establece una variable saldoDisponible y asígnale el valor 1000.

let saldoDisponible = 1000;

6. Muestra una alerta con el texto "¡Error! Completa todos los campos".

alert('¡Eror! Completa todos los campos');

7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".Ahora muestra una alerta con el valor de la variable mensajeDeError.

let mensajeError = '¡Error! Completa todos los campos';
alert(mensajeError);

8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.

let nombreDeUsuario = prompt('¿Cual es su nombre de usuario?');

9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.

let edadUsuario = prompt('Ingrese su edad');

10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

let edadParaConducir = 18;

if (edadUsuario >= edadParaConducir) {
    alert("¡Puedes obtener tu licencia de conducir!");
} else {
    alert("No tienes edad para conducir")
}

Segundo desafío:

11. Pregunta al usuario qué día de la semana es.Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".De lo contrario, muestra "¡Buena semana!".

let diaSemana = prompt('¿Qué dia de la semana es?');

if (diaSemana == 'Sabado' || diaSemana == 'Domingo') {
    alert('¡Buen fin de semana!');
} else if (diaSemana == 'Lunes' || diaSemana == 'Martes' || diaSemana == 'Miercoles' || diaSemana == 'Jueves' || diaSemana == 'Viernes') {
    alert('¡Buena semana!');
}

12. Verifica si un número ingresado por el usuario es positivo o negativo.Muestra una alerta informativa.

let numero = prompt('Ingrese un numero:');

if (numero < 0) {
    alert('El numero ' + numero + ' es negativo');
} else if (numero > 0) {
    alert('El numero ' + numero + ' es positivo');
} else {
    alert('El numero es cero');
}

13. Crea un sistema de puntuación para un juego.Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntuacion = prompt('Ingrese la puntuacion obtenida');

if (puntuacion >= 100) {
    alert('Felicidades has ganado!!');
} else {
    alert('Intente nuevamente para ganar');
}

14. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldo = 50;

alert('El saldo de su cuenta actualmente es de: ' + saldo);

15. Pide al usuario que ingrese su nombre mediante un prompt.Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt('Ingrese su nombre: ');

alert('Bienvenido ' + nombreUsuario + ', ya tenemos tus datos bancarios.')

Tercer desafío:

16. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'.Muestra cada número.

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

17. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.Muestra cada número.

let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}

18. Crea un programa de cuenta progresiva.Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numero = prompt('Indica un numero');
let contar = 0;

while (contar <= numero) {
    console.log(contar);
    contar++;
}

Cuarto desafío:

19. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

let mensaje = '¡Bienvenido!';
console.log(mensaje);

20. Crea una variable llamada "nombre" y asígnale tu nombre.Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = 'Giancarlos';
console.log('Hola!, ' + nombre);

21. Crea una variable llamada "nombre" y asígnale tu nombre.Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre = 'Giancarlos';
alert('Hola!, ' + nombre);

22. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(respuesta);

23. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 2;
let valor2 = 5;

let respuesta = valor1 + valor2;

console.log('La suma de ' + valor1 + ' y ' + valor2 + ' es igual a ' + respuesta + ' en la consola');

24. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 5;
let valor2 = 1;

let respuesta = valor1 - valor2;

console.log('La diferencia entre ' + valor1 + ' y ' + valor2 + ' es igual a ' + respuesta);

25. Pide al usuario que ingrese su edad con prompt.Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edadUsuario = prompt('Ingrese su edad');

if (edadUsuario >= 18) {
    console.log('Usted es mayor de edad');
} else {
    console.log('Usted es menor de edad');
}

26. Crea una variable "numero" y solicita un valor con prompt.Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt('Ingrese un numero');

if (numero > 0) {
    alert('Su numero es positivo');
} else if (numero < 0) {
    alert('Su numero es negativo');
} else {
    alert('Es cero');
}

27. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++
}

28. Crea una variable "nota" y asígnale un valor numérico.Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = prompt('Ingresa la nota');

if (nota >= 7) {
    alert('Aprobado');
} else {
    alert('Desaprobado');
}

29. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio = Math.random();

console.log(numeroAleatorio);

30. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

console.log(numeroAleatorio);

31. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

console.log(numeroAleatorio)
*/