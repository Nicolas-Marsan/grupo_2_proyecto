import React from 'react';
import PropTypes from 'prop-types';

function CardHijoCategorias(props) {
    return(
    <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.categoria} : {props.cantidad} </div>
              </div>
            </div>
          </div>
        </div>
    )
}

CardHijoCategorias.defaultProps = {
    categoria: 'No category',
    cantidad: 'No cuantity'
}

CardHijoCategorias.propTypes = {
    atritutes: PropTypes.shape({
        categoria: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        cantidad: PropTypes.number
    })
}

export default CardHijoCategorias;