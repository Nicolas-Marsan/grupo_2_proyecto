import React, { useState, useEffect } from 'react';
/* import SmallCard from './SmallCard'; */
import '../assets/css/dashboard.css'
import Card from './Card';




function ContentRow(){
    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
            .then ( res => res.json())
            .then ( data => {
                setProductos(data)
            })
            .catch (err => console.log(err));
    }, []);

    useEffect(() => {
    }, [productos]);

    
    
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then ( respo => respo.json())
            .then ( users => {
                setUsuarios(users)
                
            })
            .catch (err => console.log(err));
    }, []);
    useEffect(() => {

    }, [usuarios]);

    useEffect(()=> console.log('Se desmontó el componente'),[]);

    
    let TotalProductos = {
        title: 'Cantidad de productos',
        cuantity: productos.count
    }
    let TotalUsuarios = {
        title: 'Cantidad de usuarios',
        cuantity: usuarios.count
    }
   
      /* let TotalCategorias = {
        title: 'Cantidad de categorias',
        cuantity: productos.countByCategory.length
    } */

    let TotalCategorias = {
        title: 'Cantidad de categorias',
        cuantity: productos.countByCategory ? productos.countByCategory.length : 'No cuantity'
    }

    let tarjeta = [TotalProductos, TotalUsuarios, TotalCategorias]
    return (  
        <div className="dashboard">
            {
            tarjeta.map((tarjetita, i)=>{
                return <Card
                {...tarjetita} key={i} />
            })
            }
            
        </div>
    )
}

export default ContentRow;