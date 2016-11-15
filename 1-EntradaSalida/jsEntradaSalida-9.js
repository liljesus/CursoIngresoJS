/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	
	//id	numeroUno
	//id	numeroDos
	//var numero_1 = parseInt(document.getElementById('sueldo').value);
	var numero_1 = document.getElementById('sueldo').value * 1;
	
	document.getElementById('resultado').value = numero_1 + numero_1 * 0.1;
	
}
