window.onload = function () {
    let form = document.querySelector('form')
    console.log(form);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(e);
        //acumulador de errores
        let errores = []
        //datos
        let email = document.querySelector('#email')
        let password = document.querySelector('#contrasenia')

        //donde se mostrara el error
        let errorEmail = document.querySelector('.errorEmail')
        let errorPassword = document.querySelector('.errorPassword')

        //Para comprobar que el mail viene en formato valido
        let expresion = /\w+@\w+\.[a-z]/ 

        if(email.value == ''){
            errores.push('Debes ingresar un correo electronico')
            email.classList.add('is-invalid')
        } else if(!expresion.test(email.value)){
            errores.push('Debes ingresar un correo electronico valido')
            email.classList.add('is-invalid')
        } else {
            email.classList.remove('is-invalid')
            email.classList.add('control');
        }

        if (password.value == '') {
            errores.push('Debes ingresar una contraseña')
            password.classList.add('is-invalid')
        } else {
            password.classList.remove('is-invalid')
        }
        console.log(errores);

        errorEmail.innerHTML = '';
        errorPassword.innerHTML = '';
        console.log(errores)
        if (errores.length > 0) {
            /* e.preventDefault(); */
            errorEmail.innerHTML += '';
            errorPassword.innerHTML += '';

            for (let i = 0; i < errores.length; i++) {
               if (errores[i] == 'Debes ingresar un correo electronico') {
                   errorEmail.innerHTML += `<p>${errores[i]}</p>`
               }
               if (errores[i] == 'Debes ingresar un correo electronico valido') {
                errorEmail.innerHTML += `<p>${errores[i]}</p>`
            }
               if (errores[i] == 'Debes ingresar una contraseña') {
                errorPassword.innerHTML += `<p>${errores[i]}</p>`
            }
            }
        } else {
            form.submit()
        }
        




    })
}