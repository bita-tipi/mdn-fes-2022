import React from "react";
import stamp_back from "../assets/img/stamp_rally.back1.svg";
import stamp_back2 from "../assets/img/stamp_rally.back2.svg";
import stamp_back3 from "../assets/img/stamp_rally.back1.svg";
import stamp_camera from "../assets/img/stamp_camera.svg";
import stamp1 from "../assets/img/stamp1.svg";
import stamp2 from "../assets/img/stamp2.svg";
import stamp3 from "../assets/img/stamp3.svg";
import stamp4 from "../assets/img/stamp4.svg";
import "./stamp_rally.css";
import Header from "./headermain";

function Stamp_rally() {
    return (
        <body className="background_contents">
            <div>
                <img src={stamp_back} className="stamp_back" />
                <img src={stamp_back2} className="stamp_back2" />
                <img src={stamp_back3} className="stamp_back3" />
                <img src={stamp_camera} className="stamp_camera" />
                <img src={stamp1} className="stamp1" />
                <img src={stamp2} className="stamp2" />
                <img src={stamp3} className="stamp3" />
                <img src={stamp4} className="stamp4" />
            </div>
            <Header />
        </body>
    );
}

export default Stamp_rally;
