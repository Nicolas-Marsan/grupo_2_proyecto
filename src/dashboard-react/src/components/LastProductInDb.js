import React, { useState, useEffect } from 'react';


function LastProductInDb(){

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/productos/ultimo')
            .then( res => res.json())
            .then ( data => {
                setProducto(data.data);
            })
            .catch( err => console.log(err));
        }, []);
    
    
    
    useEffect(() => {}, [producto]);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4" style={{width: 50 +'%'}}>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado:</h5>
                </div>
                <div className="card-body" >
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 150 +'px'}}  src={`http://localhost:3000/images/products/${producto.imagen} `} alt=" completar con la imagen "/>
                    </div>
                    <h1 style={{color: 'black'}}> {producto.modelo} </h1>
                    <h1 style={{color: 'black'}}> {producto.precio_unitario} </h1> 
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;