//pregunta#4
//Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.
let i = 0;
let num;
let uno = 0;
let dos = 0;
let tres = 0;
while (i < 3) {
    num = Math.floor(Math.random() * 99) + 1;
    if (num != uno && num != dos && num != tres) {
        if (i == 0) {
            uno = num;
        }
        else if (i == 1) {
            dos = num;
        }
        else {
            tres = num;
        }
        i++;
    }
}
console.log("Número 1: " + uno + "\nNúmero 2: " + dos + "\nNúmero 3: " + tres);
