import React from "react";
import "./schedule.css";
import schedule_bar from "../../assets/img/schedule_bar.svg";
import title from "../../assets/img/schedule_title.svg";

function Schedule() {
    return (
        <body className="background_schedule">
            <div className="schedule">
                <img src={title} className="title" alt="title" />
                <img
                    src={schedule_bar}
                    className="schedule_bar"
                    alt="schedule_bar"
                />
            </div>
        </body>
    );
}

export default Schedule;
