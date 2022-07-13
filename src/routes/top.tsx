import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import './top.css';
import { Link, NavLink, useHistory } from "react-router-dom";



function Top() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="top_container">
                <img src={top_center} className="top_center"/>
                <Link to={`/contents`}>
                    <img src={top_link} className="top_link"/>
                </Link>
                </div>
                
            </header>
        </div>
    );
}

export default Top;