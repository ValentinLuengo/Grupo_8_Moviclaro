import React from "react";
import "../assets/styles/app.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Content() {
    return (
        <React.Fragment>

            <div id="content-wrapper" className="d-flex flex-column">
              
                <div id="content">
            {/* <div id="content"> */}
                <Header />
                {/*<!-- Content  -->*/}
                {/* <div className="container-fluid"> */}
                    {/* <div className="d-xs-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800 mt-3">
                            Dashboard
                        </h1>
                    </div> */}
                    {/*<!-- Celulares -->*/}
                    <MainContent />
                    {/* <Products />
                    <Table /> */}
                {/* </div> */}
                {/*<!--End Content Row Top-->*/}
                <Footer />
            </div>
            </div>
        </React.Fragment>
    );
}
export default Content;
