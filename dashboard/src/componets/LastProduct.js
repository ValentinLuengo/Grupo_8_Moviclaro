import React,{useEffect, useState} from 'react'

function LastProduct(props){
   
    return(
        <React.Fragment>
            <div>
            <div className="card-body">
                        {props.model}
                        <img src={props.image}/>
                    </div>
            </div>
        </React.Fragment>
    )
};
export default LastProduct