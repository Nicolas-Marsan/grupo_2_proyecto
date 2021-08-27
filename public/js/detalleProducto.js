let condicion = document.querySelector('.condicion');
let marca = document.querySelector('.marca');
let sistemaOperativo = document.querySelector('.sistema-operativo');
let memoria = document.querySelector('.memoria');
let ram = document.querySelector('.ram');
let tamañoPantalla = document.querySelector('.tamaño-pantalla');
let resolucionPantalla = document.querySelector('.resolucion-pantalla');
let procesador = document.querySelector('.procesador');
let color = document.querySelector('.color');

function idProducto(){
    let url = location.href;
    let idProducto = url[(url.length - 1)];
    return idProducto;
}

function cargarDetalle(idProducto) {
    
    fetch(`http://localhost:3000/api/productos/${idProducto}`)
    .then(res => res.json())
    .then(dataApi => {
        condicion.innerText = dataApi.data.categoria.nombre;
        marca.innerText = dataApi.data.marca.nombre;
        sistemaOperativo.innerText = dataApi.data.sistema_operativo.nombre;
        memoria.innerText = `${dataApi.data.memoria.valor} GB`;
        ram.innerText = `${dataApi.data.ram.valor} GB`;
        tamañoPantalla.innerText = `${dataApi.data.pantalla.tamaño}''`;
        resolucionPantalla.innerText = `${dataApi.data.pantalla.resolucion} pxs`;
        procesador.innerText = dataApi.data.procesador.nombre;
        color.innerText = dataApi.data.color.nombre;
        
        if (dataApi.data.categoria.nombre != 'Usado'){
            condicion.style.color = 'green'
        }
    })
    .catch(err => console.error(err));
}

cargarDetalle(idProducto());

