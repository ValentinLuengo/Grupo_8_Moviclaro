import React, { useState, useEffect } from "react";
import LastProduct from "./LastProduct.js"

function LastProductInDb(){
    const [cellphone, setListCellphone] = useState([]);

    useEffect(() => {
        fetch("/api/lastProductCreated")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((cellphone) => {
                console.log(cellphone.data)
                setListCellphone(cellphone.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
    <React.Fragment>
        <div>
        {/* <h6 className="m-0 font-weight-bold text-gray-800">
                            Ultimo Producto Creado:
                        </h6> */}
            <LastProduct {...cellphone}/>
        </div>
    </React.Fragment>
    );
}

export default LastProductInDb