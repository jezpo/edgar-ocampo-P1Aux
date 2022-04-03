//pregunta#3
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
let edad1 = prompt("Ingrese la edad1");
let edad2 = prompt("Ingrese la edad2");
let edad3 = prompt("Ingrese la edad3");
let nombre1 = prompt("Ingrese el nombre1");
let nombre2 = prompt("Ingrese el nombre2");
let nombre3 = prompt("Ingrese el nombre3");
if (edad1 > edad2 && edad1 > edad3) {
    alert("El mayor es " + nombre1);
}
else if (edad2 > edad1 && edad2 > edad3) {
    alert("El mayor es " + nombre2);
}
else {
    alert("El mayor es " + nombre3);
}
