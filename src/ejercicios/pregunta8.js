//pregunta8
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

