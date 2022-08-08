import { url } from "inspector";
import React from "react";
import Header from "./headermain"
import "./koutyou.css"
import { Link, NavLink, useHistory } from "react-router-dom"
import setumei from "../assets/img/koutyou_setumei        .svg"
import syasin from "../assets/img/koutyou_syasin        .svg"
import Header_koutyou from "./headermain_koutyou";



function Koutyou() {
    return (
        <body className="background_koutyou">
            <Header_koutyou/>
            <div>
            <img src={syasin} className="syasin"/>
            <img src={setumei} className="setumei"/>
            </div>
        </body>
    );
}

export default Koutyou;