import React, { Fragment } from "react";
import Products from "./Products";
import Table from "./Table";
import LastProductInDb from "./LastProductInDb"
import ContentTop from "./ContentTop";

const MainContent = () => {
    return (
        <Fragment>
            
                <div className="container-fluid">
                    <div className="d-xs-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800 mt-3">
                            Dashboard
                        </h1>
                    </div>
                    <ContentTop />
                    <LastProductInDb />
                    <Products />
                    <Table />

                </div>
         
        </Fragment>
    );
};

export default MainContent;
