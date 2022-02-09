import React from "react";
import Products from "./Products";
import LastProductInDb from "./LastProductInDb.js"
import "../assets/styles/app.css";
import Table from "./Table";
import Header from "./Header";
import Footer from "./Footer";

function Content() {
    return (
        <React.Fragment>
            <div id="content">
            <Header/>
                {/*<!-- Content  -->*/}
                <div className="container-fluid">
                    <div className="d-xs-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <LastProductInDb/>
                    {/*<!-- Celulares -->*/}
                    <Products />
                    <Table />
                </div>
                {/*<!--End Content Row Top-->*/}
                <Footer />
            </div>
        </React.Fragment>
    );
}
export default Content;
