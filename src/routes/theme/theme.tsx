import React from "react";
import Header from "../header/headermain";
import "./theme.css";
import main from "../../assets/img/theme_main.svg";
import midasi from "../../assets/img/theme_midasi.svg";
import MV from "../../assets/img/theme_MV.svg";

function Theme() {
    return (
        <body className="background_theme">
            <div>
                <img src={midasi} className="midasi" alt="midasi" />
                <img src={main} className="main" alt="main" />
                <img src={MV} className="MV" alt="MV" />
                <video ></video>
            </div>
        </body>
    );
}

export default Theme;
