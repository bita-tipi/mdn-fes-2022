import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../images/top_center.svg"
import contents from "../assets/img/contents_tyui.png"
import './contents.css';
import { Link, NavLink, useHistory } from "react-router-dom";



function Contents() {
    return (

        <div>
            <header className="background_contents">
            <Link to={`/tyui`}>
                    <img src={contents} className="contents_ tyui"/>
                </Link>

            </header>
        </div>
    );
}

export default Contents;