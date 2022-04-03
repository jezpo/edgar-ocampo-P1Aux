//pregunta#6
//Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la
//cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará
//“que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
//desde el primer paréntesis hasta el final.
let cadena = prompt("Introduce una cadena de texto");
let numchar = cadena.length;
let j;
let car;
let salida = "";
let copiar = false;
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);
    if (car == "(") {
        copiar = true;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == ")") {
        copiar = false;
    }
}
alert(salida);
