let imagen = document.querySelector('.imagen-celu');
let modelo = document.querySelector('.nombre-celu-pd');
let precio = document.querySelector('.precio-detalleProducto-pd');
let condicion = document.querySelector('.condicion');
let marca = document.querySelector('.marca');
let sistemaOperativo = document.querySelector('.sistema-operativo');
let memoria = document.querySelector('.memoria');
let ram = document.querySelector('.ram');
let tamañoPantalla = document.querySelector('.tamaño-pantalla');
let resolucionPantalla = document.querySelector('.resolucion-pantalla');
let procesador = document.querySelector('.procesador');
let color = document.querySelector('.color');
let btnEditarEliminar = document.querySelector('.editar-eliminar');
let agregarCarrito = document.querySelector('.agregar-carrito');





function idProducto(){
    let url = location.href;
    let idProducto = url[(url.length - 1)];
    if (url[(url.length - 2)] > 0 && url[(url.length - 2)] < 10){
        idProducto = `${url[(url.length - 2)]}${url[(url.length - 1)]}`
    }
    return parseInt(idProducto);
}

let primerProducto = false;
let idContador = (idProducto());

if (idContador == idProducto() && primerProducto == false){
    cargarPrimerProducto(idContador)
    primerProducto = true;
}

function cargarPrimerProducto(idContador) {
    fetch(`http://localhost:3000/api/productos/full`)
    .then(res => res.json())
    .then(dataApi => {

        console.log(dataApi.data);
        let arrayID = dataApi.data.map(element => element.id)
        if (arrayID.includes(idContador)){
            let producto = dataApi.data.filter(element => element.id == idContador);
            return mostrarProducto(producto)
    }})
    .catch(err => console.error(err));
}

function siguiente(){
    idContador++;
    fetch(`http://localhost:3000/api/productos/full`)
    .then(res => res.json())
    .then(dataApi => {
        let arrayID = dataApi.data.map(element => element.id)
        if (arrayID.includes(idContador)){
            let producto = dataApi.data.filter(element => element.id == idContador);
            return mostrarProducto(producto)
        } else {
            idContador = validaciónID(idContador);
            siguiente()
        }
    })
    .catch(err => console.error(err));
    
}


function validaciónID(n) {
    if (n = 15) {
        return  0;
    } else if (n = 0){
        console.log('pase por aca');
        return 14;
    } else {
        console.log('pase por acaaaaaaaaaaaaaaaaaa');
        return n;
    }
}

function anterior(){
    idContador--;
    fetch(`http://localhost:3000/api/productos/full`)
    .then(res => res.json())
    .then(dataApi => {
        let arrayID = dataApi.data.map(element => element.id)
        if (arrayID.includes(idContador)){
            let producto = dataApi.data.filter(element => element.id == idContador);
            return mostrarProducto(producto);
        } else if(idContador !==  0){
            anterior()
        } else {
            idContador = 14;
            anterior()
        }

        
        
        // else if (idContador >= 0){
        //     idContador = ultimoID(idContador);
        //     return anterior();
        // } else {
        //     return idContador = 15;
        // }
    })
    .catch(err => console.error(err));
    
}

function mostrarProducto(producto) {
    console.log(producto);
    {
        imagen.innerHTML = `<img class="imagen-celu" src="/images/products/${producto[0].imagen}" alt="celu">`;
        modelo.innerHTML = `<h1>${producto[0].modelo}</h1>`;
        precio.innerHTML = `<h2>${producto[0].precio}</h2>`;
        condicion.innerText = producto[0].categoria.nombre;
        marca.innerText = producto[0].marca.nombre;
        sistemaOperativo.innerText = producto[0].sistema_operativo.nombre;
        memoria.innerText = `${producto[0].memoria.valor} GB`;
        ram.innerText = `${producto[0].ram.valor} GB`;
        tamañoPantalla.innerText = `${producto[0].pantalla.tamaño}''`;
        resolucionPantalla.innerText = `${producto[0].pantalla.resolucion} pxs`;
        procesador.innerText = producto[0].procesador.nombre;
        color.innerText = producto[0].color.nombre;
        btnEditarEliminar.innerHTML = `<button class="boton-editar"><a href="/products/${producto[0].id}/edit">Editar</a></button><form action="/products/${producto[0].id}?_method=DELETE" method="POST" id="formulario-delete">
        <button class="boton-eliminar">Eliminar</button>
        </form>`;
        agregarCarrito.innerHTML = `<form  action='/products/carrito/${producto[0].id}' class="boton-carrito-pd" method="POST">
        <label class="boton-carrito-pd" for="cantidad">Cantidad</label>
        <input  class='canti' type="text" name="cantidad"  class="control" value="1">
        <a href="#"><button type="submit" class="button-form-pd">Agregar al carrito</button></a>
    </form>`
        
        if (producto[0].categoria.nombre != 'Usado'){
            condicion.style.color = 'green'
        }
    }
}


