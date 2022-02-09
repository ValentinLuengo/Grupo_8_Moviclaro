import React from "react";
<<<<<<< HEAD
import Products from "./Products";
import LastProductInDb from "./LastProductInDb.js"
=======
>>>>>>> 4cd8d04efced0084c133bf187b15dc4ffa55afff
import "../assets/styles/app.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Content() {
    return (
        <React.Fragment>
<<<<<<< HEAD
            <div id="content">
            <Header/>
                {/*<!-- Content  -->*/}
                <div className="container-fluid">
                    <div className="d-xs-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <LastProductInDb/>
=======

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
>>>>>>> 4cd8d04efced0084c133bf187b15dc4ffa55afff
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
