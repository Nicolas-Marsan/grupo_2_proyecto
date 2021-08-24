import React from 'react';
import PropTypes from 'prop-types';

function CardCategories(props) {
    return(
        <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias y productos en base de datos:
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.categoria}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

CardCategories.defaultProps = {
    categoria: 'No category',
    cantidadProductos: 'No cuantity',
}

CardCategories.propTypes = {
    atritutes: PropTypes.shape({
        categoria: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}
export default CardCategories;