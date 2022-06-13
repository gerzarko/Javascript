
function parse(elementoACambiar) {
	elementoACambiar = parseInt(elementoACambiar);
  	return elementoACambiar;
}
function calcularTotal(cantidad,precio) {
	for (let i = 1; i <= cantidad; i++) {
		let total= 0;	
		total = cantidad * precio;
		return total;
}}

alert("Bienvenido a la vinoteca Cleopatra");
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
		cantidadElegida = prompt("Ahora selecciona la cantidad, recorda que para encargos mayores a 12 botellas tenes que llamarnos al 0112435412");
	  	parse(cantidadElegida);

	}

  	if (vinoElegido == 1 ) {
  	 	totalPago = calcularTotal(cantidadElegida,500)	;
		alert(totalPago);
	}

	if (vinoElegido == 2 ) {
	  	 totalPago = calcularTotal(cantidadElegida, 300);
		alert(totalPago);

	}
		 		
  	
	
}

