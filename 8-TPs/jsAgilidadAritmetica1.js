/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	
	var max = 10;
	var min = 1;
	
	var array = ['+', '-', '*', '/'];
	
	var max_array = 3;
	var min_array = 0;
	
	document.getElementById('PrimerNumero').value = Math.floor(Math.random() * (max - min)) + min;
	document.getElementById('Operador').value = array[Math.floor(Math.random() * (max_array - min_array)) + min_array];
	document.getElementById('SegundoNumero').value = Math.floor(Math.random() * (max - min)) + min;
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
