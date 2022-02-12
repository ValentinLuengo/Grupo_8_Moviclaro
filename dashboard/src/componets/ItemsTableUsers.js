import React from "react";

function ItemsTableUsers(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.last_name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>
                <div className="imagen-perfil-header">
                    <a href="/user">
                        <img
                            src={props.image}
                            alt="Imagen de perfil miniatura"
                        />
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default ItemsTableUsers;
