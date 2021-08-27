window.onload = function() {
    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        //e.preventDefault();
        let errores = []

        // donde se mostraran los errores
        let errorModelo = document.querySelector('.errorModelo')
        let errorPrecio = document.querySelector('.errorPrecio')
        let errorFoto = document.querySelector('.errorFoto')


        // los datos
        let modelo = document.querySelector('#control')
        let precio = document.querySelector('#precio')
        let foto = document.querySelector('#foto')



        let lugarF = foto.value.indexOf('.') + 1;

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


        if(foto.value == ''){
            errores.push('Debes ingresar una imagen')
        } else {
            let contador=0;
            if(foto.value[lugarF] == 'j' || foto.value[lugarF] == 'p' ){
                lugarF++;
                contador++;
            } if(foto.value[lugarF] == 'pe' || foto.value[lugarF] == 'p' || foto.value[lugarF] == 'n' ){
                lugarF++;
                contador++;
            } if(foto.value[lugarF] == 'g'){
                lugarF++;
                contador++;
            }
            if(contador != 3){errores.push('La imagen debe ser formato JPG, JPEG o PNG')}

        }

        errorModelo.innerHTML = '';
        errorPrecio.innerHTML = '';
        errorFoto.innerHTML = '';

        if(errores.length > 0){
        e.preventDefault();
        errorModelo.innerHTML = '';
        errorPrecio.innerHTML = '';
        errorFoto.innerHTML = '';
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
            } //Errores
            if (errores[i] == 'Debes ingresar una imagen' ) {
                errorFoto.innerHTML += `<p>${errores[i]}</p>`
            }
            if (errores[i] == 'La imagen debe ser formato JPG, JPEG o PNG' ) {
                errorFoto.innerHTML += `<p>${errores[i]}</p>`
            }


        }

        }
        
    })
}