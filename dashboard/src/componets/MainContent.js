import React, { Fragment } from "react";
import ContentTop from "./ContentTop";
import ContentProduct from "./ContentProducts";
import ContentUsers from "./ContentUsers";

const MainContent = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="d-xs-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 mt-3">Dashboard</h1>
                </div>
                <ContentTop />
                <ContentProduct />
                <ContentUsers />
            </div>
        </Fragment>
    );
};

export default MainContent;
