import React from "react";
import Products from "./Products";
import "../assets/styles/app.css";

function Content() {
    return (
        <React.Fragment>
            <div id="content">
                {/*<!-- Content  -->*/}
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    {/*<!-- Celulares -->*/}
                    <Products />
                </div>
                {/*<!--End Content Row Top-->*/}
            </div>
        </React.Fragment>
    );
}
export default Content;