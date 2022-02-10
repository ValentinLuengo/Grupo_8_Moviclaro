import React from "react";
import LastProductInDb from "./LastProductInDb";
import Products from "./Products";

const ContentProduct = () => {
    return (
        <React.Fragment>
            <div className="row" style={{display: "flex"}} >
                <LastProductInDb />
                <Products />
            </div>
        </React.Fragment>
    );
};

export default ContentProduct;
