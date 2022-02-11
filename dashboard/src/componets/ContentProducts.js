import React from "react";
import LastProductInDb from "./LastProductInDb";
import Products from "./Products";
import Table from "./Table";

const ContentProduct = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <LastProductInDb />
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <Products />
                        </div>
                    </div>
                </div>
                <Table />
            </div>
        </React.Fragment>
    );
};

export default ContentProduct;
