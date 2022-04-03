//pregunta10
//Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
//aplicará el 21 por ciento por defecto.
function masIva(precio, iva){
    iva = iva || 21
    const coniva = (precio + precio*iva/100);
    return coniva;
  }
  let precio = Number(prompt("Introduce un precio"));
  const iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    const resultado = masIva(precio, iva);
  }
  else{
    const resultado = masIva(precio);
  }
  alert("Precio sin iva: " + precio);
  alert("Precio más Iva: " + resultado);