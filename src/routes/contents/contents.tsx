import React from "react";
import contents from "../../assets/img/contents_tyui.svg";
import contents2 from "../../assets/img/contents_map.svg";
import contents3 from "../../assets/img/contents_event.svg";
import contents4 from "../../assets/img/contents_theme.svg";
import contents5 from "../../assets/img/contents_zenya.svg";
import contents6 from "../../assets/img/contents_koutyou.svg";
import contents7 from "../../assets/img/contents_stamp.svg";
import contents8 from "../../assets/img/contents.svg";
import "./contents.css";
import { Link } from "react-router-dom";
import Header from "../header/headermain";

function Contents() {
    return (
        <div className="background">
            <header className="contents-container">
                <img src={contents3} className="contents-event" />
                <Link to={"/map"}>
                    <img src={contents2} className="router-button" />
                </Link>
                <Link to={`/theme`}>
                    <img src={contents4} className="router-button" />
                </Link>
                <Link to={"/tyui"}>
                    <img src={contents} className="router-button" />
                </Link>
                <Link to={`/zenya`}>
                    <img src={contents5} className="router-button" />
                </Link>
                <Link to={`/koutyou`}>
                    <img src={contents6} className="router-button" />
                </Link>
                <Link to={`/stamp_rally`}>
                    <img src={contents7} className="router-button" />
                </Link>
                <Link to={`/schedule`}>
                    <img src={contents8} className="router-button" />
                </Link>
            </header>
        </div>
    );
}

export default Contents;