import React from 'react';

function Cellphone(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.name} : {props.totals}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Cellphone;