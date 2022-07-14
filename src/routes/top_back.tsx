import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import under_back from "../assets/img/under_back.svg"
import './top_back.css';
import { Link, NavLink, useHistory } from "react-router-dom";



function Top_back() {
    return (
        <div className="App">
            <header className="top_back">
                <div className="top_container">
                <Link to={`/contents`}>
                    <img src={top_link} className="top_link"/>
                </Link>
                </div>
                
            </header>
        </div>
    );
}

export default Top_back;