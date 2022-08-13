import { url } from "inspector";
import React from "react";
import Header from "./headermain"
import "./theme.css"
import { Link, NavLink, useHistory } from "react-router-dom"
import main from "../assets/img/theme_main.svg"
import midasi from "../assets/img/theme_midasi.svg"
import MV from "../assets/img/theme_MV.svg"

function Theme() {
    return (
        <body className="background_theme">
            <div>
            <img src={midasi} className="midasi"/>
            <img src={main} className="main"/>
            <img src={MV} className="MV"/>
            </div>
            <Header/>
        </body>
    );
}

export default Theme;
