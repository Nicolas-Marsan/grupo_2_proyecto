import React, {useEffect, useState} from 'react';
import PropsListado from './PropsListado';



function Listado (){
    let [totalProductos, SetTotalProductos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
            .then ( res => res.json())
            .then ( data => {
                SetTotalProductos(data.data)
            })
            .catch (err => console.log(err));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            totalProductos.map( ( producto, i) => {
                                return <PropsListado  
                                modelo = {producto.modelo}
                                precio = {producto.precio}
                                categoria = {producto.categoria ? producto.categoria.nombre : 'Nuevo'}
                                link = {producto.detalle_url}

                                key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Listado;