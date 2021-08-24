import React, { useState, useEffect } from 'react';
import CardHijoCategorias from './CardHijoCategorias';

function CardCategories() {
  const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
            .then( res => res.json())
            .then ( data => {
              setCategorias(data.countByCategory);
            })
            .catch( err => console.log(err));
          }, []);
          
          useEffect(() => {}, [categorias]);
        

    return(
        <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias y productos en base de datos:
          </h5>
        </div>
        {categorias.map((categoria, i) => (
          <CardHijoCategorias categoria = {categoria.nombre} cantidad = {categoria.cantidad} key={i}/>
        ))}
      </div>
    </div>
    )
}

export default CardCategories;