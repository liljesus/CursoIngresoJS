/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	
	//var numero_1 = parseInt(document.getElementById('importe').value);
	var numero_1 = document.getElementById('importe').value * 1;
	
	document.getElementById('resultado').value = numero_1 * 0.75;
	
}
