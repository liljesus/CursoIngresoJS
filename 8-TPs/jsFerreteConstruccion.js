/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	
	var largo = document.getElementById('Largo').value * 1;
	//var largo = parseInt(document.getElementById('Largo').value);
	var ancho = document.getElementById('Ancho').value * 1;
	//var ancho = parseInt(document.getElementById('Ancho').value);
	
	alert((largo * 2 + ancho * 2) * 3) + 'm de alambre';
	
}
function Circulo () 
{
	
	var radio = document.getElementById('Radio').value * 1;
	//var radio = parseInt(document.getElementById('Radio').value);
	
	alert((Math.PI * radio * 2 * 3) + 'm de alambre');
	
}
function Materiales () 
{
	
	var largo = document.getElementById('Largo').value * 1;
	//var largo = parseInt(document.getElementById('Largo').value);
	var ancho = document.getElementById('Ancho').value * 1;
	//var ancho = parseInt(document.getElementById('Ancho').value);
	
	var superficie = (largo * ancho);
	
	alert((superficie * 2) + ' bolsas de cemento y ' + (superficie * 3) + ' bolsas de cal');
	
}