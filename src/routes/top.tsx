import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import schedule from "../assets/img/schedule.svg"
import obi from "../assets/img/2022.svg"
import "./top.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import Header from "./header"


function Top() {
    return (
        <body className="top_container">
            <div>
                <div className="top_center">
                    <Header/>
                    <img src={top_center} />
                    <Link to={"/top_back"} className="schedule">
                        <img src={schedule} />
                    </Link>
                    <Link to={"/contents"} className="top_link">
                        <img src={top_link} />
                    </Link>
                </div>
                <div className="obi">
                    <img src={obi} />
                </div>
            </div>
        </body>
    );
}

export default Top;
