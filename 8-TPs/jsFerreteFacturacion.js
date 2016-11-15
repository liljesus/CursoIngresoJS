/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precio_1 = document.getElementById('PrecioUno').value * 1;
	//var precio_1 = parseInt(document.getElementById('PrecioUno').value);
	var precio_2 = document.getElementById('PrecioDos').value * 1;
	//var precio_2 = parseInt(document.getElementById('PrecioDos').value);
	var precio_3 = document.getElementById('PrecioTres').value * 1;
	//var precio_3 = parseInt(document.getElementById('PrecioTres').value);
	
	alert(precio_1 + precio_2 + precio_3);
	
}
function Promedio () 
{
	
	var precio_1 = document.getElementById('PrecioUno').value * 1;
	//var precio_1 = parseInt(document.getElementById('PrecioUno').value);
	var precio_2 = document.getElementById('PrecioDos').value * 1;
	//var precio_2 = parseInt(document.getElementById('PrecioDos').value);
	var precio_3 = document.getElementById('PrecioTres').value * 1;
	//var precio_3 = parseInt(document.getElementById('PrecioTres').value);
	
	alert((precio_1 + precio_2 + precio_3) / 3);
	
}
function PrecioFinal () 
{
	
	var precio_1 = document.getElementById('PrecioUno').value * 1;
	//var precio_1 = parseInt(document.getElementById('PrecioUno').value);
	var precio_2 = document.getElementById('PrecioDos').value * 1;
	//var precio_2 = parseInt(document.getElementById('PrecioDos').value);
	var precio_3 = document.getElementById('PrecioTres').value * 1;
	//var precio_3 = parseInt(document.getElementById('PrecioTres').value);
	
	alert((precio_1 + precio_2 + precio_3) * 1.21);
	
}