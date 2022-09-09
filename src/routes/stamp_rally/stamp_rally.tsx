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

const stamp_cell = [
    [0,1,2,3,4,5,6,7,8],
    [stamp1,stamp2,stamp3,stamp4,stamp5,stamp6,stamp7,stamp8,stamp9],
];

function Stamp_rally() {
    const [currentFloorIndex, updateFloorIndex] = useState(0);

    function clickHandler(index: number) {
        updateFloorIndex(index);
        console.log(`, ${index + 1}F`);
    }

    function floorSelector() {
        let selector = [];
        for (let index = 0; index < stamp_cell[0].length; index++) {
            const isSelected = currentFloorIndex === index;
            selector.push(
                <div className="floor_selector">
                    <img
                        src={stamp_cell[Number(isSelected)][index]}
                        alt=""
                    />
                </div>
            );
        }
        return selector;
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
