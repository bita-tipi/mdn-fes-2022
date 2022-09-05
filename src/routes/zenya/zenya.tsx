import React from "react";
import Header from "../header/headermain";
import "./zenya.css";
import schedule from "../../assets/img/zenya_shedule.svg";
import time from "../../assets/img/zenya_time.svg";
import title from "../../assets/img/zenya_title.svg";

function Zenya() {
    return (
        <body className="background_zenya">
                <img src={title} className="title_zenya"/>
                <img src={time} className="time_zenya"/>
                <img src={schedule}className="schedule_zenya"/>
            <Header />
        </body>
    );
}

export default Zenya;