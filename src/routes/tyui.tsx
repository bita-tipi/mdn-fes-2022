import { url } from "inspector";
import React from "react";
import left_over from "../assets/img/left_over.svg"
import back from "../assets/img/tyui_background.svg"
import "./tyui.css";
import { Link, NavLink, useHistory } from "react-router-dom";

function Tyui() {
    return (
    <div>
        <header className="background_tyui">
            <div>
            <img src={back} className="back"/>   
            <img src={left_over} className="left_over"/>
            </div>
        </header>
    </div>
    );
}

export default Tyui;