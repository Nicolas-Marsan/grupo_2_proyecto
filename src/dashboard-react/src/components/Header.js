import React from 'react'

import logo from "../assets/images/logoSmart.jpg"


function Header() {
    return(
       <header className="encabezado">
        <div className="logo_barra_manu_carrito">
          <div className="logo">
            <a href="http://localhost:3000/ target='_blank' rel='noreferrer'"><img src={logo} alt="Logo SmartShop" /></a>
          </div>
          <div className="barra_busqueda">
            <input type="search" placeholder="Que estas buscando?" /><i className="fas fa-search" />
          </div>
        </div>
      </header> 
    )
    
}

export default Header