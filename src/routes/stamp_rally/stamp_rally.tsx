import React from "react";
import { useState } from "react";
import stamp_camera from "../../assets/img/stamp_camera.svg";
import back from "../../assets/img/background_stamp.svg";
import memo from "../../assets/img/stamp_memo.svg";
import stamp1 from "../../assets/img/AMP.svg";
import stamp2 from "../../assets/img/earth.svg";
import stamp3 from "../../assets/img/gun.svg";
import stamp4 from "../../assets/img/lens.svg";
import stamp5 from "../../assets/img/umbrella.svg";
import stamp6 from "../../assets/img/shoes.svg";
import stamp7 from "../../assets/img/gun.svg";
import stamp8 from "../../assets/img/gun.svg";
import stamp9 from "../../assets/img/gun.svg";
import "./stamp_rally.css";
import Header from "../header/headermain";
import Stamp from "./Stamp"

const stamp = [
    [stamp1,stamp2,stamp3,stamp4,stamp5,stamp6,stamp7,stamp8,stamp9]
];

function Stamp_rally() {
    const [currentStampCell, updateStampCell] = useState(0);

    function floorSelector() {
        let stamp_cell = useState(false);
        for (let index = 0; index < stamp[0].length; index++) {
            const isSelected = currentStampCell === index;
        }
    }

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
