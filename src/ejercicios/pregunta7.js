//pregunta#7
//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
//mostrar “lat euq aloh”
let cadena = prompt("Introduce una cadena de texto");
let numchar = cadena.length;
let j;
let car;
let salida = "";
for (j = numchar - 1; j >= 0; j--) {
    car = cadena.charAt(j);
    salida = salida + car;
}
console.log(salida);