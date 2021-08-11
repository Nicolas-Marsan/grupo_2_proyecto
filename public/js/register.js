window.onload = function(){

    let form = document.querySelector('form');
    
    form.addEventListener('submit',function(e){
        e.preventDefault();

        let errorNombre = "";
        let errorNombre = "";
        let errorNombre = "";
        let errorNombre = "";

        let eName = document.querySelector('.errorName');
        let eLast = document.querySelector('.errorLast');
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
            //eName.innerHTML += "Minimo 2 caracteres";
        }else{
           nombre.classList.remove('is-invalid');
           nombre.classList.add('control');
           apellido.focus();
        }

        if(apellido.value == ""){
            apellido.classList.add('is-invalid');
            errores.push("No puede estar vacio");
            //nombre.value ="minimo 2 caracteres";
            //eLast.innerHTML += "No puede esatar vacio";
        }else{
            apellido.classList.remove('is-invalid');
            apellido.classList.add('control');
            correo.focus();
        }








    });

}