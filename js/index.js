

/*Asi es como declaro una variable let variable*/
let edad
edad =0
/*Declaro una constante, tiene que estar inicializada en la misma linea*/

const apellido = "zarkovich"
  console.log(typeof apellido
  )

let preguntar = prompt("tu nombre papa")


console.log(preguntar)

let edad_pregunta = prompt("cual es tu edad pendejo")
edad = parseInt(edad_pregunta)

alert("cagaste")



if (edad>20) {
  console.log("jaja viejo de mierda")	
}else{
	console.log("a pero mira que pendejo")

}


for (let i = 0; i <  5; i++) {

	console.log(i
	)
}

while (edad < 30) {

  edad++
  console.log(edad)


}



function devuelve_edad_ala_mitad(edad){
	
	edad = edad / 2 
	return edad
}

edad = devuelve_edad_ala_mitad(edad)

console.log(edad)

