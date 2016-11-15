/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	//id	numeroUno
	//id	numeroDos
	var numero_1 = document.getElementById('numeroUno').value * 1;
	var numero_2 = document.getElementById('numeroDos').value * 1;
	
	alert('la suma es ' + (numero_1 + numero_2));
	
	//-----------------------------------------------------------//
	/*
	var numero_1 = document.getElementById('numeroUno').value;
	var numero_2 = document.getElementById('numeroDos').value;
	
	var suma = parseInt(numero_1) + parseInt(numero_2);
	alert('la suma es ' + suma);
	*/
	//-----------------------------------------------------------//
	/*
	var numero_1 = document.getElementById('numeroUno').value;
	var numero_2 = document.getElementById('numeroDos').value;
	
	numero_1 = parseInt(numero_1);
	numero_2 = parseInt(numero_2);
	
	var suma = numero_1 + numero_2;
	alert('la suma es ' + suma);
	*/
}

function restar()
{
	
	//id	numeroUno
	//id	numeroDos
	//var numero_1 = parseInt(document.getElementById('numeroUno').value);
	var numero_1 = document.getElementById('numeroUno').value * 1;
	//var numero_2 = parseInt(document.getElementById('numeroDos').value);
	var numero_2 = document.getElementById('numeroDos').value * 1;
	
	alert('la resta es ' + (numero_1 - numero_2));
	
}

function multiplicar()
{ 
	
	//id	numeroUno
	//id	numeroDos
	//var numero_1 = parseInt(document.getElementById('numeroUno').value);
	var numero_1 = document.getElementById('numeroUno').value * 1;
	//var numero_2 = parseInt(document.getElementById('numeroDos').value);
	var numero_2 = document.getElementById('numeroDos').value * 1;
	
	alert('la multiplicacion es ' + (numero_1 * numero_2));
	
}

function dividir()
{
	
	//id	numeroUno
	//id	numeroDos
	//var numero_1 = parseInt(document.getElementById('numeroUno').value);
	var numero_1 = document.getElementById('numeroUno').value * 1;
	//var numero_2 = parseInt(document.getElementById('numeroDos').value);
	var numero_2 = document.getElementById('numeroDos').value * 1;
	
	alert('la divicion es ' + (numero_1 / numero_2));
	
}

