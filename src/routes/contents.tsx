import React from "react";
import contents from "../assets/img/contents_tyui.svg";
import contents2 from "../assets/img/contents_map.svg";
import contents3 from "../assets/img/contents_event.svg";
import contents4 from "../assets/img/contents_theme.svg";
import contents5 from "../assets/img/contents_zenya.svg";
import contents6 from "../assets/img/contents_koutyou.svg";
import contents7 from "../assets/img/contents_stamp.svg";
import "./contents.css";
import { Link } from "react-router-dom";
import Header from "./headermain";

function Contents() {
    return (
        <div>
            <header className="background_contents">
                <Link to={"/tyui"}>
                    <img src={contents} className="contents_tyui" />
                </Link>
                <Link to={"/map"}>
                    <img src={contents2} className="contents_map" />
                </Link>
                <Link to={`/theme`}>
                    <img src={contents4} className="contents_theme" />
                </Link>
                <Link to={`/zenya`}>
                    <img src={contents5} className="contents_zenya" />
                </Link>
                <img src={contents3} className="contents_event" />
                <Link to={`/koutyou`}>
                    <img src={contents6} className="contents_koutyou" />
                </Link>
                <Link to={`/stamp_rally`}>
                    <img src={contents7} className="contents_stamp" />
                </Link>
                <Link to={`/schedule`}>
                    <img src={contents7} className="contents_schedule" />
                </Link>
                <img src={contents3} className="contents_event" />
            </header>
            <Header />
        </div>
    );
}

export default Contents;
