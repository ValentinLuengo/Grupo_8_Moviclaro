import React from "react";

function LastUser(props) {
    return (
        <React.Fragment>
            <div className="col-lg-14 mb-6">
                <div className="card shadow mb-6">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Ultimo Usuario Creado:
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: 20 + "rem" }}
                                src={props.image}
                                alt=""
                            />
                            <a
                                href={`http://localhost:3001/api/users/${props.id}`}>
                            </a>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body"></div>
                            <div className="table-responsive">
                                <table
                                    className="table table-bordered"
                                    id="dataTable"
                                    width="80%"
                                    cellSpacing="0"
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                            <th>Telefono</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>{props.id}</td>
                                        <td>{props.name}</td>
                                        <td>{props.last_name}</td>
                                        <td>{props.email}</td>
                                        <td>{props.phone}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default LastUser;
