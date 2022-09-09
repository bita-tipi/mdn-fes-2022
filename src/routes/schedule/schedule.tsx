import React from "react";
import Header from "../header/headermain";
import "./schedule.css";
import main_bar from "../../assets/img/main_bar.svg";
import side_bar from "../../assets/img/side_bar.svg";
import time_bar from "../../assets/img/time_bar.svg";
import title from "../../assets/img/schedule_title.svg";
import time from "../../assets/img/time.svg";

function Schedule() {
    return (
        <body className="background_schedule">
            <div className="schedule">
                <img src={main_bar} className="main_bar" />
                <img src={side_bar} className="side_bar" />
                <img src={time_bar} className="time_bar" />
                <img src={title} className="title"/>
                <img src={time} className="time" />
            </div>
        </body>
    );
}

export default Schedule;
