/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//id	elNombre
	//document.g [TAB] [SHIFT]+[i]
	var dato = prompt('ingrese dato');

	document.getElementById('elNombre').value = dato;

}

