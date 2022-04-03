//pregunta#2
//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
//«alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;
let numero = prompt("Ingrese un número");
while (numero != null) {
    if (isNaN(numero)) {
        alert("No es un número");
    }
    else {
        suma += parseInt(numero);
    }
    numero = prompt("Ingrese un número");
}
alert("La suma total de los números es: " + suma);  