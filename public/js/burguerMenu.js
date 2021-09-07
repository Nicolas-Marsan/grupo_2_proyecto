window.onload = function() {
console.log(window.innerWidth);
let menu=document.querySelector('.hamburguesa');
let hambu=document.querySelector('.menuOculto');
let cabeza=document.querySelector('main');
let tres=document.querySelector('.burger');

/*tres.addEventListener('click',function(){

    alert(tres.className);
})*/

//alert('hizo click');
menu.addEventListener('click',function(){
    //alert('hizo click');
    //menu.style.color= 'red';
    
    if(hambu.style.display == 'none'){
    hambu.style.display = 'inline';
    tres.classList.remove("burger");
    tres.classList.add("fa-times");    

    }else{
        hambu.style.display = 'none'; 
        tres.classList.remove("fa-times");
        tres.classList.add("burger");
    }
  

})

cabeza.addEventListener('click', function(){

    hambu.style.display = 'none'; 
    tres.classList.remove("fa-times");
    tres.classList.add("burger");

})

window.addEventListener('resize', function(){

    hambu.style.display = 'none'; 
    tres.classList.remove("fa-times");
    tres.classList.add("burger");

})



}