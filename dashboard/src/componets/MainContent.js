import React, { Fragment } from "react";
import Table from "./Table";
import LastProductInDb from "./LastProductInDb"
import ContentTop from "./ContentTop";
import ContentProduct from "./ContentProducts"
import Products from "./Products";

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

                
                {/* <div className="row"> */}
                <ContentProduct />
                <Table />
                {/* </div> */}
            </div>
        </Fragment>
    );
};

export default MainContent;
