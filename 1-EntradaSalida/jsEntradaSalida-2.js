/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{

	//Concepto de variable
	//Concatenacion
	//Prompt

	var producto = prompt('ingrese marca', 'sin marca');

	var precio = prompt('ingrese precio', '0');

	alert('su producto es: ' + producto + ', y su precio es : ' + precio);

}