const malbec = "Rutini Malbec";
const sauvingnon = "Sauvingnon Blanc";
const ipa = "ipa";
const pinot = "Pinot Noir";
const redLager = "Red Lager";

const noimportado = "No es importado";
const esimportado = "Es importado"




//Clases y Objetos//
class bebida {

    constructor(nombre, litros, precio,stock,cantidad){

        this.nombre = nombre;
        this.litros = litros;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = 1;
    }

    devolverNombre () {
		return this.nombre;
    }
    devolverLitros (){
        return this.litros;
    }

    devolverPrecio() {
        alert (this.precio);
    }

	consultarStock(){
		return this.stock = 0;
	}
	agregarAlStock(stockAgregar){
		this.stock = this.stock + stockAgregar; 
	}
	reducirStock(stockArestr){
		this.stock = this.stock - stockArestar
	}
}

class vino extends bebida {


    constructor(tipo,importado,anio,bodega,nombre,litros,precio,stock){
		super(nombre,litros,precio,stock);
		this.tipo = tipo;
        this.importado = importado;
        this.anio = anio;
        this.bodega = bodega;

    }
    devolverTipo(){
        return this.tipo;
    }

    devolverImportados(){
		return this.importado;
    }

    devolverAnio (){
        return this.anio;
    }
}
class cerveza extends bebida{


	constructor(tipo,importado,nombre,litros,precio,stock){
		
		super(nombre,litros,precio,stock);
		this.tipo = tipo;
		this.importado = importado;	

	}

}


// Inicializacion de Objetos

let rutini = new vino(malbec,false,2020,"Rutini","Rutini Malbec Reserva", 1.25, 500,150);
let granMedalla = new vino(malbec,false,2020,"Trapiche","Gran Medalla",0.75,1000,120);
let vinaDeBalbo = new vino(malbec,false,2022,"Los Haroldos","Vinas de Balbo",1.5,500,1000);
let rutiniPinot = new vino(pinot,false,2020,"Rutini","Pinot Noir Rutini",0.95,500,200);
let patagoniaRoja = new cerveza(ipa,false,"Patagonia Ipa 1/2lt.",0.5,300,400);









let vinos= [];
let cervezas = [];
let carrito = [];

vinos.push(rutini);
vinos.push(vinaDeBalbo);
cervezas.push(patagoniaRoja);



//Funciones


function agregarAlCarritoUnGranMedalla(){

    carrito.push();
    alert("Agregaste un producto")
}

function agregarAlCarritoUnRutiniMalbec() {
    carrito.push(rutini);
    alert("Agregaste un Producto");
}





cervezas.push(patagoniaRoja);
cervezas[0].consultarStock();
cervezas[0].agregarAlStock(200);
cervezas[0].consultarStock();
nombreDelPrimero = vinos[0].consultarStock();


const cocacola = new bebida ("cocacola",0.75,200);




let titulo = document.getElementById("titulo");
titulo.innerText = "Tu mama";

let subtitulo = document.getElementsByClassName("subtitulo");
subtitulo[1].innerHTML = "qsy";

let subsubtitulo = document.createElement("div");
subsubtitulo.innerHTML = `<h3> qsy: ${vinos[1].nombre}</h3>`;
document.body.append(subsubtitulo);

let nombreGranMedalla = document.getElementById("nombreGranMedalla");
nombreGranMedalla.innerText = granMedalla.nombre;




let botonprincipal = document.getElementById("botongran");
botonprincipal.addEventListener('click', agregarAlCarritoUnGranMedalla);

let botonmalbec = document.getElementById("botonRutiniPinot");
botonmalbec.addEventListener('click',agregarAlCarritoUnRutiniMalbec);


