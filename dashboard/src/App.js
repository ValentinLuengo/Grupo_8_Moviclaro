import React, { Fragment } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Store from "./componets/Store";

function App() {
    return (
        <Fragment>
            <Header />
            <Store />
            <Footer />
        </Fragment>
    );
}

export default App;
