import React, { useState, useEffect } from "react";
import Cellphone from "./Cellphone";

function Products() {
    const [cellphone, setListCellphone] = useState([]);

    useEffect(() => {
        fetch("/api/totals")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((cellphone) => {
                // console.log(cellphone.data);
                setListCellphone(cellphone.data.totals);
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
                            className="m-0 font-weight-bold text-gray-800"
                        >
                            Cantidad de productos por marca:
                        </h6>
                    </div>
                    <div className="card-body">
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
