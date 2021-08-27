window.onload = function() {
    let form = document.querySelector('form')

    form.addEventListener('submit', function (e) {
        //e.preventDefault();
        let errores = []

        // donde se mostraran los errores
        let errorModelo = document.querySelector('.errorModelo')
        let errorPrecio = document.querySelector('.errorPrecio')


        // los datos
        let modelo = document.querySelector('#control')
        let precio = document.querySelector('#precio')

        if(modelo.value == ''){
            errores.push('Debes ingresar un modelo')
            modelo.classList.add('is-invalid')
        } else if(modelo.value.length < 5) {
            errores.push('El modelo debe tener mas de 5 caracteres')
            modelo.classList.add('is-invalid')
        }else if(modelo.type == 'number') {
            errores.push('El modelo tiene que ser de tipo texto')
            modelo.classList.add('is-invalid')
        } else {
            modelo.classList.remove('is-invalid');
            modelo.classList.add('control');
        }


        if(precio.value == ''){
            errores.push('Debes ingresar un precio')
            precio.classList.add('is-invalid')

        } else if(modelo.type == 'number') {
            errores.push('El precio tiene que ser de tipo numerico')
            precio.classList.add('is-invalid')

        } else {
            precio.classList.remove('is-invalid');
            precio.classList.add('control');
        }


        /* if(precio.value == ''){
            errores.push('Debes ingresar un precio')
        } */




        errorModelo.innerHTML = '';
        errorPrecio.innerHTML = '';


        if(errores.length > 0){
        e.preventDefault();
        errorModelo.innerHTML = '';
        errorPrecio.innerHTML = '';
        for(let i=0 ; i<errores.length; i++){
            //errores modelo
            if (errores[i] == 'Debes ingresar un modelo' ) {
                errorModelo.innerHTML += `<p>${errores[i]}</p>`
            }
            if (errores[i] == 'El modelo debe tener mas de 5 caracteres' ) {
                errorModelo.innerHTML += `<p>${errores[i]}</p>`
            }
            if (errores[i] == 'El modelo tiene que ser de tipo texto' ) {
                errorModelo.innerHTML += `<p>${errores[i]}</p>`
            } //errores precio
            if (errores[i] == 'Debes ingresar un precio' ) {
                errorPrecio.innerHTML += `<p>${errores[i]}</p>`
            }
            if (errores[i] == 'El precio tiene que ser de tipo numerico' ) {
                errorPrecio.innerHTML += `<p>${errores[i]}</p>`
            }


        }

        }
        
    })
}