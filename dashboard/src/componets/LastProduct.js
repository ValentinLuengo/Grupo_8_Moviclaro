import React from 'react';

function LastProduct(props){
    
    
    return(
        <React.Fragment>
        
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Creado:</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.image} alt=""/>
                    </div>
                    <p> {props.description} </p>
                    <a   href={`http://localhost:3001/detalle/${props.id}`}>
                    <button className="btn  botonComprar" target="_blank" rel="nofollow">Ver detalles</button></a>
                </div>
            </div>
        </div>
          
        </React.Fragment>
    )
};
export default LastProduct