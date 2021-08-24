import React, { useState, useEffect } from 'react';
import CardCategories from './CardCategories';


function CategoriesInDb(){
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

    return (
      <div>
          <CardCategories/>
      </div>
    );
}


export default CategoriesInDb;