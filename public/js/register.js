window.onload = function(){

    let form = document.querySelector('form');
    
    form.addEventListener('submit',function(e){
        e.preventDefault();
        //eName.innerHTML = '';
        //eLast.innerHTML = '';

        let errores = [];

        let erroresUL = document.querySelector('.errores');
        
        let nombre = document.querySelector('#name');
        let apellido = document.querySelector('#last_name');
        let correo = document.querySelector('#email');
        let imagen = document.querySelector('#fecha');
        let contra = document.querySelector('#pass');
        
        let n=nombre.value;
        
        if(n.length <3){
            nombre.classList.add('is-invalid');
            errores.push("Minimo 2 caracteres");
            //nombre.value ="minimo 2 caracteres";
            //eName.innerHTML += errorN;
        }else{
           nombre.classList.remove('is-invalid');
           nombre.classList.add('control');
           apellido.focus();
        }

        if(apellido.value == ""){
            apellido.classList.add('is-invalid');
            errores.push("No puede estar vacio");
            //nombre.value ="minimo 2 caracteres";
            //eLast.innerHTML += errorA;
        }else{
            apellido.classList.remove('is-invalid');
            apellido.classList.add('control');
            correo.focus();
        }

        if(errores.length >0){
            //e.preventDefault();
            erroresUL.innerHTML = '';
            for(let i=0 ; i<errores.length; i++){
                
                erroresUL.innerHTML += `<li>${errores[i]}</li>`;
                
            }
            
        }






    });

}