import React, { useState, useEffect } from 'react';


function LastUserInDb(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
            .then( res => res.json())
            .then ( data => {
                console.log(data);
                setProductos(data.data);
            })
            .catch( err => console.log(err));
    }, []);

    
    
    useEffect(() => {}, [productos]);

    console.log(productos);


    let ultimoProductoCreado = productos.filter(producto => producto.id < 100)

    console.log(ultimoProductoCreado);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado:</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" /* style={{width: 40 +'rem'}} src={imagenFondo} */ alt=" completar con la imagen "/>
                    </div>
                    <h1>{productos.modelo} </h1>
                    <p>{productos.modelo} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastUserInDb;
