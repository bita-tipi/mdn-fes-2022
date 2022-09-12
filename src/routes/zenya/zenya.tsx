import React from "react";
import Header from "../header/headermain";
import "./zenya.css";
import bar from "../../assets/img/kouya_bar2.svg";
import title from "../../assets/img/zenya_title.svg";

function Zenya() {
    return (
        <body className="background_zenya">
            <div className="kouya">
                <img src={title} className="title_zenya"/>
                <img src={bar} className="kouya_bar"/>
            </div>
        </body>
    );
}

export default Zenya;