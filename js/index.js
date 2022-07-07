const malbec = "Rutini Malbec";
const sauvingnon = "Sauvingnon Blanc";
const ipa = "ipa";
const pinot = "Pinot Noir";
const redLager = "Red Lager";

const noimportado = "No es importado";
const esimportado = "Es importado"




//Clases y Objetos//
class bebida {

    constructor(nombre, litros, precio,stock,descripcion,cantidad){

        this.nombre = nombre;
        this.litros = litros;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = 1;
        this.descripcion = descripcion;

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


    constructor(tipo,importado,anio,bodega,nombre,litros,precio,stock,descripcion,cantidad){
		super(nombre,litros,precio,stock,descripcion,cantidad);
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


	constructor(tipo,importado,nombre,litros,precio,stock,descripcion,cantidad){
		
		super(nombre,litros,precio,stock,descripcion,cantidad);
		this.tipo = tipo;
		this.importado = importado;	

	}

}


// Inicializacion de Objetos

let rutini = new vino(malbec,false,2020,"Rutini","Rutini Malbec Reserva", 1.25, 500,150,"Rojo rubí profundo. El dúo de cepas de origen francés da como resultado un tinto armonioso y equilibrado: la Cabernet Sauvignon entrega su carácter corpóreo y pleno, y la Malbec matiza el corte con taninos suaves y dulces, realzando una combinación única de aromas y sabores frutados.");
let granMedalla = new vino(malbec,false,2020,"Trapiche","Gran Medalla Trapiche",0.75,1000,120,"Rojo rubí profundo. El dúo de cepas de origen francés da como resultado un tinto armonioso y equilibrado: la Cabernet Sauvignon entrega su carácter corpóreo y pleno, y la Malbec matiza el corte con taninos suaves y dulces, realzando una combinación única de aromas y sabores frutados.");
let vinaDeBalbo = new vino(malbec,false,2022,"Los Haroldos","Vinas de Balbo",1.5,500,1000);
let rutiniPinot = new vino(pinot,false,2020,"Rutini","Pinot Noir Rutini",0.95,500,200,"Púrpura de media intensidad, con matices rojos. Aromas sutiles a frutas rojas frescas (cereza, frutilla, arándanos) unidos a otros más complejos que evocan el bosque, ahumados, cuero y tabaco. En el paladar, deja una sensación aterciopelada, en la que perdura el recuerdo de frutas secas (avellana).");
let patagoniaRoja = new cerveza(ipa,false,"Patagonia Ipa 1/2lt.",0.5,300,400,);
let luigiBosca = new vino(malbec,false,2020,"Luigi Bosca","Luigi Bosca Reserva Malbec",0.75,1000,300,"Es un tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter.");







let vinos = [];
let cervezas = [];
let carrito = [];
let bebidasSinAlcohol = [];


vinos.push(rutini,luigiBosca);
vinos.push(vinaDeBalbo);
cervezas.push(patagoniaRoja);




//Funciones


function agregarAlCarritoUnGranMedalla(){

    carrito.push();
    console.log("se cargo") 
}

function agregarAlCarrito(bebida) {
    carrito.push(bebida);
    alert("Agregaste un Producto");
}

function agregarCard(bebida) {
    let nombre = bebida.nombre;
    String(nombre);
    let nuevaCard = document.createElement("nuevaBebida");
    let imagenNuevo = new Image()
    imagenNuevo.src = `multimedia/${bebida.nombre}.jpg`
    nuevaCard.innerHTML = `<div class="col">
    <div class="card h-100">
      <div class="imagenProducto">
        <img src=${imagenNuevo.src} class="card-img-top" alt="foto ${bebida.nombre}">
      </div>
      
      <div class="card-body">
        <h5 class="card-title" id=${bebida.nombre}>${bebida.nombre}</h5>
        <p class="card-text">${bebida.descripcion}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Ultima compra hace 30 minutos</small>
      </div>
      <div class="boton">
        <button type="button" class="btn btn-primary" id='boton${bebida.nombre}'
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Agregar Producto</button>
    
        </div>
    </div>`
    
    document.querySelector('#cartas').appendChild(nuevaCard); 
    let botonBebida = document.getElementById(`boton${bebida.nombre}`);
    botonBebida.onclick = () =>{console.log("agregaste un producto")};


}




cervezas.push(patagoniaRoja);
cervezas[0].consultarStock();
cervezas[0].agregarAlStock(200);
cervezas[0].consultarStock();
nombreDelPrimero = vinos[0].consultarStock();







agregarCard(rutini);
agregarCard(rutiniPinot);
agregarCard(luigiBosca);







const ljson = JSON.stringify(rutini);
console.log(ljson);

localStorage.setItem('rutini',ljson);

let bajada = localStorage.getItem('rutini');
bajada =  JSON.parse(ljson);
console.log(bajada);