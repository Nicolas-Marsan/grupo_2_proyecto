import React from 'react';
import PropTypes from 'prop-types';


function PropsListado(props){
    return (
                <tr>
                    <td>{props.modelo}</td>
                    <td>{props.precio}</td>
                    <td>{props.categoria}</td>
                    <td><a href={props.link} target='_blank' rel='noreferrer'>{props.link}</a></td>
                </tr>
            )
    }
    
    PropsListado.defaultProps = {
        modelo: 'No Modelo',
        precio: 'No Precio',
        categoria: 'No Categoria',
        link: 'No link'
    }
    
    /* PROPTYPES */
    
    PropsListado.propTypes = {
        atritutes: PropTypes.shape({
            modelo: PropTypes.string.isRequired,
            categoria: PropTypes.string.isRequired,
            precio: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            link: PropTypes.string.isRequired
        })
    }

export default PropsListado;