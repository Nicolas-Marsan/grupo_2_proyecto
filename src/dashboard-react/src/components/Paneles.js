import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';


function Paneles() {
    return(
        <div className="paneles-juntos">
        <LastProductInDb/>
        <CategoriesInDb/>
        </div>
    )
}





export default Paneles;