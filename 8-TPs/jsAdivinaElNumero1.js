/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	
	document.getElementById('intentos').value = 0;
	
	var max = 100;
	var min = 1;
	
	numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
	
	//Genero el número RANDOM entre 1 y 100
	 
		alert(numeroSecreto );
	

}

function verificar()
{
	
	var numero_ingresado = document.getElementById('numero').value * 1;
	
	if(numero_ingresado == numeroSecreto){
		
		contadorIntentos = document.getElementById('intentos').value * 1;
		
		alert('Usted es un ganador!!! y en solo '+(contadorIntentos+1)+' intentos');
		
	}else if(numero_ingresado < numeroSecreto){
		
		alert('Falta....');
		
		contadorIntentos = document.getElementById('intentos').value++;
		
	}else if(numero_ingresado > numeroSecreto){
		
		alert('Menos....');
		
		contadorIntentos = document.getElementById('intentos').value++;
		
	}
	
}