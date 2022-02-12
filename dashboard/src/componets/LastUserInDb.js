import React, { useState, useEffect } from "react";
import LastUser from "./LastUser.js";

function LastUserInDb() {
    const [user, setListUser] = useState([]);

    useEffect(() => {
        fetch("/api/lastUserCreated")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((user) => {
                // console.log(user.data)
                setListUser(user.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <React.Fragment>
            <div>
                <LastUser {...user} />
            </div>
        </React.Fragment>
    );
}

export default LastUserInDb;
