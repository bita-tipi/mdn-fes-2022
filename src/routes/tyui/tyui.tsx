import React from "react";
import left_over from "../../assets/img/tyui_left_over.svg";
import back from "../../assets/img/tyui_background.svg";
import right_over from "../../assets/img/tyui_right_over.svg";
import left_bottom from "../../assets/img/tyui_left_bottom.svg";
import right_bottom from "../../assets/img/tyui_right_bottom.svg";
import "./tyui.css";
import Header from "../header/headermain";

function Tyui() {
    return (
        <div className="background_tyui">
            <header className="tyui-container">
                <div>
                    <img src={back} className="back" /><img src={back} className="back" />
                    <img src={left_over} className="left_over" />
                    <img src={right_over} className="right_over" />
                    <img src={left_bottom} className="left_bottom" />
                    <img src={right_bottom} className="right_bottom" />
                </div>
            </header>
        </div>
    );
}

export default Tyui;
