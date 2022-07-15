import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import schedule from "../assets/img/schedule.svg"
import left_over from "../assets/img/left_over.svg"
import back from "../assets/img/tyui_background.svg"
import './tyui.css';
import { Link, NavLink, useHistory } from "react-router-dom";



function Tyui() {
    return (
        <div className="App">
            <header className=".background_tyui">
            <img src={left_over} className="left_over"/>
            </header>

        </div>
    );
}

export default Tyui;