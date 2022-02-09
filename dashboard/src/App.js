import React, { Fragment } from "react";
import SideBar from "./componets/SideBar";
import "../src/assets/styles/app.css";

// import Header from "./componets/Header";
// import Footer from "./componets/Footer";
// import Store from "./componets/Store";

function App() {
    return (
        <Fragment>
         <div id="wrapper">
            {/* <Header /> */}
            {/* <Store /> */}
            <SideBar />
            {/* <Footer /> */}
        </div>
        </Fragment>
    );
}

export default App;
