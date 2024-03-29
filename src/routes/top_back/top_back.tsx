import React from "react";
import top_link from "../../assets/img/top_link.svg";
import under_center from "../../assets/img/under_center.svg";
import hata from "../../assets/img/hata.svg";
import "./top_back.css";
import { Link } from "react-router-dom";
import under_moji from "../../assets/img/under_moji.svg";
import under_bottom_moji from "../../assets/img/under_bottom_moji.svg";
import under_obi from "../../assets/img/under_obi.svg";
import schedule from "../../assets/img/switch_back.svg";

function Top_back() {
    return (
        <div>
            <header className="top_back">
                <div>
                    <img
                        src={under_center}
                        className="under_center"
                        alt="under_center"
                    />
                    <Link to={`/contents`}>
                        <img
                            src={top_link}
                            className="under_link"
                            alt="under_link"
                        />
                    </Link>
                    <img
                        src={under_moji}
                        className="under_moji"
                        alt="under_moji"
                    />
                    <img src={hata} className="hata" alt="hata" />
                    <img
                        src={under_obi}
                        className="under_obi"
                        alt="under_obi"
                    />
                    <Link to={"/"}>
                        <img
                            src={schedule}
                            className="back_schedule"
                            alt="back_schedule"
                        />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Top_back;
