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
        <body className="background_contents">
            <header className="stamp_main">
                <img src={back} className="stamp_back" />
                <img src={stamp_camera} className="stamp_camera" />
            <img src={memo} className="memo" />
            </header>
            <div>{Stamp()}</div>
        </body>
    );
}

export default Stamp_rally;
