import React from "react"
import {Link} from 'react-router-dom'
import logo from "../assets/images/logoSmart.jpg"
function Footer() {
    return(
        <footer className="footer">
        <div className="logo">
          <img src={logo} alt="Logo SmartShop" />
        </div>
        <section className="sobre-nosotros">
          <h3 className="titulos">SOBRE NOSOTROS</h3>
          <ul>
            <li><Link to="#">SOBRE NOSOTROS</Link></li>
            <li><Link to="#">LINEA ÉTICA Y VALORES</Link></li>
            <li><Link to="#">POLÍTICA DE PRIVACIDAD</Link></li>
          </ul>
        </section>
        <section className="tienda-smartshop">
          <h3 className="titulos">TIENDA SMARTSHOP</h3>
          <ul>
            <li><Link to="#">MIS PEDIDOS</Link></li>
            <li><Link to="#">MI CARRITO</Link></li>
            <li><Link to="#">CAMBIOS Y DEVOLUCIONES</Link></li>
          </ul>
        </section>
        <section className="navegacion">
          <h3 className="titulos">NAVEGACIÓN</h3>
          <ul>
            <li><Link to="#">INICIO</Link></li>
            <li><Link to="#">PRODUCTOS</Link></li>
            <li><Link to="#">CONTACTO</Link></li>
          </ul>
        </section>
        <div className="bot-copyright">
          <div className="espacio-blanco" />
          <div className="copyright">
            <i className="far fa-copyright fa-3x" />
            <p>Copyright SmartShop - 2021. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer