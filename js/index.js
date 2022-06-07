

alert("Bienvenido a la vinoteca de Cleopatra");

let respuesta;
respuesta = prompt("Que andas buscando?\n Selecciona del siguiente catalogo indicando el numero de lo que queres encargar\n 1.Vino\n 2.Vodka\n 3:Cerveza\n 4:Licores");
respuesta = parseInt(respuesta);

if (respuesta == 1  ) {
	let vinoElegido = prompt("Nuestros vinos son\n 1)Balbo: 500$\n 2)Chacabuco: 300$");
  	let cantidadElegida = prompt("Ahora selecciona la cantidad, recorda que para encargos mayores a 12tenes que llamarnos al 0112435412");
  	vinoElegido = parseInt(vinoElegido);
  	cantidadElegida = parseInt(cantidadElegida);
  	let totalPago =0;
	
	while (vinoElegido != 1 && 2 ) {
		
		vinoElegido = prompt("Nuestros vinos son\n 1)Balbo: 500$\n 2)Chacabuco: 300$");
		  
  		vinoElegido = parseInt(vinoElegido);
	}

	while (cantidadElegida > 12  && cantidadElegida < 1 )  {
		cantidadElegida = prompt("Ahora selecciona la cantidad, recorda que para encargos mayores a 12tenes que llamarnos al 0112435412");
	  cantidadElegida = parseInt(cantidadElegida);

  	
	}

  	if (vinoElegido == 1 ) {
  		for (let i= 1; i <= cantidadElegida; i++) {
			totalPago = 500*i;
	
  	}}
	if (vinoElegido == 2 ) {
  		for (let i= 1; i <= cantidadElegida; i++) {
			totalPago = 300*i;
	
  	}
		 		
	}
	alert(totalPago);
  	}


