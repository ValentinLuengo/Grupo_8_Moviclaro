import React, { Fragment } from "react";
import Table from "./Table";

import ContentProduct from "./ContentProducts";

const MainContent = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 mt-3">Dashboard</h1>
                </div>
                {/* <div className="row"> */}
                <ContentProduct />
                <Table />
                {/* </div> */}
            </div>
        </Fragment>
    );
};

export default MainContent;
