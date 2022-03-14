let codigoPromocion = document.querySelector('#codigo');
let codigoPromocionEnviar = document.querySelector('#enviar-codigo');
let precio = document.querySelector('#precio');
let divPrecio = document.querySelector('.precio');
let total = document.querySelector('#total');
let descuentoAplicado = document.querySelector('.descuento-aplicado-text')
let descuentoNoAplicado = document.querySelector('.descuento-no-aplicado-text')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


codigoPromocionEnviar.addEventListener('click', ()=> {
    if (codigoPromocion.value == "DescFrancoSpinelli") {
        precio = parseInt(precio.innerHTML) * 0.9;
        total.classList.add('descuento-aplicado')
        divPrecio.innerHTML += `<p>$${toThousand(precio)}</p>`
        codigoPromocion.classList.add('descuento-aplicado-input');
        descuentoAplicado.style.display = "block"
        descuentoNoAplicado.style.display = "none"
    } else {
        descuentoNoAplicado.style.display = "block"
        
    }
})