import React from "react";
import LastProductInDb from "./LastProductInDb";
import Products from "./Products";
import Table from "./Table";

const ContentProduct = () => {
    return (
        <React.Fragment>
            <div className="row" >
                <LastProductInDb />
                <Products />
                <Table />
            </div>
        </React.Fragment>
    );
};

export default ContentProduct;
