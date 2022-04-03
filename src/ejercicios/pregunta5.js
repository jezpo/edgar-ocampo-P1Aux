//pregunta#5
//Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Ingrese un texto");
const contador = 0;
for (const i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
        contador++;
    }
}
console.log("El texto tiene :" + contador + " vocales");