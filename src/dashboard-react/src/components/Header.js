import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/images/logoSmart.jpg"


function Header() {
    return(
       <header className="encabezado">
        <div className="logo_barra_manu_carrito">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo SmartShop" /></Link>
          </div>
          <div className="barra_busqueda">
            <input type="search" placeholder="Que estas buscando?" /><i className="fas fa-search" />
          </div>
        </div>
      </header> 
    )
    
}

export default Header