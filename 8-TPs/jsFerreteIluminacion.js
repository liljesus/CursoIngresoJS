/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	/*Comentarios*/{
	 	/*
		ArgentinaLuz
		FelipeLamparas
		JeLuz
		HazIluminacion
		Osram
	 	*/
 	}
 	
	var precio_lampara = 35;
	var lamparas_compradas = parseInt(document.getElementById('Cantidad').value);
	var marca = document.getElementById('Marca').value;
	var precio_final = 0;
	
	if(lamparas_compradas >= 6){
		//alert('descuento 50%');
		//alert(lamparas_compradas * precio_lampara);
		precio_final = lamparas_compradas * precio_lampara / 2;
		//document.getElementById('precioDescuento').value = precio_final;
	}else if(lamparas_compradas == 5){
		
		if(marca == 'ArgentinaLuz'){
			//alert('descuento 40%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.6;
			//document.getElementById('precioDescuento').value = precio_final;
		}else{
			//alert('descuento 30%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.7;
			//document.getElementById('precioDescuento').value = precio_final;
		}
		
	}else if(lamparas_compradas == 4){
		
		if(marca == 'ArgentinaLuz' || marca == 'FelipeLamparas'){
			//alert('descuento 25%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.75;
			//document.getElementById('precioDescuento').value = precio_final;
		}else{
			//alert('descuento 20%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.8;
			//document.getElementById('precioDescuento').value = precio_final;
		}
		
	}else if(lamparas_compradas == 3){
		
		if(marca == 'ArgentinaLuz'){
			//alert('descuento 15%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.85;
			//document.getElementById('precioDescuento').value = precio_final;
		}else if(marca == 'FelipeLamparas'){
			//alert('descuento 10%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.9;
			//document.getElementById('precioDescuento').value = precio_final;
		}else{
			//alert('descuento 5%');
			//alert(lamparas_compradas * precio_lampara);
			precio_final = lamparas_compradas * precio_lampara * 0.95;
			//document.getElementById('precioDescuento').value = precio_final;
		}
		
	}else{
		//alert('sin descuento ');
		//alert(lamparas_compradas * precio_lampara);
		precio_final = lamparas_compradas * precio_lampara;
		//document.getElementById('precioDescuento').value = precio_final;
	}
	
	document.getElementById('precioDescuento').value = precio_final;
	
	if(precio_final > 120){
		var iibb = precio_final * 0.1;
		document.getElementById('precioDescuento').value = precio_final + iibb;
		alert('Usted pago '+iibb+' de IIBB.');
	}
	
}
