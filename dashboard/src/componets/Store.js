import React, { Fragment } from "react";
import Content from "./Content";
import SideBar from "./SideBar";

function Store() {
    return (
        <Fragment>
            <div id="wrapper">
            <SideBar/>

            <Content />
            </div>
        </Fragment>
    );
}

export default Store;