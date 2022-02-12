import React from "react";
import TableUsers from "./TableUsers";
import LastUserInDb from "./LastUserInDb";

const ContentUsers = () => {
    return (
        <React.Fragment>
            <div className="row">
            <LastUserInDb />
                <TableUsers />
            </div>
        </React.Fragment>
    );
};

export default ContentUsers;