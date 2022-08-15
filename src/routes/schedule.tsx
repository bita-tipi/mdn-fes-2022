import { url } from "inspector";
import React from "react";
import Header from "./headermain"
import "./schedule.css"
import { Link, NavLink, useHistory } from "react-router-dom"
import main_bar from "../assets/img/main_bar.png"
import side_bar from "../assets/img/side_bar.png"
import time_bar from "../assets/img/time_bar.svg"
import time from "../assets/img/time.png"

function Schedule() {
    return (
        <body className="background_schedule">
            <div>
            <img src={main_bar} className="main_bar"/>
            <img src={side_bar} className="side_bar"/>
            <img src={time_bar} className="time_bar"/>
            <img src={time} className="time"/>
            </div>
            <Header/>
        </body>
    );
}

export default Schedule;
