import React, { useState, useEffect } from 'react';
import CardHijoCategorias from './CardHijoCategorias';

function CardCategories() {
  const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
            .then( res => res.json())
            .then ( data => {
                console.log(data);
                setCategorias(data.data);
            })
            .catch( err => console.log(err));
    }, []);

    useEffect(() => {}, [categorias]);


    /* let categoriaProducto = {
      categoria: categorias.countByCategory,
    }

    let tarjeta = [categoriaProducto] */

    let nuevos = {
      categoria: 'nuevo',
      /* cantidad: categorias.countByCategory.nuevo */
    }

    let usados = {
      categoria: 'usado',
      /* cantidad: categorias.countByCategory.usado */
    }

    let tarjetas = [nuevos, usados]

    return(
        <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias y productos en base de datos:
          </h5>
        </div>
        {tarjetas.map((tarjeta, i) => (
          <CardHijoCategorias {...tarjeta} key={i}/>
        ))}
      </div>
    </div>
    )
}

export default CardCategories;