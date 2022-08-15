import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../assets/img/top_center.svg"
import top_link from "../assets/img/top_link.svg"
import under_back from "../assets/img/under_back.svg"
import under_center from "../assets/img/under_center.svg"
import hata from "../assets/img/hata.svg"
import './top_back.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import under_moji from "../assets/img/under_moji.svg"
import under_bottom_moji from "../assets/img/under_bottom_moji.svg"
import under_obi from "../assets/img/under_obi.svg"
import schedule from "../assets/img/schedule.svg"

function Top_back() {
    return (
        <div>
            <header className="top_back">
                <div>
                <img src={under_center}className="under_center"/>
                <Link to={`/contents`}>
                    <img src={top_link}className="under_link"/>
                </Link>
                <img src={under_moji}className="under_moji"/>
                <img src={under_bottom_moji}className="under_bottom_moji"/>
                <img src={hata}className="hata"/>
                <img src={under_obi}className="under_obi"/>
                <Link to={"/"}>
                        <img src={schedule} className="back_schedule"/>
                    </Link>
                </div>
                
            </header>
        </div>
    );
}

export default Top_back;