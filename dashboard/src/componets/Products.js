import React, { useState, useEffect } from "react";
import Cellphone from "./Cellphone";

function Products() {
    const [cellphone, setListCellphone] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((cellphone) => {
                console.log(cellphone.data)
                setListCellphone(cellphone.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6
                           //</div> onMouseOver={() =>
                                //cambiarFondo("bg-secondary")
                            //}
                            className="m-0 font-weight-bold text-gray-800"
                        >
                            Cellphone in Data Base
                        </h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {cellphone.map((cellphone, index) => {
                                return <Cellphone {...cellphone} key={cellphone + index} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Products;