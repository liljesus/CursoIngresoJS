/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	//id	numeroUno
	//id	numeroDos
	//var numero_1 = parseInt(document.getElementById('numeroDividendo').value);
	var numero_1 = document.getElementById('numeroDividendo').value * 1;
	//var numero_2 = parseInt(document.getElementById('numeroDivisor').value);
	var numero_2 = document.getElementById('numeroDivisor').value * 1;
	
	alert('el modulo es ' + (numero_1 % numero_2));
	
}
