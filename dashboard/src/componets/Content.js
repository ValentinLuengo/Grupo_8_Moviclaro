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
             
                    <MainContent />
                
                <Footer />
            </div>
            </div>
        </React.Fragment>
    );
}
export default Content;
