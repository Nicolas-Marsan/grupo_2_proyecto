window.onload = function () {
    let form = document.querySelector('form')
    console.log(form);
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        //acumulador de errores
        let errores = []
        //datos
        let email = document.querySelector('#email')
        let password = document.querySelector('#contrasenia')

        //donde se mostrara el error
        let errorEmail = document.querySelector('.errorEmail')
        let errorPassword = document.querySelector('.errorPassword')

        //

        
    

        if(email.value == ''){
            errores.push('Debes ingresar tu correo electronico')
            email.classList.add('is-invalid')
        } else if (email.value == '@'){
            errores.push('El correo electronico debe contener un @')
        } else if (email.value == '.com'){
            errores.push('El correo electronico debe contener un .com')

        } else {
            email.classList.remove('is-invalid')
            modelo.classList.add('control');
        }

        if (password.value == '') {
            errores.push('Debes ingresar tu contraseña')
            password.classList.add('is-invalid')
        } else {
            password.classList.remove('is-invalid')
        }
        console.log(errores);

        errorEmail.innerHTML = '';
        errorPassword.innerHTML = '';

        if (errores.length > 0) {
            e.preventDefault();
            errorEmail.innerHTML += '';
            errorPassword.innerHTML += '';

            for (let i = 0; i < errores.length; i++) {
               if (errores[i] == 'Debes ingresar tu correo electronico') {
                   errorEmail.innerHTML += `<p>${errores[i]}</p>`
               }
               if (errores[i] == 'Debes ingresar tu contraseña') {
                errorPassword.innerHTML += `<p>${errores[i]}</p>`
            }
            }
        }




    })
}