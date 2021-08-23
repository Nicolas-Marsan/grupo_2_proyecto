import React, { useState, useEffect } from 'react';
/* import SmallCard from './SmallCard'; */
import '../assets/css/dashboard.css'
import Card from './Card';




function ContentRow(){
    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        console.log('me estoy montando');
        fetch('http://localhost:3000/api/productos')
            .then ( res => res.json())
            .then ( data => {
                console.log(data);
                setProductos(data)
            })
            .catch (err => console.log(err));
    }, []);

    useEffect(() => {
        console.log('se actualizó el componente');
    }, [productos]);

    useEffect(()=> console.log('Se desmontó el componente'),[]);
    
    

    let TotalProductos = {
        title: 'Productos',
        cuantity: productos.count
    }
    let TotalUsuarios = {
        title: 'Iphone',
        cuantity: '10'
    }
    let tarjeta = [TotalProductos, TotalUsuarios]

    return (  
        <div className="dashboard">
            {tarjeta.map((tarjetita, i)=>{
                return <Card {...tarjetita} key={i} />
            })}
        </div>
    )
}

export default ContentRow;