import React from "react";
import "./style.css";

export default function App() {
  /*//pregunta#1
let edad = prompt("Ingrese su edad");
if (edad >= 18) {
    alert("Usted es mayor de edad");
}
else {
    alert("Usted es menor de edad");
}*/



//pregunta#2
//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
//«alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
/*let suma = 0;
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
alert("La suma total de los números es: " + suma);  */

//pregunta#3
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
/*let edad1 = prompt("Ingrese la edad1");
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
}*/

/*
//pregunta#4
//Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.
let i = 0;
let num;
let uno = 0;
let dos = 0;
let tres = 0;
while (i < 3) {
    num = Math.floor(Math.random() * 99) + 1;
    if (num !== uno && num !== dos && num !== tres) {
        if (i === 0) {
            uno = num;
        }
        else if (i === 1) {
            dos = num;
        }
        else {
            tres = num;
        }
        i++;
    }
}
console.log("Número 1: " + uno + "\nNúmero 2: " + dos + "\nNúmero 3: " + tres);*/

/*//pregunta#5
//Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Ingrese un texto");
let contador = 0;
for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u") {
        contador = + 1;
    }
}
console.log("El texto tiene :" + contador + " vocales");*/

/*
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
    if (car === "(") {
        copiar = true;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car === ")") {
        copiar = false;
    }
}
alert(salida);
*/

/*
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
*/

/*//pregunta8
//Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.
let num = prompt("Introduce un número");
let num1 = 0;
let num2 = 1;
let num3 = 0;
let i;
for (i = 0; i < num; i++) {
     num3 = num1 + num2;
     num1 = num2;
     num2 = num3;
     console.log(num3);
}
*/

/*
//pregunta9
//Realiza un juego de Piedra Papel Tijera contra el Pc
function aleatorio(minimo, maximo){
	const numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];

let opcionUsuario;
let opcionMaquina = aleatorio(0,2); 

opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2" , 0);

alert("Javascript elegio:" + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
{
  alert("Elegiste Piedra!");
  if(opcionMaquina == piedra)
  {
  	alert("Empate!");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Perdiste!");
  }
  
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste!");
  }

}
  
  
else if(opcionUsuario == papel)
{
  alert("Elegiste Papel!");
  if(opcionMaquina == piedra)
  {
    alert("Ganaste!");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Empate!");
  }
  
  else if(opcionMaquina == tijera) 
  {
    alert("Perdiste!");
  }
  
}

else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
	if(opcionMaquina == piedra)
    {
      alert("Perdiste!");
    }
    
    
    else if(opcionMaquina == papel)
    {
      alert("Ganaste!");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Empate!");
    }

}

else

{
	alert("Debes elegir 0,1 ó 2; Tonto!");
}

*/

//pregunta10
//Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
//aplicará el 21 por ciento por defecto.
/*let precio = prompt("Introduce el precio");
let iva = 0.13;
let resultado;
resultado = precio * iva;
console.log(resultado + ' Bs'); */
/* 13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return prompt("No ingresaste fecha");
  if (!(fecha instanceof Date)) return prompt("El valor que ingresaste no es una fecha válida");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
  aniosEnMS = 1000 * 60 * 60 * 24 * 365,
  aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
  return (Math.sign(aniosHumanos) === -1)
  ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
  :(Math.sign(aniosHumanos === 1)
  ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
  :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
  )}

  calcularAnios(new Date(2022, 0, 1));
  calcularAnios({});
  calcularAnios(false);
  //calcularAnios(new Date);
  calcularAnios(new Date(1984,4,23));
*/
/* Pregunta 14
const contarLetras = (cadena="") => {
  if(!cadena) return prompt("No ingresaste una cadena de texto");
  if(typeof cadena !== "string") return prompt(`El valor ${cadena} ingresado no es una cadenade texto`);
  let vocales = 0,
  consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  for (let letra of cadena){
  if(/[aeiouáéíóú]/.test(letra))vocales++;
  if(/[bcdfghjklmnñpqrstvwzyx]/.test(letra))consonantes++;
  }
  return console.info({
  cadena,
  vocales,
  consonantes
  })
 
  }
  contarLetras();
  contarLetras("Hola Mundo");
*/

/* 15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.
const validarnombre = (nombre="") => {
  if(!nombre) return console.warn("No ingresaste un nombre");
  if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);
  let expReg = /^[A-Za-zÑnÁáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛûÜü$\s]+$/g.test(nombre)
  return(expReg)
  ?console.info(`${nombre}, es un nombre válido`)
  :console.warn(`${nombre} no es válido`);
  }
  validarnombre(5);
  validarnombre("María, Eugenia");
  validarnombre("Edson");
*/

/*
//EJERCICIO 17
const funcionEjerecicio23 = (arregloParesImpares = undefined) => {
  if(arregloParesImpares === undefined){
  return console.warn("No se ingresó ningún elemento numérico al arreglo.");
  }
  if(!(arregloParesImpares instanceof Array)){
  return console.error("Los valores que ingresaste no son de un arreglo.");
  }
  if(arregloParesImpares.length === 0){
  return console.error("El arreglo no puede estar vacío.");
  }
  
  const arrayDePares = [];
  const arrayDeImpares = [];
  
  const Resultados = {
  arrayDePares,
  arrayDeImpares
  }
  
  for (let i = 0; i < arregloParesImpares.length; i++) {
  if(typeof arregloParesImpares[i] !== "number"){
  return console.error(`Los valores ${arregloParesImpares} no son números.`);
  } else {
  
  
  if(arregloParesImpares[i] % 2 === 0){
  arrayDePares.push(arregloParesImpares[i]);
  } else {
  arrayDeImpares.push(arregloParesImpares[i]);
  }
  }
  }
  console.info(Resultados);
  }
  
  funcionEjerecicio23([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  */

  /* pregunta 18  */
/*
  const carta = 'bici coche balón _playstation bici coche peluche  pelota';

  function listGifts(letter) {
    // ¡Tú puedes!
    let cleanArray= letter.split(" ").filter(toy => (toy !== "" && !toy.includes("_")));
    let objLetter={}
    cleanArray.forEach((toy)=>{
      (objLetter[toy]) ? objLetter[toy]+=1 : objLetter[toy]=1;
    })
    return objLetter
   }
  
  
  const regalos = listGifts(carta)
  
  console.log(regalos)
*/
/* prehunta 19 */
/*
function iterate(obj) {
  let res = [];
  for (let property in obj) {
    const child = obj[property];
    if (typeof child === 'object') {
      res = [...res, ...iterate(child)]
    }
    res.push(child);
  }
  return res;
}

function contains(store, product) {
  return iterate(store).some((item) => item === product)
}


const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(almacen, 'camiseta'));
console.log(contains(otroAlmacen, 'gameboy'));
*/


/*pregunta#20*/

function missingReindeer(ids) {
  let salida;
  const aux = [...Array(ids.length).keys()];
  const res = ids.sort((a, b) => a - b);
  (JSON.stringify(aux) === JSON.stringify(res))
    ?
      salida = res.at(-1) + 1
    :
    (
      res.forEach((_, index, arr) => {
        if (arr.indexOf(index) === -1) {
          salida = index;
        }
      })
    )
  return salida;
}

console.log(missingReindeer([0, 2, 3])) //1
console.log(missingReindeer([0,1]))
console.log(missingReindeer([0]))
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))




    return (
    <div>
        <h1>Hola mundo</h1>
        
    </div>
  );
}
