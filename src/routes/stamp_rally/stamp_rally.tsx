import React from "react";
import { useState } from "react";
import stamp_camera from "../../assets/img/stamp_camera.svg";
import back from "../../assets/img/background_stamp.svg";
import memo from "../../assets/img/stamp_memo.svg";
import "./stamp_rally.css";
import Header from "../header/headermain";
import Stamp from "./Stamp"

function Stamp_rally() {

return (
        <body className="background_stamp">
            <header className="stamp_main">
                <img src={back} className="stamp_back" />
                <img src={memo} className="memo" />
            <img src={stamp_camera} className="stamp_camera" />
            </header>
            <div>
            </div>
        </body>
    );
}

export default Stamp_rally;
