window.onload = function() {

let menu=document.querySelector('.hamburguesa');
let hambu=document.querySelector('.menuOculto');
let cabeza=document.querySelector('header');
menu.addEventListener('click',function(){
    //alert('hizo click');
    //menu.style.color= 'red';
    if(hambu.style.display == 'none'){
    hambu.style.display = 'inline';
    }else{
        hambu.style.display = 'none'; 
    }
})


menu.addEventListener('mouseOut',function(){
    //alert('hizo click');
    //menu.style.color= 'red';
    
        hambu.style.display = 'none'; 
    
})


}