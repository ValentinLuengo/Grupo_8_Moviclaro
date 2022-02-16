import React, { useEffect, useState } from "react";
import ItemsTableUsers from "./ItemsTableUsers";

function TableUsers() {
    const [infoUsers, setInfoUsers] = useState([]);

    useEffect(() => {
        fetch("/api/users")
        .then((respuesta) => {
            return respuesta
                .json()
                .then((info) => {
                    setInfoUsers(info.data);
                })
                .catch((err) => console.log(err));
        });
    }, []);

    return (
        <React.Fragment>
            <div className="card shadow mb-4 ">
                <div className="card-body" >
                    <div className="table-responsive" >
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            // width="50%"
                            cellSpacing="0"
                          
                        >
                            <thead   style={{width: '50%'}}>
                                <tr >
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    {/* <th>Telefono</th> */}
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    {/* <th>Telefono</th> */}
                                    <th>Imagen</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {infoUsers.map((info, i) => {
                                    return (
                                        <ItemsTableUsers {...info} key={info + i} />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TableUsers;
