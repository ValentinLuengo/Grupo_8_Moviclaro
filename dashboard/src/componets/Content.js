import React from "react";
import Products from "./Products";
import LastProductInDb from "./LastProductInDb.js"
import "../assets/styles/app.css";
import Table from "./Table";

function Content() {
    return (
        <React.Fragment>
            <div id="content">
                {/*<!-- Content  -->*/}
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
                    <LastProductInDb/>
                    {/*<!-- Celulares -->*/}
                    <Products />
                    <Table />
                </div>
                {/*<!--End Content Row Top-->*/}
            </div>
        </React.Fragment>
    );
}
export default Content;
