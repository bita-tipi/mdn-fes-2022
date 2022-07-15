import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import schedule from "../assets/img/schedule.svg"
import obi from "../assets/img/2022.svg"
import "./top.css";
import { Link, NavLink, useHistory } from "react-router-dom";


function Top() {
    return (
        <div className="App">
            <div className="top_container">
                <div className="top_center">
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
        </div>
    );
}

export default Top;