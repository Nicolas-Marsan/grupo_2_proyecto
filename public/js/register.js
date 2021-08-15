window.onload = function(){
    
    let form = document.querySelector('form');
    let errorM =[];
    form.addEventListener('submit',function(e){
        //e.preventDefault();
       
        let errores = [];
        
        let errorMail = document.querySelector('.errorMail');
        let errorContra = document.querySelector('.errorContra');
        let errorLast = document.querySelector('.errorLast');
        let errorName = document.querySelector('.errorName');
        let errorFoto = document.querySelector('.errorFoto');
        let erroresUL = document.querySelector('.errores');
        
        let nombre = document.querySelector('#name');
        let apellido = document.querySelector('#last_name');
        let correo = document.querySelector('#email');
        let foto = document.querySelector('#foto');
        let contra = document.querySelector('#pass');
       
        let donde=foto.value.indexOf('.')+1;
        

        if(foto.value != ''){

            if(foto.value[donde] == 'j' || foto.value[donde] == 'p' || foto.value[donde] == 'g'){
                donde++;
            }else if(foto.value[donde] == 'p' || foto.value[donde] == 'n' || foto.value[donde] == 'i' ){
                donde++;
            }else if(foto.value[donde] == 'g' || foto.value[donde] == 'f' ){
                donde++;
            }else{errores.push('La foto debe ser JPG, JPEG, PNG o GIF')}


        }
        if(contra.value == ''){

            errores.push('La contraseña no puede estar vacia')
        }
        else if(contra.value.length <8){
            errores.push('La contraseña debe tener minimo 8 caracteres')
        }

        
        fetch('http://localhost:3000/users/all?mail=' + correo.value)
			.then ( res => res.json())
			.then ( data => {
                                   
                //alert('el del fethc  ' + data[0].mail);	
                if(data[0].mail != ''){  alert("Ya existe este mail")}  
                	
			})
			.catch (err => console.log(err));
        
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

       // alert('errores =' + errores);
        errorFoto.innerHTML = '';
        errorContra.innerHTML = '';
        errorName.innerHTML = '';
        errorLast.innerHTML = '';
        erroresUL.innerHTML = '';
        //alert(errorM);
        
        if(errores.length >0){
            e.preventDefault();
            erroresUL.innerHTML = '';
            errorFoto.innerHTML = '';
            errorContra.innerHTML = '';
            errorName.innerHTML = '';
            errorLast.innerHTML = '';
            for(let i=0 ; i<errores.length; i++){
                
                if(errores[i] == 'La foto debe ser JPG, JPEG, PNG o GIF'){

                    errorFoto.innerHTML += `<p>${errores[i]}</p>`;
                }
                if(errores[i] == 'Minimo 2 caracteres'){

                    errorName.innerHTML += `<p>${errores[i]}</p>`;
                }
                if(errores[i] == 'No puede estar vacio'){

                    errorLast.innerHTML += `<p>${errores[i]}</p>`;
                }
                if(errores[i] == 'La contraseña debe tener minimo 8 caracteres' || errores[i] == 'La contraseña no puede estar vacia'){

                    errorContra.innerHTML += `<p>${errores[i]}</p>`;
                }
                if(errores[i] == 'Ya existe este mail'){

                    errorMail.innerHTML += `<p>${errores[i]}</p>`;
                }


               //erroresUL.innerHTML += `<li>${errores[i]}</li>`;
               
            }
            
        }






    });

}