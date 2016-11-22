/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	document.getElementById('intentos').value = 0;
	contadorIntentos = 0;
	
	var max = 100;
	var min = 1;
	
	numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
	
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	
}

function verificar()
{
	
	var numero_ingresado = parseInt(document.getElementById('numero').value);
	
	if(numero_ingresado == numeroSecreto){
		
		contadorIntentos = (parseInt(document.getElementById('intentos').value)) + 1;
		
		if(contadorIntentos == 1){
			alert('usted es un Psíquico');
		}else if(contadorIntentos == 2){
			alert('excelente percepción');
		}else if(contadorIntentos == 3){
			alert('Esto es suerte');
		}else if(contadorIntentos == 4){
			alert('Excelente técnica');
		}else if(contadorIntentos == 5){
			alert('usted está en la media');
		}else if(contadorIntentos > 5 && contadorIntentos <= 10){
			alert('falta técnica');
		}else{
			alert('afortunado en el amor!!');
		}
		
	}else if(numero_ingresado < numeroSecreto){
		
		alert('Falta....');
		
		contadorIntentos = document.getElementById('intentos').value++;
		
	}else if(numero_ingresado > numeroSecreto){
		
		alert('Menos....');
		
		contadorIntentos = document.getElementById('intentos').value++;
		
	}
	
}