//pregunta9
//Realiza un juego de Piedra Papel Tijera contra el Pc
function aleatorio(minimo, maximo)
{
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