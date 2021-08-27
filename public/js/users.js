window.onload = function () {
    let form = document.querySelector('form')

    let pass = document.querySelector('.fa-eye-slash');
    let passw = document.querySelector('#contrasenia');
    pass.addEventListener('click',function(){

        //alert(pass.classList);
        if(pass.classList == "fas fa-eye-slash"){
            pass.classList.remove("fa-eye-slash");
            pass.classList.add("fa-eye");
            passw.setAttribute('type', 'text');
        }else{
            pass.classList.remove("fa-eye")
            pass.classList.add("fa-eye-slash");
            passw.setAttribute('type', 'password');

        }
        //pass.classList.toggle("fa-eye");
        //pass.classList.remove("fa-eye-slash");
        //pass.classList.add("fa-eye")
    })




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

        errorEmail.innerHTML = '';
        errorPassword.innerHTML = '';
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