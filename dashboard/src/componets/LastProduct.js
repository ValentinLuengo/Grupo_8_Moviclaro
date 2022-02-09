import React,{useState} from 'react'

function LastProduct(props){
    
   const [imagen, setImage] = useState(props.image)
    console.log(imagen)
    return(
        <React.Fragment>
            <div>
            <div className="card-body">
                        {props.model}
                        <img src={imagen}/>
                    </div>
            </div>
        </React.Fragment>
    )
};
export default LastProduct